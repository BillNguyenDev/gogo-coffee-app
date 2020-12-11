import React from 'react';
import './FooterComp.scss';
export const FooterComp = () => {
    return (
        <div>
            <footer id="footer" className="grid-full">
                <div className="container">
                    <div className="left">
                        <span className="left-footer-item">GogoCoffee 2020</span>
                    </div>
                    <div className="right">
                        <span className="right-footer-item">Review</span>
                        <span className="right-footer-item">Purchase</span>
                        <span className="right-footer-item">Docs</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
