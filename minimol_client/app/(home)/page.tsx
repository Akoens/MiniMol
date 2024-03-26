import Image from "next/image";
import Link from "next/link"

import { Medal } from "lucide-react"

import { Button } from "@/components/ui/button"


export default function HomePage() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
          <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
            <Medal className="h-6 w-6 mr-2" />
            The better Pymol
          </div>
          <Button className="mt-6" size="lg" asChild>
            <Link href="/about">
              Check the about page
            </Link>
          </Button>

        </div>
      </div>

    </div>
  )
}
