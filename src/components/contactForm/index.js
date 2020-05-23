import React, { useEffect } from "react";
import Formik from "../formik";
export default function ContactForm() {
    useEffect(() => {
        document.title = "Contact Me";
        return () => {};
    });

    return (
        <main id="contact">
            <h1 className="lg-heading">
                Contact <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">Reach Me over the following</h2>
            <div className="boxes">
                <div>
                    <span className="text-secondary">Email: </span>
                    francis.igbiriki@yahoo.com
                </div>
                <div>
                    <span className="text-secondary">Phone:</span> (+234)
                    813-704-5484
                </div>
            </div>
            <Formik />
        </main>
    );
}
