'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailAddress: [],
    };
  },

  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.apiUrl).then((response) => {
        const result = response.data.response;
        this.emailAddress.push(result);
      });
    }
  },
}).mount('#app');
