<script>
    export let texto;
    export let data;
    const {nombre, edad} = data;

    function handleClick(){
        this.fire('dataChanged', {
            nombre: 'Lena',
            edad: 29
        });
    }
</script>


<section id="Text">
    {texto}
    <p>{nombre} {edad}</p>

    <button on:click={handleClick}>Cambiar nombre</button>
</section>