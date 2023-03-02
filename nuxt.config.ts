// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@unocss/nuxt'],
	runtimeConfig: {
		public: {
			API_URL: process.env.API_URL,
			API_KEY: process.env.RAPID_API_KEY,
			API_HOST: process.env.RAPID_API_HOST,
		},
	},
	sourcemap: {
		server: true,
		client: false,
	},
	css: ['@unocss/reset/antfu.css'],
})
