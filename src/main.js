import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'

Vue.use(VueAxios, axios);
Vue.use(VeeValidate);

Vue.config.productionTip = false

const myRule = {
  getMessage (field, params, data) {
      return (data && data.message) || 'Something went wrong';
  },
  validate (value) {
    return new Promise(resolve => {
      alert('Promise');
      resolve({
        valid: value === 'trigger' ? false : !! value,
        data: value !== 'trigger' ? undefined : { message: 'Not this value' }
      });
    });
  }
};

VeeValidate.Validator.extend('truthy', {
  getMessage: field => 'The ' + field + ' value is not truthy.',
  validate: value => !! value
});

let instance = new VeeValidate.Validator({ trueField: 'truthy' });

instance.extend('falsy', (value) => ! value);
instance.attach('falseField', 'falsy');

VeeValidate.Validator.extend('punctuation', {
    getMessage: field => 'Punctuation',
    validate: value => {
        let Regex = new RegExp("^(?=.*[!@#\\$%\\^&\\?*])");
        return Regex.test(value);
        console.log(test(value));
    }
});

VeeValidate.Validator.extend('upper_case', {
    getMessage: field => '1 Upper Case required',
    validate: value => {
      let Regex = new RegExp("^(?=.*[A-Z])");
      return Regex.test(value);
    }
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
