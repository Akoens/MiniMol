import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Settings, ListTree, Dna } from "lucide-react"


export const Navbar = () => {
    return (
        <div className="fixed top-0 h-[97vh] py-4 z-10 flex flex-col items-center my-4 rounded-2xl  bg-zinc-800 border-[1px] border-zinc-500">
            <div className="mb-4 mx-2 hover:slate-100 ">
                <Logo />
            </div>
            {/* <Button className="rounded-full my-2 mx-2 text-slate-300 hover:text-slate-700" size="icon" variant="ghost" asChild>
                <Link href="/">
                    <Home/>
                </Link>
            </Button> */}
            <Button className="rounded-full my-2 mx-2 text-muted text-slate-300 hover:text-slate-700" size="icon" variant="ghost" asChild>
                <Link href="/editor">
                    <Dna/>
                </Link>
            </Button>

            <Button className="rounded-full my-2 mx-2 text-slate-300 hover:text-slate-700" size="icon" variant="ghost" asChild>
                <Link href="/browser">
                    <ListTree/>
                </Link>
            </Button>
            <div className="flex-1"></div>
            <Button className="rounded-full my-2 mx-2 text-slate-300 hover:text-slate-700" size="icon" variant="ghost" asChild>
                <Link href="/about">
                    <BookOpen/>
                </Link>
            </Button>
            <Button className="rounded-full my-2 mx-2 text-slate-300 hover:text-slate-700" size="icon" variant="ghost" asChild>
                <Link href="/">
                    <Settings/>
                </Link>
            </Button>
        </div>
    );
};