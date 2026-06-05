import * as baileys from '@whiskeysockets/baileys'
import pino from 'pino'
import { existsSync, mkdirSync, writeFileSync } from 'fs'

const makeWASocket = baileys.default
const { useMultiFileAuthState, makeCacheableSignalKeyStore, Browsers, DisconnectReason } = baileys

const PHONE = '558694029686'
const AUTH = './session'

if (!existsSync(AUTH)) mkdirSync(AUTH, { recursive: true })

async function connect() {
  const { state, saveCreds } = await useMultiFileAuthState(AUTH)
  const logger = pino({ level: 'silent' })

  const sock = makeWASocket({
    auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, logger) },
    printQRInTerminal: false,
    logger,
    browser: Browsers.ubuntu('Chrome'),
    syncFullHistory: false,
    getMessage: async () => undefined,
  })

  sock.ev.on('creds.update', saveCreds)

  let codeDone = false

  sock.ev.on('connection.update', async ({ connection, lastDisconnect }) => {
    if (connection === 'open') {
      console.log('WhatsApp conectado!')
      process.exit(0)
    }
    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode
      console.log('Conexao fechada, codigo:', code)
      if (code === DisconnectReason.loggedOut) process.exit(0)
      setTimeout(connect, 3000)
      return
    }
    if (connection === 'connecting' && !codeDone) {
      codeDone = true
      setTimeout(async () => {
        try {
          console.log('Solicitando codigo de emparelhamento para', PHONE, '...')
          const code = await sock.requestPairingCode(PHONE)
          const fmt = code?.match(/.{1,4}/g)?.join('-') || code
          const msg = '\n==============================\nCODIGO_EMPARELHAMENTO: ' + fmt + '\n==============================\n'
          process.stdout.write(msg)
          writeFileSync('./pairing_code.txt', fmt)
          console.log('Aguardando conexao...')
        } catch(e) {
          console.error('Erro ao solicitar codigo:', e.message)
          codeDone = false
        }
      }, 3000)
    }
  })
}

connect()
setTimeout(() => { console.log('Timeout 10min'); process.exit(0) }, 600000)
