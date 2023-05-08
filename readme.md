# Install Dependencies

1. Clone the repository
2. Install Node.js
3. Install Docker Desktop

# Setup Localhost
Edit hosts with Admin Privileges

`C:\Windows\System32\drivers\etc\hosts`

Run npm install on Front/CMS to develop locally

# Generate Keys

Run Keys Powershell script in nginx/ssl folder

```azurepowershell
cd .\nginx\ssl\
 .\keys.ps1
```
This generates a CSR.csr and privateKey.key in the appropriate directory. Running this script from root directory will not place them in the correct directory according to the docker compose file.

# Run Docker Compose

docker-compose up

# Docker Commands

Compose Up with Rebuild

`docker-compose up --build`

Docker Down with Cleanup

`docker-compose down -v`

# Setup Social Providers

Navigate to Providers in Strapi

1. Enable Google Provider @ https://localhost/cms/admin/settings/users-permissions/providers
1. Set redirect URL to your front-end app to https://localhost/auth/callback/google

Goto Google Dev Console : https://console.cloud.google.com/welcome

1. Create or select project
1. Create Google Consent Screen: https://console.cloud.google.com/apis/credentials/consent
1. Create Credentials
1. Add callback url: https://localhost/cms/api/connect/google/callback
1. Copy ClientId, Client Secret to Strap Provider Settings

# Login Flow

1. Navigate to https://localhost/
1. Google Button => https://localhost/cms/api/connect/google
1. NGINX Reroutes to Strapi @ http://localhost:1337/api/connect/google
1. Strapi redirects to Google Consent Screen
1. Google Redirects to Strapi at https://localhost/cms/api/connect/google/callback
1. NGINX reroutes to http://localhost:1337/api/connect/google/callback
1. Strapi redirects to https://localhost/auth/callback/google
1. Front-end app queries: https://localhost/cms/api/auth/google/callback