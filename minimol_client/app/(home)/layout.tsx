import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function LandingLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="w-full bg-slate-100">
                {/* Navbar */}
                <div className="flex justify-center">
                    <Button>
                        Home
                    </Button>

                </div>

            </div>
            <main className="pr-40 pb-20 bg-slate-100">
                {children}
            </main>
        </div>
    );
};
