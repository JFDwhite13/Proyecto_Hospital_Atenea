export default {
	/**
	 * @swagger
	 * /list_allEspecialidades:
	 *  get:
	 *      summary: Obtener la lista de Especialidades
	 *      responses:
	 *          200:
	 *              description: Has obtenido todos las especialidades de la base de datos
	 *              type: Array
	 *          500:
	 *              description: Error al intentar obtener los datos
	 *              type: String
	 */
	
	/**
	 * @swagger
	 * /list_alldoctors/{id}:
	 *  get:
	 *      summary: Obtener una lista de doctores con una especialidad especifica
	 *      parameters:
	 *        - name: id
	 *          in: path
	 *          description: ID de la especialidad
	 *          required: true
	 *          schema:
	 *            type: integer
	 *      responses:
	 *          200:
	 *              description: Retorna todos los doctores de una especialidad especifica
	 *              type: String
	 *          500:
	 *              description: Error al intentar enviar los datos
	 *              type: String
	 */
};
	