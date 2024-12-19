import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent {
  newUser = {
    name: '',
    email: '',
    role: '',
  };

  addUser(): void {
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      console.log('User added successfully:', this.newUser);
      alert('User added successfully!');
      // Reset form after submission
      this.newUser = { name: '', email: '', role: '' };
    } else {
      alert('Please fill in all fields.');
    }
  }
}
