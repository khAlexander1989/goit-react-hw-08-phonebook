export const fieldPatterns = {
  name: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  number:
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
};

export const MOCK_API_URL = 'https://636bf4cead62451f9fc0400e.mockapi.io/';

export const ERR_MSGS = {
  TOO_LONG_FIELD: 'This field too long!',
  TOO_SHORT_FIELD: 'This field too short!',
  REQUIRE_FIELD: 'This field is required!',
  NAME_PATTERN_UNMATCHING:
    'Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer.',
  NUMBER_PATTERN_UNMATCHING:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
  CONTACTS_FETCHING: 'Error occured. Contacts fetching not completed.',
  CONTACT_CREATION: 'Error occured. Contact creation not completed.',
  CONTACT_DELETION: 'Error occured. Contact Deletion not completed.',
};

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
