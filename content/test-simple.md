---
title: "Simple Test"
date: 2024-01-22
---

## Testing with Inline Everything

<style>
/* Inline CSS - ALWAYS works */
.stats-test {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0;
  padding: 30px;
  background: rgba(0, 212, 255, 0.1);
  border-radius: 15px;
  border: 2px solid #00d4ff;
}

.stat-box {
  text-align: center;
  padding: 20px;
}

.stat-number {
  font-size: 2.5em;
  font-weight: bold;
  color: #00d4ff;
  margin-bottom: 10px;
  font-family: monospace;
}

.stat-label {
  color: #adb5bd;
  font-size: 0.9em;
  text-transform: uppercase;
}

.color-box {
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  margin: 10px;
}
</style>

### Stats Counter
<div class="stats-test" id="stats-test">
  <div class="stat-box">
    <div class="stat-number" data-target="1000">0</div>
    <div class="stat-label">Reviews</div>
  </div>
  <div class="stat-box">
    <div class="stat-number" data-target="50">0</div>
    <div class="stat-label">Products</div>
  </div>
  <div class="stat-box">
    <div class="stat-number" data-target="100">0</div>
    <div class="stat-label">Hours</div>
  </div>
  <div class="stat-box">
    <div class="stat-number" data-target="24">0</div>
    <div class="stat-label">Updates</div>
  </div>
</div>

### Colors
<div style="display: flex; gap: 20px; margin: 30px 0;">
  <div class="color-box" style="background: #00d4ff;">Neon Blue</div>
  <div class="color-box" style="background: #9d4edd;">Purple</div>
  <div class="color-box" style="background: #ff6b35;">Orange</div>
</div>

### JavaScript Test
<button onclick="alert('JS works!')">Test Alert</button>
<button onclick="animateTestStats()">Animate Stats</button>

<script>
// Inline JavaScript - ALWAYS works
console.log('Inline test script loaded');

function animateTestStats() {
  const numbers = document.querySelectorAll('#stats-test .stat-number');
  
  numbers.forEach(num => {
    const target = parseInt(num.getAttribute('data-target')) || 100;
    let current = 0;
    
    const timer = setInterval(() => {
      current += 5;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      num.textContent = current;
    }, 30);
  });
}

// Auto-animate after 1 second
setTimeout(animateTestStats, 1000);
</script>
