import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartilhaSolidariaService } from '../partilha-solidaria.service';
import { FormBuilder, Validators } from '@angular/forms';
import { getYear, format, getMonth } from 'date-fns';
import { NbToastrService } from '@nebular/theme';
import { FileUploader } from 'ng2-file-upload';
import { SECURED_URL } from '../../../auth/urls';
import { AuthService } from '../../../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  meses: { n: number, mes: string }[];
  public formData = new FormData();
  ReqJson: any = {};
  constructor(
    private route: ActivatedRoute,
    private partilhaService: PartilhaSolidariaService,
    private fb: FormBuilder,
    private router: Router,
    private toastrService: NbToastrService,
    private authService: AuthService,
    private http: HttpClient,
  ) {
    this.uploader = new FileUploader({
      url:
        `${SECURED_URL}/partilha/enviarDoc`,
      authToken: `${this.authService.getToken()}`, removeAfterUpload: false, autoUpload: true,
    });

    // this.uploader = new FileUploader({
    //   url: `${SECURED_URL}/partilha/enviarDoc`,
    //   authToken: `${this.authService.getToken()}`,
    //   // autoUpload: true,
    //   disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
    //   formatDataFunctionIsAsync: true,
    //   formatDataFunction: async (item) => {
    //     return new Promise((resolve, reject) => {
    //       resolve({
    //         name: item._file.name,
    //         length: item._file.size,
    //         contentType: item._file.type,
    //         date: new Date(),
    //       });
    //     });
    //   }
    // },
    // );
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
    this.uploader.onAfterAddingFile = (item => {
      item.withCredentials = false;
    });
    this.response = '';

    this.uploader.response.subscribe(res => this.response = res);

  }

  image;
  uploadFiles(file) {
    if (file.length > 0) {
      this.image = file[0];
      this.form.patchValue({
        file: this.image.name,
      });
    }
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  imageurl = `${SECURED_URL}/partilha/obterDoc/f4b5164f-1993-4903-8867-2bad19fd8221-1596485555705.jpeg`;

  enviarDoc(id: string) {
    const formData = new FormData();
    formData.append('file', this.image, this.image.name);
    this.http.post(`${SECURED_URL}/partilha/enviarDoc`, formData, {
      params: {
        comprovanteId: '--' + id,
      },
    }).subscribe((res) => {
        this.toastrService.success('Doc enviado com sucesso');
      }, err => this.toastrService.danger('erro ao enviar o arquivo, favor tentar novamente'));
  }

  imageToShow: any;

  isImageLoading = false;

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;
  anoAtual = getYear(new Date());
  id: string;
  dataPrevistaRecebimento: { success: boolean, data: Date };
  headerMessage: string;

  form = this.fb.group({
    mes: null,
    ano: null,
    valorComprovante: [null, Validators.required],
    justificativaAtraso: null,
    file: [null, Validators.required],
  });

  justicativaCorrecao = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id === 'novo') {
        this.headerMessage = 'Enviar comprovante';
      } else {
        this.partilhaService.obterPartilha(this.id)
          .subscribe(res => {
            this.form.patchValue({ ...res });
            this.justicativaCorrecao = res.justicativaCorrecao;
          },
            err => {
              this.toastrService.danger(err.error.erros, 'Erro!');
              this.router.navigate(['/pages/partilha-solidaria/lista']);
            });
      }
    });
    const mes = getMonth(new Date());
    this.form.patchValue({ mes: mes, ano: this.anoAtual });
    this.meses = this.todosMeses.filter(it => it.n <= mes);
    this.dataPrevistaRecebimento = this.partilhaService.calculaDataPrevista(mes, this.anoAtual);
    this.form.controls.mes.valueChanges.subscribe(value => {
      this.dataPrevistaRecebimento = this.partilhaService.calculaDataPrevista(value, this.form.value.ano);
      this.justificativaValidator(value, this.form.value.ano);
    });
    this.form.controls.ano.valueChanges.subscribe(value => {
      if (value === this.anoAtual) {
        this.meses = this.todosMeses.filter(it => it.n <= mes);
        this.form.patchValue({ mes: mes });
      } else {
        this.meses = this.todosMeses;
      }
      this.justificativaValidator(this.form.value.mes, value);
      this.partilhaService.calculaDataPrevista(this.form.value.mes, value);
    });
  }

  justificativaValidator(mes: number, ano: number) {
    const mesAtual = getMonth(new Date());
    if (this.anoAtual === ano && mesAtual === mes) {
      this.form.controls.justificativaAtraso.setValidators(null);
    } else {
      this.form.controls.justificativaAtraso.setValidators(Validators.required);
    }
  }

  enviar() {
    if (this.form.valid) {
      if (this.id === 'novo') {
        this.partilhaService.enviarComprovante(this.form.value)
          .subscribe(res => {
            if (res) {
              this.enviarDoc(res._id);
              this.router.navigate(['./pages/partilha-solidaria/lista']);
            }
          });
      } else {
        this.partilhaService.enviarComprovante({ ...this.form.value, id: this.id })
          .subscribe(res => {
            if (res) {
              this.router.navigate(['./pages/partilha-solidaria/lista']);
            }
          });
      }
    }
  }

  formataData(data: Date) {
    return format(data, 'dd/MM/yyyy');
  }

  todosMeses = [
    {
      n: 0,
      mes: 'Janeiro',
    },
    {
      n: 1,
      mes: 'Fevereiro',
    },
    {
      n: 2,
      mes: 'Março',
    },
    {
      n: 3,
      mes: 'Abril',
    },
    {
      n: 4,
      mes: 'Maio',
    },
    {
      n: 5,
      mes: 'Junho',
    },
    {
      n: 6,
      mes: 'Julho',
    },
    {
      n: 7,
      mes: 'Agosto',
    },
    {
      n: 8,
      mes: 'Setembro',
    },
    {
      n: 9,
      mes: 'Outubro',
    },
    {
      n: 10,
      mes: 'Novembro',
    },
    {
      n: 11,
      mes: 'Dezembro',
    },
  ];
}
