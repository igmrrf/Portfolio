import React, { useEffect } from "react";

export default function ContactForm() {
    useEffect(() => {
        document.title = "Contact Me";
        return () => {};
    });

    return (
        <main id='contact'>
            <h1 className='lg-heading'>
                Contact <span className='text-secondary'>Me</span>
            </h1>
            <h2 className='sm-heading'>Reach Me over the following</h2>
            <div className='boxes'>
                <div>
                    <span className='text-secondary'>Email:</span>
                    francis.igbiriki.fi@gmail.com
                </div>
                <div>
                    <span className='text-secondary'>Phone:</span> (454)
                    776-4535
                </div>
                <div>
                    <span className='text-secondary'>Address:</span>
                    <address>50 Main st, Boston MA 01201</address>
                </div>
            </div>
        </main>
    );
}
