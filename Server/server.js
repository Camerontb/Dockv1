const express = require('express')
const cors = require('cors')
const multer = require("multer")
const bodyParser = require('body-parser')
const connection = require('./db')
// const router = express.router()

const app = express()
app.use(cors())
app.use(bodyParser.json())


app.post('/tre', (req,res)=> {
  console.log(req.body)
  // console.log(connection)
  const Vendor =req.body.data.Vendor
  const Total= req.body.data.Total
  
  const ADD_QUERY =  `INSERT INTO Dockit (Vendor, Total) VALUES ('${Vendor}','${Total}')`;
  const Recieve = `SELECT * from Dockit`;
  connection.query(ADD_QUERY,(err,res)=>{
  })
  connection.query(Recieve,(err,rows)=>{
    if(err)console.log(err)
    console.log(rows)
    
  })
  

  
    
})

app.get('/test',(req,res)=>{
  let sql = ` SELECT * FROM Dockit ORDER BY ID DESC `
  connection.query(sql,(err,result, fields)=>{
      if(err)throw err
  //    console.log(result)
      res.send(result)

  })

})

app.get('/delete',(req,res)=>{
  let sql = ` SELECT * FROM Dockit ORDER BY ID DESC `
  connection.query(sql,(err,result, fields)=>{
      if(err)throw err
  //    console.log(result)
      res.send(result)

  })

})


//FILE UPLOAD. 

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images"); 
  },
  filename: (req, file, cb) => {
    cb(null, (`hello1`) + "--" + file.originalname);
  },
    
  
});




const upload = multer({ storage: fileStorageEngine });

// Single File Route Handler
app.post("/single", upload.single("image"), (req, res, next) => {
  
  console.log(req.file.path)
  res.send("Your file has been uploaded");
});


app.listen(4000,()=>{
  console.log('Running on port 4000')
})


