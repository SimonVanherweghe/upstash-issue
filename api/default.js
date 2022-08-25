import { Redis } from "@upstash/redis"
import fetch from "node-fetch"
const redis = new Redis({ url: 'url', token: 'token' });

export default async (request, response) => {
	const todo = awit fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json())
	console.log(redis);
	response.status(200).json({
		node_version: process.version,
		body: request.body,
		query: request.query,
		cookies: request.cookies,
	});

}
