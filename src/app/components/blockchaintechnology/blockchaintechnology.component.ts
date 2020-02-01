import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blockchaintechnology',
  templateUrl: './blockchaintechnology.component.html',
  styleUrls: ['./blockchaintechnology.component.css']
})
export class BlockchaintechnologyComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({ name: 'description', content: 'Blockchain technology helps to store digital records in a harmless and auditable style, allowing a quick, safe and cost operative transfer of assets.' });
    this.meta.addTag({ name: 'keywords', content: 'Blockchain Technology, Blockchain Solutions, Blockchain Services, Blockchain development company, blockchain development services, Blockchain service, Solutions and services, Blockchain Consulting, Blockchain IoT Development, Blockchain application, Virtual Currency, Token Development, blockchain application development company, Regular IT services, Product development, Web-Development service, App development' });
  }

  ngOnInit() {
    this.loadScripts();
    this.title.setTitle('Blockchain Technology | Blockchain Solutions | Blockchain Services');
  }

  loadScripts() {
    const dynamicScripts = [
      '../assets/js/anim.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }

  }

}
