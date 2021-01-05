import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  proyects = [ 1,2,3,4,5,6,7,8,10 ];

  constructor() { }

  ngOnInit(): void {
  }

}
