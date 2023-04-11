export default class NewClass {
    constructor() {
      this.value = 'Ukraine';
    }
  
    fetchCountries() {
      return fetch(`https://restcountries.com/v3.1/name/${this.value}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(item.status);
          }
          return response.json();
        })
        .catch(err => console.log(err.status));
    }
  
    get val() {
      return this.value;
    }
  
    set val(newValue) {
      this.value = newValue;
    }
  }