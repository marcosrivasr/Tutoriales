<script>
	import About from './compoents/About.svelte';
	import Text from './compoents/Text.svelte';

	export let name;
	export let lastName;

	let data = {
		nombre: 'Marcos',
		edad: 35
	}

	function handleDataChange(d){
		data = {...d};
	}
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About />	

	<Text texto="Hola amiguitos!" bind:data={data} on:onDataChange={handleDataChange} />

</main>

<style>
	:global(:root){
		--bg-color: #003366;
		--color: white;
	}
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>