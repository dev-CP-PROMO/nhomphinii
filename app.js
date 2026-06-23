// =====================================================
// EXCLUSIVE SHOP — app.js v3
// =====================================================

const CONFIG = {
  telegram : "SeIIer_xXx",
  zangi    : "6970835383",
  zangiUrl : "https://services.zangi.com/dl/conversation/6970835383",
};

const TG_URL    = `https://t.me/${CONFIG.telegram}`;
const ZANGI_URL = CONFIG.zangiUrl;

// =====================================================
// PRODUCTS
// =====================================================
const products = [
  {
    title: "NEW 2025 CP",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/2025-cp.mp4",
    desc: "* CP CONTENTS OF 2025<br>* +7GB OF FILES<br>* +1,050 VIDEOS",
    chips: ["7GB+", "Novo", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 1340
  },
  {
    title: "PREMIUM CP",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Premium-cp.mp4",
    desc: "* PREMIUM CP FULL<br>* +19 GB OF FILES<br>* +3,250 LONG VIDEOS",
    chips: ["19GB+", "Premium", "Top Quality"],
    badges: [{ label: "⭐ PREMIUM", cls: "premium" }, { label: "VIP", cls: "vip" }],
    proof: ["/proof/4.jpg", "/proof/5.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 2340
  },
  {
    title: "CP1",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Cp1.jpg",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Folder1-c.mp4",
    desc: "* CP1 CONTENTS<br>* +5GB OF FILES<br>* +800 VIDEOS",
    chips: ["5GB+", "Best Seller", "Popular"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "BEST SELLER", cls: "seller" }],
    proof: ["/proof/6.jpg", "/proof/7.jpg", "/proof/8.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 4560
  },
  {
    title: "CP2",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Cp2.jpg",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/folder2-c.mp4",
    desc: "* CP2 CONTENTS<br>* +13GB OF FILES<br>* +2,440 VIDEOS",
    chips: ["13GB+", "Top Rated", "Exclusive"],
    badges: [{ label: "🏆 TOP", cls: "top" }, { label: "25$ ONLY", cls: "promo" }],
    proof: ["/proof/9.jpg", "/proof/10.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 3120
  },
  {
    title: "CP3",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/CP3-1-1536x810-1-1024x540.jpg",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/folder3-c.mp4",
    desc: "* CP3 CONTENTS<br>* +22GB OF FILES<br>* +4,000 VIDEOS",
    chips: ["22GB+", "Mega", "Best Value"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "PROMO DAY", cls: "promo-day" }],
    proof: ["/proof/11.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 5670
  },
  {
    title: "CP4",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Cp4-1024x576.jpg",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/folder-4-c.mp4",
    desc: "* CP4 CONTENTS<br>* +30GB OF FILES<br>* +6,050 VIDEOS",
    chips: ["30GB+", "Ultimate", "Huge Pack"],
    badges: [{ label: "💎 ULTIMATE", cls: "ultimate" }, { label: "VIP CONTENT", cls: "vip-content" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 7890
  },
  {
    title: "MOM AND SON - CP",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Mon-and-son-cp.jpg",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/pmomm-p.mp4",
    desc: "* MOM AND SON<br>* +3GB OF FILES<br>* +600 VIDEOS<br>* BEST SELLER",
    chips: ["3GB+", "Best Seller", "Exclusive"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "BEST SELLER", cls: "seller" }, { label: "BUY 1 GET 2 FREE", cls: "bogo" }],
    proof: ["/proof/3.jpg", "/proof/4.jpg", "/proof/5.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 9230
  },
  {
    title: "EXCLUSIVE CP",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Exclusive-cp.mp4",
    desc: "* INCLUDES PREMIUM CP<br>* +25GB OF FILES<br>* +4,900 VIDEOS WITH MIXED LONG VIDEOS",
    chips: ["25GB+", "Exclusive", "Limited"],
    badges: [{ label: "⭐ EXCLUSIVE", cls: "exclusive" }, { label: "VIP", cls: "vip" }],
    proof: ["/proof/6.jpg", "/proof/7.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 4450
  },
  {
    title: "RAPE & CP",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Rape-1.mp4",
    desc: "* GIRLS RESISTING<br>* SCREAMING AND ASKING FOR HELP<br>* +6GB OF FILES<br>* +500 VIDEOS",
    chips: ["6GB+", "Extreme", "18+"],
    badges: [{ label: "⚠️ 18+", cls: "adult" }, { label: "OUT NOW", cls: "out-now" }],
    proof: ["/proof/8.jpg", "/proof/9.jpg", "/proof/10.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 2340
  },
  {
    title: "REAL INCEST - MOM AND SON ADULT",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/MOM-AND-SON-adult-1024x540.jpg",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/REAL-Mom-Son-Hidden-Cam-2_@newsociety0-telegram-Fsociety2-reddit-join-Signal-app-group_.mp4",
    desc: "* REAL INCEST MOM AND SON<br>* MOM AND DAUGHTER<br>* +12GB OF FILES<br>* LONG VIDEOS",
    chips: ["12GB+", "Real", "Hidden Cam"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "25$ ONLY", cls: "promo" }],
    proof: ["/proof/11.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 5670
  },
  {
    title: "ADULT RAPE",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/RAPE-ADULT.mp4",
    desc: "* FORCED SEX<br>* UK, CANADA AND LATINA RAPE",
    chips: ["4GB+", "Adult", "18+"],
    badges: [{ label: "⚠️ 18+", cls: "adult" }, { label: "VIP CONTENT", cls: "vip-content" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 1890
  },
  {
    title: "HIGHSCHOOL THOTS",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Highschool-thots-1024x576.webp",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Highschool-thots.mov",
    desc: "* TEENS FUCKING, SUCKING, SOLO, THREESOME AND MORE<br>* +8GB OF FILES<br>* +750 VIDEOS",
    chips: ["8GB+", "Teens", "Popular"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "BUY 1 GET 2 FREE", cls: "bogo" }],
    proof: ["/proof/4.jpg", "/proof/5.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 6780
  },
  {
    title: "ENGLISH TEENS",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/English-teens.mov",
    desc: "* MORE THAN 600 GIRLS UNDER 16Y<br>* +13GB OF FILES<br>* +1,250 LONG VIDEOS",
    chips: ["13GB+", "UK Girls", "Under 16"],
    badges: [{ label: "⭐ PREMIUM", cls: "premium" }, { label: "PROMO DAY", cls: "promo-day" }],
    proof: ["/proof/6.jpg", "/proof/7.jpg", "/proof/8.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 3450
  },
  {
    title: "AYUMI GIRL",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Yumi.mov",
    desc: "* AYUMI GIRL<br>* 2GB OF FILES<br>* LONG VIDEOS",
    chips: ["2GB+", "Ayumi", "Long Videos"],
    badges: [{ label: "✨ FEATURED", cls: "featured" }, { label: "25$ ONLY", cls: "promo" }],
    proof: ["/proof/9.jpg", "/proof/10.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 1230
  },
  {
    title: "ROSE FOLDER",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Rose.mov",
    desc: "* ROSE GIRL<br>* PURE CONTENT<br>* LONG VIDEOS WITH 6GB OF FILES",
    chips: ["6GB+", "Pure", "Rose"],
    badges: [{ label: "🌹 ROSE", cls: "rose" }, { label: "VIP CONTENT", cls: "vip-content" }],
    proof: ["/proof/11.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 890
  },
  {
    title: "PYT CHANNEL",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/IMG_7725.mov",
    desc: "* 9 PYT CHANNELS<br>* WHITE, BLACK, LIGHTSKIN, LATINA AND NYC GIRLS<br>* MORE THAN 10K VIDEOS",
    chips: ["10GB+", "9 Channels", "PYT"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "OUT NOW", cls: "out-now" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg", "/proof/4.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 4560
  },
  {
    title: "AMELIA BLONDE GIRL",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Amelia-1024x576.webp",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Amelia.mp4",
    desc: "* AMELIA BLONDE 13Y<br>* +1GB OF FILES<br>* LONG VIDEOS",
    chips: ["1GB+", "Blonde", "13Y"],
    badges: [{ label: "💛 BLONDE", cls: "blonde" }, { label: "VIP CONTENT", cls: "vip-content" }],
    proof: ["/proof/5.jpg", "/proof/6.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 2340
  },
  {
    title: "BOTTOM QUARK - GAY BOY",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Quart-Bottom-1024x576.png",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Bottom-Quark.mp4",
    desc: "* GAY BOY<br>* +3GB OF FILES<br>* SOLO, BLOOD, BODY WRITTING, CUM, DILDO AND MORE",
    chips: ["3GB+", "Gay", "18+"],
    badges: [{ label: "🌈 GAY", cls: "gay" }, { label: "25$ ONLY", cls: "promo" }],
    proof: ["/proof/7.jpg", "/proof/8.jpg", "/proof/9.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 980
  },
  {
    title: "DESIREE GARCIA",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Garcia-12-1024x576.webp",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Garcia.mp4",
    desc: "* DESIREE GARCIA 15Y<br>* MASTURBATING WHILE PROVOKING PEDOS<br>* +1GB OF FILES AND HER SOCIAL MEDIA<br>* +160 VIDEOS",
    chips: ["1GB+", "Desiree", "15Y"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "PROMO DAY", cls: "promo-day" }],
    proof: ["/proof/10.jpg", "/proof/11.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 3450
  },
  {
    title: "SNAPGOD FULL Edt.",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Snapgod.webp",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Snapgod.mp4",
    desc: "* BLACKMAILED GIRLS ON SNAPCHAT<br>* +530GB OF PURE CONTENT<br>* +FOLDER WITH (LIZZY, IZZY, AVA, SAVANNAH….)<br>* BEST LONG VIDEOS",
    chips: ["530GB+", "Snapchat", "Blackmail"],
    badges: [{ label: "💀 SNAPGOD", cls: "snapgod" }, { label: "VIP CONTENT", cls: "vip-content" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg", "/proof/4.jpg", "/proof/5.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 2340
  },
  {
    title: "IVANKA AND HER LITTLE BROTHER",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/ivanka-1024x576.webp",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/ivanka.mp4",
    desc: "* IVANKA AND BRO<br>* SOLO<br>* INCEST WITH HER BRO<br>* 10GB OF FILES<br>* LONG VIDEOS",
    chips: ["10GB+", "Incest", "Ivanka"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "BUY 1 GET 2 FREE", cls: "bogo" }],
    proof: ["/proof/6.jpg", "/proof/7.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 5670
  },
  {
    title: "EMMI SELLERS",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/emmi.mp4",
    desc: "* EMMI SELLERS<br>* GOT HER GALLERY VIDEOS LEAKED AFTER BROKEUP WITH HER BOYFRIEND<br>* 10GB OF FILES<br>* LONG VIDEOS",
    chips: ["10GB+", "Leaked", "Emmi"],
    badges: [{ label: "📸 LEAKED", cls: "leaked" }, { label: "25$ ONLY", cls: "promo" }],
    proof: ["/proof/8.jpg", "/proof/9.jpg", "/proof/10.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 890
  },
  {
    title: "NEW BLACK PYT",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Black-pyt.jpeg",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Black-Pyt.mp4",
    desc: "* BLACK GIRLS VIDEOS<br>* USA, LATINA AND CANADA GIRLS<br>* +9GB OF FILES",
    chips: ["9GB+", "Black", "PYT"],
    badges: [{ label: "🖤 BLACK", cls: "black" }, { label: "OUT NOW", cls: "out-now" }],
    proof: ["/proof/11.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 1230
  },
  {
    title: "MONKEY APP WINS",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Monkey-app-1024x540.jpg",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Monkey-app.mov",
    desc: "* GIRLS FROM ALL COUNTRIES&nbsp;<br>* +10GB OF FILES<br>* +5000 VIDEOS",
    chips: ["10GB+", "Monkey App", "Global"],
    badges: [{ label: "🐒 MONKEY", cls: "monkey" }, { label: "VIP CONTENT", cls: "vip-content" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 3450
  },
  {
    title: "TWO BANANA GIRLS",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Banana-Girls.mp4",
    desc: "* VERY FAMOUS GIRLS FROM OMEGLE GAME<br>* +2HR LONG VIDEOS<br>* +3GB OF FILE",
    chips: ["3GB+", "Omegle", "Famous"],
    badges: [{ label: "🍌 BANANA", cls: "banana" }, { label: "PROMO DAY", cls: "promo-day" }],
    proof: ["/proof/4.jpg", "/proof/5.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 2340
  },
  {
    title: "DARKZADIE REN",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Darkzadie-1024x540.jpg",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Darkzadie.mp4",
    desc: "* DARKZADIE REN CONTENT<br>* +3GB OF FILES<br>* LONG VIDEOS",
    chips: ["3GB+", "Darkzadie", "Goth"],
    badges: [{ label: "🖤 DARK", cls: "dark" }, { label: "25$ ONLY", cls: "promo" }],
    proof: ["/proof/6.jpg", "/proof/7.jpg", "/proof/8.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 980
  },
  {
    title: "MIXED TEENS COLLECTION",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Teens-1024x539.webp",
    video: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/teens.mp4",
    desc: "* MORE THAN 700 TEENS<br>* +30GB OF FILES<br>* MIXED CONTENTS",
    chips: ["30GB+", "Teens", "Mixed"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "BUY 1 GET 2 FREE", cls: "bogo" }],
    proof: ["/proof/9.jpg", "/proof/10.jpg", "/proof/11.jpg"],
    proofCaption: "Sales proof",
freeLink: "",
    buyLink: TG_URL,
    views: 6780
  },
  {
    title: "VIP CHANNEL PROMO - ALL FOLDERS",
    img: "https://dev-exclusive-secretshop.pantheonsite.io/wp-content/uploads/2025/12/Vip-channel-1024x576.webp",
    desc: "* ACCESS TO ALL FOLDERS<br>* INSTANT DELIVERY<br>* LIFETIME UPDATES",
    chips: ["All Access", "Lifetime", "Instant"],
    badges: [{ label: "👑 VIP", cls: "vip" }, { label: "VIP CONTENT", cls: "vip-content" }, { label: "🔥 HOT", cls: "hot" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg", "/proof/4.jpg", "/proof/5.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    buyLink: TG_URL,
    views: 12340
  }

  // {
  //   title    : "Pack Premium",
  //   video    : "videos/pack-premium.mp4",
  //   desc     : "Description of the pack...",
  //   chips    : ["15GB+", "VIP", "Lifetime"],
  //   badges   : [{ label: "💎 VIP", cls: "vip" }, { label: "✨ NEW", cls: "new" }],
  //   proof    : ["/proof/pack1.jpg", "/proof/pack2.jpg"],
  //   proofCaption: "Sales proof — Pack Premium",
  //   freeLink : "",
  //   buyLink  : TG_URL,
  //   views    : 890,
  // },
];

const buyers = [
  { name: "Lucas R.",   product: "Mentoria 2025", location: "São Paulo, BR" },
  { name: "Emma T.",    product: "Mentoria VIP",  location: "London, UK" },
  { name: "Michael B.", product: "Custom Pack",   location: "New York, US" },
  { name: "Sarah J.",   product: "VIP Access",    location: "Toronto, CA" },
  { name: "Ana M.",     product: "Mentoria 2025", location: "Lisboa, PT" },
  { name: "João F.",    product: "Pack Premium",  location: "Porto, PT" },
  { name: "Carlos S.",  product: "Mentoria 2025", location: "Rio de Janeiro, BR" },
  { name: "Mia K.",     product: "VIP Folder",    location: "Berlin, DE" },
];

// =====================================================
// i18n
// =====================================================
let currentLang = "en";

const i18n = {
  en: {
    featured_label       : "FEATURED",
    featured_title       : "Featured Videos",
    more_options         : "More Options",
    custom_folder_title  : "Custom Folder Request",
    custom_folder_desc   : "Describe what you are looking for and your budget.",
    custom_folder_ph     : "Example: I need niche X, approx 5GB. Budget $20...",
    vip_title            : "Join VIP Group",
    vip_desc             : "Enter the specific VIP group name you want to join.",
    vip_ph               : "Group Name...",
    send_request         : "Send Request",
    join_now             : "Join Now",
    telegram             : "Telegram",
    zangi                : "Zangi",
    footer_tagline       : "Premium digital content. Instant delivery.",
    contact              : "Contact",
    quick_links          : "Quick Links",
    back_top             : "↑ Back to Top",
    products             : "Products",
    buy_now              : "Buy Now",
    free_folder          : "Free Folder",
    show_less            : "Show less",
    show_more            : "Show more",
    views_live           : "watching",
    playing              : "Playing",
    free_available_title : "Free Folder Available!",
    free_available_desc  : "Access the free folder now",
    free_access_btn      : "🚀 Access Free Folder",
    free_unavail_title   : "Free Folder Not Available",
    free_unavail_desc    : "This product has no free folder. Contact us for access.",
    contact_telegram     : "Telegram Support",
    contact_zangi        : "Zangi Support",
    proof_prev           : "‹",
    proof_next           : "›",
    official_notice      : "🔒 OFFICIAL & UNIQUE PAGE — YOUR PRIVACY IS FULLY PROTECTED",
  },
  pt: {
    featured_label       : "DESTACADOS",
    featured_title       : "Vídeos Destacados",
    more_options         : "Mais Opções",
    custom_folder_title  : "Pedido de Pasta Personalizada",
    custom_folder_desc   : "Descreve o que procuras e o teu orçamento.",
    custom_folder_ph     : "Exemplo: Preciso de nicho X, aprox 5GB. Orçamento $20...",
    vip_title            : "Entrar no Grupo VIP",
    vip_desc             : "Escreve o nome do grupo VIP que desejas entrar.",
    vip_ph               : "Nome do Grupo...",
    send_request         : "Enviar Pedido",
    join_now             : "Entrar Agora",
    telegram             : "Telegram",
    zangi                : "Zangi",
    footer_tagline       : "Conteúdo digital premium. Entrega imediata.",
    contact              : "Contacto",
    quick_links          : "Links Rápidos",
    back_top             : "↑ Voltar ao Topo",
    products             : "Produtos",
    buy_now              : "Comprar",
    free_folder          : "Pasta Grátis",
    show_less            : "Mostrar menos",
    show_more            : "Mostrar mais",
    views_live           : "a ver",
    playing              : "A Reproduzir",
    free_available_title : "Pasta Grátis Disponível!",
    free_available_desc  : "Acesse a pasta gratuita agora",
    free_access_btn      : "🚀 Aceder à Pasta Grátis",
    free_unavail_title   : "Pasta Gratuita Não Disponível",
    free_unavail_desc    : "Este conteúdo não possui pasta gratuita. Entre em contacto para obter acesso.",
    contact_telegram     : "Contactar no Telegram",
    contact_zangi        : "Zangi Support",
    proof_prev           : "‹",
    proof_next           : "›",
    official_notice      : "🔒 PÁGINA OFICIAL E ÚNICA — A SUA PRIVACIDADE ESTÁ TOTALMENTE PROTEGIDA",
  }
};

function t(key) { return (i18n[currentLang] || i18n.en)[key] || key; }

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-placeholder-i18n]").forEach(el => {
    el.placeholder = t(el.dataset.placeholderI18n);
  });
  document.getElementById("products-container").innerHTML = "";
  renderProducts();
}

// =====================================================
// TELEGRAM / ZANGI HELPERS
// =====================================================
function tgOpen(msg) {
  window.open(`${TG_URL}?text=${encodeURIComponent(msg)}`, "_blank");
}

function openTelegramProduct(title) {
  tgOpen(
    `Hello, I want to purchase this folder:\n\n📂 Folder: ${title}\nPlease guide me through the payment process.`
  );
}

function sendCustomFolder() {
  const val = document.getElementById("custom-folder-text").value.trim();
  if (!val) { alert("Please describe the folder and your price offer."); return; }
  tgOpen(`Hello, I would like to negotiate a custom folder.\n\n📂 Request Details:\n${val}\n\nPlease let me know if this is possible.`);
}

function sendVipRequest() {
  const val = document.getElementById("vip-group-text").value.trim();
  if (!val) { alert("Please enter the VIP group name."); return; }
  tgOpen(`Hello, I am interested in joining a VIP group.\n\n💎 VIP Group Name: ${val}\n\nPlease send me the payment details.`);
}

// =====================================================
// FREE FOLDER MODAL
// =====================================================
function openFreeModal(idx) {
  const p = products[idx];
  const inner = document.getElementById("free-modal-inner");
  if (p.freeLink) {
    inner.innerHTML = `
      <div class="free-available">
        <div class="modal-icon">🎁</div>
        <h3>${t("free_available_title")}</h3>
        <p>${t("free_available_desc")}</p>
        <button class="btn-access-folder" onclick="window.open('${p.freeLink}','_blank')">${t("free_access_btn")}</button>
      </div>`;
  } else {
    inner.innerHTML = `
      <div class="free-unavailable">
        <div class="modal-icon">🔒</div>
        <h3>${t("free_unavail_title")}</h3>
        <p>${t("free_unavail_desc")}</p>
        <div class="free-contact-btns">
          <button class="btn-contact-tg" onclick="openTelegramProduct('${p.title}')">💬 ${t("contact_telegram")}</button>
          <button class="btn-contact-zangi" onclick="window.open('${ZANGI_URL}','_blank')">📱 ${t("contact_zangi")}</button>
        </div>
      </div>`;
  }
  document.getElementById("free-folder-modal").classList.add("open");
}

function closeFreeModal() {
  document.getElementById("free-folder-modal").classList.remove("open");
}

// =====================================================
// PROOF MODAL — with image gallery + fullscreen zoom
// =====================================================
let proofImages   = [];
let proofCurrent  = 0;

function openProof(idx) {
  const p = products[idx];
  if (!p || !p.proof || !p.proof.length) return;

  proofImages  = Array.isArray(p.proof) ? p.proof : [p.proof];
  proofCurrent = 0;

  document.getElementById("proof-caption").textContent = p.proofCaption || "Proof of sales";
  renderProofSlide();
  document.getElementById("proof-modal").classList.add("open");
}

function renderProofSlide() {
  const img = document.getElementById("proof-img");
  const counter = document.getElementById("proof-counter");
  img.src = proofImages[proofCurrent];
  if (proofImages.length > 1) {
    counter.textContent = `${proofCurrent + 1} / ${proofImages.length}`;
    counter.style.display = "block";
    document.getElementById("proof-prev").style.display = "flex";
    document.getElementById("proof-next").style.display = "flex";
  } else {
    counter.style.display = "none";
    document.getElementById("proof-prev").style.display = "none";
    document.getElementById("proof-next").style.display = "none";
  }
}

function proofNav(dir) {
  proofCurrent = (proofCurrent + dir + proofImages.length) % proofImages.length;
  renderProofSlide();
}

// Fullscreen zoom on image click
function openProofFullscreen() {
  const src = proofImages[proofCurrent];
  const fs = document.getElementById("proof-fullscreen");
  document.getElementById("proof-fs-img").src = src;
  fs.classList.add("open");
}

function closeProofFullscreen() {
  document.getElementById("proof-fullscreen").classList.remove("open");
}

function closeProof() {
  document.getElementById("proof-modal").classList.remove("open");
  closeProofFullscreen();
}

// =====================================================
// LIVE VIEWS
// =====================================================
const liveViews = {};

function initViews() {
  products.forEach((p, i) => { liveViews[i] = p.views || Math.floor(Math.random() * 2000 + 400); });
}

function tickViews() {
  products.forEach((_, i) => {
    liveViews[i] = Math.max(100, liveViews[i] + Math.floor(Math.random() * 9) - 3);
    const el = document.getElementById(`views-${i}`);
    if (el) el.textContent = `${liveViews[i].toLocaleString()} ${t("views_live")}`;
  });
}

// =====================================================
// RENDER PRODUCTS
// =====================================================
function renderProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;

  products.forEach((p, idx) => {
    const badgesHtml = (p.badges || []).map((b, i) =>
      `<span class="vid-badge ${b.cls}" style="animation-delay:${i * .1}s">${b.label}</span>`
    ).join("");

    const chipsHtml = (p.chips || []).map(c =>
      `<span class="card-chip">${c}</span>`
    ).join("");

    const proofArr = Array.isArray(p.proof) ? p.proof : (p.proof ? [p.proof] : []);
    const proofBtn = proofArr.length
      ? `<button class="proof-btn" onclick="openProof(${idx})">🏆 Proof</button>`
      : "";

    const mediaHtml = p.video ? `
      <div class="video-wrapper">
        <video class="product-video" src="${p.video}" autoplay muted loop playsinline controlslist="nodownload" poster="${p.poster || ''}"></video>
        <div class="video-overlay"></div>
        ${proofBtn}
        <div class="vid-badges">${badgesHtml}</div>
        <div class="vid-center-hud">
          <div class="vid-views">
            <span class="views-dot"></span>
            <span id="views-${idx}">${(liveViews[idx] || p.views || 0).toLocaleString()} ${t("views_live")}</span>
          </div>
          <div class="vid-playing">
            <div class="eq-bars">
              <div class="eq-bar"></div><div class="eq-bar"></div>
              <div class="eq-bar"></div><div class="eq-bar"></div>
              <div class="eq-bar"></div>
            </div>
            ${t("playing")}
          </div>
        </div>
      </div>` : p.img ? `
      <div style="position:relative;">
        <img class="product-video" src="${p.img}" alt="${p.title}" loading="lazy" style="aspect-ratio:16/9;object-fit:cover;width:100%;">
        ${proofBtn}
        <div class="vid-badges">${badgesHtml}</div>
      </div>` : "";

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${idx * .12}s`;
    card.innerHTML = `
      ${mediaHtml}
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-desc-wrap">
          <div class="card-desc" id="desc-${idx}">${p.desc || ""}</div>
          <button class="desc-toggle" id="toggle-${idx}" onclick="toggleDesc(${idx})">${t("show_more")}</button>
        </div>
        ${chipsHtml ? `<div class="card-chips">${chipsHtml}</div>` : ""}
      </div>
      <div class="card-actions">
        <button class="btn-buy" type="button">🛒 ${t("buy_now")}</button>
        <button class="btn-free" type="button">📂 ${t("free_folder")}</button>
      </div>
    `;

    card.querySelector(".btn-buy").addEventListener("click", () => {
      if (p.buyLink) window.open(p.buyLink, "_blank");
      else openTelegramProduct(p.title);
    });
    card.querySelector(".btn-free").addEventListener("click", () => openFreeModal(idx));
    container.appendChild(card);
  });
}

function toggleDesc(idx) {
  const desc = document.getElementById(`desc-${idx}`);
  const btn  = document.getElementById(`toggle-${idx}`);
  const expanded = desc.classList.toggle("expanded");
  btn.textContent = expanded ? t("show_less") : t("show_more");
}

// =====================================================
// PARTICLES
// =====================================================
function initParticles() {
  const wrap = document.getElementById("headerParticles");
  if (!wrap) return;
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;";
  wrap.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let W, H, particles;

  function resize() { W = canvas.width = wrap.offsetWidth; H = canvas.height = wrap.offsetHeight; }

  function makeParticle() {
    return { x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.6+.3,
             dx: (Math.random()-.5)*.45, dy: (Math.random()-.5)*.3,
             a: Math.random()*.55+.15,
             color: Math.random()>.5 ? "66,165,245" : "211,47,47" };
  }

  function init() { resize(); particles = Array.from({length:80}, makeParticle); }

  function draw() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(${p.color},${p.a})`; ctx.fill();
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<0||p.x>W) p.dx*=-1;
      if(p.y<0||p.y>H) p.dy*=-1;
    });
    requestAnimationFrame(draw);
  }

  init(); draw();
  window.addEventListener("resize", resize);
}

// =====================================================
// VIEWER COUNT
// =====================================================
let viewerCount = Math.floor(Math.random()*300+120);

function updateViewerCount() {
  viewerCount = Math.max(80, Math.min(600, viewerCount + Math.floor(Math.random()*5)-2));
  const el = document.getElementById("viewerCount");
  if (el) el.textContent = `${viewerCount} live viewers`;
}

// =====================================================
// NOTIFICATIONS
// =====================================================
function showNotification() {
  const buyer = buyers[Math.floor(Math.random()*buyers.length)];
  const el = document.createElement("div");
  el.className = "notification-item";
  el.innerHTML = `🛒 <strong>${buyer.name}</strong> purchased <strong>${buyer.product}</strong><br><small>📍 ${buyer.location} &nbsp;•&nbsp; Just now</small>`;
  const wrap = document.getElementById("live-notifications");
  if (wrap) { wrap.prepend(el); setTimeout(() => el.remove(), 5000); }
}

function startNotifications() {
  setTimeout(showNotification, 2400);
  setInterval(showNotification, Math.floor(Math.random()*12000)+14000);
}

// =====================================================
// LINK INJECTION
// =====================================================
function injectLinks() {
  ["hdr-telegram-btn","footer-telegram"].forEach(id => {
    const el = document.getElementById(id); if(el) el.href = TG_URL;
  });
  ["hdr-zangi-btn","footer-zangi"].forEach(id => {
    const el = document.getElementById(id); if(el) el.href = ZANGI_URL;
  });
}

// =====================================================
// INIT
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  initViews();
  injectLinks();
  renderProducts();
  initParticles();
  startNotifications();
  updateViewerCount();
  setInterval(updateViewerCount, 3500);
  setInterval(tickViews, 4000);

  ["free-folder-modal","proof-modal"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", e => { if(e.target===el){ closeFreeModal(); closeProof(); }});
  });

  const fs = document.getElementById("proof-fullscreen");
  if (fs) fs.addEventListener("click", e => { if(e.target===fs) closeProofFullscreen(); });

  document.addEventListener("keydown", e => {
    if (e.key==="Escape") { closeFreeModal(); closeProof(); }
    if (e.key==="ArrowRight" && document.getElementById("proof-modal").classList.contains("open")) proofNav(1);
    if (e.key==="ArrowLeft"  && document.getElementById("proof-modal").classList.contains("open")) proofNav(-1);
  });
});
APPEOF
