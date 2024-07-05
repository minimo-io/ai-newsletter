import dotenv from 'dotenv';
import * as supabasePkg from '@supabase/supabase-js';

interface SupabaseConfig {
	PUBLIC_SUPABASE_URL: string;
	PUBLIC_SUPABASE_ANON_KEY: string;
}

dotenv.config();

// Type guard to check for SupabaseConfig properties
function isSupabaseConfig(env: any): env is SupabaseConfig {
	return (
		typeof env.PUBLIC_SUPABASE_URL === 'string' && typeof env.PUBLIC_SUPABASE_ANON_KEY === 'string'
	);
}

let supabase: supabasePkg.SupabaseClient;

if (isSupabaseConfig(process.env)) {
	const { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } = process.env;
	supabase = supabasePkg.createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
} else {
	throw new Error('Missing required environment variables');
}

export { supabase };
