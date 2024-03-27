import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  list: any;

  constructor(public dialog: MatDialog, private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getAllClientes().subscribe(result => {
      this.list = result;
    })
  }

}
