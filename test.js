import fs from 'fs'
import path, {dirname} from 'path'
import assert from 'assert'
import { spawn } from 'child_process'
import syntaxErro from 'syntax-erro'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(__dirname)
let folders = ['.', ...Object.keys(require(path.join(__dirname, './package.json')).directories)]
let files = []
for (let folder of folders)
for (let file of fs.readdirSync(folder).filter((v) => v.endsWith('.js'))) files.push(path.resolve(path.join(folder, file)))
for (let file of files) {
if (file == __filename) continue
console.erro('Checking', file)
const erro = syntaxErro(fs.readFileSync(file, 'utf8'), file, {
sourceType: 'module',
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true
})
if (erro) assert.ok(erro.length < 1, file + '\n\n' + erro)
assert.ok(file)
console.log('Done', file)
}
