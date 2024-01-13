<script>
	import { questionInfo } from '../../store';
</script>

<div class="flex flex-col md:flex-row gap-2 md:justify-center text-sm text-slate-500">
	<div class="">
		<div
			class="p-2 bg-blue-800 items-center text-blue-100 leading-none rounded-full flex lg:inline-flex"
			role="alert"
		>
			<span class="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3">
				Meaning
			</span>
			<span class="font-semibold mr-2 text-left flex-auto">
				{`(${$questionInfo.POS})  ${$questionInfo.meaning}`}
			</span>
		</div>
	</div>
	{#if $questionInfo.synonym !== '-'}
		<div>
			<div
				class="p-2 bg-cyan-400 items-center text-cyan-100 leading-none rounded-full flex lg:inline-flex"
				role="alert"
			>
				<span class="flex rounded-full bg-cyan-300 uppercase px-2 py-1 text-xs font-bold mr-3">
					Synonyms
				</span>
				<span class="font-semibold mr-2 text-left flex-auto">
					{$questionInfo.synonym}
				</span>
			</div>
		</div>
	{/if}
</div>
