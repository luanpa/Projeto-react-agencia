const express = require("express")
const app = express ()
const port = process.env.PORT || 3000;
require("./db/conn")


app.get('/'), (req, res) => {
    re.send("hello from the thapatechnical")
}

app.listen(port, () => {
    console.log(`serve esta rodando na port ${port}`);
})