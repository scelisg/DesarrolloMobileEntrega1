import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';


@Component({
  selector: 'app-suscriptor',
  templateUrl: './suscriptor.page.html',
  styleUrls: ['./suscriptor.page.scss'],
})
export class SuscriptorPage implements OnInit {

  pageTitle: any = 'Suscriptor';
  editForm : FormGroup;
  id : any;

  constructor(
    private db: DbService,
    private router: Router,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.db.getSuscripcion(this.id).then(res => {
      this.editForm.setValue({
        nombre: res['nombre'],
        correo: res['correo']
      })
    })
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nombre: [''],
      correo: ['']
    });
  }

  saveForm() {
    this.db.updateSuscripcion(this.id, this.editForm.value)
    .then((res) => {
      console.log(res)
      this.router.navigate(['/formulario']);
    });
  }

}
