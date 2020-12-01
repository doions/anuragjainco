const express = require('express')
const app = express()
const port = 8081

app.get('/test', (req, res) => res.sendFile('myty of anurag jain - tech blog destination. article is in progress to get launched on the blog via a bot -myty ver1.0.98.102, this is the machine generated message please ignore it.'))
let abcd = process.cwd();
let filename = abcd+'/index.html';
app.get('/', (req, res) => res.sendFile(filename))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
