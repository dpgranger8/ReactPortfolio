import { ReactNode } from "react";
import Header from "./header";

export default function Layout({ children }: { children: ReactNode | Array<ReactNode> }) {
  return (
    <main className="relative min-h-screen bg-zinc-900">
      <Header />
      <div className="w-full">
        {children}
      </div>
    </main>
  )
}