
import React from 'react';
import "./intro.css"
import Image from "next/image";
Image

function IntroContent() {
    return (
        <div className="intro-container">
            <h3 className="text-light text-left mb-3">Explore the full story.</h3>
            <h1 className=' text-center mb-5'>Thrill. <span className="text-white">Sleeker</span>.</h1>

            <div className="intro-content">
                <div className="intro-content-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eius rem ut autem,
                        eligendi deserunt saepe molestias atque dolorem quae obcaecati ea, magnam fugit recusandae commodi consequatur velit sunt totam natus facere fuga.
                    </p>
                    <br />
                    <p>
                        Dolorum facilis velit assumenda culpa <span className="text-white">eligendi dolores repudiandae cum</span>  impedit, ex ad aspernatur provident unde, debitis et. Consequuntur in tempore blanditiis nulla dicta tenetur facilis quae?
                        Nesciunt quos nulla vel maiores optio et tenetur explicabo vero atque dignissimos iste quisquam doloribus, corporis commodi veritatis aperiam recusandae molestiae iure voluptate? Possimus, eius.
                    </p>
                </div>
                <div className="intro-content-card">
                    <div className="card intro-card">
                        <Image id="intro-card-image" alt='intro-image' src={"/assets/images/intro-image.png"} fill={true} />
                        <p>Lorem, ipsum dolor.</p>
                        <p>Dignissimos voluptas <span className="text-white">pariatur tubulus</span>  excepturi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroContent
