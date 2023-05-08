
npx create-strapi-app@latest cms --ts --quickstart

cd cms

npx @strapi-community/dockerize

docker-compose up --build

# nginx setup
https://www.gyanblog.com/strapi/how-deploy-strapi-nextjs-nginx-proxy-url-redirect-docker/