import React from 'react'
import './footer-comp.scss';
import logo4 from '../../../../img/logo4.png';
import { Icon, InlineIcon } from '@iconify/react';
import facebookRect from '@iconify-icons/brandico/facebook-rect';
import twitterIcon from '@iconify-icons/cib/twitter';
import youtubeIcon from '@iconify-icons/cib/youtube';
import instagramIcon from '@iconify-icons/cib/instagram';
import fileTypeCoffeescript from '@iconify-icons/vscode-icons/file-type-coffeescript';

const FooterLoginComp = () => {

    return (
        <>
            <footer id="footer-content" className="grid-full">
                <div className="container">
                    <div className="row">
                        <div className="footer-details">
                            <div className="footer-info">
                                <div className="brand-footer">
                                    <img src={logo4} alt="" />
                                    <p className="brand-title">
                                        Gogo Coffee
                                    </p>
                                </div>
                                <span style={{ 'marginRight': '10px' }}>One cup of coffee in Gogo Coffee will boost your energy every morning.Come and order.
                                </span>
                                <Icon icon={fileTypeCoffeescript} />
                                <Icon icon={fileTypeCoffeescript} />
                                <div className="social-media">
                                    <Icon icon={facebookRect} />
                                    <Icon icon={instagramIcon} />
                                    <Icon icon={twitterIcon} />
                                    <Icon icon={youtubeIcon} />
                                </div>
                            </div>
                            <div className="footer-navigation">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">
                                            <h3>Apps:</h3>
                                            <li className="app-store"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" alt="" /></li>
                                            <li className="google-play"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQihbMObs2stYan2aQKMttr81DBv6GVs6elSA&usqp=CAU" alt="" /></li>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <h3>Branches</h3>
                                            <li>Sai Gon</li>
                                            <li>Ha Noi</li>
                                            <li>Hue</li>
                                            <li>Da Nang</li>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <h3>Information:</h3>
                                            <li>Page:<a href="https://www.facebook.com/"></a> </li>
                                            <li>Email:thecoffeeshop@gmail.com</li>
                                            <li>Contact:09778352582</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CopyRight />
            </footer>
        </>
    )
}

const CopyRight = () => {
    return (
        <>
            <div className="copy-right">
                <div className="container">
                    <div className="line"></div>
                    <label>
                        &copy; Copy right by Gogo coffee app in 2020
                    </label>
                </div>
            </div>
        </>
    )
}
export default FooterLoginComp
