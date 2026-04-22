# ControlFinance 💰

Um gerenciador de finanças simples para demonstrar a integração entre um frontend web e o **Supabase** como backend as a service.

## 🚀 Funcionalidades
- Cadastro de transações (Receitas e Despesas).
- Listagem em tempo real dos dados armazenados no PostgreSQL.
- Diferenciação visual entre tipos de transação via CSS.

## 🛠️ Tecnologias
- **Banco de Dados:** PostgreSQL (Supabase)
- **Frontend:** HTML5, CSS3, JavaScript Vanilla
- **Conexão:** Supabase JS SDK

## 📋 Como configurar
1. No seu painel do Supabase, execute o script SQL contido na pasta `/sql` (ou no arquivo `schema.sql`) para criar a tabela.
2. No arquivo `app.js`, substitua as constantes `SUPABASE_URL` e `SUPABASE_KEY` pelas suas credenciais encontradas em **Settings > API**.
3. Abra o arquivo `index.html` em seu navegador.

## 🗄️ Estrutura do Banco de Dados
A tabela `transacoes` utiliza os seguintes tipos:
- `id`: bigint (Primary Key)
- `descricao`: text
- `valor`: numeric(10,2)
- `tipo`: text (check constraint: receita/despesa)
- `criado_em`: timestamptz