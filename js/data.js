// ===== WORLDSTREAM DATA =====
// All streams use publicly available embed-friendly sources

const COUNTRIES = [
  { code: 'us', name: 'United States', flag: '🇺🇸', channels: 320, cpc: 'high' },
  { code: 'uk', name: 'United Kingdom', flag: '🇬🇧', channels: 210, cpc: 'high' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦', channels: 145, cpc: 'high' },
  { code: 'au', name: 'Australia', flag: '🇦🇺', channels: 120, cpc: 'high' },
  { code: 'de', name: 'Germany', flag: '🇩🇪', channels: 180, cpc: 'high' },
  { code: 'fr', name: 'France', flag: '🇫🇷', channels: 165, cpc: 'high' },
  { code: 'nl', name: 'Netherlands', flag: '🇳🇱', channels: 90, cpc: 'high' },
  { code: 'ch', name: 'Switzerland', flag: '🇨🇭', channels: 75, cpc: 'high' },
  { code: 'no', name: 'Norway', flag: '🇳🇴', channels: 65, cpc: 'high' },
  { code: 'se', name: 'Sweden', flag: '🇸🇪', channels: 80, cpc: 'high' },
  { code: 'dk', name: 'Denmark', flag: '🇩🇰', channels: 60, cpc: 'high' },
  { code: 'fi', name: 'Finland', flag: '🇫🇮', channels: 55, cpc: 'high' },
  { code: 'sg', name: 'Singapore', flag: '🇸🇬', channels: 85, cpc: 'high' },
  { code: 'jp', name: 'Japan', flag: '🇯🇵', channels: 195, cpc: 'high' },
  { code: 'kr', name: 'South Korea', flag: '🇰🇷', channels: 140, cpc: 'high' },
  { code: 'nz', name: 'New Zealand', flag: '🇳🇿', channels: 55, cpc: 'high' },
  { code: 'in', name: 'India', flag: '🇮🇳', channels: 380, cpc: 'medium' },
  { code: 'br', name: 'Brazil', flag: '🇧🇷', channels: 220, cpc: 'medium' },
  { code: 'mx', name: 'Mexico', flag: '🇲🇽', channels: 175, cpc: 'medium' },
  { code: 'za', name: 'South Africa', flag: '🇿🇦', channels: 95, cpc: 'medium' },
  { code: 'ng', name: 'Nigeria', flag: '🇳🇬', channels: 110, cpc: 'medium' },
  { code: 'eg', name: 'Egypt', flag: '🇪🇬', channels: 130, cpc: 'medium' },
  { code: 'tr', name: 'Turkey', flag: '🇹🇷', channels: 155, cpc: 'medium' },
  { code: 'ar', name: 'Argentina', flag: '🇦🇷', channels: 125, cpc: 'medium' },
  { code: 'pk', name: 'Pakistan', flag: '🇵🇰', channels: 95, cpc: 'low' },
  { code: 'bd', name: 'Bangladesh', flag: '🇧🇩', channels: 75, cpc: 'low' },
  { code: 'cn', name: 'China', flag: '🇨🇳', channels: 285, cpc: 'medium' },
  { code: 'ru', name: 'Russia', flag: '🇷🇺', channels: 200, cpc: 'medium' },
  { code: 'id', name: 'Indonesia', flag: '🇮🇩', channels: 165, cpc: 'low' },
  { code: 'ph', name: 'Philippines', flag: '🇵🇭', channels: 90, cpc: 'low' },
];

const CATEGORIES = [
  { id: 'news', name: 'News', icon: '📰', count: 850 },
  { id: 'sports', name: 'Sports', icon: '⚽', count: 430 },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬', count: 720 },
  { id: 'music', name: 'Music', icon: '🎵', count: 380 },
  { id: 'kids', name: 'Kids', icon: '🧒', count: 290 },
  { id: 'documentary', name: 'Documentary', icon: '🎞️', count: 210 },
  { id: 'cooking', name: 'Food & Cooking', icon: '🍳', count: 145 },
  { id: 'nature', name: 'Nature', icon: '🌿', count: 130 },
  { id: 'business', name: 'Business', icon: '💼', count: 175 },
  { id: 'religion', name: 'Religion', icon: '🕊️', count: 265 },
  { id: 'science', name: 'Science & Tech', icon: '🔬', count: 95 },
  { id: 'fashion', name: 'Fashion', icon: '👗', count: 80 },
];

// TV Channels - using publicly embeddable/publicly known streams
const TV_CHANNELS = [
  // USA
  {
    id: 'abc-news',
    name: 'ABC News Live',
    country: 'us',
    category: 'news',
    icon: '📺',
    embed: 'https://abcnews.go.com/live',
    youtubeId: 'w_Ma8oQLmSM',
    type: 'youtube',
    description: 'ABC News 24/7 live stream'
  },
  {
    id: 'cbs-news',
    name: 'CBS News 24/7',
    country: 'us',
    category: 'news',
    icon: '📺',
    youtubeId: 'eY3vjuBO-Gk',
    type: 'youtube',
    description: 'CBS News live stream'
  },
  {
    id: 'nbc-news',
    name: 'NBC News NOW',
    country: 'us',
    category: 'news',
    icon: '📺',
    youtubeId: 'lKSMiHEEwN8',
    type: 'youtube',
    description: 'NBC News live stream'
  },
  {
    id: 'fox-weather',
    name: 'FOX Weather',
    country: 'us',
    category: 'news',
    icon: '🌤️',
    youtubeId: 'b3oSMDTfTqQ',
    type: 'youtube',
    description: 'FOX Weather 24/7'
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg TV',
    country: 'us',
    category: 'business',
    icon: '💹',
    youtubeId: 'dp8PhLsUcFEq',
    type: 'youtube',
    description: 'Bloomberg business & finance'
  },
  {
    id: 'nasa-tv',
    name: 'NASA TV',
    country: 'us',
    category: 'science',
    icon: '🚀',
    youtubeId: '21X5lGlDOfg',
    type: 'youtube',
    description: 'NASA live TV'
  },
  // UK
  {
    id: 'sky-news',
    name: 'Sky News',
    country: 'uk',
    category: 'news',
    icon: '📡',
    youtubeId: '9Auq9mYxFEE',
    type: 'youtube',
    description: 'Sky News UK live'
  },
  {
    id: 'gb-news',
    name: 'GB News',
    country: 'uk',
    category: 'news',
    icon: '🇬🇧',
    youtubeId: 'MH0lsJ6o1po',
    type: 'youtube',
    description: 'GB News UK'
  },
  // France
  {
    id: 'france24-en',
    name: 'France 24 (EN)',
    country: 'fr',
    category: 'news',
    icon: '🇫🇷',
    youtubeId: 'h3MuIUNCCLI',
    type: 'youtube',
    description: 'France 24 in English'
  },
  {
    id: 'france24-fr',
    name: 'France 24 (FR)',
    country: 'fr',
    category: 'news',
    icon: '🇫🇷',
    youtubeId: 'SasaLLGODGE',
    type: 'youtube',
    description: 'France 24 en Français'
  },
  // Germany
  {
    id: 'dw-en',
    name: 'DW News (EN)',
    country: 'de',
    category: 'news',
    icon: '🇩🇪',
    youtubeId: 'mGFSSMYGlqI',
    type: 'youtube',
    description: 'Deutsche Welle English'
  },
  // Al Jazeera
  {
    id: 'aljazeera',
    name: 'Al Jazeera English',
    country: 'eg',
    category: 'news',
    icon: '🌍',
    youtubeId: 'omMlyRDgDkE',
    type: 'youtube',
    description: 'Al Jazeera live news'
  },
  // India
  {
    id: 'ndtv',
    name: 'NDTV 24x7',
    country: 'in',
    category: 'news',
    icon: '🇮🇳',
    youtubeId: 'LCkh7D5BQQU',
    type: 'youtube',
    description: 'NDTV India news'
  },
  {
    id: 'wion',
    name: 'WION News',
    country: 'in',
    category: 'news',
    icon: '🌐',
    youtubeId: 'JNbXDXFmVPM',
    type: 'youtube',
    description: 'World Is One News'
  },
  // Japan
  {
    id: 'nhk-world',
    name: 'NHK World Japan',
    country: 'jp',
    category: 'news',
    icon: '🇯🇵',
    youtubeId: 'A0iFZbBEMkI',
    type: 'youtube',
    description: 'NHK World live stream'
  },
  // South Korea
  {
    id: 'arirang',
    name: 'Arirang TV',
    country: 'kr',
    category: 'entertainment',
    icon: '🇰🇷',
    youtubeId: '05JzDxjS_sA',
    type: 'youtube',
    description: 'Korea\'s global TV channel'
  },
  // Russia
  {
    id: 'rt-en',
    name: 'RT (English)',
    country: 'ru',
    category: 'news',
    icon: '🇷🇺',
    youtubeId: 'IFAcqaNbMQY',
    type: 'youtube',
    description: 'Russia Today English'
  },
  // Nigeria
  {
    id: 'channels-ng',
    name: 'Channels TV Nigeria',
    country: 'ng',
    category: 'news',
    icon: '🇳🇬',
    youtubeId: 'bS2KxjhHwgY',
    type: 'youtube',
    description: 'Channels Television Nigeria'
  },
  // Australia
  {
    id: 'abc-au',
    name: 'ABC News Australia',
    country: 'au',
    category: 'news',
    icon: '🇦🇺',
    youtubeId: '3GrqnfVtGkA',
    type: 'youtube',
    description: 'ABC News Australia live'
  },
  // Sports
  {
    id: 'bein-sports',
    name: 'beIN Sports Preview',
    country: 'us',
    category: 'sports',
    icon: '⚽',
    youtubeId: 'KBs5qrPFt0k',
    type: 'youtube',
    description: 'beIN Sports channel'
  },
];

// Radio Stations
const RADIO_STATIONS = [
  { id: 'bbc-ws', name: 'BBC World Service', country: 'uk', category: 'news', icon: '📻', stream: 'http://stream.live.vc.bbcmedia.co.uk/bbc_world_service', type: 'audio' },
  { id: 'bbc-r1', name: 'BBC Radio 1', country: 'uk', category: 'music', icon: '🎵', youtubeId: 'DybLm1TXPQA', type: 'youtube' },
  { id: 'npr-us', name: 'NPR News', country: 'us', category: 'news', icon: '🎙️', stream: 'https://npr-ice.streamguys1.com/live.mp3', type: 'audio' },
  { id: 'kiss-fm', name: 'Kiss FM USA', country: 'us', category: 'music', icon: '🔥', stream: 'https://rfcmedia2.streamguys1.com/MusicChoice.mp3', type: 'audio' },
  { id: 'rtl-de', name: 'RTL Radio Germany', country: 'de', category: 'music', icon: '🎶', stream: 'https://streaming.rtl.de/rtl-radio/mp3-192/stream.mp3', type: 'audio' },
  { id: 'nrj-fr', name: 'NRJ France', country: 'fr', category: 'music', icon: '⚡', stream: 'https://scdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3', type: 'audio' },
  { id: 'radio-mirchi', name: 'Radio Mirchi India', country: 'in', category: 'music', icon: '🌶️', stream: 'https://air.pc.cdn.bitgravity.com/aac/live/mirchi98.mp3', type: 'audio' },
  { id: 'hit-fm-br', name: 'Hit FM Brazil', country: 'br', category: 'music', icon: '🎵', stream: 'https://server1.radiolive.com.br:8000/hitfm', type: 'audio' },
  { id: 'triple-j', name: 'Triple J Australia', country: 'au', category: 'music', icon: '🦘', stream: 'https://live-radio01.mediahubaustralia.com/2TJW/aac/', type: 'audio' },
  { id: 'nhk-r1', name: 'NHK Radio Japan', country: 'jp', category: 'news', icon: '🎌', stream: 'https://nhkworld.nhk.or.jp/en/radio/program/detail/2025/', type: 'audio' },
];

// Export
if (typeof module !== 'undefined') {
  module.exports = { COUNTRIES, CATEGORIES, TV_CHANNELS, RADIO_STATIONS };
}
