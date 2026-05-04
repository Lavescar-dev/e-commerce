<script>
  import Icon from './Icon.svelte';

  export let currentUser = '';
  export let cartCount = 0;
  export let wishlistCount = 0;
  export let currentPage = 'home';
  export let mobileMenuOpen = false;
  export let onNavigate = () => {};
  export let onToggleAuth = () => {};
  export let onToggleCart = () => {};
  export let onToggleMobileMenu = () => {};

  const links = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'shop', label: 'Mağaza' },
    { id: 'about', label: 'Hakkımızda' },
  ];
</script>

<nav class="glass fixed inset-x-0 top-0 z-50 border-b border-neutral-100">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
    <div class="flex items-center gap-x-3">
      <div class="logo-font flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-800 text-3xl font-bold text-white">
        L
      </div>
      <button
        type="button"
        class="logo-font cursor-pointer text-3xl font-semibold tracking-tight text-emerald-900"
        onclick={() => onNavigate('home')}
      >
        lumina
      </button>
    </div>

    <div class="hidden items-center gap-x-10 text-sm font-semibold tracking-wide md:flex">
      {#each links as link}
        <button
          type="button"
          class={`nav-link cursor-pointer uppercase ${currentPage === link.id ? 'is-active text-emerald-800' : ''}`}
          onclick={() => onNavigate(link.id)}
        >
          {link.label}
        </button>
      {/each}
    </div>

    <div class="flex items-center gap-x-5 md:gap-x-6">
      <button
        type="button"
        class="relative hidden items-center transition hover:text-rose-500 md:flex"
        class:text-rose-500={currentPage === 'wishlist' || wishlistCount > 0}
        aria-label="Favoriler"
        onclick={() => onNavigate('wishlist')}
      >
        <Icon name={wishlistCount > 0 ? 'heartFill' : 'heart'} size={26} />
        {#if wishlistCount > 0}
          <span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
            {wishlistCount}
          </span>
        {/if}
      </button>

      <button
        type="button"
        class="flex items-center gap-x-2 transition hover:text-emerald-700"
        onclick={onToggleAuth}
      >
        <Icon name="user" size={26} />
        <span class="hidden text-xs font-bold uppercase tracking-widest md:inline">
          {currentUser || 'Giriş Yap'}
        </span>
      </button>

      <button
        type="button"
        class="relative flex items-center gap-x-2 transition hover:text-emerald-700"
        aria-label="Sepet"
        onclick={onToggleCart}
      >
        <Icon name="bag" size={26} />
        <span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
          {cartCount}
        </span>
      </button>

      <button type="button" class="text-2xl md:hidden" onclick={onToggleMobileMenu}>
        <Icon name="menu" size={26} />
      </button>
    </div>
  </div>

  <div class:hidden={!mobileMenuOpen} class="border-t bg-white py-8 md:hidden">
    <div class="flex flex-col gap-y-6 px-6 text-center text-lg font-bold uppercase tracking-widest">
      {#each links as link}
        <button type="button" class="cursor-pointer" onclick={() => onNavigate(link.id)}>
          {link.label}
        </button>
      {/each}
      <button type="button" class="flex items-center justify-center gap-2 text-rose-500" onclick={() => onNavigate('wishlist')}>
        <Icon name={wishlistCount > 0 ? 'heartFill' : 'heart'} size={20} />
        Favoriler {wishlistCount > 0 ? `(${wishlistCount})` : ''}
      </button>
    </div>
  </div>
</nav>
