// utliza express y debe cargarse en el teminal como npm install express
const { json } = require("express");
const express = require("express");
const app = express();
// se llama con el localhost:8000
const port = 8000;
// se emplea solo para post, push, delete, en el caso de get no se utiliza
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// pwermite que el servidor lea las carpetas estarticas de acceso publico
app.use(express.static(__dirname + "/public"));
// permite qie el servisdor acceda a las carpetas de vistas (views)
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

// llamada con definicion de ruta e identifica la salida que puede ser un json res.json (nombre variable o constante definida como objeto o arreglo), un html res.send (deifinido como descripcion de html) o un archivo ejs res.render (nombre archivo, sin extension)
app.get( "/cars",(req,res)=>{
   res.render('autos');
});

app.get( "/cat",(req,res)=>{
   res.render('gatos');
});
app.get( "/form",(req,res)=>{
    res.render('formulario');
 });
 app.get( "/index",(req,res)=>{
    res.render('index');
 });
 app.get("/cat/new", (req,res)=>{
    res.render('form');
 });





app.listen( port, () => console.log(`Listening on port: ${port}`) );