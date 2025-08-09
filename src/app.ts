import express from 'express'

const app = express()

app.get('/' ,(req ,res,next)=>{
res.json({message :"Welcome to the ebook api"})
})

export default app