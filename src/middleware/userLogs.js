const fs = require('fs');
const path = require('path');

const userLogs = (req,res,next) => {
    const rutaArchivo = path.join(__dirname,'..','logs','userLogs.txt');
    fs.appendFileSync(rutaArchivo,`El usuario ingresó a la ruta: ${req.url} con el método http de: ${req.method} 
    `);
    next();
};

module.exports = userLogs