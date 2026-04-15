<script>
  import Icon from '../components/Icon.svelte';
</script>

<div class="bg-white pt-24">
  <section class="mx-auto mb-24 max-w-7xl px-6">
    <div class="relative mb-16 flex h-[45vh] min-h-[350px] items-center justify-center overflow-hidden rounded-[3rem] bg-emerald-50 shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f9?auto=format&fit=crop&q=80&w=2000"
        alt="Lumina Felsefesi"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-emerald-950/30"></div>
      <div class="relative z-10 px-6 text-center text-white">
        <h1 class="mb-4 text-5xl font-bold tracking-tighter drop-shadow-md md:text-7xl">Felsefemiz</h1>
        <p class="mx-auto max-w-xl text-lg font-medium text-white/90 drop-shadow-md md:text-xl">
          Doğanın mucizelerini modern bilimle harmanlıyoruz.
        </p>
      </div>
    </div>

    <div class="mb-24 grid items-center gap-20 md:grid-cols-2">
      <div>
        <span class="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">Vizyonumuz</span>
        <h2 class="mt-4 mb-8 text-4xl leading-tight font-bold tracking-tighter text-neutral-900">
          Güzellik, doğallıkta gizlidir.
        </h2>
        <p class="mb-6 text-lg leading-relaxed text-neutral-600">
          2026 yılında kurulan Lumina Skin olarak, cildinize saygı duyan formüller geliştirmek için yola çıktık.
          Karmaşık kimyasallar yerine, doğanın sunduğu güçlü ve saf bileşenleri tercih ediyoruz.
        </p>
        <p class="text-lg leading-relaxed text-neutral-600">
          Şeffaf içerik, dürüst etiketleme ve sürdürülebilir üretim en temel prensiplerimizdir. Sizin için sadece en
          iyisini üretiyoruz.
        </p>
      </div>

      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=800"
          alt="Doğal içerik"
          class="aspect-square w-full rounded-[2.5rem] object-cover shadow-2xl"
        />
        <div class="absolute -right-6 -bottom-6 hidden rounded-3xl border border-neutral-100 bg-white p-6 shadow-xl lg:block">
          <div class="text-3xl leading-none font-bold text-emerald-800">30k+</div>
          <div class="mt-2 text-xs font-bold uppercase tracking-widest text-neutral-400">Mutlu Müşteri</div>
        </div>
      </div>
    </div>
  </section>

  <section class="border-t border-neutral-100 bg-neutral-50 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold tracking-tighter text-neutral-900">Değerlerimiz</h2>
        <p class="mx-auto max-w-xl font-medium text-neutral-500">
          Taviz vermediğimiz standartlarımızla cildinize ve gezegenimize özen gösteriyoruz.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div class="rounded-[2.5rem] border border-neutral-100 bg-white p-12 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-lg">
          <div class="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
            <Icon name="leaf" size={24} />
          </div>
          <h3 class="mb-4 text-2xl font-bold tracking-tight text-neutral-900">Temiz İçerik</h3>
          <p class="text-sm leading-relaxed text-neutral-500">
            Zararlı kimyasalları kapının dışında bırakıyoruz. Sadece cildinizin tanıdığı saf bitkisel bileşenler.
          </p>
        </div>

        <div class="rounded-[2.5rem] border border-neutral-100 bg-white p-12 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-lg">
          <div class="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
            <Icon name="beaker" size={24} />
          </div>
          <h3 class="mb-4 text-2xl font-bold tracking-tight text-neutral-900">Bilimsel Onay</h3>
          <p class="text-sm leading-relaxed text-neutral-500">
            Geleneksel çözümleri dermatoloji ile buluşturuyoruz. Her ürünümüz klinik testlerden geçmektedir.
          </p>
        </div>

        <div class="rounded-[2.5rem] border border-neutral-100 bg-white p-12 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-lg">
          <div class="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
            <Icon name="globe" size={24} />
          </div>
          <h3 class="mb-4 text-2xl font-bold tracking-tight text-neutral-900">Ekolojik</h3>
          <p class="text-sm leading-relaxed text-neutral-500">
            Güzelliğin bedeli doğa olmamalı. Geri dönüştürülebilir ambalajlarla karbon ayak izimizi azaltıyoruz.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
