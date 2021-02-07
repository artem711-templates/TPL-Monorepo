FROM node:12.10.0

WORKDIR /usr/app

COPY package.json .
RUN npm install
COPY . .
RUN npm run gen

EXPOSE 27017

CMD "npm run nx:start server"