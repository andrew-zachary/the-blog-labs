import {
    Form as VeeForm,
    Field as VeeField,
    FieldArray as VeeFieldArray,
    defineRule,
    configure
} from 'vee-validate';

import { required, email, confirmed } from '@vee-validate/rules';

export default {
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('VeeFieldArray', VeeFieldArray);
        
        defineRule('required', required);
        defineRule('email', email);
        defineRule('confirmed', confirmed);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    'required': `${ctx.field}.errors.required`,
                    'email': `${ctx.field}.errors.email`,
                    'confirmed': `${ctx.field}.errors.confirmed`
                };
                return messages[ctx.rule.name]
            }
        });
    }
}