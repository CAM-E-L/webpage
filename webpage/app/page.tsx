import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import Header_loggedin from "@/components/Header_loggedin";

export default async function Index() {
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

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  //console.log("error", error)

  const { error3 } = await supabase.from('countries').insert({ id: 4, name: 'Denmark' })

  const { data: todos, error2 } = await supabase.from('countries').select('*')
  console.log("todos", todos)


  const { error4 } = await supabase.from('countries').delete().eq('id', 1)



  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        {!error ? <Header_loggedin /> : <Header />}
        <main className="flex-1 flex flex-col gap-6">
        <ul className="list-disc">
  <li>Now this is a story all about how, my life got flipped turned upside down</li>
</ul>

<ol className="list-decimal">
  <li>Now this is a story all about how, my life got flipped turned upside down</li>
</ol>

<ul className="list-none">
  <li>Now this is a story all about how, my life got flipped turned upside down</li>
</ul>

<div className="grid grid-cols-2 gap-2">
  <div className="bg-gray-200 row-span-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
  <div className="bg-gray-200">2</div>
  <div className="bg-gray-200">3</div>
  <div className="bg-gray-200">4</div>
</div>




          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs"></footer>
    </div>
  );
}