import { Component, OnInit } from '@angular/core';

export interface dataContent {
  singer: string,
  song: string,
  date: string,
  image: string,
  linkV: string,
  position: number
}
@Component({
  selector: 'app-top-list100-all-of-time',
  templateUrl: './top-list100-all-of-time.component.html',
  styleUrls: ['./top-list100-all-of-time.component.scss']
})
export class TopList100AllOfTimeComponent implements OnInit {

  cont: number = 1;

  cars: any[] = [{
    singer: 'Michael Jackson',
    song: 'Billie Jean',
    date: '',
    linkV: 'Zi_XLOBDo_Y',
    image: 'http://www.eloriente.net/home/wp-content/uploads/2014/06/michael-jackson-billie-jean.jpg',
    position: this.cont++
  },
  {
    singer: 'Bee Gees',
    song: 'How Deep Is Your Love',
    date: '',
    linkV: 'XpqqjU7u5Yc',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e1/How_Deep_Is_Your_Love.jpg',
    position: this.cont++
  },
  {
    singer: 'Michael Jackson',
    song: 'Smooth Criminal',
    date: '',
    linkV: 'h_D3VFfhvs4',
    image: 'https://i.musicaimg.com/letras/500/1286.jpg',
    position: this.cont++
  },];

  selectedCar: any;

  displayDialog: boolean;

  sortOptions: any[];

  sortKey: string;

  //sortField: string;

  sortOrder: number;

  constructor() { }

  ngOnInit() {

    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Brand', value: 'brand' }
    ];
  }

  selectCar(event: Event, car: any) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  /* onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  } */

  onDialogHide() {
    this.selectedCar = null;
  }

}
