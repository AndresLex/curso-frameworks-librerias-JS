import { Component } from '@angular/core';

type Movies = {
  name: string,
  available: number,
  disponible: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Peliculas';
  movies: Movies[] = [
    {
      name: "One Piece",
      available: 15,
      disponible: 0
    },
    {
      name: "Naruto",
      available: 13,
      disponible: 0
    }
  ];

  addDisponible (nameMovie: string) {
    const movieIndex = this.movies.findIndex(
      movie => movie.name === nameMovie
    )

    this.movies[movieIndex].disponible += 1;
  }

  removeDisponible (nameMovie: string) {
    const movieIndex = this.movies.findIndex(
      movie => movie.name === nameMovie
    )

    this.movies[movieIndex].disponible -= 1;
  }
}
