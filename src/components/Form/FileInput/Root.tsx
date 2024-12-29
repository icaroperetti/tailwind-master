'use client'
import { ComponentProps,createContext, useContext, useId } from "react";

export interface RootProps extends ComponentProps<'div'> {}

type FileInputContextType = {
  id: string
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  return <FileInputContext.Provider value={{ id }}><div {...props} ></div></FileInputContext.Provider>
}

export const useFileInput = () => useContext(FileInputContext)
