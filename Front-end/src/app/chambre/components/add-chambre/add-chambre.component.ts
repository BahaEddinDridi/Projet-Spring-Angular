import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre, TypeChambre } from 'src/app/models/chambre';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent {
  newChambre: Chambre = new Chambre();
  isEdit: boolean = false;
  isChambreAdded: boolean = false;

  constructor(private cs: ChambreService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.isEdit = params['edit'] === 'true';

      if (this.isEdit) {
        const chambreDetails = JSON.parse(params['chambre']);
        this.newChambre = { ...this.newChambre, ...chambreDetails };
      }
    });
  }

  addChambre() {
    if (this.isEdit) {
      this.cs.updateChambre(this.newChambre).subscribe(() => {
        this.showSuccessMessageAndNavigate('Modifiée');
      });
    } else {
      this.cs.addChambre(this.newChambre).subscribe(() => {
        this.showSuccessMessageAndNavigate('Ajoutée');
      });
    }
  }

  showSuccessMessageAndNavigate(action: string) {
    this.isChambreAdded = true;

    setTimeout(() => {
      this.isChambreAdded = false;
      this.router.navigate(['/chambres']);
    }, 2000);
  }

  getButtonLabel(): string {
    return this.isEdit ? 'Modifier Chambre' : 'Ajouter Chambre';
  }
}
