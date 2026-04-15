<script>
  import ProductCard from '../components/ProductCard.svelte';
  import Icon from '../components/Icon.svelte';

  export let products = [];
  export let categories = [];
  export let onOpenProduct = () => {};
  export let onAddToCart = () => {};

  let selectedCategory = '';
  let searchTerm = '';

  $: filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const query = searchTerm.trim().toLowerCase();
    const matchesQuery = query
      ? product.name.toLowerCase().includes(query) || product.desc.toLowerCase().includes(query)
      : true;
    return matchesCategory && matchesQuery;
  });
</script>

<div class="bg-neutral-50 pt-32 pb-20">
  <section class="mx-auto max-w-7xl px-6">
    <div class="mb-16 flex flex-col items-start justify-between gap-y-8 border-b border-neutral-200 pb-10 md:flex-row md:items-end">
      <div>
        <span class="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">Mağaza</span>
        <h2 class="mt-3 text-5xl font-semibold tracking-tighter">Tüm Ürünler</h2>
        <p class="mt-4 font-medium text-neutral-500">
          <span class="font-bold text-neutral-900">{filteredProducts.length}</span>
          çeşit ürün listeleniyor
        </p>
      </div>

      <div class="flex w-full flex-wrap gap-4 md:w-auto">
        <select
          bind:value={selectedCategory}
          class="flex-1 cursor-pointer appearance-none rounded-2xl border border-neutral-200 bg-white px-6 py-4 text-sm font-bold shadow-sm outline-none ring-0 transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20 md:flex-none"
        >
          <option value="">Tüm Kategoriler</option>
          {#each [...new Set(categories)].sort() as category}
            <option value={category}>{category}</option>
          {/each}
        </select>

        <div class="relative flex-1 md:w-80">
          <div class="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-neutral-400">
            <Icon name="search" size={18} />
          </div>
          <input
            bind:value={searchTerm}
            type="text"
            placeholder="Ürün ara..."
            class="w-full rounded-2xl border border-neutral-200 bg-white py-4 pr-6 pl-12 text-sm font-medium shadow-sm outline-none ring-0 transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
      </div>
    </div>

    {#if filteredProducts.length > 0}
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {#each filteredProducts as product (product.id)}
          <ProductCard product={product} onOpen={onOpenProduct} onAddToCart={onAddToCart} />
        {/each}
      </div>
    {:else}
      <div class="py-20 text-center">
        <div class="mb-6 inline-flex rounded-full bg-neutral-100 p-6 text-neutral-300">
          <Icon name="sparkles" size={42} />
        </div>
        <h3 class="text-2xl font-bold tracking-tighter text-neutral-800">Aradığınızı bulamadık</h3>
        <p class="mt-2 text-neutral-500">Filtreleri değiştirerek tekrar deneyebilirsiniz.</p>
      </div>
    {/if}
  </section>
</div>
