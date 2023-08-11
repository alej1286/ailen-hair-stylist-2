import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import PricesCollection from "../ui-components/PricesCollection";
import PricesForm from '../ui-components/PricesForm';

function Services() {
  useEffect(() => {
    checkUser()
  }, [])
  const [user, setUser] = useState({})
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser()
      const userInfo = { username: data.username, ...data.attributes, }
      setUser(userInfo)
    } catch (err) { console.log('error: ', err) }
  }
  return (
    <div className="mt-24">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      {user.username === 'alej1286' ? <div className="w-1/5"><PricesForm /></div> : user.username}  
    <PricesCollection />

    </div>
  );
}

export default Services;
