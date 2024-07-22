<script>
	import Icon from '@iconify/svelte';

	import me from '$lib/assets//me.png';
</script>

<div id="about" class="scroll-smooth w-full 3xs:max-w-2lg md:max-w-4xl">
	<div class="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
		<div class="flex flex-col gap-4">
			<h1 class="font-bold text-4xl">About me.</h1>
			<div class="flex flex-col gap-4 w-full md:max-w-md">
				<p class="text-zinc-400 font-mono">
					My name is <span class="text-purple-500 font-semibold">João Gomes</span>, Im 22 years old
					and i live in Espinho, Portugal. 🇵🇹
				</p>
				<p class="text-zinc-400 font-mono">
					In my free time, I enjoy playing video games, watching movies, listening to music and most
					importantly, learning new things.
				</p>
				<p class="text-zinc-400 font-mono">
					I am on a journey to become a software developer with the goal of creating high-quality
					software that can change peoples lives.
				</p>
				<p class="text-zinc-400 font-mono">
					I am always open to meeting new people and sharing knowledge.
				</p>
				<p class="text-zinc-400 font-mono">
					I would describe myself as <span class="font-semibold text-green-500">proactive</span>,
					<span class="font-semibold text-yellow-500">dedicated</span>
					and <span class="font-semibold text-red-500"> motivated</span>.
				</p>
			</div>
		</div>

		<div>
			<img src={me} class="rounded-3xl 3xl:mr-2 md:mr-0" alt="Me" width="345" height="490" />
		</div>
	</div>
	
	<!-- <div class="mt-20 flex flex-col md:flex-row justify-between gap-8 md:gap-0 w-full">
		<div class="flex flex-col gap-4">
			<h1 class="font-bold text-4xl">Bio.</h1>
			<p class="text-zinc-500 text-xl">Enthusiastic about Web / Mobile development.</p>
			<p class="text-zinc-500 text-xl">
				Lets share knowledge to create a better world. <span class="ml-2">🌍</span>
			</p>
		</div>

		<div class="self-center">
			<img src={memoji} alt="Memoji" />
		</div>
	</div> -->

	<div class="mt-20">
		<div class="flex flex-col gap-4">
			<h1 class="font-bold text-4xl">Professional path.</h1>
			<p class="text-zinc-500 text-lg">
				This is my path since I began in the world of programming. I hope to learn even more and
				experience many more incredible places along the way, I am dedicated to always improve and
				strive for excellence.
			</p>
			<p class="text-zinc-500 text-lg">
				The journey so far has been filled with challenges and obstacles, but also with a lot of
				growth and satisfaction.
			</p>

			<p class="text-zinc-500 text-lg">
				I am looking forward to what the future holds. <span class="ml-2">🚀</span>
			</p>

			<div class="mt-10 flex flex-col gap-8 items-start">
				<div class="gap-1">
					<p class="text-2xl font-bold text-red-500">🏭 Techical Support - Internship</p>
					<div class="text-lg">
						<a href="https://www.sorema.pt" class="underline underline-offset-4" target="blank"
							>Sorema</a
						>
						<span> • </span>
						Espinho, Portugal 🇵🇹
					</div>
					<div class="mt-1">
						Mar to Jul <span> • </span> 2019
					</div>
				</div>

				<div class="gap-1">
					<p class="text-2xl font-bold text-violet-500">🌐 Web Developer -Internship</p>
					<div class="text-lg">
						<a href="https://www.wecreateyou.pt" class="underline underline-offset-4" target="blank"
							>WeCreateYou</a
						>
						<span> • </span>
						São Felix da Marinha, Portugal 🇵🇹
					</div>
					<div class="mt-1">
						Mar to Jul <span> • </span> 2020
					</div>
				</div>

				<div class="gap-1">
					<p class="text-2xl font-bold text-yellow-500">🪪 Web Developer - Internship</p>
					<div class="text-lg">
						<a href="https://www.unizon.pt" class="underline underline-offset-4" target="blank"
							>Unizon</a
						>
						<span> • </span>
						Remote | Porto, Portugal 🇵🇹
					</div>
					<div class="mt-1">
						Mar to Jul <span> • </span> 2022
					</div>
				</div>

				<div class="gap-1">
					<p class="text-2xl font-bold text-blue-500">🏨 Fullstack Web Developer</p>
					<div class="text-lg">
						<a
							href="https://noniussolutions.com/"
							class="underline underline-offset-4"
							target="blank">Nonius Software</a
						>
						<span> • </span>
						Maia , Portugal 🇵🇹
					</div>
					<div class="mt-1">
						Sep <span> • </span> 2022 to Feb <span> • </span> 2023
					</div>
				</div>

				<div class="gap-1">
					<p class="text-2xl font-bold text-gray-200">🥚 Front-end Developer</p>
					<div class="text-lg">
						<a href="https://significa.co/" class="underline underline-offset-4" target="blank"
							>Significa</a
						>
						<span> • </span>
						Porto , Portugal 🇵🇹
					</div>
					<div class="mt-1">
						Feb 2023 <span> • </span> Current
					</div>
				</div>
			</div>
		</div>
	</div>

	<div
		class="mt-20 flex flex-col md:flex-row justify-between gap-8 md:gap-0 w-full items-center md:items-start"
	>
		<div class="flex flex-col">
			<h1 class="font-bold text-4xl">Experience summary.</h1>
			<p class="text-zinc-400 text-lg mt-6">
				I started my study journey in Development during high school, in the professional course of
				“Management and Programming of Computer Systems” where I had the opportunity to carry out
				two curricular internships.
			</p>
			<p class="text-zinc-400 text-lg mt-6">
				At the end of the last high school year, I started my self-taught studies in Web Development
				through a Node, React and React Native bootcamp provided by Rocketseat. This experience
				enabled me to develop a more appropriate study method according to the needs of the market
				and focused on the practical side, where I made different projects (such as Ticked, Happy,
				Lets Play that can be found on my Github).
			</p>
			<p class="text-zinc-400 text-lg mt-6">
				After concluding high school and the Rocketseat bootcamp (2020), I joined the “Professional
				Superior Technical Course in Agile Software Development” carried out by ISEP, where were
				addressed topics and contents of Computer Engineering with a focus on agile development. The
				course lasted two years (2020-2022) with an internship in the last semester. During this
				internship, I was responsible for an entire project, going through all stages of
				development, from gathering requirements to implementation. More specifically, I used React
				for the frontend and Elixir for the backend.
			</p>
			<p class="text-zinc-400 text-lg mt-6">
				From September 2022 to February 2023, I worked at Nonius, building full-stack applications
				using a diverse stack including Vue, PHP, JavaScript, and Python with Django.
			</p>
			<p class="text-zinc-400 text-lg mt-6">
				Currently, I am working at Significa, where I am involved in building exceptional and
				high-quality projects.
			</p>
			<p class="text-zinc-400 text-lg mt-6">
				Most importantly, I am always looking to evolve and learn! 🚀
			</p>
		</div>
	</div>

	<div class="mt-20 flex justify-between items-end w-full">
		<a
			href="#"
			class="border-2 border-indigo-500 p-4 rounded-full cursor-pointer hidden sm:inline-flex"
		>
			<Icon style="color: #FBAE95; font-size: 28px;" icon="material-symbols:arrow-upward-rounded" />
		</a>

		<div class="flex justify-center items-center gap-2">
			<a href="/me/uses">
				<h1 class="text-4xl hover-underline-animationafter:bg-white cursor-pointer">What i use.</h1>
			</a>
			<a href="/me/uses" class="border-2 border-indigo-500 p-3 rounded-full cursor-pointer">
				<Icon
					style="color: #FBAE95; font-size: 28px;"
					icon="material-symbols:arrow-forward-rounded"
				/>
			</a>
		</div>
	</div>
</div>
