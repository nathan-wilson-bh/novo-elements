// NG2
import { Component } from '@angular/core';
// APP
let BasicSelectDemoTpl = require('./templates/BasicSelectDemo.html');
let LongSelectDemoTpl = require('./templates/LongSelectDemo.html');

const template = `
<div class="container">
    <h1>Select <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/blob/master/src/elements/select">(source)</a></small></h1>
    <p>The select element (<code>novo-select</code>) represents a control that presents a menu of options. The options
    within are set by the <code>items</code> attribute. Options can be pre-selected for the user using the <code>value</code>
    attribute.</p>
    
    <br/>

    <h5>Basic Examples</h5>
    <p>
        By clicking on the <code>novo-select</code> element, the options list will be displayed.  Select any of the options
        by clicking on the item in the list.  The value selected will be displayed and the options list will be removed.
    </p>
    <div class="example select-demo">${BasicSelectDemoTpl}</div>
    <code-snippet [code]="BasicSelectDemoTpl"></code-snippet>

    <h5>Lots of Options</h5>
    <p>
        The most common need for the <code>select</code> component is when there are too many options that would fit on
        on the screen. The options list will display appropriately and scroll as needed.
    </p>
    <div class="example select-demo">${LongSelectDemoTpl}</div>
    <code-snippet [code]="LongSelectDemoTpl"></code-snippet>

</div>
`;

@Component({
    selector: 'select-demo',
    template: template
})
export class SelectDemoComponent {
    private BasicSelectDemoTpl:string = BasicSelectDemoTpl;
    private LongSelectDemoTpl:string = LongSelectDemoTpl;
    private placeholder:string = 'Select...';
    private options:Array<string> = ['Alpha', 'Bravo', 'Charlie'];
    private withNumbers:Array<any> = [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Zero', value: 0 }
    ];
    private withNumbersValue:number = 0;
    private states:Array<string> = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    private value:string = 'Bravo';
    private state:any;
    private headerConfig:any = {
        label: 'Add New Item',
        placeholder: 'Enter item here',
        onSave: this.create.bind(this)
    };

    create(opt) {
        this.options = [...this.options, opt];
    }
}
