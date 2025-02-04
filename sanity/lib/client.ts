import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, sanityToken } from '../env'  // Make sure to import your token

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set this to false when using write operations
  token: sanityToken, // Add your Sanity token here
})
