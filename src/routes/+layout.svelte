<script>
	import '../app.css';
	import Header from '../components/header/component.svelte';
</script>

<div class="bg-[#3f4fa6] h-screen flex justify-center">
	<div class="container h-full w-full space-y-4 p-4">
		<Header />
		<slot />
	</div>
</div>
