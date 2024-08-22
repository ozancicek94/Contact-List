import { useEffect } from "react";
import { useState } from "react";


function SelectedContact ({selectedContactID, setSelectedContactID}) {

  const [contact, setContact] = useState(null);

  useEffect(()=> {
    const fetchContact = async() => {

      try{
      const request = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`)
      const response = await request.json();
      setContact(response);
      console.log("response selected contact is here", response)}
      
      catch(error){console.error("Filed to fetch contact")};
    } ;
    fetchContact();
  }, [selectedContactID]);

  if(!contact) {
    return <div>Loading...</div>
  }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">{contact.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="selectedContactInfo">{contact.username}</td>
          <td>{contact.website}</td>
          <td>{contact.email}</td>
        </tr>
  
      </tbody>
    </table>
  )

}

export default SelectedContact;