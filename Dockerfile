FROM node:22.11.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

ENV MODEL_URL 'https://storage.googleapis.com/asclepius-mod2024/model.json'

CMD ["node", "src/server.js"]
