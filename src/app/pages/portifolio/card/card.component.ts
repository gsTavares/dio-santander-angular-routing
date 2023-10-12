import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      res => console.log(res) // for query params
    )

    this.route.params.subscribe(
      res => console.log(res) // for path params
    )
  }

  ngOnInit(): void {
  }

}
