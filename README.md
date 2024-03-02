# NextTask To Do

Este é o código-fonte do aplicativo de tarefas, desenvolvido em React Native. O aplicativo é uma ferramenta para planejamento pessoal, permitindo a criação, visualização, edição e exclusão de tarefas. Além disso, oferece autenticação de usuários para garantir a segurança das informações.

## Estrutura de Diretórios

- **components:** Contém todos os componentes reutilizáveis do aplicativo, como botões, cartões e entradas de dados.
- **context:** Define o contexto de autenticação utilizado para gerenciar o estado de login do usuário.
- **pages:** Cada página do aplicativo é representada por um arquivo nesta pasta. As páginas incluem funcionalidades como login, registro, visualização de tarefas, informações detalhadas da tarefa, etc.
- **services:** Contém os serviços de comunicação com a API, responsáveis por executar operações relacionadas a tarefas e usuários.
- **assets:** Armazena imagens e outros recursos utilizados no aplicativo.

## Componentes Principais

- **Navbar:** Navegação inferior que permite alternar entre diferentes seções do aplicativo.
- **Header:** Cabeçalho exibido em várias páginas com um título.
- **Button:** Botão reutilizável com a capacidade de ajustar largura, altura e manipuladores de eventos.
- **InputTarefa, InputDate, InputPriority, OptionType:** Entradas de dados especializadas para diferentes tipos de informações.
- **CardList:** Cartão exibido para cada tarefa na página principal, mostrando título, prioridade e data.
- **CardRecentes:** Cartão exibido para cada tarefa recente na página principal, mostrando informações resumidas.
- **CardOptionList:** Cartão exibido ao lado de cada tarefa na página principal, fornecendo opções de edição, exclusão e conclusão.

## Fluxo de Navegação

A navegação no aplicativo é gerenciada pelo React Navigation. As principais rotas incluem:

- **SplashScreen:** Tela de introdução exibida ao iniciar o aplicativo.
- **Start:** Tela inicial com opções para login, registro ou explorar o aplicativo.
- **Signin e Signup:** Telas de autenticação para entrar ou criar uma conta.
- **Home:** Página principal do aplicativo, exibindo tarefas recentes e por fazer.
- **NovaTarefa e EditarTarefa:** Telas para criar uma nova tarefa ou editar uma existente.
- **InfoTarefa:** Tela detalhada exibindo informações completas de uma tarefa específica.

## Integração com a API

O aplicativo se comunica com uma API RESTful para realizar operações relacionadas a tarefas e usuários. O serviço de autenticação é utilizado para signup e signin, enquanto o serviço de tarefas realiza operações CRUD (Create, Read, Update, Delete) nas tarefas.

Certifique-se de configurar corretamente a URL base da API no arquivo de serviços para garantir uma comunicação adequada.

## Instruções de Execução

1. **Instalação de Dependências:**
   Certifique-se de ter todas as dependências instaladas. Execute o seguinte comando na raiz do projeto:
   ```
   npm install
   ```

2. **Configuração do Ambiente:**
   No arquivo `tarefa.js` e `user.js` dentro da pasta `services`, ajuste a constante `BASE_URL` para a URL correta da sua API.

3. **Execução do Aplicativo:**
   Use o seguinte comando para iniciar o aplicativo:
   ```
   npx react-native run-android
   ```
   Certifique-se de ter um emulador Android em execução ou um dispositivo Android conectado via USB.

4. **Testes:**
   Os testes podem ser executados com o comando:
   ```
   npm test
   ```

## Observações

- Este aplicativo foi desenvolvido e testado principalmente no ambiente Android. Algumas adaptações podem ser necessárias para garantir um funcionamento adequado no iOS.
- Certifique-se de configurar corretamente as permissões e URLs da API para garantir uma comunicação eficaz.

---

