<script lang="typescript">
	import { onMount } from 'svelte';
	import CardLoading from '../components/card/loading.svelte';
	import CardQuestion from '../components/card/component.svelte';
	import { questionInfo } from '../store';
	import { fetchQuestion } from '$lib/api';
	import Skip from '../components/skip/component.svelte';

	onMount(async () => {
		questionInfo.set(await fetchQuestion());
	});
</script>

<main>
	{#if $questionInfo}
		<CardQuestion />
		<Skip />
	{:else}
		<CardLoading />
	{/if}
</main>
