import React, {Fragment} from 'react';

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-col first">
                                <img className="footer-image" src="https://i.ibb.co/KbcB4KQ/Logo.png" alt="footer-logo"/>
                                <p className="p-small">Design Curved is a Digital Agency that specializes
                                    in technology-based Design and Development Service Based In the USA</p>
                                <div className="footer-col fourth">
                                    <a href="#">
                                        <img src="https://i.ibb.co/BcYQHBr/f-1.png" alt="footer icon"/>
                                    </a>
                                    <a href="#">
                                        <img src="https://i.ibb.co/rtW5xQ0/16px.png" alt="footer icon"/>
                                    </a>
                                    <a href="#">
                                        <img src="https://i.ibb.co/1zFXLWN/Vector.png" alt="footer icon"/>
                                    </a>
                                    <a href="#">
                                        <img src="https://i.ibb.co/71dGQH5/Vector.png" alt="footer icon"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-col second">
                                <h5>Quick Links</h5>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <li className="media">
                                        <div className="media-body"><a href="#">About Us</a></div>
                                    </li>
                                    <li className="media">
                                        <div className="media-body"><a href="#">Latest Projects</a></div>
                                    </li>
                                    <li className="media">
                                        <div className="media-body"><a href="#">Contact Us</a></div>
                                    </li>
                                    <li className="media">
                                        <div className="media-body"><a href="#">FAQ</a></div>
                                    </li>
                                    <li className="media">
                                        <div className="media-body"><a href="#">Careers</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-col third">
                                <h5>Services</h5>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <li className="media">
                                        <div className="media-body"><a href="#">Branding</a></div>
                                    </li>
                                    <li className="media">
                                        <div className="media-body"><a href="#">UI/UX Design</a></div>
                                    </li>
                                    <li className="media">
                                        <div className="media-body"><a href="#">Web Development</a></div>
                                    </li>
                                    <li className="media">
                                        <div className="media-body"><a href="#">Webflow Development</a></div>
                                    </li>
                                    <li className="media">
                                        <div className="media-body"><a href="#">Mobile App Development</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-col fourth">
                                <h5>Newsletter</h5>
                                <p className="p-small">Get the latest news, events and  more delivered to your inbox.
                                </p>
                                <button className="about-title-button " role="button">Email Address</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 footer-end">
                            <p className="p-small"> © 2023 - Design Curved Inc.</p>
                            <p className="p-small">Privacy & Terms</p>
                            <p className="p-small footers-end">Made with  By Design Curved</p>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Footer;