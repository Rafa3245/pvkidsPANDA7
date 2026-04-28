# Alfakids — Página de Vendas (Método Alfasonoro)

## Problema / Pedido original
Criar página de vendas de alto padrão para o produto Alfakids (web app de alfabetização infantil) com o Método Alfasonoro™. Promessa principal: alfabetização em 30 dias com método fônico. Personagem: Panda.

## Entregáveis
- Landing page single-page em React + Tailwind (sem backend).
- Checkout Cakto: https://pay.cakto.com.br/aw2hie4_853925
- Preço: R$ 37 (de R$ 197).
- 2 bônus: Alimentação Saudável para Criança + Colorir Qualquer Foto em Desenho (Pintura Inteligente com IA).

## Persona
Pais e mães (25-45) de crianças de 3 a 7 anos, preocupados com leitura/escola, em busca de método divertido, leve e eficaz.

## Implementado (2025-12)
- Sticky header glassmorphism + CTA header
- Hero com arte Alfasonoro + Panda, headline "Seu filho lendo em até 30 dias"
- Seção Antes/Depois (transformation)
- Metodologia com os 8 estímulos (Som, Ritmo, Repetição, Imagem, Gesto, Melodia, Associação, Memória)
- Bento grid dos 5 módulos (Videoaulas do Panda, Programa 30 Dias, Biblioteca +100, Inglês, Recursos & IA)
- Showcase multi-dispositivo (TV/Celular/PC)
- 2 Bônus (Alimentação + Pintura IA)
- Seção de depoimentos (3 cards)
- Pricing card R$ 37 com lista completa de inclusões, garantia 7 dias
- FAQ com 6 perguntas
- Final CTA + footer

## Arquitetura
- Frontend: React (CRA + CRACO) + TailwindCSS + lucide-react
- Arquivo principal: `/app/frontend/src/components/SalesPage.jsx`
- Sem backend / sem database (static landing page)
- Fontes: Nunito (heading) + Figtree (body)
- Todos CTAs apontam para Cakto checkout (target=_blank)

## Backlog / próximos passos
- P1: Integrar Pixel do Facebook + Google Tag para rastreamento de conversão
- P1: A/B test de headline (30 dias vs 21 dias)
- P2: Seção de VSL (vídeo de vendas embed)
- P2: Contador de urgência/escassez dinâmico
- P2: Captura de leads (nome + email) com integração SendGrid/Mailchimp antes do checkout
- P2: Versão traduzida PT-BR para campanhas fora do BR
