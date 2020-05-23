import React, { useEffect } from "react";
import projectImg from "../../assets/img/project.jpeg";

export default function Project() {
    useEffect(() => {
        document.title = "My Projects";
        return () => {};
    });
    return (
        <main id="work">
            <h1 className="lg-heading">
                My <span className="text-secondary">Work</span>
            </h1>
            <h2 className="sm-heading">Some of my Projects</h2>

            <div className="projects">
                <div className="item">
                    <a href="//">
                        <img src={projectImg} alt="" />
                    </a>
                    <a href="//" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a
                        href="//"
                        className="btn-dark"
                        style={{ color: "white" }}
                    >
                        <i className="fab fa-github"></i> Github
                    </a>
                </div>
                <div className="item">
                    <a href="//">
                        <img src={projectImg} alt="" />
                    </a>
                    <a href="//" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a
                        href="//"
                        className="btn-dark"
                        style={{ color: "white" }}
                    >
                        <i className="fab fa-github"></i> Github
                    </a>
                </div>
                <div className="item">
                    <a href="//">
                        <img src={projectImg} alt="" />
                    </a>
                    <a href="//" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a
                        href="//"
                        className="btn-dark"
                        style={{ color: "white" }}
                    >
                        <i className="fab fa-github"></i> Github
                    </a>
                </div>
                <div className="item">
                    <a href="//">
                        <img src={projectImg} alt="" />
                    </a>
                    <a href="//" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a
                        href="//"
                        className="btn-dark"
                        style={{ color: "white" }}
                    >
                        <i className="fab fa-github"></i> Github
                    </a>
                </div>
                <div className="item">
                    <a href="//">
                        <img src={projectImg} alt="" />
                    </a>
                    <a href="//" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a
                        href="//"
                        className="btn-dark"
                        style={{ color: "white" }}
                    >
                        <i className="fab fa-github"></i> Github
                    </a>
                </div>
                <div className="item">
                    <a href="//">
                        <img src={projectImg} alt="" />
                    </a>
                    <a href="//" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a
                        href="//"
                        className="btn-dark"
                        style={{ color: "white" }}
                    >
                        <i className="fab fa-github"></i> Github
                    </a>
                </div>
                <div className="item">
                    <a href="//">
                        <img src={projectImg} alt="" />
                    </a>
                    <a href="//" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a
                        href="//"
                        className="btn-dark"
                        style={{ color: "white" }}
                    >
                        <i className="fab fa-github"></i> Github
                    </a>
                </div>
                <div className="item">
                    <a href="//">
                        <img src={projectImg} alt="" />
                    </a>
                    <a href="//" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a
                        href="//"
                        className="btn-dark"
                        style={{ color: "white" }}
                    >
                        <i className="fab fa-github"></i> Github
                    </a>
                </div>
            </div>
        </main>
    );
}
