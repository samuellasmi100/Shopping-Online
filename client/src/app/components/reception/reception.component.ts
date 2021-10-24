import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  @ViewChild('content') content: ElementRef<any> | undefined;

  public products:any[] = []

  constructor(public cartServices:CartService,) { }

  ngOnInit(): void {
    const productCartObservabel = this.cartServices.getProducts();

    productCartObservabel.subscribe(res => {

      this.products = res

    },(err => {
      alert(err.error.error) 
    }))
  }

  downloadPDF():void{
    
    let DATA = document.getElementById('content')!;
      
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('reception.pdf');
    });     
  }
}

