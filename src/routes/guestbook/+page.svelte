<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ActionData, PageData } from './$types';
	import Signature from '../../components/Signature.svelte';

	let isLoading = false;

	export let form: ActionData;
	export let data: PageData;

	$: ({ signatures } = data);

	const submitSignature: SubmitFunction = () => {
		isLoading = true;
		return async ({ update }) => {
			isLoading = false;
			await update();
			invalidate('app:signatures');
		};
	};
</script>

<div>
	<div>
		<h1 class="font-bold text-4xl">My Guestbook.</h1>
		<p class="text-lg text-zinc-400 mt-3">
			This part of <span class="text-yellow-500 font-semibold">joaogomes.dev</span> is my guestbook,
			where anyone can leave a message. Im waiting for yours!
		</p>
	</div>
	<div class="flex mx-auto flex-col gap-6 w-full mt-8">
		<p class="font-bold text-2xl">Sign my guestbook.</p>
		<form
			action="?/submitSignature"
			method="post"
			class="flex flex-col h-full w-full sm:flex-row gap-2 justify-between items-start"
			use:enhance={submitSignature}
		>
			<div class="w-full sm:w-[40%]">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="username"> Username </label>
				<input
					name="username"
					placeholder="Enter you name..."
					type="text"
					class="full h-10 w-full px-2 bg-zinc-800 rounded-md text-gray-400"
				/>
			</div>
			<div class="w-full h-full">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="message"> Message </label>
				<textarea
					name="message"
					placeholder="Enter you message..."
					class="full min-h-min w-full p-2 bg-zinc-800 rounded-md text-gray-400"
				/>
			</div>
			{#if isLoading}
				<button
					type="button"
					class="flex self-end items-center justify-center h-10 px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out border border-indigo-500 rounded-md shadow cursor-not-allowed hover:bg-indigo-400 disabled:hover:bg-transparent"
					disabled
				>
					<svg
						class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						/>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
					Sending...
				</button>
			{:else}
				<button
					type="submit"
					class="flex self-end justify-center items-center h-10 px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out border border-indigo-500 rounded-md shadow hover:bg-indigo-400 disabled:hover:bg-transparent"
				>
					Send
				</button>
			{/if}
		</form>
	</div>

	<!-- {#if $navigating}
		<div role="status" class="flex w-full justify-center items-center">
			<svg
				aria-hidden="true"
				class="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-violet-600"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor"
				/>
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="currentFill"
				/>
			</svg>
			<span class="sr-only">Loading...</span>
		</div>
	{/if} -->

	<div class="mt-12">
		{#if signatures.length > 0}
			{#each signatures as signature}
				<Signature username={signature.username} message={signature.body} />
			{/each}
		{:else}
			<div class="flex w-full justify-center items-center text-lg">No signatures yet 😔</div>
		{/if}
	</div>
</div>
