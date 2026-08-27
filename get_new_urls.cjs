const https = require('https');
const urls = [
'https://ibb.co/zWCD89XX', 'https://ibb.co/JFzM5WsY', 'https://ibb.co/mCsTkQ7Z',
'https://ibb.co/Jjb76v73', 'https://ibb.co/yBx7kxMK', 'https://ibb.co/B5S9Tjyp',
'https://ibb.co/rf7NssVR', 'https://ibb.co/C530SZf4', 'https://ibb.co/BHYzp0nb',
'https://ibb.co/WNDWPVpd', 'https://ibb.co/pvxMHKGj', 'https://ibb.co/C53RMk0d',
'https://ibb.co/tPYbYNFr', 'https://ibb.co/F4pWgwpN', 'https://ibb.co/hRn1dMZr',
'https://ibb.co/DPKHybcD', 'https://ibb.co/mrZLcJ9h', 'https://ibb.co/6RWprD6h'
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
        console.log(`'${match[1]}',`);
      }
    } catch (e) {}
  }
}
main();
