'use server'

import { createClient } from '@/utils/supabase/server'


export async function updatePassword(password: string, accessToken: string ) {
  console.log("reset password", password)
  console.log("reset password accessToken", accessToken)
 
  const supabase = createClient()

  await supabase.auth.exchangeCodeForSession(accessToken)
  const { error } = await supabase.auth.updateUser({ password: password })

  console.log("error", error)

  if(!error){
    return 'password updated'
}else{
  return null
}
}