import { Component, OnInit } from '@angular/core';

interface SummaryCard {
  title: string;
  value: string;
  description: string;
}

interface TimelineItem {
  title: string;
  detail: string;
  time: string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  public summaryCards: SummaryCard[] = [
    { title: 'Frequencia', value: '96%', description: 'Presenca consolidada no periodo atual.' },
    { title: 'Media geral', value: '8,7', description: 'Desempenho equilibrado entre provas e atividades.' },
    { title: 'Pendencias', value: '3', description: 'Itens que precisam de entrega ate sexta-feira.' },
    { title: 'Aulas hoje', value: '4', description: 'Rotina adaptada para celular e navegador.' },
  ];

  public highlights: string[] = [
    'Leitura otimizada para toque e mouse',
    'Blocos fluidos com quebra automatica',
    'Safe area para iPhone e iPad',
    'Menu lateral que vira drawer em telas menores'
  ];

  public nextEvents: TimelineItem[] = [
    { title: 'Matematica', detail: 'Revisao de algebra e exercicios guiados.', time: '08:00' },
    { title: 'Ciencias', detail: 'Entrega do relatorio em grupo pela plataforma.', time: '10:30' },
    { title: 'Historia', detail: 'Debate sobre cidadania com material complementar.', time: '14:00' },
  ];

  public devices: string[] = ['Web', 'Android', 'iOS', 'Tablet'];

  constructor() { }

  ngOnInit() {
  }

}
