import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-predict-item',
  templateUrl: './predict-item.component.html',
  styleUrls: ['./predict-item.component.css']
})
export class PredictItemComponent implements OnInit {
  @Input() diseaseName!: string;
  @Input() prediction!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
