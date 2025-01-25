const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Server del mio Blog')
})

//aggiunto tramite la funzione use una nova rotta, postsRouter, trmite l'URI /posts
app.use('/posts', postsRouter)

// app.get('/bacheca', (req, res) => {
//     res.json()
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})