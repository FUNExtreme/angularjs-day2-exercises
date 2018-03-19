import { IController } from "angular";

export class RootController implements IController {
  static iid: string = "RootController";
  static $inject = ['$mdSidenav'];

  public title: string;

  constructor(private $mdSidenav) {
  }

  $onInit(): void {
    this.title = 'AngularJS Course';
  }

  toggleMenu(): void {
    this.$mdSidenav('left').toggle();
  }
}
