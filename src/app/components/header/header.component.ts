import { Component, OnInit } from '@angular/core';
import { ExportImportService } from 'src/app/services/export-import.service';
import { CardService } from '../../services/card.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exportImportService: ExportImportService,
    private cardService: CardService) { }

  ngOnInit() {
  }

  exportCardData() {
    this.exportImportService.exportCardData();
  }

  createNewCard() {
    this.cardService.createNewCard()
    .subscribe(card => 
      this.router.navigate(['/card/' + card.id], { relativeTo: this.route}));
  }
}
