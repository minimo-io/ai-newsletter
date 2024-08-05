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
		{
			title: 'Notícias',
			href: '/noticias'
		},
		{
			title: 'Treinamentos',
			href: '/treinamentos'
		},
		{
			title: 'Preços',
			href: '/precos'
		}
		// {
		// 	title: 'Assinatura Pro',
		// 	href: '/pro'
		// },
	],
	sidebarNav: [
		// {
		// 	title: 'Extras',
		// 	items: [
		// 		{
		// 			title: 'Consultorias',
		// 			href: '/b2b/consultorias',
		// 			items: []
		// 		}
		// 	]
		// }
	]
};
