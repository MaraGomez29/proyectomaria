const express = require('express');
const mysql2 = require ('mysql2');
const cors = require ("cors");
const session = require ("express-session");
const app =express();
app.use(express.json());

const conecction = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "190320",
    database: "login",
});

app.use( cors({
    origin:"http://localhost:5173",
    credentials: true
}));

app.use(session({
    secret:"mi-secreto",
    resave: false,
    cookie:{ secure:false }
}));

connection.connect((err)=>{
    if(err){
        console.error("error al conectar:", err);
        return;
    }
    console.log("conectado a mi mysql");
})

app.post("/reqistrarse", (req, res)=>{
    const{idPersona,Nombre,Contraseña}= req.body;
    console.log("id",idPersonas)
    const sql= "INSET INTO personas(idPersonas,Nombre,Contraseña) VALUES (?,?,?)";
    connection.query(sql, [idPersonas, Nombre, Contraseña], (err, results) => {
        if (err)
            return res.status(500).send("error al insertar la cuenta");
         res.status(201).json({
            mensaje: "Cuenta agregada",
            personas: { idPersonas, Nombre, Contraseña }
        });
    });
});

app.post("/persona",(req,res)=>{
    const { Nombre, Contraseña } = req. body;
    console. log("Nombre: ", req.body.Nombre);
    console. log("Contraseña: ", req.body.Contraseña);
    const sql = "SELECT * FROM personas WHERE Nombre =? AND Contraseña =?";
    connection . query(sql, [Nombre, Contraseña], (err, results) => {
        console.log("result: ", results);
          if (err)
            return res.status(500).send("No se pudo iniciar sesion");
        console.log("results", results)
        if (results.length > 0) {
            res.status(201).json({ mensaje: "Se inicio sesion", personas: { Nombre, Contraseña
            
        }
        else{
            res.send("Este usuario no existe");
        }
    });
});
});


app.post("/logout", (req,res)=>{
    req.session.destroy((err)=>{
        if(err) return res.status(500).json({message:"error al cerrar sesion"})
        res.clearCookie("connect.sid");
        res.json({ success: true, message: "sesion cerrada correctamente"});
    });
})

app.listen(3000, ()=> {
    console.log("servidor corriendo en http://localhost:3000");
})
