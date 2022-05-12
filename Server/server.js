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

console.log(fileStorageEngine)

// Route To Load Index.html page to browser
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// The Multer Middleware that is passed to routes that will receive income requests with file data (multipart/formdata)
// You can create multiple middleware each with a different storage engine config so save different files in different locations on server
const upload = multer({ storage: fileStorageEngine });

// Single File Route Handler
app.post("/single", upload.single("image"), (req, res) => {
  // console.log(req.file);
  console.log(req.file.path)
  res.send("Your file has been uploaded");
});

// app.post("/single",upload.array("images",3),(req,res)=>{
//   console.log(req,file)
//   res.send("single file uploaded")
// })





app.listen(4000,()=>{
  console.log('Running on port 4000')
})


