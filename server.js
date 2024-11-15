const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html',));
});

const PORT = 3001;

app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render(index)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});