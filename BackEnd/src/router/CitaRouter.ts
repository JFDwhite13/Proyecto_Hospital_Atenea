import { Request,Response,Router } from 'express';
import Cita from '../controllers/CitaController';
/**
 * Se genera clase principal 
 * @author JFDwhite13
 */
class RoutesCita{
	private router:Router;
	private cita:Cita;

	constructor(router:Router){
		this.router=router;
		this.cita= new Cita;
		this.inizializeRoutes();
	}
	/**
	 * Se genera funcion para las rutas de los pacientes
	 * @author JFDwhite13
	 * @description Se genera funcion en la cual se establece la ruta y el tipo de peticion para poder realizar la solicitud a la api y luego se exporta como modulo para poderlo agregar al enrutador pricipal
	 */
	private inizializeRoutes(){
		this.router.get('/list_allcitas',
			(req:Request,res:Response)=>{this.cita.getAllcitas(res);});
		this.router.post('/create_cita',
			(req:Request,res:Response)=>{this.cita.createCita(req,res);});
	}
}
export default RoutesCita;