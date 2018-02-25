import React        from 'react';
import './Footer.css';


const Footer = () => (
    <footer className="flex-row Footer">
        <article className="bordered offer">
            <h2 className="offer__title">Hot offer</h2>
            <p className="offer__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi magnam nisi, beatae asperiores quos dignissimos! Hic quibusdam, quod aspernatur tempora harum totam obcaecati?</p>
            <ul className="offer__list">
                <li className="offer__list-item"><span className="offer__list-marker"></span>Lorem ipsum dolor sit amet, consectetu</li>
                <li className="offer__list-item"><span className="offer__list-marker"></span>Lorem ipsum dolor sit amet, consectetur adi</li>
                <li className="offer__list-item"><span className="offer__list-marker"></span>Lorem ipsum dolor sit amet, con</li>
                <li className="offer__list-item"><span className="offer__list-marker"></span>Lorem ipsum dolor sit amet, consectet</li>
                <li className="offer__list-item"><span className="offer__list-marker"></span>Lorem ipsum dolor sit amet, consectetlit.</li>
            </ul>
        </article>

        <article className="bordered offer">
            <h2 className="offer__title">Hot offer</h2>
            <p className="offer__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi magnam nisi, beatae asperiores quos dignissimos! Hic quibusdam, quod aspernatur tempora harum totam obcaecati?</p>
            <ul className="offer__list">
                <li className="offer__list-item"><span className="offer__list-marker"></span>Lorem ipsum dolor sit amet, consectetu</li>
                <li className="offer__list-item"><span className="offer__list-marker"></span>Lorem ipsum dolor sit amet, consectetur adi</li>
                <li className="offer__list-item"><span className="offer__list-marker"></span>Lorem ipsum dolor sit amet, con</li>
                <li className="offer__list-item"><span className="offer__list-marker"></span>Lorem ipsum dolor sit amet, consectet</li>
                <li className="offer__list-item"><span className="offer__list-marker"></span>Lorem ipsum dolor sit amet, consectetlit.</li>
            </ul>
        </article>

        <article className="bordered contacts">
            <h2 className="offer__title">Store information</h2>
            <ul className="contacts__list">
                <li className="flex-row contacts__list-item">
                    <span className="icon-holder"><i className="fa fa-map-marker fa-3x" data-fa-transform="rotate-180" /></span>
                    Company Inc., 8901 Marmora Road, Glasgow, D04 89GR
                </li>
                <li className="flex-row contacts__list-item">
                    <span className="icon-holder"><i className="fa fa-phone fa-3x" /></span>
                    Call us now toll free: <a className="anchor__as-text" href="tel:(800) 2345-6789">(800) 2345-6789</a>
                </li>
                <li className="flex-row contacts__list-item">
                    <span className="icon-holder align-self__start"><i className="fa fa-envelope-o fa-3x" /></span>
                    <div className="email-container">
                        Customer support: <a className="anchor__as-text" href="mailto:support@example.com">support@example.com</a><br/>
                        Press: <a className="anchor__as-text" href="mailto:pressroom@example.com">pressroom@example.com</a>
                    </div>
                </li>
                <li className="flex-row contacts__list-item">
                    <span className="icon-holder"><i className="fa fa-skype fa-3x" /></span>
                    Skype: sample-username
                </li>
            </ul>
        </article>


    </footer>
);


export default Footer;
