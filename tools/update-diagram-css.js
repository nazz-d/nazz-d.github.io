const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../assets/css/style.css');
let content = fs.readFileSync(file, 'utf8');

const marker = '/* ── Rack photo gallery ── */';
const newStyles = `.diagram-card img {
  display: block;
  width: 100%;
  min-width: 650px;
  border: 1px solid var(--line);
  border-radius: 8px;
  transition: filter 0.5s ease;
}

[data-theme="light"] .diagram-card img {
  filter: invert(0.92) hue-rotate(185deg) brightness(1.05) contrast(1.1);
}

`;

if (content.includes(marker)) {
  content = content.replace(marker, newStyles + marker);
  fs.writeFileSync(file, content);
  console.log('Successfully updated style.css with diagram filters.');
} else {
  console.error('Marker not found in style.css');
  process.exit(1);
}
