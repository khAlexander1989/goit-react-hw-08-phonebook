import * as yup from 'yup';

import { ERR_MSGS } from 'utils/constants';

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ERR_MSGS.TOO_SHORT_FIELD)
    .max(30, ERR_MSGS.TOO_LONG_FIELD)
    .required(ERR_MSGS.REQUIRE_FIELD),
  email: yup.string().email().required(ERR_MSGS.REQUIRE_FIELD),

  password: yup
    .string()
    .min(8, ERR_MSGS.TOO_SHORT_FIELD)
    .max(50, ERR_MSGS.TOO_LONG_FIELD)
    .required(ERR_MSGS.REQUIRE_FIELD),
});
