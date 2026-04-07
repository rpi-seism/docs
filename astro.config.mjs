// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RPI-Seism',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/rpi-seism' }],
			sidebar: [
				{
					label: 'Daemon',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Daemon Docs', slug: 'daemon' },
						{ label: 'Architecture', slug: 'daemon/system-architecture' },
						{ label: 'Configuration', slug: 'daemon/configuration' },

						{
							label: 'Jobs',
							collapsed: false,
							items: [
								{ label: 'Reader', slug: 'daemon/jobs/reader' },
								{ label: 'Writer', slug: 'daemon/jobs/mseed-writer' },
								{ label: 'Websocket', slug: 'daemon/jobs/websocket' },
								{ label: 'Trigger', slug: 'daemon/jobs/trigger' },
								{ label: 'Notifier', slug: 'daemon/jobs/notifier' }
							]
						},

						{
							label: 'Advanced',
							collapsed: false,
							items: [
								{ label: 'Serial Protocol', slug: 'daemon/advanced/serial-protocol' },
								{ label: 'Station XML', slug: 'daemon/advanced/station-xml' },
							]
						}
					],
				},
				{
					label: 'MCU',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'MCU Docs', slug: 'mcu' },
					],
				},
				{
					label: 'API',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'API Docs', slug: 'api' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],

			customCss: ['./src/mathjax.css'],
		}),
	],

	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	},
});
