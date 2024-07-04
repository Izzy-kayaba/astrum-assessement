import React, { Children } from 'react'
import "./header.css"
import Image from 'next/image'
import InfoCards from "../info-cards/infocards";
import Footer from "../footer/footer";
import VideoComponent from "../video/video";

export default function MainHeader({ Children }) {
    return (
        <section className="header-wrapper">
            <header className="header-header">
                <h1 className="header-title">Explore <br />Discover </h1>
                <div className="infinite-text-container">
                    <div className="infinite-text">
                        <span>From the towering peaks of the Himalayas to the serene beaches of the Maldives.</span>
                    </div>
                </div>
                <Image id="header-background" alt='sea-background' src={"/assets/images/sea-background.jpg"} fill={true} priority />
                <Image id="header-foreground" alt='foreground-grass' src={"/assets/images/foreground-grass.png"} fill={true} />
            </header>
            <div className="header-content">
                {Children}
            </div>
            <main>
                <InfoCards />
                <VideoComponent />
            </main>
            <Footer />
        </section>
    )
}
