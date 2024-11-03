import { BRANCH, DEPARTMENT, DOC_NO, ORDER_NUMBER, PRIORITY, STATUS, SUB_DEPARTMENT, SUBJECT, TO_USER } from "../constant/form-key";


export const userFormValidators = {
  
  [ORDER_NUMBER]: {
    pattern: {
      value: /^\d+$/,
      message: 'Please enter valid order number',
    },
  },
  [DOC_NO]: {
     pattern: {
      value: /^\d+$/,
      message: 'Please enter valid doc number',
    },
  },
  [PRIORITY]: {
    required: 'Select priority',
  },
  [BRANCH]: {
    required: 'Select branch',
  },
  [DEPARTMENT]: {
    required: 'Select department',
  },
  [SUB_DEPARTMENT]: {
    required: 'Select sub department',
  },
  [TO_USER]: {
    required: 'Select user',
  },
  [STATUS]: {
    required: 'Select status',
  },
  [SUBJECT]: {
    required: 'Please enter subject',
  },
  
};