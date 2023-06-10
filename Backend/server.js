const expresss = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = expresss()
app.use(cors());
app.use(expresss.json());


const db= mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'myform'
})

app.post('/myform', (req,res) =>{
    const sql = "INSERT INTO form (`name`, `phone`, `email`, `message`)  Values (?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.message,
    ]

    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})



app.listen(8081, ()=>{
    
    console.log("server is running on port 8081");
})