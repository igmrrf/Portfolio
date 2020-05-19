import React, { useEffect } from "react";

export default function Information() {
    useEffect(() => {
        document.title = "About Me";
        return () => {};
    });

    return (
        <main id='about'>
            <h1 className='lg-heading'>
                About <span className='text-secondary'>Me</span>
            </h1>
            <h2 className='sm-heading'>Let me tell you a few things</h2>

            <div className='about-info'>
                <img
                    src='img/port.jpg'
                    alt='The Lazy'
                    width='200px'
                    height='auto'
                    className='bio-image'
                />
                <div className='bio'>
                    <h3 className='text-secondary'>BIO</h3>
                    <h6>Full Stack Developer</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quos, totam consequuntur? Atque consequatur enim
                        assumenda, autem odio mollitia nulla reprehenderit
                        asperiores nobis fugit quam tempora est perspiciatis
                        necessitatibus, sit vero placeat officia porro totam.
                        Aut officiis voluptas necessitatibus ad dolorem?
                    </p>
                </div>
                <div className='job job-1'>
                    <h3>123 Webshop</h3>
                    <h6>Front-End Developer</h6>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nihil perferendis voluptatibus optio accusamus
                        incidunt non culpa cumque at dolor commodi, quidem
                        nesciunt blanditiis qui quod.
                    </p>
                </div>
                <div className='job job-2'>
                    <h3>Designer at Webfix</h3>
                    <h6>Web Designer</h6>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nihil perferendis voluptatibus optio accusamus
                        incidunt non culpa cumque at dolor commodi, quidem
                        nesciunt blanditiis qui quod.
                    </p>
                </div>
                <div className='job job-3'>
                    <h3>Mockup Makeup</h3>
                    <h6>Graphic Designer</h6>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nihil perferendis voluptatibus optio accusamus
                        incidunt non culpa cumque at dolor commodi, quidem
                        nesciunt blanditiis qui quod.
                    </p>
                </div>
            </div>
        </main>
    );
}
