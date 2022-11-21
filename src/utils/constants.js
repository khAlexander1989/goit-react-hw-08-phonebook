import { theme } from '../theme';

export const fieldPatterns = {
  name: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  number:
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
};

export const FETCH_API_URL = `https://connections-api.herokuapp.com`;

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
  CONTACT_UPDATING: 'Error occured. Contact updating not completed.',
  CONTACT_DELETION: 'Error occured. Contact Deletion not completed.',

  LOGGINGIN: `Wrong email or password!`,
};

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const notifyOptions = {
  cssAnimationStyle: 'from-right',
  fontSize: theme.fontSizes[2],
  timeout: 2000,
  success: {
    background: theme.colors.bgSecondary,
    notiflixIconColor: theme.colors.seaGreen,
    textColor: theme.colors.seaGreen,
  },
  failure: {
    background: theme.colors.bgSecondary,
    notiflixIconColor: theme.colors.orange,
    textColor: theme.colors.orange,
  },
  warning: {
    background: theme.colors.bgSecondary,
    notiflixIconColor: 'orange',
    textColor: 'orange',
  },
};
