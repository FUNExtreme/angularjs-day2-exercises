import { IDirective } from "angular";

export class FocusDirective implements IDirective {
  static iid: string = "focus";

  restrict = 'A';
  link = (scope, element, attrs) => {
    element[0].focus();
  }
}
