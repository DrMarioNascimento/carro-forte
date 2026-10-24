import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
const html=readFileSync(new URL('../a-mesa/index.html',import.meta.url),'utf8');
const script=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).find(s=>s.includes('URLSearchParams'));
test('convite conserva sala, parâmetros e fragmento e abre o gate existente',()=>{
 assert.ok(script);
 for(const search of ['?sala=AB12CD','?sala=AB12CD&mp=1','?origem=qr&sala=AB12CD&nome=Ana%20Maria']){
  let target;runInNewContext(script,{URLSearchParams,location:{search,hash:'#entrada',replace:url=>target=url}});
  const url=new URL(target,'https://carro-forte.dragongames.dev.br/a-mesa/');
  assert.equal(url.pathname,'/a-mesa/celular.html');assert.equal(url.search,search);assert.equal(url.hash,'#entrada');
 }
});
test('entrada sem convite mantém escolha da atividade e do telão',()=>{
 let target;runInNewContext(script,{URLSearchParams,location:{search:'',hash:'',replace:url=>target=url}});
 assert.equal(target,undefined);assert.match(html,/href="celular.html"/);assert.match(html,/href="..\/telao.html\?jogo=carro-forte"/);assert.doesNotMatch(html,/http-equiv="refresh"/);
});
