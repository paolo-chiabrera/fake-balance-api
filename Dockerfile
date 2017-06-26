FROM node:8-alpine

ENV NODE_ENV production

RUN mkdir -p /opt/app

COPY . /opt/app

WORKDIR /opt/app

RUN npm install -g nodemon

RUN npm install

CMD ["npm", "start"]
