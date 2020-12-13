import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-parent',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class MemberParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
