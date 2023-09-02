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
        <div className="mb-24 grid grid-cols-3 gap-4 content-start">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstaFeeds;