<script lang="ts">
	import Icon from '@iconify/svelte';
  import NavItem from './NavLink.svelte'
</script>

<div class="font-Poppins flex w-full flex-col items-center transition-all bg-zinc-900 text-zinc-50">
  <div class="mx-auto min-h-screen w-full max-w-4xl px-8 lg:px-0">
    <header class="w-full mt-14 flex items-center justify-between">
      <nav class="flex gap-10 flex-col sm:flex-row">
        <NavItem href="/me" text="Me" />
        <NavItem href="/me/uses" text="What i use" />
        <NavItem href="/guestbook" text="Guestbook" />
      </nav>

      <div class="flex gap-2">
        <a href="https://twitter.com/joaogomesdev" target=”_blank” class="text-2xl transition-colors hover:text-blue-400">
          <Icon icon="mdi:twitter" />
        </a>
        <a href="https://www.linkedin.com/in/joaogomesdev/" target=”_blank” class="text-2xl transition-colors hover:text-blue-600">
          <Icon icon="mdi:linkedin" />
        </a>
        <a href="https://github.com/joaogomesdev" target=”_blank” class="text-2xl transition-colors hover:text-zinc-600">
          <Icon icon="mdi:github" />
        </a>
      </div>

      <!-- <div class="flex justify-center items-center gap-4">
         {sessionData && (
          <span onClick={() => signOut()}>
            <NavItem href="/guestbook" text="Leave" />
          </span>
        )} -->
        

        <!-- <button
          aria-label="Toggle Dark Mode"
          type="button"
          >
            <Icon
              icon="ph:sun-light"
              style="color: orange; font-size: 28px;"
            />
        </button>  -->
    </header>

    <main class="mt-14">
      <slot />    
    </main>

    <footer class="p-20"></footer>
  </div>
</div>