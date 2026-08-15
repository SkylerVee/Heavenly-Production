const movies = [
  {
    id: 1,
    title: 'The Silence before Dawn',
    genre: 'Drama',
    hook: 'A mother chooses her future over the past that shaped her.',
    price: 500,
    poster: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
    trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    movieUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    synopsis: 'As old family wounds resurface, a determined woman must decide whether to leave behind the life that built her or surrender to the silence she has carried for years. The film follows her through a difficult season of loss, forgiveness, and reinvention as she chooses a new future for herself and her daughter.',
    runtime: '1h 58m',
    language: 'English / Swahili',
    year: '2026',
    director: 'Njeri Wambui',
    producer: 'Daniel Kibet',
    leadCast: ['Akinyi M.', 'Joseph W.'],
    supportingCast: ['Zahra N.'],
    gallery: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80' }
    ],
    castCrew: [
      {
        id: 101,
        name: 'Njeri Wambui',
        role: 'Director',
        category: 'Director',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        bio: 'Award-winning Kenyan director focusing on deep, character-driven family dramas.'
      },
      {
        id: 102,
        name: 'Daniel Kibet',
        role: 'Producer',
        category: 'Producer',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        bio: 'Experienced producer dedicated to raising the standard of East African cinema.'
      },
      {
        id: 103,
        name: 'Akinyi M.',
        role: 'Wanjiru (Lead)',
        category: 'Lead Cast',
        photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
        bio: 'Lead actress known for powerful emotional range and theatrical background.'
      },
      {
        id: 104,
        name: 'Joseph W.',
        role: 'David (Lead)',
        category: 'Lead Cast',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        bio: 'Veteran actor delivering authentic performances across feature films.'
      },
      {
        id: 105,
        name: 'Zahra N.',
        role: 'Auntie Mary (Supporting)',
        category: 'Supporting Cast',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
        bio: 'Versatile performer bringing warmth and humor to crucial ensemble moments.'
      }
    ]
  },
  {
    id: 2,
    title: 'Before the Dawn',
    genre: 'Romance',
    hook: 'Two lives reconnect in the middle of a city that never slows down.',
    price: 450,
    poster: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    movieUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    synopsis: 'A former couple meets again during a stormy Nairobi season, forcing them to confront a love that was left unfinished and a future neither expected. The story unfolds in quiet streets, late conversations, and moments of emotional honesty that reveal how healing can begin with courage.',
    runtime: '1h 42m',
    language: 'English / Swahili',
    year: '2025',
    director: 'Kiplangat N.',
    producer: 'Daniel Kibet',
    leadCast: ['Wanjiku L.', 'Joel O.'],
    supportingCast: ['Talia M.'],
    gallery: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80' }
    ],
    castCrew: [
      {
        id: 201,
        name: 'Kiplangat N.',
        role: 'Director',
        category: 'Director',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
        bio: 'Director specializing in intimate urban romance and atmospheric visual styles.'
      },
      {
        id: 202,
        name: 'Daniel Kibet',
        role: 'Producer',
        category: 'Producer',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        bio: 'Experienced producer dedicated to raising the standard of East African cinema.'
      },
      {
        id: 203,
        name: 'Wanjiku L.',
        role: 'Nia (Lead)',
        category: 'Lead Cast',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
        bio: 'Dynamic screen talent capturing complex relationships on camera.'
      },
      {
        id: 204,
        name: 'Joel O.',
        role: 'Kev (Lead)',
        category: 'Lead Cast',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
        bio: 'Charismatic lead performer with extensive experience in contemporary drama.'
      }
    ]
  },
  {
    id: 3,
    title: 'A Place Called Home',
    genre: 'Family',
    hook: 'A child’s search for belonging becomes a family’s greatest lesson in love.',
    price: 380,
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    movieUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    synopsis: 'When a young girl asks why her family does not look like the one in her storybook, a quiet journey begins to reveal the beauty of chosen family and resilience. Through music, memory, and difficult truths, the family learns how love can be rebuilt in unexpected ways.',
    runtime: '1h 36m',
    language: 'English',
    year: '2024',
    director: 'Mariam O.',
    producer: 'Daniel Kibet',
    leadCast: ['Muthoni A.', 'Yusuf K.'],
    supportingCast: ['Grace T.'],
    gallery: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80' }
    ],
    castCrew: [
      {
        id: 301,
        name: 'Mariam O.',
        role: 'Director',
        category: 'Director',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
        bio: 'Storyteller exploring themes of community, childhood, and heritage.'
      },
      {
        id: 302,
        name: 'Daniel Kibet',
        role: 'Producer',
        category: 'Producer',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        bio: 'Experienced producer dedicated to raising the standard of East African cinema.'
      },
      {
        id: 303,
        name: 'Muthoni A.',
        role: 'Grace (Lead)',
        category: 'Lead Cast',
        photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
        bio: 'Acclaimed actress specializing in heartwarming family narratives.'
      }
    ]
  },
  {
    id: 4,
    title: 'The Last Promise',
    genre: 'Drama',
    hook: 'A small promise made years ago comes back to test every choice since.',
    price: 620,
    poster: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
    trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    movieUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    synopsis: 'Years after a promise was made to a dying friend, a young man returns to his hometown to make good on the vow he never kept. What begins as a trip home becomes a reckoning with regret, family expectations, and the real meaning of loyalty.',
    runtime: '2h 04m',
    language: 'English / Swahili',
    year: '2026',
    director: 'Samuel Akinyi',
    producer: 'Daniel Kibet',
    leadCast: ['Kevin O.', 'Esther M.'],
    supportingCast: ['Daniel K.'],
    gallery: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80' }
    ],
    castCrew: [
      {
        id: 401,
        name: 'Samuel Akinyi',
        role: 'Director',
        category: 'Director',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        bio: 'Filmmaker focusing on intense personal struggles and atmospheric storytelling.'
      },
      {
        id: 402,
        name: 'Daniel Kibet',
        role: 'Producer',
        category: 'Producer',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        bio: 'Experienced producer dedicated to raising the standard of East African cinema.'
      },
      {
        id: 403,
        name: 'Kevin O.',
        role: 'Samuel (Lead)',
        category: 'Lead Cast',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
        bio: 'Emerging screen star delivering grounded, authentic character work.'
      }
    ]
  },
  {
    id: 5,
    title: 'Rivers of Mercy',
    genre: 'Family',
    hook: 'A community learns that mercy can be louder than fear.',
    price: 540,
    poster: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    movieUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    synopsis: 'During a season of drought and uncertainty, a village elder decides to open the riverbank to families in need, risking everything in the process. The story follows neighbors, children, and a grieving teacher whose lives become unexpectedly connected through the kindness of one act.',
    runtime: '1h 47m',
    language: 'Swahili / English',
    year: '2027',
    director: 'Imani M.',
    producer: 'Daniel Kibet',
    leadCast: ['Sarah A.', 'Peter K.'],
    supportingCast: ['Naila B.'],
    gallery: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80' }
    ],
    castCrew: [
      {
        id: 501,
        name: 'Imani M.',
        role: 'Director',
        category: 'Director',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
        bio: 'Prominent filmmaker celebrated for sweeping regional cinema.'
      },
      {
        id: 502,
        name: 'Daniel Kibet',
        role: 'Producer',
        category: 'Producer',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        bio: 'Experienced producer dedicated to raising the standard of East African cinema.'
      },
      {
        id: 503,
        name: 'Sarah A.',
        role: 'Teacher Rose (Lead)',
        category: 'Lead Cast',
        photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
        bio: 'Beloved actress known for compelling dramatic roles.'
      }
    ]
  }
];

const btsEntries = [
  {
    movieId: 1,
    title: 'The Silence before Dawn',
    excerpt: 'A glimpse into the textures, voices, and locations that shape the film world.',
    fullText: 'From sunrise rehearsals to quiet night takes, this behind-the-scenes diary shows how everyday Nairobi streets became the emotional heart of the film.',
    media: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    movieId: 2,
    title: 'Before the Dawn',
    excerpt: 'How quiet performances and city light turned a romance into a living story.',
    fullText: 'This BTS session explores the emotional rhythm of the film: late-night scenes, intimate performances, and the way city light became part of the romance itself.',
    media: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    movieId: 3,
    title: 'A Place Called Home',
    excerpt: 'The family dynamics, textures, and quiet details behind the film’s emotional pull.',
    fullText: 'The crew created a warm, intimate world by building deeply personal scenes around family rituals, memory, and the comfort of chosen love.',
    media: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    movieId: 4,
    title: 'The Last Promise',
    excerpt: 'A look at the emotional rehearsal, stillness, and atmosphere behind a story of return and regret.',
    fullText: 'This behind-the-scenes look follows the cast into rehearsals, the small details of a hometown set, and the emotional weight carried into every quiet conversation.',
    media: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    movieId: 5,
    title: 'Rivers of Mercy',
    excerpt: 'A behind-the-scenes story about community, care, and the power of simple acts of kindness.',
    fullText: 'The team documented the deep preparation behind this community-driven story, from casting to set design and the care required to make every performance feel truthful.',
    media: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];

const journalPosts = [
  {
    title: 'Why Character Stories Last',
    date: 'August 2026',
    excerpt: 'The emotional truth of a scene matters more than spectacle.',
    fullContent: 'At Heavenly Production, we believe the stories that linger are the ones rooted in honest feeling and human complexity.'
  },
  {
    title: 'Behind the Lens',
    date: 'July 2026',
    excerpt: 'A look at the craft and care behind every frame we shoot.',
    fullContent: 'From lighting to location choice, every decision aims to honor the lived reality of the characters.'
  }
];

let founders = [
  {
    id: 1,
    name: 'Founder One',
    bio: 'Visionary leader with expertise in cinematic storytelling and character development.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Founder Two',
    bio: 'Creative director specializing in authentic narratives and regional cultural representation.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Founder Three',
    bio: 'Producer and screenwriter dedicated to bringing Kenyan stories to global audiences.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
  },
];

const AUTH_USERS = {
  'admin1': 'admin123',
  'admin2': 'admin456',
  'admin3': 'admin789'
};

let state = {
  currentPage: 'Home',
  cart: [],
  myLibrary: [],
  selectedMovie: null,
  selectedCastMovie: null,
  watchingMovie: null,
  genreFilter: 'All',
  searchQuery: '',
  soundOn: false,
  currentUser: localStorage.getItem('currentUser') || null,
  editingCastMember: null
};

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSearch();
  initSoundToggle();
  initMoviesCatalog();
  initCart();

  initHomeSlider();
  initBTSFeed();
  initCastGrid();
  initJournalPosts();
  
  initMobileMenu();
  initAuth();
  renderFounders();

  renderApp();
});

function initNavigation() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-page]');
    if (!target) return;

    const page = target.getAttribute('data-page');
    if (!page) return;

    if (page === 'Movies') {
      state.selectedMovie = null;
    }
    if (page === 'Cast-Crew') {
      state.selectedCastMovie = null;
    }

    const mobileMenu = document.getElementById('mobile-nav-menu');
    if (mobileMenu && mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
    }

    navigateTo(page);
  });

  const logoBtn = document.getElementById('logo-btn');
  if (logoBtn) logoBtn.addEventListener('click', () => navigateTo('Home'));

  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.addEventListener('click', () => navigateTo('Cart'));

  const loginBtn = document.getElementById('login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      if (state.currentUser) {
        navigateTo('Admin');
      } else {
        navigateTo('Login');
      }
    });
  }
  
  const backBtn = document.getElementById('back-to-movies-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      state.selectedMovie = null;
      renderMoviesPage();
    });
  }

  const backWatchBtn = document.getElementById('back-from-watch-btn');
  if (backWatchBtn) {
    backWatchBtn.addEventListener('click', () => {
      const player = document.getElementById('full-movie-player');
      if (player) {
        player.pause();
        player.src = '';
      }
      state.watchingMovie = null;
      navigateTo('My-Account');
    });
  }
}

function initSearch() {
  const toggleBtn = document.getElementById('search-toggle-btn');
  const overlay = document.getElementById('search-overlay');
  const closeBtn = document.getElementById('close-search-btn');
  const searchInput = document.getElementById('search-input');

  if (!toggleBtn || !overlay || !closeBtn || !searchInput) return;

  toggleBtn.addEventListener('click', () => {
    const isVisible = overlay.style.display === 'block';
    overlay.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) searchInput.focus();
  });

  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    if (state.currentPage !== 'Movies') {
      navigateTo('Movies');
    } else {
      renderMoviesCatalogGrid();
    }
  });
}

function navigateTo(pageName) {
  const normalizedPage = pageName.replace(/\s+/g, '-');
  state.currentPage = normalizedPage;

  document.querySelectorAll('.nav-btn, .mobile-nav-link').forEach(btn => {
    const btnPage = btn.getAttribute('data-page');
    if (btnPage === pageName || btnPage === normalizedPage) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.hp-page').forEach(page => {
    page.style.display = 'none';
  });

  const activePageEl = document.getElementById(`page-${normalizedPage}`);
  if (activePageEl) {
    activePageEl.style.display = 'block';
  }

  if (normalizedPage === 'Movies') {
    renderMoviesPage();
  } else if (normalizedPage === 'Cast-Crew') {
    renderCastGrid();
  } else if (normalizedPage === 'Cart') {
    renderCartPage();
  } else if (normalizedPage === 'My-Account') {
    renderAccountPage();
  } else if (normalizedPage === 'Downloads') {
    if (state.myLibrary.length === 0) {
      navigateTo('My-Account');
      return;
    }
    renderDownloadsPage();
  } else if (normalizedPage === 'Admin') {
    if (!state.currentUser) {
      navigateTo('Login');
      return;
    }
    renderAdminPanel();
  } else if (normalizedPage === 'Watch') {
    renderWatchPage();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initSoundToggle() {
  const video = document.getElementById('hero-video');
  const soundBtn = document.getElementById('sound-toggle');
  const soundOff = document.getElementById('sound-icon-off');
  const soundOn = document.getElementById('sound-icon-on');

  if (!video || !soundBtn) return;

  soundBtn.addEventListener('click', () => {
    state.soundOn = !state.soundOn;
    video.muted = !state.soundOn;
    if (state.soundOn) {
      soundOff.style.display = 'none';
      soundOn.style.display = 'inline';
    } else {
      soundOff.style.display = 'inline';
      soundOn.style.display = 'none';
    }
  });
}

function addToCart(movie) {
  if (!state.cart.find(item => item.id === movie.id)) {
    state.cart.push(movie);
    updateCartBadge();
  }
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  updateCartBadge();
  renderCartPage();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (state.cart.length > 0) {
    badge.textContent = state.cart.length;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function createMovieCard(movie, isSlider = false) {
  const card = document.createElement('div');
  card.className = 'hp-movie-card';
  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" class="hp-card-poster" />
    <div class="hp-card-content">
      <span class="hp-genre-tag">${movie.genre}</span>
      <h3>${movie.title}</h3>
      <p>${movie.hook}</p>
      <span class="hp-card-price">KES ${movie.price}</span>
      <div class="hp-card-actions">
        <button class="hp-btn hp-btn-secondary view-btn">View Details</button>
        ${!isSlider ? `<button class="hp-btn hp-btn-primary add-btn">Add to Cart</button>` : ''}
      </div>
    </div>
  `;

  card.querySelector('.view-btn').addEventListener('click', () => {
    state.selectedMovie = movie;
    navigateTo('Movies');
  });

  const addBtn = card.querySelector('.add-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => addToCart(movie));
  }

  return card;
}

function initHomeSlider() {
  const slider = document.getElementById('home-movie-slider');
  const leftBtn = document.getElementById('slide-left');
  const rightBtn = document.getElementById('slide-right');

  if (!slider) return;
  slider.innerHTML = '';

  movies.forEach(movie => {
    slider.appendChild(createMovieCard(movie, true));
  });

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
    });
  }

  const buyBtn = document.getElementById('featured-buy-btn');
  const trailerBtn = document.getElementById('featured-trailer-btn');
  if (buyBtn && movies.length > 0) buyBtn.addEventListener('click', () => addToCart(movies[0]));
  if (trailerBtn && movies.length > 0) trailerBtn.addEventListener('click', () => {
    state.selectedMovie = movies[0];
    navigateTo('Movies');
  });
}

function initMoviesCatalog() {
  const filterBtns = document.querySelectorAll('#genre-filter-bar .hp-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.genreFilter = e.target.getAttribute('data-genre');
      renderMoviesCatalogGrid();
    });
  });
}

function renderMoviesPage() {
  const catalogView = document.getElementById('movies-catalog-view');
  const detailView = document.getElementById('movies-detail-view');

  if (!state.selectedMovie) {
    catalogView.style.display = 'block';
    detailView.style.display = 'none';
    renderMoviesCatalogGrid();
  } else {
    catalogView.style.display = 'none';
    detailView.style.display = 'block';
    renderMovieDetail();
  }
}

function renderMoviesCatalogGrid() {
  const grid = document.getElementById('movies-catalog-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  let filtered = state.genreFilter === 'All'
    ? movies
    : movies.filter(m => m.genre === state.genreFilter);

  if (state.searchQuery) {
    filtered = filtered.filter(m => 
      m.title.toLowerCase().includes(state.searchQuery) || 
      m.hook.toLowerCase().includes(state.searchQuery)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1 / -1; color: var(--hp-text-muted);">No movies found matching your search criteria.</p>`;
    return;
  }

  filtered.forEach(movie => {
    grid.appendChild(createMovieCard(movie));
  });
}

function renderMovieDetail() {
  const m = state.selectedMovie;
  if (!m) return;

  document.getElementById('detail-title').textContent = m.title;
  document.getElementById('detail-hook').textContent = `"${m.hook}"`;
  document.getElementById('detail-video-player').src = m.trailerUrl || m.trailer_url;
  document.getElementById('detail-synopsis').textContent = m.synopsis;
  document.getElementById('detail-genre').textContent = m.genre;
  document.getElementById('detail-runtime').textContent = m.runtime;
  document.getElementById('detail-language').textContent = m.language;
  document.getElementById('detail-year').textContent = m.year;
  document.getElementById('detail-director').textContent = m.director;
  document.getElementById('detail-cast').textContent = Array.isArray(m.cast) ? m.cast.join(', ') : m.cast;
  document.getElementById('detail-price').textContent = `Price: KES ${m.price}`;

  const galleryGrid = document.getElementById('detail-gallery-grid');
  galleryGrid.innerHTML = '';
  if (m.gallery && m.gallery.length > 0) {
    m.gallery.forEach((item) => {
      const media = typeof item === 'string' ? { type: 'image', src: item } : item;
      const isVideo = media.type === 'video' || /\.(mp4|webm|ogg)(\?|$)/i.test(media.src || '');
      const mediaEl = isVideo ? document.createElement('video') : document.createElement('img');

      if (isVideo) {
        mediaEl.src = media.src;
        mediaEl.controls = true;
        mediaEl.className = 'hp-gallery-media';
      } else {
        mediaEl.src = media.src;
        mediaEl.alt = 'bts production frame';
        mediaEl.className = 'hp-gallery-image';
      }

      galleryGrid.appendChild(mediaEl);
    });
  }

  const addBtn = document.getElementById('detail-add-cart-btn');
  const buyBtn = document.getElementById('detail-buy-now-btn');

  addBtn.onclick = () => addToCart(m);
  buyBtn.onclick = () => {
    addToCart(m);
    navigateTo('Cart');
  };

  const relatedGrid = document.getElementById('detail-related-grid');
  relatedGrid.innerHTML = '';
  movies.filter(rel => rel.id !== m.id).slice(0, 3).forEach(rel => {
    const card = document.createElement('div');
    card.className = 'hp-movie-card';
    card.style.cursor = 'pointer';
    card.innerHTML = `
      <img src="${rel.poster}" alt="${rel.title}" class="hp-card-poster" />
      <div class="hp-card-content">
        <h4>${rel.title}</h4>
        <span class="hp-card-price">KES ${rel.price}</span>
      </div>
    `;
    card.addEventListener('click', () => {
      state.selectedMovie = rel;
      renderMovieDetail();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    relatedGrid.appendChild(card);
  });
}

function initBTSFeed() {
  const container = document.getElementById('bts-feed-container');
  if (!container) return;
  container.innerHTML = '';

  btsEntries.forEach(entry => {
    const item = document.createElement('div');
    item.className = 'hp-feed-item';

    const fullText = entry.fullText || entry.full_text;
    const mediaHtml = (entry.media || []).map(media => {
      if (media.type === 'video' || /\.(mp4|webm|ogg)(\?|$)/i.test(media.src || '')) {
        return `<video controls class="hp-feed-cover" src="${media.src}"></video>`;
      }
      return `<img src="${media.src}" alt="${entry.title}" class="hp-feed-cover" />`;
    }).join('');

    item.innerHTML = `
      <div class="hp-bts-gallery">${mediaHtml}</div>
      <h3>${entry.title}</h3>
      <p class="hp-bts-text">${entry.excerpt}</p>
      <button class="hp-btn-text read-more-bts-btn">Read More &#8594;</button>
    `;

    const readMoreBtn = item.querySelector('.read-more-bts-btn');
    const textPara = item.querySelector('.hp-bts-text');

    readMoreBtn.addEventListener('click', () => {
      if (readMoreBtn.getAttribute('data-expanded') === 'true') {
        textPara.textContent = entry.excerpt;
        readMoreBtn.innerHTML = 'Read More &#8594;';
        readMoreBtn.setAttribute('data-expanded', 'false');
      } else {
        textPara.textContent = fullText;
        readMoreBtn.innerHTML = 'Show Less &#8592;';
        readMoreBtn.setAttribute('data-expanded', 'true');
      }
    });

    container.appendChild(item);
  });
}

function initCastGrid() {
  renderCastGrid();
}

function renderCastGrid() {
  const container = document.getElementById('cast-grid-container');
  if (!container) return;
  container.innerHTML = '';

  if (!state.selectedCastMovie) {
    const header = document.createElement('div');
    header.style.gridColumn = '1 / -1';
    header.style.marginBottom = '1.5rem';
    header.innerHTML = `
      <h2>Select a Movie to View Cast & Crew</h2>
      <p style="color: var(--hp-text-muted);">Click on any movie below to view individual cards with pictures, roles, and bio details for directors, producers, lead actors, and supporting crew.</p>
    `;
    container.appendChild(header);

    const moviesGrid = document.createElement('div');
    moviesGrid.style.gridColumn = '1 / -1';
    moviesGrid.style.display = 'grid';
    moviesGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(220px, 1fr))';
    moviesGrid.style.gap = '1.5rem';

    movies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'hp-movie-card';
      card.style.cursor = 'pointer';
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="hp-card-poster" />
        <div class="hp-card-content">
          <h3>${movie.title}</h3>
          <span class="hp-genre-tag">${movie.genre} (${movie.year})</span>
          <button class="hp-btn hp-btn-primary" style="margin-top: 1rem; width: 100%;">View Cast & Crew</button>
        </div>
      `;
      card.addEventListener('click', () => {
        state.selectedCastMovie = movie;
        renderCastGrid();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      moviesGrid.appendChild(card);
    });

    container.appendChild(moviesGrid);
  } else {
    const movie = state.selectedCastMovie;

    const navBar = document.createElement('div');
    navBar.style.gridColumn = '1 / -1';
    navBar.style.marginBottom = '2rem';
    navBar.innerHTML = `
      <button class="hp-btn hp-btn-secondary back-to-cast-movies-btn">&#8592; Back to All Movies</button>
      <h2 style="margin-top: 1rem;">${movie.title} - Full Cast & Crew</h2>
    `;
    navBar.querySelector('.back-to-cast-movies-btn').addEventListener('click', () => {
      state.selectedCastMovie = null;
      renderCastGrid();
    });
    container.appendChild(navBar);

    const categories = ['Director', 'Producer', 'Lead Cast', 'Supporting Cast'];

    categories.forEach(cat => {
      const filteredMembers = (movie.castCrew || []).filter(m => m.category === cat);

      if (filteredMembers.length > 0) {
        const catHeader = document.createElement('div');
        catHeader.style.gridColumn = '1 / -1';
        catHeader.style.marginTop = '1.5rem';
        catHeader.style.marginBottom = '0.5rem';
        catHeader.innerHTML = `<h3 style="border-bottom: 2px solid var(--hp-accent); padding-bottom: 0.5rem;">${cat}s</h3>`;
        container.appendChild(catHeader);

        filteredMembers.forEach(member => {
          const personCard = document.createElement('div');
          personCard.className = 'hp-profile-card';
          personCard.style.display = 'flex';
          personCard.style.flexDirection = 'column';
          personCard.style.alignItems = 'center';
          personCard.style.textAlign = 'center';

          personCard.innerHTML = `
            <img src="${member.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}" alt="${member.name}" style="width: 140px; height: 140px; object-fit: cover; border-radius: 50%; margin-bottom: 1rem; border: 3px solid var(--hp-accent);" />
            <h4 style="margin: 0; font-size: 1.2rem;">${member.name}</h4>
            <span class="hp-role-title" style="color: var(--hp-accent); font-weight: bold; margin: 0.25rem 0;">${member.role}</span>
            <p style="font-size: 0.9rem; color: var(--hp-text-muted);">${member.bio || ''}</p>
          `;
          container.appendChild(personCard);
        });
      }
    });
  }
}

function initJournalPosts() {
  const container = document.getElementById('journal-grid-container');
  if (!container) return;
  container.innerHTML = '';

  journalPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'hp-journal-card';
    const content = post.fullContent || post.full_content;

    card.innerHTML = `
      <h3>${post.title}</h3>
      <span>${post.date}</span>
      <p>${post.excerpt}</p>
      <button class="hp-btn-text">Read More &#8594;</button>
    `;

    card.querySelector('.hp-btn-text').addEventListener('click', () => {
      alert(`${post.title}\n\n${content}`);
    });

    container.appendChild(card);
  });
}

function initCart() {
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      state.myLibrary = [...state.myLibrary, ...state.cart];
      state.cart = [];
      updateCartBadge();
      navigateTo('My-Account');
    });
  }
}

function renderCartPage() {
  const emptyMsg = document.getElementById('cart-empty-msg');
  const layout = document.getElementById('cart-content-layout');
  const list = document.getElementById('cart-items-list');
  const subtotal = document.getElementById('cart-subtotal');

  if (!emptyMsg || !layout) return;

  if (state.cart.length === 0) {
    emptyMsg.style.display = 'block';
    layout.style.display = 'none';
  } else {
    emptyMsg.style.display = 'none';
    layout.style.display = 'grid';
    list.innerHTML = '';
    
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price;
      const row = document.createElement('div');
      row.className = 'hp-cart-item';
      row.innerHTML = `
        <img src="${item.poster}" alt="${item.title}" />
        <div class="hp-cart-item-info">
          <h3>${item.title}</h3>
          <p>KES ${item.price}</p>
        </div>
        <button class="hp-btn-text remove-btn" aria-label="Remove item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      `;
      row.querySelector('.remove-btn').addEventListener('click', () => removeFromCart(item.id));
      list.appendChild(row);
    });
    subtotal.textContent = `KES ${sum}`;
  }
}

function renderAccountPage() {
  const emptyMsg = document.getElementById('library-empty-msg');
  const grid = document.getElementById('library-grid');
  const downloadsBtn = document.getElementById('downloads-nav-btn');
  const mobileDownloadsBtn = document.getElementById('mobile-downloads-link');

  if (!emptyMsg || !grid) return;

  if (state.myLibrary.length === 0) {
    emptyMsg.style.display = 'block';
    grid.style.display = 'none';
    if (downloadsBtn) downloadsBtn.style.display = 'none';
    if (mobileDownloadsBtn) mobileDownloadsBtn.style.display = 'none';
  } else {
    emptyMsg.style.display = 'none';
    grid.style.display = 'grid';
    if (downloadsBtn) downloadsBtn.style.display = 'block';
    if (mobileDownloadsBtn) mobileDownloadsBtn.style.display = 'block';
    grid.innerHTML = '';

    state.myLibrary.forEach(item => {
      const card = document.createElement('div');
      card.className = 'hp-movie-card';
      card.innerHTML = `
        <img src="${item.poster}" alt="${item.title}" class="hp-card-poster" />
        <div class="hp-card-content">
          <h3>${item.title}</h3>
          <button class="hp-btn hp-btn-primary watch-btn" style="margin-top: 1rem; width: 100%;">Watch Now</button>
        </div>
      `;
      card.querySelector('.watch-btn').addEventListener('click', () => {
        state.watchingMovie = item;
        navigateTo('Watch');
      });
      grid.appendChild(card);
    });
  }
}

function renderDownloadsPage() {
  const emptyMsg = document.getElementById('downloads-empty-msg');
  const grid = document.getElementById('downloads-grid');

  if (!emptyMsg || !grid) return;

  if (state.myLibrary.length === 0) {
    emptyMsg.style.display = 'block';
    grid.style.display = 'none';
  } else {
    emptyMsg.style.display = 'none';
    grid.style.display = 'grid';
    grid.innerHTML = '';

    state.myLibrary.forEach(item => {
      const downloadItem = document.createElement('div');
      downloadItem.className = 'hp-download-item';
      
      const downloadProgress = Math.floor(Math.random() * 100);
      const isDownloaded = downloadProgress === 100;
      
      downloadItem.innerHTML = `
        <div class="hp-download-poster">
          <img src="${item.poster}" alt="${item.title}" />
          <div class="hp-download-overlay">
            <button class="hp-download-action-btn play-btn" title="Play" aria-label="Play">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </button>
          </div>
        </div>
        <div class="hp-download-info">
          <h3>${item.title}</h3>
          <div class="hp-download-actions">
            <button class="hp-btn hp-btn-sm" title="Download to device">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download
            </button>
            <button class="hp-btn hp-btn-sm" title="Watch offline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
              Offline
            </button>
          </div>
          ${isDownloaded ? '<p class="hp-download-status">✓ Downloaded</p>' : `<div class="hp-download-progress"><div class="hp-progress-bar" style="width: ${downloadProgress}%"></div><span>${downloadProgress}%</span></div>`}
        </div>
      `;
      
      const playBtn = downloadItem.querySelector('.play-btn');
      playBtn.addEventListener('click', () => {
        state.watchingMovie = item;
        navigateTo('Watch');
      });
      
      downloadItem.querySelectorAll('.hp-btn-sm').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
          const action = idx === 0 ? 'Download' : 'Offline viewing';
          alert(`${action} for ${item.title} is ready!`);
        });
      });
      
      grid.appendChild(downloadItem);
    });
  }
}

function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-nav-menu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isVisible = mobileMenu.style.display === 'block';
      mobileMenu.style.display = isVisible ? 'none' : 'block';
    });
  }
}

function initAuth() {
  const loginForm = document.getElementById('login-form');
  const logoutBtn = document.getElementById('logout-btn');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('username').value.trim();
      const pass = document.getElementById('password').value.trim();
      const err = document.getElementById('login-error');

      if (AUTH_USERS[user] && AUTH_USERS[user] === pass) {
        state.currentUser = user;
        localStorage.setItem('currentUser', user);
        err.textContent = '';
        loginForm.reset();
        navigateTo('Admin');
      } else {
        err.textContent = 'Invalid username or password.';
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      state.currentUser = null;
      localStorage.removeItem('currentUser');
      navigateTo('Home');
    });
  }
}

function renderFounders() {
  const grid = document.getElementById('founders-grid');
  if (!grid) return;
  grid.innerHTML = '';

  founders.forEach(f => {
    const card = document.createElement('div');
    card.className = 'hp-founder-card';
    card.innerHTML = `
      <img src="${f.photo}" alt="${f.name}" class="hp-founder-photo" />
      <div>
        <h3>${f.name}</h3>
        <p>${f.bio}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderAdminPanel() {
  const tabs = document.querySelectorAll('.hp-admin-tab-btn');
  const tabContents = document.querySelectorAll('.hp-admin-tab-content');

  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.style.display = 'none');

      tab.classList.add('active');
      const targetId = `admin-${tab.getAttribute('data-tab')}`;
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.style.display = 'block';
    };
  });

  populateAdminSelects();
  renderAdminMoviesList();
  renderAdminFoundersList();
  renderAdminCastSection();

  const movieForm = document.getElementById('movie-upload-form');
  if (movieForm) {
    movieForm.onsubmit = (e) => {
      e.preventDefault();
      const newM = {
        id: movies.length + 1,
        title: document.getElementById('movie-title').value,
        hook: document.getElementById('movie-hook').value,
        synopsis: document.getElementById('movie-synopsis').value,
        genre: document.getElementById('movie-genre').value,
        runtime: document.getElementById('movie-runtime').value + 'm',
        language: document.getElementById('movie-language').value,
        year: document.getElementById('movie-year').value,
        director: document.getElementById('movie-director').value,
        producer: 'Daniel Kibet',
        leadCast: [document.getElementById('movie-cast').value],
        supportingCast: [],
        cast: document.getElementById('movie-cast').value,
        price: Number(document.getElementById('movie-price').value),
        poster: document.getElementById('movie-poster').value,
        trailerUrl: document.getElementById('movie-trailer').value,
        movieUrl: document.getElementById('movie-file').value || 'https://www.w3schools.com/html/mov_bbb.mp4',
        gallery: [],
        castCrew: []
      };
      movies.push(newM);
      movieForm.reset();
      alert('Movie successfully added!');
      populateAdminSelects();
      renderAdminMoviesList();
      initHomeSlider();
    };
  }

  const trailerForm = document.getElementById('trailer-upload-form');
  if (trailerForm) {
    trailerForm.onsubmit = (e) => {
      e.preventDefault();
      const mId = Number(document.getElementById('trailer-movie-id').value);
      const url = document.getElementById('trailer-url').value;
      const target = movies.find(m => m.id === mId);
      if (target) {
        target.trailerUrl = url;
        alert(`Trailer updated for ${target.title}`);
        trailerForm.reset();
      }
    };
  }

  const galleryForm = document.getElementById('gallery-upload-form');
  if (galleryForm) {
    galleryForm.onsubmit = (e) => {
      e.preventDefault();
      const mId = Number(document.getElementById('gallery-movie-id').value);
      const url = document.getElementById('gallery-url').value;
      const type = document.getElementById('gallery-type').value;
      const target = movies.find(m => m.id === mId);
      if (target) {
        if (!target.gallery) target.gallery = [];
        target.gallery.push({ type, src: url });
        alert(`Gallery item added to ${target.title}`);
        galleryForm.reset();
      }
    };
  }

  const founderForm = document.getElementById('founder-form');
  if (founderForm) {
    founderForm.onsubmit = (e) => {
      e.preventDefault();
      const newF = {
        id: founders.length + 1,
        name: document.getElementById('founder-name').value,
        bio: document.getElementById('founder-bio').value,
        photo: document.getElementById('founder-photo').value
      };
      founders.push(newF);
      founderForm.reset();
      alert('Founder added!');
      renderFounders();
      renderAdminFoundersList();
    };
  }
}

function renderAdminCastSection() {
  const castMovieSel = document.getElementById('cast-movie-select');
  const castList = document.getElementById('admin-cast-list');
  const castForm = document.getElementById('cast-member-form');

  if (!castMovieSel) return;

  castMovieSel.innerHTML = '<option value="">Select a Movie</option>';
  movies.forEach(m => {
    castMovieSel.innerHTML += `<option value="${m.id}">${m.title}</option>`;
  });

  castMovieSel.onchange = () => {
    renderAdminCastList();
  };

  if (castForm) {
    castForm.onsubmit = (e) => {
      e.preventDefault();
      const movieId = Number(castMovieSel.value);
      if (!movieId) {
        alert('Please select a movie first.');
        return;
      }

      const movie = movies.find(m => m.id === movieId);
      if (!movie) return;

      if (!movie.castCrew) movie.castCrew = [];

      const name = document.getElementById('cast-member-name').value;
      const role = document.getElementById('cast-member-role').value;
      const category = document.getElementById('cast-member-category').value;
      const photo = document.getElementById('cast-member-photo').value;
      const bio = document.getElementById('cast-member-bio').value;

      if (state.editingCastMember) {
        const member = movie.castCrew.find(c => c.id === state.editingCastMember.id);
        if (member) {
          member.name = name;
          member.role = role;
          member.category = category;
          member.photo = photo;
          member.bio = bio;
        }
        state.editingCastMember = null;
        alert('Cast/Crew member updated!');
      } else {
        const newMember = {
          id: Date.now(),
          name,
          role,
          category,
          photo,
          bio
        };
        movie.castCrew.push(newMember);
        alert('Cast/Crew member added!');
      }

      castForm.reset();
      renderAdminCastList();
      if (state.selectedCastMovie && state.selectedCastMovie.id === movieId) {
        renderCastGrid();
      }
    };
  }
}

function renderAdminCastList() {
  const castMovieSel = document.getElementById('cast-movie-select');
  const castList = document.getElementById('admin-cast-list');
  if (!castMovieSel || !castList) return;

  const movieId = Number(castMovieSel.value);
  castList.innerHTML = '';

  if (!movieId) return;

  const movie = movies.find(m => m.id === movieId);
  if (!movie || !movie.castCrew || movie.castCrew.length === 0) {
    castList.innerHTML = '<p style="color: var(--hp-text-muted);">No cast or crew members found for this movie.</p>';
    return;
  }

  movie.castCrew.forEach(member => {
    const item = document.createElement('div');
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'space-between';
    item.style.padding = '0.75rem';
    item.style.marginBottom = '0.5rem';
    item.style.background = 'rgba(255, 255, 255, 0.05)';
    item.style.borderRadius = '6px';

    item.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <img src="${member.photo}" alt="${member.name}" style="width: 45px; height: 45px; object-fit: cover; border-radius: 50%;" />
        <div>
          <strong>${member.name}</strong> (${member.category})
          <br><small style="color: var(--hp-accent);">${member.role}</small>
        </div>
      </div>
      <div>
        <button class="hp-btn hp-btn-sm edit-cast-btn">Edit</button>
        <button class="hp-btn hp-btn-sm delete-cast-btn" style="background: #e63946;">Delete</button>
      </div>
    `;

    item.querySelector('.edit-cast-btn').onclick = () => {
      state.editingCastMember = member;
      document.getElementById('cast-member-name').value = member.name;
      document.getElementById('cast-member-role').value = member.role;
      document.getElementById('cast-member-category').value = member.category;
      document.getElementById('cast-member-photo').value = member.photo;
      document.getElementById('cast-member-bio').value = member.bio || '';
    };

    item.querySelector('.delete-cast-btn').onclick = () => {
      movie.castCrew = movie.castCrew.filter(c => c.id !== member.id);
      renderAdminCastList();
      if (state.selectedCastMovie && state.selectedCastMovie.id === movieId) {
        renderCastGrid();
      }
    };

    castList.appendChild(item);
  });
}

function populateAdminSelects() {
  const trailerSel = document.getElementById('trailer-movie-id');
  const gallerySel = document.getElementById('gallery-movie-id');

  if (trailerSel) {
    trailerSel.innerHTML = '<option value="">Select a Movie</option>';
    movies.forEach(m => {
      trailerSel.innerHTML += `<option value="${m.id}">${m.title}</option>`;
    });
  }

  if (gallerySel) {
    gallerySel.innerHTML = '<option value="">Select a Movie</option>';
    movies.forEach(m => {
      gallerySel.innerHTML += `<option value="${m.id}">${m.title}</option>`;
    });
  }
}

function renderAdminMoviesList() {
  const list = document.getElementById('movies-list');
  if (!list) return;
  list.innerHTML = '<h4>Existing Movies</h4>';
  movies.forEach(m => {
    list.innerHTML += `<p>• <strong>${m.title}</strong> (${m.genre}) - KES ${m.price}</p>`;
  });
}

function renderAdminFoundersList() {
  const list = document.getElementById('founders-list');
  if (!list) return;
  list.innerHTML = '<h4>Existing Founders</h4>';
  founders.forEach(f => {
    list.innerHTML += `<p>• <strong>${f.name}</strong></p>`;
  });
}

function renderWatchPage() {
  const m = state.watchingMovie;
  if (!m) return;

  document.getElementById('watch-title').textContent = m.title;
  document.getElementById('watch-synopsis').textContent = m.synopsis;

  const player = document.getElementById('full-movie-player');
  if (player) {
    player.src = m.movieUrl || m.trailerUrl || 'https://www.w3schools.com/html/mov_bbb.mp4';
    player.play().catch(() => {});
  }
}

function renderApp() {
  navigateTo('Home');
}