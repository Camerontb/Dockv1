const express = require ('express')
const cors = require ('cors')

const app = express ();

app.use(cors())

app.get('/handleSubmit',(req,res)=>{
    res.send('List of vendor')
})

app.listen(4000, ()=>{
    console.log('running on port 4000')
})

