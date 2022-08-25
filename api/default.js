import { Redis } from "@upstash/redis"

const redis = new Redis({ url: 'url', token: 'token' });

export default async (request, response) => {
	console.log(redis);
	response.status(200).json({
		node_version: process.version,
		body: request.body,
		query: request.query,
		cookies: request.cookies,
	});

}
