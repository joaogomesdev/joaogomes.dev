<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ActionData, PageData } from './$types';
	import Signature from '../../components/Signature.svelte';
	import { confettiAction } from 'svelte-legos';

	let isLoading = false;
	let leftConfettiButton: HTMLButtonElement;
	let rightConfettiButton: HTMLButtonElement;

	export let form: ActionData;
	export let data: PageData;

	$: ({ signatures } = data);
	$: hasErrors = false;

	const submitSignature: SubmitFunction = () => {
		return async ({ update, result }) => {
			isLoading = true;
			if (result.type === 'success') {
				hasErrors = false;
				await update();
				invalidate('app:signatures');
				leftConfettiButton.click();
				rightConfettiButton.click();
			} else {
				hasErrors = true;
			}
			isLoading = false;
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
		<button
			bind:this={leftConfettiButton}
			use:confettiAction={{ origin: { x: 1, y: 1 } }}
			class="hidden aria-hidden"
		/>
		<button
			bind:this={rightConfettiButton}
			use:confettiAction={{ origin: { x: 0, y: 1 } }}
			class="hidden aria-hidden"
		/>
	</div>
	<div class="flex mx-auto flex-col gap-6 w-full mt-8">
		<p class="font-bold text-2xl">Sign my guestbook.</p>
		<form
			action="?/submitSignature"
			method="post"
			class="flex flex-col h-full w-full sm:flex-row gap-2 justify-between"
			use:enhance={submitSignature}
		>
			<div class="w-full sm:w-[40%]">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="username"> Username </label>
				<input
					value={form?.username ?? ''}
					name="username"
					placeholder="Enter you name..."
					type="text"
					class="full w-full px-2 h-10 bg-zinc-800 rounded-md text-gray-400"
				/>
			</div>
			<div class="w-full">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="message"> Message </label>
				<input
					value={form?.message ?? ''}
					name="message"
					placeholder="Enter you message..."
					type="text"
					maxlength="90"
					class="full w-full px-2 h-10 bg-zinc-800 rounded-md text-gray-400"
				/>
			</div>
			<div class="self-end">
				{#if isLoading}
					<button
						type="button"
						class="flex items-center justify-center h-10 px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out border border-indigo-500 rounded-md shadow cursor-not-allowed hover:bg-indigo-400 disabled:hover:bg-transparent"
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
						class="flex justify-center items-center h-10 px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out border border-indigo-500 rounded-md shadow hover:bg-indigo-400 disabled:hover:bg-transparent"
					>
						Send
					</button>
				{/if}
			</div>
		</form>
	</div>

	{#if form?.success && !hasErrors}
		<p class="text-emerald-400 font-bold text-lg mt-4 text-center">
			Thanks for signing my guestbook!
		</p>
	{/if}
	{#if hasErrors}
		<p class="text-red-400 font-bold text-lg mt-4 text-center">
			Both Username and Message are required.
		</p>
	{/if}

	<div class="mt-10">
		{#if signatures.length > 0}
			{#each signatures as signature}
				<Signature username={signature.username} message={signature.body} />
			{/each}
		{:else}
			<div class="flex w-full justify-center items-center text-lg">No signatures yet 😔</div>
		{/if}
	</div>
</div>
