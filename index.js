const Contenedor = require('./Contenedor');

const express = require('express');

const contenedor = new Contenedor();

const productos = [
	{
		title: 'Escuadra',
		price: 123.45,
		thumbnail:
			'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
		id: 1,
	},
	{
		title: 'Calculadora',
		price: 234.56,
		thumbnail:
			'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
		id: 2,
	},
	{
		title: 'Globo Terráqueo',
		price: 345.67,
		thumbnail:
			'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
		id: 3,
	},
];

const app = express();

const nombres = productos.map((item) => item.title);
console.log(nombres);

getRandom = (nombres) => {
	return nombres[Math.floor(Math.random() * nombres.length)];
};
console.log(getRandom(productos));

let index = getRandom(0, productos.length - 1);

const server = app.listen(8080, () => console.log('Server Up'));
server.on('error', (error) => console.log(`Error en servidor ${error}`));

app.get('/', (request, response) => {
	response.send('<h1 style= "color:blue" >Lista de productos</h1>');
});

app.get('/productos', (request, response) => {
	response.send(`Los productos son ${nombres}`);
});

app.get('/productoRandom', (request, response) => {
	response.send(`Los productos son ${getRandom(nombres)}`);
});
