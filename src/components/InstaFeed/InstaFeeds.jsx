import React, { useState, useEffect/* , useRef */ } from 'react'
//import axios from 'axios'
import { API } from "aws-amplify";

import Feed from './Feed'

import './InstaFeeds.css'

//const InstaFeeds = ({token, ...props}) => {
const InstaFeeds = ({...props}) => {
    const [feeds, setFeedsData] = useState([]);
    //use useRef to store the latest value of the prop without firing the effect
    /* const tokenProp = useRef(token);
    tokenProp.current = token; */

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            /* axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                }) */
                API.get('instagramapi','/items').then(response => {
                    setFeedsData(response.data)
                    console.log(response.data);
                  }).catch(error => console.log(error.response.data));
          } catch (err) {
              console.log('error', err)
          }
        }

        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="container">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstaFeeds;