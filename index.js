const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

//const data = require("./test_data") // importamos data de test
const { usuarios } = require("./dao")
//const { invUser } = require("./util")

/*const PUERTO = process.env.PORT || 4445*/
const PUERTO = 4447

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors()) // politica CORS (cualquier origen) <---- TODO: cuidado!!!
app.use(express.static("assets")) // <-- configuracion de contenido estatico

function lista() {
  app.get("/getUsuarios", async (req, resp) => {
    const listaUsuarios = await usuarios.findAll()
    resp.send(listaUsuarios)
  })
}

app.post("/usuarios", async (req, resp) => {
  const dataRequest = req.body
  const nombre = dataRequest.nombre
  const mate = dataRequest.mate
  const letras = dataRequest.letras

  await turista.create({
    nombre: nombre,
    mate: mate,
    letras: letras
  })

  resp.send({
    confirmar: "Registro exitoso"
  })
})

app.get("/getUsuarios", async (req, resp) => {
  const listaUsuarios = await usuarios.findAll()
  resp.send(listaUsuarios)
})

app.listen(PUERTO, () => {
  console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})