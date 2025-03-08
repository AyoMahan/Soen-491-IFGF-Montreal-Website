FROM node:22

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

ENV PORT=5173

EXPOSE 5173

CMD ["npm", "start"]