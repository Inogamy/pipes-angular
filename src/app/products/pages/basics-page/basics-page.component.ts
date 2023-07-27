import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  public nameLower: string = 'john';
  public nameUpper: string = 'JOHN';
  public fullName: string = 'joHn cAnAleS';

  public customDate: Date = new Date();

}
