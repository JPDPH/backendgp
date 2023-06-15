const { Sequelize, DataTypes } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>


const CADENA_CONEXION = /*process.env.DATABASE_URL ||*/
  "postgresql://postgres:JvWbcaUioTcpjQbseUFV@containers-us-west-76.railway.app:7069/railway"

const sequelize = new Sequelize(CADENA_CONEXION)

const usuarios = sequelize.define("usuarios", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  nombre: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  mate: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  letras: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = { usuarios }