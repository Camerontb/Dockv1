const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./db')

const app = express()
app.use(cors())
app.use(bodyParser.json())


app.post('/EXP', (req,res)=> {
    console.log(req.body)
    // console.log(connection)
    const Vendor =req.body.data.Vendor
    const Total= req.body.data.Total
    
    const ADD_QUERY =  `INSERT INTO Dockit (Vendor, Total) VALUES ('${Vendor}','${Total}')`;

    connection.query(ADD_QUERY,(err)=>{
      if(err)console.log(err)
        
      

      

    })

    
})

// app.get('/table',(req,res)=>{
//   connection.query(`SELECT * FROM Dockit order by id desc limit 2  `, (err, rows, fields, results)=>{
//     if (err) throw err
//     console.log(res)
    
//   })


// })

app.listen(4000,()=>{
  console.log('Running on port 4000')
})
