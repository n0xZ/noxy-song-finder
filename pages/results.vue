<script setup lang="ts">
	useHead({ title: 'Noxy video finder - Resultados:' })
	const {
		query,
	} = useRoute()

	const { data: search } = useResults(String(query.q))
	console.log(search.value)
</script>

<template>
	<SearchResults :hits="search?.results" v-if="search?.results" />
</template>
