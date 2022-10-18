# NodeAppOnAzure

Deploy NodeJS application on Azure.  
https://nodeapponazure.azurewebsites.net/

`URL:3000` will show books
`URL:3000/admin` will add books to Cosmos DB

## Dev Environment

- Install NodeJS.
- Install dependencies: `npm install`
- Start the app: `npm start`
- Start the app in dev mode: `npm run dev`

## Setup Node App on Azure

- Dashboard > App Services > Create Web App

  - Name: NodeAppOnAzure.azurewebsites.net
  - Code
  - Runtime: Node 18 LTS
  - OS: Linux
  - App Service Plan: Free F1 (1GB Memory)
  - Monitoring: Enable Application Insights: true

- Dashboard > NodeAppOnAzure > Deployment Center

  - Source: GitHub

- Dashboard > NodeAppOnAzure > Settings
  - Configuration > Application Settings > + New Application Setting >
    - Name: TITLE
    - Value: 'Node App In the Cloud'

## Setup Cosmos DB on Azure

- Dashboard > Azure Cosmos DB > Azure Cosmos DB for MongoDB
  - Instance Name: node-app-on-azure-db
  - node-app-on-azure-db > Quick Start => ConnectionString
  - node-app-on-azure-db > Networking => Restrict Access of DB

## Packages

- env: https://github.com/motdotla/dotenv
- mongodb: https://www.npmjs.com/package/mongodb
