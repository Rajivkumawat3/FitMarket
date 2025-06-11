FROM node:18-alpine3.19

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .         

EXPOSE 5988

CMD ["npm", "run", "dev"]
