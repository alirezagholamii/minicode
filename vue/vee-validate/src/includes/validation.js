import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure }
    from 'vee-validate'
import {
    required, min, max, alpha_spaces as alphaSpaces, email,
    min_value as minValue, max_value as maxValue, confirmed, not_one_of as excluded,
} from '@vee-validate/rules';

export default {
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('ErrorMessage', ErrorMessage);
        defineRule('required', required);
        defineRule('tos', required);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('alphaSpaces', alphaSpaces);
        defineRule('email', email);
        defineRule('minValue', minValue);
        defineRule('maxValue', maxValue);
        defineRule('confirmed', confirmed);
        defineRule('excluded', excluded);

        configure({
            generateMessage: (ctx)=>{
                const messages = {
                    required: `the field ${ctx.field} is required`,
                    min: `the ${ctx.field} field is too short`,
                    tos: `You must accept the Terms of Service.`,
                }
                const message = messages[ctx.rule.name]? messages[ctx.rule.name]: 
                `The field ${ctx.field} is invalid.`;
                return message
            },
            validateOnBlur:true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true
        })

    }
}