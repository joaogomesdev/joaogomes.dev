<script lang="ts">
	import { formatDate } from '../utils';

	export let username: string;
	export let message: string;
	export let date: Date | undefined = undefined;
</script>

<div class="my-2 p-2">
	<div class="flex gap-2 items-center">
		<span class="text-md text-indigo-500 font-bold">{username}</span>
		{#if date}
			<span class="text-sm text-zinc-300/40 font-bold">{formatDate(date)}</span>
		{/if}
	</div>
	<p class="break-words">{message}</p>
</div>
