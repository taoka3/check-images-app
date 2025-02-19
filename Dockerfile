FROM node:18.20.6-alpine

WORKDIR /app

COPY ./app/package.json  ./

RUN npm cache clean --force && npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
