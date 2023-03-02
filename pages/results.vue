<script setup lang="ts">
	useHead({ title: 'Noxy video finder - Resultados:' })
	const {
		query: { q },
	} = useRoute()

	const { data: search } = useResults(String(q))
</script>

<template>
	<SearchResults :hits="search?.results" v-if="search?.results" />
</template>
