import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(
      res => console.log(res) // for query params
    )

    this.route.params.subscribe(
      res => console.log(res) // for path params
    )

    this.route.firstChild?.params.subscribe(
      res => console.log(res) // for path params
    )
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.router.navigate(['']);
    // }, 5000);
  }

}
