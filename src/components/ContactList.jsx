//import shortid from "shortid";
import PropTypes from 'prop-types';
import { ItemBox } from "./ContactList.stiled";
import { ButtonContactList } from "./ContactList.stiled";
import { ButtonContactListActiv } from "./ContactList.stiled";
import { ButtonContactListActivCirc } from "./ContactList.stiled";
import { ButtonContactListActivBox } from "./ContactList.stiled";
    

const ContactList = ({ contacts, activIdContact, filter, deleteContact }) =>
{
   // console.log(contacts)
    let filtrContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    if (filtrContacts.length === 0) filtrContacts = []; 
    return ( 
        <> 
            <ul>
                {(contacts[0].name !== '' & contacts[0].number !== '') ? (filtrContacts.map((contact, index) => <li key={contact.name}> <ItemBox><p>{contact.name} : {contact.number} </p>  <span> {activIdContact!==index?<ButtonContactList id={index}  onClick={deleteContact}> Delete </ButtonContactList>:<ButtonContactListActivBox><ButtonContactListActiv id={index} value={activIdContact} onClick={deleteContact} > Delete </ButtonContactListActiv> <ButtonContactListActivCirc></ButtonContactListActivCirc></ButtonContactListActivBox>}</span></ItemBox></li>)): <li></li>}
            </ul>
        </>
     )
}
export default ContactList;

ContactList.propTypes = {
    filter: PropTypes.string.isRequired,
    activIdContact: PropTypes.number.isRequired,
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,  
}