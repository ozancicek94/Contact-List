import { useState } from 'react'
import './App.css'
import ContactList from "./components/contactList"
import SelectedContact from './components/SelectedContact';

function App() {
  const [count, setCount] = useState(0);
  const [selectedContactID, setSelectedContactID] = useState(null);
  

  return (
    <>
   {selectedContactID ? (<div><SelectedContact setSelectedContactID={setSelectedContactID} selectedContactID={selectedContactID} /></div>) : (<ContactList setSelectedContactID={setSelectedContactID}/>)}
    </>
  )
}

export default App
