import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements OnInit {

  public searchString: string

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(){
  }

  goSearch(){
    this._router.navigate(['/buscar', this.searchString]);
  }
}
