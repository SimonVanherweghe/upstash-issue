import { Redis } from "@upstash/redis"

const redis = new Redis({ url: 'url', token: 'token' });

const redisTest = value => { console.log(redis) };

export { redisTest }
