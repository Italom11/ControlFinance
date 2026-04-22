const SUPABASE_URL = 'https://xksrbetddaprwvudejyf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_HibKS1JzZlM6vpmtU_BVnw_66DI1KOm';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const listaDiv = document.getElementById('lista');

async function carregarTransacoes() {
    const { data, error } = await _supabase
        .from('transacoes')
        .select('*')
        .order('criado_em', { ascending: false });

    if (error) {
        console.error('Erro ao carregar:', error);
        return;
    }

    listaDiv.innerHTML = '<h4>Histórico</h4>';
    data.forEach(t => {
        listaDiv.innerHTML += `
            <div class="item">
                <span>${t.descricao}</span>
                <span class="${t.tipo}">R$ ${t.valor}</span>
            </div>
        `;
    });
}


async function salvar() {
    const descricao = document.getElementById('desc').value;
    const valor = document.getElementById('valor').value;
    const tipo = document.getElementById('tipo').value;

    if (!descricao || !valor) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const { error } = await _supabase
        .from('transacoes')
        .insert([{ descricao, valor, tipo }]);

    if (error) {
        console.error('Erro ao salvar:', error);
        alert("Erro ao salvar dados.");
    } else {
        // Limpa os campos após salvar
        document.getElementById('desc').value = '';
        document.getElementById('valor').value = '';
        carregarTransacoes(); // Atualiza a lista automaticamente
    }
}

// Executa a carga inicial de dados ao abrir a página
carregarTransacoes();