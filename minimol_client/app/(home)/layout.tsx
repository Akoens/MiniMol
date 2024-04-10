import React from "react";

import { Navbar } from "./_components/navbar"

const LandingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="p-4 flex bg-zinc-950">
            <Navbar/>
            <main className="h-[98vh] w-screen ml-20 px-4">
                {children}
            </main>
        </div>
    );
};

export default LandingLayout;