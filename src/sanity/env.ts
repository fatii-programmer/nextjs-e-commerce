export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "ski5FSNMcX6Aq4ItavsKSXcR3vTonxxk9FQE1zoni5t4tUtSTnZJ2ryajozlmG177La3wGr9rU2p3HmW1Kvrm97DqBBFAHxdVBftHG2wjMCjuAY9i8RcAZYWQTjIbQ0BP8XcX2N8xD79ZmoZoH6ZKJYG5pdntlfbeGRQtmF4S9A0EkAz8GNn",
  'Missing environment variable: NEXT_PUBLIC_SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
