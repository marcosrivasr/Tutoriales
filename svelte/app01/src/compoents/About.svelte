<script>
    let texto = "Bienvenido a mi canal!";
    let count = 0;

    function handleClick(){
        count++;
    }
</script>

<section id="about">
    <h1>About</h1>

    <p>Bienvenido</p>

    <button on:click={handleClick}>Click {count === 0? '' : count} veces</button>
</section>

<style>
    #about{
        background-color: var(--bg-color);
        color: var(--color);
    }
</style>