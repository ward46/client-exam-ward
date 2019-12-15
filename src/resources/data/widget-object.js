import {inject} from 'aurelia-framework';
import {DataServices} from './data-services';
@inject(DataServices)
export class Widget {
constructor(data) {
        this.data = data;
        this.WIDGET_SERVICE = 'widgets';
    }
 newWidget(){
        this.selectedWidget = {};
    this.selectedWidget.Boo="";
   // this.selectedWidget.Hoo="";
    //     this.selectedGadget.gadget= "";
    //     this.selectedGadget.detail = "";
       this.selectedWidget.Hoo = new Date();
        //this.selectedGadget.status = "Gadget";
        //this.selectedGadget.userId = id;
    //this.selectedGadget.userObj="";
      }
    �  async saveWidget() {
        let serverResponse;
        if (this.selectedWidget) {
          if (this.selectedWidget._id) {
            let url = this
          }