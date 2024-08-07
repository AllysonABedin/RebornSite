import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getApi, useAuth } from "@/context/UserContext";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader2, CheckCircle2Icon, XCircleIcon } from "lucide-react";
import { IEditScript, Script } from "@/interfaces";

export function EditScript({ id, ip, port }: IEditScript) {
  const { userScripts, setUserScripts } = useAuth();
  const [buttonIcon, setButtonIcon] = useState<JSX.Element | null>(null);

  const saveScriptChange = async () => {
    const ipEdited = document.getElementById("ip") as HTMLInputElement;
    const portEdited = document.getElementById("port") as HTMLInputElement;
    setButtonIcon(
      <Button variant="secondary">
        <Loader2 className="animate-spin" size={25} />
      </Button>
    );
    if (
      ipEdited.value === "" ||
      portEdited.value === "" ||
      (ipEdited.value === ip && Number(portEdited.value) === port)
    ) {
      setTimeout(() => {
        setButtonIcon(null);
      }, 1000);
      return;
    }
    const api = getApi();
    try {
      const response = await api.put(`/licenses/${id}`, {
        ip_address: ipEdited.value,
        port: Number(portEdited.value),
      });
      setUserScripts(
        userScripts.map((script: Script) => {
          if (script.id === id) {
            return {
              ...script,
              ip_address: ipEdited.value,
              port: Number(portEdited.value),
            };
          }
          return script;
        })
      );
      setButtonIcon(
        <Button variant="secondary">
          <CheckCircle2Icon size={25} color="green" />
        </Button>
      );
      console.log(response);
    } catch (error) {
      setButtonIcon(
        <Button variant="secondary">
          <XCircleIcon size={25} color="red" />
        </Button>
      );
      console.log(error);
    }
    setTimeout(() => {
      setButtonIcon(null);
    }, 1000);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="secondary">Editar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900">
        <DialogHeader>
          <DialogTitle>Editar licença</DialogTitle>
          <DialogDescription>
            Faça suas alterações. Clique em salvar quando finalizar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ip" className="text-right">
              IP
            </Label>
            <Input
              id="ip"
              defaultValue={ip}
              className="col-span-3 text-zinc-800"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="port" className="text-right">
              Porta
            </Label>
            <Input
              id="port"
              defaultValue={port}
              className="col-span-3 text-zinc-800"
            />
          </div>
        </div>
        <DialogFooter>
          {buttonIcon ? (
            buttonIcon
          ) : (
            <Button
              variant="secondary"
              type="submit"
              onClick={saveScriptChange}
            >
              Salvar mudanças
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
