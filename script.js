/**
 * ============================================================================
 * HOME FURNITURE DESIGN — CORE JAVASCRIPT (script.js)
 * Designing Comfort · Defining Style
 * 
 * Features:
 * 1. Sample Products Database (10 Artisan Handcrafted Furniture Items)
 * 2. Persistent Cart Management with LocalStorage (Works seamlessly across all pages)
 * 3. Slide-out Cart Drawer & Toast Notifications
 * 4. Dedicated Cart Page (live item updates, coupon discounts, checkout demo)
 * 5. Products Catalog Page (category filters: sofa/bed/table/chair, live search, sorting)
 * 6. Product Detail Page (URL param ?id=X, gallery switcher, qty selector, WhatsApp enquiry)
 * 7. Contact Page (form validation, direct WhatsApp chat, interactive map placeholder, FAQ)
 * 8. Global UI: Sticky Navbar, Mobile Navigation Drawer, Search Modal, Scroll-to-Top
 * 9. Multilingual Support: English / Hindi quick language toggle
 * ============================================================================
 */

/* ==========================================================================
   1. SAMPLE PRODUCTS DATABASE
   ========================================================================== */
const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Nordic Saddle Leather Lounge Chair',
    category: 'chair',
    categoryName: 'Accent Seating',
    price: 349,
    oldPrice: 420,
    rating: 4.9,
    reviews: 128,
    badge: 'Best Seller',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580481077197-2510c496d66e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sculpted from warm top-grain saddle leather and sustainably harvested solid ash wood. Features an ergonomic reclining posture, hand-burnished edges, and brass accent fittings that mature gracefully with age.',
    material: 'Solid Ash Wood & Full-Grain Leather',
    dimensions: '82cm W x 86cm D x 78cm H',
    finish: 'Caramel Brown / Natural Wax',
    warranty: '10-Year Frame Guarantee'
  },
  {
    id: 2,
    name: 'Milano 3-Seater Bouclé Sofa',
    category: 'sofa',
    categoryName: 'Living Room',
    price: 1190,
    oldPrice: 1400,
    rating: 5.0,
    reviews: 210,
    badge: 'Save 15%',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An architectural centerpiece crafted with gentle organic curvature and cozy tactile bouclé fabric. Fitted with high-resilience pocket coils and a kiln-dried hardwood structure designed for luxurious daily lounging.',
    material: 'Bouclé Fabric & Kiln-Dried Pine Wood',
    dimensions: '220cm W x 95cm D x 74cm H',
    finish: 'Oatmeal Cream / Walnut Feet',
    warranty: '10-Year Structural Guarantee'
  },
  {
    id: 3,
    name: 'Kyoto Minimalist Solid Oak Bed',
    category: 'bed',
    categoryName: 'Bedroom Suites',
    price: 899,
    oldPrice: 980,
    rating: 4.8,
    reviews: 87,
    badge: 'New Arrival',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Drawing inspiration from traditional Japanese low-profile joinery, the Kyoto Bed features rounded organic edges, floating side borders, and solid slatted base planks for maximum air circulation.',
    material: '100% Solid White Oak',
    dimensions: 'Queen (160cm W x 210cm L x 32cm H)',
    finish: 'Smoked Oak / Natural Oil',
    warranty: '10-Year Woodwork Warranty'
  },
  {
    id: 4,
    name: 'Hand-Hewn Round Walnut Dining Table',
    category: 'table',
    categoryName: 'Dining Room',
    price: 620,
    oldPrice: 710,
    rating: 4.9,
    reviews: 64,
    badge: 'Popular',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Hand-carved from American black walnut with a chamfered bullnose edge and sculptural fluted pedestal column. Seats four to six guests comfortably for warm intimate dinners and gatherings.',
    material: 'American Black Walnut Hardwood',
    dimensions: '120cm Diameter x 76cm H',
    finish: 'Satin Matte Eco Poly-Wax',
    warranty: '10-Year Craftsmanship Guarantee'
  },
  {
    id: 5,
    name: 'Copenhagen Cane & Ash Wood Armchair',
    category: 'chair',
    categoryName: 'Dining & Study',
    price: 245,
    oldPrice: 290,
    rating: 4.7,
    reviews: 92,
    badge: 'Best Seller',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A harmonious blend of natural Indonesian cane webbing and hand-bent ash wood curvature. Breathable, lightweight, and exceptionally supportive for study desks or dining spaces.',
    material: 'Solid Ash Wood & Natural Rattan Webbing',
    dimensions: '58cm W x 54cm D x 81cm H',
    finish: 'Honey Ash / Hand-Woven Cane',
    warranty: '5-Year Structural Warranty'
  },
  {
    id: 6,
    name: 'Verona Velvet Tufted Chesterfield Sofa',
    category: 'sofa',
    categoryName: 'Living Room',
    price: 1450,
    oldPrice: 1680,
    rating: 4.9,
    reviews: 142,
    badge: 'Luxury Choice',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A modern reimagining of the iconic Chesterfield silhouette. Upholstered in stain-resistant olive green velvet with deep artisan diamond button tufting and antiqued solid brass castor legs.',
    material: 'Performance Velvet & Solid Teak Frame',
    dimensions: '235cm W x 98cm D x 78cm H',
    finish: 'Olive Moss Velvet / Brass Accents',
    warranty: '10-Year Framework Warranty'
  },
  {
    id: 7,
    name: 'Tulum Hand-Woven Rattan Platform Bed',
    category: 'bed',
    categoryName: 'Bedroom Suites',
    price: 1050,
    oldPrice: 1200,
    rating: 4.8,
    reviews: 76,
    badge: 'Artisan Pick',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Imbue your bedroom with coastal tranquility. Designed with a hand-woven natural rattan sunburst headboard cradled by a solid Indonesian plantation teak platform foundation.',
    material: 'Natural Teak & Hand-Braided Rattan',
    dimensions: 'King (185cm W x 215cm L x 115cm Headboard H)',
    finish: 'Natural Raw Wax Teak',
    warranty: '10-Year Wood Warranty'
  },
  {
    id: 8,
    name: 'Artisan Extendable Teak Dining Table',
    category: 'table',
    categoryName: 'Dining Room',
    price: 880,
    oldPrice: 990,
    rating: 4.9,
    reviews: 58,
    badge: 'Popular',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Features a precision butterfly-leaf extension mechanism hidden beneath the tabletop. Expands smoothly from 6 to 10 dinner guests with robust mortise-and-tenon craftsmanship.',
    material: 'Plantation Hardwood Teak',
    dimensions: '160cm - 220cm L x 90cm W x 76cm H',
    finish: 'Golden Honey Teak Oil',
    warranty: '10-Year Structural Guarantee'
  },
  {
    id: 9,
    name: 'Classic Wishbone Ash Dining Chair',
    category: 'chair',
    categoryName: 'Dining & Accent',
    price: 195,
    oldPrice: 230,
    rating: 4.8,
    reviews: 185,
    badge: 'Iconic Design',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1580481077197-2510c496d66e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580481077197-2510c496d66e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A timeless mid-century icon featuring the famous curved Y-crest rail and over 120 meters of hand-twisted natural paper cord tightly woven onto a steam-bent solid beechwood frame.',
    material: 'Solid Ash Wood & Natural Paper Cord',
    dimensions: '55cm W x 51cm D x 75cm H',
    finish: 'Natural Light Ash / Kraft Cord',
    warranty: '5-Year Guarantee'
  },
  {
    id: 10,
    name: 'Terracotta Clay Ambient Table Lamp',
    category: 'decor',
    categoryName: 'Lighting & Decor',
    price: 135,
    oldPrice: 165,
    rating: 4.9,
    reviews: 112,
    badge: 'Sale',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Hand-thrown on a pottery wheel with unglazed earthy terracotta clay and paired with a hand-tailored Belgian linen shade. Emits a comforting, warm atmospheric glow for evenings.',
    material: 'Earthenware Terracotta & Belgian Linen',
    dimensions: '28cm Diameter x 45cm H',
    finish: 'Raw Organic Terracotta',
    warranty: '3-Year Electrical & Finish Warranty'
  }
];

/* ==========================================================================
   2. PERSISTENT CART STATE MANAGEMENT (LocalStorage)
   ========================================================================== */
const CART_STORAGE_KEY = 'hfd_user_cart';
const COUPON_STORAGE_KEY = 'hfd_active_coupon';

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error('Error saving cart to localStorage', e);
  }
  updateGlobalCartUI();
}

function getActiveCoupon() {
  try {
    return JSON.parse(localStorage.getItem(COUPON_STORAGE_KEY)) || null;
  } catch (e) {
    return null;
  }
}

function saveActiveCoupon(coupon) {
  if (coupon) {
    localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(coupon));
  } else {
    localStorage.removeItem(COUPON_STORAGE_KEY);
  }
}

/**
 * Add an item to cart by ID (supports both signatures)
 */
function addToCart(productId, qtyOrName = 1, priceOrBtn = null, img = null, btnElement = null) {
  let product = PRODUCTS_DATA.find(p => p.id === Number(productId));
  let qty = 1;
  let btn = null;

  if (typeof qtyOrName === 'number') {
    qty = qtyOrName;
    btn = priceOrBtn;
  } else if (typeof qtyOrName === 'string') {
    // Called with (id, name, price, img, btnElement)
    btn = btnElement;
    qty = 1;
    if (!product) {
      product = {
        id: Number(productId),
        name: qtyOrName,
        price: Number(priceOrBtn) || 0,
        image: img || '',
        category: 'furniture',
        categoryName: 'Furniture'
      };
    }
  }

  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += Number(qty);
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      categoryName: product.categoryName || product.category,
      quantity: Number(qty)
    });
  }

  saveCart(cart);

  // Button feedback animation
  if (btn) {
    const origHTML = btn.innerHTML;
    btn.classList.add('added');
    btn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Added!</span>';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = origHTML;
    }, 1200);
  }

  // Toast feedback
  showToast(`Added "${product.name}" to cart!`);
}

// Compatibility Aliases for older inline onclick scripts
function changeQuantity(id, delta) {
  changeCartQuantity(id, delta);
}

function removeFromCart(id) {
  removeCartItem(id);
}

/**
 * Change quantity of an item in cart
 */
function changeCartQuantity(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === Number(productId));
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== Number(productId));
    showToast('Item removed from cart.');
  }
  saveCart(cart);

  // If on cart page, re-render cart page
  if (document.getElementById('cartPageSection')) {
    renderCartPage();
  }
}

/**
 * Remove an item from cart completely
 */
function removeCartItem(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== Number(productId));
  saveCart(cart);
  showToast('Item removed from cart.');

  if (document.getElementById('cartPageSection')) {
    renderCartPage();
  }
}

/**
 * Clear the entire cart
 */
function clearAllCart() {
  if (confirm('Are you sure you want to clear your shopping cart?')) {
    saveCart([]);
    saveActiveCoupon(null);
    showToast('Your shopping cart has been cleared.');
    if (document.getElementById('cartPageSection')) {
      renderCartPage();
    }
  }
}

/**
 * Update Cart badges and Cart Drawer on all pages
 */
function updateGlobalCartUI() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update badge in header
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    badge.textContent = totalCount;
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);
  });

  // Update slide-out drawer if present on page
  renderCartDrawer();
}

/**
 * Render the slide-out cart drawer
 */
function renderCartDrawer() {
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotalAmount = document.getElementById('cartSubtotalAmount');
  if (!cartItemsList) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-cart-arrow-down"></i>
        <p>Your shopping cart is empty.</p>
        <p style="font-size: 0.85rem; margin-top: 6px;">Discover our artisan furniture collection!</p>
        <a href="products.html" class="btn btn-secondary" style="margin-top: 15px; padding: 8px 18px; font-size: 0.85rem;">Browse Shop</a>
      </div>
    `;
    if (cartSubtotalAmount) cartSubtotalAmount.textContent = '₹0.00';
  } else {
    let subtotal = 0;
    let html = '';

    cart.forEach(item => {
      const itemSubtotal = item.price * item.quantity;
      subtotal += itemSubtotal;
      html += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-details">
            <h4 class="cart-item-title"><a href="product-detail.html?id=${item.id}">${item.name}</a></h4>
            <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="changeCartQuantity(${item.id}, -1)">-</button>
              <span style="font-size: 0.9rem; font-weight: 600; min-width: 20px; text-align: center;">${item.quantity}</span>
              <button class="qty-btn" onclick="changeCartQuantity(${item.id}, 1)">+</button>
            </div>
          </div>
          <button class="cart-item-delete" onclick="removeCartItem(${item.id})" aria-label="Remove item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    });

    cartItemsList.innerHTML = html;
    if (cartSubtotalAmount) {
      cartSubtotalAmount.textContent = `₹${subtotal.toLocaleString()}`;
    }
  }
}

/* ==========================================================================
   3. TOAST NOTIFICATIONS
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.id = 'toastNotification';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span id="toastMessage"></span>`;
    document.body.appendChild(toast);
  }

  const msgSpan = document.getElementById('toastMessage') || toast.querySelector('span');
  if (msgSpan) msgSpan.textContent = message;

  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   4. WISHLIST HEART TOGGLE
   ========================================================================== */
function toggleWishlist(btn) {
  const icon = btn.querySelector('i');
  if (!icon) return;

  if (icon.classList.contains('fa-regular')) {
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    btn.classList.add('active');
    showToast('Saved to your Wishlist!');
  } else {
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    btn.classList.remove('active');
    showToast('Removed from Wishlist.');
  }
}

/* ==========================================================================
   5. PRODUCTS CATALOG PAGE LOGIC (products.html)
   ========================================================================== */
function initProductsPage() {
  const catalogGrid = document.getElementById('catalogProductsGrid');
  if (!catalogGrid) return;

  const searchInput = document.getElementById('catalogSearchInput');
  const sortSelect = document.getElementById('catalogSortSelect');
  const filterBtns = document.querySelectorAll('.category-filter-btn');
  const resultsCountText = document.getElementById('catalogResultsCount');

  // Check URL query parameters for initial filter (e.g. products.html?cat=sofa or ?search=bed)
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('cat') || 'all';
  let searchTerm = urlParams.get('search') || '';
  let sortBy = 'featured';

  if (searchInput && searchTerm) {
    searchInput.value = searchTerm;
  }

  // Update active state on filter buttons
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-category') === activeCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderFilteredCatalog();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      renderFilteredCatalog();
    });
  }

  // Sort select handler
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderFilteredCatalog();
    });
  }

  function renderFilteredCatalog() {
    let filtered = [...PRODUCTS_DATA];

    // Filter by Category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // Filter by Search Term
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.categoryName.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
      );
    }

    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update count display
    if (resultsCountText) {
      resultsCountText.innerHTML = `Showing <strong>${filtered.length}</strong> handcrafted products`;
    }

    // Render cards
    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div class="no-results-box">
          <i class="fa-solid fa-couch"></i>
          <h3>No products match your search</h3>
          <p>Try resetting filters or searching for something else like "sofa", "bed", "chair", or "table".</p>
          <button class="btn btn-secondary" onclick="resetCatalogFilters()" style="margin-top: 15px;">Reset All Filters</button>
        </div>
      `;
      return;
    }

    let cardsHTML = '';
    filtered.forEach(p => {
      const discountPill = p.oldPrice ? `<span class="product-badge badge-sale">Save ₹${p.oldPrice - p.price}</span>` : (p.badge ? `<span class="product-badge badge-bestseller">${p.badge}</span>` : '');
      const oldPriceHTML = p.oldPrice ? `<span class="old-price">₹${p.oldPrice}</span>` : '';

      cardsHTML += `
        <article class="product-card" data-category="${p.category}" data-id="${p.id}">
          <div class="product-thumb">
            ${discountPill}
            <button class="wishlist-btn" onclick="toggleWishlist(this)" aria-label="Add to wishlist">
              <i class="fa-regular fa-heart"></i>
            </button>
            <a href="product-detail.html?id=${p.id}" class="product-link">
              <img src="${p.image}" alt="${p.name}" loading="lazy" />
            </a>
          </div>
          <div class="product-details">
            <span class="product-category-name">${p.categoryName}</span>
            <h3 class="product-name">
              <a href="product-detail.html?id=${p.id}">${p.name}</a>
            </h3>
            <div class="product-rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span class="rating-count">(${p.rating} · ${p.reviews} reviews)</span>
            </div>
            <div class="product-footer">
              <div class="price-wrap">
                <span class="current-price">₹${p.price.toLocaleString()}</span>
                ${oldPriceHTML}
              </div>
              <button class="add-to-cart-btn" onclick="addToCart(${p.id}, 1, this)">
                <i class="fa-solid fa-cart-plus"></i>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </article>
      `;
    });

    catalogGrid.innerHTML = cardsHTML;
  }

  // Expose reset function
  window.resetCatalogFilters = function() {
    activeCategory = 'all';
    searchTerm = '';
    if (searchInput) searchInput.value = '';
    filterBtns.forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('.category-filter-btn[data-category="all"]');
    if (allBtn) allBtn.classList.add('active');
    renderFilteredCatalog();
  };

  // Initial render
  renderFilteredCatalog();
}

/* ==========================================================================
   6. PRODUCT DETAIL PAGE LOGIC (product-detail.html)
   ========================================================================== */
function initProductDetailPage() {
  const detailSection = document.getElementById('productDetailSection');
  if (!detailSection) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = Number(urlParams.get('id')) || 1;
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];

  // Update Page Title
  document.title = `${product.name} — Home Furniture Design`;

  // Render Breadcrumb
  const breadcrumbProductName = document.getElementById('breadcrumbProductName');
  if (breadcrumbProductName) breadcrumbProductName.textContent = product.name;

  // Main Image & Thumbnails
  const mainImage = document.getElementById('detailMainImage');
  const thumbsContainer = document.getElementById('detailGalleryThumbs');
  if (mainImage) {
    mainImage.src = product.image;
    mainImage.alt = product.name;
  }

  if (thumbsContainer && product.gallery) {
    let thumbsHTML = '';
    product.gallery.forEach((imgUrl, idx) => {
      thumbsHTML += `
        <button class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchDetailImage(this, '${imgUrl}')">
          <img src="${imgUrl}" alt="${product.name} view ${idx + 1}" />
        </button>
      `;
    });
    thumbsContainer.innerHTML = thumbsHTML;
  }

  // Populate Details
  const detailCategory = document.getElementById('detailCategory');
  const detailTitle = document.getElementById('detailTitle');
  const detailRatingReviews = document.getElementById('detailRatingReviews');
  const detailCurrentPrice = document.getElementById('detailCurrentPrice');
  const detailOldPrice = document.getElementById('detailOldPrice');
  const detailSavePill = document.getElementById('detailSavePill');
  const detailDescription = document.getElementById('detailDescription');
  const specMaterial = document.getElementById('specMaterial');
  const specDimensions = document.getElementById('specDimensions');
  const specFinish = document.getElementById('specFinish');
  const specWarranty = document.getElementById('specWarranty');

  if (detailCategory) detailCategory.textContent = product.categoryName;
  if (detailTitle) detailTitle.textContent = product.name;
  if (detailRatingReviews) detailRatingReviews.textContent = `${product.rating} (${product.reviews} verified reviews)`;
  if (detailCurrentPrice) detailCurrentPrice.textContent = `₹${product.price.toLocaleString()}`;

  if (detailOldPrice) {
    if (product.oldPrice) {
      detailOldPrice.textContent = `₹${product.oldPrice.toLocaleString()}`;
      detailOldPrice.style.display = 'inline';
    } else {
      detailOldPrice.style.display = 'none';
    }
  }

  if (detailSavePill) {
    if (product.oldPrice) {
      const saved = product.oldPrice - product.price;
      detailSavePill.textContent = `Save ₹${saved.toLocaleString()}`;
      detailSavePill.style.display = 'inline-block';
    } else {
      detailSavePill.style.display = 'none';
    }
  }

  if (detailDescription) detailDescription.textContent = product.description;
  if (specMaterial) specMaterial.textContent = product.material;
  if (specDimensions) specDimensions.textContent = product.dimensions;
  if (specFinish) specFinish.textContent = product.finish;
  if (specWarranty) specWarranty.textContent = product.warranty;

  // Tabs full text
  const fullDescP = document.getElementById('tabFullDescription');
  if (fullDescP) {
    fullDescP.innerHTML = `
      <p style="margin-bottom: 14px; font-size: 1.05rem; line-height: 1.8;">${product.description}</p>
      <p style="margin-bottom: 14px; font-size: 1.05rem; line-height: 1.8;">Every ${product.name} is meticulously built in our artisan workshop using time-honored joinery techniques. The natural grain characteristics of the wood make every single unit unique. Hand-waxed with non-toxic, eco-friendly plant oils that highlight the tactile warmth of the material.</p>
    `;
  }

  // Quantity Picker Handler
  const qtyInput = document.getElementById('detailQtyInput');
  const btnMinus = document.getElementById('detailQtyMinus');
  const btnPlus = document.getElementById('detailQtyPlus');

  if (btnMinus && qtyInput) {
    btnMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) qtyInput.value = val - 1;
    });
  }

  if (btnPlus && qtyInput) {
    btnPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      qtyInput.value = val + 1;
    });
  }

  // Add to Cart Button on Detail page
  const btnDetailAddToCart = document.getElementById('btnDetailAddToCart');
  if (btnDetailAddToCart) {
    btnDetailAddToCart.addEventListener('click', () => {
      const qty = parseInt(qtyInput ? qtyInput.value : 1) || 1;
      addToCart(product.id, qty, btnDetailAddToCart);
    });
  }

  // WhatsApp Enquiry Button
  const btnWhatsAppEnquiry = document.getElementById('btnWhatsAppEnquiry');
  if (btnWhatsAppEnquiry) {
    const waText = encodeURIComponent(`Hello Home Furniture Design! I am interested in ordering the "${product.name}" (₹${product.price}). Could you please share delivery schedule and customization details?`);
    btnWhatsAppEnquiry.href = `https://wa.me/919876543210?text=${waText}`;
  }

  // Render Related Products
  const relatedGrid = document.getElementById('relatedProductsGrid');
  if (relatedGrid) {
    const related = PRODUCTS_DATA.filter(p => p.id !== product.id).slice(0, 3);
    let relatedHTML = '';
    related.forEach(p => {
      relatedHTML += `
        <article class="product-card" data-category="${p.category}" data-id="${p.id}">
          <div class="product-thumb">
            <span class="product-badge badge-bestseller">${p.badge || 'Popular'}</span>
            <a href="product-detail.html?id=${p.id}" class="product-link">
              <img src="${p.image}" alt="${p.name}" loading="lazy" />
            </a>
          </div>
          <div class="product-details">
            <span class="product-category-name">${p.categoryName}</span>
            <h3 class="product-name"><a href="product-detail.html?id=${p.id}">${p.name}</a></h3>
            <div class="product-footer">
              <div class="price-wrap">
                <span class="current-price">₹${p.price.toLocaleString()}</span>
              </div>
              <button class="add-to-cart-btn" onclick="addToCart(${p.id}, 1, this)">
                <i class="fa-solid fa-cart-plus"></i>
                <span>Add</span>
              </button>
            </div>
          </div>
        </article>
      `;
    });
    relatedGrid.innerHTML = relatedHTML;
  }
}

// Switch Detail Gallery Big Image
function switchDetailImage(thumbBtn, imgUrl) {
  const mainImage = document.getElementById('detailMainImage');
  if (mainImage) {
    mainImage.style.opacity = '0.5';
    mainImage.src = imgUrl;
    setTimeout(() => mainImage.style.opacity = '1', 150);
  }
  document.querySelectorAll('.thumb-btn').forEach(btn => btn.classList.remove('active'));
  thumbBtn.classList.add('active');
}

// Switch Tabs on Product Detail page
function openProductTab(evt, tabId) {
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.tab-nav-btn').forEach(btn => btn.classList.remove('active'));

  const targetPanel = document.getElementById(tabId);
  if (targetPanel) targetPanel.classList.add('active');
  if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
}

/* ==========================================================================
   7. DEDICATED CART PAGE LOGIC (cart.html)
   ========================================================================== */
function initCartPage() {
  const cartPageSection = document.getElementById('cartPageSection');
  if (!cartPageSection) return;

  renderCartPage();

  // Coupon Form submit
  const couponForm = document.getElementById('couponForm');
  if (couponForm) {
    couponForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const codeInput = document.getElementById('couponCodeInput');
      if (!codeInput) return;
      const code = codeInput.value.trim().toUpperCase();

      if (code === 'EARTH30') {
        saveActiveCoupon({ code: 'EARTH30', discountPercent: 30 });
        showToast('Coupon "EARTH30" applied! 30% discount activated.');
        renderCartPage();
      } else if (code === 'WELCOME15') {
        saveActiveCoupon({ code: 'WELCOME15', discountPercent: 15 });
        showToast('Coupon "WELCOME15" applied! 15% discount activated.');
        renderCartPage();
      } else {
        showToast('Invalid promo code. Try "EARTH30" or "WELCOME15"!');
      }
    });
  }
}

function renderCartPage() {
  const cart = getCart();
  const cartContainer = document.getElementById('cartPageContent');
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="cart-empty-fullpage">
        <i class="fa-solid fa-basket-shopping"></i>
        <h2>Your Shopping Cart is Empty</h2>
        <p>Looks like you haven't added any handcrafted furniture to your cart yet. Explore our latest arrivals or room collections.</p>
        <a href="products.html" class="btn btn-primary">
          <i class="fa-solid fa-couch"></i>
          <span>Explore Furniture Collection</span>
        </a>
      </div>
    `;
    return;
  }

  // Calculate pricing
  let subtotal = 0;
  let itemsRows = '';

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    itemsRows += `
      <tr>
        <td>
          <div class="cart-product-cell">
            <a href="product-detail.html?id=${item.id}">
              <img src="${item.image}" alt="${item.name}" class="cart-item-thumbnail" />
            </a>
            <div>
              <span class="cart-item-category">${item.categoryName || item.category}</span>
              <a href="product-detail.html?id=${item.id}" class="cart-item-title-link">${item.name}</a>
              <div class="cart-item-unit-price" style="font-size: 0.85rem;">Unit: ₹${item.price.toLocaleString()}</div>
            </div>
          </div>
        </td>
        <td class="cart-item-unit-price">₹${item.price.toLocaleString()}</td>
        <td>
          <div class="cart-page-qty-picker">
            <button onclick="changeCartQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeCartQuantity(${item.id}, 1)">+</button>
          </div>
        </td>
        <td class="cart-item-subtotal-price">₹${itemTotal.toLocaleString()}</td>
        <td style="text-align: right;">
          <button class="cart-item-remove-btn" onclick="removeCartItem(${item.id})" title="Remove item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  });

  // Calculate Discounts & Shipping
  const coupon = getActiveCoupon();
  let discountAmount = 0;
  if (coupon && coupon.discountPercent) {
    discountAmount = Math.round((subtotal * coupon.discountPercent) / 100);
  }

  const shipping = subtotal > 500 ? 0 : 49;
  const taxable = subtotal - discountAmount;
  const estimatedTax = Math.round(taxable * 0.05);
  const grandTotal = Math.max(0, taxable + shipping + estimatedTax);

  cartContainer.innerHTML = `
    <div class="cart-page-grid">
      <!-- Left: Items Table -->
      <div class="cart-items-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h2 style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--color-primary-dark);">Your Cart Items (${cart.reduce((s,i)=>s+i.quantity,0)})</h2>
          <button onclick="clearAllCart()" style="color: #dc2626; font-size: 0.9rem; font-weight: 600; cursor: pointer;">
            <i class="fa-regular fa-trash-can"></i> Clear Cart
          </button>
        </div>

        <div style="overflow-x: auto;">
          <table class="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${itemsRows}
            </tbody>
          </table>
        </div>

        <div class="cart-actions-row">
          <a href="products.html" class="btn btn-secondary">
            <i class="fa-solid fa-arrow-left"></i>
            <span>Continue Shopping</span>
          </a>
          <button onclick="renderCartPage()" class="btn btn-secondary">
            <i class="fa-solid fa-rotate-right"></i>
            <span>Update Cart</span>
          </button>
        </div>
      </div>

      <!-- Right: Summary Card -->
      <div class="order-summary-box">
        <h3 class="order-summary-title">Order Summary</h3>

        <div class="summary-line-item">
          <span>Cart Subtotal</span>
          <strong>₹${subtotal.toLocaleString()}</strong>
        </div>

        ${discountAmount > 0 ? `
          <div class="summary-line-item discount">
            <span>Coupon Discount (${coupon.code})</span>
            <strong>-₹${discountAmount.toLocaleString()}</strong>
          </div>
        ` : ''}

        <div class="summary-line-item">
          <span>White Glove Delivery</span>
          <strong>${shipping === 0 ? '<span style="color: var(--color-success);">FREE</span>' : '₹' + shipping}</strong>
        </div>

        <div class="summary-line-item">
          <span>Estimated Sales Tax (5%)</span>
          <strong>₹${estimatedTax.toLocaleString()}</strong>
        </div>

        <!-- Promo Code Input -->
        <form id="couponForm" class="promo-box" onsubmit="event.preventDefault(); applyPromoCodeFromInput();">
          <input type="text" id="couponCodeInput" class="promo-input" placeholder="Promo Code" value="${coupon ? coupon.code : ''}" />
          <button type="submit" class="btn-apply-promo">Apply</button>
        </form>
        <p class="promo-hint">✨ Tip: Try code <strong>EARTH30</strong> for 30% off!</p>

        <div class="summary-total-line">
          <span>Estimated Total</span>
          <span class="summary-total-amount">₹${grandTotal.toLocaleString()}</span>
        </div>

        <button class="btn btn-primary btn-full-checkout" onclick="handleCheckout()">
          <span>Proceed to Checkout</span>
          <i class="fa-solid fa-lock"></i>
        </button>

        <ul class="checkout-guarantee-list">
          <li><i class="fa-solid fa-shield-halved"></i> 256-bit SSL Bank Encrypted Checkout</li>
          <li><i class="fa-solid fa-truck-fast"></i> Insured White Glove In-Home Delivery</li>
          <li><i class="fa-solid fa-rotate-left"></i> 30-Day Hassle-Free In-Home Trial</li>
        </ul>
      </div>
    </div>
  `;
}

function applyPromoCodeFromInput() {
  const codeInput = document.getElementById('couponCodeInput');
  if (!codeInput) return;
  const code = codeInput.value.trim().toUpperCase();

  if (code === 'EARTH30') {
    saveActiveCoupon({ code: 'EARTH30', discountPercent: 30 });
    showToast('Promo code EARTH30 applied: 30% off!');
    renderCartPage();
  } else if (code === 'WELCOME15') {
    saveActiveCoupon({ code: 'WELCOME15', discountPercent: 15 });
    showToast('Promo code WELCOME15 applied: 15% off!');
    renderCartPage();
  } else {
    showToast('Invalid promo code. Try "EARTH30"');
  }
}

function handleCheckout() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast('Your cart is empty. Please add items before checkout.');
    return;
  }
  showToast('Initiating secure checkout...');
  setTimeout(() => {
    alert(`Thank you for choosing Home Furniture Design!\n\nYour order has been placed in demo mode.\nA confirmation email and WhatsApp invoice will be sent shortly.\n\nTotal Items: ${cart.reduce((s,i)=>s+i.quantity,0)}`);
    saveCart([]);
    saveActiveCoupon(null);
    renderCartPage();
  }, 600);
}

/* ==========================================================================
   8. CONTACT PAGE LOGIC (contact.html)
   ========================================================================== */
function initContactPage() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !phone || !email || !message) {
      showToast('Please fill in all required fields.');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending Message...</span>';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>';
      }
      contactForm.reset();
      const successCard = document.getElementById('formSuccessCard');
      if (successCard) {
        successCard.style.display = 'block';
        successCard.scrollIntoView({ behavior: 'smooth' });
      }
      showToast('Thank you! Your message has been received.');
    }, 900);
  });

  // FAQ Accordion Handlers
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Copy Showroom Address to Clipboard
function copyShowroomAddress() {
  const address = '42 Heritage Studio Row, Crafts District, City 400001';
  navigator.clipboard.writeText(address).then(() => {
    showToast('Showroom address copied to clipboard!');
  }).catch(() => {
    showToast(address);
  });
}

/* ==========================================================================
   9. GLOBAL SEARCH MODAL
   ========================================================================== */
function initSearchModal() {
  const searchModal = document.getElementById('searchModal');
  const openSearchBtn = document.getElementById('openSearchBtn');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const siteSearchInput = document.getElementById('siteSearchInput');

  if (!searchModal) return;

  function openSearch() {
    searchModal.classList.add('active');
    if (siteSearchInput) {
      setTimeout(() => siteSearchInput.focus(), 150);
    }
  }

  function closeSearch() {
    searchModal.classList.remove('active');
  }

  if (openSearchBtn) openSearchBtn.addEventListener('click', openSearch);
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  // Pressing Enter in global search redirects to products.html?search=...
  if (siteSearchInput) {
    siteSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = siteSearchInput.value.trim();
        if (query) {
          window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
      }
    });
  }

  window.quickSearch = function(tag) {
    window.location.href = `products.html?search=${encodeURIComponent(tag)}`;
  };
}

/* ==========================================================================
   10. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

  if (!mobileMenuToggle || !mobileNavDrawer) return;

  mobileMenuToggle.addEventListener('click', () => {
    mobileNavDrawer.classList.toggle('open');
  });

  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('open');
    });
  });
}

/* ==========================================================================
   11. NAVBAR SCROLL EFFECT & SCROLL TO TOP
   ========================================================================== */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Set current year in footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   12. MULTILINGUAL SUPPORT (English / Hindi Toggle)
   ========================================================================== */
const TRANSLATIONS = {
  en: {
    navHome: 'Home',
    navProducts: 'Shop',
    navCategories: 'Categories',
    navAbout: 'About',
    navContact: 'Contact',
    navSofaManager: 'Sofa Manager',
    topPromo: '🌿 Seasonal Spring Sale: Enjoy <span>Up to 30% Off</span> Handcrafted Wood Collections | Code: <span>EARTH30</span>',
    btnAddToCart: 'Add to Cart',
    btnCheckout: 'Proceed to Checkout',
    yourCart: 'Your Cart',
    searchPlaceholder: 'Search solid wood dining tables, sofas, beds, chairs...'
  },
  hi: {
    navHome: 'होम',
    navProducts: 'उत्पाद',
    navCategories: 'श्रेणियां',
    navAbout: 'हमारे बारे में',
    navContact: 'संपर्क करें',
    navSofaManager: 'सोफा प्रबंधक',
    topPromo: '🌿 वसंत ऋतु सेल: हस्तनिर्मित लकड़ी फर्नीचर पर <span>30% तक छूट</span> | कोड: <span>EARTH30</span>',
    btnAddToCart: 'कार्ट में जोड़ें',
    btnCheckout: 'चेकआउट करें',
    yourCart: 'आपकी कार्ट',
    searchPlaceholder: 'सोफा, बेड, डाइनिंग टेबल, कुर्सियां खोजें...'
  }
};

function getActiveLanguage() {
  return localStorage.getItem('hfd_lang') || 'en';
}

function setLanguage(lang) {
  localStorage.setItem('hfd_lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Update nav links
  document.querySelectorAll('[data-i18n="navHome"]').forEach(el => el.textContent = dict.navHome);
  document.querySelectorAll('[data-i18n="navProducts"]').forEach(el => el.textContent = dict.navProducts);
  document.querySelectorAll('[data-i18n="navAbout"]').forEach(el => el.textContent = dict.navAbout);
  document.querySelectorAll('[data-i18n="navContact"]').forEach(el => el.textContent = dict.navContact);
  document.querySelectorAll('[data-i18n="yourCart"]').forEach(el => el.textContent = dict.yourCart);

  // Update language toggle button label
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.innerHTML = lang === 'en' 
      ? '<i class="fa-solid fa-globe"></i> <span>हिंदी</span>' 
      : '<i class="fa-solid fa-globe"></i> <span>English</span>';
  }
}

function toggleLanguage() {
  const current = getActiveLanguage();
  const next = current === 'en' ? 'hi' : 'en';
  setLanguage(next);
  showToast(next === 'hi' ? 'भाषा हिंदी में बदली गई' : 'Language switched to English');
}



/* ==========================================================================
   14. HOMEPAGE FEATURED PRODUCTS FILTER (index.html)
   ========================================================================== */
function applyProductFilter(category) {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    if (tab.getAttribute('data-filter') === category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  document.querySelectorAll('#productsGrid .product-card').forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterCategory(categoryKey) {
  applyProductFilter(categoryKey);
  const productSection = document.getElementById('products');
  if (productSection) {
    productSection.scrollIntoView({ behavior: 'smooth' });
  }
  showToast(`Showing "${categoryKey.toUpperCase()}" collection`);
}

/* ==========================================================================
   15. HERO BACKGROUND SLIDER (Auto-Play & Interactive Controls)
   ========================================================================== */
function initHeroSlider() {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const progressBar = document.getElementById('heroProgressBar');
  const heroSection = document.getElementById('home');

  if (!slides || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  const slideDuration = 5000; // 5 seconds per slide
  const tickInterval = 50;
  let elapsed = 0;
  let progressTimer = null;
  let isPaused = false;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    slides.forEach((slide, idx) => {
      if (idx === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
      } else {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
      }
    });

    resetTimer();
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function resetTimer() {
    elapsed = 0;
    if (progressBar) {
      progressBar.style.width = '0%';
    }
  }

  function startAutoPlay() {
    clearInterval(progressTimer);
    resetTimer();
    progressTimer = setInterval(() => {
      if (isPaused) return;

      elapsed += tickInterval;
      const percent = Math.min((elapsed / slideDuration) * 100, 100);
      if (progressBar) {
        progressBar.style.width = percent + '%';
      }

      if (elapsed >= slideDuration) {
        nextSlide();
      }
    }, tickInterval);
  }

  // Next / Previous Click
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
    });
  }

  // Dots Click
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-slide'), 10);
      if (!isNaN(targetIndex)) {
        showSlide(targetIndex);
      }
    });
  });

  // Pause on hover
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    heroSection.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    // Touch Swipe gestures for mobile & tablets
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;

      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }, { passive: true });

    // Keyboard navigation (Arrow keys when hero is in view)
    document.addEventListener('keydown', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });
  }

  // Initialize first slide and start auto-play timer
  showSlide(0);
  startAutoPlay();
}

document.addEventListener('DOMContentLoaded', () => {
  // Update cart count and drawer on load
  updateGlobalCartUI();

  // Initialize modular pages
  initProductsPage();
  initProductDetailPage();
  initCartPage();
  initContactPage();

  // Initialize hero slider
  initHeroSlider();

  // Initialize global widgets
  initSearchModal();
  initMobileNav();
  initScrollEffects();

  // Homepage filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedFilter = tab.getAttribute('data-filter');
      applyProductFilter(selectedFilter);
    });
  });

  // Cart Drawer buttons
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');

  if (openCartBtn && cartDrawer && cartBackdrop) {
    openCartBtn.addEventListener('click', (e) => {
      // If we are already on cart.html, let the link navigate
      if (window.location.pathname.endsWith('cart.html')) return;

      e.preventDefault();
      cartDrawer.classList.add('open');
      cartBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeCartBtn && cartDrawer && cartBackdrop) {
    closeCartBtn.addEventListener('click', () => {
      cartDrawer.classList.remove('open');
      cartBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (cartBackdrop && cartDrawer) {
    cartBackdrop.addEventListener('click', () => {
      cartDrawer.classList.remove('open');
      cartBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Initialize language
  applyLanguage(getActiveLanguage());

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
});
