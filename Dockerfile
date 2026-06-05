FROM node:24-bookworm-slim

RUN apt-get update && \
apt-get install -y --no-install-recommends \
ffmpeg \
imagemagick \
webp && \
rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json ./

RUN NODE_OPTIONS="--max-old-space-size=400" npm install --no-audit --no-fund

COPY . .

EXPOSE 8000

CMD ["node", "index.js", "--server"]
