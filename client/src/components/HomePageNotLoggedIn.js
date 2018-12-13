import React, { Component } from 'react'
import styled from 'styled-components'
import { GoButton } from './ButtonStyle'

const HomePageNotLoggedIn = styled.div`
    display: flex;
    flex-direction: column;
`

const HomeBanner = styled.div`
    background-color: rgba(0,0,0,1);
    background: url('/images/home-page-banner.jpg');
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .form-container {
        width: 100vw;
        height: 30vh;
        background-color: rgba(255,255,255,.5);
        display: flex;
        align-items: column;
    }
`

const FindOutLinks = styled.div`
    margin: 0 auto;
    text-align: center;
    .find-out-container {
        display: flex;
        justify-content: space-evenly;
    }
    a {
        text-decoration: none;
        color: rgba(0,45,81,1)
    }
    .new-user {
        width: 25vw;
        height: 25vh;
    }
`

const HowItWorksHomePage = styled.div`
    display: flex;
    flex-direction: column;
    .how-it-works-diagram {
        width: 200px;
        height 200px;

    }
`

const Reviews = styled.div`
    width: 100vw;
    div {
        width: 30vw;
    }
`

class HomePageNoLoggedIn extends Component {
    render() {
        return (
            <div>
                <HomePageNotLoggedIn>
                    <HomeBanner>
                        <div className="form-container">
                            <h4>Tell us what you need</h4>
                            <form onSubmit={this.handleSubmit}>
                                <input placeholder="Housekeeping, Plumbing ...">
                                </input>
                                <GoButton>Go</GoButton>
                            </form>
                        </div>
                    </HomeBanner>
                    <FindOutLinks>
                        <h3>Find out what Jonny can do for you</h3>
                        <div className="find-out-container">
                            <a href="">
                                <img src="/images/homeowner.jpeg" alt="homeowner photo" className="new-user" />
                                <p>I AM A HOMEOWNER</p>
                            </a>
                            <a href="">
                                <img src="/images/realtor.jpeg" alt="realtor photo" className="new-user" />
                                <p>I AM A REALTOR</p>
                            </a>
                        </div>
                    </FindOutLinks>
                    <HowItWorksHomePage>
                        <img src="/images/how-it-works-diagram.png" alt="how it works diagram" className="how-it-works-diagram" />
                    </HowItWorksHomePage>
                    <Reviews>
                        <h2>Reviews</h2>
                        <div className="review">
                            <h5>Jonny On It is On It<br />
                                when you need a service provider</h5>
                            <p>"I needed a plumber asap for repairs negotiated during a
                                home sale. I was able to book on the app, see the quote,
                                confirm the quote, have the work done immediately and
                                pay through the app. It just doesn't get any more
                            convenient than that.<br /><br />
                                If you are a homeowner or real estate professional, this>
                                is a game changer for service provider accountability
                            and on demand service!"<br />
                                - Christian Ross (07/11/2018)</p>
                        </div>
                        <div>
                            <h5>Save time and headaches--get this App</h5>
                            <p>"Getting repairs done is never convenient or
                                low stress.... until now. When I wanted several
                                handyman jobs done in my house I went straight
                                to jonny On It, clicked a few buttons and handleSubmitsomeone matched to me in no time. It was easy,
                                reasonable and the handyman was AMAZING. It
                                was my first time using the App but I'll definitely
                                be back! Thanks for takiing the stress out of
                            home maintenance!"<br />
                                - Meburrell16 (11/08/2018)
                        </p>
                        </div>
                        <div>
                            <p>"What an Amazing concept, vision and
                                execution of a continual need for many. I
                                have worked in hospitality for many
                                years and it is incredibly refreshing to
                                see and experience a company and
                            culture that is based around the costumer"<br />
                                - Howie Duffin
                        </p>
                        </div>
                    </Reviews>
                </HomePageNotLoggedIn>
            </div >
        )
    }
}

export default HomePageNoLoggedIn