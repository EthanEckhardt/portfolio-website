"use client";

import { ReactNode } from "react";

export function ScrollSection(props: {
  children: ReactNode;
  className: string;
}) {
  const merge =
    props.className + " w-full h-dvh bg-black flex justify-between px-8";
  return <section className={merge}>{props.children}</section>;
}
