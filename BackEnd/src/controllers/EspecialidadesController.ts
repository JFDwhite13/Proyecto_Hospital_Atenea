import {Response, Request} from 'express';
import { PrismaClient } from '@prisma/client';

class especialidad{
	private prismaClient:PrismaClient;
	/**
	 * Se genera constructor de la clase prisma
	 */
	constructor(){
		this.prismaClient = new PrismaClient();
	}
	/**
	 * Se genera una funcion de a clase para poder obtener la lista de las especialidades por medio de prisma
	 * @author JFDwhite13
	 * 
	 */
	async getAllEspecialidades(res:Response){
		try{
			const Citas =await this.prismaClient.especialidad.findMany({select:{name:true}});
			res.json(Citas);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}catch(e:any){
			res.status(500).json({error:e.message});
		}
	}
	/**
	 * Se genera una funcion de la clase para poder obtener la lista de los doctores afiliados a una especialidad especifica por medio de prisma
	 * @author JFDwhite13
	 * 
	 */
	async getAllDoctors(req:Request,res:Response){
		const especialidad = parseInt(req.params.id);
		try{
			const doctors = await this.prismaClient.doctor.findMany({where:{especialidadId:especialidad}});
			const resdoctors = doctors.map(item=>({
				iddoctor:item.idcard.toString(),
				doctorname:item.name,
				doctorlastname:item.lastname
			}));
			res.json(resdoctors);
		}catch(e:any){
			res.status(400).json({error: e.message});
		}
	

	}
	
}
export default especialidad;