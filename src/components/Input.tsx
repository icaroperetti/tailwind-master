import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type PrefixProps = ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
  return <div {...props}></div>
}

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-400 dark:placeholder-zinc-400"
      placeholder="Search"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        'dark:focus-whitin:border-violet-500 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:ring-violet-500/20',
        props.className,
      )}
      {...props}
    ></div>
  )
}
