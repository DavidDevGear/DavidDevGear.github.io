---
title: "Final Test"
date: 2024-01-22
---

## Testing Everything

### Stats Counter (Should animate when scrolled to)
{{< stats-fixed >}}

### Comparison Table (Should have styling)
{{< compare-simple >}}

### Colors (Should show with proper theme colors)
<div class="color-test">
  <div style="background: var(--neon-blue);" class="color-box">Neon Blue</div>
  <div style="background: var(--electric-purple);" class="color-box">Electric Purple</div>
  <div style="background: var(--bg-card); border: 2px solid var(--text-secondary); color: var(--text-primary);" class="color-box">Card BG</div>
</div>

### Theme Info
Current theme: <span id="current-theme">loading...</span>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const theme = document.documentElement.getAttribute('data-theme');
  document.getElementById('current-theme').textContent = theme;
  document.getElementById('current-theme').style.color = 'var(--neon-blue)';
});
</script>
