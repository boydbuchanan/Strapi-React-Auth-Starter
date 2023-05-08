# Install steps to get to this point

npx create-strapi-app@latest cms --ts --quickstart

cd cms

npm install

npx @strapi-community/dockerize

## After strapi is installed and dockerized

The docker-compose parts were copied to the parent compose file & the build context was updated.

# Create default react app

https://react.dev/learn/start-a-new-react-project


# Next is nginx setup
https://www.gyanblog.com/strapi/how-deploy-strapi-nextjs-nginx-proxy-url-redirect-docker/
https://docs.strapi.io/dev-docs/deployment/nginx-proxy



# Update Strapi server.js

url: env('', 'https://localhost/cms'),

# Auth Callback Example
https://www.manuelkruisz.com/blog/posts/strapi-react-google-authentication-provider
