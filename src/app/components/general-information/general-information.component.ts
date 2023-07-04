import { Component } from '@angular/core';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent {
  public monthDate: Array<number> =
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  public expensesCategories: Array<string> =
    ['Auto',
      'Household',
      'Health',
      'Rent',
      'Credit/debts',
      'Cloth',
      'Transport',
      'Food',
      'Entertainment',
      'Communication'];
  public months: Array<string> =
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
}