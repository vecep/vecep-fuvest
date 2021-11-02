# Welcome to our backend!

Before doing anything, run the following command on the server base directory `'vecep-fuvest/server'`:

```
$ npm install
```

## Decrypting keys
All our keys are encrypted. You can run the `decrypt.sh` script, located on the `/scripts` folder, in order to have access to our credentials. you may need to ask one of our team members to get the required password.

| p.s: remember to encrypt pending changes before committing them.  

## Setting up the database (local)
If you are to run the project locally, it may be necessary to both setup and populate a MySQL database on your machine.

1. **db-migrate** package is essential for running database migrations and seeds:

```
$ npm i -g db-migrate
```

2. Make sure you have MySQL properly installed on your machine.
3. Ensure that you have a **root** user with a password settled up.
4. You may need to adapt `'database.json'` file accordingly to your database config.
5. Finally, in order to create our database and its tables, as well as populate it with some data, run:

```
$ npm run redo-db
```

## Running the server
Without **hot-reload**:

```
npm run start
```

With **hot-reload** (Nodemon):

```
npm run startDev
```

## Integration with CloudinaryAPI
So CloudinaryAPI can communicate with our system (saving, retrieving and deleting images), you may need to ask one of our team members to get the required credentials. With that in hand, create a `.env` file on the `src` folder and paste the keys on it.
