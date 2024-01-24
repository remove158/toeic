<script lang="typescript">
	import { onMount } from 'svelte';
	import CardLoading from '../components/card/loading.svelte';
	import CardQuestion from '../components/card/component.svelte';
	import { questionInfo } from '../store';
	import { fetchQuestion } from '$lib/api';

	onMount(async () => {
		questionInfo.set(await fetchQuestion());
	});
</script>

<main class="container h-full w-full space-y-4">
	{#if $questionInfo}
		<CardQuestion />
	{:else}
		<CardLoading />
	{/if}
</main>
