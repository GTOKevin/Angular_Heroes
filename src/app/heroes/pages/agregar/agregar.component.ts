import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius:5px;
    }
    `
  ]
})
export class AgregarComponent implements OnInit {


  publishers=
  [
    {
    id:'DC Comics',
    desc:'DC Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel Comics'
    }
  ]

  heroe:Heroe={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    alt_img:''
  }

  constructor(private heroesService:HeroesService,
              private activeRouter:ActivatedRoute,
              private router:Router,
              private _snackBar:MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {

    console.log(this.router.url);
    if(!this.router.url.includes('editar')){
      return;
    }

    this.activeRouter.params
    .pipe(
      switchMap(params=> this.heroesService.getHeroById(params["id"]))
    )
    .subscribe(
      h=>this.heroe=h,
      err=> this.router.navigate(['/heroes/listado']))

  }

  guardar(){
    
    if(this.heroe.superhero.trim().length==0){
      return;
    }


    if(this.heroe.id){
      this.heroesService.actualizarHeroe(this.heroe,this.heroe.id).subscribe(hero=>{
        
        this.mostrarSnakbar('Heroe actualizado');
        
      })
    }else{
      this.heroesService.agregarHeroe(this.heroe).subscribe(hero=>{
        this.router.navigate(['/heroes/editar',hero.id]);
        this.mostrarSnakbar('Heroe agregado')
      })
    }

  }


  borrarHeroe(){

    const dialog =this.dialog.open(ConfirmarComponent,{
      width:'250px',
      data:this.heroe
    })

    dialog.afterClosed().subscribe(result=>{
      if(result){
      this.heroesService.borrarrHeroe(this.heroe.id!).subscribe(r=>{
        this.router.navigate(['/heroes/listado'])
       })
      }
    })



  }

  mostrarSnakbar(mensaje:string){
    this._snackBar.open(mensaje,'ok!',{
      duration:2000,
      verticalPosition:'bottom',
      horizontalPosition:'end',
    })
  }


  

}
