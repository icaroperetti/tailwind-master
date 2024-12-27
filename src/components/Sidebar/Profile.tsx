import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img src="http://github.com/icaroperetti.png" className="w-10 h-10 rounded-full" alt=""/>
      <div className="flex truncate flex-col ">
        <span className="text-sm truncate font-semibold text-zinc-700">Icaro</span>
        <span className="text-sm font-semibold text-zinc-500 truncate">icaroperetti50@gmail.com</span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className ="h-5 w-5 text-zinc-500"/>
      </button>
    </div>
  )
}
