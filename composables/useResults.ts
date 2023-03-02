import { SearchResult } from '~~/types'

export const useResults = (q: string) => {
	const env = useRuntimeConfig()
	return useAsyncData('search-results', async () => {
		const resp = await fetch(
			`${env.public.API_URL}/search?q=${q}&per_page=10&page=1`,
			{
				headers: {
					'X-RapidAPI-Key': env.public.API_KEY,
					'X-RapidAPI-Host': env.public.API_HOST,
				},
			}
		)
		const resultsData: SearchResult = await resp.json()

		return {
			results: resultsData.response.hits,
		}
	})
}
