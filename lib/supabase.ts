import { createClient } from "@supabase/supabase-js";

console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("Service Key:", process.env.SUPABASE_SERVICE_ROLE_KEY ? "FOUND" : "MISSING");

export function createSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}