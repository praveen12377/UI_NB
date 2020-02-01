import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({ name: 'description', content: 'Get the latest Chakravuyha updates and keep track of the latest industry news, features, press releases and Information on blockchain along with top stories and articles.' });
    this.meta.addTag({ name: 'keywords', content: 'Blockchain development company, blockchain development services, Blockchain service, Blockchain Solutions and services, Blockchain Consulting, Blockchain IoT Development, Blockchain application, Virtual Currency, Token Development, blockchain application development company, Regular IT services, Product development, Web-Development service, App development' });
  }

  ngOnInit() {
    this.loadScripts();
    this.title.setTitle('Chakravuyha Latest Events');
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
