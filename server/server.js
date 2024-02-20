const express = require("express");
const app=express();
const cors=require("cors");
const mercadopago=require("mercadopago");

app.use(express.json());
app.use(cors());

mercadopago.configure({
	access_token: "<ACCESS_TOKEN>",
});


app.post("/create_preference", (req, res) => {

let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:3000/Home",
			"failure": "http://localhost:3000/Home",
			"pending": ""
		},
		auto_return: "approved",
	};
    mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.listen(3030,()=>{
    console.log("el servidor esta corriendo en el puerto 3030");
});