 
    $('#cep').on('blur', function () {
      const cep = $(this).val().replace(/\D/g, '');

      
      $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        dataType: 'json',
        success: function (dados) {(
                $('#logradouro').val(dados.logradouro),
                $('#bairro').val(dados.bairro),
                $('#localidade').val(dados.localidade),
                $('#uf').val(dados.uf)
              )
        },
        error: function () {
          alert('Erro ao buscar o CEP.');
        }
      });
    });
  