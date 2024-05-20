(self.webpackChunkwizards_ui=self.webpackChunkwizards_ui||[]).push([[822],{"./libs/ui/src/input-text/input-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"nz-form-control {\n  width: 100%;\n}\nnz-form-control nz-input-group {\n  width: auto;\n}\nnz-form-control input {\n  width: auto;\n}\nnz-form-control .full-width {\n  width: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/src/input-text/input-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>WizardsInputComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var input_text_componentngResource=__webpack_require__("./libs/ui/src/input-text/input-text.component.scss?ngResource"),input_text_componentngResource_default=__webpack_require__.n(input_text_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),ng_zorro_antd_checkbox=__webpack_require__("./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-checkbox.mjs"),ng_zorro_antd_form=__webpack_require__("./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-form.mjs"),ng_zorro_antd_input=__webpack_require__("./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-input.mjs");let AddHTMLAttributeDirective=class AddHTMLAttributeDirective{constructor(el,renderer){this.el=el,this.renderer=renderer,this.attributeName="data-cy"}ngOnInit(){this.attributeName&&this.attributeValue&&this.el.nativeElement&&this.addAttributeOnHostElement()}addAttributeOnHostElement(){this.renderer.setAttribute(this.el.nativeElement,this.attributeName,this.attributeValue)}static#_=this.ctorParameters=()=>[{type:core.ElementRef},{type:core.Renderer2}];static#_2=this.propDecorators={attributeName:[{type:core.Input}],attributeValue:[{type:core.Input}]}};AddHTMLAttributeDirective=(0,tslib_es6.Cg)([(0,core.Directive)({standalone:!0,selector:"[addHtmlAttribute]"}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef,core.Renderer2])],AddHTMLAttributeDirective);let WizardsInputComponent=class WizardsInputComponent{constructor(controlContainer){this.controlContainer=controlContainer,this.disabled=!1,this.required=!1,this.type="text",this.fullWidth=!0,this.inputSize="default",this.errorIfEmail=!1}static#_=this.ctorParameters=()=>[{type:fesm2022_forms.ZU}];static#_2=this.propDecorators={controlName:[{type:core.Input}],disabled:[{type:core.Input}],label:[{type:core.Input}],placeholder:[{type:core.Input}],required:[{type:core.Input}],type:[{type:core.Input}],prefix:[{type:core.Input}],suffix:[{type:core.Input}],fullWidth:[{type:core.Input}],inputSize:[{type:core.Input}],cy:[{type:core.Input}],errorIfEmail:[{type:core.Input}],errorIfShort:[{type:core.Input}],errorIfToLong:[{type:core.Input}]}};WizardsInputComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[AddHTMLAttributeDirective,common.CommonModule,ng_zorro_antd_checkbox.IJ,ng_zorro_antd_form.PQ,ng_zorro_antd_input.j,fesm2022_forms.YN,fesm2022_forms.X1],selector:"wiz-input-text",template:'<ng-container [formGroup]="$any(controlContainer.control)">\r\n  <nz-form-item>\r\n      <nz-form-label *ngIf="!!label" [nzRequired]="required">{{ label }}</nz-form-label>\r\n      <nz-form-control [nzErrorTip]="errorMessages">\r\n        <nz-input-group [class.full-width]="fullWidth" [nzSize]="inputSize" [nzPrefix]="prefix" [nzSuffix]="suffix">\r\n          <input nz-input class="input-text"\r\n                addHtmlAttribute\r\n                [attributeValue]="cy || controlName"\r\n                [class.full-width]="fullWidth"\r\n                [placeholder]="placeholder ? placeholder : label"\r\n                [type]="type"\r\n                [disabled]="disabled"\r\n                [formControlName]="controlName"\r\n                [name]="controlName">\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n      <ng-template #errorMessages let-control>\r\n        <ng-container *ngIf="$any(controlContainer.control)?.get(controlName)?.hasError(\'minlength\') && $any(controlContainer.control)?.get(controlName)?.touched && errorIfShort">Minimalna ilość znaków to {{ errorIfShort }}</ng-container>\r\n        <ng-container *ngIf="$any(controlContainer.control)?.get(controlName)?.hasError(\'maxlength\') && $any(controlContainer.control)?.get(controlName)?.touched && errorIfShort">Maksymalna ilość znaków to {{ errorIfToLong }}</ng-container>\r\n        <ng-container *ngIf="$any(controlContainer.control).get(controlName)?.hasError(\'email\') && $any(controlContainer.control)?.get(controlName)?.touched && errorIfEmail">Zły format adresu E-mail</ng-container>\r\n      </ng-template>\r\n  </nz-form-item>\r\n</ng-container>\r\n',styles:[input_text_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[fesm2022_forms.ZU])],WizardsInputComponent)},"./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-checkbox.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$g:()=>NzCheckboxComponent,IJ:()=>NzCheckboxModule});var tslib__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-util.mjs"),_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs"),_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/cdk/fesm2022/bidi.mjs"),ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-form.mjs");const _c0=["*"],_c1=["inputElement"],_c2=["nz-checkbox",""],_forTrack0=($index,$item)=>$item.value;function NzCheckboxGroupComponent_For_1_Template(rf,ctx){if(1&rf){const _r1=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"label",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange",(function NzCheckboxGroupComponent_For_1_Template_label_nzCheckedChange_0_listener($event){const option_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit,ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onCheckedChange(option_r2,$event))})),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()}if(2&rf){const option_r2=ctx.$implicit,ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled",option_r2.disabled||ctx_r2.nzDisabled)("nzChecked",option_r2.checked),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.label)}}class NzCheckboxWrapperComponent{constructor(){this.nzOnChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.checkboxList=[]}addCheckbox(value){this.checkboxList.push(value)}removeCheckbox(value){this.checkboxList.splice(this.checkboxList.indexOf(value),1)}onChange(){const listOfCheckedValue=this.checkboxList.filter((item=>item.nzChecked)).map((item=>item.nzValue));this.nzOnChange.emit(listOfCheckedValue)}static#_=this.ɵfac=function NzCheckboxWrapperComponent_Factory(t){return new(t||NzCheckboxWrapperComponent)};static#_2=this.ɵcmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:NzCheckboxWrapperComponent,selectors:[["nz-checkbox-wrapper"]],hostAttrs:[1,"ant-checkbox-group"],outputs:{nzOnChange:"nzOnChange"},exportAs:["nzCheckboxWrapper"],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],ngContentSelectors:_c0,decls:1,vars:0,template:function NzCheckboxWrapperComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0))},encapsulation:2,changeDetection:0})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCheckboxWrapperComponent,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,args:[{selector:"nz-checkbox-wrapper",exportAs:"nzCheckboxWrapper",preserveWhitespaces:!1,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,template:" <ng-content></ng-content> ",host:{class:"ant-checkbox-group"},standalone:!0}]}],null,{nzOnChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]});class NzCheckboxComponent{innerCheckedChange(checked){this.nzDisabled||(this.nzChecked=checked,this.onChange(this.nzChecked),this.nzCheckedChange.emit(this.nzChecked),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.onChange())}writeValue(value){this.nzChecked=value,this.cdr.markForCheck()}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouched=fn}setDisabledState(disabled){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||disabled,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(ngZone,elementRef,nzCheckboxWrapperComponent,cdr,focusMonitor,directionality,nzFormStatusService){this.ngZone=ngZone,this.elementRef=elementRef,this.nzCheckboxWrapperComponent=nzCheckboxWrapperComponent,this.cdr=cdr,this.focusMonitor=focusMonitor,this.directionality=directionality,this.nzFormStatusService=nzFormStatusService,this.dir="ltr",this.destroy$=new rxjs__WEBPACK_IMPORTED_MODULE_1__.B,this.isNzDisableFirstChange=!0,this.onChange=()=>{},this.onTouched=()=>{},this.nzCheckedChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.nzValue=null,this.nzAutoFocus=!1,this.nzDisabled=!1,this.nzIndeterminate=!1,this.nzChecked=!1,this.nzId=null}ngOnInit(){this.focusMonitor.monitor(this.elementRef,!0).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.Q)(this.destroy$)).subscribe((focusOrigin=>{focusOrigin||Promise.resolve().then((()=>this.onTouched()))})),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.addCheckbox(this),this.directionality.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.Q)(this.destroy$)).subscribe((direction=>{this.dir=direction,this.cdr.detectChanges()})),this.dir=this.directionality.value,this.ngZone.runOutsideAngular((()=>{(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.R)(this.elementRef.nativeElement,"click").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.Q)(this.destroy$)).subscribe((event=>{event.preventDefault(),this.focus(),this.nzDisabled||this.ngZone.run((()=>{this.innerCheckedChange(!this.nzChecked),this.cdr.markForCheck()}))})),(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.R)(this.inputElement.nativeElement,"click").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.Q)(this.destroy$)).subscribe((event=>event.stopPropagation()))}))}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.removeCheckbox(this),this.destroy$.next(),this.destroy$.complete()}static#_=this.ɵfac=function NzCheckboxComponent_Factory(t){return new(t||NzCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzCheckboxWrapperComponent,8),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FN),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.dS,8),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_6__.is,8))};static#_2=this.ɵcmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:NzCheckboxComponent,selectors:[["","nz-checkbox",""]],viewQuery:function NzCheckboxComponent_Query(rf,ctx){if(1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1,7),2&rf){let _t;_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]())&&(ctx.inputElement=_t.first)}},hostAttrs:[1,"ant-checkbox-wrapper"],hostVars:6,hostBindings:function NzCheckboxComponent_HostBindings(rf,ctx){2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-checkbox-wrapper-in-form-item",!!ctx.nzFormStatusService)("ant-checkbox-wrapper-checked",ctx.nzChecked)("ant-checkbox-rtl","rtl"===ctx.dir)},inputs:{nzValue:"nzValue",nzAutoFocus:"nzAutoFocus",nzDisabled:"nzDisabled",nzIndeterminate:"nzIndeterminate",nzChecked:"nzChecked",nzId:"nzId"},outputs:{nzCheckedChange:"nzCheckedChange"},exportAs:["nzCheckbox"],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{provide:_angular_forms__WEBPACK_IMPORTED_MODULE_7__.kq,useExisting:(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((()=>NzCheckboxComponent)),multi:!0}]),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],attrs:_c2,ngContentSelectors:_c0,decls:6,vars:11,consts:[["inputElement",""],[1,"ant-checkbox"],["type","checkbox",1,"ant-checkbox-input",3,"ngModelChange","checked","ngModel","disabled"],[1,"ant-checkbox-inner"]],template:function NzCheckboxComponent_Template(rf,ctx){if(1&rf){const _r1=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"span",1)(1,"input",2,0),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange",(function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event){return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.innerCheckedChange($event))})),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3,"span",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()}2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-checkbox-checked",ctx.nzChecked&&!ctx.nzIndeterminate)("ant-checkbox-disabled",ctx.nzDisabled)("ant-checkbox-indeterminate",ctx.nzIndeterminate),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked",ctx.nzChecked)("ngModel",ctx.nzChecked)("disabled",ctx.nzDisabled),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autofocus",ctx.nzAutoFocus?"autofocus":null)("id",ctx.nzId))},dependencies:[_angular_forms__WEBPACK_IMPORTED_MODULE_7__.YN,_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Zm,_angular_forms__WEBPACK_IMPORTED_MODULE_7__.BC,_angular_forms__WEBPACK_IMPORTED_MODULE_7__.vS],encapsulation:2,changeDetection:0})}(0,tslib__WEBPACK_IMPORTED_MODULE_8__.Cg)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.H3)()],NzCheckboxComponent.prototype,"nzAutoFocus",void 0),(0,tslib__WEBPACK_IMPORTED_MODULE_8__.Cg)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.H3)()],NzCheckboxComponent.prototype,"nzDisabled",void 0),(0,tslib__WEBPACK_IMPORTED_MODULE_8__.Cg)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.H3)()],NzCheckboxComponent.prototype,"nzIndeterminate",void 0),(0,tslib__WEBPACK_IMPORTED_MODULE_8__.Cg)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.H3)()],NzCheckboxComponent.prototype,"nzChecked",void 0),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCheckboxComponent,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,args:[{selector:"[nz-checkbox]",exportAs:"nzCheckbox",preserveWhitespaces:!1,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,template:'\n    <span\n      class="ant-checkbox"\n      [class.ant-checkbox-checked]="nzChecked && !nzIndeterminate"\n      [class.ant-checkbox-disabled]="nzDisabled"\n      [class.ant-checkbox-indeterminate]="nzIndeterminate"\n    >\n      <input\n        #inputElement\n        type="checkbox"\n        class="ant-checkbox-input"\n        [attr.autofocus]="nzAutoFocus ? \'autofocus\' : null"\n        [attr.id]="nzId"\n        [checked]="nzChecked"\n        [ngModel]="nzChecked"\n        [disabled]="nzDisabled"\n        (ngModelChange)="innerCheckedChange($event)"\n      />\n      <span class="ant-checkbox-inner"></span>\n    </span>\n    <span><ng-content></ng-content></span>\n  ',providers:[{provide:_angular_forms__WEBPACK_IMPORTED_MODULE_7__.kq,useExisting:(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((()=>NzCheckboxComponent)),multi:!0}],host:{class:"ant-checkbox-wrapper","[class.ant-checkbox-wrapper-in-form-item]":"!!nzFormStatusService","[class.ant-checkbox-wrapper-checked]":"nzChecked","[class.ant-checkbox-rtl]":"dir === 'rtl'"},imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_7__.YN],standalone:!0}]}],(()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef},{type:NzCheckboxWrapperComponent,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional}]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef},{type:_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FN},{type:_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.dS,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional}]},{type:ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_6__.is,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional}]}]),{inputElement:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,args:["inputElement",{static:!0}]}],nzCheckedChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],nzValue:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],nzAutoFocus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],nzDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],nzIndeterminate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],nzChecked:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],nzId:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]});class NzCheckboxGroupComponent{onCheckedChange(option,checked){option.checked=checked,this.onChange(this.options)}constructor(elementRef,focusMonitor,cdr,directionality){this.elementRef=elementRef,this.focusMonitor=focusMonitor,this.cdr=cdr,this.directionality=directionality,this.onChange=()=>{},this.onTouched=()=>{},this.options=[],this.nzDisabled=!1,this.dir="ltr",this.destroy$=new rxjs__WEBPACK_IMPORTED_MODULE_1__.B,this.isNzDisableFirstChange=!0}ngOnInit(){this.focusMonitor.monitor(this.elementRef,!0).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.Q)(this.destroy$)).subscribe((focusOrigin=>{focusOrigin||Promise.resolve().then((()=>this.onTouched()))})),this.directionality.change?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.Q)(this.destroy$)).subscribe((direction=>{this.dir=direction,this.cdr.detectChanges()})),this.dir=this.directionality.value}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}writeValue(value){this.options=value,this.cdr.markForCheck()}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouched=fn}setDisabledState(disabled){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||disabled,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static#_=this.ɵfac=function NzCheckboxGroupComponent_Factory(t){return new(t||NzCheckboxGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FN),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.dS,8))};static#_2=this.ɵcmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:NzCheckboxGroupComponent,selectors:[["nz-checkbox-group"]],hostAttrs:[1,"ant-checkbox-group"],hostVars:2,hostBindings:function NzCheckboxGroupComponent_HostBindings(rf,ctx){2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-checkbox-group-rtl","rtl"===ctx.dir)},inputs:{nzDisabled:"nzDisabled"},exportAs:["nzCheckboxGroup"],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{provide:_angular_forms__WEBPACK_IMPORTED_MODULE_7__.kq,useExisting:(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((()=>NzCheckboxGroupComponent)),multi:!0}]),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],decls:2,vars:0,consts:[["nz-checkbox","",1,"ant-checkbox-group-item",3,"nzDisabled","nzChecked"],["nz-checkbox","",1,"ant-checkbox-group-item",3,"nzCheckedChange","nzDisabled","nzChecked"]],template:function NzCheckboxGroupComponent_Template(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0,NzCheckboxGroupComponent_For_1_Template,3,3,"label",0,_forTrack0),2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.options)},dependencies:[NzCheckboxComponent],encapsulation:2})}(0,tslib__WEBPACK_IMPORTED_MODULE_8__.Cg)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.H3)()],NzCheckboxGroupComponent.prototype,"nzDisabled",void 0),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCheckboxGroupComponent,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,args:[{selector:"nz-checkbox-group",exportAs:"nzCheckboxGroup",preserveWhitespaces:!1,encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,template:'\n    @for (option of options; track option.value) {\n      <label\n        nz-checkbox\n        class="ant-checkbox-group-item"\n        [nzDisabled]="option.disabled || nzDisabled"\n        [nzChecked]="option.checked!"\n        (nzCheckedChange)="onCheckedChange(option, $event)"\n      >\n        <span>{{ option.label }}</span>\n      </label>\n    }\n  ',providers:[{provide:_angular_forms__WEBPACK_IMPORTED_MODULE_7__.kq,useExisting:(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((()=>NzCheckboxGroupComponent)),multi:!0}],host:{class:"ant-checkbox-group","[class.ant-checkbox-group-rtl]":"dir === 'rtl'"},imports:[NzCheckboxComponent],standalone:!0}]}],(()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef},{type:_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FN},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef},{type:_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.dS,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional}]}]),{nzDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]});class NzCheckboxModule{static#_=this.ɵfac=function NzCheckboxModule_Factory(t){return new(t||NzCheckboxModule)};static#_2=this.ɵmod=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:NzCheckboxModule,imports:[NzCheckboxComponent,NzCheckboxGroupComponent,NzCheckboxWrapperComponent],exports:[NzCheckboxComponent,NzCheckboxGroupComponent,NzCheckboxWrapperComponent]});static#_3=this.ɵinj=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({imports:[NzCheckboxComponent,NzCheckboxGroupComponent]})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCheckboxModule,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,args:[{imports:[NzCheckboxComponent,NzCheckboxGroupComponent,NzCheckboxWrapperComponent],exports:[NzCheckboxComponent,NzCheckboxGroupComponent,NzCheckboxWrapperComponent]}]}],null,null)}}]);