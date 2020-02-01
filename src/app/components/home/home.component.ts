import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({ name: 'description', content: 'Chakravuyha is a software programming advancement organization giving IT solutions for enterprises and clients around the world. We offer full stack ICO services, Information Technology, Block Chain Technology , Artificial Intelligence , Machine Learning and IOT.' });
    this.meta.addTag({ name: 'keywords', content: 'Blockchain development company, blockchain development services, Blockchain service, Blockchain Solutions and services, Blockchain Consulting, Blockchain IoT Development, Blockchain application, Virtual Currency, Token Development, blockchain application development company, Regular IT services, Product development, Web-Development service, App development' });
  }

  ngOnInit() {
    this.loadScripts(); 
    this.title.setTitle('Full stack ICO services | Blockchain development company | Chakravuyha');
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
