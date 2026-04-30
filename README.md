# 🌍 WorldStream – Live TV & Radio Streaming Website

A **professional, AdSense-ready** live TV and radio streaming website covering 150+ countries with 5,000+ channels.

## 📁 Project Structure

```
worldstream/
├── index.html              ← Homepage
├── pages/
│   ├── tv.html             ← Live TV page
│   ├── radio.html          ← Live Radio page
│   ├── countries.html      ← All countries
│   ├── country.html        ← Individual country (uses ?c= param)
│   ├── categories.html     ← Browse by category
│   ├── about.html          ← About page
│   ├── contact.html        ← Contact form
│   ├── privacy.html        ← Privacy Policy (required for AdSense)
│   ├── terms.html          ← Terms of Use
│   └── dmca.html           ← DMCA notice
├── css/
│   └── style.css           ← Main stylesheet
├── js/
│   ├── data.js             ← All channels, countries, categories data
│   └── main.js             ← All JS logic, player modal
├── vercel.json             ← Vercel deployment config
├── robots.txt              ← SEO robots
├── sitemap.xml             ← SEO sitemap
└── README.md
```

## 🚀 Deploy to GitHub + Vercel

### Step 1 — Push to GitHub
```bash
cd worldstream
git init
git add .
git commit -m "Initial commit: WorldStream live TV & radio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/worldstream.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to **https://vercel.com** and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `worldstream` repository
4. Leave all settings default (static site auto-detected)
5. Click **Deploy** ✅

Your site will be live at: `https://worldstream.vercel.app`

## 💰 Enable Google AdSense

1. Apply at **https://adsense.google.com**
2. Once approved, get your **Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXXX`)
3. In `index.html` (and all pages), uncomment and update:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID" crossorigin="anonymous"></script>
```
4. Replace all `ad-placeholder` divs with real `<ins class="adsbygoogle">` tags
5. Add your **Data-ad-slot** IDs from AdSense dashboard

### Ad Placements (Already Structured)
| Location | Format | Size |
|---|---|---|
| Top of each page | Leaderboard | 728×90 |
| Mid-page | Rectangle | 300×250 |
| Bottom of each page | Leaderboard | 728×90 |

## 🌍 High CPC Countries Covered
USA, UK, Canada, Australia, Germany, France, Netherlands, Switzerland, Norway, Sweden, Denmark, Finland, Singapore, Japan, South Korea, New Zealand

## 📺 Adding More Channels

In `js/data.js`, add to the `TV_CHANNELS` array:
```js
{
  id: 'unique-id',
  name: 'Channel Name',
  country: 'us',        // country code from COUNTRIES array
  category: 'news',     // category id from CATEGORIES array
  icon: '📺',
  youtubeId: 'YOUTUBE_VIDEO_ID',  // YouTube live stream ID
  type: 'youtube',
  description: 'Description'
}
```

## 📻 Adding Radio Stations

```js
{
  id: 'unique-id',
  name: 'Station Name',
  country: 'uk',
  category: 'music',
  icon: '📻',
  stream: 'https://stream-url.mp3',  // Direct audio stream URL
  type: 'audio'
}
```

## ✅ AdSense Approval Checklist
- [x] Privacy Policy page
- [x] Terms of Use page
- [x] DMCA / Copyright page
- [x] About Us page
- [x] Contact page
- [x] robots.txt
- [x] sitemap.xml
- [x] SEO meta tags on all pages
- [x] No copyrighted content hosted
- [x] Ad unit placeholders ready
- [x] Mobile responsive design
- [x] Fast loading (no large assets)

## 🔧 Customization

- **Colors**: Edit CSS variables in `css/style.css` under `:root`
- **Logo**: Replace the `▶` emoji and text in header
- **Domain**: Update `sitemap.xml` URLs after setting custom domain
- **Analytics**: Add Google Analytics 4 tag in `<head>` of all pages
