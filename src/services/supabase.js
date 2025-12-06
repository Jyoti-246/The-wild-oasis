import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ouldhiefafyaycfjhnkb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91bGRoaWVmYWZ5YXljZmpobmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwNDc0ODMsImV4cCI6MjA3NTYyMzQ4M30.EGemHeSpsBs-g0QXSQGI0C5S5qfBUeW9DwizhQhBbVc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
