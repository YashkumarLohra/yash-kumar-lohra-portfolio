const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src', 'sections');

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (entry.name !== 'Hero') {
        processDirectory(fullPath);
      }
    } else {
      if (fullPath.endsWith('.css') && !fullPath.includes('Hero')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        content = content.replace(/\s*padding-top:\s*var\(--space-2xl\);/g, '');
        content = content.replace(/\s*padding-bottom:\s*var\(--space-2xl\);/g, '');
        content = content.replace(/\s*background-color:\s*var\(--color-bg-base\);/g, '');
        fs.writeFileSync(fullPath, content);
      } else if (fullPath.endsWith('.js') && !fullPath.includes('Hero')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        // Find <section class="..." and add "section "
        content = content.replace(/<section([^>]*)class="([^"]*)"/g, (match, before, classes) => {
          if (!classes.split(' ').includes('section')) {
            return `<section${before}class="section ${classes}"`;
          }
          return match;
        });
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

processDirectory(sectionsDir);
console.log('Cleanup complete.');
