// import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async ({ locals: { supabase } }) => {
// 	const { data: countries } = await supabase
// 		.from('countries')
// 		.select('name')
// 		.limit(5)
// 		.order('name');
// 	return { countries: countries ?? [] };
// };

import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('countries').select();
	return {
		countries: data ?? []
	};
}
