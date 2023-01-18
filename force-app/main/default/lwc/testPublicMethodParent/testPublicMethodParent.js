import { LightningElement, track } from "lwc";

export default class TestPublicMethodParent extends LightningElement {
  @track value;
  onClickHandler() {
    const checkboxGroupSelect = this.template.querySelector(
      "c-test-public-method-child"
    );
    checkboxGroupSelect.setSelectedCheckbox(this.value);
  }

  onInputChange(event) {
    this.value = event.target.value;
  }
}
