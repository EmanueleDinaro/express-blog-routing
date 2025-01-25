const express = require('express')
const router = express.Router();

//index
router.get('/', (req, res) => {
    res.send('Lista dei post')
})

//show
router.get('/:id', (req, res) => {
    res.send('Dettagli di un post')
})

//store
router.post('/', (req, res) => {
    res.send('Creazione di un post')
})

//update
router.put('/:id', (req, res) => {
    res.send('Modifica totale di un post')
})

//modify
router.patch('/:id', (req, res) => {
    res.send('Modifica parziare di un post')
})

//destroy
router.delete('/:id', (req, res) => {
    res.send('Eliminazione di un post')
})