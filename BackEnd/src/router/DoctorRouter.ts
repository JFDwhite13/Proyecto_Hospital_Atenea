import { Router,Request,Response } from 'express';
import Doctor from '../controllers/DoctorController';
/**
 * Se genera clase principal 
 * @author JFDwhite13
 */
class RoutesDoctor{
	private router:Router;
	private doctor:Doctor;
	constructor(router:Router){
		this.router= router;
		this.doctor = new Doctor();
		this.inizializeRoutes();
	}
	/**
	 * Se genera funcion para las rutas de los pacientes
	 * @author JFDwhite13
	 * @description Se genera funcion en la cual se establece la ruta y el tipo de peticion para poder realizar la solicitud a la api y luego se exporta como modulo para poderlo agregar al enrutador pricipal
	 */
	private inizializeRoutes(){
		this.router.get('/list_alldoctors',(req:Request,res:Response)=>{
			this.doctor.getalldoctors(res);
		});
		this.router.post('/create_doctor',(req:Request,res:Response)=>{
			this.doctor.createDoctor(req,res);
		});
	}

}
export default RoutesDoctor;