import {Component, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'ng2-gist',
  template:`
    <iframe #iframe type="text/javascript" width="100%" frameborder="0"></iframe>
  `,
  styleUrls: []
})

export class ng2Gist implements AfterViewInit {
  @ViewChild('iframe') iframe:ElementRef;
  @Input() gistId;

  constructor() { }

  ngAfterViewInit() {
    this.iframe.nativeElement.id = 'gist-' + this.gistId;
    let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    let content = `
      <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')
        .style.height=document.body.scrollHeight + 'px'">
        <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }
}