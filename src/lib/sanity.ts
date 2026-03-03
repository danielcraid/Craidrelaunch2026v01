import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'v2qn2ahe',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Fetch all modules sorted by order
export async function fetchModules() {
  const queries = {
    navigation: `*[_type == "navigationModule"][0]`,
    hero: `*[_type == "heroModule"][0]`,
    philosophy: `*[_type == "philosophyModule"][0]`,
    services: `*[_type == "servicesModule"][0]`,
    team: `*[_type == "teamModule"][0]`,
    doro: `*[_type == "doroModule"][0]`,
    report: `*[_type == "reportModule"][0]`,
    footer: `*[_type == "footerModule"][0]`,
  }

  const results: Record<string, any> = {}
  for (const [key, query] of Object.entries(queries)) {
    results[key] = await client.fetch(query)
  }
  return results
}

// Fetch a single module by type
// For heroModule, resolve file asset URLs (video uploads)
export async function fetchModule(type: string) {
  if (type === 'heroModule') {
    return client.fetch(
      `*[_type == "heroModule"][0]{
        ...,
        "backgroundVideoFileUrl": backgroundVideoFile.asset->url
      }`
    )
  }
  return client.fetch(`*[_type == $type][0]`, { type })
}
