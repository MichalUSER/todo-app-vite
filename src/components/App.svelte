<script>
	import { Router, Route } from "svelte-routing";
	import ReloadPrompt from "./ReloadPrompt.svelte";
	import "./TailwindStyles.svelte";
	import Todo from "./Todo.svelte";
	import Home from "./Home.svelte";
</script>

<ReloadPrompt />
<Router>
	<Route path="" component={Home} />
	<Route path="todo" component={Todo} />
</Router>
