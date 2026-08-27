const https = require('https');
const urls = [
'https://ibb.co/2GcgsDC', 'https://ibb.co/3Y9xSrGk', 'https://ibb.co/8LVMk8Gs',
'https://ibb.co/MyWStm4r', 'https://ibb.co/C5y6j0hk', 'https://ibb.co/RT5F1Z4v',
'https://ibb.co/wZxmHhrm', 'https://ibb.co/XrGGX2sp', 'https://ibb.co/TByHhybK',
'https://ibb.co/pjhd9Jf6', 'https://ibb.co/fzRXsLk6', 'https://ibb.co/4whHnmLx',
'https://ibb.co/q3P3Yj2t', 'https://ibb.co/nN1SMDYG', 'https://ibb.co/Pz0c9M2G',
'https://ibb.co/d0w4M4HP', 'https://ibb.co/6RqQD483', 'https://ibb.co/fzff0TPS'
];

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  for (const url of urls) {
    try {
      const html = await fetchHtml(url);
      const match = html.match(/<meta property="og:image" content="(https:\/\/i\.ibb\.co\/[^"]+)"/);
      if (match && match[1]) {
        console.log(`Original: ${url} -> Direct: ${match[1]}`);
      }
    } catch (e) {}
  }
}
main();
