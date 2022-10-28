import React from "react";
import { DEEPAI_API_KEY}  from "../API_KEYS";
import TweetCard from "../components/TweetCard";
import Tweets from "../data/tweets";

function Home() {
    function getTweet() {
        window.location.reload();
    }
    let selector = Math.floor(Math.random()*(11-1)+1)


    const newTweet = Tweets[0][`tweet-${selector}`]

    const deepai = require('deepai');

    deepai.setApiKey(`${DEEPAI_API_KEY}`);

    (async function() {
        var resp = await deepai.callStandardApi("text2img", {
                text: `${newTweet.text}`,
        });
        const img = document.createElement("img");
        img.src = `${resp.output_url}`;
        img.className = "img"
        document.body.appendChild(img);
    })()

    return (
        <div className="homePage">
            <div className="pageHeader">
                <div className="titleWrapper">
                    <h1 className="title-text">#TweetToImage</h1>
                </div>
                
                <h6>Ever wondered what a tweet would <i>look</i> like?</h6>
                <h6>Click the button to generate a random tweet and its AI-generated visual counterpart:</h6>
            </div>
            
            <button className="button" onClick={getTweet}>new tweet</button>
            <TweetCard
            username={newTweet.username}
            text={newTweet.text}
            url={newTweet.url}
            />
        </div>
    )
}

export default Home;