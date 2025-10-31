import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-nao-encontrada',
  imports: [],
  templateUrl: './pagina-nao-encontrada.html',
  styleUrl: './pagina-nao-encontrada.scss',
})
export class PaginaNaoEncontrada implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }
}
