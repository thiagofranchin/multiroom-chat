/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(80, function(){
  console.log('Servidor online');
})

var io = require('socket.io').listen(server);

app.set('io', io);

/* Criar a conexão por websocket */ 
io.on('connection', function(socket){
  console.log('Usuário conectou');

  socket.on('disconnect', function(){
    console.log('Usuário desconectou');
  });

  socket.on('msgParaServidor', function(data){
    //DIALOGO
      // Retorna msg enviada apenas para quem enviou
      socket.emit(
        'msgParaCliente',
        {
          apelido: data.apelido, 
          mensagem: data.mensagem
        }
      );
      // Envia msg para todos os usuários menos para quem enviou
      socket.broadcast.emit(
        'msgParaCliente',
        {
          apelido: data.apelido, 
          mensagem: data.mensagem
        }
      );
    
    // PARTICIPANTES
      // Retorna msg enviada apenas para quem enviou
      if(parseInt(data.apelido_atualizado_nos_clientes) == 0) {
          socket.emit(
            'participantesParaCliente',
            {
              apelido: data.apelido
            }
          );
          // Envia msg para todos os usuários menos para quem enviou
          socket.broadcast.emit(
            'participantesParaCliente',
            {
              apelido: data.apelido
            }
          );
      }

  });

});