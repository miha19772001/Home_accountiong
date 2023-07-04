import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('buttonGeneralInfo') buttonGeneralInfo!: ElementRef;
  @ViewChild('buttonIncome') buttonIncome!: ElementRef;
  @ViewChild('buttonExpenses') buttonExpenses!: ElementRef;
  @ViewChild('buttonSavings') buttonSavings!: ElementRef;

  currentButton(button: HTMLButtonElement) {
    this.buttonGeneralInfo.nativeElement.classList.remove('header__button--current');
    this.buttonIncome.nativeElement.classList.remove('header__button--current');
    this.buttonExpenses.nativeElement.classList.remove('header__button--current');
    this.buttonSavings.nativeElement.classList.remove('header__button--current');
    button.classList.add('header__button--current');
  }
}
