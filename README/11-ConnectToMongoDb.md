1. create mongodb database

2. npm install dotenv mongoose @typegoose/typegoose

3. put mongodb uri in .env
   MONGODB_URI=mongodb://localhost/tsmernamazona

4. In index.ts

   1. import dotenv to excees .env file
   2. ```js
      dotenv.config();

      const MONGODB_URI =
        process.env.MONGODB_URI || 'mongodb://localhost/ihababoudargham78';
      mongoose.set('strictQuery', true); // by having this option set to true, Mongoose will throw an error if the query does not match the schema qnd prevent deprecation warnings. Deprecation warning are warning due to the fact that Mongoose 7 will no longer support the use of findOneAndUpdate() and findOneAndDelete() without the use of the options object.
      mongoose
        .connect(MONGODB_URI)
        .then(() => {
          console.log('connected to mongodb');
        })
        .catch(() => {
          console.log('error mongodb');
        });
      ```
