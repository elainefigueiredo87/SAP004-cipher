# Cifra de César
## Índice

* [1. Introdução](#1-Introdução)
* [2. Produto](#2-Produto)
* [3. Usuário final](#3-Usuário-final)
* [4. Objetivo](#4-Objetivo)
* [5. Solução](#5-Solução)
* [6. Estrutura da Página](#6-Estrutura-da-Página)
* [7. Ferramentas](#7-Ferramentas)

## 1. Introdução - Teen Page Mensagens Secretas

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

## 4. Objetivo

**Cifrar** e **Decifrar** mensagens para enviar aos amigos.

## 5. Solução

Oferecer aos jovens a privacidade necessária para conversarem sobre o que quiserem de forma segura.

## 6. Estrutura da página

A página possui um texto no cabeçalho de boas vindas e uma breve explicação sobre para que serve.
Há um campo para escolher o offset.
Uma caixa de texto para inserir a mensagem, um botão para cifrar e ao lado um campo onde aparecerá a mensagem cifrada.
Há mais uma caixa de texto que servirá para colar a mensagem que deverá ser copiada do campo acima (utilizando Ctrl + C, para copiar e Ctrl + V para colar.) Um botão decifrar para descodificar a mensagem que aparecerá ao lado.

## 7. Ferramentas

As ferramentas utilizadas foram o programa Visual Studio Code para desenvolver o HTML (estrutura da página), JavaScript ( interação com o usuário), Css (estilo da página) e CipherJs (parte lógica da cifragem e decifragem).
