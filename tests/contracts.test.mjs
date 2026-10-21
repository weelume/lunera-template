import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
test('双语页面登记与素材合同完整',async()=>{const m=JSON.parse(await readFile(new URL('../.tpl/template.json',import.meta.url)));assert.equal(m.surfaces[0].pages.length,10);assert.equal(new Set(m.surfaces[0].pages.map(p=>p.slug)).size,m.surfaces[0].pages.length);assert.ok(m.surfaces[0].pages.every(p=>p.localizedTitles.en));for(const s of m.screenshots)assert.ok((await readFile(new URL('../.tpl/'+s.src,import.meta.url))).length>0)})
