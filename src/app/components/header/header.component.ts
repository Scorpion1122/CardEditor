import { Component, OnInit } from '@angular/core';
import { ExportImportService } from 'src/app/services/export-import.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private exportImportService: ExportImportService) { }

  ngOnInit() {
  }

  exportCardData() {
    this.exportImportService.exportCardData();
  }
}
