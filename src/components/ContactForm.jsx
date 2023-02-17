import React, { Component } from "react";
import { BoxContactForm } from "./ContactForm.stiled";
import { InputContactForm } from "./ContactForm.stiled";
import { LabelContactForm } from "./ContactForm.stiled";
import { ButtonContactForm } from "./ContactForm.stiled";

export class ContactForm extends Component{
    state = {
        name: '',
        number: '',
        statusButtomForm: false,
     }
   
    handleChange = (event) => {
    event.preventDefault(); 
       
    this.setState({ [event.currentTarget.name]: event.currentTarget.value })
    }
    hendleSubmit = (event) => {
        
       event.preventDefault();
        this.setState({ statusButtomForm: true });
        setTimeout(() => { this.setState({ statusButtomForm: false }); }, 1000);
        this.props.onSubmit(this.state);
       //event.currentTarget.name.value = '';
       //event.currentTarget.number.value = '';
       this.resetForm();
    }
    
   resetForm = () => {this.setState({ name: '', number: '', }); };
    render(){
        return (
        <>
                 <BoxContactForm action="/action_page.php" method="get" onSubmit={this.hendleSubmit}>
                    <LabelContactForm htmlFor="fname">Name</LabelContactForm>
                    < InputContactForm
                        type="text"
                        name="name"
                        width="100px"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                        value = {this.state.name}
                    />
                    <LabelContactForm htmlFor="fname">Namber</LabelContactForm>
                    < InputContactForm
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                        value = {this.state.number}
                        
                    />
                    <ButtonContactForm type="submit" value={this.state.statusButtomForm}> Add contact </ButtonContactForm>
                </BoxContactForm>
                    
        </> )  }
    };
    export default ContactForm;

