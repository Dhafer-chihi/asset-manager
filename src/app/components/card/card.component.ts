import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitComponent } from "../../pages/produit/produit.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterOutlet, ProduitComponent, FooterComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
