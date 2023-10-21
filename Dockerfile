FROM node:18-alpine
WORKDIR /app
COPY ./public /app
COPY ./package*.json /app
COPY ./src /app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]