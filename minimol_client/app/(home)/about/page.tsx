import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import Link from "next/link";

const enum names {
    MINIMOL = "MiniMol",
    NEXTJS = "NEXT.js",
    DJANGO = "Django",
    _3DMOL = "3Dmol.js",
    TAILWINDCSS = "Tailwindcss"
}


export default function AboutPage() {
    return (
        <div className="theme-zinc flex justify-center  text-zinc-300 my-10">
            <Tabs defaultValue="minimol" className="max-w-screen-xl w-full align-middle">
                {/* ABOUT TABS TRIGGERS */}
                <TabsList className="grid w-full grid-cols-5 bg-zinc-800 text-zinc-300">
                    <TabsTrigger value="minimol">{names.MINIMOL}</TabsTrigger>
                    <TabsTrigger value="nextjs">{names.NEXTJS}</TabsTrigger>
                    <TabsTrigger value="django">{names.DJANGO}</TabsTrigger>
                    <TabsTrigger value="3dmol">{names._3DMOL}</TabsTrigger>
                    <TabsTrigger value="tailwindcss">{names.TAILWINDCSS}</TabsTrigger>
                </TabsList>

                {/* MINIMOL */}
                <TabsContent value="minimol">
                    <div className="theme-zinc flex justify-center flex-col text-zinc-300 my-10">
                        <h1 className="text-3xl md:text-5xl font-bold pb-2">
                            What is {names.MINIMOL}?
                        </h1>
                        <span className="md:text-xl text-zinc-500 pb-8">
                            The better way to visualize proteins. With a user friendly and UX/UI.
                        </span>
                        <p>
                            This project was made as a way to improve on the way students and scientists might interact
                            with PDB files. Editing and reading PDB files would be done through editing/reading the
                            raw-text directly. Which is hard to understand without a reference table containing all the
                            indexes and properties. So this web-application is made to allow for easy reading, editing
                            and visualizing of PDB files. Currently there are two different tools that can be used.
                        </p>

                        <h1 className="text-xl font-bold pt-6 ">The Browser</h1>
                        <p>
                            The PDB Browser allows for easy navigation of a PDB file. It shows all the different
                            properties that are contained in a PDB file and shows what they are as well as what it's
                            value is. This makes it easy and quick to find specific properties.
                        </p>

                        <h1 className="text-xl font-bold pt-6">The Editor</h1>
                        <p>
                            The Editor is a visualization tool that allows for the rendering of PDB files. This is in
                            the form of a 3D protein that can be interacted with in various ways. It allows for; the
                            movement of a camera in the 3D space to view the protein from different directions,
                            the selection of different sections ot the protein, the alteration of colors and the
                            rendering style to be changed. <br/>
                            This tool also comes special visualization options showing the Solution Accessible Surface
                            Area and the Electrostatic Surface of the protein.
                            The Solution Accessible Surface Area (SASA) shows where a given molecule used as a
                            solution can assess regions of the protein.
                            Where as the Electrostatic Surface shows the charge distribution of the protein. This is
                            caused by different amino acids having different charges. This can influence orientation in
                            a solution or it's interaction with other charged proteins/molecules. <br/>
                        </p>
                        <p className={"font-bold"}>Here is an example use case for these visualizations:</p>
                        <div className={"rounded-md p-4 mt-2 bg-zinc-700 min-w-40 max-w-96 italic"}>
                            <p>
                                Yang, H., Qureshi, R. & Sacan, A. Protein surface representation and analysis by
                                dimension reduction. Proteome Sci 10 (Suppl 1), S1 (2012).
                            </p>
                            <Link href="https://doi.org/10.1186/1477-5956-10-S1-S1"
                                  className={"text-amber-300  hover:underline"}>
                                https://doi.org/10.1186/1477-5956-10-S1-S1
                            </Link>
                        </div>


                    </div>
                </TabsContent>

                {/* NEXTJS */
                }
                <TabsContent value="nextjs">
                    <div className="theme-zinc flex justify-center flex-col text-zinc-300 my-10">
                        <h1 className="text-3xl md:text-5xl font-bold pb-2">
                            What is {names.NEXTJS}?
                        </h1>
                        <span className="md:text-lg text-zinc-500 pb-8">
                           Lightweight javascript framework to create for static and server‑rendered applications
                        </span>

                        <p>

                        </p>


                    </div>
                </TabsContent>

                {/* DJANGO */}
                <TabsContent value="django">
                    <div className="theme-zinc flex justify-center flex-col text-zinc-300 my-10">
                        <h1 className="text-3xl md:text-5xl font-bold pb-2">
                            What is {names.DJANGO}?
                        </h1>
                        <span className="md:text-lg text-zinc-500 pb-8">
                            The better way to visualize proteins. With a user friendly and UX/UI.
                        </span>


                    </div>
                </TabsContent>

                {/* 3DMOL */}
                <TabsContent value="3dmol">
                    <div className="theme-zinc flex justify-center flex-col text-zinc-300 my-10">
                        <h1 className="text-3xl md:text-5xl font-bold pb-2">
                            What is {names._3DMOL}?
                        </h1>
                        <span className="md:text-lg text-zinc-500 pb-8">
                            The better way to visualize proteins. With a user friendly and UX/UI.
                        </span>
                        <p>3Dmol.js is an object-oriented Javascript library created by Nicholas Rego and David Koes
                            that uses WebGL as a
                            to render 3D molecular visualizations.</p>
                        <div className="rounded-md p-4 mt-2 bg-zinc-700 min-w-40 max-w-96 italic">
                            <p>
                                Nicholas Rego and David Koes
                                3Dmol.js: molecular visualization with WebGL Bioinformatics (2015) 31 (8): 1322-1324
                                <Link href={"http://doi.org/10.1093/bioinformatics/btu829"}
                                      className={"inline text-amber-300 hover:underline"}>
                                    doi:10.1093/bioinformatics/btu829
                                </Link>
                            </p>
                        </div>


                    </div>
                </TabsContent>

                {/* TailwindCSS */}
                <TabsContent value="tailwindcss">
                    <div className="theme-zinc flex justify-center flex-col text-zinc-300 my-10">
                        <h1 className="text-3xl md:text-5xl font-bold pb-2">
                            What is {names.TAILWINDCSS}?
                        </h1>
                        <span className="md:text-lg text-zinc-500 pb-8">
                            Rapidly build modern websites without ever leaving your HTML.
                        </span>
                        <p></p>
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    );
};