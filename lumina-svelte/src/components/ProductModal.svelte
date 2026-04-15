<script>
  import Icon from './Icon.svelte';
  import { fallbackSvg } from '../data/products.js';

  export let product = null;
  export let onClose = () => {};
  export let onAddToCart = () => {};

  function handleImageError(event) {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackSvg;
  }
</script>

{#if product}
  <div
    class="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    role="button"
    tabindex="0"
    aria-label="Ürün penceresini kapat"
    onclick={(event) => event.currentTarget === event.target && onClose()}
    onkeydown={(event) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClose();
      }
    }}
  >
    <div class="modal-pop flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-[3rem] bg-white shadow-2xl md:flex-row">
      <div class="flex items-center justify-center overflow-hidden bg-neutral-50 md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          class="h-full w-full object-cover"
          onerror={handleImageError}
        />
      </div>
      <div class="flex flex-col overflow-auto p-10 md:w-1/2 md:p-14">
        <button type="button" class="self-end text-neutral-300 transition hover:text-neutral-900" onclick={onClose}>
          <Icon name="close" size={40} />
        </button>

        <div class="mt-4">
          <span class="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-700">
            {product.category}
          </span>
          <h2 class="mt-6 text-4xl font-bold leading-none tracking-tighter text-neutral-900 md:text-5xl">
            {product.name}
          </h2>
          <div class="mt-8 text-4xl font-black text-neutral-900">{product.price} ₺</div>
          <div class="my-10 h-px w-20 bg-neutral-200"></div>
          <p class="text-lg leading-relaxed font-medium text-neutral-500">
            {product.desc}
          </p>
        </div>

        <div class="mt-auto pt-10">
          <button
            type="button"
            class="flex w-full items-center justify-center gap-x-3 rounded-[2rem] bg-emerald-800 py-6 text-xl font-bold text-white shadow-xl shadow-emerald-900/20 transition hover:bg-emerald-900"
            onclick={() => onAddToCart(product)}
          >
            <Icon name="bag" size={22} />
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
