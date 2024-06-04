import express from "express"

const app=express()

//@ts-ignore
app.get("/",(req,res)=>{
    
    res.json({
        msg:"app2"

    })
})


app.listen(3001,()=>{
    console.log("app2")
})