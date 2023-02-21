import {
    Form as VeeForm,
    Field as VeeField,
    defineRule,
    ErrorMessage,
    configure
} from 'vee-validate';

import { required, email, confirmed } from '@vee-validate/rules';

export default {
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('ErrorMessage', ErrorMessage);
        
        defineRule('required', required);
        defineRule('email', email);
        defineRule('confirmed', confirmed);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    'required': `${ctx.field} is required`,
                    'email': 'valid email is needed',
                    'confirmed': 'password does not match'
                };
                return messages[ctx.rule.name]
            }
        });
    }
}