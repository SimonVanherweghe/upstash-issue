import { redisTest } from "../lib/redis";
const fetch = require('@vercel/fetch')()

export default async (request, response) => {
	console.log("default")
	const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json());

	console.log(redisTest);
	response.status(200).json({
		node_version: process.version,
		todo: todo,
		body: request.body,
		query: request.query,
		cookies: request.cookies,
	});

}
