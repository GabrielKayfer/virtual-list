$(document).ready(function(){

    // Mostrar formulário
    $('#btn-nova-anotacao').click(function() {
        $('#form-anotacao').slideDown();
        $('#texto-anotacao').focus();
    });

    // Cancelar
    $('#botao-cancelar').click(function(e) {
        e.preventDefault();
        $('#form-anotacao').slideUp();
        $('#texto-anotacao').val('');
    });

    // Adicionar anotação
    $('#form-anotacao').on('submit', function(e) {
        e.preventDefault();

        const texto = $('#texto-anotacao').val().trim();
        if (!texto) {
            alert('Digite algo antes de adicionar.');
            return;
        }

        const item = $(`
            <li>
                <span class="conteudo"></span>
                <div class="botoes">
                    <button class="botao-editar" type="button">Editar</button>
                    <button class="botao-excluir" type="button">Excluir</button>
                </div>
            </li>
        `);

        item.find('.conteudo').text(texto);

        // Excluir
        item.find('.botao-excluir').click(function() {
            item.fadeOut(200, function() {
                item.remove();
            });
        });

        // Editar
        item.find('.botao-editar').click(function() {
            const span = item.find('.conteudo');
            const novo = prompt('Edite sua anotação:', span.text());
            if (novo !== null) {
                const trimmed = novo.trim();
                if (trimmed.length === 0) {
                    alert('Texto vazio não permitido.');
                    return;
                }
                span.text(trimmed);
            }
        });

        // Adicionar na lista
        $('#lista-anotacoes').append(item);

        // Limpar e esconder form
        $('#texto-anotacao').val('');
        $('#form-anotacao').slideUp();
    });

});
