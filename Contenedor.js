const fs = require('fs');

const archivoProductos = './productos.json';

class Contenedor {
	getAll = async () => {
		if (fs.existsSync(archivoProductos)) {
			let data = await fs.promises.readFile(archivoProductos, 'utf-8');
			let products = JSON.parse(data);
			return { status: 'success', message: products };
		} else {
			return { status: 'error', message: err.message };
		}
	};
}

module.exports = Contenedor;
