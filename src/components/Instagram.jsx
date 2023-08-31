/* eslint-disable no-unused-vars */
import { Component } from 'react';
import { API } from "aws-amplify";
import {
  withAuthenticator
} from "@aws-amplify/ui-react";

class Instagram extends Component{
  state = {items:[]}
  async componentDidMount(){

    try {
      //const data = await API.get('instagramapi','/items');
      API.get('instagramapi','/items').then(response => {
        console.log(response);
      }).catch(error => console.log(error.response.data));
      //this.setState({items:data.items});
      //console.log("data:",data);  
    } catch (error) {
      console.log(error);
    }
    
  }
  render(){
  return(
<div className='mt-24 '>
{/* 
  <InstaFeeds token="IGQWRNLU50SjZAFNzNMMTEtQ0puMFlfTjNleUdoYTc1SEZAvZADh6Vk81UTlSaHZAjWDc1Q2dLVVFjVHc5bC02MEJoTWNFNWZADTTBGV0hFTzFibDJ1cjdCd2E4RENHeDdkRUszRDI3SS1LdkEzZAWJvUDBvMGRWd1gzTU0ZD" limit={12}/> */}
</div>

  ) 
}
}
//export default withAuthenticator(Instagram);
export default Instagram