import type { Product } from '../types';

const defaultDescription = 'A stylish and comfortable piece, perfect for any occasion. Made with high-quality materials for a great fit and feel.';
const defaultMaterials = ['100% Premium Cotton', 'Machine washable'];
const defaultAdditionalInfo = [
  { title: 'Size Guide', content: 'Fits true to size. Take your normal size.' },
  { title: 'Shipping & Returns', content: 'Standard shipping policies apply.' },
  { title: 'Product Care', content: 'Wash with similar colors.' }
];

export const products: Product[] = [
  // Shirts
  {
    id: 1,
    name: 'The Crimson Shadow "White Stripes"',
    price: 1700,
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/9/ThumbCard.webp?updatedAt=1758914228506',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/9/ThumbCard.webp?updatedAt=1758914228506',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC03221%20(1).opti.webp?updatedAt=1759515148213',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC03308%20(1).opti.webp?updatedAt=1759515147936'
    ],
    category: 'Shirts',
    showOnHome: true,
    showInSearch: true,
    description: "Elevate your wardrobe with The Crimson Shadow 'White Stripes' shirt, a timeless classic redefined for the modern man. Featuring crisp, clean lines and a sophisticated vertical stripe pattern, this shirt is a versatile staple for any occasion. Whether dressed up for a formal event or paired down for a smart-casual look, its impeccable tailoring and premium fabric ensure you'll look sharp and feel comfortable all day long.",
    materials: [
        '100% Premium Poplin Cotton: Lightweight, breathable, and smooth to the touch.',
        'Reinforced Collar & Cuffs: Maintain a sharp, structured look throughout the day.',
        'Durable Resin Buttons: Securely stitched for long-lasting wear.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'A modern slim fit that contours the body for a sharp silhouette without sacrificing comfort. Features a classic spread collar and single-button barrel cuffs.' },
      { title: 'Product Care', content: 'Machine wash cold with like colors. Tumble dry low or hang dry for best results. Warm iron if needed. Do not bleach.' },
      { title: 'Size Guide', content: 'Fits true to size. For a more relaxed fit, consider sizing up. Please refer to our detailed size chart for precise measurements.' }
    ],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'The Crimson Shadow "Black Stripes"',
    price: 1200,
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/1/ThumbCard.webp?updatedAt=1758913927548',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/1/ThumbCard.webp?updatedAt=1758913927548',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC02593%20(1).opti.webp?updatedAt=1759515147838',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC02513%20(1).opti.webp?updatedAt=1759515147372'
    ],
    category: 'Shirts',
    showOnHome: true,
    showInSearch: true,
    description: "Command attention with The Crimson Shadow 'Black Stripes' shirt. This piece combines the timeless appeal of a classic black shirt with a subtle, sophisticated stripe pattern, offering a modern edge to a wardrobe essential. Its sleek design and perfect fit make it an ideal choice for both formal occasions and elevated casual looks, ensuring you project confidence and style wherever you go.",
    materials: [
        '100% Premium Twill Cotton: Soft, durable, and with a slight texture for a refined look.',
        'Fused Collar and Cuffs: For a consistently crisp appearance.',
        'Mother-of-Pearl Buttons: Adding a touch of understated luxury.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'Tailored for a sharp, modern fit that complements your physique. Designed with a classic point collar and adjustable button cuffs for versatility.' },
      { title: 'Product Care', content: 'Machine wash on a gentle cycle. For best results, hang dry and iron on a low setting. Avoid using bleach to maintain the deep black color.' },
      { title: 'Size Guide', content: 'Designed to fit true to size. Consult our size chart to find your perfect fit.' }
    ],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 3,
    name: 'The Crimson Shadow "Blue Stripes"',
    price: 1700,
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/2/ThumbCard.webp?updatedAt=1758913947413',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/2/ThumbCard.webp?updatedAt=1758913947413',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC02838%20(1).opti.webp?updatedAt=1759515147990',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC02883%20(1).opti.webp?updatedAt=1759515148003'
    ],
    category: 'Shirts',
    showOnHome: true,
    showInSearch: true,
    description: "Inject a wave of cool confidence into your look with The Crimson Shadow 'Blue Stripes' shirt. This piece artfully blends classic maritime charm with a modern, sharp silhouette. The striking blue stripes create a visually appealing pattern that’s both bold and refined, making it an incredibly versatile choice for any setting. From a day at the office to a weekend getaway, this shirt is designed to make a statement, ensuring you look effortlessly polished and distinctively stylish.",
    materials: [
        '100% Premium Oxford Cotton: Known for its distinctive basket-weave texture, offering durability and a soft, comfortable feel that improves with every wash.',
        'Structured Button-Down Collar: Stays sharp and in place, with or without a tie.',
        'Premium Engraved Buttons: Each button is carefully selected to complement the shirt’s distinguished aesthetic.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'Cut in a contemporary slim fit that provides a clean, tailored look. Perfect for tucking in or wearing untucked for a more casual vibe. Features a classic button-down collar and adjustable cuffs.' },
      { title: 'Product Care', content: 'Machine wash cold on a gentle cycle. Tumble dry on low heat. For best results, remove promptly and hang. Iron on a medium setting if necessary.' },
      { title: 'Size Guide', content: 'Our shirts are designed to fit true to size. Please refer to our comprehensive size chart for detailed measurements to ensure the perfect fit.' }
    ],
    sizes: ['M', 'L', 'XL'],
  },
  // Drop Tees
  {
    id: 4,
    name: "'Oliver Tee'",
    price: 800,
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/7/DSC03587%20(1).webp?updatedAt=1758914156660',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/7/DSC03587%20(1).webp?updatedAt=1758914156660',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC03425%20(1).opti.webp?updatedAt=1759515148486',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC03440%20(1).opti.webp?updatedAt=1759515148000'
    ],
    category: 'Drop Tees',
    showOnHome: true,
    showInSearch: true,
    description: "Meet the Oliver Tee, the cornerstone of the modern wardrobe. Engineered for an impeccable fit and crafted from the softest premium cotton, this isn't just a t-shirt—it's a statement of effortless style. Its minimalist design offers unparalleled versatility, making it the perfect canvas for any look, from laid-back weekends to layered, smart-casual ensembles. Experience everyday luxury with a tee that feels as good as it looks.",
    materials: [
        '100% Ringspun Combed Cotton: Exceptionally soft and breathable for all-day comfort.',
        'Pre-Shrunk Fabric: Ensures a consistent and reliable fit wash after wash.',
        'Reinforced Shoulder Seams: Provides enhanced durability and structure.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'Designed for a modern, relaxed fit that drapes perfectly on the body. Features a classic crew neck and a straight hem for a clean, timeless silhouette.' },
      { title: 'Product Care', content: 'Machine wash cold with like colors. Tumble dry low. Do not bleach. Cool iron if needed, avoiding any print or embellishment.' },
      { title: 'Size Guide', content: 'Fits true to size. For a more oversized look, we recommend sizing up. Please see our size chart for detailed measurements.' }
    ],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 5,
    name: 'Blue Tee',
    price: 800,
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/3/DSC03549%20(1).webp?updatedAt=1758913974605',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/3/DSC03549%20(1).webp?updatedAt=1758913974605',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC03557%20(1).opti.webp?updatedAt=1759515147963'
    ],
    category: 'Drop Tees',
    showOnHome: false,
    showInSearch: true,
    description: "Dive into serene style with the Blue Tee. This essential piece captures the essence of calm and confidence with its rich, tranquil blue hue. Expertly crafted for a superior fit and feel, it’s the perfect blend of minimalist design and everyday comfort. Whether worn solo as a statement piece or layered for a more dynamic look, the Blue Tee is your go-to for effortless sophistication and versatile style.",
    materials: [
        '100% Premium Supima Cotton: Renowned for its extra-long staple fibers that provide superior softness, strength, and color retention.',
        'Garment-Dyed Fabric: For a rich, unique color and a soft, lived-in feel from the very first wear.',
        'Stay-Flat Collar: A reinforced collar that maintains its shape without stretching or curling.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'A modern, regular fit that’s not too tight, not too loose—just right. Features a classic crew neck and a clean, straight hem for a timeless look.' },
      { title: 'Product Care', content: 'Machine wash cold inside out with similar colors. Tumble dry on a low. Do not iron directly on any print. Avoid bleach.' },
      { title: 'Size Guide', content: 'Our tees are designed to fit true to size. Please refer to our size chart for detailed measurements to find your perfect fit.' }
    ],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 6,
    name: 'Nà Pàrà Tòdòs "Black"',
    price: 950,
    originalPrice: 1270,
    tag: '-25%',
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/8/DSC05412.webp?updatedAt=1758914188926',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/8/DSC05412.webp?updatedAt=1758914188926',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC05401%20(1).opti.webp?updatedAt=1759515147893'
    ],
    category: 'Sweatshirts',
    showOnHome: false,
    showInSearch: true,
    description: "Unleash your bold side with the 'Nà Pàrà Tòdòs' sweatshirt in classic black. This isn't just an item of clothing; it's a statement. Featuring striking graphic text that translates to 'Not for Everyone,' this piece is for those who dare to stand out. Crafted from premium fleece for ultimate comfort and warmth, its relaxed fit makes it a versatile staple for any streetwear enthusiast's collection. Make your mark without saying a word.",
    materials: [
      '80% Cotton, 20% Polyester Heavyweight Fleece: Provides exceptional warmth and a soft, plush feel.',
      'High-Density Puff Print: The graphic text is rendered in a raised, textured print for a premium, tactile finish.',
      'Ribbed Cuffs and Hem: Ensures a snug, comfortable fit that retains its shape.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'A contemporary oversized fit with dropped shoulders for a relaxed, modern silhouette. Perfect for layering or wearing as a standalone statement piece.' },
      { title: 'Product Care', content: 'To preserve the puff print, machine wash cold, inside-out, on a gentle cycle. Tumble dry low or hang dry. Do not iron directly on the print.' },
      { title: 'Size Guide', content: 'Designed for an oversized look. For a true-to-size fit, consider sizing down. Check our size chart for precise measurements.' }
    ],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 7,
    name: 'Nà Pàrà Tòdòs "Cyan"',
    price: 950,
    originalPrice: 1270,
    tag: '-25%',
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/8/DSC05424.webp?updatedAt=1758914191118',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/8/DSC05424.webp?updatedAt=1758914191118',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC05437.opti.webp?updatedAt=1759515147879',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC05441.opti.webp?updatedAt=1759515147791'
    ],
    category: 'Sweatshirts',
    showOnHome: false,
    showInSearch: true,
    description: "Electrify your style with the 'Nà Pàrà Tòdòs' sweatshirt in a vibrant cyan. Designed for the bold and the fearless, this piece features the exclusive 'Not for Everyone' graphic, making it a true collector's item. The brilliant cyan hue ensures you'll be the center of attention, while the ultra-soft fleece and relaxed fit provide unparalleled comfort. It's more than a sweatshirt—it's a wearable piece of art that speaks to individuality.",
    materials: [
      'Premium Cotton-Poly Fleece Blend: Offers a luxurious feel with excellent durability and color vibrancy.',
      'Vibrant Puff Print: The statement graphic is rendered in a high-quality, raised puff print that stands out.',
      'Reinforced Seams: Expertly stitched for longevity and to maintain the garment\'s structure.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'Features an on-trend oversized fit with a classic crew neck and dropped shoulders. Its relaxed silhouette makes it an ideal layering piece for any season.' },
      { title: 'Product Care', content: 'Wash inside-out on a gentle, cold cycle to protect the vibrant color and puff print. Hang dry is recommended. Avoid ironing the graphic.' },
      { title: 'Size Guide', content: 'This piece is designed to be oversized. If you prefer a more standard fit, we suggest sizing down. Please refer to our size chart for specifics.' }
    ],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 8,
    name: 'Nà Pàrà Tòdòs "Navy"',
    price: 950,
    originalPrice: 1270,
    tag: '-25%',
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/8/DSC05516.webp?updatedAt=1758914188737',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/8/DSC05516.webp?updatedAt=1758914188737',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC05528%20(1).opti.webp?updatedAt=1759515147902'
    ],
    category: 'Sweatshirts',
    showOnHome: false,
    showInSearch: true,
    description: "Embrace a mood of sophisticated rebellion with the 'Nà Pàrà Tòdòs' sweatshirt in deep navy. This piece combines the powerful 'Not for Everyone' statement with a timeless, versatile color, creating a look that's both understated and impactful. The premium construction ensures maximum comfort and a perfect fit, making it an essential addition to any curated wardrobe. For those who communicate their style with quiet confidence.",
    materials: [
      'Ultra-Soft 3-End Fleece: A high-quality blend that is exceptionally soft and resistant to pilling.',
      'Durable Puff Print: The signature graphic is applied with a durable puff printing technique for a long-lasting, textured effect.',
      'Lycra-Infused Ribbing: The cuffs and hem are blended with Lycra for superior stretch and shape retention.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'Cut for a modern, relaxed fit that offers both comfort and style. Its versatile navy hue makes it easy to pair with anything from denim to tailored trousers.' },
      { title: 'Product Care', content: 'To maintain the integrity of the puff print and the rich navy color, machine wash cold, inside-out. Tumble dry on a low setting or hang to dry.' },
      { title: 'Size Guide', content: 'Fits true to size for a relaxed look. For a more fitted silhouette, consider sizing down. Consult our size guide for detailed measurements.' }
    ],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 9,
    name: 'Heritage Grey Sweatshirt',
    price: 850,
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/4/003.webp?updatedAt=1758914051863',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/4/003.webp?updatedAt=1758914051863',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC00582%20(1).opti.webp?updatedAt=1759515147742',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/IMG_5177.opti.webp?updatedAt=1759515147966'
    ],
    category: 'Sweatshirts',
    showOnHome: false,
    showInSearch: true,
    isSoldOut: true,
    description: "The Heritage Grey Sweatshirt is a timeless essential, reimagined. Crafted from premium, ultra-soft fleece in a classic heather grey, this piece is the epitome of comfort and versatile style. Its clean, minimalist design is elevated by subtle, high-quality details, making it the perfect foundation for any casual look. A true wardrobe staple that you'll reach for season after season.",
    materials: [
      '100% Cotton French Terry: A premium, breathable fabric with a soft, looped interior for maximum comfort.',
      'Vintage Wash Treatment: Garment-dyed and washed for a unique, lived-in look and feel.',
      'Durable Ribbed Trim: The collar, cuffs, and hem are made with a resilient rib-knit to ensure they hold their shape.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'A classic, regular fit that offers a comfortable and flattering silhouette. Not too loose, not too tight—just perfect. Features a timeless crew neckline.' },
      { title: 'Product Care', content: 'Machine wash cold with like colors. Tumble dry on a low setting. The vintage wash is designed to fade beautifully over time for a personalized look.' },
      { title: 'Size Guide', content: 'Fits true to size. Please refer to our detailed size chart for precise measurements.' }
    ],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 10,
    name: 'Skimask 3Hole Balaclava Hoodie',
    price: 700,
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/5/004.webp?updatedAt=1758914081324',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/5/004.webp?updatedAt=1758914081324',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/1000151939%202.opti.webp?updatedAt=1759515147890',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/DSC00590%202.opti.webp?updatedAt=1759515147766'
    ],
    category: 'Hoodies',
    showOnHome: false,
    showInSearch: true,
    description: "Redefine the boundaries of streetwear with the Skimask 3-Hole Balaclava Hoodie. This avant-garde piece merges the comfort of a premium hoodie with the anonymity and edge of a built-in balaclava. Crafted from heavyweight fleece for superior warmth and structure, its innovative design is both a statement and a shield. Perfect for those who move through the city with a distinct and unapologetic presence.",
    materials: [
      '400 GSM Heavyweight Cotton Fleece: Provides exceptional warmth, a structured drape, and a luxurious feel.',
      'Integrated Balaclava Hood: The hood is expertly designed to function as a 3-hole skimask, offering full coverage and a unique aesthetic.',
      'YKK Metal Zipper: A durable, high-quality zipper for reliable and smooth operation.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'An oversized, boxy fit with dropped shoulders for a contemporary, fashion-forward silhouette. The integrated balaclava can be worn up for a full-face look or down as a stylized hood.' },
      { title: 'Product Care', content: 'Due to the heavyweight nature of the fabric, we recommend machine washing cold on a gentle cycle and hanging to dry to maintain its shape and integrity. Avoid high heat.' },
      { title: 'Size Guide', content: 'This hoodie is designed to be significantly oversized. For a less dramatic fit, consider sizing down. Please consult the size chart for specific garment dimensions.' }
    ],
    sizes: ['M'],
  },
  {
    id: 11,
    name: 'Hafran',
    price: 3000,
    brand: 'Mahra',
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/6/007.webp?updatedAt=1758914121777',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/6/007.webp?updatedAt=1758914121777',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/M%20(2).opti.webp?updatedAt=1759515148024',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/M%20(4).opti.webp?updatedAt=1759515147977'
    ],
    category: 'Panjabi',
    showOnHome: false,
    showInSearch: true,
    description: "Discover the essence of refined elegance with the 'Hafran' Panjabi from our exclusive Mahra collection. This piece is a masterclass in subtlety, crafted from a luxurious, breathable fabric in a serene ivory hue. The design is elevated by intricate, tone-on-tone embroidery on the collar and placket, offering a touch of sophisticated detail that catches the eye. Perfect for celebratory occasions, the Hafran Panjabi exudes a quiet confidence and timeless grace.",
    materials: [
      'Premium Spun-Polyester Blend: Offers a luxurious feel with excellent drape, wrinkle resistance, and breathability.',
      'Intricate Threadwork Embroidery: Delicate, high-precision embroidery adorns the collar and placket for a touch of artisanal craftsmanship.',
      'Bespoke Metal Buttons: Custom-designed buttons that add a final touch of understated luxury.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'A classic, regular fit designed for comfort and a flattering silhouette. The minimalist design is versatile, suitable for a range of formal and festive events.' },
      { title: 'Product Care', content: 'Dry clean only to preserve the integrity of the delicate embroidery and premium fabric. Store in a cool, dry place.' },
      { title: 'Size Guide', content: 'Available in a comprehensive range of sizes. Please refer to our Mahra-specific size chart to ensure the perfect fit.' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 12,
    name: 'Nawabs Ivory',
    price: 4000,
    brand: 'Mahra',
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/6/010.webp?updatedAt=1758914121083',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/6/010.webp?updatedAt=1758914121083',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/M%20(8).opti.webp?updatedAt=1759515147910',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/M%20(10).opti.webp?updatedAt=1759515147876'
    ],
    category: 'Panjabi',
    showOnHome: false,
    showInSearch: true,
    description: "Step into a world of regal splendor with the 'Nawabs Ivory' Panjabi, a crowning jewel of the Mahra collection. This exquisite piece is crafted from the finest fabric, featuring opulent, intricate embroidery that cascades down the placket and adorns the cuffs. The majestic design, inspired by royal attire, is a celebration of heritage and luxury. Designed for the most special of occasions, the Nawabs Ivory Panjabi ensures an unforgettable presence of grandeur and sophistication.",
    materials: [
      'Luxurious Jacquard Fabric: Woven with a subtle, intricate pattern that provides a rich texture and a regal sheen.',
      'Ornate Zari & Resham Embroidery: A stunning combination of metallic and silk thread embroidery creates a breathtakingly detailed and opulent design.',
      'Concealed Placket: A modern touch that allows the intricate embroidery to take center stage without interruption.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'A tailored, regular fit that provides a distinguished and comfortable silhouette. This statement piece is designed to be the centerpiece of a formal ensemble.' },
      { title: 'Product Care', content: 'Strictly dry clean only. The intricate embroidery requires professional care to maintain its beauty. Avoid direct contact with perfumes and liquids.' },
      { title: 'Size Guide', content: 'Please consult our detailed Mahra size chart to select the size that will provide the most flattering and comfortable fit.' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 13,
    name: 'Azeen',
    price: 2000,
    brand: 'Mahra',
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/6/008.webp?updatedAt=1758914121967',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/6/008.webp?updatedAt=1758914121967',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/M%20(5).opti.webp?updatedAt=1759515148031'
    ],
    category: 'Panjabi',
    showOnHome: false,
    showInSearch: true,
    description: "Experience serene elegance with the 'Azeen' Panjabi from the Mahra collection. This piece is a study in minimalist beauty, presented in a calming, sophisticated blue hue. The design is impeccably clean, allowing the high-quality fabric and precise tailoring to take center stage. The Azeen Panjabi is the perfect choice for the modern man who appreciates understated luxury and timeless style, making it ideal for a variety of occasions, from daytime gatherings to evening celebrations.",
    materials: [
        'Premium Viscose-Cotton Blend: A soft, breathable fabric with a beautiful drape and a subtle, refined texture.',
        'Minimalist Placket Design: A clean, concealed placket that enhances the modern aesthetic.',
        'Custom Matte Buttons: Discreet, high-quality buttons that complement the Panjabi\'s minimalist appeal.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'Cut for a modern, regular fit that ensures comfort without sacrificing a sharp silhouette. Its serene blue color makes it a versatile and sophisticated addition to any wardrobe.' },
      { title: 'Product Care', content: 'Dry clean recommended to preserve the fabric\'s delicate texture and color. Can be hand-washed with care in cold water.' },
      { title: 'Size Guide', content: 'Available in a full range of sizes. We recommend consulting the Mahra size chart to find your ideal fit.' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 14,
    name: 'Siyahaan',
    price: 4000,
    brand: 'Mahra',
    imageUrl: 'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/6/009.webp?updatedAt=1758914121317',
    gallery: [
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/6/009.webp?updatedAt=1758914121317',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/M%20(15).opti.webp?updatedAt=1759515147954',
      'https://ik.imagekit.io/f8opwyddtv/Images/Shop%20Page/Products%20Details/M%20(14).opti.webp?updatedAt=1759515147963'
    ],
    category: 'Panjabi',
    showOnHome: false,
    showInSearch: true,
    description: "Command the room with the 'Siyahaan' Panjabi, a masterpiece of dark elegance from the Mahra collection. The name, meaning 'blackness,' perfectly captures the essence of this powerful piece. Crafted from a luxurious, deep black fabric, it features a striking texture that plays with light and shadow. The design is bold yet refined, with clean lines and impeccable tailoring that create an aura of sophisticated mystery. For the man who is confident, discerning, and unapologetically stylish.",
    materials: [
      'Premium Textured Suiting Fabric: A high-quality, structured material with a unique, subtle texture that adds incredible depth and a luxurious feel.',
      'Contrasting Piped Edges: Fine piping along the collar and cuffs provides a sharp, clean finish and a subtle touch of detail.',
      'Polished Horn Buttons: Genuine horn buttons, polished to a high shine, add a touch of organic luxury.'
    ],
    additionalInfo: [
      { title: 'Fit & Style', content: 'A sharp, tailored fit that accentuates the silhouette. This Panjabi is designed to make a powerful statement at formal events, weddings, and exclusive gatherings.' },
      { title: 'Product Care', content: 'Strictly dry clean only. The premium fabric and detailing require professional care to maintain their pristine condition.' },
      { title: 'Size Guide', content: 'Our Mahra collection is tailored for a precise fit. Please refer to our detailed size chart to ensure you select the correct size for a perfect look.' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
];
