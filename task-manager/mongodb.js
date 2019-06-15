const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Cant connect to databse');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'David',
    //     age: 25
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Cannot inster user');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Matthew', 
    //         age: 25
    //     }, 
    //     {
    //         name: 'John', 
    //         age: 250
    //     }
    // ], (error, result) => {
    //             if(error) {
    //         return console.log('Cannot inster documents');
    //     }

    //     console.log(result.ops);
    // }); 

    db.collection('tasks').insertMany([
        {
            description: 'Shopping',
            completed: false 
        },  
        {
            description: 'eat',
            completed: true 
        },  
        {
            description: 'get gas',
            completed: false 
        },  
    ], (error, result) => {
        if (error) {
            return console.log('Could not insert tasks')
        }

        console.log(result.ops);
    }); 
}); 