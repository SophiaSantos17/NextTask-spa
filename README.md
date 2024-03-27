# NextTask - Aplicativo de Gerenciamento de Tarefas

## Sobre o Projeto

O NextTask é um aplicativo de gerenciamento de tarefas desenvolvido com React Native e Expo, fornecendo uma experiência eficiente para organizar suas atividades diárias.

### Funcionalidades Principais:

- **Autenticação de Usuário:** Login seguro e registro de novos usuários.
- **Adição e Edição de Tarefas:** Crie novas tarefas e edite informações existentes.
- **Visualização e Edição de Listas:** Veja suas tarefas, marque como concluídas ou exclua.
- **Priorização de Tarefas:** Atribua prioridades para organizar seu fluxo de trabalho.
- **Detalhes das Tarefas:** Obtenha informações detalhadas sobre cada tarefa.

## Como Iniciar

Siga estas etapas para iniciar o aplicativo NextTask em seu ambiente local:

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Passos

1. **Clone o Repositório:**

    ```bash
    git clone https://github.com/SophiaSantos17/NextTask-spa.git
    ```

2. **Navegue para o Diretório do Projeto:**

    ```bash
    cd NextTask-spa
    ```

3. **Instale as Dependências:**

    ```bash
    npm install
    ```

4. **Inicie o Aplicativo:**

    ```bash
    npm start
    ```

5. **Escaneie o Código QR:**
   - Utilize o aplicativo Expo Go no seu dispositivo móvel.
   - Escaneie o código QR gerado no terminal.

## Configuração da API

Para conectar o aplicativo à API NextTask, siga as instruções abaixo:

1. **Clone o Repositório da API:**

    ```bash
    git clone https://github.com/SophiaSantos17/NextTask-api.git
    ```

2. **Navegue para o Diretório da API:**

    ```bash
    cd NextTask-api
    ```

3. **Instale as Dependências:**

    ```bash
    npm install
    ```

4. **Inicie a API:**

    ```bash
    npm start
    ```

5. **Configure o Endereço IP:**
   - Execute `ipconfig` no CMD e obtenha seu endereço IP.
   - Substitua `BASE_URL` nos arquivos de serviço do aplicativo com o IP obtido.


<style>
    .project-block {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .project-block-item {
        flex: 1;
        padding: 10px;
        text-align: center;
    }

    .project-block-item img {
        width: 300px;
        height: 400px;
        object-fit: cover;
    }

    .project-block-item p {
        margin-top: 10px;
    }
</style>

## Projeto

<center>
<h3>Aqui temos: Tela Inicial, Tela de Login e Cadastro</h3>
<div class="project-block">
        <img src="https://github.com/SophiaSantos17/NextTask-spa/assets/125769375/f7a0eab6-c884-4c3b-83e8-b3f165861e37" alt="Tela Inicial" width="200" height="300">
        <img src="https://github.com/SophiaSantos17/NextTask-spa/assets/125769375/56f0699d-6df0-4384-8836-9399269be13a" alt="Login" width="200" height="300">
        <img src="https://github.com/SophiaSantos17/NextTask-spa/assets/125769375/56a4b7e8-717c-4d86-8b20-b3ca8bc7cb58" alt="Cadastro" width="200" height="300">
</div>
    <br>
<ul>
    <li>Na tela inicial, é a página que será carregada ao entrar no aplicativo.</li>
    <li>Na tela de login, já com as restrições dos inputs. Ele só aparece se o usuário tenta logar sem as restrições.</li>
    <li>Na tela de cadastro, caso o usuário não tenha login, ele poderá fazer o cadastro. Quando feito, é direcionado para a tela de login.</li>
</ul>
<hr> 

<h3>Aqui temos: Home, Tela de Informação da Tarefa e Tela de Adicionar Tarefa</h3>

<div class="project-block">
        <img src="https://github.com/SophiaSantos17/NextTask-spa/assets/125769375/2b7eb678-592f-43fe-8dec-99499743ee59" alt="Home" width="200" height="300">
        <img src="https://github.com/SophiaSantos17/NextTask-spa/assets/125769375/cc9ebe27-54ab-44a5-b46c-2310735fcf4a" alt="Info Tarefa" width="200" height="300">
        <img src="https://github.com/SophiaSantos17/NextTask-spa/assets/125769375/6a3febfa-02ce-4f57-8ae0-2f526f7fe3e5" alt="Add Tarefa"  width="200" height="300">
</div>
<br>
<ul>
    <li>Na home, assim que logado, o usuário poderá ver suas tarefas (caso não tenha nenhuma, aparecerá uma mensagem informando).</li>
    <li>Na tela de Informações da tarefa, o usuário pode ver com mais detalhes as informações da tarefa selecionada.</li>
    <li>Na tela de adicionar, o usuário preenche as informações e cadastra uma nova tarefa.</li>
</ul>
<hr> 

<h3>Aqui temos: Tela de Confirgurações de Tarefas, Modal de Excluir Tarefa e Tela de Tarefas Feitas</h3>

<div class="project-block">
        <img src="https://github.com/SophiaSantos17/NextTask-spa/assets/125769375/629c426a-33ae-4ea5-b1c9-0f8bd0e84fc0" alt="Config Tarefa" width="200" height="300">
        <img src="https://github.com/SophiaSantos17/NextTask-spa/assets/125769375/f435a5bb-9d14-4380-a1b3-a418251bafd8" alt="Excluir Tarefa" width="200" height="300">
        <img src="https://github.com/SophiaSantos17/NextTask-spa/assets/125769375/37bc3db0-f32b-42f8-a71a-00b8246beca6" alt="Tarefas Feitas" width="200" height="300">
</div>
<br>
<ul>
    <li>Na tela de Configurações de Tarefas, o usuário pode marcar a tarefa como feita, editá-la ou excluí-la (se ele deseja editá-la, a página é igual à de criar tarefa, mas com as informações preenchidas).</li>
    <li>No Modal de Excluir, ao clicar em excluir em uma tarefa, aparece o modal e o usuário confirma se deseja ou não excluir a tarefa.</li>
    <li>Na tela de Tarefas feitas, aparecem todas as tarefas marcadas como feitas.</li>
</ul>
<br>
</center>



## Contribuindo

- Caso queira contribuir para o projeto, abra uma issue ou envie um pull request.
- Qualquer contribuição é bem-vinda!

## Licença

Este projeto é distribuído sob a [Licença MIT](LICENSE).

---

Aproveite! 😊
