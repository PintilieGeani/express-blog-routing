// Importo express
import express from "express"
// Importo il mio router
import routerPost from "./router/post.js"

// Invoco la funzione di express
const app = express()

// Dichiato la porta
const port = 3005


// Collego il file al router
app.use("/posts", routerPost);


// Url di base
app.use("/", (req, res) => {
    res.json({
        data: `Sono la pagina principale`
    })
})






// Metto il server in ascolto
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
})