import{test}from'node:test'
import assert from'node:assert/strict'
import{readFile,readdir}from'node:fs/promises'
const root=new URL('../',import.meta.url)
test('独立源码和素材不读取宿主品牌或跨模板路径',async()=>{async function walk(url){for(const e of await readdir(url,{withFileTypes:true})){const p=new URL(e.name+(e.isDirectory()?'/':''),url);if(e.isDirectory())await walk(p);else if(/\.(tsx?|css|svg)$/.test(e.name)){const s=(await readFile(p,'utf8')).replaceAll('https://github.com/weelume/lunera-template','');assert.doesNotMatch(s,/weelume|微域生光|weiyu-logo|href="\/templates"/i);for(const m of s.matchAll(/\/templates\/([a-z]+)\//g))assert.equal(m[1],'lunera')}}}await walk(new URL('src/',root));await walk(new URL('public/',root))})
