/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request,Response } from 'express';
import { PrismaClient } from '@prisma/client';

/**
 * Se genera clase principal 
 * @author JFDwhite13
 */
class Cita{
	private prismaClient:PrismaClient;

	constructor(){
		this.prismaClient = new PrismaClient();
	}
	/**
	 * Se genera funcion para obtener todas las citas registradas en la base de datos 
	 * @param res se envia respuesta con todas las citas disponibles
	 * @author JFDwhite13
	 */
	async getAllcitas(res:Response){
		try{
			const Citas =await this.prismaClient.cita.findMany({
				include:{Paciente:{select:{name:true,lastname:true}},Doctor:{select:{name:true,lastname:true}},Especialidad:{select:{name:true}}}
			});
			const mapCitas = Citas.map(item=>({
				idcita:item.idcita,
				idpaciente: item.pacienteId?.toString,
				patientname:item.Paciente?.name,
				patientlastname: item.Paciente?.lastname,
				doctorname:item.Doctor?.name,
				doctorlastname:item.Doctor?.lastname,
				especialidad:item.Especialidad?.name
			}));
			res.json(mapCitas);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}catch(e:any){
			res.status(500).json({error:e.message});
		}
	}
	/**
	 * se genera funcion para poder crear una cita medica por medio de prisma con la informacion enviada por parte del usuario
	 * @param req Se recibe y procesa informacion que proviene de el body
	 * @param res se envia respuesta por parte de servidor
	 * @author JFDwhite13
	 */
	async createCita(req:Request,res:Response){
		try{
			console.log('se accedio a la ruta crear cita');
			const{
				doctorIdcardn,
				pacienteIdn
			}=req.body;
			const doctorIdcard = Number(doctorIdcardn);
			const pacienteId = Number(pacienteIdn);
			const doctor= await this.prismaClient.doctor.findUnique({
				where:{idcard:doctorIdcard}
			});

			const cita =await this.prismaClient.cita.create({data:{
				idespecialidad:doctor?.especialidadId,
				doctorIdcard,
				pacienteId
			}});
			res.json('Cita creada con exito');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}catch(e:any){
			res.status(500).json({error:e.message});
		}
	}
}
export default Cita;