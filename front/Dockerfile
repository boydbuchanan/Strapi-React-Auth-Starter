# Build stage
FROM node:latest
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install
COPY . .

ENV NODE_ENV=development
RUN npm run build

# ENV HTTPS=true
# ENV SSL_CRT_FILE=/etc/ssl/CSR.csr
# ENV SSL_KEY_FILE=/etc/ssl/privateKey.key

# EXPOSE 443
EXPOSE 80