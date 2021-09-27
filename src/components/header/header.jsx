import React from 'react';
import css from './header.module.css'
import profile from './../../images/profile.png'
import vector from './../../images/Vector.png'
import line from './../../images/line.png'
import vector2 from './../../images/vector2.png'
import pn from './../../images/pn.png'
import playstation from './../../images/playstation.png'

function Header() {
    return (

        <header>
            <div className={css.header}>

                <div className={css.logo}>

                    <h1>LOGO</h1>
                    <h4>| Technology news</h4>
                    <img src={line} alt="line" />

                </div>


                <nav>Main</nav>

                <div className={css.menu}>
                    <nav>News from partners</nav>
                    <img src={vector} alt="vector" />
                </div>

                <nav>Blog</nav>
                <nav>Reviews</nav>

                <div className={css.menu}>
                    <nav>Accessibility</nav>
                    <img src={vector} alt="vector" />
                </div>

                <div className={css.profile}>
                    <img src={profile} alt="Profile" />
                    <nav>Profile</nav>
                </div>


                <div className={css.row}>

                    <div className={css.main_title}>
                        <span>Gadgets</span>
                        <p>New MacBook with M1 chip announced</p>
                    </div>

                    <div className={css.down_section}>
                        <span>#apple #mac #m1</span>
                        <div>Read more</div>
                        <img src={vector2} alt="vector2" />
                        <img src={pn} alt="previous-next" />
                    </div>

                </div >

            
            <div className={css.playstation}>
                <img src={playstation} alt="playstation" />
            </div>

            
            </div>
        </header>
    );
}

export default Header;