FROM node:alpine

WORKDIR /usr/src/app

RUN mkdir mnt

COPY package.json package.json

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["./node_modules/nodemon/bin/nodemon.js","app"]
