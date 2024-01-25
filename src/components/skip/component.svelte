<script lang="typescript">
	import { fetchQuestion } from '$lib/api';
	import { questionInfo, select } from '../../store';
	const updateQuestionInfo = async () => {
		const answer = $questionInfo.answer;
		if ($select !== -1) {
			questionInfo.set(await fetchQuestion());
			select.set(-1);
		} else {
			const solution = $questionInfo.choices.indexOf(answer) ?? -1;
			select.set(solution);
		}
	};
</script>

<footer class="fixed bottom-0 z-10 inset-x-0 h-12">
	<button
		on:click={updateQuestionInfo}
		class={`hover:cursor-pointer group hover:bg-[#e85682] bg-[#fd6693] w-full  h-full text-center flex flex-col items-center justify-center text-white font-bold `}
	>
		<span>{$select === -1 ? 'Skip' : 'Next Question'}</span>
	</button>
</footer>

<svelte:window
	on:keydown|preventDefault={(e) => {
		if (e.keyCode === 32) {
			updateQuestionInfo();
		}
	}}
/>
