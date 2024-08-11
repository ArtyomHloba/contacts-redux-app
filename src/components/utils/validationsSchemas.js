import * as yup from 'yup';

export const CONTACTS_VALIDATION_SCHEMA = yup.object({
  fullName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]{1,31}( [A-Z][a-z]{1,32})?$/, 'Ведите латиницей')
    .required(),
  phoneNumber: yup
    .string()
    .length(13)
    .matches(/^\+380\d{9}$/, '+380XXXXXXXXX')
    .required(),
});
