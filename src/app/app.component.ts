import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'ALI ASAD';
  role = 'Software Engineer';
  phone = '0334-5493437';
  email = 'aliasadliaquat14@gmail.com';
  location = 'Block: K, N.Nazimabad, KHI';
  mobileMenuOpen = false;

  navItems = ['Profile', 'Work Experience', 'Education', 'Skills', 'Contact'];

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu(): void {
    this.mobileMenuOpen = false;
  }

  getNavHref(item: string): string {
    const map: Record<string, string> = {
      Profile: '#profile',
      'Work Experience': '#experience',
      Education: '#education',
      Skills: '#skills',
      Contact: '#contact'
    };

    return map[item] ?? '#profile';
  }

  summary =
    'I am a Software Engineering diploma holder looking for an internship to gain practical experience and improve technical skills. Hardworking, quick to learn, and motivated to start a career in the IT field.';

  stats = [
    { value: '2+', label: 'Projects' },
    { value: 'A', label: 'Grade' },
    { value: '100%', label: 'Drive' }
  ];

  experiences = [
    {
      title: 'Car Manufacturing Website',
      description: 'Built a modern website for custom car orders and online spare-part sales.'
    },
    {
      title: 'COVID-19 Info Website',
      description: 'Designed a responsive site for vaccine details and basic patient information.'
    }
  ];

  education = [
    {
      title: 'Diploma (D.A.E)',
      institution: 'Jinnah Polytechnic Institute',
      period: '2022 TO 2025'
    },
    {
      title: 'Computer Science',
      institution: 'Durrani Govt. Boys Sec. School',
      period: 'April 2021 TO May 2022'
    }
  ];

  skills = [
    'MS Word',
    'MS Excel',
    'MS PowerPoint',
    'HTML',
    'CSS',
    'JavaScript',
    'JQuery',
    'Bootstrap',
    'PHP',
    'MySQL',
    'Python',
    'WordPress',
    'SEO',
    'Laravel',
    'CodeIgniter',
    'XML',
    'JSON',
    'Git',
    'GitHub'
  ];

  certifications = [
    {
      title: 'Web Development Certificate',
      institution: 'Farooq-e-Azam Computer Institute',
      date: 'Completed: 13 May 2023',
      grade: 'Grade: A',
      details: '8-week course covering HTML, CSS, JavaScript, Bootstrap.'
    }
  ];

  features = [
    'Responsive UI',
    'Modern UI/UX',
    'UI Design Thinking',
    'Web Development'
  ];
}

