/* eslint-disable no-unused-vars */
import { Component } from "react";
import { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import InstaFeeds from "./InstaFeed/InstaFeeds";

class Instagram extends Component {
  state = { items: [] };
  async componentDidMount() {
    /*  try {
      //const data = await API.get('instagramapi','/items');
      API.get('instagramapi','/items').then(response => {
        console.log(response);
      }).catch(error => console.log(error.response.data));
      this.setState({items:data.items});
      
    } catch (error) {
      console.log(error);
    } */
  }
  render() {
    return (
      <div className="mt-24">
        <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Instagram Feed
        </h1>
        <InstaFeeds limit={50} />
      </div>
    );
  }
}
//export default withAuthenticator(Instagram);
export default Instagram;
