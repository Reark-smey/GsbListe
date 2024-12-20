import {Component, OnInit} from '@angular/core';
import {Routes, Router} from '@angular/router';
import {Frais} from '../../models/Frais';
import {Observable} from 'rxjs';
import {GsbFraisService} from '../../gsb-frais-service.service';
import {AsyncPipe, NgFor} from '@angular/common';

@Component({
  selector: 'app-liste-frais',
  imports: [AsyncPipe, NgFor],
  templateUrl: './liste-frais.component.html',
  standalone: true,
  styleUrl: './liste-frais.component.css'
})
export class ListeFraisComponent implements OnInit{
 frais$!: Observable<Frais[]>;

 constructor(private frais_api: GsbFraisService) {}

  ngOnInit() {
   this.frais_api.listeFraisDuVisiteur();
   this.frais$ = this.frais_api.appels_termines;
  }
  trackById(index: number, item: Frais): number {
   return item.id_frais;
  }
}
