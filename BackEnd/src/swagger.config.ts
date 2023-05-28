// importar la biblioteca de trabajo

import swaggerJSDoc from 'swagger-jsdoc';
// Crear una funcion de configuracion
export const swaggerOptions ={
	definition : {
		openapi:'3.0.0',
		info:{
			title: 'Hospital',
			version:'1.0.0',
			description:'En esta api tenemos la funcionalidad que soporta la operacion'
		},
		servers:[
			{
				url:'http:localhost:3005',
				description : 'Servidor local de documentacion'
			}
		]
	},
	apis:['src/index.ts','./swagger/*.swagger.ts']
};

export const swaggerSpec=swaggerJSDoc(swaggerOptions);