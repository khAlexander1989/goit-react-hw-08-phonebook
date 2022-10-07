export const errorMsgs = {
  tooLongField: 'This field too long!',
  tooShortField: 'This field too short!',
  requiredField: 'This field is required!',
  nameFieldPattern:
    'Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer.',
  numberFieldPattern:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
};

export const fieldPatterns = {
  name: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  number:
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
};
