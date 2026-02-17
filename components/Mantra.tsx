"use client";

import Folder from "./ui/Folder";

export const Mantra = () => {
    const items = [
        <div key="build" className="flex items-center justify-center w-full h-full text-sm md:text-xl font-bold text-black border-none rounded-lg">Build</div>,
        <div key="manifest" className="flex items-center justify-center w-full h-full text-sm md:text-lg font-bold text-black border-none rounded-lg">Manifest</div>,
        <div key="break" className="flex items-center justify-center w-full h-full text-sm md:text-xl font-bold text-black border-none rounded-lg">Break</div>,

    ];

    return (
        <section className="py-24 flex flex-col items-center justify-center bg-background overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">
                Our Mantra
            </h2>
            <div className="relative w-full flex justify-center items-end h-[400px] pb-20 md:h-[500px]">
                <div className="transform scale-[0.6] md:scale-100 origin-bottom transition-transform duration-300">
                    <Folder
                        size={3.5}
                        color="#00E5FF"
                        className="custom-folder"
                        items={items}
                    />
                </div>
            </div>
        </section>
    );
};
