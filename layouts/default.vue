<script setup lang="ts">
	const isSubmitting = ref(false)
</script>

<template>
	<div class="h-full w-full container mx-auto max-w-xl">
		<form action="/results" class="flex flex-col justify-center w-full mt-[60%] space-y-3">
			<h2 class="text-xl font-semibold">
				Ingrese el nombre de la canción a buscar
			</h2>
			<input
				type="text"
				name="q"
				placeholder="Por ej. Yo no se mañana"
				class="px-3 py-3 rounded-lg outline-none bg-sky-100"
			/>
			<button
				type="submit"
				class="px-3 py-3 rounded-lg outline-none bg-sky-400 c-neutral-100 font-bold"
			>
				Buscar canción
			</button>
		</form>
		<NuxtPage />
	</div>
</template>
