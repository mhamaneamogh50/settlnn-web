import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-08-17',
  useCdn: false, // Set to false for real-time updates
  token: process.env.SANITY_API_TOKEN, // Optional: for private datasets
})
