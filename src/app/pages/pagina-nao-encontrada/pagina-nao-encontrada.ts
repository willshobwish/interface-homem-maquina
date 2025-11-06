import { Component, OnInit } from '@angular/core';
import { Router ,RouterLink} from '@angular/router';
@Component({
  selector: 'app-pagina-nao-encontrada',
  imports: [RouterLink],
  templateUrl: './pagina-nao-encontrada.html',
  styleUrl: './pagina-nao-encontrada.scss',
})
export class PaginaNaoEncontrada implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 6000);
  }
}
