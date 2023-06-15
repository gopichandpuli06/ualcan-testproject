import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { IDepartment } from '../department.interface';
//
//import {FormControl} from '@angular/forms';
//import {Observable} from 'rxjs';
//import {map, startWith} from 'rxjs/operators';
//

@Component({
  selector: 'app-analysis',
  templateUrl: 'analysis.page.html',
  styleUrls: ['analysis.page.scss']
})
export class analysisPage{
  // my code for dropdown

  // auto complete
  /*myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

    */
  //

  // dropdown list
    public departments: Array<IDepartment> = [

      {id:1, Cancer: 'Adrenocortical Carcinoma'},
      {id:2, Cancer: 'Acute Myeloid Leukemia'},
      {id:3, Cancer: 'Bladder Urothelial Carcinoma'},
      {id:4, Cancer: 'Brain lower grade glioma'},
      {id:5,Cancer:'Breast Invasive Carcinoma'},
      {id:6,Cancer:'Metastatic Breast Cancer[MET 500 dataset]'},
      {id:7,Cancer:'Cervical Squamous Cell Carcinoma'},
      {id:8,Cancer:'Cholangiocarcinoma'},
      {id:9,Cancer:'Colon Adenocarcinoma'},
      {id:10,Cancer:'Esophageal Carcinoma'},
      {id:11,Cancer:'Glioblastoma Multiforme'},
      {id:12,Cancer:'Head And Neck Squamous Cell Carcinoma'},
      {id:13,Cancer:'Kidney Chromophobe'},
      {id:14,Cancer:'Kidney Renal Clear cell Carcinoma'},
      {id:15,Cancer:'Kidney Renal Papillary Cell Carcinoma'},
      {id:16,Cancer:'Liver Hepatocellular Carcinoma'},
      {id:17,Cancer:'Lung Adenocarcinoma'},
      {id:18,Cancer:'Lung Squamous Cell Carcinoma'},
      {id:19,Cancer:'Lymphiod Neoplasm Diffuse LargeB-cell Lymphoma'},
      {id:20,Cancer:'Mesothelioma'},
      {id:21,Cancer:'Ovarian Serous Cystadenocarcinoma'},
      {id:22,Cancer:'Pancreatic Adenocarcinoma'},
      {id:23,Cancer:'Pheochromocytoma and Paraganglioma'},
      {id:24,Cancer:'Prostate Adenocarcinoma'},
      {id:25,Cancer:'Metastatic Prostate cancer[MET 500 dataset]'},
      {id:26,Cancer:'Rectumadenocacinoma)'},
      {id:27,Cancer:'Sarcoma'},
      {id:28,Cancer:'Skin Cutaneous Melanoma'},
      {id:29,Cancer:'Stomach Adenocarcinoma'},
      {id:30,Cancer:'Testis Germ Cell Tumors'},
      {id:31,Cancer:'Thymoma'},
      {id:32,Cancer:'Thyroid Carcinoma'},
      {id:33,Cancer:'Uveal Melanoma'},
      {id:34,Cancer:'Uterine Corpus Endometrial Carcinoma'},
      {id:35,Cancer:'Uterine Carcinosarcoma'},
    ];

    public deptId:number;

  //

  constructor(private router: Router) {}
  submit(){
    var genenam = $('#genenam').val();
    var ctype = $('#ctype').val();
    var url = "http://ualcan.path.uab.edu/cgi-bin/TCGAExResult-Mobile.pl?genenam="+genenam+"&ctype="+ctype+"";
    window.open(url,'_system'); 
  }

  
}


