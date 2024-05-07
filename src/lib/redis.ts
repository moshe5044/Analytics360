import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu1-still-coyote-39815.upstash.io',
  token: process.env.REDIS_KEY!,
})
