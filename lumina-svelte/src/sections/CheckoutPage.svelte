<script>
  import Icon from '../components/Icon.svelte';
  import { fallbackSvg } from '../data/products.js';

  export let cart = [];
  export let subtotal = 0;
  export let shippingCost = 0;
  export let total = 0;
  export let onConfirmOrder = () => {};

  function handleImageError(event) {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackSvg;
  }
</script>

<div class="bg-neutral-50 pt-32 pb-20">
  <section class="mx-auto max-w-7xl px-6">
    <div class="mb-12">
      <span class="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">Güvenli Alışveriş</span>
      <h2 class="mt-3 text-4xl font-semibold tracking-tighter text-neutral-900 md:text-5xl">Ödemeyi Tamamla</h2>
    </div>

    <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
      <div class="space-y-10 lg:col-span-7">
        <div class="rounded-[2.5rem] border border-neutral-100 bg-white p-8 shadow-sm md:p-10">
          <h3 class="mb-6 text-2xl font-bold tracking-tighter text-neutral-900">İletişim Bilgileri</h3>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input type="text" placeholder="Adınız" class="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-medium outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20" />
            <input type="text" placeholder="Soyadınız" class="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-medium outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20" />
            <input type="email" placeholder="E-posta Adresi" class="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-medium outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20 md:col-span-2" />
            <input type="tel" placeholder="Telefon Numarası" class="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-medium outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20 md:col-span-2" />
          </div>
        </div>

        <div class="rounded-[2.5rem] border border-neutral-100 bg-white p-8 shadow-sm md:p-10">
          <h3 class="mb-6 text-2xl font-bold tracking-tighter text-neutral-900">Teslimat Adresi</h3>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input type="text" placeholder="Şehir" class="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-medium outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20" />
            <input type="text" placeholder="İlçe" class="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-medium outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20" />
            <textarea placeholder="Açık Adres (Mahalle, Sokak, No, Daire)" rows="3" class="w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-medium outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20 md:col-span-2"></textarea>
          </div>
        </div>

        <div class="rounded-[2.5rem] border border-neutral-100 bg-white p-8 shadow-sm md:p-10">
          <div class="mb-6 flex items-center justify-between">
            <h3 class="text-2xl font-bold tracking-tighter text-neutral-900">Ödeme Bilgileri</h3>
            <div class="flex gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-400">
              <span class="rounded-full bg-neutral-100 px-3 py-2">Visa</span>
              <span class="rounded-full bg-neutral-100 px-3 py-2">MC</span>
            </div>
          </div>

          <div class="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-[10px] font-black uppercase tracking-widest text-emerald-800 sm:items-center sm:text-xs">
            <Icon name="info" size={18} className="mt-0.5 shrink-0 sm:mt-0" />
            Bu alan tasarımsaldır, lütfen gerçek kart bilgilerinizi girmeyiniz.
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input type="text" placeholder="Kart Üzerindeki İsim" class="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-medium outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20 md:col-span-2" />
            <input type="text" maxlength="19" placeholder="Kart Numarası" class="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-medium tracking-widest outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20 md:col-span-2" />
            <input type="text" maxlength="5" placeholder="AA / YY" class="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-center text-sm font-medium outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20" />
            <input type="text" maxlength="3" placeholder="CVV" class="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-center text-sm font-medium outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/20" />
          </div>
        </div>
      </div>

      <div class="relative lg:col-span-5">
        <div class="sticky top-32 rounded-[2.5rem] border border-neutral-100 bg-white p-8 shadow-sm md:p-10">
          <h3 class="border-b border-neutral-100 pb-6 text-2xl font-bold tracking-tighter text-neutral-900">
            Sipariş Özeti
          </h3>

          <div class="mb-8 max-h-[40vh] space-y-6 overflow-y-auto pr-2 pt-8">
            {#each cart as item (item.id)}
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div class="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      class="h-16 w-16 rounded-xl border border-neutral-100 object-cover shadow-sm"
                      onerror={handleImageError}
                    />
                    <span class="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white shadow-sm">
                      {item.quantity}
                    </span>
                  </div>
                  <span class="line-clamp-1 max-w-[120px] text-sm font-bold text-neutral-800 md:max-w-[160px]">
                    {item.name}
                  </span>
                </div>
                <span class="font-bold text-neutral-900">{item.price * item.quantity} ₺</span>
              </div>
            {/each}
          </div>

          <div class="space-y-4 border-t border-neutral-100 pt-6 text-sm font-medium text-neutral-500">
            <div class="flex items-center justify-between">
              <span>Ara Toplam</span>
              <span class="font-bold text-neutral-900">{subtotal} ₺</span>
            </div>
            <div class="flex items-center justify-between gap-3">
              <span class="flex items-center">
                Kargo Tutarı
                <span class="ml-3 rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-emerald-700">
                  150₺ Üzeri Ücretsiz
                </span>
              </span>
              <span class="font-bold text-neutral-900">
                {#if shippingCost === 0}
                  Ücretsiz
                {:else}
                  {shippingCost} ₺
                {/if}
              </span>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-between border-t border-neutral-200 pt-6">
            <span class="text-xl font-black text-neutral-900">Toplam</span>
            <span class="text-4xl font-black text-emerald-800">{total} ₺</span>
          </div>

          <button
            type="button"
            class="mt-10 flex w-full items-center justify-center gap-x-3 rounded-[2rem] bg-emerald-800 py-6 text-lg font-bold text-white shadow-xl shadow-emerald-900/10 transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:shadow-none"
            onclick={onConfirmOrder}
            disabled={cart.length === 0}
          >
            <Icon name="lock" size={18} />
            Siparişi Onayla ve Öde
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
