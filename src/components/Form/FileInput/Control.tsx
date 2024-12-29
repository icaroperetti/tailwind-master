'use client'

import { ComponentProps } from "react";
import { useFileInput } from "./Root";

interface   ControlProps extends ComponentProps<'input'> {}

export function Control(props:ControlProps) {
  const { id } = useFileInput()
  return (<input {...props} type="file" className="sr-only" id={id} />)

}
