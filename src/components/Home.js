import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import '../styles/home_styles.css';

import Deck from './Deck.js';

function Home() {
    const [loaded, setLoaded] = useState(false);
    const [gallery, setGallery] = useState(0);
    const galleryRef = useRef(null);

    useEffect(() => {
        setGallery(galleryRef);
        setLoaded(true);
    }, []);

    return (
        <div>
            <div className="section1">
                <img src="./images/background-section1.jpg" alt="" className="background_image" />
                <div className="greeting">Sinclaire<br />Market.</div>
            </div>

            <div ref={galleryRef} className="gallery">
                {
                    loaded ?
                        <Deck gallery={gallery} /> : null
                }
            </div>

            <div className="section2" style={{ backgroundImage: "url('images/marble.jpg')" }}>
                <div className="left_side">
                    Organic.<br />Ethical.<br />Fresh.
                </div>

                <div className="right_side">
                    <img src="./images/spice-bowl.png" alt="" />
                </div>

                <div className="call_to_action">
                    <Link to="/react-webpage-02/products">Browse our selection.</Link>
                </div>

                <img src="./images/spoons.png" alt="" className="spoons" />
            </div>

            <div className="section3">
                <div className="contacts">
                    <div className="contact_section">
                        <ul>
                            <li>Affiliates</li>
                            <li>Careers</li>
                            <li>Privacy</li>
                        </ul>
                    </div>

                    <div className="contact_section">
                        <ul>
                            <li>Telephone <i className="fas fa-phone-square-alt"></i></li>
                            <li>Email <i className="fas fa-envelope-square"></i></li>
                        </ul>
                    </div>

                    <div className="contact_section">
                        <ul>
                            <li>Instagram <i className="fab fa-instagram-square"></i></li>
                            <li>Twitter <i className="fab fa-twitter-square"></i></li>
                            <li>Facebook <i className="fab fa-facebook-square"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
