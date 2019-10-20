import { Component, OnInit } from '@angular/core';
import { Menu } from "./menu"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("About", "#")

  ]

  ngOnInit() {



  }

}
