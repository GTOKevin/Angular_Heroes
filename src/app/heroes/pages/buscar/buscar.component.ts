import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

termino:string="";
heroes:Heroe[]=[];

heroeSeleccionado:Heroe | undefined;

  constructor(private heroService:HeroesService) { }

  ngOnInit(): void {
  }


buscando(){
  this.heroService.getSugerencias(this.termino).subscribe((r)=>{
    this.heroes=r;
  });
}

optionSeleccionada(evento:MatAutocompleteSelectedEvent){
  if(evento.option.value!="" && evento.option.value!=null){
    const heroe:Heroe = evento.option.value;
    this.termino=heroe.superhero;
    this.heroService.getHeroById(heroe.id!).subscribe(r=>this.heroeSeleccionado=r);
  }else{
    this.heroeSeleccionado=undefined;
  }


}

}
