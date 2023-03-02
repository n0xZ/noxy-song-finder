<script setup lang="ts">
	import { Hit } from '~~/types'

	type Props = {
		hits: Hit[]
	}
	const props = defineProps<Props>()
	console.log(props)
</script>

<template>
	<section
		class="min-h-screen grid place-items-center gap-5 container mx-auto max-w-xl mt-12"
	>
		<article
			v-for="hit in props.hits"
			class="h-48 w-full rounded-md flex flex-row shadow-md xl:p-0 p-2"
		>
			<img
				class="rounded-md "
				:src="hit.result.header_image_url"
				width="192"
				heigth="192"
				:alt="`${hit.result.full_title}, de ${hit.result.artist_names}`"
			/>
			<div
				class="flex flex-col item-center justify-center container mx-auto space-y-3"
			>
				<h3 class="text-center font-bold w-full mt-4">
					{{ hit.result.full_title }}
				</h3>
				<a
					class="text-center underline"
					:href="hit.result.url"
					target="_blank"
					rel="noreferrer"
					>Ver letra</a
				>
			</div>
		</article>
	</section>
</template>
