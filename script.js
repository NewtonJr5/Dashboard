$(document).ready(() => {
    
    $('#documentacao').on('click', () => {
        //console.log('link clicado (doc)')
        //$('#pagina').load('documentacao.html')

        $.get('documentacao.html', data => {
            $('#pagina').html(data)
        })

    })

    $('#suporte').on('click', () => {
        //console.log('link clicado (suporte)')
        // $('#pagina').load('suporte.html')
        $.get('suporte.html', data => {
            $('#pagina').html(data)
        })
    })


    $('#competencia').on('change', e => {
       // console.log($(e.target).val())

       let comp = $(e.target).val()
       //console.log(comp)

       $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${comp}`,
            dataType: 'json',
            success: dados => {
                $('#numero_vendas').html(dados['numeroVendas'])
                $('#total_vendas').html(dados['totalVendas'])
                $('#clientesAtivos').html(dados['clientesAtivos'])
                $('#clientesInativos').html(dados['clientesInativos'])
                $('#reclamacoes').html(dados['reclamacoes'])
                $('#elogios').html(dados['elogios'])
                $('#sugestoes').html(dados['sugestoes'])
                $('#totalDespesas').html(dados['totalDespesas'])

                console.log(dados)
            },
            error: erro => {console.log(erro)}
       })

    })

})