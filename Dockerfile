FROM node:18-alpine

COPY . /Portfolio
WORKDIR /Portfolio

RUN npm install
RUN npm run build

CMD [ "node", "./build/index.js" ]
