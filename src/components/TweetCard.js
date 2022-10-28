import React from "react"

function TweetCard({username, url, text}) {
    return (
        <a href={url} target="blank">
            <div className="tweetCard">
                    <div className="innerTweet">
                        <p>"{text}"</p>
                        <p>- @{username}</p>
                    </div>
            </div>
        </a>
    )
}

export default TweetCard