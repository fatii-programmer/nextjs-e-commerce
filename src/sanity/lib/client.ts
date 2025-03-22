// lib/sanity.js

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET, 
  useCdn: true,
  apiVersion: '2025-01-13', // Ensure this matches the version in your schema
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN
})
export default client;  