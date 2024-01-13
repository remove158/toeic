<script lang="typescript">
	import AnswerInfo from './info.svelte';
	import ExampleInfo from './example.svelte';
	import { questionInfo, select } from '../../store';

	const prefixs = ['A', 'B', 'C', 'D'];
</script>

<div class="bg-white rounded-2xl shadow-lg border-1 px-4 py-8 flex flex-col gap-4">
	<h2 class="text-xl font-bold mb-4 text-center">
		{$questionInfo.word.toUpperCase()}
	</h2>
	{#each $questionInfo.choices as choice, idx}
		<button
			disabled={$select !== -1}
			class={`w-full border-2 rounded-xl p-4  text-left flex justify-between items-center 
		${
			$select !== -1 && choice === $questionInfo.answer
				? 'border-green-400 text-green-400 bg-green-200'
				: $select !== -1 && $select === idx
				? 'border-red-400 text-red-400 bg-red-200'
				: $select !== -1
				? 'border-slate-200 text-slate-600'
				: 'hover:bg-slate-100 hover:text-slate-500 hover:border-slate-300  border-slate-200'
		}
		${$select == -1 ? 'hover:cursor-pointer' : 'hover:cursor-not-allowed'}
	`}
			on:click={() => {
				if ($select == -1) {
					$select = idx;
				}
			}}
		>
			{prefixs.at(idx)}. {choice}
		</button>
	{/each}
	{#if $select !== -1}
		<div>
			<AnswerInfo />
			<ExampleInfo />
		</div>
	{/if}
</div>
