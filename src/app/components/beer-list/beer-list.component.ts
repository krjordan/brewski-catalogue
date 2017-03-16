import { Component, OnInit } from '@angular/core';
import { SudsService } from '../../services/suds.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: any[];

  constructor(private sudsService: SudsService) { }

  ngOnInit() {
    this.updatePage();
  }

  updatePage(page?: number) {
    this.sudsService.getSuds(page)
      .subscribe(suds => this.beers = suds);
  }
}
