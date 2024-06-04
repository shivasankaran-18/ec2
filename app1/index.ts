import express from "express"

const app=express()

//@ts-ignore
app.get("/",(req,res)=>{
    
    res.json({
        msg:"app1"

    })
})


app.listen(3000,()=>{
    console.log("app2")
})