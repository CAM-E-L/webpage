import { createClient } from "@/utils/supabase/server";

import ButtonHome from "./Buttons/Home";
import ButtonInformation from "./Buttons/Information";
import ButtonGetStarted from "./Buttons/GetStarted";

import ButtonRegister from "./Buttons/Register";
import ButtonLogin from "./Buttons/Login";


const canInitSupabaseClient = () => {
  // This function is just for the interactive tutorial.
  // Feel free to remove it once you have Supabase connected.
  try {
    createClient();
    return true;
  } catch (e) {
    return false;
  }
};
const isSupabaseConnected = canInitSupabaseClient();

export default function HeaderLoggedIn() {

  return (
    <nav className="w-full flex border-b h-16 mb-10 max-w-6xl">
    <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
      aaa
      bbb
      ccc
      ddd
      {isSupabaseConnected && <ButtonLogin/>}
    </div>
  </nav>
  );
}
