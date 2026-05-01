window.PANNA_DATA = (() => {
  const media = "https://mypanna.com/wp-content/uploads";

  const img = (path) => `${media}/${path}`;

  return {
    logo: img("2024/10/PANNAnewlatinofood.png"),
    nav: [
      {
        label: "MENU",
        href: "#",
        sub: [
          { label: "DINE-IN", href: "https://mypanna.com/menu/dine-in/" },
          {
            label: "AREPA PICK 4 FLAVORS",
            href: "https://mypanna.com/menu/arepa-pick-4-flavors/",
          },
          { label: "HOLIDAY", href: "https://mypanna.com/menu/holiday-menu/" },
          { label: "CATERING", href: "https://mypanna.com/menu/catering/" },
          { label: "GIFT CARDS", href: "https://mypanna.com/giftcards/" },
        ],
      },
      {
        label: "BLOG",
        href: "https://mypanna.com/blog/",
        sub: [
          {
            label: "We are PANNA",
            href: "https://mypanna.com/category/somos-panna/",
          },
          {
            label: "Introduction to Venezuelan food",
            href: "https://mypanna.com/category/introduccion-a-la-comida-venezolana/",
          },
          {
            label: "Essence of Venezuelan food",
            href: "https://mypanna.com/category/esencia-de-la-comida-venezolana/",
          },
          {
            label: "Must-try Venezuelan dishes",
            href: "https://mypanna.com/category/platos-venezolanos-imprescindibles/",
          },
          {
            label: "Traditional Venezuelan drinks",
            href: "https://mypanna.com/category/bebidas-tradicionales-venezolanas/",
          },
          {
            label: "Flavors of Venezuela in Miami",
            href: "https://mypanna.com/category/sabores-de-venezuela-en-miami/",
          },
        ],
      },
      {
        label: "LOCATIONS",
        href: "#",
        sub: [
          { label: "DORAL", href: "https://mypanna.com/locations/doral/" },
          { label: "ORLANDO", href: "https://mypanna.com/locations/orlando/" },
          {
            label: "WESTON ROAD",
            href: "https://mypanna.com/locations/weston-road/",
          },
          {
            label: "WESTON TOWN CENTER",
            href: "https://mypanna.com/locations/weston-town-center/",
          },
        ],
      },
      { label: "CONTACT", href: "https://mypanna.com/contact/" },
      {
        label: "ONLINE ORDERS",
        href: "https://mypanna.com/orders/",
        sub: [
          { label: "DORAL (3rd PARTY)", href: "https://mypanna.com/orders/" },
          {
            label: "ORLANDO (3rd PARTY)",
            href: "https://www.getsauce.com/order/panna-orlando/menu",
          },
          {
            label: "WESTON RD (3rd PARTY)",
            href: "https://mypanna.com/orders/",
          },
          {
            label: "WESTON TOWN CENTER (3rd PARTY)",
            href: "https://mypanna.com/orders/",
          },
        ],
      },
      {
        label: "DOWNLOAD APP",
        href: "#",
        sub: [
          {
            label: "IPHONE",
            href: "https://apps.apple.com/us/app/panna-new-latino-food/id6474134808",
          },
          {
            label: "ANDROID",
            href: "https://play.google.com/store/apps/details?id=com.como.prod976720239767",
          },
        ],
      },
    ],
    heroSlides: [
      {
        alt: "PANNA coffee counter",
        desktop: img("2026/02/BANNER-COUNTER-COFFEE-HORIZONTAL.webp"),
        mobile: img("2026/02/BANNER-COUNTER-COFFEE-VERTICAL.webp"),
      },
      {
        alt: "All week brunch",
        desktop: img("2026/04/BANNER-ALL-WEEK-BRUNCH-HORIZONTAL.webp"),
        mobile: img("2026/04/BANNER-ALL-WEEK-BRUNCH-VERTICAL.webp"),
      },
      {
        alt: "Pick 4 flavors",
        desktop: img("2024/10/BANNER-PICK-4-FLAVORS.webp"),
        mobile: img("2024/10/BANNER-PICK-4-FLAVORS-MOVIL.png"),
      },
      {
        alt: "Secret menu",
        desktop: img("2025/01/SECRET-MENU-HORIZONTAL-3.webp"),
        mobile: img("2025/01/SECRET-MENU-MOVIL-3.webp"),
      },
      {
        alt: "PANNA blog",
        desktop: img("2024/11/BLOG-PANNA.webp"),
        mobile: img("2024/11/BLOG-PANNA-MOVIL.webp"),
      },
      {
        alt: "Desserts",
        desktop: img("2024/11/BG-DESSERTS.webp"),
        mobile: img("2024/11/BACKGROUND-DESSERTS-MOVIL.webp"),
      },
      {
        alt: "Order online",
        desktop: img("2024/11/BACKGROUND-ORDER-ONLINE.png"),
        mobile: img("2024/11/BACKGROUND-ORDER-ONLINE-MOVIL.png"),
      },
      {
        alt: "Grab N Go",
        desktop: img("2025/06/GRAB-N-GO-BANNER-HORIZONTAL.webp"),
        mobile: img("2025/06/GRAB-AND-GO-VERTICAL.webp"),
      },
      {
        alt: "Golfeados",
        desktop: img("2024/11/BACKGROUND-GOLFEADOS.webp"),
        mobile: img("2024/11/BACKGROUND-GOLFEADOS-MOVIL.webp"),
      },
      {
        alt: "Gift card",
        desktop: img("2024/11/BG-GIFT-CARD-H.webp"),
        mobile: img("2024/11/BG-GIFT-CARD-MOVIL.webp"),
      },
      {
        alt: "Omelette",
        desktop: img("2025/01/BACKGROUND-2.webp"),
        mobile: img("2025/01/BACKGROUND-MOVIL-2.webp"),
      },
    ],
    menuRows: [
      [
        { label: "AREPAS", image: img("2024/10/ICONO_AREPAS.webp") },
        { label: "CACHAPAS", image: img("2024/10/ICONO_CACHAPAS.webp") },
        { label: "BRUNCH", image: img("2025/09/BRUNCH2.webp") },
        { label: "FROM THE GRILL", image: img("2024/10/FROM-THE-GRILL.webp") },
        {
          label: "LATIN CORNER",
          image: img("2024/10/ICONO_LATIN-CORNER.webp"),
        },
        { label: "PLATTERS", image: img("2024/10/ICONO_PLATTERS.webp") },
        { label: "GRAB 'N GO", image: img("2024/10/ICONO_GRAB-GO.webp") },
        { label: "BURGERS", image: img("2024/10/BURGER.webp") },
      ],
      [
        { label: "SALADS", image: img("2024/10/ICONO_SALADS.webp") },
        { label: "PATACONES", image: img("2024/10/ICONO_PATACON.webp") },
        { label: "BREAKFAST", image: img("2024/10/ICONO_BREAKFAST.webp") },
        { label: "COFFEE", image: img("2024/10/ICONO_COFFEE.webp") },
        {
          label: "JUICES & SMOOTHIES",
          image: img("2024/10/ICONO_JUICE-SMOOTHIES.webp"),
        },
        { label: "DESSERT", image: img("2024/10/ICONO_DESSERT.webp") },
        { label: "PLATO LATINO", image: img("2024/10/NEW-LATINO-MIX-1.webp") },
      ],
    ],
    starProducts: [
      {
        layout: "image-title",
        bg: "#FFF2DC",
        product: img("2024/10/PICK-4-FLAVORS-BANNER-PUBLICIDAD.webp"),
        titleImage: img("2024/10/TITULO-PICK-4-FLAVORS.webp"),
        cta: "CALL TO ORDER",
        href: "https://mypanna.com/menu/arepa-pick-4-flavors/",
      },
      {
        layout: "text",
        bgImage: img("2024/10/FONDO-PLATTERS.webp"),
        product: img("2024/10/PLATTERS.webp"),
        title: "CREATE YOUR OWN PLATTERS!",
        text: "Combine and savor the finest PANNA delights. It's simple and delicious.",
        cta: "CALL TO ORDER",
        href: "https://mypanna.com/menu/catering/",
      },
      {
        layout: "image-title",
        bgImage: img("2024/10/BACK-GRAB.webp"),
        product: img("2025/06/PRODUCTOS-GRAB-GO-VERTICAL.webp"),
        titleImage: img("2025/01/GRAB-N-GO-TITULO.webp"),
        text: "Enjoy the best flavors of PANNA at home. Visit our Grab 'n Go section and choose your favorites!",
        cta: "ORDER NOW!",
        href: "https://mypanna.com/menu/grab-and-go/",
      },
    ],
    promoCards: [
      {
        image: img("2024/10/PICK-UP-AND-DELIVERY.webp"),
        title: "Latino Flavors Delivered to Your Door!",
        text: "Order Now and Savor Without the Wait - Pick Up and Delivery from Panna New Latino Food",
        cta: "STAR NOW",
        href: "https://mypanna.com/orders/",
      },
      {
        image: img("2024/12/BANNER-GIFT-CARD-HOME.webp"),
        title: "IT'S TIME TO GET YOUR PANNA GIFT CARD",
        text: "The perfect gift for your loved ones or friends. Get it at any PANNA or order online from the button below.",
        cta: "BUY NOW",
        href: "https://mypanna.com/giftcards/",
      },
    ],
    stores: [
      {
        name: "DORAL",
        badgeName: "PANNA Doral",
        guruHref: "https://restaurantguru.com/Panna-Doral-Doral",
        image: img("2024/10/DORAL-768x384.webp"),
        address: "3887 NW 107th AVE. Suite #101 Doral, 33178",
        phone: "(305) 614-0202",
        cta: "MORE DETAILS",
        href: "https://mypanna.com/locations/doral/",
      },
      {
        name: "ORLANDO",
        badgeName: "PANNA Orlando",
        guruHref: "https://restaurantguru.com/PANNA-Orlando",
        image: img("2024/10/PANNA-ORLANDO-768x384.webp"),
        address: "13526 Village Park Dr #200 Orlando, FL 32837",
        phone: "(407) 270-7891",
        cta: "ORDER NOW",
        href: "https://www.getsauce.com/order/panna-orlando/menu",
      },
      {
        name: "WESTON ROAD",
        badgeName: "PANNA Weston Road",
        guruHref: "https://restaurantguru.com/Panna-Cafe-Weston-Weston",
        image: img("2024/10/WESTON-ROAD-768x384.webp"),
        address: "2620 Weston Rd, Weston, FL 33331",
        phone: "(954) 618-4017",
        cta: "MORE DETAILS",
        href: "https://mypanna.com/locations/weston-road/",
      },
      {
        name: "WESTON TOWN CENTER",
        badgeName: "PANNA Weston Town Center",
        guruHref: "https://restaurantguru.com/PANNA-Weston-Town-Center-Weston",
        image: img("2024/10/WESTON-768x384.webp"),
        address: "1731 Main Street Weston, FL 33326",
        phone: "(954) 372-1944",
        cta: "MORE DETAILS",
        href: "https://mypanna.com/locations/weston-town-center/",
      },
    ],
    aboutStory: {
      title: "A Fast Casual Venezuelan Restaurant Making History in the USA!",
      underline: img("2024/10/TRAZO@2x.webp"),
      underline: "/trazo.webp",
      image: img("2024/10/PANNA-STORES.webp"),
      imageAlt: "PANNA store exterior",
      paragraphs: [
        [
          "PANNA, a taste to remember, the place you love. We began as a Venezuelan restaurant since 2000. Come and visit any of our fast, casual locations to enjoy the most delicious",
          "Venezuelan food combined with other traditional delights from Colombia and Argentina.",
        ],
        [
          "At PANNA, everyone can find something to eat for",
          "breakfast, lunch, snack, dinner, and even late night. Latin people and guests from around the World have great time at PANNA with its casual environment and friendly service. Latin American food is well known for its diversity of",
          "flavors and textures; we are proud to offer the best",
          "enezuelan “cachitos and tequeños” in the USA, made with traditional recipes that you can eat at any Venezuelan",
          "estaurant . Try something different, try the best Venezuelan food at PANNA today!",
        ],
      ],
    },
    footer: {
      contact: [
        { icon: "phone", label: "+1 (305) 97-PANNA" },
        { icon: "phone", label: "+1 (305) 977-2662" },
        { icon: "mail", label: "info@mypanna.com" },
        { icon: "pin", label: "1130 NW 159th Dr, Miami FL 33169" },
      ],
      quickLinks: [
        { label: "About Us", href: "https://mypanna.com/about-us/" },
        { label: "Our Menu", href: "https://mypanna.com/menu/dine-in/" },
        { label: "Orders", href: "https://mypanna.com/orders/" },
        {
          label: "Arepa pick 4 flavor",
          href: "https://mypanna.com/menu/arepa-pick-4-flavors/",
        },
        { label: "Catering", href: "https://mypanna.com/menu/catering/" },
        {
          label: "Holiday Menu",
          href: "https://mypanna.com/menu/holiday-menu/",
        },
        {
          label: "Job Application",
          href: "https://mypanna.com/job-application/",
        },
        { label: "Accessibility", href: "https://mypanna.com/accessibility/" },
        { label: "Contact", href: "https://mypanna.com/contact/" },
      ],
      storeLinks: [
        { label: "Doral", href: "https://mypanna.com/locations/doral/" },
        { label: "Orlando", href: "https://mypanna.com/locations/orlando/" },
        {
          label: "Weston Road",
          href: "https://mypanna.com/locations/weston-road/",
        },
        {
          label: "Weston Town Center",
          href: "https://mypanna.com/locations/weston-town-center/",
        },
      ],
      social: [
        {
          type: "facebook",
          label: "Facebook",
          href: "https://www.facebook.com/pannastores",
        },
        {
          type: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/pannastores/",
        },
        {
          type: "tiktok",
          label: "TikTok",
          href: "https://www.tiktok.com/@pannastores",
        },
        {
          type: "google",
          label: "Google",
          href: "https://www.google.com/search?q=MYPANNA",
        },
      ],
      appButtons: [
        {
          image: img("2024/10/APP-STORE.webp"),
          href: "https://apps.apple.com/us/app/panna-new-latino-food/id6474134808",
          alt: "Download on the App Store",
        },
        {
          image: img("2024/10/GOOGLE-PLAY.webp"),
          href: "https://play.google.com/store/apps/details?id=com.como.prod976720239767",
          alt: "Get it on Google Play",
        },
      ],
    },
  };
})();
