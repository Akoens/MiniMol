import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Settings, ListTree, Dna } from "lucide-react"


export const Navbar = () => {
    return (
        <div className="fixed top-0 h-[98vh] py-2 w-16 z-10 flex flex-col items-center my-4 rounded-2xl  bg-zinc-800 border-[1px] border-zinc-500">
            <div className="py-4">
                <Logo/>
            </div>
            <Button className="rounded-full mt-4" size="icon" variant="ghost"  asChild>
                <Link href="/">
                    <Home className="text-slate-300"/>
                </Link>
            </Button>
            <Button className="rounded-full mt-4" size="icon" variant="ghost"  asChild>
                <Link href="/editor">
                    <Dna className="text-slate-300"/>
                </Link>
            </Button>
            <Button className="rounded-full mt-4" size="icon" variant="ghost"  asChild>
                <Link href="/browser">
                    <ListTree className="text-slate-300"/>
                </Link>
            </Button>

            <div className="flex-1"></div>
            <Button className="rounded-full mt-4" size="icon" variant="ghost"  asChild>
                <Link href="/about">
                    <BookOpen className="text-slate-300" />
                </Link>
            </Button>
            <Button className="rounded-full mt-4" size="icon" variant="ghost"  asChild>
                <Link href="/">
                    <Settings className="text-slate-300" />
                </Link>
            </Button>
        </div>
    );
};