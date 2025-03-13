import * as z from "zod";
import {toTypedSchema} from "@vee-validate/zod";

const loginSchemas = z.object({
    email: z.string().email('Must be a valid email').nonempty('Field is required!'),
    password: z.string().nonempty('Field is required!')
});

const LoginSchemas = toTypedSchema(loginSchemas);

export {
    LoginSchemas,
    loginSchemas
}
