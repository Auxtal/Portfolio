FROM node:18-alpine

COPY . /Portfolio
WORKDIR /Portfolio

RUN npm ci
RUN npm audit fix
RUN npm run build

FROM node:18-alpine
WORKDIR /Portfolio

COPY --from=0 /Portfolio/package*.json ./

RUN npm ci --production --ignore-scripts
RUN npm audit fix

COPY --from=0 /Portfolio/build ./
CMD ["node", "./index.js"]
