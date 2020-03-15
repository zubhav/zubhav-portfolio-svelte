<style>
	.avatar {
		box-shadow: 10px 7px 30px rgba(0, 0, 0, 0.35);
	}

	.landing-icon {
		box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
	}

	.linkedin img { 
		margin-left: 2px;
		margin-bottom: 2px;
	}

	.twitter img { 
		margin-top: 3px;
		margin-left: 2px;
	}

	.github img { 
		margin-top: 3px;
		margin-right: 1px;
	}

	.stackoverflow img { 
		margin-left: 2px;
		margin-bottom: 3px;
	}
</style>

<script>
	const items = [
		{
			id: 'twitter',
			title: 'Twitter',
			href: 'https://twitter.com/SubDeveloper',
			icon: 'twitter.png',
		},
		{
			id: 'linkedin',
			title: 'LinkedIn',
			href: 'https://www.linkedin.com/in/subhav-g',
			icon: 'linkedin.png',
		},
		{
			id: 'github',
			title: 'GitHub',
			href: 'https://github.com/zubhav',
			icon: 'github.png',
		},
		{
			id: 'stackoverflow',
			title: 'StackOverflow',
			href: 'https://stackoverflow.com/users/6494623/zubhav',
			icon: 'stackoverflow.png',
		}
	]
</script>

<svelte:head>
	<title>Subhav Gautam</title>
</svelte:head>

<div class="text-center flex h-screen">
	<a
		href="mailto:subhavg@icloud.com?subject=Request for CV&body=Hi Subhav, I'm ____.%0D%0DCould you please send me a copy of your CV?"
		title="Request my CV"
	>
		<img class="cv absolute top-0 left-0 w-1/4" alt="Request my CV" src="./images/cv.png"/>
	</a>

	<div class="m-auto">
		<div class="pb-2">
			<img class="avatar mx-auto rounded-full" alt="Subhav Gautam avatar" src="./images/avatar.png" width="292"/>
		</div>

		<h1 class="text-4xl font-bold leading-relaxed">Subhav Gautam</h1>
		<h2 class="text-lg font-bold pt-2">Software Engineer specialising in web technologies</h2>

		<ul class="flex items-center justify-center mt-6">
			{#each items as item (item.id)}
				<li class="mr-6">
					<a 
						class={`landing-icon bg-white rounded-full flex justify-center items-center h-16 w-16 ${item.id}`} 
						href={item.href}
						target="_blank"
                		rel="noopener noreferrer"
					>
						<img alt={item.title} src={`./images/${item.icon}`}/>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>