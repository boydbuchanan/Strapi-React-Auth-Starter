# Setup Localhost
Edit hosts with Admin Privileges

`C:\Windows\System32\drivers\etc\hosts`

You should see a mapping for host.docker.internal, use this ip address or verify with a ping command.

`ping host.docker.internal`

Use the ip address of host.docker.internal to redirect localhost with

`127.###.###.### localhost`


# Install Strapi

Install Strapi
`npx create-strapi-app@latest strapi --ts`

Initialize Strapi
1. `cd strapi`
1. `npm install`
1. `npx @strapi-community/dockerize`

# Prepare For Docker-Compose

Copy env to root for docker-compose
`cd ..`
1. `Remove-Item -Path .env`
1. `Move-Item -Path strapi\.env -Destination .env`

Generate local development keys with
`
.\nginx\certs\keys.ps1
.\nginx\certs\keygen.sh
`

# Docker Compose Updates
Docker compose has already updated, but at this volumes were updated to include strapi folder

```dockerfile
- ./config:/opt/app/config
- .**/strapi**/config:/opt/app/config
```

```dockerfile
    build:
      context: ./strapi
      dockerfile: Dockerfile
```
# Edit Hosts

## Windows users
Open with admin
`C:\Windows\System32\drivers\etc\hosts`

Find the line for gateway.docker.internal, copy the ip address
`10.0.0.XXX gateway.docker.internal`

Add these lines with ip address to redirect these urls to your docker container
`
10.0.0.XXX ui.localdev.com
10.0.0.XXX cms.localdev.com
`
