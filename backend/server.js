/////////////////////////
// DEPENDENCIES
/////////////////////////
const express = require("express")
const PORT = process.env.PORT || 4000

/////////////////////////
// The Application Object
/////////////////////////
const app = express()


/////////////////////////
// Routes
/////////////////////////

// home route that says "hello world" to test server is working
app.get("/", (req, res) => {
    //res.json let's us send a response as JSON data
    res.json({
        response: "Hello World"
    })
})

/////////////////////////
// Listener
/////////////////////////
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))