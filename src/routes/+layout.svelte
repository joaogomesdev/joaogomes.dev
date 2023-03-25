<script>
	import LayoutContainer  from "../components/LayoutContainer.svelte";
  import "../app.css";
</script>

<LayoutContainer>
  <slot />
</LayoutContainer>

<style lang="postcss" global>
  :global(html) {
    background-color: theme(colors.gray.900);
  }
</style>