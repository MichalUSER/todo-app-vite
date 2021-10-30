<script>
	import { Link } from "svelte-routing";
</script>

<svelte:head>
	<title>Homepage</title>
</svelte:head>

<nav>
	<div class="link">
		<Link class="m-4 text-3xl text-black dark:text-white" to="/todo">Todo app</Link>
	</div>
</nav>
