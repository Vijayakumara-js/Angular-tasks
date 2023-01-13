import { Component, OnInit, } from '@angular/core';
import { jsPDF } from 'jspdf';

type AOA = any[][];

@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css']
})
export class PdfReaderComponent implements OnInit {

  localPDF:any;
  pdfSrc:any;
  pdfBufferRender:any;
  isEmptyDrop = true;
  isExcelDrop = true;
  zoom: number = 0;
  originalSize: boolean = true;
  

  constructor() { }

  ngOnInit(): void {
  }

  pdfOnload(event:any) {
    const pdfTatget: any = event.target;
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
        this.localPDF = this.pdfSrc;
      };
      this.pdfBufferRender = pdfTatget.files[0];
      reader.readAsArrayBuffer(pdfTatget.files[0]);
    }
  }

    incrementZoom() {
      this.zoom += 1;   
    }
   decrementZoom() {
    if(this.zoom>0)
      this.zoom -= 1;   
    }

    public onExport() {
      const doc = new jsPDF('p', 'pt', 'a4');
      const source = document.getElementById('content');
      // doc.text("Test", 40, 20);
      doc.setFontSize(12);
      doc.html(source!, {
        callback: function (pdf) {
          doc.output('dataurlnewwindow'); // preview pdf file when exported
        },
      });
      // autotable(doc, {
      //   html: '#content',
      //   useCss: true
      // })
    }
}
