document.addEventListener('DOMContentLoaded', () => {
  const updatesList = document.getElementById('updates-list');
  fetch('data/updates.json')
    .then(res => res.json())
    .then(data => {
      if (!Array.isArray(data)) return;
      data.forEach(update => {
        const div = document.createElement('div');
        div.className = 'update-entry';
        div.innerHTML = `
          <h3>v${update.version} <span>(${update.date})</span></h3>
          <strong>${update.title}</strong>
          <ul>
            ${update.changes.map(c => `<li>${c}</li>`).join('')}
          </ul>
          <details>
            <summary>技術的ポイント</summary>
            <ul>${(update.techPoints||[]).map(tp => `<li>${tp}</li>`).join('')}</ul>
          </details>
          <p>${update.summary}</p>
        `;
        updatesList.appendChild(div);
      });
    })
    .catch(() => {
      updatesList.textContent = 'アップデート履歴の読み込みに失敗しました。';
    });
}); 