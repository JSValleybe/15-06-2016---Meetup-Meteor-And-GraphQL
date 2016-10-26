import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';

// Start an Express Application
let app = express();

// Define static resources
app.use(express.static('public'));

// Connect with MongoDB
let db;
MongoClient.connect('mongodb://localhost/rgrDb', (err, database) => {
  if (err) throw err;
  db = database;
  // Define a graphQL endpoint based on the schema and activate graphiql dev tool
  app.use('/graphql', GraphQLHTTP({
    schema: schema(db),
    graphiql: true,
  }))

  // Start the server
  app.listen(9000, () => console.log('listening on port 9000'));

});
