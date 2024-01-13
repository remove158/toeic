<script lang="typescript">
	import { fetchQuestion } from '$lib/api';
	import { questionInfo, select } from '../../store';
	const updateQuestionInfo = async () => {
		const answer = $questionInfo.answer;
		if ($select !== -1) {
			questionInfo.set(await fetchQuestion());
		}
		const solution = $questionInfo.choices.indexOf(answer) ?? -1;
		select.set(solution);
	};
</script>

<button
	on:click={updateQuestionInfo}
	class={`hover:cursor-pointer group rounded-md hover:bg-[#e85682] bg-[#fd6693] absolute top-6 right-6 px-4 py-2 text-center flex flex-col items-center justify-center text-white font-bold `}
>
	Next
</button>
