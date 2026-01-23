---
title: "JavaScript Test"
date: 2024-01-22
---

# Testing JavaScript Loading

## Theme Toggle Test
<button id="test-toggle">Test Theme Toggle</button>

## Stats Counter Test
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-number" data-target="1000">0</div>
        <div class="stat-label">Test Stat</div>
    </div>
</div>

## Console Test
<button onclick="console.log('Button clicked!')">Test Console</button>

<script>
// Test inline JS
document.getElementById('test-toggle').addEventListener('click', function() {
    alert('Inline JS works!');
    console.log('Test button clicked');
});

// Check if external JS loaded
window.addEventListener('load', function() {
    console.log('Test page loaded');
    console.log('Theme toggle exists:', !!document.getElementById('theme-toggle'));
});
</script>
