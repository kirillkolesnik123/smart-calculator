class SmartCalculator {
  constructor(initialValue) {
    this.value=[initialValue];
  }

  add(number) {
    this.value.push('+', number);
    return this;
  }
  
  subtract(number) {
     this.value.push('-', number);
     return this;
  }

  multiply(number) {
     this.value.push('*', number);
     return this;
  }

  devide(number) {
     this.value.push('/', number);
     return this;
  }

  pow(number) {
     this.value.push('**', number);
     return this;
  }
  valueOf(){
    let fortest = eval(this.value.join().replace(/,/g, ''));
      return fortest;
  }
}

module.exports = SmartCalculator;
