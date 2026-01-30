import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: ["es"],
    theme: {
      light: {
        colors: {
          primary100: "#e5f7eb",
          primary200: "#b6e9c5",
          primary300: "#86da9f",
          primary400: "#58cb7a",
          primary500: "#2bbd55",
          primary600: "#0f9834",
          primary700: "#097f22",
          primary800: "#065c19",
          primary900: "#03380f",

          neutral0: "#ffffff",
          neutral100: "#f6f6f6",
          neutral150: "#ececec",
          neutral200: "#dcdcdc",
          neutral300: "#c4c4c4",
          neutral400: "#a0a0a0",
          neutral500: "#7c7c7c",
          neutral600: "#595959",
          neutral700: "#3c3c3c",
          neutral800: "#222222",
          neutral900: "#111111",
          neutral1000: "#000000",

          success100: "#e6f9ef",
          success200: "#b5efcf",
          success300: "#86e5b0",
          success400: "#4fd88b",
          success500: "#1fcc65",
          success600: "#17a350",
          success700: "#10773a",
          success800: "#094e25",
          success900: "#042910",

          warning100: "#fff8e6",
          warning200: "#ffeab5",
          warning300: "#ffdc84",
          warning400: "#ffcd52",
          warning500: "#ffbf21",
          warning600: "#d99f1a",
          warning700: "#b38014",
          warning800: "#8c5f0e",
          warning900: "#66440a",

          danger100: "#ffecec",
          danger200: "#ffcccc",
          danger300: "#ffadad",
          danger400: "#ff8c8c",
          danger500: "#ff6a6a",
          danger600: "#d95353",
          danger700: "#b34141",
          danger800: "#8c3030",
          danger900: "#661f1f",

          buttonPrimary100: "#e5f7eb",
          buttonPrimary200: "#b6e9c5",
          buttonPrimary300: "#86da9f",
          buttonPrimary400: "#58cb7a",
          buttonPrimary500: "#2bbd55",
          buttonPrimary600: "#0f9834",
          buttonPrimary700: "#097f22",
          buttonPrimary800: "#065c19",
          buttonPrimary900: "#03380f",

          borderColor: "#dcdcdc",
          borderColorFocus: "#2bbd55",
          borderColorDanger: "#ff6a6a",
          borderColorSuccess: "#1fcc65",
          shadow100: "0 1px 2px rgba(0,0,0,0.06)",
          shadow200: "0 1px 3px rgba(0,0,0,0.1)",
          shadow300: "0 2px 6px rgba(0,0,0,0.14)",

          fontFamily: {
            sans: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
            mono: "JetBrains Mono, Menlo, monospace",
          },

          radii: { sm: "4px", md: "6px", lg: "10px", xl: "14px" },
          spacing: { xs: "4px", sm: "8px", md: "12px", lg: "20px", xl: "32px" },
        },
      },
      dark: {
        colors: {
          primary100: "#0e3712",
          primary200: "#32a73d",
          primary300: "#49c754",
          primary400: "#68db7a",
          primary500: "#78e889",
          primary600: "#64c36b",
          primary700: "#4aa651",
          primary800: "#367938",
          primary900: "#234d20",

          neutral0: "#121212",
          neutral100: "#1f1f1f",
          neutral150: "#2b2b2b",
          neutral200: "#383838",
          neutral300: "#474747",
          neutral400: "#5b5b5b",
          neutral500: "#707070",
          neutral600: "#8a8a8a",
          neutral700: "#a6a6a6",
          neutral800: "#c4c4c4",
          neutral900: "#e0e0e0",
          neutral1000: "#f5f5f5",

          text: "#f9f9f9",

          success100: "#042910",
          success200: "#094e25",
          success300: "#10773a",
          success400: "#17a350",
          success500: "#1fcc65",
          success600: "#4fd88b",
          success700: "#86e5b0",
          success800: "#b5efcf",
          success900: "#e6f9ef",

          warning100: "#66440a",
          warning200: "#8c5f0e",
          warning300: "#b07f14",
          warning400: "#d2a11a",
          warning500: "#ffbf21",
          warning600: "#ffd552",
          warning700: "#ffe884",
          warning800: "#ffeba5",
          warning900: "#fff8cc",

          danger100: "#661f1f",
          danger200: "#8c3030",
          danger300: "#b34141",
          danger400: "#d95353",
          danger500: "#ff6a6a",
          danger600: "#ff8c8c",
          danger700: "#ffadad",
          danger800: "#ffcccc",
          danger900: "#ffecec",

          buttonPrimary100: "#0e3712",
          buttonPrimary200: "#32a73d",
          buttonPrimary300: "#49c754",
          buttonPrimary400: "#68db7a",
          buttonPrimary500: "#78e889",
          buttonPrimary600: "#64c36b",
          buttonPrimary700: "#4aa651",
          buttonPrimary800: "#367938",
          buttonPrimary900: "#234d20",

          borderColor: "#383838",
          borderColorFocus: "#68db7a",
          borderColorDanger: "#ff8c8c",
          borderColorSuccess: "#4fd88b",

          shadow100: "0 1px 2px rgba(0,0,0,0.3)",
          shadow200: "0 1px 3px rgba(0,0,0,0.45)",
          shadow300: "0 2px 6px rgba(0,0,0,0.6)",

          fontFamily: {
            sans: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
            mono: "JetBrains Mono, Menlo, monospace",
          },

          radii: { sm: "4px", md: "6px", lg: "10px", xl: "14px" },
          spacing: { xs: "4px", sm: "8px", md: "12px", lg: "20px", xl: "32px" },
        },
      },
    },
    translations: {
      es: {
        "app.components.LeftMenu.navbrand.title": "Panel de Control",
        "app.components.LeftMenu.navbrand.workplace": "Espacio de Trabajo",
        "global.home": "CMS Strapi CJI",
        "HomePage.head.title": "CMS Strapi CJI",
        "HomePage.header.title": "Hola {name}",
        "HomePage.header.subtitle": "Bienvenido a tu panel de administración",
        "app.components.HomePage.welcomeMessage":
          "Esperamos que estés progresando en tu proyecto. Siéntete libre de leer las últimas {news} sobre Strapi. Todavía estamos actualizando esta página, así que mantente atento a {updates}.",
        "app.components.HomePage.newsMessage": "noticias",
        "app.components.HomePage.updateLinksMessage": "actualizaciones",
        "Auth.form.welcome.title": "Bienvenido al Panel de Administración",
        "Auth.form.welcome.subtitle": "Ingresa a tu cuenta",
        "Auth.form.button.login": "Iniciar Sesión",
        "Auth.form.button.register": "Registrarse",
        "app.components.Button.save": "Guardar",
        "app.components.Button.cancel": "Cancelar",
        "global.save": "Guardar",
        "global.cancel": "Cancelar",
        "global.delete": "Eliminar",
        "global.edit": "Editar",
        "global.search": "Buscar",
        "global.filter": "Filtrar",
        "global.settings": "Configuración",
        "global.profile": "Perfil",
        "global.logout": "Cerrar Sesión",
        "global.details": "Detalles",
        "global.description": "Descripción",
        "global.back": "Volver",
        "global.continue": "Continuar",
        "global.create": "Crear",
        "global.actions": "Acciones",
        "content-manager.plugin.name": "Gestor de Contenido",
        "app.components.LeftMenuLinkContainer.content-manager":
          "Gestor de Contenido",
        "content-manager.containers.Home.introduction":
          "Para editar tus entradas, ve a la sección de Tipos de Contenido. Esta página aún está en desarrollo y recibirá mejoras pronto.",
        "content-manager.containers.Edit.submit": "Guardar",
        "content-manager.containers.Edit.delete": "Eliminar",
        "content-manager.Header.title": "Contenido",
        "content-manager.containers.Home.lastEditedEntries":
          "Últimas entradas editadas",
        "content-manager.containers.Home.lastPublishedEntries":
          "Últimas entradas publicadas",
        "components.FilterOptions.FILTER_TYPES.$contains": "contiene",
        "components.FilterOptions.FILTER_TYPES.$eq": "es",
        "components.FilterOptions.FILTER_TYPES.$ne": "no es",
        "content-manager.content-types.api::author.author.name": "Nombre",
        "content-manager.content-types.api::author.author.avatar": "Avatar",
        "content-manager.content-types.api::author.author.email":
          "Correo electrónico",
        "content-manager.content-types.api::author.author.noticias": "Noticias",
        "content-manager.content-types.api::author.author.juridico": "Jurídico",
        "content-manager.content-types.api::author.author.cargo": "Cargo",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);

    // Inject Custom CSS to force specific purple SVGs to green
    const style = document.createElement("style");
    style.innerHTML = `
      /* Smart Override: Use filters to preserve tonality (light/dark shades) */
      /* Targeted via clip-path for stability (suggested by user) */
      /* This finds the specific 'EmptyDocuments' SVG group */
      g[clip-path*="#EmptyDocuments_svg"],
      g[clip-path*="EmptyDocuments_svg"] {
         filter: hue-rotate(-100deg) brightness(1) saturate(1) !important;
      }
      
      /* Loader Overrides */
      .sc-cpclqO.gZkAES {
        border-color: #008236 transparent #008236 transparent !important; /* Green spinner */
        border-top-color: #008236 !important;
        border-bottom-color: #008236 !important;
        stroke: #008236 !important;
        fill: #008236 !important;
      }

      /* Keep the Hex override as a global backup for simple icons */
      [stroke="#4945ff"], [fill="#4945ff"],
      [stroke="#271fe0"], [fill="#271fe0"] {
        stroke: #008236 !important;
        fill: #008236 !important;
      }
    `;
    document.head.appendChild(style);

    // Center "Bienvenido" text specifically on Login screen
    // Performance Optimized: Only runs on auth pages, checks headers only
    const observer = new MutationObserver(() => {
      // 1. Optimization: Only run on auth pages
      if (!window.location.href.includes("/auth/")) return;

      const targetText = "Bienvenido al Panel de Administración";
      // 2. Optimization: Restrict scan to Headers (H1/H2) only
      const candidates = document.querySelectorAll("h1, h2");

      candidates.forEach((el) => {
        if (
          el instanceof HTMLElement &&
          el.innerText.trim() === targetText &&
          el.style.textAlign !== "center" // 3. Optimization: Avoid redundant DOM writes
        ) {
          el.style.textAlign = "center";
          el.style.display = "block";
          el.style.width = "100%";
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  },
};
