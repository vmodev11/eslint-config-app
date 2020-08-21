FROM node:12.18-alpine
WORKDIR /usr/app
COPY package.json yarn.lock ecosystem-production.json ./

RUN npm install pm2 -g
RUN yarn install --production \
  && yarn cache clean

COPY ./dist ./dist
EXPOSE 3400
ENTRYPOINT [ "pm2-runtime","start","ecosystem-production.json" ]