console.log("Holi Maha <3")
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./database")
const app = express();

const port = 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.json({ name: "Maha", edad: 23 })
})

app.get('/maha', async (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, field) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
})

app.post('/maha', async (req, res) => {
    console.log(req.body)
    
    const { name, salary } = req.body;
    mysqlConnection.query('INSERT INTO employees(name,salary) values(?,?)', [name, salary], (err, rows, field) => {
        if (!err) {
            return res.status(200).json({ status: 'Employeed Saved!' })
        } else {
            console.log(err.sqlMessage)
            return res.status(404).json(err)
        }
    })
})

app.delete('/maha/:id', async (req, res) => {
    const id = req.params.id
    
    mysqlConnection.query(`DELETE FROM employees WHERE id=?`, [id], (err, rows, field) => {
        if (!err) {
            if (rows.length === 0) return res.status(204).json({ msg: 'no data' })
            return res.status(201).json({msg:'successfully deleted'})
        } else {
            console.log(err.sqlMessage)
            return res.status(404).json(err)
        }
    })
})

app.listen(port, () => {
    console.log("Servidor en el puerto " + port);
})