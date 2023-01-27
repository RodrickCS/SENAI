const express = require('express');
const cors = require('cors');

const tarefas = require('./src/routes/tarefasRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/tarefas', tarefas);

app.listen(3000, () => {
    console.log("Respondendo na porta " + 3000);
});