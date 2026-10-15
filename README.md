# A Manhã do Carro-Forte · Dragon Games

## Desenvolvimento e acesso

Os jogos estão em diferentes etapas de desenvolvimento, teste e aperfeiçoamento e ainda não foram lançados ao público. Nesta fase, os testes são realizados internamente, sem participação externa.

Enquanto os jogos estiverem em desenvolvimento, regras, interfaces e funcionalidades poderão mudar. Algumas páginas poderão apresentar demonstrações do projeto, mas isso não significa que os jogos estejam disponíveis para participação do público.

Mário César Nascimento estuda **Game Design e desenvolvimento de jogos**. Estes projetos acompanham esse percurso de formação e experimentação. As autorias e condições de uso de cada projeto estão identificadas em [LICENSE.md](LICENSE.md).

**Development status:** internal testing only; external participation is not open. Demonstration pages do not constitute a public game launch. Rules, interfaces and features may change.


Projeto MOSAICO em desenvolvimento, com endereço oficial em **https://carro-forte.dragongames.dev.br** (GitHub Pages).
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

## Autoria e licença

Criação de **Mário César Nascimento e Osana Melo Nascimento**. As condições do projeto de origem Dragon/MOSAICO acompanham esta separação em [LICENSE.md](LICENSE.md); as licenças e os créditos de terceiros permanecem nos respectivos arquivos.

Portal Dragon Games: https://dragongames.dev.br/
