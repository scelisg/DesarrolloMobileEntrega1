import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  pageTitle: any = '!Suscríbete!';
  mainForm: FormGroup;
  Data: any[] = [];

  constructor(
    private db:DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.db.dbState().subscribe((res => {
      if(res)
      {
        this.db.fetchFormulario().subscribe(item =>{
          this.Data = item
        })
      }
    }));
    this.mainForm = this.formBuilder.group({
      nombre: [''],
      correo:[''],
      edad:['']
    })
  }

  addFormulario(){
    this.db.addFormulario(
      this.mainForm.value.nombre,
      this.mainForm.value.correo,
      this.mainForm.value.edad
    ).then((res) => {
      this.mainForm.reset();
    });
  }

  deleteSuscripcion(id){
    this.db.deleteSuscripcion(id).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Suscripción eliminada',
        duration: 3000
      });
      toast.present()
    });
  }

}
