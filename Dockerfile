FROM node:14-alpine3.16
ENV NODE_ENV=production

WORKDIR /app

copy ["package.json", "./"]

run npm install

copy . .

cmd [ "node", "index.js" ]