<script>
  import Icon from './Icon.svelte';
  import { fallbackSvg } from '../data/products.js';

  export let open = false;
  export let cart = [];
  export let subtotal = 0;
  export let onClose = () => {};
  export let onRemove = () => {};
  export let onCheckout = () => {};

  function handleImageError(event) {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackSvg;
  }
</script>

{#if open}
  <div
    class="fixed inset-0 z-[1000] flex items-end justify-center bg-black/80 p-4 backdrop-blur-sm md:items-center md:p-0"
    role="button"
    tabindex="0"
    aria-label="Sepeti kapat"
    onclick={(event) => event.currentTarget === event.target && onClose()}
    onkeydown={(event) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClose();
      }
    }}
  >
    <div class="flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:rounded-[2.5rem]">
      <div class="flex items-center justify-between border-b border-neutral-100 p-8">
        <h3 class="text-2xl font-bold tracking-tighter text-neutral-900">Sepetim</h3>
        <button type="button" class="leading-none text-neutral-400 transition hover:text-neutral-900" onclick={onClose}>
          <Icon name="close" size={30} />
        </button>
      </div>

      <div class="min-h-[300px] flex-1 overflow-y-auto p-8">
        {#if cart.length === 0}
          <div class="py-12 text-center">
            <div class="mb-4 inline-flex rounded-full bg-neutral-100 p-5 text-neutral-300">
              <Icon name="cart" size={42} />
            </div>
            <p class="text-xs font-black uppercase tracking-widest text-neutral-400">
              Henüz bir ürün yok
            </p>
          </div>
        {:else}
          {#each cart as item, index (item.id)}
            <div class="mb-6 flex items-center gap-6 border-b border-neutral-100 pb-6">
              <img
                src={item.image}
                alt={item.name}
                class="h-20 w-20 rounded-2xl border border-neutral-100 object-cover shadow-sm"
                onerror={handleImageError}
              />
              <div class="flex-1">
                <h4 class="text-sm font-bold text-neutral-900">{item.name}</h4>
                <p class="mt-1 text-xs font-black text-emerald-700">{item.quantity} x {item.price} ₺</p>
              </div>
              <button
                type="button"
                class="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
                aria-label={`${item.name} ürününü sepetten çıkar`}
                onclick={() => onRemove(index)}
              >
                <Icon name="trash" size={14} />
              </button>
            </div>
          {/each}
        {/if}
      </div>

      <div class="border-t border-neutral-100 bg-neutral-50/50 p-8">
        <div class="mb-8 flex justify-between text-2xl font-black text-neutral-900">
          <span>Toplam</span>
          <span>{subtotal} ₺</span>
        </div>
        <button
          type="button"
          class="w-full rounded-[2rem] bg-emerald-800 py-6 font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:shadow-none"
          onclick={onCheckout}
          disabled={cart.length === 0}
        >
          Ödemeye Geç
        </button>
      </div>
    </div>
  </div>
{/if}
