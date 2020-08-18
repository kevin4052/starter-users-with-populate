const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/blog-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(x => console.log(`Successfully connected to the database ${x.connections[0].name}`))
  .catch(error => {
    console.error(`An error ocurred trying to connect to the database: `, error);
    process.exit(1);
  });
