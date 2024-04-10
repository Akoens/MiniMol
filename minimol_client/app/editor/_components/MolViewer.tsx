'use client'

import $ from "jquery";


import {Input} from "@/components/ui/input"
import {useState, useEffect} from "react";
import {createViewer, download, GLViewer, Gradient, SurfaceType, VolumeData} from "3dmol";


const MolViewer = ({params,}: { params: { pdb_id: string } }) => {
    useEffect(() => {
        const initViewer = () => {
            let element = $("#container-01");
            let config = {backgroundColor: "black"};
            let viewer: GLViewer | undefined = createViewer(element, config);
            if (viewer == undefined) {
                return
            }
            downloadPDB(viewer)

            viewer.setClickable({}, true, (atom: any, viewer_inner: GLViewer, event: any, container: any) => {
                    viewer_inner.addLabel(atom.resn + ":" + atom.atom, {
                        position: atom,
                        backgroundColor: 'darkgreen',
                        backgroundOpacity: 0.8
                    });
                })
            viewer.zoomTo();
            viewer.zoom(0.8, 2000);
        };

        const downloadPDB = (viewer: GLViewer) => {
            download("pdb:".concat(params.pdb_id), viewer, {multimodel: true, frames: true}, function () {
                viewer.setStyle({}, {cartoon: {color: "spectrum"}});
                viewer.render();

            });
        }

        if (typeof window !== "undefined") {
            initViewer();
        }
    }, []);

    return (
        <div id="container-01" className="flex flex-1"/>
    );
};

export default MolViewer;