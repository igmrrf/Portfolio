import React, { useEffect } from "react";

export default function Introduction() {
    useEffect(() => {
        document.title = "The Lazy Dev Otaku";
        return () => {};
    });

    return (
        <main id='home'>
            <h1 className='lg-heading'>
                The Lazy <span className='text-secondary'>Dev Otaku</span>
            </h1>
            <h2 className='sm-heading'>
                Web Developer, Programmer, Designer & Entrepreneur
            </h2>
            <div className='icons'>
                <a
                    href='https://www.twitter.com/igmrrf'
                    className='twitter-icon'
                >
                    <i className='fab fa-twitter fa-2x'></i>{" "}
                </a>
                <a
                    href='https://www.facebook.com/igmrrf'
                    className='facebook-icon'
                >
                    <i className='fab fa-facebook fa-2x'></i>
                </a>
                <a
                    href='https://www.linkedin.com/in/igmrrf'
                    className='linkedin-icon'
                >
                    <i className='fab fa-linkedin fa-2x'></i>
                </a>
                <a href='https://github.com/igmrrf' className='github-icon'>
                    <i className='fab fa-github fa-2x'></i>
                </a>
            </div>
        </main>
    );
}
