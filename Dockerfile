FROM node:20-alpine3.19

WORKDIR /app

COPY package.json .

COPY ./prisma ./app/prisma

RUN npm install

COPY . .

RUN npm run build

# RUN npx prisma migrate deploy

RUN npx prisma generate

EXPOSE 5000

CMD [ "npm","run","start"]