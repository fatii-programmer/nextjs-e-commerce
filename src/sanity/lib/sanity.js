import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // ← Yahan Project ID use hoti hai
  dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET, 
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN
})
export default client;
