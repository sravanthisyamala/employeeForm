import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

function loadLocale(code) {
    return import(`vee-validate/dist/locale/${code}.json`).then(locale => {
        localize(code, locale);
    });
}
extend("compare_date", {
    validate: (value,[a]) => {
       if(value >a) {
       return { valid: true}
       }
    },
    message: 'The {_field_} should be greater than start date'
});
extend("no_future_date", {
    validate: (value,[a]) => {
       if(value <=a) {
       return { valid: true}
       }
    },
    message: "The {_field_} shouldn't be future date "
});

// Set default language
loadLocale('en');

// Install rules and localization
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);