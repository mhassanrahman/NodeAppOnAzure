# NodeAppOnAzure

Deploy NodeJS application on Azure

# Dev Environment

- Install NodeJS.
- Install dependencies: `npm install`
- Run the project on mac-OS by `DEBUG=nodeapponazure:* & npm start`
- Run the project on Windows by `SET DEBUG=nodeapponazure:* & npm start` (Make sure you select command-prompt)

# Setup Node App on Azure

- Dashboard > App Services > Create Web App

  - Name: NodeAppOnAzure.azurewebsites.net
  - Code
  - Runtime: Node 18 LTS
  - OS: Linux
  - App Service Plan: Free F1 (1GB Memory)
  - Monitoring: Enable Application Insights: true

- Dashboard > NodeAppOnAzure > Deployment Center

  - Source: GitHub

# Packages

- Use ENV variables: https://github.com/motdotla/dotenv
