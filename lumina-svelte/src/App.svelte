<script>
  import { onDestroy, onMount } from 'svelte';
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import AuthModal from './components/AuthModal.svelte';
  import CartModal from './components/CartModal.svelte';
  import ProductModal from './components/ProductModal.svelte';
  import ToastHost from './components/ToastHost.svelte';
  import HomePage from './sections/HomePage.svelte';
  import ShopPage from './sections/ShopPage.svelte';
  import AboutPage from './sections/AboutPage.svelte';
  import CheckoutPage from './sections/CheckoutPage.svelte';
  import { categories, products } from './data/products.js';

  let currentPage = 'home';
  let cart = [];
  let currentUser = '';
  let currentProduct = null;
  let authModalOpen = false;
  let cartOpen = false;
  let mobileMenuOpen = false;
  let hydrated = false;
  let toasts = [];
  let nextToastId = 1;

  $: featuredProducts = products.slice(0, 4);
  $: cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  $: subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  $: shippingCost = subtotal === 0 ? 0 : subtotal > 150 ? 0 : 49;
  $: finalTotal = subtotal + shippingCost;

  $: if (hydrated && typeof localStorage !== 'undefined') {
    localStorage.setItem('luminaCart', JSON.stringify(cart));
  }

  $: if (hydrated && typeof localStorage !== 'undefined') {
    if (currentUser) {
      localStorage.setItem('luminaUser', currentUser);
    } else {
      localStorage.removeItem('luminaUser');
    }
  }

  $: if (typeof document !== 'undefined') {
    document.body.style.overflow = authModalOpen || cartOpen || currentProduct ? 'hidden' : 'auto';
  }

  onMount(() => {
    try {
      cart = JSON.parse(localStorage.getItem('luminaCart') || '[]');
    } catch {
      cart = [];
    }

    currentUser = localStorage.getItem('luminaUser') || '';
    hydrated = true;
  });

  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  });

  function showToast(message) {
    const id = nextToastId++;
    toasts = [...toasts, { id, message }];
    window.setTimeout(() => {
      toasts = toasts.filter((toast) => toast.id !== id);
    }, 2500);
  }

  function navigate(page) {
    if (page === 'checkout' && cart.length === 0) {
      currentPage = 'shop';
      showToast('Önce sepetinize ürün ekleyin.');
    } else {
      currentPage = page;
    }

    cartOpen = false;
    mobileMenuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleAuthModal() {
    authModalOpen = !authModalOpen;
  }

  function toggleCart() {
    cartOpen = !cartOpen;
    mobileMenuOpen = false;
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function openProductModal(product) {
    currentProduct = product;
  }

  function closeProductModal() {
    currentProduct = null;
  }

  function addToCart(product) {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      cart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    } else {
      cart = [...cart, { ...product, quantity: 1 }];
    }

    showToast(`${product.name} sepete eklendi.`);
  }

  function removeFromCart(index) {
    cart = cart.filter((_, itemIndex) => itemIndex !== index);
  }

  function handleLogin(name) {
    currentUser = name;
    authModalOpen = false;
    showToast('Hoş geldiniz!');
  }

  function handleLogout() {
    currentUser = '';
    authModalOpen = false;
    showToast('Çıkış yapıldı.');
  }

  function goToCheckout() {
    if (cart.length === 0) {
      showToast('Sepetiniz boş.');
      return;
    }

    cartOpen = false;
    navigate('checkout');
  }

  function confirmOrder() {
    if (cart.length === 0) return;

    showToast('Siparişiniz başarıyla alındı!');
    cart = [];

    window.setTimeout(() => {
      navigate('home');
    }, 1200);
  }

  function handleWindowKeydown(event) {
    if (event.key === 'Escape') {
      authModalOpen = false;
      cartOpen = false;
      currentProduct = null;
      mobileMenuOpen = false;
    }
  }
</script>

<svelte:window on:keydown={handleWindowKeydown} />

<div class="flex min-h-screen flex-col bg-neutral-50 text-neutral-900">
  <Navbar
    currentUser={currentUser}
    cartCount={cartCount}
    currentPage={currentPage}
    mobileMenuOpen={mobileMenuOpen}
    onNavigate={navigate}
    onToggleAuth={toggleAuthModal}
    onToggleCart={toggleCart}
    onToggleMobileMenu={toggleMobileMenu}
  />

  <main class="flex-1">
    {#if currentPage === 'home'}
      <HomePage
        featuredProducts={featuredProducts}
        onNavigate={navigate}
        onOpenProduct={openProductModal}
        onAddToCart={addToCart}
      />
    {:else if currentPage === 'shop'}
      <ShopPage
        products={products}
        categories={categories}
        onOpenProduct={openProductModal}
        onAddToCart={addToCart}
      />
    {:else if currentPage === 'about'}
      <AboutPage />
    {:else if currentPage === 'checkout'}
      <CheckoutPage
        cart={cart}
        subtotal={subtotal}
        shippingCost={shippingCost}
        total={finalTotal}
        onConfirmOrder={confirmOrder}
      />
    {/if}
  </main>

  <Footer onNavigate={navigate} />

  <AuthModal
    open={authModalOpen}
    currentUser={currentUser}
    onClose={() => (authModalOpen = false)}
    onLogin={handleLogin}
    onLogout={handleLogout}
  />

  <CartModal
    open={cartOpen}
    cart={cart}
    subtotal={subtotal}
    onClose={() => (cartOpen = false)}
    onRemove={removeFromCart}
    onCheckout={goToCheckout}
  />

  <ProductModal
    product={currentProduct}
    onClose={closeProductModal}
    onAddToCart={(product) => {
      addToCart(product);
      closeProductModal();
    }}
  />

  <ToastHost {toasts} />
</div>
