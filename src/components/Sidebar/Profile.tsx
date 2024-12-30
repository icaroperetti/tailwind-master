import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="http://github.com/icaroperetti.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Icaro
        </span>
        <span className="truncate text-sm font-semibold text-zinc-500">
          icaroperetti50@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
