import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const navLinks = this.el.nativeElement.querySelectorAll('.nav-link');
    const navbarToggler = this.el.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse = this.el.nativeElement.querySelector('.navbar-collapse');

    navLinks.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', () => {
        if (window.innerWidth < 992) { // Fecha apenas no mobile
          navbarToggler.click(); // Simula o clique no botão para fechar o menu
        }
      });
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
