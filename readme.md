Multiroom Chat
========

Pré-requisitos
---------------

1 - [Nodejs 6](https://nodejs.org)
2 - Instale o MySQL: [https://dev.mysql.com/downloads/file/?id=470091](Link para download)
3 - Instale o nodemon em sua máquina com o comando:
```console
$ npm install -g nodemon
```

Rodando local
--------------

1 - Dê um clone no projeto com o comando `git clone git@github.com:thiagofranchin/multiroom-chat.git`.

2 - Na pasta do projeto entre com o comando `npm install` para baixar as dependências.

3 - No Windows vá em "localizar programas e arquivos" e digite `services.msc`, procure por `MySQL57` e inicie o serviço.

4 - Inicie o terminal do MySQL Command Line Client e crie o banco de dados `portal_noticias`:
```console
$ create database portal_noticias;
```

5 - Ainda no terminal do MySQL crie a tabela `noticias` e suas respectivas colunas:
```console
$ create table noticias(
    id_noticia int not null primary key auto_increment,
    titulo varchar(100),
    resumo varchar(100),
    autor varchar(100),
    noticia text,
    data_criacao timestamp default current_timestamp);
```

6 - Para compilar, na pasta do projeto execute o comando `nodemon app.js`.

7 - Pronto, acesse no seu navegador favorito o endereço [http://localhost:3000/](http://localhost:3000/).
