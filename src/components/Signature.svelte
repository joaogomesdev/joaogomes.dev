<script lang="ts">
	import { formatDate } from '../utils';

	export let username: string;
	export let message: string;
</script>

<div class="my-2 p-2">
	<span class="text-indigo-500 text font-bold">{username}</span>
	<p class="break-words">{message}</p>
</div>