import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface FolderMetric {
  title: string;
  value: string;
  description: string;
}

interface FolderItem {
  title: string;
  description: string;
}

interface FolderContent {
  eyebrow: string;
  title: string;
  description: string;
  metrics: FolderMetric[];
  items: FolderItem[];
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder = '';
  public content: FolderContent;

  private readonly folderContent: Record<string, FolderContent> = {
    Disciplinas: {
      eyebrow: 'Organizacao academica',
      title: 'Disciplinas ativas e progresso por materia',
      description: 'Cards fluem em colunas adaptativas para leitura confortavel em celulares e telas maiores.',
      metrics: [
        { title: 'Materias', value: '6', description: 'Distribuidas por periodo letivo.' },
        { title: 'Concluidas', value: '2', description: 'Ja finalizadas neste modulo.' },
        { title: 'Projetos', value: '4', description: 'Atividades praticas em andamento.' },
      ],
      items: [
        { title: 'Matematica aplicada', description: 'Conteudos, tarefas e desempenho reunidos em um bloco unico.' },
        { title: 'Lingua portuguesa', description: 'Leitura otimizada para orientacao retrato e paisagem.' },
        { title: 'Ciencias naturais', description: 'Acesso rapido a materiais com espacamento responsivo.' },
      ]
    },
    Agenda: {
      eyebrow: 'Planejamento diario',
      title: 'Agenda com leitura rapida em qualquer dispositivo',
      description: 'O conteudo se reorganiza automaticamente para priorizar tarefas e horarios importantes.',
      metrics: [
        { title: 'Compromissos', value: '8', description: 'Eventos previstos na semana.' },
        { title: 'Hoje', value: '4', description: 'Aulas e entregas com maior prioridade.' },
        { title: 'Alertas', value: '2', description: 'Lembretes ativos para provas e reunioes.' },
      ],
      items: [
        { title: 'Reuniao com orientador', description: 'Horario destacado com contraste e hierarquia visual.' },
        { title: 'Entrega de redacao', description: 'Prazo destacado para toques rapidos em celular.' },
        { title: 'Revisao de ciencias', description: 'Resumo compacto e legivel em largura reduzida.' },
      ]
    },
    Atividades: {
      eyebrow: 'Execucao e entrega',
      title: 'Atividades com blocos flexiveis e foco em toque',
      description: 'Cada card foi pensado para caber bem em celular sem perder contexto no desktop.',
      metrics: [
        { title: 'Pendentes', value: '3', description: 'Entregas aguardando envio.' },
        { title: 'Corrigidas', value: '12', description: 'Atividades avaliadas no bimestre.' },
        { title: 'Em grupo', value: '2', description: 'Projetos compartilhados com colegas.' },
      ],
      items: [
        { title: 'Questionario de historia', description: 'Layout vertical para leitura continua no smartphone.' },
        { title: 'Experimento de ciencias', description: 'Espaco adequado para descricoes e status.' },
        { title: 'Lista de matematica', description: 'Separacao clara entre titulo, prazo e orientacoes.' },
      ]
    },
    Notas: {
      eyebrow: 'Desempenho',
      title: 'Notas e indicadores com boa leitura numerica',
      description: 'Metricas recebem mais contraste e tamanho responsivo para facilitar consulta rapida.',
      metrics: [
        { title: 'Media atual', value: '8,7', description: 'Resultado consolidado das avaliacoes.' },
        { title: 'Melhor nota', value: '9,6', description: 'Obtida em ciencias naturais.' },
        { title: 'Recuperacao', value: '0', description: 'Nenhuma disciplina em alerta.' },
      ],
      items: [
        { title: 'Provas recentes', description: 'Visao resumida com foco em desempenho e tendencia.' },
        { title: 'Avaliacoes futuras', description: 'Preparacao facilitada com blocos de destaque.' },
        { title: 'Comentarios dos professores', description: 'Textos longos continuam legiveis em telas pequenas.' },
      ]
    },
    Mensagens: {
      eyebrow: 'Comunicacao',
      title: 'Mensagens com hierarquia visual clara',
      description: 'O painel preserva legibilidade e area de toque em Android, iPhone e navegador.',
      metrics: [
        { title: 'Nao lidas', value: '5', description: 'Comunicados recentes da escola.' },
        { title: 'Professores', value: '3', description: 'Conversas em andamento.' },
        { title: 'Avisos', value: '7', description: 'Mensagens institucionais ativas.' },
      ],
      items: [
        { title: 'Aviso da coordenacao', description: 'Texto distribuido em linhas confortaveis para mobile.' },
        { title: 'Feedback de atividade', description: 'Resposta do professor com destaque para acao.' },
        { title: 'Comunicado de evento', description: 'Informacoes importantes agrupadas em card unico.' },
      ]
    }
  };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') || 'Disciplinas';
    this.content = this.folderContent[this.folder] || this.folderContent.Disciplinas;
  }

}
