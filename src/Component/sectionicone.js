import React from 'react';

const SectionIcon = () => {
    return (
        <main className="flex justify-evenly max-sm:flex-col items-center">
            <div className="p-4 shadow-xl">
                <video width="130" height="130" preload="none" className="rounded-sm" style={{ background: "transparent url('https://cdn-icons-png.flaticon.com/512/6454/6454209.png') 50% 50% / fit no-repeat" }} autoPlay loop muted playsInline>
                <source src="https://cdn-icons-mp4.flaticon.com/512/6844/6844372.mp4" type="video/mp4"/>

                </video>
                <p className="text-center text-xl mt-4">Point de vente</p>
            </div>
            <div className="p-4 shadow-xl">
                <video width="130" height="130" preload="none" className="rounded-sm" style={{ background: "transparent url('https://cdn-icons-png.flaticon.com/512/6454/6454209.png') 50% 50% / fit no-repeat" }} autoPlay loop muted playsInline>
                <source src="https://cdn-icons-mp4.flaticon.com/512/9121/9121598.mp4" type="video/mp4"/>
                </video>
                <p className="text-center text-xl mt-4">Tickets et tarifs</p>
            </div>     
            <div className="p-4 shadow-xl">
                <video width="130" height="130" preload="none" className="rounded-sm" style={{ background: "transparent url('https://cdn-icons-png.flaticon.com/512/6454/6454209.png') 50% 50% / fit no-repeat" }} autoPlay loop muted playsInline>
                <source src="https://cdn-icons-mp4.flaticon.com/512/8112/8112748.mp4" type="video/mp4"/>

                </video>
                <p className="text-center text-xl mt-4">Choisir ma carte Alsa</p>
            </div>
            <div className="p-4 shadow-xl">
                <video width="130" height="130" preload="none" className="rounded-sm" style={{ background: "transparent url('https://cdn-icons-png.flaticon.com/512/6454/6454209.png') 50% 50% / fit no-repeat" }} autoPlay loop muted playsInline>
                    <source src="https://cdn-icons-mp4.flaticon.com/512/6454/6454209.mp4" type="video/mp4" />
                </video>
                <p className="text-center text-xl mt-4">Horaire</p>
            </div>
              <div className="p-4 shadow-xl">
                <video width="130" height="130" preload="none" className="rounded-sm" style={{ background: "transparent url('https://cdn-icons-png.flaticon.com/512/6454/6454209.png') 50% 50% / fit no-repeat" }} autoPlay loop muted playsInline>
                <source src="https://cdn-icons-mp4.flaticon.com/512/6844/6844567.mp4" type="video/mp4"/>
                </video>
                <p className="text-center text-xl mt-4">Itinéraire</p>
            </div>
            
               </main>
    );
};

export default SectionIcon;
