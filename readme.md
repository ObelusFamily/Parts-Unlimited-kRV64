# Welcome to the Parts Unlimited repo

## Setting up your local environment

1. Install Node.js v15 and its compatible npm version. Our client app currently does not support Node.js v16 due to node-sass. You can install Node.js v15 using two ways:
   
    1. Download it directly from Node downloads [here](https://nodejs.org/en/download/)
       
    2. Use [nvm](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions locally on your machine and switch between them.
   
1. Install `yarn` globally by running:

    ```shell
   npm install yarn -g
   ```

1. Install Node dependencies for the root folder, `frontend` and `backend` apps, buy running following commands one by one from the project's root:

   ```shell
   yarn install
   cd backend
   yarn install
   cd ../frontend
   yarn install
   ```

1. Install MongoDB Community by visiting [MongoDB download page](https://www.mongodb.com/try/download/community). 

1. Add `.env` to your `backend` app with `MONGODB_URI` environment variable by running the following command from the root folder:

   ```shell
   echo "MONGODB_URI=mongodb://localhost:27017" >> ./backend/.env
   ```
   
   Note: if your local MongoDB configured to a different port, make sure to change the port in the command above.

1. Start the backend service by running `cd backend && yarn start`

1. Start the frontend app by running `cd frontend && PORT=8080 yarn start`

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@janesmithwilco` as reviewer.
