const express = require("express")
const app = express()

app.get('/*', (req, res) => res.send("<p><b>Bot is alive!</b></p>"))

app.listen("3000", () => console.log(`Express app running on port 3000`))