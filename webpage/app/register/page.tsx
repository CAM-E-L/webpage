import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from '@/components/HeaderLoggedIn'
import HeaderLoggedOut from '@/components/HeaderLoggedOut'

import Image from "next/image";
import logoCAM from "../../public/images/logoCAM.svg";

import Link from "next/link";

export default async function RegisterPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex flex-col gap-5 w-full max-w-6xl px-3 text-xl animate-in">
    {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <div className="text-2xl font-semibold text-center">
  Register account.
      </div>

    
    </main>
  );
}
