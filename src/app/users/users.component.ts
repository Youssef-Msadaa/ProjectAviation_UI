import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Youssef Msadaa',
      email: 'msadaa.youssef@gmail.com',
      role: 'Admin',
    },
    { id: 2, name: 'Ahmed Ali', email: 'ahmed@yahoo.fr', role: 'User' },
    {
      id: 3,
      name: 'Fatima Zahra',
      email: 'fatima@gmail.com',
      role: 'Editor',
    },
    {
      id: 4,
      name: 'Achref Gattoussi',
      email: 'achrefgattoussi@gmail.com',
      role: 'Admin',
    },
    {
      id: 5,
      name: 'Aisha Salem',
      email: 'aisha@yahoo.fr',
      role: 'Moderator',
    },
  ];

  manageUser(userId: number): void {
    console.log(`Managing user with ID: ${userId}`);
    // Add logic to manage a specific user here
  }
}
