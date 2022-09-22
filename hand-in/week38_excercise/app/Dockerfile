FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN npm install
RUN npm i express
CMD ["node", "app.js"]
EXPOSE 3000