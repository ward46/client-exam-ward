import { inject } from 'aurelia-framework';
import { Widget } from "../resources/data/gadget-object";

@inject(Gadget)
export class Widgets {
    constructor(widget) {
        this.widget = widget;
       
        this.statuses = ['Widget', 'In Process', 'Completed'];
        this.isCheckedCompleted = true;
        this.showForm = false;
    }
    async attached() {
        await this.getWidgets();
    }

    async getWidgets() {
        await this.Widget.getWidgets();
        this.showForm = false;
    }

    updateWidget(Widget) {
        this.widget.selectedWidget = widget;
        this.saveWidget();
    }
    newWidget() {
        this.Widget.newWidget();
        this.showForm = true;
    }
    editWidget(widget) {
        this.widget.selectedWidget = widget;
        this.showForm = true;
    }
    async saveWidget() {
        await this.widget.saveWidget()
        this.getWidgets();
    }
    async deleteWidget(widget) {
        await this.widget.deleteWidget(Widget._id);
        this.getWidgets();
    }

    Cancel() {
        this.showForm = false;
    }

}