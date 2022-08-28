const fs = require('fs');

const archivoProductos = './prod.json';

class Contenedor {
	createProd = async (prod) => {
		if (!prod.title || !prod.price || !prod.thumbnail)
			return { status: 'error', message: 'falta completar' };
		try {
			if (fs.existsSync(archivoProductos)) {
				let data = await fs.promises.readFile(archivoProductos, 'utf-8');
				let products = JSON.parse(data);
				let id = products[products.length - 1].id + 1;
				prod.id = id;
				products.push(prod);
				await fs.promises.writeFile(
					archivoProductos,
					JSON.stringify(products, null, 2)
				);
				return { status: 'success', message: 'Producto Creado' };
			} else {
				prod.id = 1;
				await fs.promises.writeFile(
					archivoProductos,
					JSON.stringify([prod], null, 2)
				);
				return { status: 'success', message: 'Producto creado' };
			}
		} catch (err) {
			return { status: 'error', message: err.message };
		}
	};

	getAll = async () => {
		if (fs.existsSync(archivoProductos)) {
			let data = await fs.promises.readFile(archivoProductos, 'utf-8');
			let products = JSON.parse(data);
			return { status: 'success', message: products };
		} else {
			return { status: 'error', message: err.message };
		}
	};

	getByID = async (id) => {
		if (!id) return { status: 'error', message: 'Se necesita ingresar ID' };
		if (fs.existsSync(archivoProductos)) {
			let data = await fs.promises.readFile(archivoProductos, 'utf-8');
			let products = JSON.parse(data);
			let prod = products.find((prod) => prod.id === id);
			if (prod) return { status: 'success', message: prod };
			return { status: 'error', message: 'Producto no encontrado' };
		} else {
			return { status: 'error', message: err.message };
		}
	};

	deleteById = async (id) => {
		if (!id) return { status: 'error', message: 'Se necesita ingresar ID' };
		if (fs.existsSync(archivoProductos)) {
			let data = await fs.promises.readFile(archivoProductos, 'utf-8');
			let products = JSON.parse(data);
			let newProducts = products.filter((prod) => prod.id !== id);
			await fs.promises.writeFile(
				archivoProductos,
				JSON.stringify(newProducts, null, 2)
			);
			return { status: 'success', message: 'Producto eliminado' };
		} else {
			return { status: 'error', message: err.message };
		}
	};

	deleteAll = async () => {
		if (fs.existsSync(archivoProductos)) {
			let data = JSON.stringify([], null, 2);
			fs.writeFileSync(archivoProductos, data);

			return { status: 'success', message: 'All products deleted' };
		} else {
			return { status: 'error', message: err.message };
		}
	};
}
module.exports = Contenedor;
