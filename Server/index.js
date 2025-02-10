const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const port = 8000;

let users = []
let counter = 1;

//path = / Get / Users
app.get('/users', (req,res) => {
    res.json(users);
})

// path = POST / User
app.post('/user', (req,res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user
    })
})

// path = PUT / user/:id
app.put('/user/:id', (req,res) => {
    let id = req.params.id;
    let updateUser = req.body;
    // find users from id request
    let selectedIndex = users.findIndex(user => user.id == id)
    // update user 
    if (updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname
    }
    if (updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname
    }

    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname

    res.json({
        message: 'User updated successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    // sent user info in update to where it belongs
    /* 
    GET / USERS = get all users
    POST / USERS = create new user in data
    GET /users/:id = get user by id
    PUT /users/:id = get user by id
    */
})

// Path = DELETE / user/:id
app.delete('/user/:id', (req,res) => {
    let id = req.params.id;
    // find index of user
    let selectedIndex = users.findIndex(user => user.id == id)
    
    users.splice(selectedIndex,1)
    delete users[selectedIndex]
    res.json({
        message: 'Delete Completed',
        indexDelete: selectedIndex
    });
});

app.listen(port, (req,res) => {
    console.log(`Server is running on port`+ port);
});