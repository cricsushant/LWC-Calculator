import { api, LightningElement, track } from "lwc";

export default class TestPublicMethodChild extends LightningElement {
  @track value = ["red"];

  options = [
    { label: "Apple", value: "red" },
    { label: "Orange", value: "orange" },
    { label: "Grapes", value: "green" },
    { label: "Mango", value: "yellow" }
  ];

  @api
  setSelectedCheckbox(checkboxValue) {
    const selectedCheckbox = this.options.find((checkbox) => {
      return checkbox.value === checkboxValue;
    });

    if (selectedCheckbox) {
      this.value = selectedCheckbox.value;
      return "Checkbox found";
    }
    return "No checkbox found";
  }
}
