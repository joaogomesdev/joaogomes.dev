<script>
  import "../app.css";
</script>

<slot />

<style lang="postcss" global>
  :global(html) {
    background-color: theme(colors.gray.800);
  }
</style>