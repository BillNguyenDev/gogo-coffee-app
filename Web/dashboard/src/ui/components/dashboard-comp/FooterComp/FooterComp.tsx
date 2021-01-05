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
                            <span className="right-footer-item">
                                <a>
                                    Review        
                                </a>
                            </span>
                            <span className="right-footer-item">
                                <a>
                                    Purchase        
                                </a>
                            </span>
                            <span className="right-footer-item">
                                <a>
                                    Docs      
                                </a>
                            </span>
                        </div>
                    </div>                 
                </div>
            </footer>
        </>
    )
}
