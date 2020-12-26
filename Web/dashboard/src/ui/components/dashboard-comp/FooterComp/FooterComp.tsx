import React from 'react';
import './FooterComp.scss';
import Grid from '@material-ui/core/Grid';
export const FooterComp = () => {
    return (
        <>
            <footer id="footer" className="grid-full">
                <div className="container">
                <div className="row-footer">
                    <div className="left">
                        <span className="left-footer-item">&copy; GogoCoffee 2020</span>
                    </div>
                    <div className="right">
                        <span className="right-footer-item">Review</span>
                        <span className="right-footer-item">Purchase</span>
                        <span className="right-footer-item">Docs</span>
                    </div>
                </div>

                 
                </div>
            </footer>
        </>
    )
}
