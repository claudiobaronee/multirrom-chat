module.exports.iniciaChat = function(application, req, res){
	req.assert('apelido','Nome ou apelido é obrigatório').notEmpty();
	req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15);

	var erros = req.validationErrors();
	var dadosForm = req.body;
	if(erros){
		res.render('index',{validacao: erros})
		return;
	}

	application.get('io').emit(
		'msgParaCliente', 
		{apelido: dadosForm.apelido,
		 mensagem: ' entrou na sala'})

	res.render("chat", {dadosForm: dadosForm})
}