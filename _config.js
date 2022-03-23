var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://komenmoringa:@komenmoringa@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://komenmoringa:@komenmoringa@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://komenmoringa:@komenmoringa@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;


//mongodb+srv://komenmoringa:<password>@cluster0.xkbvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
/*

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://komenmoringa:<password>@cluster0.xkbvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/