<script>
  import Icon from './Icon.svelte';
  import { fallbackSvg } from '../data/products.js';

  export let product;
  export let onOpen = () => {};
  export let onAddToCart = () => {};

  function handleImageError(event) {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackSvg;
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen(product);
    }
  }
</script>

<div
  class="product-card flex h-full w-full cursor-pointer flex-col rounded-[2.5rem] border border-neutral-100 bg-white text-left shadow-sm"
  role="button"
  tabindex="0"
  onclick={() => onOpen(product)}
  onkeydown={handleKeydown}
>
  <div class="relative aspect-[4/5] overflow-hidden rounded-t-[2.5rem] bg-neutral-100">
    <img
      src={product.image}
      alt={product.name}
      class="h-full w-full object-cover"
      loading="lazy"
      onerror={handleImageError}
    />
    <span class="absolute top-4 right-4 rounded-full bg-white/95 px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-emerald-800 shadow-sm backdrop-blur">
      {product.category}
    </span>
  </div>

  <div class="flex flex-1 flex-col p-6 md:p-8">
    <h3 class="line-clamp-1 mb-2 text-lg font-bold text-neutral-900" title={product.name}>
      {product.name}
    </h3>
    <p class="line-clamp-2 mb-6 min-h-[2rem] text-xs leading-relaxed font-medium text-neutral-500">
      {product.desc}
    </p>

    <div class="mt-auto flex items-center justify-between border-t border-neutral-100/60 pt-4">
      <span class="text-2xl font-black text-neutral-900">{product.price} ₺</span>
      <button
        type="button"
        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-md transition hover:bg-emerald-700"
        aria-label={`${product.name} ürününü sepete ekle`}
        onclick={(event) => {
          event.stopPropagation();
          onAddToCart(product);
        }}
      >
        <Icon name="plus" size={16} />
      </button>
    </div>
  </div>
</div>
