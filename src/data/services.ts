export type ServiceIcon =
  | "building2"
  | "crosshair"
  | "packageCheck"
  | "printer"
  | "scanLine"
  | "shirt"
  | "truck";

export type ServiceCategory = "produccion" | "branding" | "espacios" | "instalacion";

export interface Service {
  slug: string;
  icon: ServiceIcon;
  title: string;
  shortText: string;
  description: string;
  image: string;
  position: string;
  categories: ServiceCategory[];
  eyebrow: string;
  summary: string;
  features: string[];
  uses: string[];
}

export const services: Service[] = [
  {
    slug: "impresion-gran-formato",
    icon: "printer",
    title: "Impresion de Gran Formato",
    shortText: "Graficas de gran impacto para exterior e interior con la mas alta calidad.",
    description:
      "Producimos piezas visuales de gran formato para fachadas, interiores, campanas comerciales, vitrinas y espacios de alto trafico, cuidando color, resistencia y acabado.",
    image: "/images/solution_section1.webp",
    position: "58% center",
    categories: ["produccion"],
    eyebrow: "Produccion visual de alto impacto",
    summary:
      "Soluciones pensadas para que tu marca gane presencia en grandes superficies, con materiales adecuados para cada ambiente y una ejecucion precisa.",
    features: [
      "Impresion para interior y exterior",
      "Materiales rigidos y flexibles",
      "Acabados resistentes y de alta definicion",
      "Produccion para campanas y puntos de venta",
    ],
    uses: ["Vallas", "Murales", "Pendones", "Vinilos", "Backings", "Fachadas comerciales"],
  },
  {
    slug: "impresion-uv",
    icon: "scanLine",
    title: "Impresion UV",
    shortText: "Impresion directa sobre multiples superficies con acabados premium y gran durabilidad.",
    description:
      "Aplicamos impresion UV para piezas con detalle, color intenso y excelente adherencia sobre materiales rigidos, ideal para productos, senaletica y displays.",
    image: "/images/solution_section2.webp",
    position: "46% center",
    categories: ["produccion"],
    eyebrow: "Acabados premium sobre multiples superficies",
    summary:
      "Una solucion versatil para producir piezas limpias, resistentes y listas para elevar la percepcion visual de tu marca.",
    features: [
      "Impresion directa sobre materiales rigidos",
      "Alta definicion y secado inmediato",
      "Acabados durables para piezas comerciales",
      "Ideal para producciones personalizadas",
    ],
    uses: ["Acrilico", "PVC", "MDF", "Metal", "Displays", "Senaletica corporativa"],
  },
  {
    slug: "corte-laser-troquelado",
    icon: "crosshair",
    title: "Corte Laser y Troquelado",
    shortText: "Cortes precisos y detalles perfectos en una amplia variedad de materiales.",
    description:
      "Creamos piezas con cortes limpios, formas especiales y acabados detallados para comunicacion visual, exhibicion y mobiliario comercial.",
    image: "/images/corte_laser.webp",
    position: "50% center",
    categories: ["produccion"],
    eyebrow: "Precision para piezas con detalle",
    summary:
      "Corte, forma y acabado trabajan juntos para materializar ideas que necesitan exactitud, consistencia y un resultado profesional.",
    features: [
      "Cortes precisos y formas especiales",
      "Troquelado para piezas seriadas",
      "Acabados limpios en diferentes materiales",
      "Integracion con impresion y armado",
    ],
    uses: ["Letras", "Senales", "Displays", "Piezas acrilicas", "Plantillas", "Elementos decorativos"],
  },
  {
    slug: "branding-corporativo-vehicular",
    icon: "truck",
    title: "Branding Corporativo y Vehicular",
    shortText: "Disenamos, producimos y aplicamos la identidad de tu marca en cualquier superficie.",
    description:
      "Llevamos la identidad visual de tu empresa a vehiculos, oficinas, sedes comerciales y espacios de marca con aplicacion profesional.",
    image: "/images/branding_corp_vehi.webp",
    position: "100% center",
    categories: ["branding", "instalacion"],
    eyebrow: "Identidad visible en cada punto de contacto",
    summary:
      "Convertimos superficies en activos de comunicacion para que tu marca sea reconocible, consistente y memorable.",
    features: [
      "Branding vehicular parcial o completo",
      "Aplicacion de vinilos y graficas corporativas",
      "Produccion de piezas de identidad visual",
      "Instalacion con acabados profesionales",
    ],
    uses: ["Vehiculos", "Oficinas", "Locales", "Vitrinas", "Muros", "Puntos comerciales"],
  },
  {
    slug: "senalizacion-industrial-comercial",
    icon: "scanLine",
    title: "Senalizacion Industrial y Comercial",
    shortText: "Senales que comunican, orientan y fortalecen tu presencia de marca.",
    description:
      "Disenamos y producimos sistemas de senalizacion funcionales, claros y alineados con la identidad de cada espacio.",
    image: "/images/senalizacion_in_comer.webp",
    position: "42% center",
    categories: ["branding", "espacios", "instalacion"],
    eyebrow: "Orientacion clara con presencia de marca",
    summary:
      "Senales, directorios y marcaciones que ordenan el espacio, mejoran la experiencia y comunican con precision.",
    features: [
      "Senalizacion interna y externa",
      "Directorios y sistemas de orientacion",
      "Marcacion industrial y preventiva",
      "Materiales segun uso y exposicion",
    ],
    uses: ["Empresas", "Plantas", "Bodegas", "Locales", "Edificios", "Zonas de seguridad"],
  },
  {
    slug: "stands-mobiliario-comercial",
    icon: "building2",
    title: "Stands y Mobiliario Comercial",
    shortText: "Disenamos y fabricamos espacios que generan experiencias y atraen miradas.",
    description:
      "Desarrollamos stands, exhibidores y mobiliario comercial que ayudan a presentar productos, contar historias y activar marcas.",
    image: "/images/stands_inm_com.webp",
    position: "68% center",
    categories: ["espacios"],
    eyebrow: "Espacios comerciales que conectan",
    summary:
      "Unimos diseno, produccion e instalacion para crear experiencias fisicas funcionales, atractivas y listas para vender.",
    features: [
      "Diseno y fabricacion de stands",
      "Mobiliario para puntos de venta",
      "Exhibidores y modulos comerciales",
      "Produccion e instalacion integral",
    ],
    uses: ["Ferias", "Eventos", "Retail", "Showrooms", "Islas comerciales", "Exhibidores de producto"],
  },
  {
    slug: "merchandising",
    icon: "shirt",
    title: "Merchandising",
    shortText: "Articulos promocionales que conectan tu marca con las personas.",
    description:
      "Creamos piezas promocionales utiles, memorables y alineadas con tu identidad para fortalecer recordacion y cercania con tu audiencia.",
    image: "/images/merchandesing.webp",
    position: "76% center",
    categories: ["branding"],
    eyebrow: "Recordacion de marca en objetos utiles",
    summary:
      "Merchandising pensado como extension de marca, no como relleno: piezas coherentes, bien producidas y listas para activar relaciones.",
    features: [
      "Personalizacion de articulos promocionales",
      "Produccion para activaciones y eventos",
      "Opciones segun objetivo y presupuesto",
      "Acompanamiento en seleccion de piezas",
    ],
    uses: ["Eventos", "Kits corporativos", "Regalos de marca", "Lanzamientos", "Ferias", "Campanas internas"],
  },
  {
    slug: "logistica-instalacion",
    icon: "packageCheck",
    title: "Logistica e Instalacion",
    shortText: "Entregamos e instalamos con precision y seguridad en todo el pais.",
    description:
      "Coordinamos la entrega, montaje e instalacion de tus piezas visuales para asegurar que el resultado final se vea impecable en el lugar correcto.",
    image: "/images/logistica_instalacion.webp",
    position: "92% center",
    categories: ["instalacion"],
    eyebrow: "Ejecucion final sin improvisaciones",
    summary:
      "La instalacion es donde una buena produccion se convierte en una gran experiencia. Cuidamos tiempos, acabados y puesta en escena.",
    features: [
      "Coordinacion de entregas e instalaciones",
      "Montaje profesional de piezas visuales",
      "Acompanamiento en sitio",
      "Control de acabados y cumplimiento",
    ],
    uses: ["Locales", "Oficinas", "Eventos", "Campanas nacionales", "Fachadas", "Puntos de venta"],
  },
];
