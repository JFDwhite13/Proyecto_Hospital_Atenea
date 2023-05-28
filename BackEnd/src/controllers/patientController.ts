import {Request,Response } from 'express';
import { PrismaClient } from '@prisma/client';



class Patients{
	private prismaClient:PrismaClient;
	/**Se genera constructor de la clase prisma
	 * @author JFDWHITE13
	 */
	constructor(){
		this.prismaClient = new PrismaClient();
	}
	/**
	 * se define funcion para obtener Todos los pacientes
	 * @author JFDWHITE13
	 */
	async getallpatients(req:Request, res:Response){
		console.log('se accedio a la ruta obtener pacientes');
		try	{
			const paciente = await this.prismaClient.paciente.findMany();
			const retpaciente = paciente.map(item=>({
				id: item.id.toString(),
				name: item.name,
				lastname: item.lastname,
				birthday:item.birthday,
				number: item.number
			}));
			res.json(retpaciente);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}catch(e:any){
			res.status(500);
			res.json({error: e.message});
		}
		
	}
	/**
	 * se define funcion para crear un paciente los pacientes
	 * @author JFDWHITE13
	 */
	async createpatient(req:Request, res:Response){
		console.log('se accedio a la ruta crear_paciente');
		try {
			const {
				idn,
				name,
				lastname,
				birthday,
				number
			} = req.body;
			const id =Number(idn);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const paciente = await this.prismaClient.paciente.create({
				data: {
					id,
					name,
					lastname,
					birthday: new Date(birthday),
					number
				}
			});
			res.json('paciente creado exitosammente');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}catch(e:any){
			res.status(500);
			res.json({error: e.message});
		}
		
	}
}
export default Patients;