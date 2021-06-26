FROM node:15.3.0-alpine3.11

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
