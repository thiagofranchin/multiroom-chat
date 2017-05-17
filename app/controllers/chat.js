module.exports.iniciaChat = function(application, req, res){
  var dadosForm = req.body;

  // Validacao do form
  req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
  req.assert('apelido', 'Nome ou apelido deve conter entre 3 à 15 caracteres').len(3, 15);

  var erros = req.validationErrors();
  
  if(erros){
    res.render("index", {validacao : erros});
    return;
  }

  res.render('chat');
}