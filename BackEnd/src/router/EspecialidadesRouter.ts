import { Request,Response,Router } from 'express';
import especialidad from '../controllers/EspecialidadesController';

/**
 * Se genera clase principal 
 * @author JFDwhite13
 */
class RoutesEspecialidad{
	private router:Router;
	private especialidad:especialidad;

	constructor(router:Router){
		this.router=router;
		this.especialidad= new especialidad();
		this.inizializeRoutes();
	}
	/**
	 * Se genera funcion para las rutas de los pacientes
	 * @author JFDwhite13
	 * @description Se genera funcion en la cual se establece la ruta y el tipo de peticion para poder realizar la solicitud a la api y luego se exporta como modulo para poderlo agregar al enrutador pricipal
	 */
	private inizializeRoutes(){
		this.router.get('/list_allEspecialidades',
			(req:Request,res:Response)=>{this.especialidad.getAllEspecialidades(res);});
		this.router.get('/list_alldoctors/:id',
			(req:Request,res:Response)=>{this.especialidad.getAllDoctors(req,res);});
	}
}
export default RoutesEspecialidad;