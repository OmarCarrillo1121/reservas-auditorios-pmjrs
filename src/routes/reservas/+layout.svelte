<script>
    import MainHeader from '$lib/components/header/MainHeader.svelte';
    import Navbar from '$lib/components/navbar/Navbar.svelte';
	let { children } = $props();
</script>

<MainHeader/>
<Navbar></Navbar>

<main>
	{@render children?.()}
</main>
    