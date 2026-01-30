---
title: "Feature Test"
date: 2024-01-22
---

## Testing All Features

### 1. Theme Toggle (Should Work)
This is embedded in header, not via shortcode.

### 2. Stats Counter


### 3. Simple Comparison Table
{{< compare-simple >}}

### 4. Colors Test
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0;">
  <div style="background: var(--neon-blue); padding: 20px; border-radius: 10px; color: white;">Neon Blue</div>
  <div style="background: var(--electric-purple); padding: 20px; border-radius: 10px; color: white;">Electric Purple</div>
  <div style="background: var(--bg-card); padding: 20px; border-radius: 10px; border: 1px solid var(--text-secondary);">Card Background</div>
</div>

### 5. JavaScript Test
<button onclick="alert('JS works!')">Test JavaScript</button>

### 6. Current Theme Info
<div id="theme-info" style="padding: 15px; background: var(--bg-card); border-radius: 10px; margin: 20px 0;">
  Loading theme info...
</div>

<script>
// Display current theme
document.addEventListener('DOMContentLoaded', function() {
  const theme = document.documentElement.getAttribute('data-theme');
  const el = document.getElementById('theme-info');
  if (el) {
    el.innerHTML = `
      <strong>Current Theme:</strong> ${theme}<br>
      <strong>Page Loaded:</strong> ${new Date().toLocaleTimeString()}
    `;
  }
});
</script>
