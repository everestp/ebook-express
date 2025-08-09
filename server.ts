
import app from './src/app'



const startServer = ()=>{
    const port = process.env.PORT ||3000
    
    app.listen(port ,()=>{
        console.log(`The server is listeing http://localhost:${port}`)
    })
}

startServer()

console.log("Welcome to ebook api")