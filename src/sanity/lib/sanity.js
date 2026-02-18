import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.uku5j8l5, // ← Yahan Project ID use hoti hai
  dataset:  process.env.production, 
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.ski5FSNMcX6Aq4ItavsKSXcR3vTonxxk9FQE1zoni5t4tUtSTnZJ2ryajozlmG177La3wGr9rU2p3HmW1Kvrm97DqBBFAHxdVBftHG2wjMCjuAY9i8RcAZYWQTjIbQ0BP8XcX2N8xD79ZmoZoH6ZKJYG5pdntlfbeGRQtmF4S9A0EkAz8GNn
})
export default client;
