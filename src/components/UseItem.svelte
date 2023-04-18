<script lang="ts">
	export let link: string | null = null;
	export let name: string;
</script>

<li>
	{#if link}
		<a href={link} class="hover:underline cursor-pointer" target="_blank">{name}</a>
	{:else}
		{name}
	{/if}
		<span class="text-zinc-500"><slot /></span>
</li>
