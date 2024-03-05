import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

/**
 * Add HTML attribute directive
 *
 * @description Add html attribute on hosted HTMLElement. Workaround until https://github.com/NG-ZORRO/ng-zorro-antd/issues/6725 resolution
 * @example <my-html-element addHtmlAttribute attributeName="data-test-id" attributeValue="my_test_id"></my-html-element>
 */
@Directive({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[addHtmlAttribute]'
})
export class AddHTMLAttributeDirective implements OnInit {
    /**
     * Data name
     */
    @Input() attributeName = "data-cy";
    /**
     * Data value
     */
    @Input() attributeValue: any;
    /**
     * Directive contructor
     *
     * @param el Html element
     * @param renderer Renderer angular function
     */
    constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) {}
    /**
     * On directive initialization
     */
    ngOnInit(): void {
        if (this.attributeName && this.attributeValue && this.el.nativeElement) {
            this.addAttributeOnHostElement();
        }
    }
    /**
     * Add attribute on host element
     */
    addAttributeOnHostElement(): void {
        this.renderer.setAttribute(this.el.nativeElement, this.attributeName, this.attributeValue);
    }
}
