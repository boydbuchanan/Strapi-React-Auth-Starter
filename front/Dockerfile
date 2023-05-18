# Build stage
FROM node:latest
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install
COPY . .

RUN npm run build

EXPOSE 80
EXPOSE 3000