<script>
	import { Router, Route } from "svelte-routing";
	import TailwindTheme from "./TailwindTheme.svelte";
	import ReloadPrompt from "./ReloadPrompt.svelte";
	import "./TailwindStyles.svelte";
	import Todo from "./Todo.svelte";
	import Home from "./Home.svelte";
</script>

<TailwindTheme />
<ReloadPrompt />

<Router>
	<Route path="" component={Home} />
	<Route path="todo" component={Todo} />
</Router>
