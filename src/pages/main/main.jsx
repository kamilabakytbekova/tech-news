import React from 'react';
import css from './main.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cars from './../../images/cars.png'
import games from './../../images/games.png'
import tv from './../../images/tv.png'
import vector2 from './../../images/vector2.png'
import pn from './../../images/pn.png'
import longLine from './../../images/longLine.png'
import topNews from './../../images/topNews.png'

const responsive = {
    superLargeDesktop: {

        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

function Main(props) {


    return (
        < div className={css.container}>

            <span className={css.photo_span}>Photo by Vjeran Pavic / The Verge</span>

            <div className={css.main_content}>
                <h1>According to a support page the problems began Friday afternoon</h1>

                <p>An outage of Sony’s PlayStation Network that began Friday afternoon appeared to be persisting on Saturday morning. According to an update on the status page timestamped 6:33PM (not clear what time zone that is) on February 26th, the affected platforms are PS Vita, PS3, PS4, and PS5.</p>
                <p>“You might have difficulty launching games, apps, or network features. We’re working to resolve the issue as soon as possible. Thank you for your patience,” the update reads.</p>
                <p>Engadget reported that the outage may be affecting some games but not others; Fortnite appeared to be accessible but Minecraft and Call of Duty: Warzone were not.</p>
                <p>The PlayStation Network outage began a day after Microsoft’s Xbox Live service suffered a global outage for five hours. On February 10th, the PlayStation Network was down worldwide for about an hour.</p>
                <p>We’ve reached out to Sony for details about what’s causing the outage, how widespread it is, and when it may be resolved, and will update when we learn more.</p>
            </div>

            <span className={css.photo_span}>By Kim Lyons Feb 27, 2021, 9:05am EST</span>

            <h1 className={css.other_news}>Other news</h1>
            <h1 className={css.latest_news}>Latest news</h1>

            <div className={css.first_slider}>

                <Carousel responsive={responsive}>

                    <div className={css.slider1}>
                        <img src={cars} alt="cars" />
                        <span>Tech cars</span>
                        <h1>This bizarre electric racing scooter goes as fast as a car </h1>
                        <p>This bizarre electric racing scooter goes as fast as a car The eSkootr S1X is a carbon-fibre version of a Segway that can reach speeds of 100kph</p>
                        <div className={css.more}>Read more</div>
                    </div>


                    <div className={css.slider1}>
                        <img src={tv} alt="tv" />
                        <span>TV</span>
                        <h1>How to get Disney+ on your smart TV, phone and laptop </h1>
                        <p>Planning to blast the Magic Kingdom into your home? Here's what you need to know</p>
                        <div className={css.more}>Read more</div>
                    </div>


                    <div className={css.slider1}>
                        <img src={games} alt="games" />
                        <span>Games</span>
                        <h1>Monsters, mania and the unstoppable march of Pokémon</h1>
                        <div className={css.more3}>Read more</div>
                    </div>

                </Carousel>
            </div>


            <div className={css.second_slider}>

                <Carousel responsive={responsive}>

                    <div className={css.slider2}>
                        <img src={cars} alt="cars" />
                        <span>Tech cars</span>
                        <h1>This bizarre electric racing scooter goes as fast as a car </h1>
                        <p>This bizarre electric racing scooter goes as fast as a car The eSkootr S1X is a carbon-fibre version of a Segway that can reach speeds of 100kph</p>
                        <div className={css.more2}>Read more</div>
                    </div>


                    <div className={css.slider2}>
                        <img src={tv} alt="tv" />
                        <span>TV</span>
                        <h1>How to get Disney+ on your smart TV, phone and laptop </h1>
                        <p>Planning to blast the Magic Kingdom into your home? Here's what you need to know</p>
                        <div className={css.more3}>Read more</div>
                    </div>

                </Carousel>

            </div>

            <div className={css.navbar}>

                <div className={css.categories}>
                    <h1>Categories</h1>

                    <ul>
                        <li>Tech</li>
                        <li>Al</li>
                    </ul>
                </div>

                <div className={css.categories_next}>
                    <ul>
                        <li className={css.br}> Social media</li>
                        <li>Games</li>
                        <li>Gadgets</li>
                        <li>Business</li>
                    </ul>

                    <div className={css.more_info}>
                        <p>More news</p>
                        <img src={vector2} alt="vector2" />
                        <img src={pn} alt="previous-next" />
                    </div>
                </div>

                <div className={css.trending}>

                    <h1>Trending</h1>

                    <div className={css.top_news}>
                        <img src={topNews} alt="topNews" />
                    </div>

                    <div className={css.tech_news}>
                        <p>About TechNews </p>
                        <img src={longLine} alt="longLine" />
                    </div>

                    <button>Contact us</button>

                    <div className={css.list}>

                        <div className={css.sitemap}>
                            <h1>Sitemap</h1>

                            <ul>
                                <li>News</li>
                                <li>Categories</li>
                                <li>Blog</li>
                                <li>Contact us</li>
                            </ul>
                        </div>

                        <div className={css.about}>
                            <h1>About</h1>
                            <p>We are news channel ready toshare with with the latest and the coolest technology news.  </p>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className={css.inputs} >
                <input className={css.input_search} type="search" ></input>
                <button className={css.btn}>Subscribe</button>
            </div>

        </div>
    );
}

export default Main;