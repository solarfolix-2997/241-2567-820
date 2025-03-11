const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
const port = 8000;

let users = []
let conn = null

/* 
GET    /users สำหรับ get user ทั้งหมด
POST   /users = สำหรับ new user ใหม่บันทึกลงเข้าไป
GET    /users/:id = สำหรับ get user รายคนที่ต้องการดู
PUT    /users/:id = สำหรับ update user รายคนที่ต้องการบันทึกลงเข้าไป
DELETE / user/:id = สำหรับ delete user รายคนที่ต้องการลบออกไป
*/

const initMySQL = async () => {
    conn = await mysql.createConnection({
        host:'localhost',
        user:     'root',  
        password: 'root',
        database: 'webdb',
        port: 8830
    })
}

const validateData = (userData) => {
    let errors = []
    if (!userData.firstname) {
        errors.push('กรุณากรอกชื่อ')
    }
    if (!userData.lastname) {
        errors.push('กรุณากรอกนามสกุล')
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ')
    }
    if (!userData.gender) {
        errors.push('กรุณากรอกเพศ')
    }
    if (!userData.interests) {
        errors.push('กรุณากรอกความสนใจ')
    }
    if (!userData.description) {
        errors.push('กรุณากรอกช้อมูลตัวเอง')
    }
    return errors
}

// Path = GET /users สำหรับ get user ทั้งหมด
app.get('/users', async (req,res) => {
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0])
})

// path = POST / User
app.post('/users', async (req,res) => {
    try{
        let user = req.body;
        const errors = validateData(user)
        if(errors.length > 0 ) {
        throw {
            message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
            errors: errors}
        }

        const results = await conn.query('INSERT INTO users SET ?', user)
        res.json({
            message: 'User created',
            data: results[0]
        })
    } catch (error){
        const errorMessage = error.message || 'Something went wrong'
        const errors = error.errors || []
        console.error('errorMessage', error.message)
        res.status(500).json({
            message: errorMessage,
            errors: errors
        })
    }
})

// path = PUT / user/:id
app.put('/users/:id', async (req,res) => {
    try{
        let id = req.params.id;
        let updateUser = req.body;
        const results = await conn.query(
            'UPDATE users SET ? WHERE id = ?', 
            [updateUser, id]
        )
        res.json({
            message: 'Update User Completed',
            data: results[0]
        })
    } catch (error){
        console.error('errorMessage', error.message)
        res.status(500).json({
            message: "Something went wrong",
            errorMessage: error.message
        })
    }
})

// Path = GET /users/:id
app.get('/users/:id',async (req,res) => {
    try{
    let id = req.params.id;
    const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
    if(results[0].length == 0){
        throw {statusCode: 404, message: 'User not found'}
    }
    res.json(results[0][0])
} catch (error){
    console.error('errorMessage', error.message)
    let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: "Something went wrong",
            errorMessage: error.message
        })
    }
});

// Path = DELETE / user/:id
app.delete('/users/:id', async(req,res) => {
    try{
        let id = req.params.id;
        const results = await conn.query('DELETE from users WHERE id = ?', id)
        res.json({
            message: 'Delete User Completed',
            data: results[0]
        })
    } catch (error){
        console.error('errorMessage', error.message)
        res.status(500).json({
            message: "Something went wrong",
            errorMessage: error.message
        })
    }
});

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on port`+ port);
});