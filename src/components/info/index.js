import React, { useEffect } from "react";
import profileImg from "../../assets/img/project.jpeg";

export default function Information() {
    useEffect(() => {
        document.title = "About Me";
        return () => {};
    });

    return (
        <main id="about">
            <h1 className="lg-heading">
                About <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">Nothing Ordinary</h2>

            <div className="about-info">
                <img
                    src={profileImg}
                    alt="The Lazy"
                    width="200px"
                    height="auto"
                    className="bio-image"
                />
                <div className="bio text-secondary">
                    <h2 className="">Bio</h2>
                    <h6>Full Stack Developer</h6>
                    <p style={{ color: "white", textAlign: "justify" }}>
                        Have been a full stack developer most of my years in the
                        development industry as I actually started my journey
                        back in 2014 by learning C++ before moving into Python
                        then joined the trend as a web developer to learn the
                        HTML and CSS which gave me reason to also learn
                        Javascript and jQuery along just to give the user the
                        first class experience every user desires.
                    </p>
                </div>
                <div className="job job-1">
                    <h3>Freelancer</h3>
                    <h6>Full stack Developer</h6>
                    <p>
                        I've been working as a professional free lancer from
                        November 2018 till current as I was then a student and
                        couldn't afford to take on a full time job. Currently a
                        final year student, and accepting full time job offers.
                    </p>
                </div>
                <div className="job job-2">
                    <h3>Intern at Afridash</h3>
                    <h6>Web Designer</h6>
                    <p>
                        During my IT period, I worked as a Front End developer
                        at Afridash Limited for 6 Months using technologies like
                        Azure and Figma to make Web app UI/UX to better user
                        experience and client satisfaction.
                    </p>
                </div>
                <div className="job job-3">
                    <h3>Private Firm</h3>
                    <h6>BackEnd Developer</h6>
                    <p>
                        Currently working part-time as a BackEnd developer on a
                        private firm project that's currently under building
                        process. It shall be completed before the end of July
                        and until such time I shall not accept more than two jobs
                        as this would consume more time than I Can give
                    </p>
                </div>
            </div>
        </main>
    );
}
