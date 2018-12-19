import React, { Component } from 'react'
import Calendar from 'react-calendar'
import styled from 'styled-components'

const BlogStyle = styled.div`
    margin: 1em;
    display: flex;
    .blog-title {
        color: rgba(14,151,255,1);
    }
    .blogs {
        color: rgba(112,112,112,1);
        width: 55vw;
        margin: 1em 0 0 0;
        border: .1em solid rgba(112,112,112,1);
        display: flex;
        img {
            width: 15vw;
            height: 15vh;
            margin: 1em;
        }
        .blog-text {
            margin: 1em;
            display: flex;
            flex-direction: column;
            h3 {
                font-size: 2.4em;
            }
            p{
                font-size: 1em;
            }
        }
    }
    .right-bar {
        margin: 4.5em auto;
    }
    .recent-posts {
        font-size: 1.6em;
        font-weight: 700;
        padding: .4em;
        box-shadow: 0px 3px 6px 0px rgba(0,0,0,.16);
        h4 {
            font-weight: 900;
        }
    }
    .calendar {
        color: rgba(112,112,112,1);
        font-size: 1.2em;
        margin: 3em auto;
        box-shadow: 0px 3px 6px 0px rgba(0,0,0,.16);
    }
`

class Blog extends Component {
    render() {
        return (
            <BlogStyle>
                <div className="blog-container">
                    <h1 className="blog-title">BLOG</h1>
                    <div className="blogs">
                        <img src="https://www.jonnyonit.com/wp-content/uploads/2018/12/HVAC-768x384.png" alt="HVAC" />
                        <div className="blog-text">
                            <h3>Is Your HVAC Ready for Winter?</h3>
                            <h5>DECEMBER 5, 2018<span className="blog-date">. JONNY</span></h5>
                            <p>Being prepared for winter is more than just pulling out warm hats and heavy coats. Having an unreliable heating system can drastically change your winter season. No one wants to be stuck in the cold…</p>
                        </div>
                    </div>
                    <div className="blogs">
                        <img src="https://www.jonnyonit.com/wp-content/uploads/2018/11/Successful-realtor-blog-768x384.png" alt="successful realtor" />
                        <div className="blog-text">
                            <h3>9 Habits of a Great Realtor</h3>
                            <h5>NOVEMBER 8, 2018<span className="blog-date">. JONNY</span></h5>
                            <p>It takes a special type of person to succeed as a real estate agent. According to Tom Ferry, real estate coach, and motivational speaker, 87% of all agents fail within the first 5 years. So,...</p>
                        </div>
                    </div>
                    <div className="blogs">
                        <img src="https://www.jonnyonit.com/wp-content/uploads/2018/10/HomeStagingTipsBlog-768x384.png" alt="staging tips" />
                        <div className="blog-text">
                            <h3>Staging Your Home In The Fall</h3>
                            <h5>OCTOBER 26, 2018<span className="blog-date">. JONNY</span></h5>
                            <p>‘Tis the season to stage and sell a home! The temperatures are dropping, the leaves are starting to change, and everyone on Instagram has taken their yearly pumpkin patch picture. It’s officially fall. Fall is…</p>
                        </div>
                    </div>
                    <div className="blogs">
                        <img src="https://www.jonnyonit.com/wp-content/uploads/2018/09/Banner_New_1.jpg" alt="new banner" />
                        <div className="blog-text">
                            <h3>Here’s Jonny… On it</h3>
                            <h5>SEPTEMBER 25, 2018<span className="blog-date">. JONNY</span></h5>
                            <p>Hey, I’m Jonny On it and I save you time and worry while selling a client’s home… sounds pretty awesome right? That’s not even the best part! Picture this, you’re about to take the last…</p>
                        </div>
                    </div>
                </div>
                <div className="right-bar">
                    <div className="recent-posts">
                        <h4>RECENT POSTS</h4>
                        <p>Is Your HVAC Ready for Winter?</p>
                        <p>9 Habits of a Great Realtor</p>
                        <p>Staging Your Home In The Fall</p>
                        <p>Selling Your Home in the Off Season</p>
                    </div>
                    <div className="calendar">
                        <Calendar />
                    </div>
                </div>
            </BlogStyle>
        )
    }
}

export default Blog