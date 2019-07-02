import { Component,ViewChild} from '@angular/core';
import { HelloWorld } from '../components/hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  event: any =
    {
      time: "08:00",
      subject: "Breakfast with Simon",
      location: "Lounge Caffe",
      description: "Discuss Q3 targets"
    };
}
