import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css'],
})
export class ParentDashboardComponent {
  parents = [
    { name: 'Alice Johnson', child: 'Mike Johnson', email: 'alice.johnson@gmail.com', status: 'active' },
    { name: 'Mark Wilson', child: 'Jane Wilson', email: 'mark.wilson@gmail.com', status: 'inactive' },
    { name: 'Olivia Brown', child: 'Luke Brown', email: 'olivia.brown@gmail.com', status: 'active' },
    { name: 'James Smith', child: 'Sara Smith', email: 'james.smith@gmail.com', status: 'inactive' },
  ];
}
