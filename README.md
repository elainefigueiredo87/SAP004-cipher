# Cifra de César
## Índice

* [1. Introdução](#1-Introdução)
* [2. Produto](#2-Produto)
* [3. Usuário final](#3-Usuário-final)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do
  projeto](#5-criterios-de-aceitação-mínimos-do-projeto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Considerações técnicas](#7-considerações-técnicas)
* [8. Guias, dicas e leituras
  complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Checklist](#9-checklist)

***

## 1. Introdução - Teen Page Mensagens Secretas

***

O universo Teen conta com muitas descobertas e novidades, portanto muitos "babados" não podem "vazar" e vir a público. Já pensou que mico aquele gatinho descobrir que você se derrete por ele? Melhor deixar esse assunto entre amigas e em segredo. 
Pensando em toda essa necessidade de sigilo, foi desenvolvida uma ferramenta que possibilitará a comunicação de forma secreta entre os adolescentes.
Os jovens poderão se comunicar e enviar mensagens criptografadas usando a Cifra de César.
Através desse método é possível digitar um texto e converter em uma mensagem criptografada, cada letra do alfabeto será substituída por outra, isso irá depender do número de posições que o usuário que escreve irá escolher deslocar o alfabeto dentro das opções disponíveis.
A tela tem um campo para digitar a mensagem, um campo para escolher um número (que será responsável pelo número de deslocamento do alfabeto e um botao para criptografar. A mensagem aparecerá ao lado já codificada.
a mensagem codificada poderá ser descodificada na mesma tela, no campo de baixo. basta copiar a mensagem criptografada e colar no campo abaixo para descriptografar, o importante será saber o offset que foi escolhido para criptografar.
Se a pessoa enviar a mensagem criptografada para um amigo por e-mail, ela deverá informar o número junto à mensagem enviada, dessa forma, quem receber a mensagem poderá convertê-la e ler o que foi enviado secretamente.
Essa página é inteiramente destinada aos adolescentes, pois é uma forma divertida de se comunicar com os amigos.
Usando nossa página você estará seguro para enviar as mensagens para os amigos. Caso seus pais peçam para ver seu e-mail ou whatsApp, verão apenas letras sem sentido, e nunca mais irão dizer aos seus tios quando vierem te visitar, que você está de namoradinho e namoradinha, ou que tem paquerinha, pois é vergonhoso passar por isso, a gente entende!

## 2. Produto

O produto é uma página que oferece ao usuário o poder de criptografar uma mensagem para enviar, e quem recebe pode descriptografar a mensagem usando o mesmo offset escolhido no ato da criptografia para tornar a mensagem legível.

## 3. Usuário final

A página destina-se ao público jovem (adolescente) que gosta de interagir com os amigos sem revelar o que estão conversando entre si. Uma forma divertida e criativa de conversar.

## 6. Hacker Edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se você **terminou** tudo
e ainda sobrou tempo, faça essa parte. Assim você poderá aprofundar e exercitar
mais sobre os objetivos de aprendizagem do projeto.

A descrição geral deste projeto não menciona o que aconteceria com letras
minúsculas ou outros caracteres (como espaço, pontuação, ç, ...). O
_boilerplate_ inclui alguns testes (comentados) que vocês podem usar como ponto
de partida para implementar o suporte para esses casos.

Também não foi mencionado o que aconteceria com _offset_ negativo. Como parte da
hacker edition te convidamos a explorar esse caso sozinha.

## 7. Considerações técnicas

A lógica do projeto deve estar implementada inteiramente em JavaScript. Nesse
projeto **NÃO** está permitido usar bibliotecas ou frameworks, só vanilla
JavaScript.

Você não deve usar a _pseudo-variable_ `this`.

Os testes unitários devem cubrir no mínimo de 70% dos _statements_, _functions_
e _lines_, e um mínimo de 50% de _branches_. O _boilerplate_ já contem o setup e
configurações necessárias para executar os testes assim como _code coverage_
para ver o nível de cobertura dos testes usando o comando `npm test`.

O _boilerplate_ inclui testes de exemplo, como ponto de partida.

Para começar esse projeto você terá que fazer um _fork_ e _clonar_ este
repositório que contém o _boilerplate_.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida assim
como toda a configuração de dependências e testes de exemplo:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` com respeito a uma guia de estilos. Ambas tarefas são executadas
automaticamente antes de executar os testes quando usamos o comando `npm run
test`.

No caso do `JavaScript` estamos usando o `eslint` que está configurado no
arquivo `.eslintrc` que contem o mínimo de informação como versão do
JavaScript/ECMAScript, o ambiente (_browser_ nesse caso) e as [regras
recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).

Nas regras/guias de estilo usaremos das recomandações padrão tanto para o
`eslint` quanto `htmlhint`.

***

## 8. Guias, dicas e leituras complementares

### Primeiros passos

1. Antes de mais nada, se assegure de ter um bom :pencil: editor de texto, algo
   como [Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/).
2. Para executar os comandos você precisará de um :shell: UNIX Shell, que é um
   programa que interpreta linhas de comando (command-line interpreter) e também
   deve ter o git instalado. Se você usa um sistema operacional "UNIX-like",
   como GNU/Linux ou MacOS, você já tem um _shell_ (terminal) instalado (e
   provavelmente o `git` também). Se você usa Windows pode baixar a versão
   completa do [Cmder](https://cmder.net/) que inclue o [Git
   bash](https://git-scm.com/download/win) , embora seja recomendado que você
   teste :penguin: GNU/Linux. Se tem  Windows 10 ou superior pode usar o Windows
   Subsystem for
   Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Faça seu próprio :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório. Seus
   _mentores_ compartilharão com você um _link_ para um repositório privado e te
   darão acesso a este repositório.
4. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
   o _fork_ para seu computador (cópia local).
5. 📦 Instale as dependências do projeto rodando o comando `npm install`. Mas
   antes disso tenha certeza de ter instalado o [Node.js](https://nodejs.org/)
   (que inclui o [npm](https://docs.npmjs.com/)).
6. Se tudo foi bem, você deve conseguir executar os :traffic_light: testes
   unitários com o comando `npm test`.
7. Para ver a interface do seu programa no navegador, use o comando `npm start`
   para iniciar o servidor web e entre na url `http://localhost:5000` no seu
   navegador.
8. Let's Code! :rocket:

### Recursos extras

A seguir um vídeo do Daniel que te ajudará a entender a fórmula matemática usada
pela Cifra de César e algumas coisas mais que deve saber para resolver o seu
projeto. Escute com atenção e siga seus conselhos ! :)

[![Dicas Cifra de
César](https://img.youtube.com/vi/utiLWBXmNQU/0.jpg)](https://www.youtube.com/watch?v=utiLWBXmNQU)

Desenho da experiência do usuário (User Experience Design):

* Ideação
* Prototipagem
* Teste e iteração

Desenvolvimento Front-end:

* Valores
* Tipos
* Variáveis
* Controle de fluxo
* Testes unitários
* [Aprenda mais sobre
  `charCodeAt()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
* [Aprenda mais sobre
  `String.fromCharCode()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
* [Aprenda mais sobre
  `ASCII`](https://web.fe.up.pt/~ee96100/projecto/Tabela%20ascii.htm)
* [Documentação do NPM](https://docs.npmjs.com/)

Ferramentas:

* GitHub y GitHub Pages.

Organização do trabalho:

* [Agilidade](https://www.youtube.com/watch?v=vozsjbh4noU)
* [Scrum em menos de 2 minutos](https://www.youtube.com/watch?v=IKZHPjCQ2m8)
* [Scrum em detalhes](https://www.youtube.com/watch?v=mt2hM4yrPn0). Não
  esperamos que você faça tudo isso neste projeto. Iremos aprofundando nesses
  conceitos ao longo do _bootcamp_.
* [Guia em espanhol para a
  cifra](https://docs.google.com/presentation/d/e/2PACX-1vTQ7-8LZDHrT4Y6AOBN72Nkfz1eJAeseBHpcHX8BSq0aFCFoZmuMjluMeyFNgK9ISKxTz0H03yGfJiT/pub?start=false&loop=false&delayms=60000)

## 9. Checklist

Essa seção é para te ajudar a ter um controle do que você precisa completar.

### Parte Obrigatória

* [ ] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [ ] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [ ] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [ ] Usar VanillaJS.
* [ ] **Não** usar `this`.
* [ ] Implementar `cipher.encode`.
* [ ] Implementar `cipher.decode`.
* [ ] Passar o linter com a configuração definida.
* [ ] Passar as provas unitárias.
* [ ] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [ ] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [ ] Interface que permita escrever um texto para ser cifrado.
* [ ] Interface que mostre o resultado da cifra corretamente.
* [ ] Interface que permita escrever um texto para ser decifrado.
* [ ] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifrar/decifrar minúsculas.
* [ ] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [ ] Permitir usar `offset` negativo.
