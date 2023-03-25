<script lang="ts">
  import { page } from '$app/stores';
  import cn from 'classnames'

  export let href: string
  export let text: string
    
  $: isActive = $page.url.pathname == href
</script>


<a
href={href}
class={cn(
  isActive
    ? "font-semibold text-gray-800  dark:text-zinc-100"
    : "font-normal hover-underline-animation  after:bg-gray-800 after:dark:bg-zinc-400  dark:text-zinc-400",
  "cursor-pointer"
)}
>
{text}
</a>