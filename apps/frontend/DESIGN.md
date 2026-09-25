---
name: "ComeCore ERP"
description: "Panel administrativo sereno y preciso para la operación diaria de un ISP."
colors:
  signal-blue: "#0B6BDC"
  deep-signal-blue: "#074A9F"
  signal-cyan: "#0CA8CF"
  infrastructure-navy: "#071A3A"
  canvas-cool: "#F5F8FB"
  surface: "#FFFFFF"
  secondary-text: "#536579"
  divider: "#DFE7EF"
typography:
  display:
    fontFamily: '"Avenir Next", Avenir, "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "2.25rem"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  brand:
    fontFamily: '"Avenir Next", Avenir, "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "1.4rem"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Avenir Next", Avenir, "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: '"Avenir Next", Avenir, "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "0.73rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.055em"
  status:
    fontFamily: '"Avenir Next", Avenir, "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "0.77rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.08em"
  micro:
    fontFamily: '"Avenir Next", Avenir, "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "0.67rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
rounded:
  tooltip: "8px"
  nav-icon: "10px"
  control: "11px"
  surface: "14px"
  signature: "20px"
  pill: "999px"
spacing:
  micro: "4px"
  compact: "8px"
  control: "12px"
  standard: "16px"
  roomy: "24px"
  section: "48px"
components:
  utility-control:
    textColor: "{colors.secondary-text}"
    rounded: "{rounded.control}"
    size: "38px"
  sidebar-item-active:
    backgroundColor: "#F1F7FD"
    textColor: "{colors.deep-signal-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.surface}"
    height: "50px"
  status-chip:
    backgroundColor: "#EDF3F8"
    textColor: "{colors.secondary-text}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  signature-tile:
    backgroundColor: "#F1F7FD"
    textColor: "{colors.signal-blue}"
    rounded: "{rounded.signature}"
    size: "74px"
---

# Design System: ComeCore ERP

## Overview

**Creative North Star: "El panel de señal calibrada"**

ComeCore se comporta como un instrumento de operación bien calibrado: blanco, sereno y preciso, con una señal azul que orienta sin competir con el trabajo. La identidad nace del ritmo de navegación, la línea de conectividad y los pequeños estados técnicos, no de una acumulación de tarjetas decorativas.

La composición mantiene baja fatiga visual durante jornadas extensas. Los acentos se reservan para ubicación, foco y estado; las superficies permanecen limpias, y la infraestructura se sugiere mediante geometría fina, nodos y proporciones controladas.

**Key Characteristics:**

- Predominio de blanco y neutros fríos.
- Azul y cian usados como señales funcionales, no como relleno dominante.
- Jerarquía clara entre marca global, módulos laterales y contenido.
- Geometría amable, precisa y sin ornamento superfluo.
- Movimiento lento y sutil con alternativa para movimiento reducido.

## Colors

La paleta combina un lienzo frío casi blanco con un azul técnico, un cian de conectividad y un azul marino de infraestructura.

### Primary

- **Azul de Señal:** dirige estados activos, foco, iconografía principal y el acento de la marca.
- **Azul de Señal Profundo:** aporta contraste en texto activo y acciones de alta legibilidad.

### Secondary

- **Cian de Enlace:** aparece en nodos, recorridos y microseñales asociadas con conectividad.

### Neutral

- **Azul Marino de Infraestructura:** texto principal y ancla visual de la identidad.
- **Lienzo Frío:** fondo general que separa discretamente el área de trabajo de las superficies blancas.
- **Superficie Blanca:** navbar, navegación y planos principales.
- **Texto Secundario:** etiquetas auxiliares y estados de menor jerarquía.
- **Divisor Técnico:** bordes finos que estructuran sin crear cajas pesadas.

**The Sparse Signal Rule.** El azul y el cian señalan posición, acción o conectividad; nunca deben teñir grandes áreas de la interfaz.

## Typography

**Display Font:** Avenir Next, con Segoe UI y sans-serif de sistema como respaldo.
**Body Font:** Avenir Next, con Segoe UI y sans-serif de sistema como respaldo.

**Character:** Una sola familia sans serif geométrica mantiene continuidad entre marca y producto. El contraste depende de peso, escala, espaciado y mayúsculas controladas, no de mezclar familias.

### Hierarchy

- **Display:** títulos de módulo compactos, seminegrita y con tracking cerrado; baja a 1.75rem en pantallas pequeñas.
- **Brand:** nombre ComeCore compacto y seminegrita, con el segmento Core destacado por color.
- **Body:** texto funcional de lectura continua con densidad moderada.
- **Label:** navegación y estados en mayúsculas, con tracking abierto y peso medio-alto.

**The Calm Caps Rule.** Las mayúsculas se limitan a rótulos breves; nunca se usan para párrafos o mensajes extensos.

## Layout

La interfaz utiliza tres estratos: navbar global de 76px, sidebar de módulos y contenido flexible. En desktop y laptop, la sidebar mide 244px expandida y 76px colapsada; conserva iconos, estado activo y tooltips, mientras el contenido se reajusta en una transición breve de 210ms.

En tablet horizontal se mantiene la navegación colapsable para proteger el espacio de trabajo. Debajo de 900px, la navbar reduce su altura a 68px, oculta utilidades secundarias y abre la navegación como drawer temporal. El documento nunca genera desplazamiento horizontal global y el drawer se cierra al seleccionar un módulo.

**The Three-Layer Rule.** Navbar global, sidebar de módulos y contenido deben seguir siendo planos visualmente distintos aunque compartan el mismo fondo claro.

## Elevation & Depth

El sistema es plano por defecto. La profundidad se construye con cambios tonales, bordes de un píxel y separación espacial; las sombras quedan reservadas al medallón del placeholder y al drawer móvil cuando debe separarse del contenido.

### Shadow Vocabulary

- **Señal Ambiental** (`0 14px 30px rgba(7, 45, 91, 0.08)`): reservada para el núcleo visual de un estado vacío o un punto focal equivalente.
- **Drawer Lateral** (`12px 0 36px rgba(7, 26, 58, 0.12)`): separación estructural del panel temporal sobre contenido móvil.

**The Flat-by-Default Rule.** Una superficie en reposo no necesita sombra; debe justificarse por jerarquía o estado.

## Shapes

Los controles compactos usan esquinas suavemente redondeadas; las superficies siguen el radio base de 14px y los elementos distintivos pueden llegar a 20px. Los indicadores de estado son píldoras completas. Círculos, trayectorias finas y nodos refuerzan la idea de señal sin ilustraciones literales de red.

## Components

### Utility Controls

- **Shape:** botón cuadrado compacto con esquinas suaves y área de 38px.
- **Default:** icono neutral sobre superficie transparente.
- **Hover / Focus:** tinte azul muy claro, icono azul y anillo de foco exterior visible.
- **Behavior:** sin ripple; tooltip tardío para explicar acciones todavía no disponibles.

### Status Chips

- **Style:** píldora neutral con punto cian, etiqueta breve en mayúsculas y tracking abierto.
- **State:** informa disponibilidad sin parecer una acción interactiva.

### Sidebar Navigation

- **Style:** siete módulos verticales con icono lineal, etiqueta consistente y densidad ligera.
- **Default:** texto secundario y fondo transparente.
- **Hover:** fondo apenas tonal y borde prácticamente imperceptible.
- **Active:** superficie azul muy clara, icono sobre cápsula tonal, texto profundo y nodo cian discreto.
- **Expanded / Collapsed:** muestra icono y nombre a 244px; conserva iconos y tooltips a 76px. La preferencia se guarda localmente.
- **Responsive:** debajo de 900px se convierte en drawer con backdrop sobrio y control de cierre explícito.

### Signal Placeholder

Es la firma de los módulos aún no disponibles: un medallón central con icono oficial de MUI, trayectoria cian, nodos azules, título del módulo y estado “Próximamente”. Comunica estructura sin simular datos ni funcionalidad inexistente.

### Brand Signal

Una trayectoria SVG punteada atraviesa sutilmente el bloque de marca. Sus nodos y movimiento lento representan flujo e infraestructura; nunca debe interferir con la lectura del logo ni convertirse en una ilustración protagonista. La navbar utiliza la composición completa y la cabecera expandida de la sidebar reutiliza una variante compacta del mismo componente.

## Do's and Don'ts

### Do:

- **Do** mantener el blanco como superficie dominante y reservar el acento para orientación y estado.
- **Do** conservar exactamente una familia de iconos lineales de MUI en la navegación principal.
- **Do** sostener áreas táctiles claras, foco visible y soporte para movimiento reducido.
- **Do** adaptar la densidad ocultando elementos secundarios antes de reducir legibilidad.

### Don't:

- **Don't** convertir la sidebar en un template genérico con secciones inventadas, badges o accesos no solicitados.
- **Don't** usar gradientes, colores saturados o sombras pesadas para fabricar jerarquía.
- **Don't** presentar datos, acciones, badges o controles que sugieran funcionalidad todavía inexistente.
- **Don't** añadir módulos fuera de Clientes, Contratos, Planes, Facturación, Inventario, Servidores y Nodos durante esta etapa.
