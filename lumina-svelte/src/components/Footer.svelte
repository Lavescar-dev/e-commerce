<script>
  export let onNavigate = () => {};
</script>

<footer class="mt-auto bg-neutral-900 py-20 text-white">
  <div class="mx-auto max-w-7xl px-6">
    <div class="flex flex-col items-center justify-between gap-y-10 border-b border-white/5 pb-16 md:flex-row">
      <div class="flex items-center gap-x-3">
        <div class="logo-font flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-2xl font-bold text-white">
          L
        </div>
        <span class="logo-font text-3xl">lumina</span>
      </div>

      <div class="flex gap-x-12 text-sm font-bold uppercase tracking-widest text-neutral-400">
        <button type="button" class="transition hover:text-emerald-500" onclick={() => onNavigate('shop')}>
          Ürünler
        </button>
        <button type="button" class="transition hover:text-emerald-500" onclick={() => onNavigate('about')}>
          Hikayemiz
        </button>
        <button type="button" class="transition hover:text-emerald-500">İletişim</button>
      </div>
    </div>

    <p class="mt-10 text-center text-xs font-bold italic uppercase tracking-widest text-neutral-600">
      © 2026 Lumina Skin • Pure Nature, Pure Science.
    </p>
  </div>
</footer>
