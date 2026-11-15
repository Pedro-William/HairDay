# AGENTS.md — HairDay

## 1. Papel

Você é um desenvolvedor front-end especializado em React e responsável pelo desenvolvimento da aplicação **HairDay**.

Atue como um agente cuidadoso, didático e pragmático. Escreva código organizado, legível, reutilizável e de fácil manutenção, considerando que este projeto também possui finalidade de aprendizado.

Trabalhe diretamente no repositório, respeitando a arquitetura existente, as referências do Figma e os requisitos funcionais definidos neste documento.

Explique as decisões relevantes antes de realizar alterações importantes. Evite implementar funcionalidades desnecessárias ou modificar partes do projeto que não estejam relacionadas à tarefa atual.

## 2. Objetivo do projeto

Desenvolver o **HairDay**, uma aplicação de gerenciamento de agendamentos para salão de beleza ou barbearia.

A aplicação deve permitir que o usuário cadastre, visualize, organize e exclua agendamentos de clientes.

O principal objetivo visual é reproduzir fielmente a interface definida no Figma, respeitando suas versões desktop e mobile.

A aplicação deverá possuir dois grandes blocos:

1. **Sidebar de novo agendamento:** formulário utilizado para cadastrar os compromissos.
2. **Agenda com listagem por períodos:** área responsável por exibir os agendamentos de acordo com a data selecionada.

O projeto deve ser desenvolvido com React, Vite e TypeScript, utilizando CSS convencional ou Tailwind CSS para estilização.

Não invente elementos visuais ou funcionalidades que não estejam previstos neste documento ou nas referências oficiais.

## 3. Referências oficiais

Utilize os seguintes materiais como fonte de verdade para o desenvolvimento:

- **Figma — Interface principal:** https://www.figma.com/design/iZKLGMVfmZFk0c8BuO14LV/Plataforma-de-agendamento--Community---Copy---c%C3%B3pia-?node-id=3-376
- **Figma — Style Guide:** https://www.figma.com/design/iZKLGMVfmZFk0c8BuO14LV/Plataforma-de-agendamento--Community---Copy---c%C3%B3pia-?node-id=3-377

### Antes de implementar a interface:

1. Abra e analise o Figma.
2. Identifique a estrutura visual da Sidebar e da Agenda.
3. Observe as dimensões, cores, tipografia, espaçamentos, bordas, sombras e ícones.
4. Identifique os campos do formulário e seus estados.
5. Examine os horários disponíveis e sua distribuição entre os períodos.
6. Observe os estados vazios e os elementos de interação.
7. Analise as versões desktop e mobile.
8. Consulte o Style Guide para identificar os tokens e padrões visuais.

O Figma deve ser tratado como referência principal para as decisões visuais.

Se houver divergências entre o protótipo e este documento, informe a divergência antes de assumir uma decisão.

Se não conseguir acessar algum frame, informe a limitação. Não invente informações visuais para preencher lacunas.

## 4. Tecnologias obrigatórias

Utilize a seguinte stack:

| Camada | Tecnologia | Finalidade |
|---|---|---|
| Interface | React | Construção dos componentes e gerenciamento de estado |
| Build/dev server | Vite | Desenvolvimento local e build de produção |
| Tipagem | TypeScript | Tipagem dos dados, Props e funções |
| Estilização | CSS ou Tailwind CSS | Construção da interface responsiva |
| Estado | useState | Gerenciamento dos agendamentos e formulários |
| Manipulação de dados | JavaScript | filter(), reduce() e map() |
| Documentação | Context7 MCP | Consulta à documentação técnica |
| Testes de interface | Playwright MCP | Validação do comportamento e da interface |

### Regras tecnológicas

- Utilize React com componentes funcionais.
- Utilize TypeScript nos arquivos da aplicação.
- Utilize Vite para desenvolvimento e build.
- Escolha CSS convencional ou Tailwind CSS conforme a configuração existente.
- Não misture diferentes abordagens de estilização sem necessidade.
- Não adicione bibliotecas sem justificativa.
- Antes de instalar dependências, examine o package.json e verifique se a funcionalidade já pode ser implementada com os recursos existentes.
- Não atualize versões de dependências por iniciativa própria.
- Consulte a documentação correspondente às versões instaladas.

## 5. Estrutura de pastas

Organize a aplicação de forma modular, mantendo a separação entre componentes, dados, funcionalidades e hooks.

Estrutura de referência:

```text
src/
├── assets/
├── components/
│   ├── features/
│   └── ui/
├── data/
└── hooks/
```

### Responsabilidades

**assets/**

Armazena imagens, logotipos, fontes, ícones e demais arquivos estáticos.

**components/features/**

Armazena componentes específicos das funcionalidades do HairDay.

Exemplos:

- ScheduleSidebar
- AppointmentForm
- AppointmentList
- PeriodSection
- AppointmentItem

**components/ui/**

Armazena componentes visuais genéricos e reutilizáveis.

Exemplos:

- Botões genéricos.
- Campos de formulário reutilizáveis.
- Elementos visuais compartilhados.

**data/**

Armazena dados estáticos e configurações que não precisam ficar diretamente dentro dos componentes.

Exemplos:

- Horários disponíveis.
- Configurações dos períodos.
- Dados auxiliares da agenda.

**hooks/**

Armazena hooks personalizados quando houver lógica reutilizável que justifique sua extração.

### Regras de organização

1. Não concentre toda a aplicação em App.tsx.
2. Não crie componentes excessivamente grandes.
3. Evite duplicar componentes ou funcionalidades.
4. Mantenha os dados separados da apresentação visual.
5. Utilize Props para comunicação entre componentes.
6. Não crie arquivos ou diretórios sem necessidade.
7. Preserve a organização existente do projeto.
8. Mantenha App.tsx e main.tsx em locais compatíveis com a configuração do Vite.

Uma possível organização, caso os arquivos sejam necessários, é:

```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── features/
│   │   └── appointments/
│   │       ├── ScheduleSidebar.tsx
│   │       ├── AppointmentForm.tsx
│   │       ├── AppointmentList.tsx
│   │       ├── PeriodSection.tsx
│   │       └── AppointmentItem.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Input.tsx
├── data/
│   └── schedule.ts
├── hooks/
│   └── useAppointments.ts
├── App.tsx
├── main.tsx
└── styles.css
```

Essa estrutura é uma referência, não uma obrigação de criar todos os arquivos.

## 6. Design System e identidade visual

A interface deve seguir o Style Guide disponibilizado no Figma.

### Regras visuais

- Respeite as cores definidas no Figma.
- Utilize a tipografia indicada no Style Guide.
- Preserve os espaçamentos e proporções dos componentes.
- Respeite as dimensões da Sidebar e da área principal.
- Utilize os ícones correspondentes aos elementos da interface.
- Mantenha consistência visual entre os campos, botões, horários e seções.
- Reproduza os estados de hover, foco e interação presentes no design.
- Não invente paletas de cores ou elementos decorativos.
- Não substitua elementos específicos do Figma por componentes genéricos sem necessidade.

### Responsividade

A aplicação deve funcionar em desktop e dispositivos móveis.

No desktop:

- Preserve a distribuição entre Sidebar e Agenda.
- Respeite a largura e o espaçamento definidos no Figma.
- Mantenha a agenda organizada e visualmente equilibrada.

No mobile:

- Adapte a disposição dos blocos conforme a referência mobile.
- Evite elementos cortados ou sobrepostos.
- Garanta que o formulário e a agenda permaneçam acessíveis.
- Preserve a legibilidade dos horários e nomes dos clientes.
- Evite rolagem horizontal indevida.

Não defina breakpoints aleatórios quando as referências do Figma permitirem identificar o comportamento esperado.

## 7. Modelo de dados — Appointment

Cada agendamento deve ser representado por um tipo TypeScript.

Modelo obrigatório:

```typescript
type Appointment = {
  id: string;
  clientName: string;
  date: string;
  time: string;
};
```

### Responsabilidades dos campos

| Campo | Tipo | Descrição |
|---|---|---|
| id | string | Identificador único do agendamento |
| clientName | string | Nome do cliente |
| date | string | Data do agendamento |
| time | string | Horário do agendamento |

### Regras

- Utilize identificadores únicos para cada registro.
- Utilize datas em formato consistente, preferencialmente YYYY-MM-DD para armazenamento e comparação.
- Utilize horários no formato HH:mm.
- Não misture objetos de agendamento com strings ou estruturas não tipadas.
- Evite utilizar any.
- Mantenha o modelo de dados centralizado e reutilizável.
- Não modifique diretamente os objetos ou arrays existentes no estado.

O identificador pode ser gerado utilizando crypto.randomUUID(), quando disponível no ambiente.

## 8. Gerenciamento de estado

Utilize React useState para controlar a lista de agendamentos e os estados necessários do formulário.

O estado principal deve conter uma coleção tipada de Appointment.

Exemplo conceitual:

```typescript
const [appointments, setAppointments] = useState<Appointment[]>([]);
```

### Regras de gerenciamento

- Mantenha a lista de agendamentos em um estado centralizado, preferencialmente no componente responsável por coordenar a aplicação.
- Passe os dados e funções necessários por Props.
- Utilize atualizações imutáveis.
- Não altere diretamente o array armazenado no estado.
- Utilize atualizações funcionais quando depender do estado anterior.
- Garanta que a interface seja atualizada imediatamente após adicionar ou excluir um registro.
- Evite duplicar estados que possam ser derivados dos agendamentos existentes.

A lista de agendamentos deve ser a fonte de verdade para a renderização da agenda.

Não adicione backend, banco de dados ou persistência em localStorage, pois não fazem parte dos requisitos atuais.

## 9. Funcionalidade de cadastro de agendamentos

O formulário deve permitir cadastrar um novo agendamento.

### Campos obrigatórios

1. Nome do cliente.
2. Data do agendamento.
3. Horário do agendamento.

### Botão

O formulário deve possuir um botão com o texto:

**Agendar**

### Comportamento esperado

Quando o usuário preencher os campos e clicar em Agendar:

1. Verifique se todos os campos obrigatórios foram preenchidos.
2. Valide se o nome do cliente não está vazio ou contém somente espaços.
3. Valide se a data foi selecionada.
4. Valide se o horário foi selecionado.
5. Gere um identificador único.
6. Crie um objeto Appointment.
7. Atualize o estado utilizando uma operação imutável.
8. Atualize a agenda para exibir a data do agendamento recém-criado.
9. Limpe os campos do formulário após o cadastro bem-sucedido.
10. Exiba o novo agendamento na seção correspondente ao seu horário.

### Validação

Não permita cadastrar registros incompletos.

Quando algum campo obrigatório estiver ausente, apresente uma orientação simples e clara ao usuário.

Não utilize mensagens técnicas ou códigos de erro para orientar o preenchimento.

A validação deve ser compreensível e visualmente consistente com o Figma.

Não limpe o formulário quando o cadastro falhar.

## 10. Seleção de data e listagem da agenda

A área principal deve possuir um seletor de data.

O usuário deve conseguir escolher o dia que deseja visualizar.

### Comportamento

- Ao selecionar uma data, a agenda deve mostrar somente os agendamentos daquele dia.
- Agendamentos de outras datas não devem aparecer na listagem atual.
- A alteração da data deve atualizar a interface imediatamente.
- A lista original de agendamentos deve permanecer preservada.
- A exclusão deve afetar somente o registro selecionado.

Utilize filter() para selecionar os agendamentos correspondentes à data visualizada.

Exemplo conceitual:

```typescript
const appointmentsOfDay = appointments.filter(
  (appointment) => appointment.date === selectedDate
);
```

O exemplo é ilustrativo. Adapte a implementação à estrutura real dos componentes.

### Comportamento após cadastro

Depois de um cadastro bem-sucedido, a agenda deve selecionar a data do novo agendamento para que o usuário consiga visualizar o registro imediatamente.

Não descarte os agendamentos dos outros dias ao alterar a data selecionada.

## 11. Agrupamento por períodos

A agenda deve possuir três períodos:

| Período | Intervalo |
|---|---|
| Manhã | 09:00 às 12:00 |
| Tarde | 13:00 às 18:00 |
| Noite | 19:00 às 21:00 |

### Regras de agrupamento

1. Considere os horários disponíveis no Figma.
2. Não invente horários adicionais.
3. Organize os horários disponíveis em ordem crescente.
4. Cada agendamento deve aparecer no período correspondente ao seu horário.
5. Não exiba o mesmo agendamento em mais de um período.
6. Mantenha a ordem cronológica dentro de cada período.
7. Preserve os agendamentos que não pertencem à data atualmente selecionada.

Utilize filter(), reduce() e map() conforme suas responsabilidades.

### filter()

Utilize filter() para selecionar os registros da data escolhida e, quando necessário, separar os agendamentos por período.

### reduce()

Utilize reduce() para organizar os agendamentos em grupos correspondentes aos períodos.

A estrutura de agrupamento deve ser tipada e fácil de compreender.

### map()

Utilize map() para renderizar dinamicamente:

- Os períodos.
- Os horários.
- Os agendamentos.
- Os itens da agenda.

Sempre forneça uma key estável e única para os elementos renderizados.

### Ordenação

Os registros devem ser exibidos do menor horário para o maior.

Não ordene os horários alfabeticamente de maneira incorreta. Utilize a representação HH:mm ou uma comparação numérica adequada.

## 12. Estado vazio dos períodos

Quando não existir nenhum agendamento em determinado período da data selecionada, exiba exatamente a seguinte mensagem:

**Você ainda não tem agendamentos cadastrados nesse período.**

### Regras

- A mensagem deve aparecer somente no período que estiver vazio.
- Não esconda toda a agenda quando apenas um período não possuir registros.
- Se Manhã estiver vazia, mas Tarde e Noite possuírem agendamentos, somente Manhã deve apresentar a mensagem.
- Quando um novo agendamento for adicionado ao período, a mensagem deve desaparecer automaticamente.
- Quando um agendamento for excluído e o período ficar vazio, a mensagem deve aparecer novamente.

Preserve exatamente o texto solicitado, incluindo sua pontuação.

## 13. Exclusão de agendamentos

Cada agendamento exibido na agenda deve apresentar:

- Horário.
- Nome do cliente.
- Ícone de lixeira ou controle de exclusão conforme o Figma.

### Comportamento

Ao acionar o controle de exclusão:

1. Identifique o agendamento pelo seu ID.
2. Remova somente o registro selecionado.
3. Atualize o estado de forma imutável.
4. Atualize a interface imediatamente.
5. Recalcule os grupos e períodos com base na lista atualizada.

Utilize filter() para remover o registro.

Exemplo conceitual:

```typescript
setAppointments((currentAppointments) =>
  currentAppointments.filter(
    (appointment) => appointment.id !== appointmentId
  )
);
```

### Cuidados

- Não remova registros apenas comparando o nome do cliente.
- Utilize o ID para identificar cada agendamento.
- Não modifique diretamente o array existente.
- Garanta que a exclusão não afete outros registros.
- O controle deve possuir um nome acessível para tecnologias assistivas.
- Preserve o estilo do ícone e seu comportamento conforme o Figma.

## 14. Componentização e Props

A aplicação deve utilizar componentes reutilizáveis.

Considere os seguintes componentes como referência:

### ScheduleSidebar

Responsável por representar a área lateral de cadastro.

Responsabilidades:

- Apresentar o formulário.
- Organizar os elementos visuais da Sidebar.
- Integrar o formulário ao estado principal por meio de Props.

### AppointmentForm

Responsável pelos campos de cadastro.

Responsabilidades:

- Receber os valores dos campos.
- Controlar as alterações do formulário.
- Validar os campos obrigatórios.
- Acionar o cadastro por meio de uma função recebida via Props.

### AppointmentList

Responsável pela listagem dos agendamentos.

Responsabilidades:

- Receber os agendamentos da aplicação.
- Receber a data selecionada.
- Organizar os registros para exibição.
- Renderizar os períodos.

### PeriodSection

Responsável por representar cada período da agenda.

Responsabilidades:

- Apresentar o nome do período.
- Renderizar os agendamentos correspondentes.
- Exibir a mensagem de estado vazio quando necessário.

### AppointmentItem

Responsável por representar um agendamento individual.

Responsabilidades:

- Exibir o horário.
- Exibir o nome do cliente.
- Disponibilizar o controle de exclusão.
- Acionar a função de exclusão recebida por Props.

### Regras de componentização

- Cada componente deve possuir uma responsabilidade clara.
- Utilize Props para comunicação entre componentes.
- Defina tipos para todas as Props.
- Evite componentes que concentrem toda a lógica da aplicação.
- Evite passar propriedades desnecessárias.
- Não crie componentes apenas para fragmentar excessivamente o código.
- Mantenha a lógica de estado em um nível adequado da árvore de componentes.

Os nomes e a organização dos componentes podem ser adaptados se houver uma justificativa arquitetural, desde que todas as responsabilidades permaneçam atendidas.

## 15. HTML semântico e acessibilidade

- Utilize HTML semântico.
- Utilize main para o conteúdo principal.
- Utilize aside para a Sidebar, quando apropriado.
- Utilize form para o formulário de cadastro.
- Utilize label associado aos campos.
- Utilize button para ações.
- Utilize elementos adequados para organizar os períodos e agendamentos.
- Garanta navegação por teclado.
- Mantenha indicadores de foco visíveis.
- Utilize nomes acessíveis para os controles de exclusão.
- Não dependa somente de cores para comunicar erros ou estados.
- Garanta contraste e legibilidade conforme o Style Guide.
- Não utilize elementos clicáveis sem semântica adequada.

## 16. Context7 MCP

Utilize o Context7 MCP para consultar a documentação oficial e atualizada antes de implementar funcionalidades que envolvam dúvidas sobre APIs ou boas práticas.

Priorize consultas sobre:

- React useState.
- Componentes funcionais e Props.
- Eventos e formulários em React.
- Renderização de listas.
- Tipagem de componentes e dados com TypeScript.
- Hooks React.
- Recursos de CSS ou Tailwind utilizados no projeto.

### Regras

1. Consulte a documentação correspondente às versões instaladas.
2. Prefira exemplos oficiais.
3. Não utilize APIs antigas quando houver alternativas atuais.
4. Não invente métodos ou propriedades.
5. Não afirme ter consultado o Context7 se a ferramenta não estiver disponível.
6. Se o MCP estiver indisponível, informe a limitação e utilize a documentação oficial acessível.

## 17. Playwright MCP

Utilize o Playwright MCP para validar a aplicação diretamente no navegador.

A validação deve verificar tanto a interface quanto o comportamento das funcionalidades.

### Testes de interface

- A aplicação abre corretamente.
- A Sidebar aparece conforme o Figma.
- O formulário apresenta todos os campos.
- A área da agenda apresenta o seletor de data.
- Os três períodos aparecem corretamente.
- A interface respeita os layouts desktop e mobile.
- Os elementos não ficam sobrepostos ou cortados.
- Não existe rolagem horizontal indevida.

### Testes funcionais

**Cadastro**

1. Preencher o nome do cliente.
2. Selecionar uma data.
3. Selecionar um horário.
4. Clicar em Agendar.
5. Confirmar que o registro aparece na agenda.
6. Confirmar que o formulário é limpo após o cadastro.

**Validação**

1. Tentar cadastrar sem nome.
2. Tentar cadastrar sem data.
3. Tentar cadastrar sem horário.
4. Confirmar que os registros inválidos não são adicionados.
5. Confirmar que a orientação de preenchimento aparece.

**Filtro por data**

1. Criar agendamentos em datas diferentes.
2. Selecionar uma data.
3. Confirmar que somente os registros daquele dia aparecem.
4. Alterar a data.
5. Confirmar que os registros da outra data são exibidos.

**Agrupamento**

1. Criar agendamentos em horários diferentes.
2. Confirmar que os registros aparecem no período correto.
3. Confirmar que os horários estão em ordem crescente.
4. Confirmar que nenhum agendamento aparece duplicado.

**Estado vazio**

1. Selecionar uma data sem agendamentos.
2. Confirmar a mensagem exata em cada período.
3. Criar um agendamento em determinado período.
4. Confirmar que somente a mensagem daquele período desaparece.

**Exclusão**

1. Criar um agendamento.
2. Acionar o ícone de lixeira.
3. Confirmar que o registro desaparece imediatamente.
4. Confirmar que os demais registros permanecem.
5. Confirmar que a mensagem de estado vazio aparece caso o período fique sem agendamentos.

### Regras de validação

- Execute os testes em desktop e mobile.
- Utilize dimensões próximas às telas de referência do Figma, quando disponíveis.
- Verifique erros relevantes no console.
- Corrija problemas encontrados antes de considerar a tarefa concluída.
- Informe quais testes foram executados e seus resultados.
- Não declare testes aprovados sem realmente executá-los.

Se o Playwright MCP não estiver disponível, informe a limitação e utilize outra forma de validação somente quando possível.

## 18. Fluxo obrigatório de desenvolvimento

Siga o ciclo abaixo durante todo o desenvolvimento.

### Etapa 1 — Analisar

- Examine o repositório.
- Identifique a estrutura de arquivos.
- Verifique package.json e as dependências.
- Consulte o Figma.
- Identifique os componentes e os comportamentos necessários.
- Consulte o Style Guide.

### Etapa 2 — Planejar

Antes de implementar:

- Explique o que será desenvolvido.
- Identifique os arquivos envolvidos.
- Defina a responsabilidade dos componentes.
- Apresente como pretende validar o resultado.

### Etapa 3 — Implementar a interface

Comece pela estrutura visual, mesmo antes de implementar toda a interatividade.

Priorize:

1. Logo e estrutura principal.
2. Sidebar de novo agendamento.
3. Formulário.
4. Área principal da agenda.
5. Seletor de data.
6. Seções Manhã, Tarde e Noite.
7. Elementos de cada agendamento.
8. Responsividade.

A interface inicial deve reproduzir o Figma antes de avançar para a lógica completa.

### Etapa 4 — Criar o modelo e gerenciar o estado

- Criar o tipo Appointment.
- Definir o estado principal da aplicação.
- Implementar a comunicação por Props.
- Preparar os dados para renderização.

### Etapa 5 — Implementar o cadastro

- Criar o formulário funcional.
- Implementar a validação.
- Criar novos registros.
- Atualizar a agenda após o cadastro.

### Etapa 6 — Implementar a organização da agenda

- Implementar o filtro por data.
- Agrupar os registros por períodos.
- Ordenar os horários.
- Renderizar os registros.
- Exibir estados vazios.

### Etapa 7 — Implementar a exclusão

- Identificar registros pelo ID.
- Remover registros com filter().
- Atualizar a interface imediatamente.

### Etapa 8 — Testar e corrigir

- Executar as verificações disponíveis.
- Utilizar Playwright MCP.
- Testar os fluxos funcionais.
- Verificar desktop e mobile.
- Corrigir problemas encontrados.

### Etapa 9 — Explicar

Apresente um resumo do que foi implementado, dos arquivos modificados e dos testes executados.

Não tente implementar toda a aplicação de uma só vez. Trabalhe em tarefas menores, garantindo que cada etapa esteja funcional antes de avançar.

## 19. Limites de escopo

- Desenvolva somente as funcionalidades previstas neste documento e nas referências oficiais.
- Não crie backend ou banco de dados.
- Não implemente autenticação.
- Não adicione sistema de pagamento.
- Não adicione notificações ou envio de mensagens.
- Não implemente persistência em localStorage ou outros mecanismos de armazenamento sem solicitação.
- Não invente horários ou dados de clientes.
- Não adicione funcionalidades extras por iniciativa própria.
- Não crie subagentes, arquivos em diretórios de agentes ou Skills próprias.
- Utilize somente um arquivo AGENTS.md na raiz do projeto para orientar o agente.

## 20. Critérios de conclusão

O HairDay será considerado concluído quando:

- A interface reproduzir fielmente o Figma.
- A Sidebar e a Agenda estiverem organizadas.
- O formulário permitir cadastrar agendamentos.
- Os campos obrigatórios forem validados.
- A agenda permitir selecionar diferentes datas.
- Os registros forem agrupados corretamente em Manhã, Tarde e Noite.
- Os horários estiverem organizados em ordem crescente.
- A mensagem de estado vazio for exibida exatamente como especificada.
- A exclusão remover somente o agendamento selecionado.
- A aplicação estiver responsiva.
- O código estiver tipado e componentizado.
- Os componentes utilizarem Props adequadamente.
- filter(), reduce() e map() forem utilizados nas operações correspondentes.
- Os testes aplicáveis tiverem sido executados.
- Eventuais limitações estiverem documentadas.

## 21. Comunicação com o usuário

Responda sempre em português do Brasil.

Utilize linguagem clara, objetiva e didática.

Antes de realizar alterações importantes, explique o próximo passo.

Ao concluir cada tarefa, apresente:

- **O que foi feito:** resumo das alterações.
- **Arquivos alterados:** lista dos arquivos criados ou modificados.
- **Como testar:** comandos ou passos para reproduzir o comportamento.
- **Validação:** testes executados e resultados.
- **Pendências:** limitações ou pontos que precisam de confirmação.

Não afirme que algo está funcionando sem ter realizado uma verificação que sustente essa afirmação.