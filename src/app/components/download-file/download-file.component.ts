import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { UiService } from 'src/app/services/ui.service';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {

  fileName = `חשבונית רכישה.xlsx`;

  constructor(public uiService: UiService, private ordersService: OrdersService) {

  }

  exportexcel(): void {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  };

  ngOnInit(): void { }

  backHome() {
    localStorage.removeItem('cartId');
    this.uiService.showFile = false;
    this.ordersService.removeInvoicing();
  };

}
