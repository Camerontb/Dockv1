const express = require('express')
const cors = require ('cors')
const bodyParser = require('body-parser');
const connection = require('./db');


const app = express();
app.use(cors());
app.use(bodyParser.json())


app.post('/EXP', (req,res)=> {
    console.log(req.body)
    console.log(connection)
    const Vendor =req.body.data.Vendor
    const Total= req.body.data.Total
    
    const ADD_QUERY = `INSERT INTO app (vendor) VALUES ('test')`;
    pool.execute(ADD_QUERY,(err)=>{
      if(err)console.log(err)
      else res.send('youve got this')
      res.send('You can add your dockets here')

    })

    
})

app.listen(4000,()=>{
  console.log('Running on port 4000')

})


