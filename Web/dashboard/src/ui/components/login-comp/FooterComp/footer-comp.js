import React from 'react'
import './footer-comp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



const FooterLoginComp = () => {

    return (
        <>
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="description">
                                <FontAwesomeIcon icon={faCoffee} />
                                <span>Vikinger Social Community was created in 2020, designed to be a new and exciting way to bring people together!</span>
                                <div className="social-media">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h3>Apps:</h3>
                                        <li className="app-store"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" alt="" /></li>
                                        <li className="google-play"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQihbMObs2stYan2aQKMttr81DBv6GVs6elSA&usqp=CAU" alt="" /></li>
                                    </div>
                                    <div className="col-sm-4">
                                        <h3>Information:</h3>
                                        <li>Page:<a href="https://www.facebook.com/"></a> </li>
                                        <li>Email:thecoffeeshop@gmail.com</li>
                                        <li>Contact:09778352582</li>
                                    </div>
                                    <div className="col-sm-4">
                                        <h3>Branches</h3>
                                        <li>Saigon</li>
                                        <li>Hanoi</li>
                                        <li>Hue</li>
                                        <li>Danang</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <FooterBottom />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const FooterBottom = () => {
    return (
        <>
            <div className="line"></div>
            <div className="copy-right text-center">
                &copy; Copy right by Gogo coffee app in 2020
            </div>
        </>
    )
}
export default FooterLoginComp
