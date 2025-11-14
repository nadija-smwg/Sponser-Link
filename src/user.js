import { supabase } from "./supabase";


export const sendUserData = async function({email,password}) {
   
const { data, error } = await supabase
  .from('users')
  .insert([
    { email,password},
  ])
  .select()

  if (error) {
    throw new Error("an error occured")
  }

  return data;
    
}