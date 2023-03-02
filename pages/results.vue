<script setup lang="ts">
	useHead({ title: 'Noxy video finder - Resultados:' })
	const {
		query: { q },
	} = useRoute()

	const { data: search } = useResults(String(q))
	console.log(search.value)
</script>

<template>
	<SearchResults :hits="search?.results" v-if="search?.results" />
</template>
