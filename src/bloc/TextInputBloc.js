import * as rxjs from 'rxjs';

class FormInputBloc {
  constructor() {
    this.nameSubject = new rxjs.BehaviorSubject('');
    this.addressSubject = new rxjs.BehaviorSubject('');
  }

  nameInput = val => {
    let name = this.nameSubject.getValue() + val;
    this.nameSubject.next(name);
  };

  addressInput = val => {
    let address = this.addressSubject.getValue() + val;
    this.nameSubject.next(address);
  };
}

export default FormInputBloc;
