const products = [
    { id: 1, name: "CHILLAX B.C.", price: 500, category: "new", img: "images/CHILLAX-B.C.jpg" },
    { id: 2, name: "CHILLAX B.G.", price: 500, category: "new", img: "images/CHILLAX-B.G.jpg" },
    { id: 3, name: "CHILLAX G.A", price: 500, category: "new", img: "images/CHILLAX-G.A.jpg" },
    { id: 4, name: "CHILLAX I.C.", price: 500, category: "new", img: "images/CHILLAX-I.C.jpg" },
    { id: 5, name: "CHILLAX I.M.", price: 500, category: "new", img: "images/CHILLAX-I.M.jpg" },
    { id: 6, name: "CHILLAX S.H.", price: 500, category: "new", img: "images/CHILLAX-S.H.jpg" },
    { id: 7, name: "CHILLAX S.W.", price: 500, category: "new", img: "images/CHILLAX-S.W.jpg" },
    { id: 8, name: "CHILLAX T.C.", price: 500, category: "new", img: "images/CHILLAX-T.C.jpg" },
    { id: 9, name: "CHILLAX W.I.", price: 500, category: "new", img: "images/CHILLAX-W.I.jpg" },
    { id: 10, name: "CHILLAX W.L.", price: 500, category: "new", img: "images/CHILLAX-W.L.jpg" },
    { id: 11, name: "FEELA: Passionfruit Mango Guava", price: 500, category: "regular", img: "images/FEELA-Passionfruit-Mango-Guava.jpg" },
    { id: 12, name: "FEELA: Strawberry Kiwi B Gum", price: 500, category: "regular", img: "images/FEELA-Strawberry-Kiwi-BGum.jpg" },
    { id: 13, name: "FEELA: Watermelon Hubba Bubba", price: 500, category: "regular", img: "images/FEELA-Watermelon-Hubba-Bubba.jpg" },
    { id: 14, name: "NERD: Double Apple", price: 600, category: "regular", img: "images/NERD-Double-Apple.jpg" },
    { id: 15, name: "FLAVA: Black Ice", price: 450, category: "regular", img: "images/FLAVA-Black-Ice.jpg" },
    { id: 16, name: "FLAVA: Bluebomb", price: 450, category: "regular", img: "images/FLAVA-Bluebomb.jpg" },
    { id: 17, name: "FLAVA: Nerdy Gem", price: 450, category: "regular", img: "images/FLAVA-Nerdy-Gem.jpg" },
    { id: 18, name: "FLAVA: Pink Snow", price: 450, category: "regular", img: "images/FLAVA-Pink-Snow.jpg" },
    { id: 19, name: "FLAVA: Red Blast", price: 750, category: "regular", img: "images/FLAVA-Red-Blast.jpg" },
    { id: 20, name: "FLAVA: Violet Freeze", price: 450, category: "regular", img: "images/FLAVA-Violet-Freeze.jpg" },
    { id: 21, name: "CIGBAY: Green", price: 550, category: "regular", img: "images/Cigbay-Green.jpg" },
    { id: 22, name: "CIGBAY: Purple", price: 900, category: "regular", img: "images/Cigbay-Purple.jpg" },
    { id: 23, name: "FLAVA: Green-Blush", price: 450, category: "best", img: "images/FLAVA-Green-Blush.jpg" },
    { id: 24, name: "FLAVA: Hazel Silky Ice", price: 450, category: "best", img: "images/FLAVA-Hazel-Silky-Ice.jpg" },
    { id: 25, name: "FLAVA: Friobar-Red Blast", price: 500, category: "best", img: "images/FLAVA-Red-Blast-Friobar.jpg" },
    { id: 26, name: "FLAVA: Red Bluebomb", price: 450, category: "best", img: "images/FLAVA-Red-Bluebomb.jpg" },
    { id: 27, name: "FLAVA: Friobar-Violet Freeze", price: 450, category: "best", img: "images/FLAVA-Violet-Freeze-Friobar.jpg" },
    { id: 28, name: "FLAVA: Bluebomb_Cool", price: 450, category: "best", img: "images/FLAVA-Bluebomb-Cool.jpg" }
];

let cart = JSON.parse(localStorage.getItem('vape_cart')) || [];

const translations = {
    en: {
        home: "Home", products: "Products", promos: "Promotions", about: "About Us", contact: "Contact Us",
        newArrivals: "New Arrivals", bestSellers: "Best Sellers", regularItems: "Regular Items",
        search: "Search...", go: "Go", add: "Add to Cart", checkout: "Checkout", clearCart: "Clear Cart",
        subtotal: "Subtotal:", vat: "Incl. 12% VAT:", total: "Grand Total:", cartTitle: "My Cart",
        fullName: "Full Name", address: "Complete Address", delivery: "Delivery", pickup: "Pickup",
        paymentLabel: "Payment Method:", cod: "Cash on Delivery", placeOrder: "Place Order",
        gcashMsg: "Please send your payment amount to 09201234164", checkoutTitle: "Checkout",
        aboutTitle: "About Us", 
        aboutDesc: `<p>Established in 2024, our store serves the Metro Manila community by providing a curated selection of high-quality vaporizers, e-liquids, and accessories. Located at 5 Maria St., Villa Susana, Pasig, we operate with a focus on reliability and product standards for all our customers.</p>
                    <h5 class="fw-bold text-dark mt-4">Our Mission</h5>
                    <p>We aim to provide viable alternatives for individuals looking to transition away from traditional combustible tobacco. By offering a diverse range of nicotine delivery systems and professional guidance, we support our clients in exploring harm-reduction options.</p>
                    <h5 class="fw-bold text-dark mt-4">Our Vision</h5>
                    <p>To be the primary destination for vaping hardware in Metro Manila, fostered by a commitment to product integrity and the promotion of a smoke-free lifestyle through modern technology.</p>`,
        promoTitle: "Promotions", promoBanner: "Oops, you missed it.", promoDetails: "Stay tuned for our upcoming promotions.",
        noResults: "No products found.",
        collection:"Our Collection"
    },
    tl: {
        home: "Home", products: "Mga Produkto", promos: "Mga Promosyon", about: "Tungkol sa Amin", contact: "Kontakin Kami",
        newArrivals: "Bagong Dating", bestSellers: "Pinakamabenta", regularItems: "Mga Regular na Gamit",
        search: "Maghanap...", go: "Hanapin", add: "Idagdag sa Cart", checkout: "Mag-bayad Na", clearCart: "I-clear ang Cart",
        subtotal: "Subtotal:", vat: "Kasama ang 12% VAT:", total: "Kabuuang Halaga:", cartTitle: "Aking Cart",
        fullName: "Buong Pangalan", address: "Kumpletong Address", delivery: "I-deliver", pickup: "I-pickup",
        paymentLabel: "Paraan ng Pagbayad:", cod: "Cash on Delivery", placeOrder: "I-place ang Order",
        gcashMsg: "Bayad sa Gcash: Ipadala ang", checkoutTitle: "Pagbabayad",
        aboutTitle: "Tungkol sa Amin", 
        aboutDesc: `<p>Itinatag noong 2024, ang aming tindahan ay nagsisilbi sa komunidad ng Metro Manila sa pamamagitan ng pagbibigay ng maingat na piniling mga de-kalidad na vaporizer, e-liquid, at mga accessory. Matatagpuan sa 5 Maria St., Villa Susana, Pasig, kami ay nagpapatakbo nang may pagtuon sa pagiging maaasahan at mga pamantayan ng produkto para sa lahat ng aming mga customer.</p>
                    <h5 class="fw-bold text-dark mt-4">Ang Aming Misyon</h5>
                    <p>Layunin naming magbigay ng mga alternatibo para sa mga indibidwal na nagnanais na lumayo sa tradisyonal na tabako. Sa pamamagitan ng pag-aalok ng iba't ibang nicotine delivery systems at propesyonal na gabay, tinutulungan namin ang aming mga kliyente sa pagtuklas ng mga opsyon para sa harm-reduction.</p>
                    <h5 class="fw-bold text-dark mt-4">Ang Aming Bisyon</h5>
                    <p>Ang maging pangunahing destinasyon para sa vaping hardware sa Metro Manila, na itinataguyod ng pangako sa integridad ng produkto at pagtataguyod ng isang smoke-free na pamumuhay sa pamamagitan ng modernong teknolohiya.</p>`,
        promoTitle: "Mga Promosyon", promoBanner: "Paumanhin, tapos na ito.", promoDetails: "Manatiling nakatutok para sa aming mga susunod na promosyon.",
        noResults: "Walang nahanap na produkto.",
        collection:"Aming Koleksyon"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if age is already verified
    const isVerified = sessionStorage.getItem('age_verified');
    
    if (!isVerified) {
        const ageModalElement = document.getElementById('ageModal');
        
        if (ageModalElement) {
            // Use a slight delay to ensure Bootstrap is fully initialized
            setTimeout(() => {
                const ageModal = new bootstrap.Modal(ageModalElement);
                ageModal.show();
            }, 100);
        }
    }

    // 2. Language and Search Logic
    const savedLang = localStorage.getItem('vape_lang') || 'en';
    const langSelector = document.getElementById('langSwitch');
    if (langSelector) langSelector.value = savedLang;

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    if (searchInput) {
        searchInput.addEventListener('input', () => typeof filterProducts === 'function' && filterProducts());
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', () => typeof filterProducts === 'function' && filterProducts());
    }

    // 3. Page Rendering
    if (document.getElementById('new-arrivals-marquee')) {
        if (typeof renderHome === 'function') renderHome();
    } else if (document.getElementById('new-arrivals-grid')) {
        if (typeof renderCategorizedProducts === 'function') renderCategorizedProducts();
    }
    
    if (typeof updateLanguage === 'function') updateLanguage();
    if (typeof updateCartUI === 'function') updateCartUI();
});

// FUNCTIONS MUST BE OUTSIDE THE DOM CONTENT LOADED TO BE CALLED BY ONCLICK
function confirmAge() {
    sessionStorage.setItem('age_verified', 'true');
    const ageModalElement = document.getElementById('ageModal');
    const modal = bootstrap.Modal.getInstance(ageModalElement);
    if (modal) {
        modal.hide();
    } else {
        // Fallback for some Bootstrap versions
        const newModal = new bootstrap.Modal(ageModalElement);
        newModal.hide();
    }
}

function redirectUnderage() {
    window.location.href = "https://www.google.com";
}

function updateLanguage() {
    const lang = document.getElementById('langSwitch').value;
    localStorage.setItem('vape_lang', lang);
    const t = translations[lang];

    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href?.includes('index.html')) link.innerText = t.home;
        if (href?.includes('products.html')) link.innerText = t.products;
        if (href?.includes('promotions.html')) link.innerText = t.promos;
        if (href?.includes('about.html')) link.innerText = t.about;
        if (href?.includes('contact.html')) link.innerText = t.contact;
    });

    document.querySelectorAll('h2, h3, h4, h5').forEach(h => {
        if (h.innerText.match(/New Arrivals|Bagong Dating/i)) h.innerText = t.newArrivals;
        if (h.innerText.match(/Best Sellers|Pinakamabenta/i)) h.innerText = t.bestSellers;
        if (h.innerText.match(/Regular Items|Regular na Gamit/i)) h.innerText = t.regularItems;
        if (h.innerText.match(/My Cart|Aking Cart/i)) h.innerText = t.cartTitle;
        if (h.innerText.match(/Checkout|Pagbabayad/i)) h.innerText = t.checkoutTitle;
        if (h.innerText.match(/About Us|Tungkol sa Amin/i)) h.innerText = t.aboutTitle;
        if (h.innerText.match(/Promotions|Mga Promosyon/i)) h.innerText = t.promoTitle;
        if (h.innerText.match(/Our Collection|Aming Koleksyon/i)) h.innerText = t.collection;
    });

    if (document.getElementById('promoBanner')) document.getElementById('promoBanner').innerText = t.promoBanner;
    if (document.getElementById('promoDetails')) document.getElementById('promoDetails').innerText = t.promoDetails;
    
    // Updated to use innerHTML to support the <p> and <h5> tags in the description
    if (document.getElementById('aboutDescription')) document.getElementById('aboutDescription').innerHTML = t.aboutDesc;
    
    if (document.getElementById('searchBtn')) document.getElementById('searchBtn').innerText = t.go;
    if (document.getElementById('searchInput')) document.getElementById('searchInput').placeholder = t.search;
    if (document.getElementById('clearCartBtn')) document.getElementById('clearCartBtn').innerText = t.clearCart;

    filterProducts();
    updateCartUI();
}

function openCart() { document.getElementById('cartSidebar')?.classList.add('active'); }
function closeCart() { document.getElementById('cartSidebar')?.classList.remove('active'); }

function clearCart() {
    if (confirm("Clear your cart?")) {
        cart = [];
        localStorage.removeItem('vape_cart');
        updateCartUI();
    }
}

function updateCartUI() {
    const lang = document.getElementById('langSwitch')?.value || 'en';
    const t = translations[lang];
    const badge = document.getElementById('cart-count');
    if(badge) badge.innerText = cart.reduce((sum, i) => sum + i.quantity, 0);
    
    const list = document.getElementById('cart-items');
    const summary = document.getElementById('cart-summary');
    if(!list || !summary) return;

    if (cart.length === 0) {
        list.innerHTML = `<p class="text-muted text-center py-3">Empty</p>`;
        summary.innerHTML = "";
        return;
    }

    list.innerHTML = cart.map((item, idx) => `
        <div class="d-flex justify-content-between mb-2 small border-bottom pb-1 align-items-center">
            <span>${item.name} (x${item.quantity})</span>
            <div>₱${(item.price * item.quantity).toLocaleString()} <button class="btn btn-sm text-danger ms-2" onclick="removeItem(${idx})">×</button></div>
        </div>`).join('');

    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const vat = total * (12 / 112);
    summary.innerHTML = `
        <div class="d-flex justify-content-between small text-muted"><span>${t.subtotal}</span><span>₱${(total-vat).toLocaleString(undefined,{minimumFractionDigits:2})}</span></div>
        <div class="d-flex justify-content-between small text-muted"><span>${t.vat}</span><span>₱${vat.toLocaleString(undefined,{minimumFractionDigits:2})}</span></div>
        <div class="d-flex justify-content-between fw-bold mt-1 border-top pt-1"><span>${t.total}</span><span>₱${total.toLocaleString()}</span></div>`;
    
    if(document.getElementById('checkoutBtn')) document.getElementById('checkoutBtn').innerText = t.checkout;
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    const cartItem = cart.find(i => i.id === id);
    if (cartItem) cartItem.quantity++; else cart.push({...item, quantity: 1});
    localStorage.setItem('vape_cart', JSON.stringify(cart));
    updateCartUI();
    openCart();
}

function removeItem(idx) { 
    if (cart[idx].quantity > 1) cart[idx].quantity--; 
    else cart.splice(idx, 1); 
    localStorage.setItem('vape_cart', JSON.stringify(cart));
    updateCartUI(); 
}

function filterProducts() {
    const query = document.getElementById('searchInput')?.value.toLowerCase() || "";
    const lang = document.getElementById('langSwitch')?.value || 'en';
    const t = translations[lang];

    const grids = ['new-arrivals-grid', 'best-sellers-grid', 'regular-items-grid'];
    grids.forEach(gridId => {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        grid.innerHTML = "";
        let cat = gridId.split('-')[0];
        const filtered = products.filter(p => p.category === cat && p.name.toLowerCase().includes(query));
        if (filtered.length > 0) filtered.forEach(p => grid.innerHTML += createProductCard(p));
        else if (query !== "") grid.innerHTML = `<p class='text-muted text-center w-100'>${t.noResults}</p>`;
        else products.filter(p => p.category === cat).forEach(p => grid.innerHTML += createProductCard(p));
    });
}

function createProductCard(p) {
    const lang = document.getElementById('langSwitch')?.value || 'en';
    return `
    <div class="col-md-3 mb-4">
        <div class="card h-100 border-0 shadow-sm text-center p-2">
            <div class="img-hover-box"><img src="${p.img}" class="zoom-img w-100"></div>
            <div class="card-body">
                <p class="fw-bold mb-1">${p.name}</p>
                <p class="text-muted small">₱ ${p.price.toLocaleString()}</p>
                <button class="btn btn-dark btn-sm w-100 rounded-pill" onclick="addToCart(${p.id})">${translations[lang].add}</button>
            </div>
        </div>
    </div>`;
}

function renderHome() {
    const marquee = document.getElementById('new-arrivals-marquee');
    if(marquee && marquee.children.length === 0) {
        // Slice to 5 items to keep the 'huge space' aesthetic and avoid crowding
        const carouselPool = products.filter(p => p.category === 'new').slice(0, 5);
        
        const arrivalImages = carouselPool
            .map(p => `
                <img src="${p.img}" 
                     class="carousel-img cursor-pointer" 
                     alt="${p.name}" 
                     onclick="addToCart(${p.id})">`)
            .join('');
        
        // Double the content for a seamless infinite loop
        marquee.innerHTML = arrivalImages + arrivalImages; 
    }
    filterProducts();
}

function renderCategorizedProducts() { filterProducts(); }
function proceedToCheckout() { if(cart.length === 0) return; new bootstrap.Modal(document.getElementById('checkoutModal')).show(); toggleCheckoutFields(); }

function toggleCheckoutFields() {
    const isPickup = document.getElementById('optPickup').checked;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const lang = document.getElementById('langSwitch').value;
    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

    // Toggle Address vs Pickup Info
    const addressSection = document.getElementById('addressSection');
    const pickupSection = document.getElementById('pickupSection');
    
    if (isPickup) {
        addressSection.classList.add('d-none');
        pickupSection.classList.remove('d-none');
    } else {
        addressSection.classList.remove('d-none');
        pickupSection.classList.add('d-none');
    }

    // Handle Gcash Instructions
    const gbox = document.getElementById('gcashInstructions');
    if (paymentMethod === "Gcash") {
        gbox.classList.remove('d-none');
        document.getElementById('gcashMsgText').innerText = translations[lang].gcashMsg;
        document.getElementById('gcashAmount').innerText = total.toLocaleString();
    } else {
        gbox.classList.add('d-none');
    }
}

function validateAndPlaceOrder() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress')?.value.trim();
    const lang = document.getElementById('langSwitch').value;
    
    // 1. Validation for Name and Philippine Phone Format
    if (!name || !/^09\d{9}$/.test(phone)) {
        return alert(lang === 'en' ? "Please check your Name and Phone (09xxxxxxxxx)" : "Pakisuri ang Pangalan at Phone (09xxxxxxxxx)");
    }

    // 2. Generate a random Order ID (e.g., #VP-83291)
    const orderId = "VP-" + Math.floor(10000 + Math.random() * 90000);

    // 3. Display Success Message
    const thankYouMsg = lang === 'en' 
        ? `Thank you for your purchase, ${name}!\nYour Order ID is: #${orderId}`
        : `Salamat sa iyong pagbili, ${name}!\nAng iyong Order ID ay: #${orderId}`;
    
    alert(thankYouMsg);

    // 4. Clear the Cart Data
    cart = []; 
    localStorage.removeItem('vape_cart'); 
    updateCartUI(); 
    closeCart();

    // 5. Clear / Reset All Form Fields
    document.getElementById('custName').value = "";
    document.getElementById('custPhone').value = "";
    if (document.getElementById('custAddress')) document.getElementById('custAddress').value = "";
    
    // Reset radio buttons to default (Delivery)
    document.getElementById('typeDelivery').checked = true;
    toggleCheckoutFields();

    // 6. Close the Modal
    const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    if (checkoutModal) checkoutModal.hide();
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    // Show the Bootstrap Modal
    const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
    thankYouModal.show();

    // Optional: Clear the form after submission
    this.reset();
});
