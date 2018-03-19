import { IController } from "angular";

export class RootController implements IController {
  static iid: string = "RootController";
  public title: string;

  constructor() {
  }

  $onInit(): void {
    this.title = 'AngularJS Course';
  }
}
