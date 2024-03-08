FROM node:19-alpine

RUN mkdir -p /home/usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /home/usr/src/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

CMD ["node", "app.js"]