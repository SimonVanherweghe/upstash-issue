import { redisWrite } from "../lib/redisWithFetch";
const fetch = require('@vercel/fetch')()

export default async (request, response) => {
	console.log("withfetch")
	const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json());

	await redisWrite(Date.now(), todo);

	response.status(200).json({
		node_version: process.version,
		todo: todo,
		body: request.body,
		query: request.query,
		cookies: request.cookies,
	});

}

