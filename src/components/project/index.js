import React, { useEffect } from "react";

export default function Project() {
    useEffect(() => {
        document.title = "My Projects";
        return () => {};
    });
    return (
        <main id='work'>
            <h1 className='lg-heading'>
                My <span className='text-secondary'>Work</span>
            </h1>
            <h2 className='sm-heading'>Check out some of my Projects</h2>

            <div className='projects'>
                <div className='item'>
                    <a href='//'>
                        <img src='./img/two.jpg' alt='' />
                    </a>
                    <a href='//' className='btn-light'>
                        <i className='fas fa-eye'></i> Project
                    </a>
                    <a href='//' className='btn-dark'>
                        <i className='fab fa-github'></i> Github
                    </a>
                </div>
                <div className='item'>
                    <a href='//'>
                        <img src='./img/two.jpg' alt='' />
                    </a>
                    <a href='//' className='btn-light'>
                        <i className='fas fa-eye'></i> Project
                    </a>
                    <a href='//' className='btn-dark'>
                        <i className='fab fa-github'></i> Github
                    </a>
                </div>
                <div className='item'>
                    <a href='//'>
                        <img src='./img/two.jpg' alt='' />
                    </a>
                    <a href='//' className='btn-light'>
                        <i className='fas fa-eye'></i> Project
                    </a>
                    <a href='//' className='btn-dark'>
                        <i className='fab fa-github'></i> Github
                    </a>
                </div>
                <div className='item'>
                    <a href='//'>
                        <img src='./img/two.jpg' alt='' />
                    </a>
                    <a href='//' className='btn-light'>
                        <i className='fas fa-eye'></i> Project
                    </a>
                    <a href='//' className='btn-dark'>
                        <i className='fab fa-github'></i> Github
                    </a>
                </div>
                <div className='item'>
                    <a href='//'>
                        <img src='./img/two.jpg' alt='' />
                    </a>
                    <a href='//' className='btn-light'>
                        <i className='fas fa-eye'></i> Project
                    </a>
                    <a href='//' className='btn-dark'>
                        <i className='fab fa-github'></i> Github
                    </a>
                </div>
            </div>
        </main>
    );
}
