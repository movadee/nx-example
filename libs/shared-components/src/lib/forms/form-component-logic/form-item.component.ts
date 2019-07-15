import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormTemplateBaseComponent } from './form-template-base.component';
import { FormGroup } from '@angular/forms';
import { FormTextInputComponent } from '../form-text-input.component';
import { FormCheckboxComponent } from '../form-checkbox.component';

@Component({
  selector: 'app-form-item',
  template: `
    <ng-container #container></ng-container>
  `
})
export class FormItemComponent implements OnInit {
  @Input('group') public heroForm: FormGroup;
  @Input() data: any;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  private container: ViewContainerRef;

  readonly templateMapper = {
    formTextInput: FormTextInputComponent,
    formCheckbox: FormCheckboxComponent
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.getComponentForCardType(this.data.componentType)
    );
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<FormTemplateBaseComponent>componentRef.instance).data = this.data;
    (<FormTemplateBaseComponent>componentRef.instance).group = this.heroForm;
  }

  private getComponentForCardType(componentType) {
    return this.templateMapper[componentType];
  }
}
