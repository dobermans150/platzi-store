import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '@core/models/employee.model';
import { GeneratorService } from '@core/services/generator.service';

const names = ['christian', 'juan', 'maria', 'Barbara', 'Paola'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];
  value: number;

  constructor(private generatorService: GeneratorService) {}

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);

    this.generatorService.getData().subscribe(response => {
      this.value = response,
      console.log(this.value);
      
    })
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    });
  }
}
