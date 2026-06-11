// Objetos de los productos precargados

const productos = [
  {
    nombre: "Sony Alpha A7 IV",
    descripcion:
      "Cámara mirrorless full frame de 33MP con enfoque automático avanzado, ideal para fotografía profesional y video 4K.",
    precio: 1898,
    categoria: "Camaras",
    marca: "Sony",
    destacado: true,
    descuento: false,
    imagenes: [
      "imgs/sony-a7/sony-a7-1.webp",
      "imgs/sony-a7/sony-a7-2.webp",
      "imgs/sony-a7/sony-a7-3.webp",
      "imgs/sony-a7/sony-a7-4.webp",
      "imgs/sony-a7/sony-a7-5.webp",
    ],
  },
  {
    nombre: "Canon EOS R50",
    descripcion:
      "Cámara mirrorless compacta de 24.2MP perfecta para principiantes y creadores de contenido.",
    precio: 850,
    categoria: "Camaras",
    marca: "Canon",
    destacado: true,
    descuento: true,
    imagenes: [
      "imgs/canon-r50/canon-r50-1.webp",
      "imgs/canon-r50/canon-r50-2.webp",
      "imgs/canon-r50/canon-r50-3.webp",
      "imgs/canon-r50/canon-r50-4.webp",
      "imgs/canon-r50/canon-r50-5.webp",
    ],
  },
  {
    nombre: "Nikon Z5 II",
    descripcion:
      "Cámara full frame de entrada con 24.5MP, estabilización en 5 ejes y grabación 4K.",
    precio: 1399,
    categoria: "Camaras",
    marca: "Nikon",
    destacado: false,
    descuento: true,
    imagenes: [
      "imgs/nikon-z5-mk2/nikon-z5-1.webp",
      "imgs/nikon-z5-mk2/nikon-z5-2.webp",
      "imgs/nikon-z5-mk2/nikon-z5-3.webp",
      "imgs/nikon-z5-mk2/nikon-z5-4.webp",
    ],
  },
  {
    nombre: "Sony FE 50mm f/1.8",
    descripcion:
      "Lente estándar compacto y liviano con apertura f/1.8, ideal para retratos y uso cotidiano.",
    precio: 249,
    categoria: "Lentes",
    marca: "Sony",
    destacado: false,
    descuento: false,
    imagenes: [
      "imgs/sony-fe-50/sony-fe-1.webp",
      "imgs/sony-fe-50/sony-fe-2.webp",
      "imgs/sony-fe-50/sony-fe-3.webp",
    ],
  },
  {
    nombre: "Canon RF 85mm f/1.2L",
    descripcion:
      "Lente telephoto profesional para retratos con bokeh excepcional y construcción resistente al polvo.",
    precio: 2799,
    categoria: "Lentes",
    marca: "Canon",
    destacado: true,
    descuento: true,
    imagenes: [
      "imgs/canon-rf-85/canon-rf-1.webp",
      "imgs/canon-rf-85/canon-rf-2.webp",
      "imgs/canon-rf-85/canon-rf-3.webp",
      "imgs/canon-rf-85/canon-rf-4.webp",
    ],
  },
  {
    nombre: "Sigma 24-70mm f/2.8 DG DN",
    descripcion:
      "Lente zoom estándar de apertura constante f/2.8, versátil para eventos y bodas.",
    precio: 1099,
    categoria: "Lentes",
    marca: "Sigma",
    destacado: false,
    descuento: true,
    imagenes: [
      "imgs/sony-24-70/sony-24-70-1.webp",
      "imgs/sony-24-70/sony-24-70-2.webp",
      "imgs/sony-24-70/sony-24-70-3.webp",
    ],
  },
  {
    nombre: "Manfrotto MT055CXPRO3",
    descripcion:
      "Trípode profesional de fibra de carbono con columna central horizontal y carga máxima de 9kg.",
    precio: 599,
    categoria: "Tripodes",
    marca: "Manfrotto",
    destacado: false,
    descuento: false,
    imagenes: [
      "imgs/tripode-manfrotto/manfrotto-1.webp",
      "imgs/tripode-manfrotto/manfrotto-2.webp",
      "imgs/tripode-manfrotto/manfrotto-3.webp",
      "imgs/tripode-manfrotto/manfrotto-4.webp",
      "imgs/tripode-manfrotto/manfrotto-5.webp",
    ],
  },
  {
    nombre: "Joby GorillaPod 3K",
    descripcion:
      "Trípode flexible con patas articuladas, ideal para viajes y fotografía en exteriores.",
    precio: 89,
    categoria: "Tripodes",
    marca: "Joby",
    destacado: false,
    descuento: false,
    imagenes: [
      "imgs/joby-gorillapod/joby-gorillapod-1.webp",
      "imgs/joby-gorillapod/joby-gorillapod-2.webp",
      "imgs/joby-gorillapod/joby-gorillapod-3.webp",
      "imgs/joby-gorillapod/joby-gorillapod-4.webp",
      "imgs/joby-gorillapod/joby-gorillapod-5.webp",
    ],
  },
  {
    nombre: "Godox V860III",
    descripcion:
      "Flash externo inalámbrico TTL con batería de litio recargable y guía numérica 60.",
    precio: 189,
    categoria: "Flashes",
    marca: "Godox",
    destacado: true,
    descuento: true,
    imagenes: [
      "imgs/flash-godox/flash-godox-1.webp",
      "imgs/flash-godox/flash-godox-2.webp",
      "imgs/flash-godox/flash-godox-3.webp",
      "imgs/flash-godox/flash-godox-4.webp",
      "imgs/flash-godox/flash-godox-5.webp",
    ],
  },
  {
    nombre: "Profoto A10",
    descripcion:
      "Flash compacto profesional con conectividad Bluetooth y tecnología AirX integrada.",
    precio: 899,
    categoria: "Flashes",
    marca: "Profoto",
    destacado: false,
    descuento: true,
    imagenes: [
      "imgs/flash-profoto/flash-profoto-1.webp",
      "imgs/flash-profoto/flash-profoto-2.webp",
      "imgs/flash-profoto/flash-profoto-3.webp",
      "imgs/flash-profoto/flash-profoto-4.webp",
      "imgs/flash-profoto/flash-profoto-5.webp",
    ],
  },
  {
    nombre: "Sony FE 24mm f/1.4 GM",
    descripcion:
      "Lente gran angular de la línea G Master con apertura f/1.4, ideal para paisajes, arquitectura y fotografía nocturna con bokeh suave.",
    precio: 1399,
    categoria: "Lentes",
    marca: "Sony",
    destacado: false,
    descuento: true,
    imagenes: [
      "imgs/sony-24/sony-24-1.webp",
      "imgs/sony-24/sony-24-2.webp",
      "imgs/sony-24/sony-24-3.webp",
      "imgs/sony-24/sony-24-4.webp",
    ],
  },
  {
    nombre: "Fujifilm X-T5",
    descripcion:
      "Cámara mirrorless APS-C de 40MP con sensor de última generación, estabilización en 7 ejes y diseño retro compacto.",
    precio: 1699,
    categoria: "Camaras",
    marca: "Fujifilm",
    destacado: true,
    descuento: false,
    imagenes: [
      "imgs/fuji-xt5/fuji-xt5-1.webp",
      "imgs/fuji-xt5/fuji-xt5-2.webp",
      "imgs/fuji-xt5/fuji-xt5-3.webp",
      "imgs/fuji-xt5/fuji-xt5-4.webp",
      "imgs/fuji-xt5/fuji-xt5-5.webp",
    ],
  },
  {
    nombre: "DJI RS 3 Mini",
    descripcion:
      "Gimbal profesional de 3 ejes para cámaras DSLR y mirrorless de hasta 4.5kg, con pantalla táctil y estabilización automática.",
    precio: 749,
    categoria: "Gimbals",
    marca: "DJI",
    destacado: true,
    descuento: true,
    imagenes: [
      "imgs/ronin-rs3-mini/ronin-rs3-mini-1.webp",
      "imgs/ronin-rs3-mini/ronin-rs3-mini-2.webp",
      "imgs/ronin-rs3-mini/ronin-rs3-mini-3.webp",
      "imgs/ronin-rs3-mini/ronin-rs3-mini-4.webp",
    ],
  },
  {
    nombre: "Godox SL-60W",
    descripcion:
      "Flash de estudio LED de luz continua con 60W de potencia, control remoto inalámbrico y temperatura de color de 5600K.",
    precio: 149,
    categoria: "Flashes",
    marca: "Godox",
    destacado: false,
    descuento: true,
    imagenes: [
      "imgs/godox-sl60/godox-sl60-1.webp",
      "imgs/godox-sl60/godox-sl60-2.webp",
      "imgs/godox-sl60/godox-sl60-3.webp",
    ],
  },
  {
    nombre: "Canon EOS R6 Mark III",
    descripcion:
      "Cámara mirrorless full frame de 24.2MP con ráfaga de 40fps, enfoque automático de sujetos y grabación 4K 60fps sin recorte.",
    precio: 2499,
    categoria: "Camaras",
    marca: "Canon",
    destacado: true,
    descuento: true,
    imagenes: [
      "imgs/canon-r6-mk3/canon-r6-mk3-1.webp",
      "imgs/canon-r6-mk3/canon-r6-mk3-2.webp",
      "imgs/canon-r6-mk3/canon-r6-mk3-3.webp",
      "imgs/canon-r6-mk3/canon-r6-mk3-4.webp",
      "imgs/canon-r6-mk3/canon-r6-mk3-5.webp",
    ],
  },
  {
    nombre: "Zhiyun Crane M3",
    descripcion:
      "Gimbal compacto y liviano para cámaras mirrorless y smartphones, con luz LED integrada y autonomía de 8 horas.",
    precio: 299,
    categoria: "Gimbals",
    marca: "Zhiyun",
    destacado: false,
    descuento: false,
    imagenes: [
      "imgs/zhiyun-m3/zhiyun-m3-1.webp",
      "imgs/zhiyun-m3/zhiyun-m3-2.webp",
      "imgs/zhiyun-m3/zhiyun-m3-3.webp",
      "imgs/zhiyun-m3/zhiyun-m3-4.webp",
      "imgs/zhiyun-m3/zhiyun-m3-5.webp",
    ],
  },
  {
    nombre: "Nikon Z 50mm f/1.2 S",
    descripcion:
      "Lente estándar de la línea S con apertura f/1.2, construcción premium sellada contra polvo y humedad, bokeh cinematográfico.",
    precio: 2099,
    categoria: "Lentes",
    marca: "Nikon",
    destacado: false,
    descuento: true,
    imagenes: [
      "imgs/nikkor-z50/nikkor-z50-.webp",
      "imgs/nikkor-z50/nikkor-z50-1.webp",
      "imgs/nikkor-z50/nikkor-z50-2.webp",
      "imgs/nikkor-z50/nikkor-z50-3.webp",
    ],
  },
  {
    nombre: "Profoto B20",
    descripcion:
      "Flash portátil de estudio con 40W de potencia, batería integrada de larga duración y compatible con todos los modificadores Profoto.",
    precio: 1899,
    categoria: "Flashes",
    marca: "Profoto",
    destacado: true,
    descuento: false,
    imagenes: [
      "imgs/profoto-b20/profoto-b20-1.webp",
      "imgs/profoto-b20/profoto-b20-2.webp",
      "imgs/profoto-b20/profoto-b20-3.webp",
      "imgs/profoto-b20/profoto-b20-4.webp",
      "imgs/profoto-b20/profoto-b20-5.webp",
    ],
  },
  {
    nombre: "Sony ZV-E10 II",
    descripcion:
      "Cámara mirrorless APS-C diseñada para creadores de contenido, con micrófono integrado direccional y pantalla abatible de 180°.",
    precio: 749,
    categoria: "Camaras",
    marca: "Sony",
    destacado: false,
    descuento: false,
    imagenes: [
      "imgs/sony-zve10/sony-zve10-1.webp",
      "imgs/sony-zve10/sony-zve10-2.webp",
      "imgs/sony-zve10/sony-zve10-3.webp",
      "imgs/sony-zve10/sony-zve10-4.webp",
    ],
  },
  {
    nombre: "DJI OM 6",
    descripcion:
      "Gimbal para smartphones con estabilización de 3 ejes, seguimiento de sujetos con IA y diseño plegable ultracompacto.",
    precio: 159,
    categoria: "Gimbals",
    marca: "DJI",
    destacado: false,
    descuento: true,
    imagenes: [
      "imgs/dji-osmo-6/dji-osmo-6-1.webp",
      "imgs/dji-osmo-6/dji-osmo-6-2.webp",
      "imgs/dji-osmo-6/dji-osmo-6-3.webp",
      "imgs/dji-osmo-6/dji-osmo-6-4.webp",
      "imgs/dji-osmo-6/dji-osmo-6-5.webp",
    ],
  },
];

// Asigna el id incremental a cada producto
for (let i = 0; i < productos.length; i++) {
  productos[i].id = i + 1;
}

const marcas = [
  "Sony",
  "Canon",
  "Nikon",
  "DJI",
  "Godox",
  "Sigma",
  "Fujifilm",
  "Manfrotto",
  "Profoto",
  "Zhiyun",
  "Joby",
];
