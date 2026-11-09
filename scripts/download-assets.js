const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/home',
  'public/images/story',
  'public/images/portfolio',
  'public/images/films',
  'public/images/services',
  'public/images/journal'
];

dirs.forEach(d => {
  const p = path.join(__dirname, '..', d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

const downloads = [
  { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/home/hero-wedding.jpg' },
  { url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/home/candid-pheras.jpg' },
  { url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/home/palace-story.jpg' },
  { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/story/photographer-at-work.jpg' },
  { url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/story/camera-gear.jpg' },
  { url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/story/studio-craft.jpg' },
  { url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/portfolio/haldi-ritual.jpg' },
  { url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/portfolio/mehndi-detail.jpg' },
  { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/portfolio/emotional-candid.jpg' },
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/portfolio/varmala-ceremony.jpg' },
  { url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/portfolio/bridal-lehenga-red.jpg' },
  { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/films/film-udaipur.jpg' },
  { url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/films/film-meerut.jpg' },
  { url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/films/film-corbett.jpg' },
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/portfolio/bridal-portrait.jpg' }
];

downloads.forEach(d => {
  const destPath = path.join(__dirname, '..', d.dest);
  console.log(`Downloading ${d.dest}...`);
  try {
    execSync(`curl.exe -s -L -A "Mozilla/5.0" "${d.url}" -o "${destPath}"`);
    if (fs.existsSync(destPath)) {
      const stats = fs.statSync(destPath);
      console.log(`Saved ${d.dest} (${(stats.size / 1024).toFixed(1)} KB)`);
    }
  } catch (err) {
    console.error(`Failed ${d.dest}:`, err.message);
  }
});

