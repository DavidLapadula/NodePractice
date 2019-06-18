const { MongoClient, ObjectID } = require('mongodb');

const id = new ObjectID();

// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString().length);

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Cant connect to databse');
    }

    const db = client.db(databaseName);

    // Instertions

    db.collection('users').insertOne({
        _id: id, 
        name: 'Serge',
        age: 25
    }, (error, result) => {
        if(error) {
            return console.log('Cannot inster user');
        }

        console.log(result.ops);
    });

    db.collection('users').insertMany([
        {
            name: 'Matthew', 
            age: 25
        }, 
        {
            name: 'John', 
            age: 250
        }
    ], (error, result) => {
                if(error) {
            return console.log('Cannot inster documents');
        }

        console.log(result.ops);
    }); 

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

    // Fetching data

    db.collection('users').findOne({
        name: 'David', 
        age: 8
    }, (error, user) => {
        if (error) {
            return console.log('Error');
        }; 

        console.log(user);

    }); 

    db.collection('users').find({
        age: 25
    }).toArray( (error, user) => {
        if (error) {
            return console.log('Error');
        }; 

        console.log(user);

    }); 

    db.collection('users').find({
        age: 25
    }).count( (error, user) => {
        if (error) {
            return console.log('Error');
        }; 

        console.log(user);

    });


    // Updating documents

    const updatePromise = db.collection('users').updateOne({
        name: 'David'
    }, {
            $set: {
                name: 'John'
            }
        });

    updatePromise
        .then((res) => {
            console.log('res', res);
        })
        .catch((err) => {
            console.log('There was an error');
        });

    const updatePromiseMany = db.collection('tasks').updateMany({
        completed: false
    }, {
            $set: {
                completed: true
            }
        });

    updatePromiseMany
        .then((res) => {
            console.log('res', res);
        })
        .catch((err) => {
            console.log('There was an error');
        });

    // Deleting Documents
    db.collection('tasks').deleteOne({
            task: 'Clean Garbage'
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        }); 
}); 