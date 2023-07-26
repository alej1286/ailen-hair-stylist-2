/* eslint-disable no-unused-vars */
import { Component } from 'react';
import { API } from "aws-amplify";
import {
  withAuthenticator
} from "@aws-amplify/ui-react";

class Instagram extends Component{
  state = {items:[]}
  async componentDidMount(){
    const data = await API.get('instagramapi','/items')
    this.setState({items:data.items})
    console.log(data);
  }
  render(){
  return(
<div className='mt-24 '>
{/* 
  <InstaFeeds token="IGQVJYbEZAVM3dCOTRnOTBwcG5TU2JsNk1CMDVzRE5NN3ZAfSUNUQkFYbFBfY3plNXFXWERFRXBEX19sZAjNMUWVBUHRXQ3R4Q2g3TnRqdlNFb3ZAMbDF6d24zQk1faUVYeWtJcERLOVp5YzZAiZAk5JQU5abQZDZD" limit={12}/> */}
</div>

  ) 
}
}
//export default withAuthenticator(Instagram);
export default Instagram