import * as yup from 'yup';

import { errorMsgs, fieldPatterns } from 'utils/constants';

export const contactValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(fieldPatterns.name, errorMsgs.nameFieldPattern)
    .min(2, errorMsgs.tooShortField)
    .max(30, errorMsgs.tooLongField)
    .required(errorMsgs.requiredField),
  number: yup
    .string()
    .matches(fieldPatterns.number, errorMsgs.numberFieldPattern)
    .min(4, errorMsgs.tooShortField)
    .max(20, errorMsgs.tooLongField)
    .required(errorMsgs.requiredField),
});
