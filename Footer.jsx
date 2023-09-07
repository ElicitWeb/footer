import "@fontsource/readex-pro";
import React from "react";
import './footer.css';
import footerpng from './Untitled.svg';
import insta from './insta.png';
import elicit from './elicit.png';

const Footer = () => {
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <a href="#" className="elements">
                            <img src={insta} alt="" className="ig-logo"/>
                            <p>ACM MUJ Student Chapter</p>
                        </a>
                        <a href="#"  className="elements">
                            <img src={insta} alt="" className="ig-logo"/>
                            <p>ACM MUJ SIGAI</p>
                        </a>
                        <a href="#"  className="elements">
                            <img src={insta} alt="" className="ig-logo"/>
                            <p>ELICIT</p>
                        </a>
                        <a href="#"  className="elements">
                            <img src={insta} alt="" className="ig-logo"/>
                            <p>ACM MUJ SIGBED</p>
                        </a>
                        <a href="#"  className="elements">
                            <img src={insta} alt="" className="ig-logo"/>
                            <p>ACM MUJ W</p>
                        </a>
                    </div>
                </div>
                <div className="sb__footer-content" style={{backgroundImage: `url(${footerpng})`}}>
                    <><a href="#"><img src={elicit} className="elicit"/></a></>
                    <div className="credits">
                        Developed by Ayush, Kunal, Lalit and Siddharth
                    </div>
                    <div className="sb__footer-copyright">
                        <p>
                            Copyright ©
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
