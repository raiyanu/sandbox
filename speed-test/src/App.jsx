import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);

  async function getNetworkDownloadSpeed() {
    const fileSizeInBytes = 1 * 1000000;
    const baseUrl = `https://eu.httpbin.org/stream-bytes/${fileSizeInBytes}`;

    const startTime = performance.now();
    await fetch(baseUrl);
    const endTime = performance.now();

    const durationInSeconds = (endTime - startTime) / 1000; // Convert ms to seconds
    const speed = (fileSizeInBytes / durationInSeconds) / 1024; // Speed in KB/s
    setDownloadSpeed(speed);
    console.log(`Download Speed: ${speed.toFixed(2)} KB/s`);
  }

  async function getNetworkUploadSpeed() {
    const url = 'https://httpbin.org/post'; // Example upload endpoint
    const fileSizeInBytes = 2000000;
    const data = new Array(fileSizeInBytes).fill('a').join(''); // Creating dummy data

    const startTime = performance.now();
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
    const endTime = performance.now();

    const durationInSeconds = (endTime - startTime) / 1000; // Convert ms to seconds
    const speed = (fileSizeInBytes / durationInSeconds) / 1024; // Speed in KB/s
    setUploadSpeed(speed);
    console.log(`Upload Speed: ${speed.toFixed(2)} KB/s`);
  }

  useEffect(() => {
    (async () => {
      console.log("Testing...");
	console.clear();
	await getNetworkDownloadSpeed();
	await getNetworkDownloadSpeed();
      await getNetworkUploadSpeed();
    })();
  }, []);

  return (
    <>
      <h1>Network Speed Test</h1>
      {downloadSpeed !== null && <p>Download Speed: {downloadSpeed.toFixed(2)} KB/s</p>}
      {uploadSpeed !== null && <p>Upload Speed: {uploadSpeed.toFixed(2)} KB/s</p>}
    </>
  );
}

export default App;

