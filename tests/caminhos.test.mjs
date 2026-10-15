/* Integridade dos caminhos depois da separação do repositório Dragon (14/10/2026) — Carro-Forte.
   Toda referência relativa (../) e todo caminho citado a partir da raiz precisa existir;
   nenhum endereço antigo (/Dragon/, jogos/casa-da-costa/, historias/) pode sobrar no código. */
import test from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, normalize, relative } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const IGNORA = /(^|\/)(node_modules|\.git|tests)(\/|$)|_SUBSTITUIDO_/;
function arquivos(d) {
  return readdirSync(d).flatMap(n => {
    const p = join(d, n), r = relative(RAIZ, p).replace(/\\/g, "/");
    if (IGNORA.test(r)) return [];
    return statSync(p).isDirectory() ? arquivos(p) : [r];
  });
}
const TODOS = arquivos(RAIZ);
const CODIGO = TODOS.filter(f => /\.(html|js|css|webmanifest)$/.test(f) && !/a-noite\/assets\//.test(f));
const semComentarios = t => t.replace(/\/\*[\s\S]*?\*\//g, "").replace(/<!--[\s\S]*?-->/g, "").replace(/(^|[^:\\])\/\/.*$/gm, "$1");

test("referências ../ apontam para arquivos que existem", () => {
  const faltando = [];
  for (const f of CODIGO) {
    const t = semComentarios(readFileSync(join(RAIZ, f), "utf8"));
    for (const m of t.matchAll(/(?<![\p{L}\d_./-])((?:\.\.\/)+[\p{L}\d_./%-]+)/gu)) {
      const ref = m[1].replace(/[.,]+$/, "");
      const candidatos = [dirname(f), dirname(dirname(f)), dirname(dirname(dirname(f)))];
      if (!candidatos.some(d => existsSync(normalize(join(RAIZ, d, ref))))) faltando.push(`${f} → ${ref}`);
    }
  }
  assert.deepEqual(faltando, []);
});

test("nenhum endereço do repositório antigo sobrou no código", () => {
  const antigos = [];
  for (const f of CODIGO) {
    const t = semComentarios(readFileSync(join(RAIZ, f), "utf8"));
    for (const m of t.matchAll(/["'`(](\/Dragon\/|jogos\/(?:casa-da-costa|a-manha-do-carro-forte)\/|historias\/)/g)) antigos.push(`${f}: ${m[1]}`);
  }
  assert.deepEqual(antigos, []);
});

test("a raiz oferece as duas versões e as páginas de entrada existem", () => {
  const raiz = readFileSync(join(RAIZ, "index.html"), "utf8");
  assert.match(raiz, /href="a-mesa\/"/);
  assert.match(raiz, /href="o-impostor\/"/);
  for (const f of ["a-mesa/index.html", "a-mesa/celular.html", "o-impostor/index.html", "o-impostor/mesa.html",
                   "a-noite/index.html", "telao.html", "firebase-room.js", "comum/js/qr.js", "a-mesa/assets/carro-forte-hero.png"])
    assert.ok(existsSync(join(RAIZ, f)), f);
});

test("a maquete do Impostor acha o motor de RA na cópia própria", () => {
  const t = readFileSync(join(RAIZ, "o-impostor/maquete.js"), "utf8");
  assert.match(t, /BASE \+ '\.\.\/comum\/js\/'/);
  for (const f of ["three.min.js", "vendor/GLTFLoader.js", "vendor/OrbitControls.js", "ac-ra.js", "ac-maquete-ra.js"])
    assert.ok(existsSync(join(RAIZ, "comum/js", f)), f);
});
