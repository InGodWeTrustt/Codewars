function NamedOne(first, last) {
    this._firstName = first;
    this._lastName = last;
    this._fullName = function () {
      return this._firstName + " " + this._lastName;
    };
    
    Object.defineProperties(this, {
      firstName: {
        get() {
          return this._firstName;
        },
        set(val) {
          this._firstName = val;
        }
      },
      lastName: {
        get() {
          return this._lastName;
        },
        set(val) {
          this._lastName = val;
        }
      },
      fullName: {
        get() {
          return this._fullName();
        },
        set(val) {
          if(!/[a-z]+\s[a-z]+/i.test(val)) return; // if we get not correct fullName
          const [fn, ln] = val.split(" ");
          this._firstName = fn;
          this._lastName = ln;
        }
      }
    });
  }

// Example
const n = new NamedOne('Ivan', 'Petrov');
console.log(n.fullName); // Ivan Petrov

n.firstName = 'Alexey';
n.lastName = 'Ivanov';
console.log(n.fullName); // Alexey Ivanov

n.firstName = 'Igor';
console.log(n.fullName); // Igor Ivanov

n.fullName = 'Ivan_Ivanov';
console.log(n.fullName); //Igor Ivanov