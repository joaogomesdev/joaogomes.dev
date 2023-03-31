<script lang="ts">
	import { formatDate } from '../utils';

	export let username: string;
	export let message: string;
	export let createdAt: Date;
</script>

<div class="w-full flex justify-between items-center p-2">
	<div class="flex gap-4 items-center">
		<p class="text-violet-700">{username}:</p>
		<p>{message}</p>
	</div>

	<p>{formatDate(createdAt)}</p>
</div>
