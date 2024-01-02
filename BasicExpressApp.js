const express = require("express")
const app = express()               // The variable `app` is an instance of the Express() application

const PORT = 3000

const ProductRoute = require('./routes/Product.route')
app.use('/products', ProductRoute)



app.listen(PORT, () => {
    console.log("Hie I m Listening on " + PORT)
})