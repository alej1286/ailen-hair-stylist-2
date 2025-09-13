/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect /* , useRef */ } from "react";

import Feed from "./Feed";

import "./InstaFeeds.css";
import { useFetchInstagramApi } from "../../api/InstagramApi";

const InstaFeeds = ({ ...props }) => {
  const [feeds, setFeedsData] = useState([]);
  const { data, isLoading } = useFetchInstagramApi();

  useEffect(() => {
    const abortController = new AbortController();
    try {
      if (data?.data) {
        setFeedsData(data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
    return () => {
      abortController.abort();
    };
  }, [data]);

  if (isLoading) return <div>Is loading...</div>;
  return (
    <div className="mb-24 grid grid-cols-3 gap-4 content-start">
      {feeds?.map((feed) => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </div>
  );
};

export default InstaFeeds;
