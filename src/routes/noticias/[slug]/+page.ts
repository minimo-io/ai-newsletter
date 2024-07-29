import { error } from '@sveltejs/kit';
// import { posts } from '$lib/data/posts';
const posts = [
	{
		slug: 'web-development-is-cool',
		title: 'Web Development is so cool!',
		content: 'Some bla bla bla <u>content written with Markdown in the future</u>'
	}
];

export async function load({ params }) {
	try {
		console.log(params.slug);
		const post = posts.find((post) => post.slug === params.slug);
		console.log(post);
		return {
			title: post!.title,
			content: post!.content
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
