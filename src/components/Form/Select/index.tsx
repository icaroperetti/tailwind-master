'use client'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { SelectItem } from './SelectItem'

interface SelectProps extends SelectPrimitive.SelectProps{
  children: React.ReactNode
  placeholder?: string
}
export function Select({ children,placeholder,...props}: SelectProps) {
  return (
    <SelectPrimitive.Root {...props} >
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          className="text-black"
          placeholder={placeholder}
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="border-zin-300 z-10 w-[--radix-select-trigger-width] rounded-lg overflow-hidden border bg-white animate-slideDownAndFade shadow-sm"
        >
          <SelectPrimitive.Viewport>
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
