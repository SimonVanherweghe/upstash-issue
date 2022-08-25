import { Redis } from "@upstash/redis/with-fetch";

const redis = new Redis({ url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN })

const redisWrite = async (key, value) => {
	console.log(key, value)
	return redis.set(`issue/a${key}`, JSON.stringify(value))
}

const redisRead = key => redis.get(`test/${key}`)

export { redisWrite, redisRead }
