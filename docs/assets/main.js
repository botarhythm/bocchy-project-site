document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature');
  const detailPopup = document.getElementById('feature-detail');
  const detailContent = document.getElementById('detail-content');
  const closeBtn = document.getElementById('close-detail');

  // 各特徴の詳細説明（後で拡張・自動化可能）
  const details = {
    ai: 'OpenAI GPT-4oを活用した自然な会話生成。LLMの力を最大限に活かし、シンプルなロジックで高品質な応答を実現します。',
    search: 'Google Custom Search APIで最新情報を取得し、要約・出典付きで返答します。',
    memory: 'Supabaseを用いた短期・長期記憶の管理。会話履歴や要約を保存し、文脈を維持します。',
    mood: '会話の盛り上がり度をAIで解析し、自然なタイミングで介入・応答します。',
    update: 'CI/CD・自動化により、日々新機能や改善が反映されます。'
  };

  features.forEach(f => {
    f.addEventListener('click', () => {
      const key = f.getAttribute('data-detail');
      detailContent.textContent = details[key] || '詳細情報は準備中です。';
      detailPopup.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    detailPopup.classList.add('hidden');
  });

  // ポップアップ外クリックで閉じる（オプション）
  detailPopup.addEventListener('click', (e) => {
    if (e.target === detailPopup) {
      detailPopup.classList.add('hidden');
    }
  });
}); 