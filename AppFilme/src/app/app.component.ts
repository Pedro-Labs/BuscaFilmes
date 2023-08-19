import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BuscaFilmes';
  filmes: any[] = [];
  termoBusca = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.procurarFilmes();
  }

  procurarFilmes() {
    const apiUrl = `http://www.omdbapi.com/?apikey=55f5a71d&s=${this.termoBusca}`;
    
    this.http.get(apiUrl).subscribe((response: any) => {
      this.filmes = response.Search || [];
    });
  }
}
