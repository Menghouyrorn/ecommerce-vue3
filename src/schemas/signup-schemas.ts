import * as z from 'zod'
import {toTypedSchema} from "@vee-validate/zod";

const signup_schema = z.object({
    username: z.string().nonempty('Field is required !'),
    email: z.string().email('This Field is Email').nonempty('Field is required !'),
    password: z.string().nonempty('Field is required !'),
    c_password: z.string().nonempty('Field is required !')
});

const SIGNUP_SCHEMA = toTypedSchema(signup_schema);

export {
    signup_schema,
    SIGNUP_SCHEMA
}
