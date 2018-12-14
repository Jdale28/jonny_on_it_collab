import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { NewsletterButton } from './ButtonStyle'

const FooterStyle = styled.div`
    width: 100%;
    height: 18vh;
    margin: 1em auto;
    background-color: rgba(0,45,81,1);
    color: rgba(255,255,255,1);
    display: flex;
    align-content: center;
    justify-content: space-around;
`

const Newsletter = styled.div`
    font-size: 1.4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
        font-size: .8em;
        width: 14em;
        height: 2.4em;
        margin: 1em;
    }
`

const LinkList = styled.div`
    font-size: 1.6em;
    margin: .4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .top-links, .bottom-links {
        margin: .2em;
    }
    a {
        margin: .4em;
        text-decoration: none;
        color: rgba(255,255,255,1);
    }
`

const DownloadLink = styled.div`
    font-size: 1.4em;
    display: flex;
    align-items: center;
    .download-container {
        display: flex;
        flex-direction: column;
    }
    .download {
        width: 8em;
        height: 3em;
        margin: .4em;
    }
`

const FollowUs = styled.div`
    font-size: 1.4em;
    display: flex;
    align-items: center;
    a img {
        width: 3em;
        height: 3em;
        margin: .4em;
    }
    .follow-links {
        display: flex;
        flex-direction: column;
    }
`

class Footer extends Component {
    render() {
        return (
            <div>
                <FooterStyle>
                    <Newsletter>
                        <h4>Sign up for our newsletter</h4>
                        <form>
                            <input placeholder="  Your Email"></input>
                            <NewsletterButton type="submit">SUBMIT</NewsletterButton>
                        </form>
                    </Newsletter>
                    <LinkList>
                        <div className="top-links">
                            <Link to="/">About Us</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/howitworks">How It Works</Link>
                            <Link to="/">Service Professional Terms</Link>
                        </div>
                        <div className="bottom-links">
                            <Link to="/">Contact Us</Link>
                            <Link to="/">FAQ</Link>
                            <Link to="/">Our Guarantee</Link>
                            <Link to="/">User Terms</Link>
                        </div>
                    </LinkList>
                    <DownloadLink>
                        <h3>Download Here:</h3>
                        <div className="download-container">
                            <a href="https://itunes.apple.com/us/app/jonny-on-it/id1330021042?mt=8">
                                <img src="/images/apple-download-icon.png" alt="apple download icon" className="download" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.jonnyonitcustomer&hl=en_US">
                                <img src="/images/google-play-icon.png" alt="google play icon" className="download" />
                            </a>
                        </div>
                    </DownloadLink>
                    <FollowUs>
                        <h3>Follow Us: </h3>
                        <div className="follow-links">
                            <a href="what goes here?">
                                <img src="/images/google-icon.png" alt="google icon" />
                            </a>
                            <a href="https://www.facebook.com/jonnyonit/?__tn__=%2Cd%2CP-R&eid=ARCUtiVTICjhi1kHmB95YacUSlQSWgGKUtjpRZu1yvXq049UH-BQBl3HcchWByeLoNPFW9rnfP7zlFD-">
                                <img src="/images/facebook-icon.png" alt="facebook icon" />
                            </a>
                        </div>
                        <div className="follow-links">
                            <a href="https://www.instagram.com/jonnyonitinc/">
                                <img src="/images/instagram-icon.png" alt="instagram icon" />
                            </a>
                            <a href="https://twitter.com/jonnyonitinc">
                                <img src="/images/twitter-icon.png" alt="twitter icon" />
                            </a>
                        </div>
                    </FollowUs>
                </FooterStyle>
            </div >
        )
    }
}

export default Footer