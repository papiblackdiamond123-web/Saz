// ===== WORLDSTREAM - MAIN JS =====

// ---- Header Interactions ----
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');

if (hamburger) {
  hamburger.addEventListener('click', () => mainNav.classList.toggle('open'));
}
if (searchToggle) {
  searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) searchInput.focus();
  });
}
if (closeSearch) {
  closeSearch.addEventListener('click', () => searchBar.classList.remove('open'));
}

// ---- Player Modal ----
const playerModal = document.getElementById('playerModal');
const playerOverlay = document.getElementById('playerOverlay');
const playerClose = document.getElementById('playerClose');
const playerIframe = document.getElementById('playerIframe');
const playerTitle = document.getElementById('playerTitle');
const playerCountry = document.getElementById('playerCountry');
const playerCategory = document.getElementById('playerCategory');
const playerBody = document.getElementById('playerBody');

function openPlayer(channel) {
  if (!playerModal) return;
  playerTitle.textContent = channel.name;
  const c = COUNTRIES.find(x => x.code === channel.country);
  const cat = CATEGORIES.find(x => x.id === channel.category);
  playerCountry.textContent = c ? `${c.flag} ${c.name}` : '';
  playerCategory.textContent = cat ? `${cat.icon} ${cat.name}` : '';

  // Clear previous
  playerBody.innerHTML = '';

  if (channel.type === 'youtube') {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${channel.youtubeId}?autoplay=1&mute=0`;
    iframe.allow = 'autoplay; encrypted-media; fullscreen';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;';
    playerBody.appendChild(iframe);
  } else if (channel.type === 'audio') {
    const audio = document.createElement('audio');
    audio.src = channel.stream;
    audio.controls = true;
    audio.autoplay = true;
    audio.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;';
    playerBody.appendChild(audio);
  } else if (channel.type === 'iframe') {
    const iframe = document.createElement('iframe');
    iframe.src = channel.embed;
    iframe.allow = 'autoplay; encrypted-media; fullscreen';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;';
    playerBody.appendChild(iframe);
  }

  playerModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePlayer() {
  if (!playerModal) return;
  playerModal.classList.remove('open');
  playerBody.innerHTML = '';
  document.body.style.overflow = '';
}

if (playerOverlay) playerOverlay.addEventListener('click', closePlayer);
if (playerClose) playerClose.addEventListener('click', closePlayer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePlayer(); });

// ---- Render Helpers ----
function getCountryName(code) {
  const c = COUNTRIES.find(x => x.code === code);
  return c ? `${c.flag} ${c.name}` : code.toUpperCase();
}

function getCategoryName(id) {
  const cat = CATEGORIES.find(x => x.id === id);
  return cat ? `${cat.icon} ${cat.name}` : id;
}

function renderChannelCard(ch) {
  const card = document.createElement('div');
  card.className = 'channel-card';
  card.innerHTML = `
    <div class="channel-logo">${ch.icon || '📺'}</div>
    <div class="channel-info">
      <div class="channel-name">${ch.name}</div>
      <div class="channel-meta">
        <span class="live-badge">LIVE</span>
        <span>${getCountryName(ch.country)}</span>
      </div>
      <div class="channel-meta" style="margin-top:4px;">${getCategoryName(ch.category)}</div>
    </div>
  `;
  card.addEventListener('click', () => openPlayer(ch));
  return card;
}

function renderRadioCard(station) {
  const card = document.createElement('div');
  card.className = 'radio-card';
  card.innerHTML = `
    <div class="radio-icon">${station.icon}</div>
    <div>
      <div class="radio-name">${station.name}</div>
      <div class="radio-meta">${getCountryName(station.country)} · ${getCategoryName(station.category)}</div>
    </div>
    <div class="play-btn">▶</div>
  `;
  card.addEventListener('click', () => openPlayer(station));
  return card;
}

// ---- Homepage Init ----
function initHomepage() {
  // Featured Channels
  const featuredEl = document.getElementById('featuredChannels');
  if (featuredEl) {
    TV_CHANNELS.slice(0, 12).forEach(ch => featuredEl.appendChild(renderChannelCard(ch)));
  }

  // Countries Grid
  const countriesEl = document.getElementById('countriesGrid');
  if (countriesEl) {
    COUNTRIES.slice(0, 18).forEach(country => {
      const card = document.createElement('a');
      card.className = 'country-card';
      card.href = `pages/country.html?c=${country.code}`;
      card.innerHTML = `
        <span class="country-flag">${country.flag}</span>
        <div class="country-info">
          <div class="country-name">${country.name}</div>
          <div class="country-count">${country.channels} channels</div>
        </div>
      `;
      countriesEl.appendChild(card);
    });
  }

  // Categories Grid
  const catsEl = document.getElementById('categoriesGrid');
  if (catsEl) {
    CATEGORIES.forEach(cat => {
      const card = document.createElement('a');
      card.className = 'category-card';
      card.href = `pages/categories.html?cat=${cat.id}`;
      card.innerHTML = `
        <span class="cat-icon">${cat.icon}</span>
        <span class="cat-name">${cat.name}</span>
        <span style="font-size:11px;color:var(--text3)">${cat.count} channels</span>
      `;
      catsEl.appendChild(card);
    });
  }

  // Radio Grid
  const radioEl = document.getElementById('radioGrid');
  if (radioEl) {
    RADIO_STATIONS.slice(0, 8).forEach(station => radioEl.appendChild(renderRadioCard(station)));
  }
}

// ---- TV Page ----
function initTvPage() {
  const gridEl = document.getElementById('tvGrid');
  const filterBar = document.getElementById('tvFilterBar');
  if (!gridEl) return;

  let activeFilter = 'all';

  function renderGrid(filter) {
    gridEl.innerHTML = '';
    const filtered = filter === 'all' 
      ? TV_CHANNELS 
      : TV_CHANNELS.filter(ch => ch.category === filter || ch.country === filter);
    filtered.forEach(ch => gridEl.appendChild(renderChannelCard(ch)));
    if (filtered.length === 0) {
      gridEl.innerHTML = '<p style="color:var(--text3);grid-column:1/-1;text-align:center;padding:40px;">No channels found.</p>';
    }
  }

  if (filterBar) {
    const allBtn = filterBar.querySelector('[data-filter="all"]');
    filterBar.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        renderGrid(activeFilter);
      });
    });
  }

  renderGrid('all');
}

// ---- Radio Page ----
function initRadioPage() {
  const gridEl = document.getElementById('radioPageGrid');
  if (!gridEl) return;
  RADIO_STATIONS.forEach(station => gridEl.appendChild(renderRadioCard(station)));
}

// ---- Countries Page ----
function initCountriesPage() {
  const gridEl = document.getElementById('allCountriesGrid');
  if (!gridEl) return;
  COUNTRIES.forEach(country => {
    const card = document.createElement('a');
    card.className = 'country-card';
    card.href = `country.html?c=${country.code}`;
    card.style.cssText = 'display:flex;align-items:center;gap:12px;';
    card.innerHTML = `
      <span class="country-flag">${country.flag}</span>
      <div class="country-info">
        <div class="country-name">${country.name}</div>
        <div class="country-count">${country.channels} channels</div>
      </div>
    `;
    gridEl.appendChild(card);
  });
}

// ---- Country Page ----
function initCountryPage() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('c');
  const country = COUNTRIES.find(c => c.code === code);
  if (!country) return;

  document.getElementById('countryTitle') && (document.getElementById('countryTitle').textContent = `${country.flag} ${country.name}`);
  document.getElementById('countrySubtitle') && (document.getElementById('countrySubtitle').textContent = `${country.channels} channels and stations`);

  const channels = TV_CHANNELS.filter(ch => ch.country === code);
  const radios = RADIO_STATIONS.filter(r => r.country === code);

  const tvGrid = document.getElementById('countryTvGrid');
  if (tvGrid) {
    if (channels.length === 0) {
      tvGrid.innerHTML = '<p style="color:var(--text3);grid-column:1/-1;">No TV channels yet for this country.</p>';
    } else {
      channels.forEach(ch => tvGrid.appendChild(renderChannelCard(ch)));
    }
  }

  const rGrid = document.getElementById('countryRadioGrid');
  if (rGrid) {
    if (radios.length === 0) {
      rGrid.innerHTML = '<p style="color:var(--text3);grid-column:1/-1;">No radio stations yet for this country.</p>';
    } else {
      radios.forEach(r => rGrid.appendChild(renderRadioCard(r)));
    }
  }
}

// ---- Categories Page ----
function initCategoriesPage() {
  const params = new URLSearchParams(window.location.search);
  const catId = params.get('cat');
  const gridEl = document.getElementById('catGrid');
  const allCatsEl = document.getElementById('allCatsGrid');

  if (allCatsEl) {
    CATEGORIES.forEach(cat => {
      const card = document.createElement('a');
      card.className = 'category-card';
      card.href = `categories.html?cat=${cat.id}`;
      card.innerHTML = `<span class="cat-icon">${cat.icon}</span><span class="cat-name">${cat.name}</span><span style="font-size:11px;color:var(--text3)">${cat.count} channels</span>`;
      allCatsEl.appendChild(card);
    });
  }

  if (gridEl && catId) {
    const channels = TV_CHANNELS.filter(ch => ch.category === catId);
    channels.forEach(ch => gridEl.appendChild(renderChannelCard(ch)));
    const cat = CATEGORIES.find(c => c.id === catId);
    const titleEl = document.getElementById('catTitle');
    if (titleEl && cat) titleEl.textContent = `${cat.icon} ${cat.name}`;
  }
}

// ---- Search ----
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();
    if (!query) return;
    const results = [
      ...TV_CHANNELS.filter(ch => ch.name.toLowerCase().includes(query) || ch.country.includes(query)),
      ...RADIO_STATIONS.filter(r => r.name.toLowerCase().includes(query))
    ];
    // Show results as dropdown in a simple way
    const existingDropdown = document.getElementById('searchDropdown');
    if (existingDropdown) existingDropdown.remove();
    if (results.length > 0) {
      const dropdown = document.createElement('div');
      dropdown.id = 'searchDropdown';
      dropdown.style.cssText = `
        position:absolute;top:100%;left:0;right:0;background:var(--bg2);
        border:1px solid var(--border);border-radius:0 0 12px 12px;
        max-height:300px;overflow-y:auto;z-index:1001;
      `;
      results.slice(0, 8).forEach(item => {
        const row = document.createElement('div');
        row.style.cssText = 'padding:12px 20px;cursor:pointer;display:flex;align-items:center;gap:12px;border-bottom:1px solid var(--border);transition:0.2s;';
        row.innerHTML = `<span style="font-size:20px;">${item.icon}</span><div><div style="font-size:14px;font-weight:600;">${item.name}</div><div style="font-size:12px;color:var(--text3);">${getCountryName(item.country)}</div></div>`;
        row.addEventListener('mouseenter', () => row.style.background = 'var(--surface)');
        row.addEventListener('mouseleave', () => row.style.background = '');
        row.addEventListener('click', () => {
          openPlayer(item);
          searchBar.classList.remove('open');
          dropdown.remove();
        });
        dropdown.appendChild(row);
      });
      searchBar.querySelector('.container').style.position = 'relative';
      searchBar.querySelector('.container').appendChild(dropdown);
    }
  });
}

// ---- Page Routing ----
const path = window.location.pathname;
if (path.includes('tv.html')) initTvPage();
else if (path.includes('radio.html')) initRadioPage();
else if (path.includes('countries.html')) initCountriesPage();
else if (path.includes('country.html')) initCountryPage();
else if (path.includes('categories.html')) initCategoriesPage();
else initHomepage();
