
## About This App

This is a react app which allows users to search and save books using a google book API.

## Getting Started 

1. Clone repository. Click on the clone button next to the repository .<br>
2. Open Terminal and git clone (paste) into directory of your choice.<br>
3. Open folder in VS Code.<br>
4. The client directory holds all of the logic connecting the backend to the front.<br>
5. Each component is defined within the components directory.<br>
6. Each of the necessary pages displayed in the browser are defined in the pages directory.<br>
7. The models folder handles the data of the application.<br>
8. The logic for the google books API is held in the controllers directory.<br>
9. The routes folder holds the logic for the routes which receives the user input,<br>
   validates it and passes it through the models.<br>


## Pre-Requisites


**Node - *use this site to install node into your computer: https://nodejs.org/en/download/ *to check if node is installed type node -v into your terminal. If installed it will print the version number on the screen.
** NPM or Yarn (https://www.npmjs.com/) - *Node Package Manager. Use this site to assist in downloading packages or modules.
*Install dependencies using npm install.

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
