// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Por que a AWS é mais econômica do que os datacenters tradicionais para aplicações com diferentes workloads de computação?',
    answers: [
      {
        answer: 'As instâncias do Amazon EC2 podem ser executadas sob demanda quando necessário.',
        correct: true,
      },
      {
        answer: 'Os custos do Amazon EC2 são cobrados mensalmente. ',
        correct: false,
      },
      {
        answer: 'Os usuários mantêm acesso administrativo total às instâncias do Amazon EC2. ',
        correct: false,
      },
      {
        answer: 'Os usuários podem executar instâncias suficientes permanentemente para lidar com picos de workload.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual serviço da AWS simplificaria a migração de um banco de dados para a AWS?',
    answers: [
      {
        answer: 'AWS Storage Gateway',
        correct: false,
      },
      {
        answer: 'AWS Database Migration Service (AWS DMS)',
        correct: true,
      },
      {
        answer: 'Amazon EC2 ',
        correct: false,
      },
      {
        answer: 'Amazon AppStream 2.0',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual oferta da AWS permite que os usuários encontrem, comprem e comecem imediatamente a usar soluções de software no ambiente da AWS?',
    answers: [
      {
        answer: 'SDK da AWS',
        correct: false,
      },
      {
        answer: 'AWS Config ',
        correct: false,
      },
      {
        answer: 'AWS OpsWorks ',
        correct: false,
      },
      {
        answer: 'AWS Marketplace',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual serviço de rede da AWS permite que uma empresa crie uma rede virtual na AWS? ',
    answers: [
      {
        answer: 'AWS Config',
        correct: false,
      },
      {
        answer: 'Amazon Route 53',
        correct: false,
      },
      {
        answer: 'AWS Direct Connect',
        correct: false,
      },
      {
        answer: 'Amazon Virtual Private Cloud (Amazon VPC) ',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual das seguintes ações é uma responsabilidade da AWS sob o modelo de responsabilidade compartilhada da AWS?',
    answers: [
      {
        answer: 'Configuração de aplicações de terceiros ',
        correct: false,
      },
      {
        answer: 'Manutenção de hardware físico ',
        correct: true,
      },
      {
        answer: 'Proteção do acesso e dos dados da aplicação',
        correct: false,
      },
      {
        answer: 'Gerenciamento de sistemas operacionais convidados',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual componente da infraestrutura global da AWS o Amazon CloudFront usa para garantir a entrega de baixa latência?',
    answers: [
      {
        answer: 'Regiões da AWS',
        correct: false,
      },
      {
        answer: 'Locais da borda',
        correct: true,
      },
      {
        answer: 'Zonas de disponibilidade',
        correct: false,
      },
      {
        answer: 'Virtual Private Cloud (VPC)',
        correct: false,
      },
    ],
  },
  {
    question: ' Como um administrador de sistema incluiria uma camada adicional de segurança de login ao Console de Gerenciamento da AWS de um usuário?',
    answers: [
      {
        answer: 'Com o Amazon Cloud Directory ',
        correct: false,
      },
      {
        answer: 'Com a auditoria de funções do AWS Identity and Access Management (IAM) ',
        correct: false,
      },
      {
        answer: 'Com a habilitação da autenticação multifator (MFA) ',
        correct: true,
      },
      {
        answer: 'Com a habilitação do AWS CloudTrail',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual serviço pode identificar o usuário que fez a chamada de API quando uma instância do Amazon EC2 é encerrada?',
    answers: [
      {
        answer: 'AWS Trusted Advisor',
        correct: false,
      },
      {
        answer: 'AWS CloudTrail',
        correct: true,
      },
      {
        answer: 'AWS X-Ray',
        correct: false,
      },
      {
        answer: 'AWS Identity and Access Management (AWS IAM) ',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual serviço seria usado para enviar alertas com base nos alarmes do Amazon CloudWatch?',
    answers: [
      {
        answer: 'Amazon Simple Notification Service (Amazon SNS)',
        correct: true,
      },
      {
        answer: 'AWS CloudTrail',
        correct: false,
      },
      {
        answer: 'AWS Trusted Advisor',
        correct: false,
      },
      {
        answer: 'Amazon Route 53 ',
        correct: false,
      },
    ],
  },
  {
    question: 'Onde um usuário pode encontrar informações sobre ações proibidas na infraestrutura da AWS? ',
    answers: [
      {
        answer: 'AWS Trusted Advisor',
        correct: false,
      },
      {
        answer: 'AWS Identity and Access Management (IAM)',
        correct: false,
      },
      {
        answer: 'Console de Faturamento da AWS',
        correct: false,
      },
      {
        answer: 'Política de uso aceitável da AWS',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual dos seguintes serviços  usa AWS edge locations?',
    answers: [
      {
        answer: 'Amazon Virtual Private Cloud (Amazon VPC)',
        correct: false,
      },
      {
        answer: 'Amazon CloudFront',
        correct: true,
      },
      {
        answer: 'Amazon Elastic Compute Cloud (Amazon EC2)',
        correct: false,
      },
      {
        answer: 'AWS Storage Gateway',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual das opções a seguir é um benefício do Amazon Elastic Compute Cloud (Amazon EC2) sobre servidores físicos?',
    answers: [
      {
        answer: 'backup automatizado',
        correct: false,
      },
      {
        answer: 'Pagando apenas pelo que usar',
        correct: true,
      },
      {
        answer: 'A capacidade de escolher fornecedores de hardware',
        correct: false,
      },
      {
        answer: 'Acesso raiz/administrador',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual serviço da AWS fornece recomendações de otimização de segurança de infraestrutura?',
    answers: [
      {
        answer: 'AWS Price List Application Programming Interface (API)',
        correct: false,
      },
      {
        answer: 'Reserved Instances',
        correct: false,
      },
      {
        answer: 'AWS Trusted Advisor',
        correct: true,
      },
      {
        answer: 'Amazon Elastic Compute Cloud (Amazon EC2) Spot Fleet',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual serviço permite a coleta o rastreamento de métricas para serviços da AWS?',
    answers: [
      {
        answer: 'Amazon CloudFront',
        correct: false,
      },
      {
        answer: 'Amazon CloudSearch',
        correct: false,
      },
      {
        answer: 'Amazon CloudWatch',
        correct: true,
      },
      {
        answer: 'Amazon Machine Learning (Amazon ML)',
        correct: false,
      },
    ],
  },

  {
    question: 'Qual dos exemplos a seguir oferece suporte ao princípio de design de nuvem "projetar para falhas e nada falhará"?',
    answers: [
      {
        answer: 'Adding an elastic load balancer in front of a single Amazon Elastic Compute Cloud (Amazon EC2) instance',
        correct: false,
      },
      {
        answer: 'Creating and deploying the most cost-effective solution',
        correct: false,
      },
      {
        answer: 'Deploying an application in multiple Availability Zones (Implantando um aplicativo em várias zonas de disponibilidade)',
        correct: true,
      },
      {
        answer: 'Using Amazon CloudWatch alerts to monitor performance',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual serviço permite que um administrador crie e modifique permissões de usuário da AWS?',
    answers: [
      {
        answer: 'AWS Config',
        correct: false,
      },
      {
        answer: 'AWS Key Management Service (AWS KMS)',
        correct: false,
      },
      {
        answer: 'AWS Key Management Service (AWS KMS)',
        correct: false,
      },
      {
        answer: 'AWS Identity and Access Management (IAM)',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual serviço da AWS automatiza o provisionamento de infraestrutura e tarefas administrativas para um data warehouse analítico?',
    answers: [
      {
        answer: 'Amazon Redshift',
        correct: true,
      },
      {
        answer: 'Amazon DynamoDB',
        correct: false,
      },
      {
        answer: 'Amazon ElastiCache',
        correct: false,
      },
      {
        answer: 'Amazon Aurora',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual das opções a seguir é de responsabilidade do cliente AWS de acordo com o Modelo de Segurança Compartilhada?',
    answers: [
      {
        answer: 'Managing AWS Identity and Access Management (IAM) (Gerenciar o AWS Identity e Acesso e gerenciamento (IAM))',
        correct: true,
      },
      {
        answer: 'Securing edge locations',
        correct: false,
      },
      {
        answer: 'Monitoring physical device security',
        correct: false,
      },
      {
        answer: 'Implementing service organization Control (SOC) standards',
        correct: false,
      },
    ],
  },
  {
    question: 'Onde um cliente pode obter mais detalhes sobre a atividade de cobrança do Amazon Elastic Compute Cloud (Amazon EC2) que ocorreu há 3 meses?',
    answers: [
      {
        answer: 'Amazon EC2 dashboard',
        correct: false,
      },
      {
        answer: 'AWS Cost and Usage reports (Relatórios de custo e uso da AWS)',
        correct: true,
      },
      {
        answer: 'AWS Trusted Advisor dashboard',
        correct: false,
      },
      {
        answer: 'AWS Cloud Trail logs stored in Amazon Simple Storage Service (Amazon S3)',
        correct: false,
      },
    ],
  },
  {
    question: 'O principal benefício de desacoplar uma aplicação é:',
    answers: [
      {
        answer: 'Criar uma aplicação totalmente integrado',
        correct: false,
      },
      {
        answer: 'Reduz as interdependências para que as falhas não afetem outros componentes',
        correct: true,
      },
      {
        answer: 'Habilitar a sincronização de dados na camada de aplicativo da web',
        correct: false,
      },
      {
        answer: 'Ter a capacidade de executar ações de inicialização automatizadas',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual das opções a seguir é um benefício de executar um aplicativo em duas zonas de disponibilidade?',
    answers: [
      {
        answer: 'O desempenho é aprimorado em relação à execução em uma única zona de disponibilidade.',
        correct: false,
      },
      {
        answer: 'É mais seguro do que rodar em uma única Zona de Disponibilidade',
        correct: false,
      },
      {
        answer: 'Ele reduz significativamente o custo total de propriedade em comparação com a execução em uma única zona de disponibilidade',
        correct: false,
      },
      {
        answer: 'Ele aumenta a disponibilidade de um aplicativo em comparação com a execução em uma única zona de disponibilidade',
        correct: true,
      },
    ],
  },
  {
    question: 'Os sistemas que aplicam o princípio de elasticidade da arquitetura em nuvem irão...',
    answers: [
      {
        answer: 'Minimiza os requisitos de armazenamento reduzindo as atividades de registro e auditoria',
        correct: false,
      },
      {
        answer: 'Criar sistemas que escalam para a capacidade necessária com base nas mudanças na demanda',
        correct: true,
      },
      {
        answer: 'Permita que a AWS selecione automaticamente os serviços mais econômicos',
        correct: false,
      },
      {
        answer: 'Acelere o processo de design porque a recuperação de falhas é automatizada, reduzindo a necessidade de testes',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual das opções a seguir é usada para derivar os custos para mover artefatos do local para a AWS',
    answers: [
      {
        answer: 'AWS TCO calculator',
        correct: true,
      },
      {
        answer: 'AWS Config',
        correct: false,
      },
      {
        answer: 'AWS Cost Explorer',
        correct: false,
      },
      {
        answer: 'AWS Consolidating billing',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual das opções a seguir é responsabilidade do cliente ao garantir que os dados nos volumes EBS sejam mantidos em segurança?',
    answers: [
      {
        answer: 'Excluindo os dados quando o dispositivo é destruído',
        correct: false,
      },
      {
        answer: 'Criar instantâneos do EBS',
        correct: true,
      },
      {
        answer: 'Anexando volumes a instâncias do EC2',
        correct: false,
      },
      {
        answer: 'Criar cópias de volumes EBS',
        correct: false,
      },
    ],
  },
  {
    question: 'Você tem 2 contas em sua conta da AWS. Um para o Dev e outro para QA. Todos fazem parte do faturamento consolidado. A conta mestra comprou 3 instâncias reservadas. O departamento Dev está usando atualmente 2 instâncias reservadas. A equipe de QA está planejando usar 3 instâncias do mesmo tipo. Qual é o nível de preço das instâncias que podem ser usadas pela equipe de controle de qualidade?',
    answers: [
      {
        answer: 'Não reservado e 3 sob demanda',
        correct: false,
      },
      {
        answer: 'Um reservado e 2 sob demanda',
        correct: true,
      },
      {
        answer: 'Dois reservados e 1 sob demanda',
        correct: false,
      },
      {
        answer: 'Três reservados e nenhum sob demanda',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual dos seguintes recursos normalmente está presente em todos os planos do AWS Support',
    answers: [
      {
        answer: 'Acesso 24*7 ao suporte ao cliente',
        correct: true,
      },
      {
        answer: 'Acesso a todos os recursos do Trusted Advisor',
        correct: false,
      },
      {
        answer: 'Um gerente técnico de contas',
        correct: false,
      },
      {
        answer: 'Uma pessoa de suporte dedicada',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual dos seguintes serviços relaciona o conceito de “Scaling up resources based on demand”',
    answers: [
      {
        answer: 'AutoScaling',
        correct: true,
      },
      {
        answer: 'Elastic Load Balancer',
        correct: false,
      },
      {
        answer: 'VPC',
        correct: false,
      },
      {
        answer: 'SUB-REDE',
        correct: false,
      },
    ],
  },

  {
    question: 'Qual é o valor de ter os serviços da Nuvem AWS acessíveis por meio de uma interface de programação de aplicativo (API)?',
    answers: [
      {
        answer: 'Cloud resources can be managed programmatically (Os recursos da nuvem podem ser gerenciados programaticamente)',
        correct: true,
      },
      {
        answer: 'AWS infrastructure use will always be cost-optimized',
        correct: false,
      },
      {
        answer: 'All application testing is managed by AWS',
        correct: false,
      },
      {
        answer: 'Customer –owned, on –premises infrastructure becomes programmable',
        correct: false,
      },
    ],
  },
  {
    question: 'Uma empresa precisa saber qual usuário foi responsável por encerrar várias instâncias críticas do Amazon Elastic Compute Cloud (Amazon EC2). Onde o cliente pode encontrar essas informações?',
    answers: [
      {
        answer: 'Consultor de confiança da AWS',
        correct: false,
      },
      {
        answer: 'Relatório de uso da instância do Amazon EC2',
        correct: false,
      },
      {
        answer: 'Amazon CloudWatch',
        correct: false,
      },
      {
        answer: 'Logs do AWS Cloud Trail',
        correct: true,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
