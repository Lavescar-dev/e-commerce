<script>
  import ProductCard from '../components/ProductCard.svelte';
  import Icon from '../components/Icon.svelte';

  export let featuredProducts = [];
  export let wishlist = [];
  export let onNavigate = () => {};
  export let onOpenProduct = () => {};
  export let onAddToCart = () => {};
  export let onToggleWishlist = () => {};

  const trustBadges = [
    { icon: 'truck', title: 'Ücretsiz Kargo', desc: '500₺ üzeri siparişlerde' },
    { icon: 'shield', title: 'Güvenli Alışveriş', desc: 'SSL şifreli ödeme' },
    { icon: 'refresh', title: '30 Gün İade', desc: 'Sorunsuz iade garantisi' },
    { icon: 'headset', title: '7/24 Destek', desc: 'WhatsApp ve e-posta' },
  ];

  const testimonials = [
    {
      name: 'Selin K.',
      role: 'Doğrulanmış Müşteri',
      content: 'Glow Serum 3 haftada cilt tonumdaki farkı belirgin gösterdi. Kokusu da çok hafif.',
      rating: 5,
    },
    {
      name: 'Mert A.',
      role: 'Doğrulanmış Müşteri',
      content: 'Nem bombası kreminin dokusu ağır değil ama bütün gün koruyor. Tekrar sipariş verdim.',
      rating: 5,
    },
    {
      name: 'Aylin Y.',
      role: 'Cilt Bakım Uzmanı',
      content: 'Hassas ciltlerime önerebileceğim ender markalardan. Şeffaf içerik etiketleri çok değerli.',
      rating: 5,
    },
  ];
</script>

<div>
  <section class="hero-bg relative flex h-[95vh] items-center justify-center pt-16">
    <div class="mx-auto max-w-4xl px-6 pb-10 text-center text-white">
      <h1 class="mb-8 text-6xl leading-[0.9] font-bold tracking-tighter drop-shadow-lg md:text-8xl">
        Cildin parlasın.<br />
        <span class="text-emerald-300">Doğal olarak.</span>
      </h1>
      <p class="mx-auto mb-12 max-w-xl text-lg font-medium text-white/90 drop-shadow-md md:text-xl">
        Temiz içerikli, bilimsel olarak kanıtlanmış ritüeller.<br />
        Doğadan ilham alan gerçek güzellik.
      </p>
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button
          type="button"
          class="flex w-full items-center justify-center gap-x-3 rounded-full bg-white px-12 py-6 text-lg font-bold text-emerald-900 shadow-2xl transition hover:bg-emerald-50 sm:w-auto"
          onclick={() => onNavigate('shop')}
        >
          Koleksiyonu İncele
          <Icon name="arrowRight" size={20} />
        </button>
        <button
          type="button"
          class="flex w-full items-center justify-center gap-x-3 rounded-full border-2 border-white/40 bg-white/5 px-12 py-6 text-lg font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/15 sm:w-auto"
          onclick={() => onNavigate('about')}
        >
          Hikayemiz
        </button>
      </div>
    </div>
  </section>

  <div class="relative z-10 -mt-16 rounded-t-[3rem] bg-neutral-50 pt-12 pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:pt-20">
    <section class="mx-auto max-w-7xl px-6">
      <div class="mb-16 grid gap-6 md:grid-cols-4">
        {#each trustBadges as badge}
          <div class="flex items-start gap-4 rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm">
            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <Icon name={badge.icon} size={22} />
            </div>
            <div>
              <h4 class="text-sm font-bold text-neutral-900">{badge.title}</h4>
              <p class="mt-1 text-xs font-medium text-neutral-500">{badge.desc}</p>
            </div>
          </div>
        {/each}
      </div>

      <div class="mb-12 flex flex-col items-center justify-between gap-y-4 text-center md:flex-row md:items-end md:text-left">
        <div>
          <span class="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
            Sezonun Favorileri
          </span>
          <h2 class="mt-3 text-4xl font-semibold tracking-tighter text-neutral-900 md:text-5xl">
            Öne Çıkan Ürünler
          </h2>
        </div>
        <button
          type="button"
          class="border-b-2 border-neutral-900 pb-1 font-bold text-neutral-900 transition hover:border-emerald-700 hover:text-emerald-700"
          onclick={() => onNavigate('shop')}
        >
          Tümünü Gör
        </button>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {#each featuredProducts as product (product.id)}
          <ProductCard
            product={product}
            isWishlisted={wishlist.includes(product.id)}
            onOpen={onOpenProduct}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
          />
        {/each}
      </div>
    </section>

    <section class="mx-auto mt-24 max-w-7xl px-6">
      <div class="mb-12 text-center">
        <span class="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
          Müşteri Yorumları
        </span>
        <h2 class="mt-3 text-4xl font-semibold tracking-tighter text-neutral-900 md:text-5xl">
          Cildiyle Mutlu Olanlar
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        {#each testimonials as t}
          <div class="rounded-[2rem] border border-neutral-100 bg-white p-8 shadow-sm">
            <div class="mb-4 flex gap-1 text-amber-500">
              {#each Array(t.rating) as _}
                <Icon name="starFill" size={16} />
              {/each}
            </div>
            <p class="mb-6 text-sm leading-relaxed text-neutral-700">"{t.content}"</p>
            <div class="border-t border-neutral-100 pt-4">
              <div class="text-sm font-bold text-neutral-900">{t.name}</div>
              <div class="text-[10px] font-black uppercase tracking-widest text-emerald-700">{t.role}</div>
            </div>
          </div>
        {/each}
      </div>
    </section>
  </div>
</div>
