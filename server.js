const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path")
const PORT = process.env.PORT || 8080;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
<<<<<<< HEAD
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://stelios:2109525789Kk9@ds335678.mlab.com:35678/heroku_b13hcljw",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

=======
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books",{
  useUnifiedTopology: true,
  useNewUrlParser: true
 });
 
 
>>>>>>> 0b07a933900a6a027e83becc03e49603740531ea
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
