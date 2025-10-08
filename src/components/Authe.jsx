/* eslint-disable no-unused-vars */
import { Component } from "react";
import { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

class Authe extends Component {
  /*  state = {items:[]}
  async componentDidMount(){
    const data = await API.get('instagramapi','/items')
    this.setState({items:data.items})
    console.log(data);
  } */
  render() {
    return (
      <div className="mt-24 ">
        {/* Instagram feed will be loaded from environment variables */}
      </div>
    );
  }
}
//export default withAuthenticator(Instagram);
export default Authe;
