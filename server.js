 import express from 'express'
	 const app = express()
	const port = process.env.PORT || 8080
    app.use(express.static("frontend"))
 
	app.listen(port, function(){
console.log("my app is running at http://localhost:"+port)
})// alert("hello from js")
export const users = [
    {
        "name": "Jonn Doe",
        "gender": "Male",
        "image": "john.png"
    },
    {
        "name": "Jane Doe",
        "gender": "Feale",
        "image": "jane.png"
    }
];

