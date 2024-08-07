import { EditScript } from "@/components/EditScript";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/UserContext";
import { Script } from "@/interfaces";

function getDate(date: string) {
  return date.split("T")[0].split("-").reverse().join("/");
}

export default function Main() {
  const { userScripts, saveAccessToken } = useAuth();

  return (
    <main className="flex h-screen flex-col items-center">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            rel="noopener noreferrer"
          >
            <img src="/Logo_R.png" alt="Logo Reborn" width={100} height={24} />
          </a>
        </div>
        <button
          className="flex items-center gap-2"
          onClick={() => saveAccessToken("")}
        >
          Sair
          <img
            src="/discord-icon.svg"
            alt="Discord Logo"
            width={24}
            height={24}
          />
        </button>
      </div>
      <h1 className="text-3xl mb-8">Meus scripts</h1>
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="flex gap-4 flex-wrap w-3/4">
          {userScripts.map((script: Script) => (
            <div
              className="flex flex-col items-center border-2 border-zinc-600 rounded-lg p-4 w-48 gap-2"
              key={script.id}
            >
              <h2 className="truncate">
                {script.script_name.toLocaleUpperCase()}
              </h2>
              <hr className="my-1 w-full" />
              <p className="text-sm">
                {script.ip_address}:{script.port}
              </p>
              <div className="flex gap-2">
                <EditScript
                  id={script.id}
                  ip={script.ip_address}
                  port={script.port}
                />
                <Button
                  onClick={() => {
                    window.location.href = script.script_download;
                  }}
                >
                  Download
                </Button>
              </div>
              <p className="text-sm text-center">
                Adquirido em: {getDate(script.created_at)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

/* 
created_at: "2023-12-27T21:13:27.478-03:00"
customer_id: "389108651283185664"
expires_at: null
id: "cf19f801-b985-40e4-a49f-1dd857caaa5f"
ip_address: "131.196.198.242"
port: 30123
script_download: "https://cdn.discordapp.com/attachments/924831130518179840/1120079926394101800/Mario_Kart.rar"
script_id: "6e38c0b9-9215-4b96-a5d5-8b995be3e425"
script_name: "will_kart_v2"
updated_at: "2024-05-21T16:06:48.244-03:00"
*/

// {JSON.stringify(userScripts)}
