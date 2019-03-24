//============================
//         PUERTO
//============================

process.env.PORT = process.env.PORT || 3000;

//============================
//         ENTORNO
//============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//============================
//    BASE DE DATOS
//============================
let urlDB;

//if ( process.env.NODE_ENV === 'dev') {

//    urlDB = 'mongodb://localhost:27017/cafe' 

//} else {

    urlDB = 'mongodb+srv://cafecito:cj2004@cafe-qqz0z.mongodb.net/test?retryWrites=true'

//}
process.env.URLDB = urlDB;


