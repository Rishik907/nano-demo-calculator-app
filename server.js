const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

//value check

app.get("/books",async (request,response)=>{
    console.log("Hello world");
})

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('');
});

baseRouter.post('/add', (req, res) => {
    res.json({ "": null });
});


//Hellow world


baseRouter.post('/subtract', (req, res) => {
    res.json({ "": null });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});