
## About This App

This is a react app which allows users to search and save books using a google book API.

## Getting Started 

1. Clone repository. Click on the clone button next to the repository .<br>
2. Open Terminal and git clone (paste) into directory of your choice.<br>
3. Open folder in VS Code.<br>
4.The client directory holds all of the logic connecting the backend to the front.<br>
5.Each component is defined within the components directory.<br>
6.Each of the necessary pages displayed in the browser are defined in the pages directory.<br>
7.the models folder handles the data of the application.<br>
8.The logic for the google books API is held in the controllers directory.<br>
19.The routes folder holds the logic for the routes which receives the user input, validates it and passes it through the models.<br>


## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

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
