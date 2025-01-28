import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const InstagramDownloader = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleDownload = async () => {
    if (!url) {
      setError("Please enter a valid Instagram URL.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      // Mock API call
      const res = await axios.post("https://mockapi.com/instagram-download", { url });
      setResponse(res.data);
    } catch (err) {
      setError("Failed to download content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 flex justify-center items-center p-4">
      <head>
        <title>Instagram Downloader - Download Instagram Photos and Videos</title>
        <meta name="description" content="Easily download Instagram videos and photos along with captions using our fast and reliable Instagram Downloader app." />
        <meta name="keywords" content="Instagram Downloader, Download Instagram Videos, Download Instagram Photos, Save Instagram Media, Instagram Caption Downloader" />
        <meta name="author" content="Your Company Name" />
      </head>
      <div className="text-center w-full max-w-md flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6 text-white">Instagram Downloader</h1>
        <p className="mb-6 text-gray-100">Easily download Instagram photos and videos with captions. Paste the URL, click download, and get your content in seconds!</p>
        <div className="w-full">
          <Card className="shadow-xl">
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">Step 1: Enter Instagram URL</h2>
              <Input
                type="text"
                placeholder="Paste Instagram video or photo URL here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="mb-4"
              />
              <Button
                onClick={handleDownload}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                disabled={loading}
              >
                {loading ? "Downloading..." : "Download"}
              </Button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </CardContent>
          </Card>

          {response && (
            <Card className="shadow-xl mt-6">
              <CardContent>
                <h2 className="text-xl font-semibold mb-4">Step 2: Download Your Content</h2>
                <img
                  src={response.mediaUrl}
                  alt="Instagram content"
                  className="w-full rounded mb-4"
                />
                <p className="mb-4">{response.caption}</p>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open(response.mediaUrl, "_blank")}
                >
                  Download Now
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstagramDownloader;

/*** Deployment Instructions on Netlify ***/
// 1. Install Netlify CLI globally: npm install -g netlify-cli
// 2. Build your React app: npm run build
// 3. Initialize a Netlify project: netlify init
// 4. Deploy to Netlify: netlify deploy
// 5. Select the "build" folder when prompted.
// 6. Follow the Netlify URL to see your deployed app. 

/*** Note: Update the API endpoint with a valid Instagram downloader API. */

