import {MongoClient} from 'mongodb';

var insertDocuments = function(db, callback) {
  db.collection('links').insert([
    {
      'title' : 'Hogent',
      'url' : 'http://www.hogent.be',
    },
    {
      'title' : 'React',
      'url' : 'http://www.react.com',
    },
    {
      'title' : 'coderfaction',
      'url' : 'http://www.coderfaction.com',
    },

  ], function(err, result) {
    console.log('Inserted a document into the restaurants collection.');
    callback();
  });
};

MongoClient.connect('mongodb://localhost/rgrDb', (err, database) => {
  if (err) throw err;
  insertDocuments(database, function() {
      database.close();
  });
});
