import * as yup from 'yup';

import { ERR_MSGS } from 'utils/constants';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(ERR_MSGS.REQUIRE_FIELD),

  password: yup
    .string()
    .min(8, ERR_MSGS.TOO_SHORT_FIELD)
    .max(50, ERR_MSGS.TOO_LONG_FIELD)
    .required(ERR_MSGS.REQUIRE_FIELD),
});
