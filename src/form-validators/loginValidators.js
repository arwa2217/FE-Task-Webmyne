import { PASSWORD, USERNAME } from "../constant/form-key";

export const loginValidators = {
    [USERNAME]: {
        required: "Please enter your username",
    },
    [PASSWORD]: {
        required:"Please enter your password"
    },
}