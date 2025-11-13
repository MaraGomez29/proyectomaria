const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "escuela"
});

//login
App.post("/login", (req, res) => {
    const { usuario, contraseña } = req.body;
    db.query("SELECT * FROM usuarios WHERE nombre = ? AND password = ?", [usuario, contraseña], (err, result) => {
        if (err) return res.status(500).json({error:"Error en el servidor"
        });
        if(result.length > 0){
            req.session.usuario = result[0];
            res.json({success: true});
        } else{
            res.json({success: false, error:"Usuario o contraseña incorrecta"
            });
        }
    });
});

//cerrar sesion
App.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).json({massage: "error al cerrar sesion"});
        res.clearCookie("connecr.sid");
        res.json({success: true, message: "Sesion cerrada correctamente"});
    });
});

App.listen(3000, () => console.log("Servidor corriendo en puerto 3001"));