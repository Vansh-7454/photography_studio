const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const downloads = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/services/service-royal.jpg' },
  { url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/services/service-traditional.jpg' },
  { url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/services/service-intimate.jpg' },
  { url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/journal/journal-lighting.jpg' },
  { url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/journal/journal-album.jpg' },
  { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/journal/journal-documentary.jpg' },
  { url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/films/film-jodhpur.jpg' },
  { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/contact/studio-contact.jpg' }
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

