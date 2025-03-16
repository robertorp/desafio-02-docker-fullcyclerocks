# Desafio 02 - Docker - Full Cycle Rocks

Este repositório contém a solução para o Desafio 02 do módulo Docker do curso Full Cycle 3.0. O projeto implementa uma aplicação Node.js com Nginx como proxy reverso e MySQL como banco de dados.

## Visão Geral do Projeto

O desafio consiste em configurar uma aplicação Node.js que:
- Conecta-se a um banco de dados MySQL
- Insere um registro em uma tabela quando a rota principal é acessada
- É acessada através de um servidor Nginx que atua como proxy reverso
- Exibe a mensagem "Full Cycle Rocks!" junto com a lista de registros do banco de dados

## Estrutura do Projeto

O projeto utiliza Docker Compose para orquestrar três serviços:

1. **app**: Aplicação Node.js que se conecta ao banco de dados MySQL
2. **db**: Serviço MySQL para armazenamento de dados
3. **nginx**: Servidor web que atua como proxy reverso para a aplicação Node.js

## Como Executar

Para rodar o projeto, execute o seguinte comando na pasta raiz:

```bash
docker-compose up -d
```

Acesse a aplicação em seu navegador:

```
http://localhost:8080
```

## Detalhes dos Serviços

### Node.js (app)
- A aplicação aguarda que o MySQL esteja disponível antes de iniciar (usando dockerize)
- Conecta-se automaticamente ao banco de dados MySQL
- Insere registros em uma tabela e exibe-os quando acessada

### MySQL (db)
- Utiliza a versão 5.7 do MySQL
- Está configurado com o banco de dados "nodedb"
- Os dados são persistentes através de um volume Docker

### Nginx (nginx)
- Atua como proxy reverso para a aplicação Node.js
- Expõe a aplicação na porta 8080 do host

## Redes

Todos os serviços estão conectados na mesma rede bridge chamada "node-network" permitindo a comunicação entre eles.

## Requisitos do Desafio

✅ Aplicação Node.js com conexão ao MySQL  
✅ Nginx como proxy reverso  
✅ Exibição da mensagem "Full Cycle Rocks!" junto com registros do banco  
✅ Serviços interconectados via Docker Compose

## Licença

Este projeto foi desenvolvido como parte do curso Full Cycle 3.0.
