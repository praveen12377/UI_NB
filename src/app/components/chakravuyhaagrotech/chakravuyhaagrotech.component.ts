import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chakravuyhaagrotech',
  templateUrl: './chakravuyhaagrotech.component.html',
  styleUrls: ['./chakravuyhaagrotech.component.css']
})
export class ChakravuyhaagrotechComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({ name: 'description', content: 'Chakravuyha Agro is an agritech syndicate comprising of several startups specializing in the advances technologies of Distributes Ledger, Big Data and Internet of Things.' });
    this.meta.addTag({ name: 'keywords', content: 'Chakravuyha AgroTech, Mobile Based Agricultural, Global Smart Agriculture, Blockchain development company, blockchain development services, Blockchain service, Blockchain Solutions and services, Blockchain Consulting, Blockchain IoT Development, Blockchain application, Virtual Currency, Token Development, blockchain application development company, Regular IT services, Product development, Web-Development service, App development' });
  }

  ngOnInit() {
    this.loadScripts();
    this.title.setTitle('Chakravuyha AgroTech | Mobile Based Agricultural | Global Smart Agriculture');
  }

  loadScripts() {
    const dynamicScripts = [
      '../assets/js/anim.js',
      '../assets/js/script.js'
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
