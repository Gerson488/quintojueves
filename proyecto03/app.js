const express = require('express')
const app = express()
const path = require('path')

const connection = require('./database/connection')
const morgan = require('morgan')

const userLogin = require('./middlewares/userLogin')
const userRouter = require('./routers/userRouters')
const reviewRouter = require('./routers/reviewRouters')
const productRouter = require('./routers/productRouters') 


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    const data = {
        "title": "titulo de la pagina",
        "message": "bienvenido a mi sitio WEB",
        "showMessage": true,
        "items": [1, 2, 3, 4, 5]
    }
    res.render('index', data);
})


app.use(userLogin)
app.use(morgan('dev'))
app.use(express.json())


app.use('/users', userRouter)
app.use('/reviews', reviewRouter)
app.use('/products', productRouter) 


connection
    .then(() => {
        app.listen(3000, () => {
            console.log('Base de datos conectada.');
            console.log('Aplicacion con express ejecutandose en el puerto 3000');
        });
    })
    .catch(error => {
        console.error('Error al conectar la base de datos. Servidor NO iniciado.', error);
        process.exit(1);
    });