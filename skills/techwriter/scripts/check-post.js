#!/usr/bin/env node
// 발행 전 형식 검사. 사용법: node scripts/check-post.js <글.md>
// SKILL.md의 형식 규칙(제목 길이, 태그 수, 메타 설명, 문장 길이, 문체, 파일 순수성)을
// 사람이 어림하지 않고 숫자로 확인하기 위한 스크립트입니다. 외부 의존성 없음.
const fs = require('fs');
const file = process.argv[2];
if (!file) { console.error('사용법: node scripts/check-post.js <글.md>'); process.exit(2); }
const raw = fs.readFileSync(file, 'utf8');

const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
const fm = {};
if (fmMatch) for (const line of fmMatch[1].split(/\r?\n/)) {
  const kv = line.match(/^(\w+):\s*(.*)$/);
  if (kv) fm[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, '');
}
const title = fm.title || (raw.match(/^#\s+(.+)$/m) || [])[1] || '';
const tags = fm.tags ? fm.tags.replace(/^\[|\]$/g, '').split(/[,\s]+/).filter(Boolean) : [];
const desc = fm.description || '';

const prose = raw.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
const sents = prose
  .replace(/^---[\s\S]*?---/, '')
  .replace(/^\s*(#|\||-|\*|\d+\.|>|!\[)/gm, '')
  .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
  .split(/(?<=[.!?。])\s+|\n+/).map(s => s.trim())
  .filter(s => s.length >= 8 && /[가-힣]/.test(s) && /[.!?]$/.test(s));
const n = sents.length || 1;
const long = sents.filter(s => s.length > 40);
const formal = sents.filter(s => /(니다|습니다|입니다|됩니다|세요)[.!?]$/.test(s)).length;
const informal = sents.filter(s => !/(니다|습니다|입니다|됩니다|세요)[.!?]$/.test(s));

const fences = raw.match(/^```[^\n]*$/gm) || [];
const opens = fences.filter((_, i) => i % 2 === 0);
const noLang = opens.filter(f => !/^```\s*\S+/.test(f)).length;
const workNotes = raw.match(/^#{1,3}[ \t].*(자체 평가|발행 전 체크리스트|발행 메타|발행 메모|썸네일|SEO 제목|카테고리 제안|작성 메모)/gm) || [];
const placeholders = [...new Set((raw.match(/\{[^{}\n]{2,40}\}/g) || []).filter(p => !/^\{\s*$/.test(p) && /[가-힣]/.test(p)))];
const banned = (prose.match(/되어지|되어진|되어져|것 같습니다|것 같아요|(^|[\s"'(])(저는|제가|저의)|해\s?주(다|는|고|면|ㅂ니다|었|기|어)/gm) || []).length;

const rows = [
  ['frontmatter 4개 필드', ['title','category','tags','description'].every(k => fm[k]), Object.keys(fm).join(', ') || '없음'],
  ['제목 30-50자', title.length >= 30 && title.length <= 50, `${title.length}자: ${title}`],
  ['태그 5-10개', tags.length >= 5 && tags.length <= 10, `${tags.length}개`],
  ['메타 설명 150자 이내', desc.length > 0 && desc.length <= 150, `${desc.length}자`],
  ['40자 초과 문장 20% 이하', long.length / n <= 0.2, `${long.length}/${n} (${Math.round(long.length / n * 100)}%)`],
  ['합니다체/하세요 90% 이상', formal / n >= 0.9, `${formal}/${n} (${Math.round(formal / n * 100)}%)`],
  ['코드 블록 언어 명시', opens.length > 0 && noLang === 0, `${opens.length - noLang}/${opens.length}`],
  ['피할 표현 없음 (되어지다, 것 같습니다, 저는, 해주다)', banned === 0, `${banned}건`],
  ['파일에 본문만 (평가표·발행 메모 없음)', workNotes.length === 0, workNotes.length ? workNotes.map(h => h.trim()).join(' | ') : '없음'],
];
let fail = 0;
console.log(`# 형식 검사: ${file}\n`);
console.log('| 항목 | 결과 | 값 |\n|---|---|---|');
for (const [name, ok, val] of rows) { if (!ok) fail++; console.log(`| ${name} | ${ok ? '통과' : '**실패**'} | ${val} |`); }
if (long.length) { console.log(`\n40자 초과 문장 (${long.length}개):`); long.slice(0, 15).forEach(s => console.log(`- (${s.length}자) ${s}`)); }
if (informal.length) { console.log(`\n합니다체가 아닌 문장 (${informal.length}개):`); informal.slice(0, 10).forEach(s => console.log(`- ${s}`)); }
console.log(`\nplaceholder (${placeholders.length}개): ${placeholders.length ? placeholders.join(', ') : '없음'}`);
console.log(`\n결과: ${rows.length - fail}/${rows.length} 통과`);
process.exit(fail ? 1 : 0);
