document.addEventListener('DOMContentLoaded', () => {
  const rulesDiv = document.getElementById('rules-manifest');
  fetch('../rules.mdc')
    .then(res => res.text())
    .then(md => {
      // 簡易Markdown→HTML変換（見出し・リストのみ）
      let html = md
        .replace(/^# (.*)$/gm, '<h1>$1</h1>')
        .replace(/^## (.*)$/gm, '<h2>$1</h2>')
        .replace(/^### (.*)$/gm, '<h3>$1</h3>')
        .replace(/^\- (.*)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>')
        .replace(/---/g, '<hr>');
      rulesDiv.innerHTML = html;
    })
    .catch(() => {
      rulesDiv.textContent = 'ルール・マニフェストの読み込みに失敗しました。';
    });
}); 