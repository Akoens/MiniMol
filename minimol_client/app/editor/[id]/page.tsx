import dynamic from "next/dynamic";

// Dynamically import the MolViewer component
const MolViewer = dynamic(() => import("../_components/MolViewer"), {
  ssr: false,
});


export default function Editor({params,}: {params: {id: string}}) {
    return (
        <div className="flex flex-col bg-zinc-50">
            {/*<div className="m-4">*/}
            {/*    <Button> Download </Button>*/}
            {/*</div>*/}
            {/*<p>{params.id}</p>*/}
            <div className="absolute flex h-screen w-screen">
                <MolViewer params={{pdb_id: params.id}}></MolViewer>
            </div>
        </div>
    )
}