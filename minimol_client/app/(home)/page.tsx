import Image from "next/image";
import Link from "next/link"

import { Medal } from "lucide-react"

import { Button } from "@/components/ui/button"


const HomePage = () => {
  return (
    <div className="theme-zinc flex justify-center text-center flex-col text-zinc-300 my-10">
      <h1 className="text-6xl font-bold">
        Create, Visualize & Expand
      </h1>
      <span className="text-lg text-zinc-500">
        The better way to visualize proteins. With a user friendly and UX/UI.
      </span>
    </div>
  )
}

export default HomePage 
