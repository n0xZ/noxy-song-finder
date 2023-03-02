// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@unocss/nuxt'],
	runtimeConfig: { public: { API_URL: process.env.API_URL } },
	experimental: {
		componentIslands: true,
	},
	sourcemap: {
		server: true,
		client: false,
	},
	css: ['@unocss/reset/antfu.css'],
})
