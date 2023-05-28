import  SwaggerUi from 'swagger-ui-express';
import express,{Application,Request,Response,NextFunction} from 'express';
import { swaggerSpec } from './swagger.config';
import RoutesPatient from './router/patientRouter';
import RoutesDoctor from './router/DoctorRouter';
import RoutesCita from './router/CitaRouter';
import RoutesEspecialidad from './router/EspecialidadesRouter';

/**
 * Clase Principal de la api, Se definen las rutas de la Api
 * 
 * @author JFDWHITE13
 * @description Clase inicial de la api donde se manejan las rutas
 */

class App{
	public app:Application;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private server:any;

	constructor(){
		this.app=express();
		this.app.use(express.json());
		this.app.use('/api-docs',SwaggerUi.serve,SwaggerUi.setup(swaggerSpec));
		/**Se configura cors para permitir peticioner de cualquier origen @author JFDWHITE13 */
		this.app.use((req: Request, res: Response, next: NextFunction) => {
			res.header('Access-Control-Allow-Origin', '*'); 
			res.header('Access-Control-Allow-Methods', 'GET, POST'); 
			res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 

			if (req.method === 'OPTIONS') {
				res.sendStatus(200);
			} else {
				next();
			}
		});
		this.Routes();

	}
	/** se crea funcion routes para manejar todos los routes de la api @author JFDWHITE13*/
	private Routes():void{
		const router = express.Router();
		/**
		 * se agrefa a enrutar principal por medio de el metodo Router de Express el cual permite organizar y definir las rutas de la aplicacion de manera moodular 
		 * @author JFDWHITE13
		 */
		new RoutesPatient(router); // Agrega RoutesPatient al enrutador principal
		new RoutesDoctor(router);
		new RoutesCita(router);
		new RoutesEspecialidad(router);
		this.app.use('/', router);
	}

	public start():void{
		/**
		 * Se crea funcion que puede Iniciar el servidor para escuchar peticiones 
		 */
		const port = 3005;
		this.server= this.app.listen(
			port,
			()=>{console.log(`Server started in port ${port}`);
			}
		);
	}

	public close():void{
		this.server.close();
	}
}

export default App;