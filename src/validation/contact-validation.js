import * as yup from 'yup';

import { ERR_MSGS, fieldPatterns } from 'utils/constants';

export const contactValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(fieldPatterns.name, ERR_MSGS.NAME_PATTERN_UNMATCHING)
    .min(2, ERR_MSGS.TOO_SHORT_FIELD)
    .max(30, ERR_MSGS.TOO_LONG_FIELD)
    .required(ERR_MSGS.REQUIRE_FIELD),
  number: yup
    .string()
    .matches(fieldPatterns.number, ERR_MSGS.NUMBER_PATTERN_UNMATCHING)
    .min(4, ERR_MSGS.TOO_SHORT_FIELD)
    .max(20, ERR_MSGS.TOO_LONG_FIELD)
    .required(ERR_MSGS.REQUIRE_FIELD),
});
