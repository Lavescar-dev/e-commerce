export const fallbackSvg =
  "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect width=%22400%22 height=%22500%22 fill=%22%23f3f4f6%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%239ca3af%22 font-family=%22sans-serif%22 font-size=%2220%22 font-weight=%22600%22%3ELumina Skin%3C/text%3E%3C/svg%3E";

export const validImages = [
  '1492550713-02eff9119b27',
  '1492552181161-62217fc3076d',
  '1517135399940-2855f5be7c4b',
  '1549100188554-030b17cf6a9e',
  '1552046122-03184de85e08',
  '1556760544-74068565f05c',
  '1581182800629-7d90925ad072',
  '1581182815808-b6eb627a8798',
  '1585104368639-0933bee8e8af',
  '1591731332802-4b1c325707b7',
  '1599847872487-55351feaf63d',
  '1599847935464-fde3827639c2',
  '1599847987657-881f11b92a75',
  '1602312771175-0a4f1f0f6214',
  '1614806687007-2215a9db3b1c',
  '1626783416763-67a92e5e7266',
  '1655949072-5141400f533f',
  '1670201203270-7bc9b329d2eb',
  '1679046947924-fdf3de18ec8c',
  '1679064286466-6e1ee9d3a44d',
  '1679134539476-81d0d125c5d8',
  '1679750866849-2ee5ac7ddf9a',
  '1715604347844-e09e8c138c2b',
  '1737711845044-70ae5a0ca17f',
  '1535541998993-08953eb287dd',
  '1584013544294-f948c9ce0954',
  '1596642748852-5596416147ac',
  '1599847864151-38ac5f73e950',
  '1599847896696-7e19dbd9d2e8',
  '1599847903756-c359cd73f9b4',
  '1599847954335-d7c7ca35f6a7',
  '1639996113206-d9d1817c1aab',
  '1661330037042-835104542244',
  '1661503187612-e0e7a8f50400',
  '1661574873358-8d14b766661a',
  '1661609454173-56055da4f2ad',
  '1679046949454-0edc76ebbf7f',
  '1723391874756-f7e0ea10dc6c',
  '1723391962976-0feeb7565a98',
  '1723392197044-515b81ec57cb',
  '1736236560164-bc741c70bca5',
  '1748543668676-ea8241cb3886',
  '1749599018738-b8fb6c4a83e0',
  '1762493869228-79b1383867b2',
  '1511802548158-cce71a9f2d0b',
  '1515377905703-c4788e51af15',
  '1528756514091-dee5ecaa3278',
  '1535952501-92d8206b501e',
  '1550159793-ecaa76eaffde',
  '1557106545956-f01694179e60',
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

export const products = Array.from({ length: 50 }, (_, index) => {
  const category = categories[index % categories.length];
  const prefix = prefixes[(index * 3) % prefixes.length];
  const imageId = validImages[index % validImages.length];
  const price = 150 + ((index * 37 + 19) % 301);

  return {
    id: index + 1,
    name: `${prefix} ${category}`,
    price,
    image: `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&q=80&w=800`,
    category,
    desc: `Cildinizin doğal dengesini koruyan, günlük bakıma uygun profesyonel ${category.toLowerCase()} formülü. Dermatolojik olarak test edilmiştir.`,
  };
}).map((product, index) => {
  if (index === 0) return { ...product, name: 'Glow Serum', category: 'Serum' };
  if (index === 1) return { ...product, name: 'Nem Bombası Krem', category: 'Krem' };
  if (index === 2) return { ...product, name: 'Gece Onarıcı Maske', category: 'Maske' };
  if (index === 3) return { ...product, name: 'Yenileyici Vücut Losyonu', category: 'Krem' };
  return product;
});
