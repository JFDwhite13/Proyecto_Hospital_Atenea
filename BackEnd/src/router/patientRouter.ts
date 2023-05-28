import { Router, Request, Response } from 'express';
import Patients from '../controllers/patientController';
/**
 * Se genera clase principal 
 * @author JFDwhite13
 */

class RoutesPatient{
	private router : Router;
	private patients:Patients;
	/**
	 * Se crear constructor de la clase
	 */
	constructor(router:Router){
		this.router = router;
		this.patients = new Patients();
		this.initializeRoutes();
	}
	/**
	 * Se genera funcion para las rutas de los pacientes
	 * @author JFDwhite13
	 * @description Se genera funcion en la cual se establece la ruta y el tipo de peticion para poder realizar la solicitud a la api y luego se exporta como modulo para poderlo agregar al enrutador pricipal
	 */
	private initializeRoutes(){
		this.router.get('/list_allpatients',
			(req:Request,res:Response)=>{this.patients.getallpatients(req,res);});
		this.router.post('/create_patient',
			(req:Request,res:Response)=>{this.patients.createpatient(req,res);});
	}

}

export default RoutesPatient;