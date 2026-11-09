const { spawn, execSync } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const pages = [
  { name: 'home', path: '/' },
  { name: 'our-story', path: '/our-story' },
  { name: 'portfolio', path: '/portfolio' },
  { name: 'wedding-films', path: '/wedding-films' },
  { name: 'services-packages', path: '/services-packages' },
  { name: 'journal', path: '/journal' },
  { name: 'contact', path: '/contact' }
];

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

async function checkServer(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}`, (res) => {
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.end();
  });
}

async function waitForServer(port, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await checkServer(port)) return true;
    await new Promise((r) => setTimeout(r, 600));
  }
  return false;
}

async function run() {
  const qaDir = path.join(__dirname, '..', 'qa');
  if (!fs.existsSync(qaDir)) fs.mkdirSync(qaDir, { recursive: true });

  const port = 3000;
  console.log(`Starting next server on port ${port}...`);
  const server = spawn('npx', ['next', 'start', '-p', String(port)], {
    shell: true,
    stdio: 'ignore'
  });

  const ready = await waitForServer(port);
  if (!ready) {
    console.error('Server did not start in time');
    server.kill();
    process.exit(1);
  }

  console.log('Server is running. Capturing screenshots...');

  for (const page of pages) {
    for (const vp of viewports) {
      const outPath = path.join(qaDir, `${page.name}-${vp.name}.png`);
      const url = `http://localhost:${port}${page.path}`;
      const cmd = `"${edgePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=${vp.width},${vp.height} --screenshot="${outPath}" "${url}"`;
      try {
        execSync(cmd, { stdio: 'ignore' });
        console.log(`Captured: ${page.name} (${vp.name}) -> ${outPath}`);
      } catch (err) {
        console.error(`Failed to capture ${page.name} (${vp.name}):`, err.message);
      }
    }
  }

  console.log('All screenshots captured!');
  server.kill();
  try {
    execSync('taskkill /F /IM node.exe /T', { stdio: 'ignore' });
  } catch (e) {}
}

run();

