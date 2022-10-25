import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { DEEPAI_API_KEY, TWITTER_API_KEY }  from "../API_KEYS";

function Home() {

//https://twitter.com/ozisworld/status/1584571906417913857

    const deepai = require('deepai');
    const [tweetData, getTweet] = useState({}); // useState is a hook, default value is an object

    // deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

    (async function() {
        var resp = await deepai.callStandardApi("text2img", {
                text: `{tweetText}`,
        });
        console.log(resp);
    })()

    useEffect(() => {
        axios
        .get('https://api.twitter.com/2/users/by/username/ozidoesthings?user.fields=created_at,profile_image_url,verified&tweet.fields=public_metrics')
        .then(function (response) {
            console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
                console.warn(error);
        });
    })
    
		// headers: { 
		// 		'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAKVtWAEAAAAAsLMAyaKjuHtbTgt4r4yn%2BAnll3Q%3DHUAxcoMIrjCPYBA84cOlWI8Ktqf861VntmjJEhFpiwWNXbElLm', 
		// 		'Cookie': 'guest_id=v1%3A166629239119577773'
		// }

    return (
        <div className="homePage">

        </div>
    )
}

export default Home;