import { Component } from '@angular/core';

@Component({
  selector: 'app-input-json-validate',
  templateUrl: './input-json-validate.component.html',
  styleUrls: ['./input-json-validate.component.css']
})
export class InputJsonValidateComponent{

  enteredJsonval: string = "JSON testing";
  validate!: boolean;
  InputValidation(val: any) {
    if (val) {
      this.enteredJsonval = val;
      try {
        JSON.parse(val);
        this.validate = true;
        console.log('correct');
      } catch (e) {
        this.validate = false;
        console.log('error');
      }
    } else {
      return;
    }
  }

}
