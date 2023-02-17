import React, { Component } from "react";
import { ContactForm } from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
//import shortid from "shortid";
import { AllBox } from "./App.stiled";

//let filtrContactss = [{id: '', name: '', number: ''}];

export class App extends Component {
  state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    activIdContact: NaN,
    filter: ''
  }
  
 componentDidMount() {
   console.log('componentDidMount');
   this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')), }); 
  };
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    //console.log(this.state.contacts);
   // console.log(prevState.contacts);
   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
   // console.log(localStorage.getItem('contacts'));
  };

  updateContacts = data => {
   // console.log(data);
    let nowArr = this.state.contacts;
    let arrLength = nowArr.length;
    let Contact = { id: `id-${data.name}`, name: `${data.name}`, number: `${data.number}` };
    
    let statusIncludeName = nowArr.find(contact => contact.name === Contact.name);
    console.log(statusIncludeName);console.log(Contact);
    arrLength > 1 ? (!statusIncludeName ? nowArr.splice(arrLength, 0, Contact,) : alert(`${data.name}  is already in contacts`)) :
      (nowArr[0].name === '' ? nowArr.splice(arrLength-1, 1, Contact,) : (!statusIncludeName ? nowArr.splice(arrLength, 0, Contact,) : alert(`${data.name}  is already in contacts`)))
    this.setState({ contacts: nowArr });
    
        
    }
  filterContact = (event) => { this.setState({ filter: event.currentTarget.value }); }

  resetFilter = () => {this.setState({ filter: '', }); };

  deleteContact = (event) => {
    let nowArr = [];
    this.state.filter === '' ? nowArr = this.state.contacts: nowArr= this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    let deleteContact = nowArr[event.target.id];
   
    nowArr = this.state.contacts;
    let ActivElement = Number(nowArr.indexOf(deleteContact));
    this.setState({ activIdContact: ActivElement });
    setTimeout(() => {
      this.setState({ activIdContact: NaN });
      nowArr.length > 1 ? nowArr.splice(ActivElement, 1) : nowArr = [{ id: '', name: '', number: '' }]; 
      this.setState({ contacts: nowArr }); // this.resetFilter();
    }, 200);
  } 
 

  render() {
        console.log('ADD');
        return (         
           <  AllBox >
              <h1>Phonebook</h1>
              <ContactForm onSubmit={this.updateContacts}> </ContactForm>
              <h2>Contacts</h2>
            <Filter filtrContact={this.filterContact}  />
              <ContactList contacts={this.state.contacts } activIdContact={this.state.activIdContact} filter = {this.state.filter} deleteContact={this.deleteContact}  />
            </ AllBox >
           )  
    }
}
export default App;
