import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/models/chambre';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.css']
})
export class ListChambreComponent {
  chambres!: Chambre[];

  constructor(private router:Router, private cs:ChambreService ){}

  ngOnInit(){
    this.fetchChambres();
  }
  fetchChambres() {
    this.cs.getChambres().subscribe((chambres: Chambre[]) => {
      this.chambres = chambres;
    });
  }

  deleteChambre(chambre: Chambre){
    this.cs.deleteChambre(chambre.idChambre).subscribe(() => {
      this.fetchChambres();
    })
  }

  stringifyChambre(chambre: Chambre): string {
    return JSON.stringify(chambre);
  }
}
