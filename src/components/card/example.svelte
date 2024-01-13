<script lang="typescript">
	import { questionInfo } from '../../store';

	export let target = $questionInfo.word;
	export let text = $questionInfo.example;
	const index = text.indexOf(target);
	const start = text.slice(0, index);
	const end = text.slice(index + target.length, text.length);
</script>

<div class="my-2">
	<span class="text-slate-500 text-sm px-2"
		><span class="font-bold">ex.</span> <span>{start}</span><u>{target}</u><span>{end}</span></span
	>
</div>
