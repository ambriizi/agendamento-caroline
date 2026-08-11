# 💅 Caroline Ambrizi Nails - Sistema de Agendamento

SaaS (Software as a Service) simplificado para agendamento de horários focado em profissionais autônomas e manicures locais.

## 🚀 Tecnologias

*   HTML5
*   CSS3 
*   JavaScript (Vanilla)

## 📌 Funcionalidades Atuais (MVP)

*   [x] Entrada de horário desejado pela cliente.
*   [x] Validação de campo vazio ou inválido.
*   [x] Verificação automática baseada no horário de fechamento (18h).
*   [x] Feedback visual com cores para disponibilidade.

## 🗺️ Roadmap de Evolução

O projeto será desenvolvido em 4 fases até se tornar um produto pronto para o mercado:

### Fase 1: Interface e Experiência do Usuário (UI/UX)
- [ ] Substituir o campo de número comum (`input type="number"`) por um seletor de data e hora adequado.
- [ ] Criar um design responsivo e elegante usando CSS moderno (Flexbox/Grid).
- [ ] Adicionar um campo para a cliente digitar o próprio nome e telefone.

### Fase 2: Persistência Local de Dados (Simulação de Banco)
- [ ] Implementar `localStorage` para salvar os horários que já foram agendados.
- [ ] Impedir que duas pessoas agendem exatamente o mesmo horário no mesmo dia.
- [ ] Criar uma tela secreta de "Painel da Manicure" para a Carol ver a lista de agendamentos do dia.

### Fase 3: Backend e Banco de Dados Real
- [ ] Criar uma API (Node.js/Express ou Firebase) para gerenciar os agendamentos.
- [ ] Salvar os dados em um banco de dados real (PostgreSQL, MongoDB ou Firestore).
- [ ] Implementar autenticação (Login/Senha) para que apenas a Carol acesse o painel dela.

### Fase 4: Recursos Avançados do SaaS
- [ ] Integração com a API do WhatsApp para enviar confirmação automática para a cliente.
- [ ] Sistema multi-inquilino (Multi-tenant): Permitir que outras manicures criem uma conta e usem o sistema (transformando em um SaaS real).
