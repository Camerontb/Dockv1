const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./db')
const { application } = require('express')

const app=express()

const data = {
    headers:["ID","Vendor","Date","Total"],
    rows:new Array(10).fill(undefined).map(()=>{
        return[
            
        ]
    })
}

app.get("/data",(req,res)=>{
    res.send("Hey Dom")
})

app.listen(4000,()=> console.log("App is running"))