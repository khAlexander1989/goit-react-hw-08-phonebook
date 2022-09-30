import { Component } from 'react';
import PropTypes from 'prop-types';
import { HiUserAdd } from 'react-icons/hi';
import { nanoid } from 'nanoid';

import {
  Form,
  FormField,
  FormInput,
  FormFieldLabel,
  FormSubmitBtn,
} from './ContactForm.styled';
import { Box } from 'components/Box';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  static propTypes = {
    onContactFormSubmit: PropTypes.func.isRequired,
  };

  handleFormInputChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    this.reset();

    this.props.onContactFormSubmit({ name, number });
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { name, number } = this.state;
    const nameFieldId = nanoid();
    const numberFieldId = nanoid();
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormField>
          <FormFieldLabel htmlFor={nameFieldId}>Name</FormFieldLabel>
          <FormInput
            id={nameFieldId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleFormInputChange}
            value={name}
            isActive={name ? true : false}
          />
        </FormField>
        <FormField>
          <FormFieldLabel htmlFor={numberFieldId}>Number</FormFieldLabel>
          <FormInput
            id={numberFieldId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleFormInputChange}
            value={number}
            isActive={number ? true : false}
          />
        </FormField>
        <FormSubmitBtn type="submit">
          <HiUserAdd size="100%" />
        </FormSubmitBtn>
      </Form>
    );
  }
}
