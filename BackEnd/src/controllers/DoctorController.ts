import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';

/**
 * Se genera clase principal
 * @author JFDwhite13
 */

class Doctor{
	private prismaClient:PrismaClient;

	constructor(){
		this.prismaClient = new PrismaClient;
	}
	/**
	 * Se genera por funcion para obtener todos los doctores disponibles por medio de prisma 
	 * @param res se envia respuesta con todos los doctores
	 * @Author JFDwhite13
	 */
	async getalldoctors(res:Response){
		try{
			const doctors = await this.prismaClient.doctor.findMany({
				include:{Especialidad:{select:{name: true}}}
			}
			);
			const data= doctors.map(item=>({
				idcard: item.idcard.toString(),
				name: item.name,
				lastname: item.lastname,
				consultationroomname : item.consultationroomname,
				correo: item.email,
				area: item.Especialidad?.name
			}));
			res.json(data);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}catch(e:any){
			res.status(500).json({error: e.message});
		}
	}
	/**
	 * Se genera funcion para poder crear un doctor en la base de datos usando prisma con la informacion enviada por parte del usuario
	 * @param req se recibe y analiza la informacion enviada por parte del body
	 * @param res se envia respuesta de parte del servidor 
	 * @Author JFDwhite13
	 */
	async createDoctor(req:Request,res:Response){
		console.log(req.body);
		try{
			const{
				idcardn,
				name,          
				lastname,      
				consultationroomname,
				email,
				especialidadId
			}=req.body;
			const idcard=Number(idcardn);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const doctor = await this.prismaClient.doctor.create({data:{
				idcard,
				name,
				lastname,
				consultationroomname,
				email,
				especialidadId
			}});

			res.json('Doctor creado exitosamente');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}catch(e:any){
			res.status(400).json({error:e.message});
		}
	}
}
export default Doctor;