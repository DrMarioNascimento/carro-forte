# A Manhã do Carro-Forte · Dragon Games

Jogo MOSAICO publicado em **https://carro-forte.dragongames.dev.br** (GitHub Pages).
Separado do repositório `Dragon` em 14/10/2026 — regra "um jogo = um repositório = um subdomínio"
(ver `documentos/ORGANIZACAO-DRAGON.md` no Dragon).

| Endereço | Conteúdo | Origem no Dragon |
|---|---|---|
| `/` | escolha da versão | — |
| `/a-mesa/` | entrada da Mesa; jogo em `/a-mesa/celular.html` | `historias/a-manha-do-carro-forte/a-mesa/` + `jogos/a-manha-do-carro-forte/a-mesa/` |
| `/o-impostor/` | entrada do Impostor; jogo em `/o-impostor/mesa.html` | `historias/a-manha-do-carro-forte/o-impostor/` + `jogos/a-manha-do-carro-forte/o-impostor/` |
| `/a-noite/` | A Noite | `jogos/a-manha-do-carro-forte/a-noite/` |
| `/telao.html?jogo=carro-forte` · `?jogo=carro-forte-noite` | telão | `telao.html` |

Arquivos comuns copiados do Dragon (cópia própria deste jogo): `firebase-room.js`, `papel-camada.js`,
`hipoteses-por-camada.js`, `carro-forte-terminal.*`, `brand/`.
Arquivos que antes eram emprestados da Casa da Costa ficam em `comum/` (QR, folha de profundidade,
three.js e o motor de RA usado pela maquete do Impostor).

Firebase: projetos `mosaico-noite` (Mesa e Noite) e `o-impostor-carro-forte` (Impostor) — os mesmos de antes.
O domínio `carro-forte.dragongames.dev.br` precisa estar em *Authentication → Domínios autorizados* nos dois.

Testes: `npm test` (integridade dos caminhos).
