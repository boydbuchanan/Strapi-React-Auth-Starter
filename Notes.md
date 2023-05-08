# Install steps to get to this point

npx create-strapi-app@latest cms --ts --quickstart

cd cms

npx @strapi-community/dockerize

# nginx setup
https://www.gyanblog.com/strapi/how-deploy-strapi-nextjs-nginx-proxy-url-redirect-docker/
https://docs.strapi.io/dev-docs/deployment/nginx-proxy

# Update Strapi server.js

url: env('', 'https://localhost/cms'),

# Auth Callback Example
https://www.manuelkruisz.com/blog/posts/strapi-react-google-authentication-provider
