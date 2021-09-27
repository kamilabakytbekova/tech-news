import React from 'react';
import css from './footer.module.css'
import facebook from './../../images/facebook.png'
import instagram from './../../images/instagram.png'
import youtube from './../../images/youtube.png'

function Footer() {
    return (
        <div className={css.footer}>
            <div className={css.footer_social}>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={youtube} alt="youtube" />
            </div>

            <div className={css.footer_all_rights}>2021/All rights reserved</div>

        </div>
    );
}

export default Footer;