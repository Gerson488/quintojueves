const jwt = require('jsonwebtoken');
const JWT_SECRET = "secret-key"; 

exports.verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        // CRÍTICO: Usar 'return'
        return res.status(401).json({ error: "Token no enviado" });
    }

    try {
        const token = authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({ error: "Formato de token inválido (se esperaba 'Bearer token')" });
        }
        
        req.user = jwt.verify(token, JWT_SECRET); 
        
        next();

    } catch (error) {
        // CRÍTICO: Usar 'return'
        return res.status(403).json({ error: "Token inválido o expirado" });
    }
};