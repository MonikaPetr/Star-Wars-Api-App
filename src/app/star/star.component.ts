import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  allStars = [];
  stars: any;
  results: any;
  planets: any;
  species: any;
  allPlanets = [];
  allSpecies = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    for(let i = 1; i < 88; i++){
      this.http.get('https://swapi.co/api/people/'+[i]).subscribe(stars => {
        this.stars = stars;
        this.allStars.push(stars);
      });
    }
    for(let i = 1; i < 61; i++){
      this.http.get('https://swapi.co/api/planets/'+[i]).subscribe(planets => {
        this.planets = planets;
        this.allPlanets.push(planets);
      });
    }
    for(let i = 1; i < 38; i++){
      this.http.get('https://swapi.co/api/species/'+[i]).subscribe(species => {
        this.species = species;
        this.allSpecies.push(species);
      });
    }
  }

  onChange(name){
      this.http.get('https://swapi.co/api/people/?search='+ name).subscribe(stars => {
      this.stars = stars;
          document.getElementById("people").innerHTML =
          `<h3>Name: `+ this.stars.results[0]['name'] + `</h3>
          <p>Height: ` + this.stars.results[0]['height'] + `</p>
          <p>Mass: ` + this.stars.results[0]['mass'] + `</p>
          <p>Hair Color: ` + this.stars.results[0]['hair_color'] + `</p>
          <p>Skin Color: ` + this.stars.results[0]['skin_color'] + `</p>`
    });
    }

    onChangePlanet(planet){
        this.http.get('https://swapi.co/api/planets/?search='+ planet).subscribe(planets => {
        this.planets = planets;
        console.log(planets);
        console.log(planet);
            document.getElementById("planet").innerHTML =
            `<h3>Name: `+ this.planets.results[0]['name'] + `</h3>
            <p>Diameter: ` + this.planets.results[0]['diameter'] + `</p>
            <p>Climate: ` + this.planets.results[0]['climate'] + `</p>
            <p>Population: ` + this.planets.results[0]['population'] + `</p>
            <p>Terrain: ` + this.planets.results[0]['terrain'] + `</p>`
        });
      }

      onChangeSpecies(specie){
          this.http.get('https://swapi.co/api/species/?search='+ specie).subscribe(species => {
          this.species = species;
              document.getElementById("species").innerHTML =
              `<h3>Name: `+ this.species.results[0]['name'] + `</h3>
              <p>Classificaation: ` + this.species.results[0]['classification'] + `</p>
              <p>Average Height: ` + this.species.results[0]['average_height'] + `</p>
              <p>Skin Colors: ` + this.species.results[0]['skin_colors'] + `</p>
              <p>Designation: ` + this.species.results[0]['designation'] + `</p>`
          });
        }


  }
