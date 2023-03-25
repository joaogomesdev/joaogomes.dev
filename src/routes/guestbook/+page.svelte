<script lang="ts">
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	import type { ActionData } from "./$types";


    let isLoading = false

    export let form: ActionData;

    const submitSignature: SubmitFunction = (input) => {
		// form validations
		isLoading = true;
		return async ({ update }) => {
			// do something after submit
			isLoading = false;
			await update();
		};
	};
</script>


<div> 
    <div>
        <h1 class="font-bold text-4xl">My Guestbook.</h1>
        <p class="text-lg text-zinc-400 mt-3">This part of <span class="text-yellow-500 font-semibold">joaogomes.dev</span> is my guestbook, where anyone can leave a message. Im waiting for yours!</p>
    </div>
    <div class="flex mx-auto flex-col gap-6 w-full mt-8">
          <p class="font-bold text-2xl">Sign my guestbook.</p>
          <form action="?/submitSignature" method="post" class="flex gap-2 w-full justify-between" use:enhance={submitSignature}>
            <input name="message" type="text" class="full w-full px-2 bg-zinc-800 rounded-md text-gray-400">
            
              {#if isLoading}
                <button 
                    type="button"
                    class="flex items-center justify-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out border border-indigo-500 rounded-md shadow cursor-not-allowed hover:bg-indigo-400 disabled:hover:bg-transparent"
                    disabled
                >
                    <svg class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    Sending...
                </button>
              {:else}
                <button 
                    type="submit"
                    class="flex justify-center items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out border border-indigo-500 rounded-md shadow hover:bg-indigo-400 disabled:hover:bg-transparent"
                >
                    Send
                </button>
              {/if}
          </form>
    </div>
</div>