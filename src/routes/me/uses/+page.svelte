<script lang="ts">
	import setup from '$lib/assets/setup.png';
	import UseItem from '../../../components/UseItem.svelte';
</script>

<div class="w-full">
	<div>
		<div>
			<h1 class="font-bold text-4xl">What i use.</h1>
			<p class="text-lg text-zinc-400 mt-3">
				Things I use in my daily life and bring me productivity at work. I decided to build this
				part of <span class="text-yellow-500 font-semibold">joaogomes.dev</span> because i realy like
				to share and give a possible tip to other devs. ✌️
			</p>
		</div>
		<div class="mt-8">
			<img alt="My great setup" src={setup} width={900} height={600} class="rounded-2xl" />
		</div>
	</div>

	<div class="mt-10">
		<h2 class="text-2xl font-bold text-indigo-500">Desk.</h2>
		<p class="text-lg text-zinc-400 mt-3">
			Thinks that i have on my desk at home were i spend time grinding 👆
		</p>
		<div class="ml-10 mt-2 text-lg">
			<UseItem
				link="https://www.ikea.com/pt/pt/p/linnmon-adils-mesa-branco-s29932181/"
				name="Ikea desk"
			/>
			<UseItem
				link="https://www.ikea.com/pt/pt/p/elloven-suporte-do-monitor-c-gaveta-antracite-00485101/"
				name="Ikea monitor stand"
			/>
			<UseItem
				link="https://alpha-gamer.com/product/alpha-gamer-nebula-gaming-chair/"
				name="Alpha Gamer Nebula chair"
			/>
			<UseItem name="Regular mousepad" />
			<UseItem name="Regular lamp" />
			<UseItem
				link="https://steelseries.com/gaming-headsets/arctis-3"
				name="Headset SteelSeries Arctis 3"
			/>
			<UseItem
				link="https://www.worten.pt/produtos/monitor-curvo-samsung-lc24f396fhrxen-24-full-hd-va-freesync-6554794"
				name="Samsung 24” curved monitor"
			/>
			<UseItem
				link="https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard"
				name="Keykron K2 mechanical keyboard"
			/>
		</div>
	</div>

	<div class="mt-10">
		<h2 class="text-2xl font-bold text-indigo-500">Backpack.</h2>
		<p class="text-lg text-zinc-400 mt-3">Thinks that i carry everyday with me on my 🎒</p>
		<div class="ml-10 mt-2 text-lg">
			<UseItem name="Amazon Backpack" />
			<UseItem name="M1 Macbook Air">- 16 Ram - 251 Storage</UseItem>
			<UseItem name="Iphone 11" />
			<UseItem name="Mouse Logitech MX Master" />
			<UseItem name="UGreen 7 Port hub" />
			<UseItem name="Powerbank" />
			<UseItem name="Laptop sleeve" />
			<UseItem name="Apple Airpods 2nd generation" />
			<UseItem name="Apple Airpods Pro 2 generation" />
			<UseItem name="USB Lightning cable" />
			<UseItem name="USB-C cable" />
			<UseItem name="USB regular cable" />
		</div>
	</div>

	<div class="mt-10">
		<h2 class="text-2xl font-bold text-indigo-500">Laptop apps.</h2>
		<p class="text-lg text-zinc-400 mt-3">Mac apps that i use on my workflow 💻</p>
		<div class="ml-10 mt-2 text-lg">
			<UseItem name="Cron Calendar" />
			<UseItem name="Apple Notes" />
			<UseItem name="Notion" />
			<UseItem name="Arc Browser" />
			<UseItem name="Raycast" />
			<UseItem name="BitWarden" />
			<UseItem name="Clipy" />
		</div>
	</div>

	<div class="mt-10">
		<h2 class="text-2xl font-bold text-indigo-500">Mobile apps.</h2>
		<p class="text-lg text-zinc-400 mt-3">Mobile apps that i have installed on my Iphone 7 📱</p>
		<div class="ml-10 mt-2 text-lg">
			<UseItem name="Spotify" />
			<UseItem name="MB Way" />
			<UseItem name="Strong" />
			<UseItem name="WhatsApp" />
		</div>
	</div>
	<div class="mt-10">
		<h2 class="text-2xl font-bold text-indigo-500">Coding.</h2>

		<div class="mt-4 bg-green-900 bg-opacity-20 p-4 rounded-lg">
			<h2 class="text-lg font-bold text-yellow-500">⚡️ Becoming a blazing fast developer ⚡️</h2>
			<p class="text-lg text-zinc-400 mt-3">
				Im on the journey of learning a workflow with Neovim, and these are the tools there im
				using.
			</p>
			<div class="ml-6 mt-2 text-lg">
				<UseItem link="https://github.com/koekeishiya/yabai" name="Yabai">
					- a tiling window manager.
				</UseItem>
				<UseItem link="https://github.com/koekeishiya/skhd" name="skhd"
					>- a simple hotkey deamon.</UseItem
				>
				<UseItem link="https://github.com/tmux/tmux/wiki" name="Tmux"
					>- a terminal session manager.</UseItem
				>
				<UseItem link="https://github.com/starship/starship" name="Alacritty">- a terminal.</UseItem
				>
				<UseItem link="https://github.com/starship/starship" name="Starship"
					>- a awesome terminal prompt.</UseItem
				>
				<UseItem link="https://neovim.io/" name="NeoVim">
					- using AstroNvim as my baseline, your can find my own custom config
					<a class="hover:underline text-zinc-100" href="https://github.com/joaogomesdev/.nvim"
						>here</a
					>.
				</UseItem>
				<UseItem link="https://github.com/joaogomesdev/dotfiles" name="My own .dotfiles">
					- here your can find all my configuration files for the tools that I use.</UseItem
				>
			</div>
		</div>

		<div class="mt-10">
			<h2 class="text-2xl font-bold text-indigo-500">VSCode configuration.</h2>
			<p class="text-lg text-zinc-400 mt-3">
				Apps and tools that i use to craft the best code in the world 👨🏻‍💻
			</p>
			<div class="ml-10 mt-2 text-lg">
				<UseItem name="Visual Studio Code" />
				<UseItem name="Night Owl theme" />
				<UseItem name="Dark Mono font" />
			</div>
		</div>
	</div>

	<div class="mt-10">
		<h2 class="text-2xl font-bold text-indigo-500">CLIs.</h2>
		<p class="text-lg text-zinc-400 mt-3">Command line tools that i use on my workflow.</p>
		<div class="ml-10 mt-2 text-lg">
			<UseItem name="homebrew" />
			<UseItem name="asdf" />
			<UseItem name="nvm" />
			<UseItem name="npm" />
			<UseItem name="gh">- Github CLI</UseItem>
			<UseItem name="expo">- Expo CLI</UseItem>
		</div>
	</div>

	<div class="mt-10">
		<h2 class="text-2xl font-bold text-indigo-500">My Code Stack.</h2>
		<p class="text-lg text-zinc-400 mt-3">
			Technologies that im currently studying / using for my personal projects ✨
		</p>
		<div class="ml-10 mt-2 text-lg">
			<UseItem name="Typescript" />
			<UseItem name="Next" />
			<UseItem name="Svelte">- rebuilding this website with SvelteKit.</UseItem>
			<UseItem link="https://supabase.com" name="Supabase" />
			<UseItem link="https://prisma.io" name="Prisma" />
			<UseItem name="Tailwind CSS" />
			<UseItem name="React Native">- with Expo</UseItem>
		</div>
	</div>
</div>
