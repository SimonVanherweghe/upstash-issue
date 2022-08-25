import { redisTest } from "../lib/redis";

export default async (request, response) => {
	console.log(redisTest);
	response.status(200).json({
		node_version: process.version,
		body: request.body,
		query: request.query,
		cookies: request.cookies,
	});

}
