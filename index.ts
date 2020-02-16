import Server from "./Clases/server";
import { SERVER_PORT } from "./global/environment";
import { router } from "./routes/router";
import cors from 'cors';


const bodyParser = require('body-parser');
const server = new Server();



//bodyparser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//cors
server.app.use(cors({origin:true, credentials:true }));

//rutas de servicios
server.app.use('/', router);

server.start(() => {
    console.log(`servidor corriendo ${SERVER_PORT}`);
})