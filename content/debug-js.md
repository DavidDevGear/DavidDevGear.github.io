---
title: "Debug JS Loading"
date: 2024-01-22
---

# Debugging JavaScript Loading

## Test 1: Check if scripts are in HTML
<div id="script-check" style="padding: 20px; background: #1a1a1a; border-radius: 10px; margin: 20px 0;">
    Checking for script tags...
</div>

## Test 2: Direct script test
<button onclick="testJS()">Test JavaScript Function</button>
<div id="js-output" style="margin-top: 10px;"></div>

## Test 3: Theme toggle test
<button id="debug-toggle">Toggle Theme (Debug)</button>
<div id="theme-output" style="margin-top: 10px;"></div>

<script>
// Check if script tags are present on page load
document.addEventListener('DOMContentLoaded', function() {
    const scripts = document.querySelectorAll('script[src]');
    const scriptSources = Array.from(scripts).map(s => s.src);
    
    const scriptCheck = document.getElementById('script-check');
    scriptCheck.innerHTML = `
        <strong>Found ${scripts.length} external script tags:</strong><br>
        ${scriptSources.map(src => `• ${src}`).join('<br>')}
    `;
    
    console.log('Scripts found:', scriptSources);
});

// Test function
window.testJS = function() {
    document.getElementById('js-output').innerHTML = 
        '<span style="color: green;">✅ JavaScript is working!</span>';
    console.log('Test function executed');
};

// Debug theme toggle
document.getElementById('debug-toggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    document.getElementById('theme-output').innerHTML = 
        `Theme changed to: <strong>${newTheme}</strong>`;
});
</script>
