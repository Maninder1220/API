const express = require(express)
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Keep LEarning and Keep Growing')
})

router.post('/', (req, res, next) => {
    res.send('product is created')
})

module.exports = router