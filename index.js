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

const all = contenedor.getAll().then((result) => console.log('result', result));

app.get('/', (request, response) => {
	response.send(all);
});

getRandom = (nombres) => {
	return nombres[Math.floor(Math.random() * nombres.length)];
};

const server = app.listen(8080, () => console.log('Server Up'));
server.on('error', (error) => console.log(`Error en servidor ${error}`));

app.get('/productos', (request, response) => {
	response.send(`<h1  style= 'color:red'> Los productos son: ${nombres}</h1> `);
});

app.get('/productoRandom', (request, response) => {
	response.send(
		`<h1 style= 'color:blue' >El pruducto al azar es : ${getRandom(
			nombres
		)}</h1>`
	);
});
