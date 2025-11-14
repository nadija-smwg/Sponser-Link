
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://oaqdwrrelsjcncddizaz.supabase.co'
const supabaseKey = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hcWR3cnJlbHNqY25jZGRpemF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwODk2NDQsImV4cCI6MjA3ODY2NTY0NH0.Rvvb1iIH1tsBgrlzBdY5oeQ4zVtKDqzn506ODjMNFCA"
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase };