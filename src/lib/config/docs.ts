import type { NavItem, SidebarNavItem } from '$lib/types/nav.js';

type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'Ferramentas',
			href: '/ferramentas'
		},
		{
			title: 'Cursos',
			href: '/cursos'
		},
		// {
		// 	title: 'Assinatura Pro',
		// 	href: '/pro'
		// },
		{
			title: 'Sponsors',
			href: '/sponsors'
		}
	],
	sidebarNav: [
		{
			title: 'Consultoria em IA - B2B',
			items: [
				{
					title: 'Introdução',
					href: '/intro',
					items: []
				},
				{
					title: 'Assessoria em IA (online)',
					href: '/b2b/asessoria',
					items: []
				},
				{
					title: 'Consultorias em IA (presencial)',
					href: '/b2b/consultorias',
					items: []
				},

				{
					title: 'Sobre nós',
					href: 'https://minimo.io',
					items: []
				}
			]
		}
	]
};
