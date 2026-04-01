import { Component } from '@angular/core';

interface AppPage {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: AppPage[] = [
    { title: 'Visao geral', url: '/client', icon: 'grid' },
    { title: 'Disciplinas', url: '/folder/Disciplinas', icon: 'book' },
    { title: 'Agenda', url: '/folder/Agenda', icon: 'calendar' },
    { title: 'Atividades', url: '/folder/Atividades', icon: 'reader' },
    { title: 'Notas', url: '/folder/Notas', icon: 'stats-chart' },
    { title: 'Mensagens', url: '/folder/Mensagens', icon: 'chatbubbles' },
  ];

  public user = {
    name: 'Estudante Gaia',
    email: 'aluno@gaiaedu.app'
  };

  public labels: string[] = ['Web', 'Android', 'iPhone', 'iPad'];

  constructor() {}
}
