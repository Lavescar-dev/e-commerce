export const fallbackSvg =
  "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect width=%22400%22 height=%22500%22 fill=%22%23f3f4f6%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%239ca3af%22 font-family=%22sans-serif%22 font-size=%2220%22 font-weight=%22600%22%3ELumina Skin%3C/text%3E%3C/svg%3E";

export const validImages = [
  '11525197',
  '11560687',
  '11560696',
  '11560700',
  '11560715',
  '12495924',
  '12998410',
  '13002987',
  '14649431',
  '15274101',
  '15766704',
  '17053665',
  '17063200',
  '19049365',
  '19080517',
  '31552021',
  '31552022',
  '34544440',
  '35909808',
  '36043022',
  '36375324',
  '37000755',
  '4021768',
  '4735904',
  '4735905',
  '4841360',
  '4889036',
  '4889038',
  '4938446',
  '5632335',
  '5659402',
  '5978582',
  '6167398',
  '6167866',
  '6187595',
  '6187606',
  '6693882',
  '6800936',
  '6958428',
  '6958457',
  '7006153',
  '7011419',
  '7253819',
  '7321507',
  '7670680',
  '7670691',
  '7670761',
  '7670764',
  '7691108',
  '7691113',
];

export const categories = [
  'Serum',
  'Krem',
  'Maske',
  'Temizleyici',
  'Tonik',
  'Güneş Kremi',
  'Göz Kremi',
  'Peeling',
];

const prefixes = [
  'Aydınlatıcı',
  'Canlandırıcı',
  'Yatıştırıcı',
  'Sıkılaştırıcı',
  'Arındırıcı',
  'Besleyici',
  'Onarıcı',
  'Gözenek Sıkılaştırıcı',
  'Leke Giderici',
  'Yoğun Nem',
];

function pseudoRand(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export const products = Array.from({ length: 50 }, (_, index) => {
  const category = categories[index % categories.length];
  const prefix = prefixes[(index * 3) % prefixes.length];
  const imageId = validImages[index % validImages.length];
  const price = 150 + ((index * 37 + 19) % 301);

  const ratingSeed = pseudoRand(index + 1);
  const rating = Math.round((3.6 + ratingSeed * 1.4) * 10) / 10;
  const reviewCount = 14 + Math.floor(pseudoRand(index + 7) * 487);

  const onSale = pseudoRand(index + 13) > 0.62;
  const discountPct = onSale ? 10 + Math.floor(pseudoRand(index + 19) * 30) : 0;
  const originalPrice = onSale ? Math.round(price / (1 - discountPct / 100)) : null;

  const stockSeed = pseudoRand(index + 23);
  let stock;
  if (stockSeed < 0.05) stock = 0;
  else if (stockSeed < 0.2) stock = 1 + Math.floor(stockSeed * 12);
  else stock = 30 + Math.floor(stockSeed * 80);

  return {
    id: index + 1,
    name: `${prefix} ${category}`,
    price,
    originalPrice,
    discountPct,
    image: `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=800`,
    category,
    desc: `Cildinizin doğal dengesini koruyan, günlük bakıma uygun profesyonel ${category.toLowerCase()} formülü. Dermatolojik olarak test edilmiştir.`,
    rating,
    reviewCount,
    stock,
    isNew: index >= 44,
  };
}).map((product, index) => {
  if (index === 0) return { ...product, name: 'Glow Serum', category: 'Serum' };
  if (index === 1) return { ...product, name: 'Nem Bombası Krem', category: 'Krem' };
  if (index === 2) return { ...product, name: 'Gece Onarıcı Maske', category: 'Maske' };
  if (index === 3) return { ...product, name: 'Yenileyici Vücut Losyonu', category: 'Krem' };
  return product;
});
