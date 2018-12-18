import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { NewsletterButton } from '../ButtonStyle'

const FooterStyle = styled.div`
    width: 100%;
    height: 18vh;
    margin: 1em auto;
    padding: 1em;
    background-color: rgba(0,45,81,1);
    color: rgba(255,255,255,1);
    display: flex;
    align-content: center;
    justify-content: space-around;
`

const Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
        font-size: 1.5em;
        width: 12em;
        height: 2.4em;
        margin: .1em;
    }
    .newsletterH4 {
        font-size: 2em;
    }
`

const LinkList = styled.div`
    font-size: 1.8em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .top-links, .bottom-links {
        margin: .1em;
    }
    a {
        margin: .2em .4em;
        text-decoration: none;
        color: rgba(255,255,255,1);
    }
`

const DownloadLink = styled.div`  
    display: flex;
    align-items: center;
    .download-container {
        display: flex;
        flex-direction: column;
    }
    .download {
        width: 10em;
        height: 3.2em;
        margin: .4em .1em .1em .8em;
    }
    .downloadH3 {
        font-size: 1.8em;
    }
`

const FollowUs = styled.div`
    display: flex;
    align-items: center;
    a img {
        width: 3em;
        height: 3em;
        margin: .6em .1em .1em .8em;
    }
    .follow-links {
        display: flex;
        flex-direction: column;
    }
    .followH3 {
        font-size: 1.8em;
    }
`

class Footer extends Component {
    render() {
        return (
            <div>
                <FooterStyle>
                    <Newsletter>
                        <h4 className="newsletterH4">Sign up for our newsletter</h4>
                        <form>
                            <input placeholder="  Your Email"></input>
                            <NewsletterButton type="submit">SUBMIT</NewsletterButton>
                        </form>
                    </Newsletter>
                    <LinkList>
                        <div className="top-links">
                            <Link to="/aboutus">About Us</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/howitworks">How It Works</Link>
                            <Link to="/providerterms">Service Professional Terms</Link>
                        </div>
                        <div className="bottom-links">
                            <Link to="/contactus">Contact Us</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/ourguarantee">Our Guarantee</Link>
                            <Link to="/userterms">User Terms</Link>
                        </div>
                    </LinkList>
                    <DownloadLink>
                        <h3 className="downloadH3">Download Here:</h3>
                        <div className="download-container">
                            <a href="https://itunes.apple.com/us/app/jonny-on-it/id1330021042?mt=8">
                                <img src="https://i.imgur.com/BBB6EPz.png" alt="apple download icon" className="download" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.jonnyonitcustomer&hl=en_US">
                                <img src="https://i.imgur.com/OtVV2By.png" alt="google play icon" className="download" />
                            </a>
                        </div>
                    </DownloadLink>
                    <FollowUs>
                        <h3 className="followH3">Follow Us: </h3>
                        <div className="follow-links">
                            <a href="what goes here?">
                                <img src="https://i.imgur.com/bX1tHiX.png" alt="google icon" />
                            </a>
                            <a href="https://www.facebook.com/jonnyonit/?__tn__=%2Cd%2CP-R&eid=ARCUtiVTICjhi1kHmB95YacUSlQSWgGKUtjpRZu1yvXq049UH-BQBl3HcchWByeLoNPFW9rnfP7zlFD-">
                                <img src="https://i.imgur.com/oznBtnF.png" alt="facebook icon" />
                            </a>
                        </div>
                        <div className="follow-links">
                            <a href="https://www.instagram.com/jonnyonitinc/">
                                <img src="https://i.imgur.com/2k7bybK.png" alt="instagram icon" />
                            </a>
                            <a href="https://twitter.com/jonnyonitinc">
                                <img src="https://i.imgur.com/ux916Fb.png" alt="twitter icon" />
                            </a>
                        </div>
                    </FollowUs>
                </FooterStyle>
            </div >
        )
    }
}

export default Footer