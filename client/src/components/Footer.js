import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { NewsletterButton } from './ButtonStyle'

const FooterStyle = styled.div`
    width: 100%;
    height: 15vh;
    margin: 1em auto;
    background-color: rgba(0,45,81,1);
    color: rgba(255,255,255,1);
    display: flex;
    align-content: center;
    justify-content: space-around;
`

const Newsletter = styled.div`
    margin: 2em 10em;
`

const LinkList = styled.div`
    margin: 0 0;
    a {
        text-decoration: none;
        color: rgba(255,255,255,1);
    }
`

const DownloadLink = styled.div`
    margin: 0, 0;
`

class Footer extends Component {
    render() {
        return (
            <div>
                <FooterStyle>
                    <Newsletter>
                        <h4>Sign upfor our newsletter</h4>
                        <form>
                            <input></input>
                            <NewsletterButton type="submit">SUBMIT</NewsletterButton>
                        </form>
                    </Newsletter>
                    <LinkList>
                        <div className="top-links">
                            <Link to="/">About Us</Link>
                            <Link to="/">Blog</Link>
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
                        <h3>Downloade Here:</h3>
                        <a href="https://play.google.com/store/apps/details?id=com.jonnyonitcustomer">
                            <img src="" alt="apple download icon" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.jonnyonitcustomer&hl=en_US">
                            <img src="" />
                        </a>
                    </DownloadLink>
                </FooterStyle>
            </div >
        )
    }
}

export default Footer