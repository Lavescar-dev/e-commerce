<script>
  import Icon from './Icon.svelte';

  export let open = false;
  export let currentUser = '';
  export let onClose = () => {};
  export let onLogin = () => {};
  export let onLogout = () => {};

  let name = '';

  $: if (!open) {
    name = '';
  }

  function submitLogin() {
    const trimmed = name.trim();
    if (!trimmed) return;
    onLogin(trimmed);
  }
</script>

{#if open}
  <div
    class="fixed inset-0 z-[1001] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    role="button"
    tabindex="0"
    aria-label="Modalı kapat"
    onclick={(event) => event.currentTarget === event.target && onClose()}
    onkeydown={(event) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClose();
      }
    }}
  >
    <div class="modal-pop w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white p-12 text-center shadow-2xl">
      {#if !currentUser}
        <div>
          <h2 class="mb-2 text-3xl font-bold tracking-tighter text-neutral-900">Hoş Geldiniz</h2>
          <p class="mb-10 text-sm font-medium text-neutral-500">
            Hesabınıza giriş yaparak size özel fırsatları keşfedin.
          </p>
          <input
            bind:value={name}
            type="text"
            placeholder="İsminiz"
            class="mb-6 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 font-bold text-neutral-900 outline-none ring-0 transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500/30"
            onkeydown={(event) => event.key === 'Enter' && submitLogin()}
          />
          <button
            type="button"
            class="w-full rounded-[2rem] bg-emerald-800 py-5 font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-900"
            onclick={submitLogin}
          >
            Devam Et
          </button>
        </div>
      {:else}
        <div>
          <div class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-4xl font-bold text-emerald-800">
            {currentUser[0]?.toUpperCase()}
          </div>
          <h2 class="mb-2 text-3xl font-bold tracking-tighter text-neutral-900">{currentUser}</h2>
          <p class="mb-10 text-xs font-black uppercase tracking-widest text-emerald-600">
            Premium Üye
          </p>

          <div class="space-y-4 text-left">
            <div class="flex cursor-pointer items-center gap-x-4 rounded-2xl border border-neutral-100 p-5 shadow-sm transition hover:bg-neutral-50">
              <Icon name="box" size={20} className="text-emerald-600" />
              <span class="text-sm font-bold text-neutral-800">Siparişlerim</span>
            </div>
          </div>

          <button
            type="button"
            class="mt-12 w-full rounded-[2rem] border border-red-50 py-4 text-xs font-bold uppercase tracking-widest text-red-500 transition hover:bg-red-50"
            onclick={onLogout}
          >
            Çıkış Yap
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}
