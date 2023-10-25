import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Feed = (props) => {
  const { id, caption, media_type, media_url } = props.feed;
  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
        <video
          width="100%"
          height="auto"
          src={media_url}
          type="video/mp4"
          controls
          playsInline
        ></video>
      );
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <Carousel
          autoPlay="true"
          infiniteLoop="true"
          stopOnHover="true"
          showThumbs={false}
        >
          {props.feed.children.data.map((child) => (
            <div key={child.id}>
              <a href={props.feed.permalink} target="_blanck">
                <img src={child.media_url} alt="instagram" />
              </a>
            </div>
          ))}
        </Carousel>
      );
      break;
    default:
      post = (
        <img width="100%" height="auto" id={id} src={media_url} alt={caption} />
      );
  }

  return <React.Fragment>{post}</React.Fragment>;
};

export default Feed;
