export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const nombre = data.get('nombre');
		const email = data.get('email');
		const mensaje = data.get('mensaje');

		if (!nombre || !email || !mensaje) {
			return { error: 'Todos los campos son obligatorios' };
		}

		if (!email.includes('@')) {
			return { error: 'El correo no es válido' };
		}

		console.log(`📨 Mensaje recibido de ${nombre} (${email}): ${mensaje}`);

		return { success: true };
	}
};
