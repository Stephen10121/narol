<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />

	<!-- Primary Meta Tags -->
	<title>Professional Heating & Cooling Solutions</title>
	<meta name="title" content="Professional Heating & Cooling Solutions" />
	<meta name="description" content="Trusted HVAC experts in Washington. NAROL Heating & Cooling delivers quality installations, repairs, and maintenance with licensed, bonded professionals." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://narolhvac.com/" />
	<meta property="og:title" content="Professional Heating & Cooling Solutions" />
	<meta property="og:description" content="Trusted HVAC experts in Washington. NAROL Heating & Cooling delivers quality installations, repairs, and maintenance with licensed, bonded professionals." />
	<meta property="og:image" content="https://narolhvac.com/frontpage.png" />

	<!-- X (Twitter) -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://narolhvac.com/" />
	<meta property="twitter:title" content="Professional Heating & Cooling Solutions" />
	<meta property="twitter:description" content="Trusted HVAC experts in Washington. NAROL Heating & Cooling delivers quality installations, repairs, and maintenance with licensed, bonded professionals." />
	<meta property="twitter:image" content="https://narolhvac.com/frontpage.png" />
</svelte:head>

{@render children()}
