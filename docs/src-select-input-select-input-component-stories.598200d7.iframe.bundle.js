(self.webpackChunkwizards_ui=self.webpackChunkwizards_ui||[]).push([[317],{"./libs/ui/src/select-input/select-input.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>select_input_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var select_input_componentngResource=__webpack_require__("./libs/ui/src/select-input/select-input.component.scss?ngResource"),select_input_componentngResource_default=__webpack_require__.n(select_input_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ng_zorro_antd_select=__webpack_require__("./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-select.mjs"),ng_zorro_antd_form=__webpack_require__("./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-form.mjs"),ng_zorro_antd_input=__webpack_require__("./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-input.mjs");let WizardsSelectComponent=class WizardsSelectComponent{constructor(controlContainer){this.controlContainer=controlContainer,this.allowClear=!1,this.allowSearch=!1,this.disabled=!1,this.fullWidth=!0,this.mode="default",this.options=[],this.required=!1,this.showArrow=!0,this.changed=new core.EventEmitter}onChangeEmitter(event){this.changed.emit(event)}static#_=this.ctorParameters=()=>[{type:fesm2022_forms.ZU}];static#_2=this.propDecorators={allowClear:[{type:core.Input}],allowSearch:[{type:core.Input}],controlName:[{type:core.Input}],disabled:[{type:core.Input}],fullWidth:[{type:core.Input}],label:[{type:core.Input}],mode:[{type:core.Input}],options:[{type:core.Input}],placeholder:[{type:core.Input}],required:[{type:core.Input}],showArrow:[{type:core.Input}],changed:[{type:core.Output}]}};WizardsSelectComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[common.CommonModule,ng_zorro_antd_form.PQ,ng_zorro_antd_input.j,ng_zorro_antd_select.DH,fesm2022_forms.YN,fesm2022_forms.X1],selector:"wiz-select-input",template:'<ng-container [formGroup]="$any(controlContainer.control)">\r\n  <nz-form-item>\r\n    <nz-form-label *ngIf="!!label" [nzRequired]="required">{{ label }}</nz-form-label>\r\n    <nz-form-control [class.full-width]="fullWidth">\r\n      <nz-select (ngModelChange)="onChangeEmitter($event)" [nzShowSearch]="allowSearch" [nzAllowClear]="allowClear" [nzPlaceHolder]="placeholder ? placeholder : label" [nzDisabled]="disabled" [formControlName]="controlName" [nzMode]="mode" [nzShowArrow]="showArrow">\r\n        <nz-option *ngFor="let o of options" [nzLabel]="o.label" [nzValue]="o.value"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</ng-container>\r\n',styles:[select_input_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[fesm2022_forms.ZU])],WizardsSelectComponent);var ng_zorro_antd_icon=__webpack_require__("./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-icon.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs");const select_input_component_stories_form=new fesm2022_forms.gE({text:new fesm2022_forms.MJ(null)}),select_input_component_stories={title:"SelectInput",component:WizardsSelectComponent,decorators:[(0,dist.moduleMetadata)({imports:[fesm2022_forms.YN,fesm2022_forms.X1,WizardsSelectComponent,ng_zorro_antd_icon.Y3,animations.BrowserAnimationsModule]}),(0,dist.componentWrapperDecorator)((story=>`\n      <div [formGroup]="form">\n        ${story}\n      </div>\n    `),{form:select_input_component_stories_form})]},Primary=(args=>({template:'\n        <wiz-select-input\n          [label]="label"\n          controlName="text"\n          [required]="required"\n          [allowClear]="allowClear"\n          [fullWidth]="fullWidth"\n          [disabled]="disabled"\n          [allowSearch]="allowSearch"\n          [mode]="mode"\n          [options]="options"\n          [placeholder]="placeholder"\n          [showArrow]="showArrow">\n        </wiz-select-input>\n      ',props:args})).bind({});Primary.args={allowClear:!1,allowSearch:!1,disabled:!1,fullWidth:!0,label:"Label",mode:"default",options:[{value:"accountancy",label:"księgowość"},{value:"hr",label:"kadry"},{value:"accountancy and hr",label:"księgowość i kadry"}],placeholder:"placeholder",required:!1,showArrow:!0},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'(args: WizardsSelectComponent) => {\n  return {\n    template: `\n        <wiz-select-input\n          [label]="label"\n          controlName="text"\n          [required]="required"\n          [allowClear]="allowClear"\n          [fullWidth]="fullWidth"\n          [disabled]="disabled"\n          [allowSearch]="allowSearch"\n          [mode]="mode"\n          [options]="options"\n          [placeholder]="placeholder"\n          [showArrow]="showArrow">\n        </wiz-select-input>\n      `,\n    props: args\n  };\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./libs/ui/src/select-input/select-input.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"nz-form-control {\n  width: 100%;\n}\n\n.full-width nz-select {\n  width: 100%;\n}\n\n::ng-deep .ant-select-selection-placeholder {\n  color: #bfbfbf;\n}\n\n::ng-deep .ant-select.ant-select-in-form-item {\n  width: auto;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);