// require('dotenv').config();
// const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const entregadores = require('./src/routes/entregadoresRoutes');
const pedidos = require('./src/routes/pedidosRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/entregadores', entregadores);
app.use('/pedidos', pedidos);

app.listen(3000, () => {
    console.log("Respondendo na porta " + 3000);
});