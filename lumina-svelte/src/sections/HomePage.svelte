<script>
  import ProductCard from '../components/ProductCard.svelte';
  import Icon from '../components/Icon.svelte';

  export let featuredProducts = [];
  export let onNavigate = () => {};
  export let onOpenProduct = () => {};
  export let onAddToCart = () => {};
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
      </div>
    </div>
  </section>

  <div class="relative z-10 -mt-16 rounded-t-[3rem] bg-neutral-50 pt-12 pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:pt-20">
    <section class="mx-auto max-w-7xl px-6">
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
          <ProductCard product={product} onOpen={onOpenProduct} onAddToCart={onAddToCart} />
        {/each}
      </div>
    </section>
  </div>
</div>
