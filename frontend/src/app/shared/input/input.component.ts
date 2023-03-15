import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit, OnDestroy {

  private _onChange: (val: any) => void = () => { };
  private _onTouched: () => void = () => { };
  private _disabled: boolean = false;

  @Input() public value!: any
  @Input() public label: string = "";
  @Input() public type: string = "text";
  @Input() public placeholder: string = "";

  public inputControl = new FormControl()
  private inputSubscription = new Subscription();

  public ngOnInit(): void {
    this.inputSubscription = this.inputControl.valueChanges.subscribe({
      next: (value: string) => {
        this._onChange(value);
        this._onTouched();
      }
    })
  }

  public ngOnDestroy(): void {
    this.inputSubscription.unsubscribe();
  }

  writeValue(val: any): void {
    this.value = val;
    this.inputControl.setValue(val);
  }

  registerOnChange(fn: (val: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }
}
