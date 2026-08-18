/* ============================================================
   ICONO DE BANDERA DEL PERÚ (SVG en vez de emoji 🇵🇪)
   Windows/Chrome no siempre soportan el emoji de bandera y lo
   muestran como las letras sueltas "PE" en vez de la bandera.
   Por eso usamos un SVG propio, igual de simple pero confiable.
   ============================================================ */
const PERU_FLAG_SVG = `<svg class="flag-icon" viewBox="0 0 3 2" preserveAspectRatio="none" aria-hidden="true"><rect width="1" height="2" x="0" fill="#D91023"/><rect width="1" height="2" x="1" fill="#FFFFFF"/><rect width="1" height="2" x="2" fill="#D91023"/></svg>`;

/* ============================================================
   MASCOTA: ajolote rosado kawaii (Efecto "Cara" / humanización).
   Un personaje fijo transforma la app en un tutor con quien el
   niño se vincula emocionalmente entre pantallas, en vez de ser
   solo emoji sueltos sin continuidad (ver skill generador-app-estudio).

   Estilo "sticker" (referencia gráfica del usuario): contorno
   grueso color tinta + rellenos planos + un brillo suave en la
   cabeza, en vez de las formas sin contorno de la versión anterior.
   Se arma por partes reutilizables (branquias, cuerpo, brazos,
   cara) para que las 6 variantes de expresión luzcan como el MISMO
   personaje en toda la app -inicio, "Prepárate", retroalimentación
   y resultado- en vez de dibujos sueltos sin relación entre sí.
   ============================================================ */
const AX = {
  ink:   '#2B2250',   // contorno tinta (mismo tono en todo el personaje)
  body:  '#FFD6EE',   // rosado principal
  fin:   '#EC5590',   // branquias y cola (magenta)
  blush: '#FF9DC9',   // mejillas
};

const AX_GILLS_LEFT = `<g>
  <ellipse cx="46" cy="92" rx="11" ry="19" fill="${AX.fin}" stroke="${AX.ink}" stroke-width="4.5" transform="rotate(-25 46 92)"/>
  <ellipse cx="36" cy="116" rx="11" ry="19" fill="${AX.fin}" stroke="${AX.ink}" stroke-width="4.5" transform="rotate(-4 36 116)"/>
  <ellipse cx="42" cy="142" rx="11" ry="18" fill="${AX.fin}" stroke="${AX.ink}" stroke-width="4.5" transform="rotate(20 42 142)"/>
</g>`;
const AX_GILLS_RIGHT = `<g>
  <ellipse cx="194" cy="92" rx="11" ry="19" fill="${AX.fin}" stroke="${AX.ink}" stroke-width="4.5" transform="rotate(25 194 92)"/>
  <ellipse cx="204" cy="116" rx="11" ry="19" fill="${AX.fin}" stroke="${AX.ink}" stroke-width="4.5" transform="rotate(4 204 116)"/>
  <ellipse cx="198" cy="142" rx="11" ry="18" fill="${AX.fin}" stroke="${AX.ink}" stroke-width="4.5" transform="rotate(-20 198 142)"/>
</g>`;
const AX_HEAD = `
  <circle cx="120" cy="122" r="80" fill="${AX.body}" stroke="${AX.ink}" stroke-width="5.5"/>
  <ellipse cx="90" cy="86" rx="26" ry="16" fill="#fff" opacity="0.35" transform="rotate(-25 90 86)"/>`;
const AX_CHEEKS = `
  <ellipse cx="72" cy="140" rx="14" ry="9" fill="${AX.blush}" opacity="0.8"/>
  <ellipse cx="168" cy="140" rx="14" ry="9" fill="${AX.blush}" opacity="0.8"/>`;
const AX_TAIL_LEGS = `
  <path d="M58,188 C40,196 26,212 22,228 C40,224 58,212 68,196 Z" fill="${AX.fin}" stroke="${AX.ink}" stroke-width="5" stroke-linejoin="round"/>
  <ellipse cx="96" cy="214" rx="16" ry="11" fill="${AX.body}" stroke="${AX.ink}" stroke-width="5"/>
  <ellipse cx="150" cy="214" rx="16" ry="11" fill="${AX.body}" stroke="${AX.ink}" stroke-width="5"/>
  <ellipse cx="123" cy="198" rx="52" ry="28" fill="${AX.body}" stroke="${AX.ink}" stroke-width="5"/>`;

/* Brazos: 3 variantes reutilizadas entre poses. */
const AX_ARMS_IDLE = `
  <ellipse cx="66" cy="176" rx="12" ry="18" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5" transform="rotate(18 66 176)"/>
  <ellipse cx="180" cy="176" rx="12" ry="18" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5" transform="rotate(-18 180 176)"/>`;
const AX_ARMS_WAVE = `
  <ellipse cx="66" cy="176" rx="12" ry="18" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5" transform="rotate(18 66 176)"/>
  <path d="M170,150 C185,120 190,90 178,66 C192,86 200,116 190,146 Z" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5" stroke-linejoin="round"/>
  <circle cx="180" cy="64" r="15" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5"/>`;
const AX_ARMS_CELEBRATE = `
  <path d="M70,150 C55,120 50,90 62,66 C48,86 40,116 50,146 Z" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5" stroke-linejoin="round"/>
  <circle cx="60" cy="64" r="15" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5"/>
  <path d="M170,150 C185,120 190,90 178,66 C192,86 200,116 190,146 Z" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5" stroke-linejoin="round"/>
  <circle cx="180" cy="64" r="15" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5"/>`;
const AX_ARMS_THINK = `
  <ellipse cx="66" cy="176" rx="12" ry="18" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5" transform="rotate(18 66 176)"/>
  <path d="M150,168 C168,158 178,142 176,126 C186,140 186,160 172,174 Z" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5" stroke-linejoin="round"/>
  <circle cx="172" cy="130" r="13" fill="${AX.body}" stroke="${AX.ink}" stroke-width="4.5"/>`;

/* Caras: expresión abierta (alerta/neutral) y cerrada-feliz (calma o
   celebración), más wink y "pensando" para la retroalimentación. */
const AX_FACE_OPEN_SMILE = `
  <circle cx="98" cy="118" r="9" fill="${AX.ink}"/><circle cx="142" cy="118" r="9" fill="${AX.ink}"/>
  <circle cx="95" cy="115" r="3" fill="#fff"/><circle cx="139" cy="115" r="3" fill="#fff"/>
  <path d="M104,150 Q120,162 136,150" stroke="${AX.ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
const AX_FACE_CLOSED_HAPPY = `
  <path d="M88,116 Q98,104 108,116" stroke="${AX.ink}" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M132,116 Q142,104 152,116" stroke="${AX.ink}" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M104,148 Q112,156 120,148 Q128,156 136,148" stroke="${AX.ink}" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
const AX_FACE_WINK = `
  <path d="M88,116 Q98,104 108,116" stroke="${AX.ink}" stroke-width="5" fill="none" stroke-linecap="round"/>
  <circle cx="142" cy="118" r="9" fill="${AX.ink}"/><circle cx="139" cy="115" r="3" fill="#fff"/>
  <path d="M104,150 Q120,160 136,150" stroke="${AX.ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
const AX_FACE_THINK = `
  <circle cx="98" cy="120" r="8" fill="${AX.ink}"/><circle cx="142" cy="120" r="8" fill="${AX.ink}"/>
  <circle cx="96" cy="118" r="2.5" fill="#fff"/><circle cx="140" cy="118" r="2.5" fill="#fff"/>
  <ellipse cx="120" cy="150" rx="7" ry="5" fill="${AX.ink}"/>`;

const AX_CELEBRATE_SPARKLES = `
  <path d="M20 40 L26 52 L38 54 L26 58 L20 70 L14 58 L2 54 L14 52 Z" fill="#FFD200"/>
  <path d="M215 30 L219 40 L229 42 L219 45 L215 55 L211 45 L201 42 L211 40 Z" fill="#5AD2FF"/>
  <path d="M205 150 L209 160 L219 162 L209 165 L205 175 L201 165 L191 162 L201 160 Z" fill="#3CDCB0"/>`;

/* Arma un ajolote de cuerpo completo a partir de las partes de arriba,
   siempre en el mismo orden de capas (cola/patas → branquias → cabeza
   → brazos → mejillas → cara), para que cualquier combinación de
   brazos/cara se vea consistente sin tener que redibujar todo. */
function axBody({ face, arms, extra }){
  return `<svg class="axolotl" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    ${extra || ''}
    ${AX_TAIL_LEGS}
    ${AX_GILLS_LEFT}
    ${AX_GILLS_RIGHT}
    ${AX_HEAD}
    ${arms}
    ${AX_CHEEKS}
    ${face}
  </svg>`;
}

const AXOLOTL_DEFAULT   = axBody({ face: AX_FACE_OPEN_SMILE,   arms: AX_ARMS_IDLE });
const AXOLOTL_CELEBRATE = axBody({ face: AX_FACE_CLOSED_HAPPY, arms: AX_ARMS_CELEBRATE, extra: AX_CELEBRATE_SPARKLES });
const AXOLOTL_WINK      = axBody({ face: AX_FACE_WINK,         arms: AX_ARMS_IDLE });
const AXOLOTL_THINK     = axBody({ face: AX_FACE_THINK,        arms: AX_ARMS_THINK });
/* Saludando con la mano (pose "Respondo con calma" de la pantalla
   Prepárate) — la misma pose de la imagen de referencia del usuario. */
const AXOLOTL_WAVE      = axBody({ face: AX_FACE_CLOSED_HAPPY, arms: AX_ARMS_WAVE });

/* ============================================================
   CABEZA "QUE HABLA" del ajolote (solo cabeza, sin cuerpo).
   A diferencia de los AXOLOTL_* anteriores (personaje completo
   para reacciones puntuales), esta variante vive junto al texto
   que se lee en voz alta -teoría, preguntas- como un compañero
   que le habla al niño, nunca como un ícono decorativo suelto:
   trae 3 estados de boca (idle/a/b) que se alternan por CSS
   mientras el navegador está leyendo, más un pequeño globo de
   puntos que aparece solo mientras "habla" (ver createTalkingMascot).
   Mismo estilo de contorno que el cuerpo completo, para que sea
   reconociblemente "el mismo" personaje en teoría/preguntas.
   ============================================================ */
const AXOLOTL_TALK_HEAD = `<svg class="axolotl-head" viewBox="25 30 190 190" xmlns="http://www.w3.org/2000/svg">
  ${AX_GILLS_LEFT}
  ${AX_GILLS_RIGHT}
  ${AX_HEAD}
  ${AX_CHEEKS}
  <circle cx="98" cy="122" r="9" fill="${AX.ink}"/><circle cx="142" cy="122" r="9" fill="${AX.ink}"/>
  <circle cx="95" cy="119" r="3" fill="#fff"/><circle cx="139" cy="119" r="3" fill="#fff"/>
  <path class="mouth-idle" d="M104,155 Q120,168 136,155" stroke="${AX.ink}" stroke-width="4" fill="none" stroke-linecap="round"/>
  <ellipse class="mouth-a" cx="120" cy="160" rx="15" ry="13" fill="${AX.ink}"/>
  <ellipse class="mouth-a" cx="120" cy="165" rx="7" ry="5" fill="${AX.fin}"/>
  <ellipse class="mouth-b" cx="120" cy="157" rx="11" ry="6" fill="${AX.ink}"/>
  <g class="talk-bubble">
    <circle cx="182" cy="178" r="5" fill="#fff" stroke="#D9D3EF" stroke-width="2"/>
    <circle cx="197" cy="169" r="4" fill="#fff" stroke="#D9D3EF" stroke-width="2"/>
    <circle cx="208" cy="157" r="3" fill="#fff" stroke="#D9D3EF" stroke-width="2"/>
  </g>
</svg>`;

/* Convierte un <span class="mascot"> vacío en una cabeza que "habla":
   start()/stop() alternan la boca cada 220ms y muestran/ocultan el
   globo de puntos, en vez de dejar la cabeza estática como un ícono. */
function createTalkingMascot(container){
  if(!container) return { start(){}, stop(){} };
  container.innerHTML = AXOLOTL_TALK_HEAD;
  let mouthTimer = null, toggle = false;
  return {
    start(){
      container.classList.add('talking');
      clearInterval(mouthTimer);
      mouthTimer = setInterval(()=>{
        toggle = !toggle;
        container.classList.toggle('speak-a', toggle);
        container.classList.toggle('speak-b', !toggle);
      }, 220);
    },
    stop(){
      clearInterval(mouthTimer); mouthTimer = null;
      container.classList.remove('talking','speak-a','speak-b');
    }
  };
}

/* ============================================================
   BANCO DE CONTENIDO: 4 TEMAS
   Fuente: "¡Exploradores del Mundo Digital!: Mi Guía para ser un
   Ciudadano Digital en el Perú" (adaptación infantil de la
   Política Nacional de Transformación Digital).
   Cada pregunta mcq incluye "hint": una pista concreta y
   específica que se muestra si el niño falla o si se acaba el
   tiempo, en vez de un mensaje genérico.
   ============================================================ */

/* ============================================================
   ETIQUETADO SEMÁNTICO: nombres accesibles para los emoji que
   aparecen SOLOS (sin texto al lado) en botones interactivos —
   por ejemplo los íconos para arrastrar de "match" o para tocar
   de "flexRule"/"order". El nombre describe lo que el dibujo
   MUESTRA (p. ej. "un libro"), nunca la categoría/respuesta a la
   que pertenece, para no revelar la respuesta correcta a quien
   use un lector de pantalla. Los emoji que van acompañados de su
   propio texto (como las opciones de mcq) no lo necesitan: ya
   tienen un nombre accesible a través de ese texto.
   ============================================================ */
const EMOJI_NAMES = {
  '🌉':'un puente', '🌟':'una estrella', '🌱':'un brote de planta', '🎂':'un pastel de cumpleaños',
  '🎓':'un birrete de graduación', '🎨':'una paleta de pintor', '🎫':'un boleto', '🎮':'un control de videojuegos',
  '🎯':'una diana', '🏛️':'un edificio de gobierno', '🏪':'una tienda', '💎':'un diamante',
  '💛':'un corazón amarillo', '💰':'una bolsa de dinero', '📅':'un calendario', '📚':'unos libros',
  '📱':'un celular', '🔄':'dos flechas girando', '🔌':'un enchufe', '🛒':'un carrito de compras',
  '🛡️':'un escudo', '🤖':'un robot', '🤗':'un abrazo', '🦸':'un superhéroe',
  '🏠':'una casa', '🔑':'una llave', '📸':'una cámara de fotos', '😀':'una carita feliz',
};
function emojiLabel(char){ return EMOJI_NAMES[char] || 'un dibujo'; }

const THEMES = [
  {
    id: 'ciudadania-digital',
    title: '¿Qué es la Ciudadanía Digital?',
    emoji: '🎫',
    color: '#FF6B6B',
    theory: [
      '🎫 La Ciudadanía Digital es como un pasaporte mágico para explorar el mundo de internet.',
      '❤️🧠 No es solo usar una tableta: es usar internet con un corazón feliz y una mente fuerte.',
      '🎓 Te ayuda a estudiar, jugar y ayudar a los demás de forma segura.',
      '🌟 Es una herramienta para que brilles y te sientas bien todos los días.',
      `${PERU_FLAG_SVG} En el Perú, este superpoder tiene reglas especiales para cuidarte mientras exploras.`,
    ],
    summary: '🎫 Recuerda: la Ciudadanía Digital es usar internet con un corazón feliz, una mente fuerte, y mucho cuidado.',
    questions: [
      { type:'mcq', prompt:'¿Cómo se llama el "pasaporte mágico" para explorar internet?', visual:'🎫', hint:'Es tu pasaporte para el mundo digital 🎫', options:[
        {text:'Ciudadanía Digital', ok:true}, {text:'Tarjeta de videojuego'}, {text:'Libro mágico'}, {text:'Boleto de avión'} ] },
      { type:'mcq', prompt:'Tener este superpoder es solo usar una tableta?', visual:'📱', hint:'Piensa en el corazón y la mente, no solo el aparato ❤️🧠', options:[
        {text:'Sí, solo usar una tableta'}, {text:'No, es usar internet con un corazón feliz y una mente fuerte', ok:true}, {text:'Es solo para adultos'}, {text:'Es un videojuego'} ] },
      { type:'mcq', prompt:'¿Para qué te ayuda la ciudadanía digital?', visual:'🎓', hint:'Piensa en estudiar, jugar y ayudar 🎓', options:[
        {text:'A estudiar, jugar y ayudar a los demás de forma segura', ok:true}, {text:'A no hacer nada'}, {text:'A esconderte de todos'}, {text:'A romper la computadora'} ] },
      { type:'mcq', prompt:'¿Qué país nos da estas reglas para cuidarnos en internet?', visual: PERU_FLAG_SVG, hint:'Es nuestro país', options:[
        {text:'El Perú', ok:true}, {text:'La Luna'}, {text:'Otro planeta'}, {text:'Ningún país'} ] },
      { type:'mcq', prompt:'La ciudadanía digital es una herramienta para que...', visual:'🌟', hint:'Piensa en sentirte bien y brillar 🌟', options:[
        {text:'Te sientas bien y brilles cada día', ok:true}, {text:'Te sientas triste'}, {text:'Nadie te vea'}, {text:'Te aburras'} ] },
      { type:'mcq', prompt:'¿Cómo debes usar internet según tu "superpoder"?', visual:'🛡️', hint:'Siempre de forma segura 🛡️', options:[
        {text:'De forma segura, cuidando de ti y de los demás', ok:true}, {text:'Sin ningún cuidado'}, {text:'Solo para jugar todo el día'}, {text:'Nunca usarlo'} ] },
      /* Actividad CRA (Concreto → Representativo → Abstracto): en vez
         de explicar "huella digital" solo con texto, primero se
         manipula (clasificar objetos concretos y cotidianos), luego
         se ve una representación visual de lo que eso significa, y
         recién al final se presenta el término abstracto. Ver
         renderCRA() más abajo. */
      { type:'cra', prompt:'Vamos a descubrir un secreto de internet 🔍', visual:'🔍',
        concreteItems:[
          { visual:'🎮', label:'Tu juego favorito', share:true },
          { visual:'🏠', label:'La dirección de tu casa', share:false },
          { visual:'🎨', label:'Un dibujo que hiciste', share:true },
          { visual:'🔑', label:'Tu contraseña secreta', share:false },
          { visual:'📸', label:'Una foto de tu familia', share:false },
          { visual:'😀', label:'Que te gusta reír y jugar', share:true },
        ],
        abstractTerm:'Huella Digital',
        abstractIcon:'👣',
        abstractDef:'Es la marca que dejas cada vez que usas internet. Compartir tus gustos está bien, ¡pero tu información personal se cuida como un tesoro! 💛',
      },
    ],
  },
  {
    id: 'superpoderes-digitales',
    title: 'Mis 8 Superpoderes Digitales',
    emoji: '🦸',
    color: '#7C4DFF',
    theory: [
      '📚 Estudiar y descubrir: usar internet para aprender sobre dinosaurios, el espacio o lo que te dé curiosidad.',
      '🏛️ Pedir ayuda a los líderes: aprender a hablar con quienes cuidan nuestro país o con empresas usando la computadora.',
      '💰 Cuidar mis ahorros: entender cómo funcionan los bancos en la red para proteger el dinero de la familia.',
      '🎨 Compartir mi talento: mostrar al mundo tus dibujos, cuentos o creaciones.',
      '🛒 Conseguir lo que necesito: aprender a comprar cosas útiles de forma segura y con permiso de tus padres.',
      '🎮 Divertirme sanamente: disfrutar juegos y videos que nos hagan reír y nos enseñen cosas buenas.',
      '🤗 Estar cerca de los míos: usar mensajes o videos para dar un abrazo virtual a los abuelitos y amigos.',
      '💎 Encontrar tesoros de verdad: saber buscar información que sea real y valiosa.',
    ],
    summary: '🦸 Recuerda: tienes 8 superpoderes digitales — úsalos para aprender, crear y cuidarte a ti y a los demás.',
    questions: [
      { type:'mcq', prompt:'"Estudiar y descubrir" te ayuda a...', visual:'📚', hint:'Piensa en aprender cosas nuevas 📚', options:[
        {text:'Aprender sobre dinosaurios, el espacio o lo que te dé curiosidad', ok:true}, {text:'Aprender a no hacer nada'}, {text:'Solo ver caricaturas'}, {text:'Romper libros'} ] },
      { type:'mcq', prompt:'"Pedir ayuda a los líderes" significa...', visual:'🏛️', hint:'Piensa en hablar con quienes cuidan el país 🏛️', options:[
        {text:'Hablar con quienes cuidan nuestro país o con empresas usando la computadora', ok:true}, {text:'Nunca pedir ayuda'}, {text:'Solo hablar con amigos'}, {text:'Esconderse de los líderes'} ] },
      { type:'mcq', prompt:'"Cuidar mis ahorros" te enseña a...', visual:'💰', hint:'Piensa en el dinero de la familia 💰', options:[
        {text:'Entender cómo funcionan los bancos para proteger el dinero', ok:true}, {text:'Gastar todo el dinero'}, {text:'Esconder el dinero bajo la cama'}, {text:'No hablar de dinero nunca'} ] },
      { type:'mcq', prompt:'"Compartir mi talento" significa...', visual:'🎨', hint:'Piensa en tus dibujos y cuentos 🎨', options:[
        {text:'Mostrar al mundo tus dibujos, cuentos o creaciones', ok:true}, {text:'Copiar el talento de otros'}, {text:'Guardar todo en secreto'}, {text:'No crear nada'} ] },
      { type:'mcq', prompt:'"Conseguir lo que necesito" debe hacerse...', visual:'🛒', hint:'Siempre con permiso de tus papás 🛒', options:[
        {text:'De forma segura y con permiso de tus padres', ok:true}, {text:'Sin decirle a nadie'}, {text:'Sin ningún cuidado'}, {text:'Solo de noche a escondidas'} ] },
      { type:'mcq', prompt:'"Divertirme sanamente" es disfrutar de...', visual:'🎮', hint:'Piensa en juegos que enseñan cosas buenas 🎮', options:[
        {text:'Juegos y videos que nos hagan reír y enseñen cosas buenas', ok:true}, {text:'Contenido que asusta'}, {text:'Juegos todo el día sin parar'}, {text:'Videos para adultos'} ] },
      { type:'mcq', prompt:'"Estar cerca de los míos" te permite...', visual:'🤗', hint:'Piensa en un abrazo virtual 🤗', options:[
        {text:'Dar un abrazo virtual a abuelitos y amigos', ok:true}, {text:'Olvidarte de tu familia'}, {text:'Solo hablar con desconocidos'}, {text:'No comunicarte nunca'} ] },
      { type:'mcq', prompt:'"Encontrar tesoros de verdad" significa saber...', visual:'💎', hint:'Piensa en información real y valiosa 💎', options:[
        {text:'Buscar información real y valiosa en internet', ok:true}, {text:'Creer todo lo que ves'}, {text:'Inventar noticias falsas'}, {text:'No buscar nada'} ] },
      { type:'match', prompt:'Une cada superpoder con su icono', hint:'Piensa en qué hace cada superpoder', pairs:[
        {label:'Estudiar y descubrir', visual:'📚'}, {label:'Cuidar mis ahorros', visual:'💰'}, {label:'Compartir mi talento', visual:'🎨'},
        {label:'Divertirme sanamente', visual:'🎮'}, {label:'Estar cerca de los míos', visual:'🤗'}, {label:'Encontrar tesoros de verdad', visual:'💎'} ] },
    ],
  },
  {
    id: 'plan-nacional',
    title: 'El Gran Plan del Perú',
    emoji: '🌉',
    color: '#17A2B8',
    theory: [
      '🌉 El Perú está construyendo un gran puente digital para que todos crucemos juntos hacia el futuro.',
      '🔌 Conectividad: para que el internet llegue a todas las casas, como una luz que nunca se apaga.',
      '🏪 Economía: para que las tienditas y negocios usen la tecnología para crecer y dar trabajo.',
      '🏛️ Gobierno: para que los líderes del país nos atiendan muy rápido por la computadora.',
      '🌱 Talento: para que todos aprendamos a usar la web, en especial quienes necesitan más ayuda y las niñas que sueñan con ser científicas.',
      '🛡️ Confianza y Seguridad: para que internet sea un lugar seguro, como un parque protegido.',
      '🤖 Innovación: para que inventemos robots inteligentes y cosas nuevas que aún no existen.',
    ],
    summary: '🌉 Recuerda: el Perú está construyendo un puente digital con 6 objetivos para que todos avancemos juntos.',
    questions: [
      { type:'mcq', prompt:'El objetivo "Conectividad" busca que...', visual:'🔌', hint:'Piensa en el internet llegando a todas las casas 🔌', options:[
        {text:'El internet llegue a todas las casas', ok:true}, {text:'Que nadie tenga internet'}, {text:'Que solo las ciudades grandes tengan internet'}, {text:'Que se apague la luz'} ] },
      { type:'mcq', prompt:'El objetivo "Economía" ayuda a...', visual:'🏪', hint:'Piensa en las tienditas y negocios 🏪', options:[
        {text:'Que los negocios usen la tecnología para crecer y dar trabajo', ok:true}, {text:'Que los negocios cierren'}, {text:'Que nadie trabaje'}, {text:'Que no haya tiendas'} ] },
      { type:'mcq', prompt:'El objetivo "Gobierno" busca que los líderes...', visual:'🏛️', hint:'Piensa en ser atendido rápido 🏛️', options:[
        {text:'Nos atiendan muy rápido por la computadora', ok:true}, {text:'Nunca nos atiendan'}, {text:'Solo atiendan en persona'}, {text:'Se olviden de nosotros'} ] },
      { type:'mcq', prompt:'El objetivo "Talento" se enfoca en...', visual:'🌱', hint:'Piensa en aprender a usar la web, sobre todo quien necesita más ayuda 🌱', options:[
        {text:'Que todos aprendamos a usar la web, con ayuda especial para quienes más lo necesitan', ok:true}, {text:'Que solo unos pocos aprendan'}, {text:'Que nadie estudie'}, {text:'Que se prohíba la tecnología'} ] },
      { type:'mcq', prompt:'El objetivo "Confianza y Seguridad" busca que internet sea...', visual:'🛡️', hint:'Como un parque protegido 🛡️', options:[
        {text:'Un lugar seguro, como un parque protegido', ok:true}, {text:'Un lugar peligroso'}, {text:'Un lugar sin reglas'}, {text:'Un lugar solo para adultos'} ] },
      { type:'mcq', prompt:'El objetivo "Innovación" busca que...', visual:'🤖', hint:'Piensa en inventar cosas nuevas 🤖', options:[
        {text:'Inventemos robots inteligentes y cosas nuevas', ok:true}, {text:'Dejemos de inventar'}, {text:'Copiemos todo de otros países'}, {text:'Nunca cambiemos nada'} ] },
      { type:'mcq', prompt:'¿Cuántos objetivos tiene el Gran Plan del Perú?', visual:'🌉', hint:'Cuenta: Conectividad, Economía, Gobierno, Talento, Confianza y Seguridad, Innovación 🌉', options:[
        {text:'6', ok:true}, {text:'3'}, {text:'10'}, {text:'2'} ] },
      { type:'match', prompt:'Une cada objetivo con su símbolo', hint:'Piensa para qué sirve cada objetivo', pairs:[
        {label:'Conectividad', visual:'🔌'}, {label:'Economía', visual:'🏪'}, {label:'Gobierno', visual:'🏛️'},
        {label:'Talento', visual:'🌱'}, {label:'Confianza y Seguridad', visual:'🛡️'}, {label:'Innovación', visual:'🤖'} ] },
    ],
  },
  {
    id: 'mision-2030',
    title: 'Mi Misión 2030: Guardianes Digitales',
    emoji: '🚀',
    color: '#2ECC71',
    theory: [
      '📅 En el año 2020, en el Perú las personas solo usaban 2 de sus 8 superpoderes digitales.',
      '🎯 Nuestra misión: que para el año 2030, todos usemos al menos 4 de los 8 superpoderes.',
      '🎂 Esta meta es para todos los niños y niñas mayores de 6 años, ¡como tú!',
      '🛡️ Al lograrlo, seremos Guardianes Digitales.',
      '💛 La transformación digital es un cambio en nuestro corazón y nuestra cultura para vivir mejor y cuidarnos unos a otros.',
      '🦸 El Perú digital cuenta contigo para ser un ciudadano valiente, inteligente y muy creativo.',
    ],
    summary: '🚀 Recuerda: en el 2030, el Perú cuenta contigo para ser un guardián digital valiente, inteligente y creativo.',
    questions: [
      { type:'mcq', prompt:'¿Cuántos superpoderes digitales usaban las personas en el Perú en el 2020?', visual:'📅', hint:'Muy pocos, menos de la mitad 📅', options:[
        {text:'2 de 8', ok:true}, {text:'8 de 8'}, {text:'0 de 8'}, {text:'6 de 8'} ] },
      { type:'mcq', prompt:'¿Cuál es la meta para el año 2030?', visual:'🎯', hint:'El doble de lo que se usaba en 2020 🎯', options:[
        {text:'Usar al menos 4 de los 8 superpoderes', ok:true}, {text:'Usar solo 1 superpoder'}, {text:'No usar ningún superpoder'}, {text:'Usar 100 superpoderes'} ] },
      { type:'mcq', prompt:'¿Para quiénes es esta misión?', visual:'🎂', hint:'Para niños y niñas de cierta edad 🎂', options:[
        {text:'Para niños y niñas mayores de 6 años', ok:true}, {text:'Solo para personas adultas'}, {text:'Solo para robots'}, {text:'Para nadie'} ] },
      { type:'mcq', prompt:'Cuando logras usar tus superpoderes digitales, te conviertes en...', visual:'🛡️', hint:'Un defensor del mundo digital 🛡️', options:[
        {text:'Un Guardián Digital', ok:true}, {text:'Un pirata'}, {text:'Un fantasma'}, {text:'Un extraterrestre'} ] },
      { type:'mcq', prompt:'La transformación digital es un cambio en...', visual:'💛', hint:'Piensa en el corazón y la cultura 💛', options:[
        {text:'Nuestro corazón y nuestra cultura para vivir mejor', ok:true}, {text:'Solo las máquinas'}, {text:'Solo los cables'}, {text:'Nada importante'} ] },
      { type:'mcq', prompt:'El Perú digital cuenta contigo para ser un ciudadano...', visual:'🦸', hint:'Tres cualidades: valiente, inteligente y creativo 🦸', options:[
        {text:'Valiente, inteligente y muy creativo', ok:true}, {text:'Miedoso y flojo'}, {text:'Aburrido'}, {text:'Invisible'} ] },
    ],
  },
];

/* ============================================================
   FRASES
   ============================================================ */
const PHRASES = {
  correct: ['¡Genial! 🎉','¡Muy bien hecho! 🌟','¡Lo lograste! 🥳','¡Excelente trabajo! 👏','¡Eres un verdadero Guardián Digital! 🦸','¡Súper! Sigue así 🚀','¡Fantástico! 🌈','¡Qué inteligente eres! 🧠✨'],
  wrong: ['¡Casi lo logras! Sigue intentando 💪','¡No pasa nada! Aprendemos de los errores 🌱','¡Tú puedes! Sigue practicando 😊','¡Buen intento! La próxima será 🍀','¡Vas muy bien, sigue así! 🌟','Equivocarse es parte de aprender 💛','¡Me encanta cuánto te esfuerzas! 💪✨','¡Pensar y probar ya es un logro! 🌈'],
};

/* Frases especiales cuando se completa sin fallos el "reto relámpago"
   de la dinámica de regla cambiante (flexRule) — mismo tono no punitivo,
   celebran específicamente el cambio de regla extra. */
const FLEX_BONUS_PHRASES = ['¡Reto relámpago superado! ⚡🌟','¡Cambiaste de regla como un experto! ⚡🧠','¡Flexibilidad mental al máximo! ⚡🎉'];

/* Prompts genéricos para la pregunta tipo "wait" (control inhibitorio) */
const WAIT_PROMPTS = [
  { prompt:'¡Pausa de calma! 🌿', prompt2:'Espera a que la barra se llene…' },
  { prompt:'Respira antes de tocar 🌬️', prompt2:'Cuenta despacio mientras se llena la barra…' },
  { prompt:'¡Tu turno de esperar! ✋', prompt2:'La barra nos avisa cuándo tocar…' },
];

/* Frases para las pausas de movimiento */
const MOVEMENT_PROMPTS = [
  { emoji:'🙌', text:'¡Sacude las manos!' },
  { emoji:'🦵', text:'¡Toca tus pies!' },
  { emoji:'🌟', text:'¡Estira los brazos arriba!' },
  { emoji:'🐸', text:'¡Da un saltito!' },
  { emoji:'🦸', text:'¡Haz tu pose de superhéroe!' },
];

/* ============================================================
   REPORTE PARA PAPÁS: banco de neurociencia y frases de "coach"
   Contenido resumido y simplificado a partir del informe de la
   carpeta Base_neurociencia del usuario ("Informe Integral de
   Investigación: Neurociencia, Funciones Ejecutivas y TDAH"), con
   la referencia bibliográfica de cada autor citado en ese informe.
   Se elige un concepto y una frase al azar cada vez que se abre el
   reporte (evitando repetir el mismo que la vez anterior).
   ============================================================ */
const PARENT_SCIENCE_CARDS = [
  { icon:'🎻', title:'El cerebro y su "director de orquesta"',
    text:'La atención se organiza gracias a la dopamina, la sustancia que ayuda al cerebro a enfocarse en una tarea a la vez. Cuando hay menos de la necesaria, es como si cada instrumento tocara a destiempo: cuesta concentrarse, y no es un tema de voluntad.',
    source:'Referencia: Dr. T. Spencer; Dr. A. Huberman' },
  { icon:'🧠', title:'Un córtex prefrontal muy sensible',
    text:'La parte del cerebro que organiza y frena impulsos es también la más joven y delicada. El estrés, el cansancio o la soledad pueden "apagarla" un momento, por eso un ambiente tranquilo ayuda tanto como cualquier estrategia.',
    source:'Referencia: Dr. A. Diamond' },
  { icon:'🎯', title:'Control inhibitorio: frenar antes de actuar',
    text:'Es la capacidad de detener una respuesta impulsiva o un pensamiento distractor para elegir la acción correcta. Se entrena poco a poco, con práctica y paciencia, igual que cualquier otro músculo.',
    source:'Referencia: Dr. A. Diamond' },
  { icon:'🗂️', title:'Memoria de trabajo: sostener ideas en la mente',
    text:'Es la capacidad de retener información y usarla al mismo tiempo, como recordar una instrucción mientras se hace otra cosa. Es distinta a memorizar: aquí el cerebro "hace malabares" con varias ideas a la vez.',
    source:'Referencia: Dr. A. Diamond' },
  { icon:'🔄', title:'Flexibilidad cognitiva: cambiar de plan',
    text:'Es la habilidad de cambiar de perspectiva y adaptarse cuando algo sale distinto a lo esperado. Se fortalece cada vez que el niño o niña admite un error o encuentra una forma nueva de resolver algo.',
    source:'Referencia: Dr. A. Diamond' },
  { icon:'⏳', title:'Su "edad de autocontrol" no es su edad real',
    text:'Según la Regla del 30%, un niño puede autorregularse hasta un 30% por debajo de su edad en años. Un niño de 10 años puede actuar como uno de 7 en momentos de calma interior: ajustar las expectativas a esa edad evita muchas frustraciones.',
    source:'Referencia: Dr. R. Barkley' },
  { icon:'🩹', title:'Ayudas externas, no muletas',
    text:'Esto no es un trastorno de la voluntad: el niño puede saber qué hacer y aun así no lograr hacerlo solo. Por eso ayuda tanto externalizar la información con recordatorios físicos, visuales o de rutina.',
    source:'Referencia: Dr. R. Barkley' },
  { icon:'🧭', title:'"Me preparo, hago, termino" con orden espacial',
    text:'Organizar una tarea mostrando primero la meta, luego los pasos y al final los materiales ayuda al cerebro a planificar mejor el resultado final antes de empezar.',
    source:'Referencia: S. Ward, M.S., CCC-SLP' },
  { icon:'🖐️', title:'Gesticular antes de empezar ayuda a pensar',
    text:'Hacer con el cuerpo el gesto de la acción que se va a realizar activa la planificación incluso más que solo hablarlo: el cuerpo ayuda a la mente a anticipar lo que sigue.',
    source:'Referencia: S. Ward, M.S., CCC-SLP' },
  { icon:'🦸', title:'El adulto como apoyo temporal del cerebro',
    text:'Mientras el cerebro termina de madurar, el adulto cumple la función que el niño todavía no puede hacer solo: organizar, recordar y frenar impulsos por él. No es sobreprotección, es el andamiaje que necesita hoy.',
    source:'Referencia: Dr. R. Barkley; S. Ward, M.S., CCC-SLP; Dr. A. Diamond' },
  { icon:'🏃', title:'Moverse también ayuda a concentrarse',
    text:'Los movimientos rítmicos o tener algo para manipular con las manos canalizan el exceso de energía motora, liberando al resto del cerebro para enfocarse en la tarea.',
    source:'Referencia: Dr. A. Huberman; Dr. A. Diamond' },
  { icon:'🌬️', title:'Un cerebro feliz aprende mejor',
    text:'La alegría no es lo opuesto a lo serio: un cerebro relajado y en calma es justamente el que mejor puede planificar, recordar y controlar impulsos.',
    source:'Referencia: Dr. A. Diamond' },
];

const PARENT_COACH_PHRASES = [
  'Tu paciencia de hoy es la función ejecutiva que su cerebro todavía está construyendo. Cada vez que esperas con calma, le prestas el tuyo para que el suyo termine de crecer. 💛',
  'No estás criando "mal comportamiento": estás acompañando un músculo mental que madura poco a poco. Cada intento cuenta, aunque hoy no se note del todo. 💪',
  'Ser su apoyo externo por un tiempo no es sobreprotegerlo, es justo lo que su cerebro necesita ahora para aprender a hacerlo solo mañana. 🧠✨',
  'Bajar la exigencia en un mal día no es rendirte: es la ciencia trabajando a tu favor, porque un cerebro en calma aprende mejor que uno estresado. 🌿',
  'Celebra los logros pequeños de hoy: los niños con mejor autocontrol en la infancia suelen tener más bienestar en la adultez. Estás sembrando justo a tiempo. 🌱',
  'Una pausa para respirar juntos vale más que mil veces repetir "concéntrate". Le estás dando a su cerebro exactamente lo que necesita. 🌬️',
  'No es flojera, es una etapa del desarrollo. Ajustar tus expectativas a su edad emocional real es uno de los actos más amorosos que puedes hacer hoy. 🕰️',
  'Cada vez que le ayudas a poner en pasos lo que debe hacer, estás construyendo el andamiaje que después usará sin ti. 🛠️',
  'Tú también mereces paciencia: acompañar a un cerebro en construcción es un trabajo real, y lo estás haciendo mejor de lo que crees. 🤍',
  'Hoy no necesitas la sesión perfecta. Un pequeño paso, tomado con calma, ya es una victoria para un cerebro que está aprendiendo a regularse. ⭐',
];
/* Recuerda el último elegido de cada banco para no repetirlo dos veces
   seguidas al reabrir el reporte (con bancos tan cortos, el azar puro
   se siente poco "cambiante"). */
let lastScienceCard = null;
let lastCoachPhrase = null;
function pickFreshRandom(arr, lastItem){
  if(arr.length <= 1) return arr[0];
  let choice;
  do { choice = pickRandom(arr); } while(choice === lastItem);
  return choice;
}

/* Cuánto tiempo se muestra el mensaje de retroalimentación y cuánto
   se espera antes de pasar a la siguiente pregunta. Se dio más
   tiempo (sobre todo en fallo/tiempo agotado) para que el niño
   pueda revisar con calma la respuesta correcta resaltada. */
const FEEDBACK_TIMING = {
  correct: { show: 2200, next: 2600 },
  wrong:   { show: 3400, next: 3800 },
  neutral: { show: 3400, next: 3800 },
};

/* ============================================================
   UTILIDADES
   ============================================================ */
function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function getTheme(id){ return THEMES.find(t=>t.id===id); }

/* Convierte "#RRGGBB" en "R,G,B" para poder usarlo dentro de rgba() en
   el CSS de los fondos ilustrados por tema (--theme-color-rgb). */
function hexToRgb(hex){
  const h = hex.replace('#','');
  const full = h.length===3 ? h.split('').map(c=>c+c).join('') : h;
  const n = parseInt(full,16);
  return `${(n>>16)&255},${(n>>8)&255},${n&255}`;
}
function setThemeColorVar(hexColor){
  document.documentElement.style.setProperty('--theme-color-rgb', hexToRgb(hexColor));
}

/* ============================================================
   ALMACENAMIENTO (localStorage)
   ============================================================ */
const STORAGE_KEY = 'ciudadanodigital_progress_v1';
const DEFAULT_SETTINGS = { timerless:false, movementBreaks:true, soundOn:true };
/* Interruptor único de música/efectos (Ajustes → "Música y sonidos").
   No afecta a la voz (speak/TTS): leer las instrucciones en voz alta
   es una ayuda de accesibilidad distinta a la música o los efectos
   decorativos, así que sigue funcionando aunque esto esté apagado. */
function soundEnabled(){ return progress.settings.soundOn !== false; }
function loadProgress(){
  try{
    const p = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(p && p.themes){
      return {
        themes: p.themes,
        totalStars: p.totalStars || 0,
        settings: Object.assign({}, DEFAULT_SETTINGS, p.settings || {}),
      };
    }
  }catch(e){}
  return { themes:{}, totalStars:0, settings: Object.assign({}, DEFAULT_SETTINGS) };
}
function saveProgress(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
let progress = loadProgress();

function markThemeIncomplete(themeId){
  const tp = progress.themes[themeId] || { status:'none', bestStars:0, attempts:0 };
  if(tp.status !== 'completed') tp.status = 'incomplete';
  tp.attempts = (tp.attempts||0) + 1;
  progress.themes[themeId] = tp;
  saveProgress();
}

/* ============================================================
   AUDIO (Web Audio API, sin archivos externos)
   ============================================================ */
let audioCtx = null;
function ensureAudio(){
  if(!audioCtx){
    const Ctx = window.AudioContext || window.webkitAudioContext;
    audioCtx = new Ctx();
  }
  if(audioCtx.state === 'suspended') audioCtx.resume();
}
function beep(freq, start, dur, type, gainVal){
  const t0 = audioCtx.currentTime + start;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type || 'sine';
  osc.frequency.setValueAtTime(freq, t0);
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(gainVal||0.2, t0+0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, t0+dur);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(t0);
  osc.stop(t0+dur+0.02);
}
function playCorrect(){ if(!audioCtx || !soundEnabled()) return; beep(523.25,0,0.15,'triangle',0.22); beep(659.25,0.12,0.15,'triangle',0.22); beep(783.99,0.24,0.3,'triangle',0.22); }
function playWrong(){ if(!audioCtx || !soundEnabled()) return; beep(320,0,0.14,'sine',0.11); beep(260,0.12,0.2,'sine',0.11); }
/* Sonido suave y neutro para cuando se acaba el tiempo (no punitivo) */
function playGentleChime(){ if(!audioCtx || !soundEnabled()) return; beep(392,0,0.22,'sine',0.12); beep(494,0.18,0.32,'sine',0.12); }
function playClick(){ if(!audioCtx || !soundEnabled()) return; beep(440,0,0.06,'square',0.07); }
function playTrophy(){ if(!audioCtx || !soundEnabled()) return; [523.25,659.25,783.99,1046.5].forEach((f,i)=>beep(f, i*0.16, 0.35, 'triangle', 0.22)); }

/* ============================================================
   AUDIO GRABADO (archivos .mp3 provistos por el usuario)
   Viven junto a index.html/app.js en assets/audio/ -la única
   excepción a "sin archivos externos" del resto de la app-, porque
   incrustar música como base64 dentro de app.js sería enorme e
   ilegible. Se referencian por ruta relativa para que el .mp3 nunca
   quede embebido en el código.
   ============================================================ */
/* Volumen bajo para TODOS los audios grabados (efectos, jingle y
   música): ninguno debe competir con la voz ni distraer al niño. */
const AUDIO_VOLUME = 0.08;

const AUDIO_BASE = 'assets/audio/';
const introAudio = new Audio(AUDIO_BASE + 'kids_intro.mp3');
const successAudio = new Audio(AUDIO_BASE + 'exito.mp3');
const winAudio = new Audio(AUDIO_BASE + 'playwin.mp3');
introAudio.volume = AUDIO_VOLUME;
successAudio.volume = AUDIO_VOLUME;
winAudio.volume = AUDIO_VOLUME;

/* Jingle del menú principal: suena en bucle mientras el niño está
   eligiendo tema, no una sola vez. Se engancha directamente en
   showScreen() (más abajo) para que arranque en CUALQUIER regreso al
   inicio -no solo la primera vez- y se detenga apenas se abre un
   tema. El primer intento en frío (antes de cualquier toque del
   usuario) lo bloqueará la política de autoplay del navegador; por
   eso hay un respaldo en el primer click del documento. */
introAudio.loop = true;
function startIntroLoop(){ if(!soundEnabled()) return; introAudio.play().catch(()=>{}); }
function stopIntroLoop(){ introAudio.pause(); introAudio.currentTime = 0; }
function playSuccessSound(){ if(!soundEnabled()) return; successAudio.currentTime = 0; successAudio.play().catch(()=>{}); }
function playWinSound(){ if(!soundEnabled()) return; winAudio.currentTime = 0; winAudio.play().catch(()=>{}); }

/* Música de fondo del quiz: 2 pistas cortas en loop, una elegida al
   azar por sesión para que no suene siempre igual. Volumen bajo a
   propósito -no debe competir con la voz ni con los efectos-, y se
   "esquiva" (pausa) automáticamente mientras hay una instrucción de
   voz activa (ver duckBgMusic/unduckBgMusic, enganchado en speak()),
   retomando donde quedó apenas termina de hablar. */
const BG_MUSIC_TRACKS = [AUDIO_BASE + 'kids_fondo1.mp3', AUDIO_BASE + 'kids_fondo2.mp3'];
const bgMusicAudio = new Audio();
bgMusicAudio.loop = true;
bgMusicAudio.volume = AUDIO_VOLUME;
let bgMusicActive = false;   // true mientras dura el quiz (independiente de si está sonando o "esquivada")
let bgMusicDucked = false;   // true si está pausada por una instrucción de voz
function startBgMusic(){
  if(!soundEnabled()) return;
  bgMusicAudio.src = pickRandom(BG_MUSIC_TRACKS);
  bgMusicAudio.currentTime = 0;
  bgMusicActive = true;
  bgMusicDucked = false;
  bgMusicAudio.play().catch(()=>{});
}
function stopBgMusic(){
  bgMusicActive = false;
  bgMusicDucked = false;
  bgMusicAudio.pause();
  bgMusicAudio.currentTime = 0;
}
function duckBgMusic(){
  if(bgMusicActive && !bgMusicAudio.paused){
    bgMusicDucked = true;
    bgMusicAudio.pause();
  }
}
function unduckBgMusic(){
  if(bgMusicActive && bgMusicDucked){
    bgMusicDucked = false;
    bgMusicAudio.play().catch(()=>{});
  }
}

const FEMALE_VOICE_HINTS = ['mónica','monica','paulina','helena','sabina','elvira','lucia','lucía','laura','conchita','esperanza','marisol','isabela','camila','female','mujer','samantha','victoria','zuri'];
let ttsVoice = null;
function pickSpanishVoice(){
  if(!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  const esVoices = voices.filter(v=> v.lang && v.lang.toLowerCase().startsWith('es'));
  ttsVoice = esVoices.find(v=> FEMALE_VOICE_HINTS.some(hint=> v.name.toLowerCase().includes(hint)))
    || esVoices.find(v=> !/male|jorge|diego|juan|carlos/i.test(v.name))
    || esVoices[0]
    || voices[0]
    || null;
}
if('speechSynthesis' in window){
  pickSpanishVoice();
  window.speechSynthesis.onvoiceschanged = pickSpanishVoice;
}

/* ============================================================
   CONFETTI
   ============================================================ */
const confettiCanvas = document.getElementById('confettiCanvas');
const cctx = confettiCanvas.getContext('2d');
function resizeCanvas(){ confettiCanvas.width = window.innerWidth; confettiCanvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const CONFETTI_COLORS = ['#FF6B6B','#FFD93D','#6C5CE7','#00CEC9','#2ECC71','#FF8A5C','#4A90D9','#FF5DA2'];
let confettiParticles = [];
let confettiRAF = null;

function burstConfetti(count){
  for(let i=0;i<(count||140);i++){
    confettiParticles.push({
      x: Math.random()*confettiCanvas.width,
      y: -20 - Math.random()*confettiCanvas.height*0.5,
      vx: (Math.random()-0.5)*3.2,
      vy: 2+Math.random()*3,
      size: 6+Math.random()*7,
      color: CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)],
      rot: Math.random()*360,
      vrot: (Math.random()-0.5)*10,
      shape: Math.random()<0.5 ? 'rect' : 'circle',
      life: 0,
      maxLife: 160+Math.random()*70,
    });
  }
  if(!confettiRAF) confettiLoop();
}
function confettiLoop(){
  cctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
  confettiParticles.forEach(p=>{
    p.x += p.vx; p.y += p.vy; p.vy += 0.035; p.rot += p.vrot; p.life++;
    cctx.save();
    cctx.translate(p.x,p.y);
    cctx.rotate(p.rot*Math.PI/180);
    cctx.fillStyle = p.color;
    cctx.globalAlpha = Math.max(0, 1 - p.life/p.maxLife);
    if(p.shape==='rect') cctx.fillRect(-p.size/2,-p.size/2,p.size,p.size*0.6);
    else { cctx.beginPath(); cctx.arc(0,0,p.size/2,0,Math.PI*2); cctx.fill(); }
    cctx.restore();
  });
  confettiParticles = confettiParticles.filter(p=>p.life<p.maxLife && p.y<confettiCanvas.height+40);
  if(confettiParticles.length>0){
    confettiRAF = requestAnimationFrame(confettiLoop);
  } else {
    cctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
    confettiRAF = null;
  }
}

/* ============================================================
   REFERENCIAS DOM
   ============================================================ */
const homeScreen = document.getElementById('homeScreen');
const theoryScreen = document.getElementById('theoryScreen');
const prepScreen = document.getElementById('prepScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const parentScreen = document.getElementById('parentScreen');

const homeMascot = document.getElementById('homeMascot');
const themeGrid = document.getElementById('themeGrid');
const totalStarsCount = document.getElementById('totalStarsCount');
const totalStarsBadge = document.getElementById('totalStarsBadge');
const resetProgressBtn = document.getElementById('resetProgressBtn');
const timerlessToggle = document.getElementById('timerlessToggle');
const movementToggle = document.getElementById('movementToggle');
const soundToggle = document.getElementById('soundToggle');
const parentReportBtn = document.getElementById('parentReportBtn');
const parentBackBtn = document.getElementById('parentBackBtn');
const parentList = document.getElementById('parentList');
const parentTotalStars = document.getElementById('parentTotalStars');
const parentScienceIcon = document.getElementById('parentScienceIcon');
const parentScienceTitle = document.getElementById('parentScienceTitle');
const parentScienceText = document.getElementById('parentScienceText');
const parentScienceSource = document.getElementById('parentScienceSource');
const parentCoachText = document.getElementById('parentCoachText');

const theoryTitle = document.getElementById('theoryTitle');
const theoryEmoji = document.getElementById('theoryEmoji');
const theoryList = document.getElementById('theoryList');
const theorySummary = document.getElementById('theorySummary');
const theoryMascot = document.getElementById('theoryMascot');
const theoryBackBtn = document.getElementById('theoryBackBtn');
const startQuizBtn = document.getElementById('startQuizBtn');
const speakTheoryBtn = document.getElementById('speakTheoryBtn');

const prepMascot = document.getElementById('prepMascot');
const prepEmoji = document.getElementById('prepEmoji');
const prepBackBtn = document.getElementById('prepBackBtn');
const prepStartBtn = document.getElementById('prepStartBtn');
const prepGetReady = document.getElementById('prepGetReady');
const prepDo = document.getElementById('prepDo');
const prepDone = document.getElementById('prepDone');
const prepIconReady = document.getElementById('prepIconReady');
const prepIconCalm = document.getElementById('prepIconCalm');
const prepIconGoal = document.getElementById('prepIconGoal');
/* Las 3 tarjetas de "Prepárate" usan al propio ajolote mascota -en
   3 poses- como ícono, en vez de dibujos genéricos sin relación con
   el resto de la app: el paso 1 reutiliza la pose neutral/alerta (la
   misma del inicio), el paso 2 una pose saludando con la mano (Ley
   de Continuidad de personaje: el niño reconoce que es "el mismo"
   amigo en cada pantalla), y el paso 3 la pose de celebración (misma
   que la retroalimentación de acierto). Se fijan una sola vez porque
   nunca cambian. */
prepIconReady.innerHTML = AXOLOTL_DEFAULT;
prepIconCalm.innerHTML = AXOLOTL_WAVE;
prepIconGoal.innerHTML = AXOLOTL_CELEBRATE;

const quizExitBtn = document.getElementById('quizExitBtn');
const quizProgressText = document.getElementById('quizProgressText');
const quizStarsRow = document.getElementById('quizStarsRow');
const timerRingFg = document.getElementById('timerRingFg');
const timerNumber = document.getElementById('timerNumber');
const reminderGoal = document.getElementById('reminderGoal');
const quizMascot = document.getElementById('quizMascot');
const speakQuestionBtn = document.getElementById('speakQuestionBtn');
const questionCard = document.getElementById('questionCard');
const questionImage = document.getElementById('questionImage');
const questionPrompt = document.getElementById('questionPrompt');
const questionHint = document.getElementById('questionHint');
const answerArea = document.getElementById('answerArea');

const resultCard = document.getElementById('resultCard');
const resultMascot = document.getElementById('resultMascot');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const trophyEmoji = document.getElementById('trophyEmoji');
const resultStarsRow = document.getElementById('resultStarsRow');
const resultScoreText = document.getElementById('resultScoreText');
const replayBtn = document.getElementById('replayBtn');
const homeBtn = document.getElementById('homeBtn');

const feedbackOverlay = document.getElementById('feedbackOverlay');
const feedbackBox = document.getElementById('feedbackBox');
const feedbackEmoji = document.getElementById('feedbackEmoji');
const feedbackPhrase = document.getElementById('feedbackPhrase');
const feedbackHint = document.getElementById('feedbackHint');

const movementBreakOverlay = document.getElementById('movementBreakOverlay');
const movementEmoji = document.getElementById('movementEmoji');
const movementPhrase = document.getElementById('movementPhrase');
const movementContinueBtn = document.getElementById('movementContinueBtn');

/* ============================================================
   VOZ + MASCOTA QUE HABLA (SpeechSynthesis)
   La mascota (cabeza de ajolote, ver createTalkingMascot) vive
   junto a cada botón "Escuchar..." y anima la boca + un globo de
   puntos mientras el navegador lee en voz alta, para que el niño
   la perciba como un personaje que le habla, no como un ícono.
   Se extiende más allá de la teoría: también lee la pregunta
   activa, para apoyar a quien todavía no lee con fluidez.
   ============================================================ */
const theoryMascotCtl = createTalkingMascot(theoryMascot);
const quizMascotCtl = createTalkingMascot(quizMascot);

function speak(text, { onStart, onEnd } = {}){
  if(!('speechSynthesis' in window)){
    showFeedback('wrong', 'Tu navegador no puede leer en voz alta 😅', null);
    if(onEnd) onEnd();
    return;
  }
  window.speechSynthesis.cancel();
  /* La música de fondo del quiz baja/pausa mientras se lee cualquier
     instrucción en voz alta (teoría, pregunta, pausa de movimiento,
     retroalimentación), para que la música nunca compita con la voz. */
  duckBgMusic();
  const cleanText = text.replace(/<[^>]*>/g,'').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}️]/gu,'').trim();
  const utter = new SpeechSynthesisUtterance(cleanText);
  utter.lang = 'es-ES';
  if(ttsVoice) utter.voice = ttsVoice;
  utter.rate = 0.92;
  utter.pitch = 1.15;
  utter.volume = 1;
  utter.onend = ()=>{ unduckBgMusic(); if(onEnd) onEnd(); };
  utter.onerror = ()=>{ unduckBgMusic(); if(onEnd) onEnd(); };
  if(onStart) onStart();
  window.speechSynthesis.speak(utter);
}

/* Narrar un texto que TAMBIÉN se muestra en pantalla: usar SIEMPRE
   speakEl(elemento) en vez de volver a escribir ese mismo texto a mano
   en un segundo string para speak(). Un texto escrito dos veces (uno
   para el DOM, otro copiado/pegado para la voz) se puede desincronizar
   sin que nadie lo note -así pasó en la fase 2 del CRA, donde la voz
   leía solo la primera oración porque tenía una copia manual truncada
   del párrafo real-. Leyendo directamente el .textContent del elemento
   ya renderizado, ambos son literalmente el mismo texto y no pueden
   desincronizarse. speak() ya limpia HTML y emoji, así que sirve
   incluso si el elemento tiene spans/iconos decorativos adentro. */
function speakEl(el, opts){
  if(!el) return;
  speak(el.textContent.replace(/\s+/g,' ').trim(), opts);
}

let isSpeakingTheory = false;
function setSpeakBtnState(speaking){
  isSpeakingTheory = speaking;
  speakTheoryBtn.classList.toggle('speaking', speaking);
  speakTheoryBtn.querySelector('.speak-icon').textContent = speaking ? '⏸️' : '🔊';
  speakTheoryBtn.querySelector('.speak-label').textContent = speaking ? 'Detener' : 'Escuchar teoría';
}
function stopSpeakingTheory(){
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
  unduckBgMusic();
  setSpeakBtnState(false);
  theoryMascotCtl.stop();
}
function speakTheory(){
  if(isSpeakingTheory){ stopSpeakingTheory(); return; }
  stopSpeakingQuestion();
  const theme = getTheme(currentThemeId);
  const text = theme.theory.join('. ') + (theme.summary ? '. ' + theme.summary : '');
  speak(text, {
    onStart: ()=>{ setSpeakBtnState(true); theoryMascotCtl.start(); },
    onEnd: ()=>{ setSpeakBtnState(false); theoryMascotCtl.stop(); },
  });
}
speakTheoryBtn.addEventListener('click', speakTheory);

let isSpeakingQuestion = false;
function setSpeakQuestionBtnState(speaking){
  isSpeakingQuestion = speaking;
  speakQuestionBtn.classList.toggle('speaking', speaking);
  speakQuestionBtn.textContent = speaking ? '⏸️ Detener' : '🔊 Escuchar pregunta';
}
function stopSpeakingQuestion(){
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
  unduckBgMusic();
  setSpeakQuestionBtnState(false);
  quizMascotCtl.stop();
}
function speakQuestion(){
  if(isSpeakingQuestion){ stopSpeakingQuestion(); return; }
  stopSpeakingTheory();
  const text = questionPrompt.textContent + (questionHint.textContent ? '. ' + questionHint.textContent : '');
  speak(text, {
    onStart: ()=>{ setSpeakQuestionBtnState(true); quizMascotCtl.start(); },
    onEnd: ()=>{ setSpeakQuestionBtnState(false); quizMascotCtl.stop(); },
  });
}
speakQuestionBtn.addEventListener('click', speakQuestion);

/* ============================================================
   ESTADO
   ============================================================ */
let currentThemeId = null;
const state = {
  session: [], index: 0, sessionStars: 0, themeId: null,
  answered: false, timeLeft: 30, timerInterval: null,
  revealCorrect: null,
};

/* ============================================================
   NAVEGACIÓN
   ============================================================ */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  /* El jingle del menú suena en TODA visita al inicio -carga inicial,
     volver desde teoría/quiz/resultado/reporte-, y se corta apenas se
     navega a cualquier otra pantalla (p.ej. al abrir un tema). Centrar
     esto aquí evita repetir la llamada en cada botón "volver al inicio". */
  if(id === 'homeScreen') startIntroLoop(); else stopIntroLoop();
}

function statusLabel(tp){
  if(tp.status === 'completed') return `🏆 ¡Completado! ${tp.bestStars}⭐`;
  if(tp.status === 'incomplete') return '📝 En progreso, ¡sigue practicando!';
  return '▶️ Toca para empezar';
}

function renderHome(){
  if(homeMascot && !homeMascot.innerHTML) homeMascot.innerHTML = AXOLOTL_DEFAULT;
  themeGrid.innerHTML = '';
  THEMES.forEach(theme=>{
    const tp = progress.themes[theme.id] || { status:'none', bestStars:0, attempts:0 };
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'theme-card' + (tp.status==='completed' ? ' completed' : tp.status==='incomplete' ? ' incomplete' : '');
    card.style.setProperty('--card-color', theme.color);
    card.dataset.theme = theme.id;
    card.innerHTML = `
      <span class="card-emoji" aria-hidden="true">${theme.emoji}</span>
      <span class="card-title">${theme.title}</span>
      <span class="card-status">${statusLabel(tp)}</span>
      <div class="cover"></div>
      ${tp.status==='completed' ? '<span class="trophy-badge" aria-hidden="true">🏆</span>' : ''}
    `;
    card.addEventListener('click', ()=> openTheory(theme.id));
    themeGrid.appendChild(card);
  });
  const totalStars = progress.totalStars || 0;
  totalStarsCount.textContent = totalStars;
  totalStarsBadge.setAttribute('aria-label', `${totalStars} estrellas en total`);
}

function syncSettingsUI(){
  timerlessToggle.checked = !!progress.settings.timerless;
  movementToggle.checked = !!progress.settings.movementBreaks;
  soundToggle.checked = soundEnabled();
  document.body.classList.toggle('timerless', !!progress.settings.timerless);
}
timerlessToggle.addEventListener('change', ()=>{
  progress.settings.timerless = timerlessToggle.checked;
  saveProgress();
  syncSettingsUI();
  playClick();
});
movementToggle.addEventListener('change', ()=>{
  progress.settings.movementBreaks = movementToggle.checked;
  saveProgress();
  playClick();
});
soundToggle.addEventListener('change', ()=>{
  progress.settings.soundOn = soundToggle.checked;
  saveProgress();
  if(progress.settings.soundOn){
    /* Al reactivar, retoma lo que correspondería sonar en la pantalla
       actual: el jingle del menú si estamos ahí, o la música del quiz
       si hay una sesión en curso. */
    ensureAudio();
    if(homeScreen.classList.contains('active')) startIntroLoop();
    if(quizScreen.classList.contains('active')) startBgMusic();
    playClick();
  } else {
    stopIntroLoop();
    stopBgMusic();
  }
});

/* ============================================================
   REPORTE PARA PAPÁS (Interfaz de Facilitación)
   No es un accesorio decorativo: usa los mismos datos que ya se
   guardan en el progreso, en un formato simple y sin gamificación,
   para que un adulto pueda validar en segundos qué se repasó y
   cuánto se avanzó, sin tener que jugar la app.
   ============================================================ */
function renderParentReport(){
  parentList.innerHTML = '';
  let totalAttempts = 0;
  THEMES.forEach(theme=>{
    const tp = progress.themes[theme.id] || { status:'none', bestStars:0, attempts:0 };
    totalAttempts += tp.attempts || 0;
    const row = document.createElement('div');
    row.className = 'parent-row';
    const statusText = tp.status==='completed' ? 'Completado'
      : tp.status==='incomplete' ? 'En progreso' : 'Todavía no empezado';
    row.innerHTML = `
      <span class="parent-row-emoji" aria-hidden="true">${theme.emoji}</span>
      <div class="parent-row-info">
        <p class="parent-row-title">${theme.title}</p>
        <p class="parent-row-status">${statusText} · Mejor puntaje: ${tp.bestStars||0}⭐ · Intentos: ${tp.attempts||0}</p>
      </div>
    `;
    parentList.appendChild(row);
  });
  parentTotalStars.textContent = `${progress.totalStars || 0} estrellas en total · ${totalAttempts} sesiones jugadas`;

  /* Un concepto de neurociencia y una frase de "coach" distintos en
     cada visita al reporte (ver banco arriba, con su cita bibliográfica). */
  const scienceCard = pickFreshRandom(PARENT_SCIENCE_CARDS, lastScienceCard);
  lastScienceCard = scienceCard;
  parentScienceIcon.textContent = scienceCard.icon;
  parentScienceTitle.textContent = scienceCard.title;
  parentScienceText.textContent = scienceCard.text;
  parentScienceSource.textContent = scienceCard.source;

  const coachPhrase = pickFreshRandom(PARENT_COACH_PHRASES, lastCoachPhrase);
  lastCoachPhrase = coachPhrase;
  parentCoachText.textContent = coachPhrase;
}
parentReportBtn.addEventListener('click', ()=>{ renderParentReport(); showScreen('parentScreen'); });
parentBackBtn.addEventListener('click', ()=>{ showScreen('homeScreen'); });

/* Agrupa la teoría en bloques de a lo más 4 ítems (Ley de Miller: la
   memoria de trabajo de un niño sostiene ~7±2 elementos, así que una
   lista de 6-8 ítems corridos ya la satura). Cada bloque nuevo se marca
   con un separador decorativo, sin número propio, para que el ojo
   perciba "grupos" en vez de una sola lista larga. */
const THEORY_CHUNK_SIZE = 4;
function renderTheoryList(theory){
  let html = '';
  theory.forEach((t,i)=>{
    if(i>0 && i % THEORY_CHUNK_SIZE === 0){
      html += `<li class="theory-divider" aria-hidden="true"><span>✨</span></li>`;
    }
    html += `<li>${t}</li>`;
  });
  theoryList.innerHTML = html;
}

function openTheory(themeId){
  stopSpeakingTheory();
  currentThemeId = themeId;
  const theme = getTheme(themeId);
  theoryTitle.textContent = theme.title;
  theoryEmoji.textContent = theme.emoji;
  /* Fondo ilustrado por tema (Codificación Dual): cada tema tiene su
     propia "escena" (globo, estrellas, puente, luna) para que el niño
     asocie el tema con un lugar, no solo con un color de tarjeta. */
  theoryCard.dataset.theme = themeId;
  setThemeColorVar(theme.color);
  renderTheoryList(theme.theory);
  /* Efecto de Posición Serial: lo más importante de la lección se
     repite al FINAL (además de estar distribuido en la teoría), en
     una tarjeta aparte que se recuerda mejor por ser el cierre. */
  if(theme.summary){
    theorySummary.innerHTML = `<span class="theory-summary-label">💡 Lo más importante</span><p>${theme.summary}</p>`;
    theorySummary.style.display = 'block';
  } else {
    theorySummary.style.display = 'none';
  }
  showScreen('theoryScreen');
}

theoryBackBtn.addEventListener('click', ()=>{ stopSpeakingTheory(); renderHome(); showScreen('homeScreen'); });
startQuizBtn.addEventListener('click', ()=>{ stopSpeakingTheory(); openPrep(currentThemeId); });

/* ---- Pantalla "Prepárate": Get Ready - Do - Done + gesto de co-pensamiento ---- */
const PREP_CARDS = [prepGetReady, prepDo, prepDone];
let prepStep = 0;
function openPrep(themeId){
  const theme = getTheme(themeId);
  prepMascot.innerHTML = AXOLOTL_DEFAULT;
  prepEmoji.textContent = theme.emoji;
  prepStep = 0;
  PREP_CARDS.forEach(c=> c.classList.remove('done'));
  prepStartBtn.disabled = true;
  showScreen('prepScreen');
}
PREP_CARDS.forEach((card, idx)=>{
  card.addEventListener('click', ()=>{
    ensureAudio();
    if(idx === prepStep){
      card.classList.add('done');
      playSuccessSound();
      prepStep++;
      if(prepStep >= PREP_CARDS.length) prepStartBtn.disabled = false;
    } else if(!card.classList.contains('done')){
      card.classList.add('nudge');
      setTimeout(()=> card.classList.remove('nudge'), 400);
    }
  });
});
prepBackBtn.addEventListener('click', ()=>{ showScreen('theoryScreen'); });
prepStartBtn.addEventListener('click', ()=>{ ensureAudio(); startQuiz(currentThemeId); });

/* Salir del quiz descarta el intento en curso, así que en vez de un
   tap simple (fácil de tocar sin querer, Ley de Fitts) pedimos
   mantener presionado ~600ms, con relleno visual de progreso, antes
   de salir de verdad. Volver de la teoría o de "Prepárate" no pierde
   nada, así que esos botones se quedan con tap simple. */
const EXIT_HOLD_MS = 600;
let exitHoldTimer = null;
function cancelExitHold(){
  clearTimeout(exitHoldTimer);
  exitHoldTimer = null;
  quizExitBtn.classList.remove('holding');
}
function doExitQuiz(){
  stopTimer();
  stopSpeakingQuestion();
  stopBgMusic();
  markThemeIncomplete(state.themeId);
  renderHome();
  showScreen('homeScreen');
}
quizExitBtn.addEventListener('pointerdown', (e)=>{
  e.preventDefault();
  quizExitBtn.classList.add('holding');
  exitHoldTimer = setTimeout(()=>{
    quizExitBtn.classList.remove('holding');
    doExitQuiz();
  }, EXIT_HOLD_MS);
});
['pointerup','pointerleave','pointercancel'].forEach(evt=>
  quizExitBtn.addEventListener(evt, cancelExitHold)
);
replayBtn.addEventListener('click', ()=>{ ensureAudio(); startQuiz(state.themeId); });
homeBtn.addEventListener('click', ()=>{ renderHome(); showScreen('homeScreen'); });

let resetArmed = false;
resetProgressBtn.addEventListener('click', ()=>{
  if(!resetArmed){
    resetArmed = true;
    resetProgressBtn.textContent = '⚠️ ¿Seguro? Toca de nuevo';
    setTimeout(()=>{ resetArmed = false; resetProgressBtn.textContent = '🔄 Reiniciar progreso'; }, 3000);
    return;
  }
  progress = { themes:{}, totalStars:0, settings: progress.settings };
  saveProgress();
  resetArmed = false;
  resetProgressBtn.textContent = '🔄 Reiniciar progreso';
  renderHome();
});

/* ============================================================
   GENERACIÓN DE PREGUNTAS "wait" Y "flexRule"
   (se generan a partir del propio contenido curado del tema,
   sin inventar datos nuevos: reutilizan match.pairs existentes)
   ============================================================ */
function buildWaitQuestion(theme){
  const w = pickRandom(WAIT_PROMPTS);
  return { type:'wait', prompt:w.prompt, prompt2:w.prompt2, visual:theme.emoji, calmMs:1500 };
}
function buildFlexRuleQuestion(matchQ){
  const items = shuffle(matchQ.pairs.map(p=>({ visual:p.visual, label:p.label })));
  const uniqueLabels = shuffle([...new Set(matchQ.pairs.map(p=>p.label))]);
  /* Si el tema tiene 3+ categorías distintas, la última ronda se ofrece
     como un "reto relámpago": un cambio de regla final y sorpresa que
     estira un poquito más la flexibilidad cognitiva (mismo concepto de
     las rondas normales, presentado como un cierre breve y especial en
     vez de una tercera ronda idéntica a las anteriores). */
  const maxRounds = uniqueLabels.length >= 3 ? 3 : Math.min(2, uniqueLabels.length);
  const rounds = uniqueLabels.slice(0, maxRounds);
  return {
    type:'flexRule',
    prompt:'¡Atención! La regla puede cambiar a mitad de camino 🔄',
    visual:'🔄',
    items,
    rounds,
    bonusRoundIndex: rounds.length >= 3 ? rounds.length - 1 : -1,
  };
}

/* ============================================================
   BUILDING DE SESIÓN (aleatorio cada vez)
   ============================================================ */
function buildSession(theme){
  const bank = theme.questions;
  const mcqs = bank.filter(q=>q.type==='mcq');
  const matches = bank.filter(q=>q.type==='match');
  const orders = bank.filter(q=>q.type==='order');
  const craQs = bank.filter(q=>q.type==='cra');

  let special = [];
  if(orders.length) special.push(pickRandom(orders));
  if(craQs.length) special.push(pickRandom(craQs));
  let chosenMatch = null;
  if(matches.length){
    chosenMatch = pickRandom(matches);
    special.push(chosenMatch);
  }
  special.push(buildWaitQuestion(theme));
  if(chosenMatch && new Set(chosenMatch.pairs.map(p=>p.label)).size >= 2){
    special.push(buildFlexRuleQuestion(chosenMatch));
  }

  const remainingCount = Math.max(3, 6 - special.length + 1);
  let session = special.concat(shuffle(mcqs).slice(0, Math.min(remainingCount, mcqs.length)));
  session = shuffle(session);
  session = session.map(q=>{
    if(q.type==='mcq') return Object.assign({}, q, { options: shuffle(q.options) });
    return q;
  });
  return session;
}

/* ============================================================
   QUIZ ENGINE
   ============================================================ */
function startQuiz(themeId){
  const theme = getTheme(themeId);
  state.session = buildSession(theme);
  state.index = 0;
  state.sessionStars = 0;
  state.themeId = themeId;
  /* Se evita el lenguaje de "meta/trofeo" ligado solo a un número de
     estrellas (recompensa extrínseca): el chip ahora solo orienta
     cuántas preguntas trae la sesión, no promete un premio por ellas. */
  reminderGoal.textContent = `🎯 Vamos hasta: ${state.session.length} preguntas`;
  questionCard.dataset.theme = themeId;
  setThemeColorVar(theme.color);
  renderQuizRoadmap(state.session.length);
  startBgMusic();
  showScreen('quizScreen');
  renderQuestion();
}

function renderStarsRow(container, total, earned){
  container.innerHTML = '';
  for(let i=0;i<total;i++){
    const s = document.createElement('span');
    s.className = 'star-slot' + (i<earned ? ' earned' : '');
    s.textContent = i<earned ? '⭐' : '☆';
    container.appendChild(s);
  }
}

/* ============================================================
   MAPA DE SESIÓN (Ley de Continuidad / Gestalt)
   Una fila de puntos conectados por una línea, uno por cada
   pregunta de la sesión: el niño ve de un vistazo cuánto camino
   ya recorrió y cuánto falta, en vez de solo un texto "3/7" que
   no deja ver la forma del recorrido completo. El punto actual
   pulsa suavemente; los ya respondidos quedan en verde (correcto)
   o ámbar (incorrecto o tiempo agotado) — nunca en rojo, para que
   ningún punto se vea como un "error marcado".
   ============================================================ */
function renderQuizRoadmap(total){
  quizStarsRow.innerHTML = '';
  for(let i=0;i<total;i++){
    const dot = document.createElement('span');
    dot.className = 'roadmap-dot';
    quizStarsRow.appendChild(dot);
  }
  updateRoadmapCurrent(0);
}
function updateRoadmapCurrent(index){
  [...quizStarsRow.children].forEach((el,i)=> el.classList.toggle('current', i===index));
}
function markRoadmapResult(index, result){
  const el = quizStarsRow.children[index];
  if(el){ el.classList.remove('current'); el.classList.add(result); }
}

function renderQuestion(){
  stopTimer();
  stopSpeakingQuestion();
  const q = state.session[state.index];
  state.answered = false;
  state.revealCorrect = null;
  quizProgressText.textContent = `Pregunta ${state.index+1}/${state.session.length}`;
  updateRoadmapCurrent(state.index);
  questionImage.innerHTML = q.visual ? q.visual : (q.type==='match' ? '🔗' : q.type==='order' ? '🔢' : '❓');
  questionPrompt.textContent = q.prompt;
  questionHint.textContent = q.type==='mcq' ? 'Toca la respuesta correcta 👇'
    : q.type==='match' ? 'Arrastra cada icono hacia su respuesta 🔗'
    : q.type==='order' ? 'Toca las imágenes en el orden correcto 🔢'
    : q.type==='wait' ? 'Espera con calma antes de continuar 🌿'
    /* El tipo flexRule ya explica todo en su propio banner ("Toca: X",
       con aviso de cambio de regla), así que aquí no repetimos el mismo
       mensaje como subtexto — evita la redundancia. */
    : '';
  questionHint.style.display = questionHint.textContent ? '' : 'none';
  /* La actividad CRA es una mini-lección de varias fases (clasificar,
     ver, entender) — meterle presión de tiempo iría en contra del
     "sin prisa" que pide justamente para poder pensar y comprender,
     así que se oculta el anillo y no corre el temporizador. */
  document.body.classList.toggle('no-timer-question', q.type==='cra');
  answerArea.innerHTML = '';
  if(q.type==='mcq') renderMCQ(q);
  else if(q.type==='match') renderMatch(q);
  else if(q.type==='order') renderOrder(q);
  else if(q.type==='wait') renderWait(q);
  else if(q.type==='flexRule') renderFlexRule(q);
  else if(q.type==='cra') renderCRA(q);
  startTimer();
}

/* ---- Temporizador (no punitivo) ----
   El anillo se va LLENANDO de color a medida que pasa el tiempo
   (metáfora de reloj de arena, no de cuenta regresiva urgente).
   Nunca se pone rojo ni expulsa al niño de la actividad. */
const TIMER_TOTAL = 30;
const RING_CIRC = 175.9;
function startTimer(){
  const q = state.session[state.index];
  if(progress.settings.timerless || (q && q.type==='cra')) return;
  state.timeLeft = TIMER_TOTAL;
  updateTimerUI();
  state.timerInterval = setInterval(()=>{
    state.timeLeft--;
    updateTimerUI();
    if(state.timeLeft<=0){
      clearInterval(state.timerInterval);
      state.timerInterval = null;
      handleTimeUp();
    }
  }, 1000);
}
function stopTimer(){
  if(state.timerInterval){ clearInterval(state.timerInterval); state.timerInterval = null; }
}
function updateTimerUI(){
  timerNumber.textContent = state.timeLeft;
  const offset = RING_CIRC * (state.timeLeft/TIMER_TOTAL);
  timerRingFg.style.strokeDashoffset = offset;
  timerRingFg.style.stroke = state.timeLeft<=8 ? '#4A90D9' : '#2ECC71';
}
function handleTimeUp(){
  if(state.answered) return;
  state.answered = true;
  playGentleChime();
  markRoadmapResult(state.index, 'wrong');
  if(state.revealCorrect) state.revealCorrect();
  showFeedback('neutral', '¡Veamos la respuesta juntos! 👀', null);
  setTimeout(nextQuestion, FEEDBACK_TIMING.neutral.next);
}

/* ---- Pausas de movimiento (canal para el "ruido" motor) ---- */
function maybeShowMovementBreak(upcomingIndex, callback){
  const breakEvery = 3;
  if(progress.settings.movementBreaks && upcomingIndex>0 && upcomingIndex % breakEvery===0 && upcomingIndex < state.session.length){
    showMovementBreak(callback);
  } else {
    callback();
  }
}
function showMovementBreak(callback){
  const m = pickRandom(MOVEMENT_PROMPTS);
  movementEmoji.textContent = m.emoji;
  movementPhrase.textContent = m.text;
  movementContinueBtn.disabled = true;
  movementContinueBtn.classList.remove('ready');
  movementBreakOverlay.classList.add('show');
  /* Se lee la consigna en voz alta automáticamente (sin que el niño
     tenga que tocar "Escuchar"): la pausa de movimiento es una
     instrucción corta que debe poder seguirse solo con el oído. */
  speakEl(movementPhrase);
  const readyTimeout = setTimeout(()=>{
    movementContinueBtn.disabled = false;
    movementContinueBtn.classList.add('ready');
  }, 2000);
  function onContinue(){
    clearTimeout(readyTimeout);
    if('speechSynthesis' in window) window.speechSynthesis.cancel();
    movementBreakOverlay.classList.remove('show');
    movementContinueBtn.removeEventListener('click', onContinue);
    callback();
  }
  movementContinueBtn.addEventListener('click', onContinue);
}

/* ---- Resolución de respuestas ---- */
function showFeedback(kind, phrase, hint){
  /* Corta cualquier lectura de teoría/pregunta que siguiera en curso
     (y su animación de boca), para que la voz de la retroalimentación
     no se mezcle con la anterior. */
  stopSpeakingTheory();
  stopSpeakingQuestion();
  feedbackBox.className = 'feedback-box ' + kind;
  /* La mascota (ajolote) da la cara en cada retroalimentación en vez de
     un emoji suelto: celebra si acierta, "piensa" con calma si falla o
     se acaba el tiempo — nunca una expresión triste o de castigo. */
  feedbackEmoji.innerHTML = kind==='correct' ? AXOLOTL_CELEBRATE
    : kind==='wrong' ? AXOLOTL_THINK
    : AXOLOTL_WINK;
  feedbackPhrase.textContent = phrase;
  feedbackHint.textContent = hint || '';
  feedbackHint.style.display = hint ? 'block' : 'none';
  feedbackOverlay.classList.add('show');
  /* El mensaje de acierto se lee solo, en automático, para reforzar la
     afirmación positiva también por voz y no solo por texto/confeti. */
  if(kind === 'correct') speakEl(feedbackPhrase);
  setTimeout(()=> feedbackOverlay.classList.remove('show'), FEEDBACK_TIMING[kind].show);
}
function resolveCorrect(phraseOverride){
  playSuccessSound();
  burstConfetti(140);
  showFeedback('correct', phraseOverride || pickRandom(PHRASES.correct));
  state.sessionStars++;
  markRoadmapResult(state.index, 'correct');
  setTimeout(nextQuestion, FEEDBACK_TIMING.correct.next);
}
function resolveWrong(q){
  playWrong();
  markRoadmapResult(state.index, 'wrong');
  /* Afirmación positiva también cuando falla, no solo cuando acierta:
     un destello suave (mucho más discreto que el confeti de acierto)
     celebra que lo intentó, para no ligar todo el refuerzo positivo
     únicamente a la respuesta correcta (ver estudio de Stanford sobre
     motivación intrínseca vs. recompensas externas). */
  burstConfetti(26);
  showFeedback('wrong', pickRandom(PHRASES.wrong), q && q.hint);
  setTimeout(nextQuestion, FEEDBACK_TIMING.wrong.next);
}
function nextQuestion(){
  state.index++;
  if(state.index >= state.session.length){ finishSession(); return; }
  maybeShowMovementBreak(state.index, renderQuestion);
}

function finishSession(){
  stopTimer();
  stopBgMusic();
  const total = state.session.length;
  const stars = state.sessionStars;
  const perfect = stars === total;
  const finishedTheme = getTheme(state.themeId);
  resultCard.dataset.theme = state.themeId;
  setThemeColorVar(finishedTheme.color);

  const tp = progress.themes[state.themeId] || { status:'none', bestStars:0, attempts:0 };
  tp.attempts = (tp.attempts||0) + 1;
  tp.status = perfect ? 'completed' : 'incomplete';
  tp.bestStars = Math.max(tp.bestStars||0, stars);
  progress.themes[state.themeId] = tp;
  progress.totalStars = (progress.totalStars||0) + stars;
  saveProgress();

  resultTitle.textContent = perfect ? '¡Fantástico!' : '¡Buen intento!';
  resultMessage.textContent = perfect ? '¡Respondiste todo correctamente!' : 'Sigue practicando, ¡tú puedes lograrlo!';
  trophyEmoji.textContent = perfect ? '🏆' : '🎖️';
  resultMascot.innerHTML = AXOLOTL_CELEBRATE;
  resultScoreText.textContent = `${stars} de ${total} correctas`;
  renderStarsRow(resultStarsRow, total, 0);
  showScreen('resultScreen');
  /* La recompensa sonora especial (playwin.mp3) es solo para la sesión
     perfecta -el hito real-; un intento incompleto se queda con el
     jingle corto de siempre, para no repartir el mismo "gran premio"
     sonoro sin importar el resultado. */
  if(perfect) playWinSound(); else playTrophy();
  burstConfetti(220);
  animateResultStars(total, stars);
  renderHome();
}

function animateResultStars(total, stars){
  const slots = [...resultStarsRow.children];
  slots.forEach((el,i)=>{
    setTimeout(()=>{
      if(i<stars){ el.textContent='⭐'; el.classList.add('earned'); }
      else { el.textContent='☆'; }
    }, i*220);
  });
}

/* ============================================================
   TIPO: OPCIÓN MÚLTIPLE
   ============================================================ */
function renderMCQ(q){
  const grid = document.createElement('div');
  grid.className = 'mcq-grid';
  const entries = [];
  q.options.forEach(opt=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mcq-option';
    btn.innerHTML = (opt.emoji ? `<span class="opt-emoji" aria-hidden="true">${opt.emoji}</span>` : '') + `<span>${opt.text}</span>`;
    entries.push({ btn, opt });
    btn.addEventListener('click', ()=> handleMCQAnswer(opt, entries, q));
    grid.appendChild(btn);
  });
  answerArea.appendChild(grid);
  state.revealCorrect = ()=>{
    entries.forEach(e=> e.btn.disabled = true);
    const correctEntry = entries.find(e=>e.opt.ok);
    if(correctEntry) correctEntry.btn.classList.add('correct');
  };
}
function handleMCQAnswer(opt, entries, q){
  if(state.answered) return;
  state.answered = true;
  stopTimer();
  entries.forEach(e=> e.btn.disabled = true);
  if(opt.ok){
    entries.find(e=>e.opt===opt).btn.classList.add('correct');
    resolveCorrect();
  } else {
    entries.find(e=>e.opt===opt).btn.classList.add('wrong');
    const correctEntry = entries.find(e=>e.opt.ok);
    if(correctEntry) correctEntry.btn.classList.add('correct');
    resolveWrong(q);
  }
}

/* ============================================================
   TIPO: UNIR CONCEPTOS ARRASTRANDO (match, drag & drop)
   El niño arrastra cada icono (izquierda) hacia la tarjeta con
   el concepto correcto (derecha). Funciona con mouse, lápiz y
   dedo (Pointer Events), pensado para tablets.
   ============================================================ */
function renderMatch(q){
  const wrap = document.createElement('div');
  wrap.className = 'match-wrap';
  const colLeft = document.createElement('div'); colLeft.className = 'match-col drag-col';
  const colRight = document.createElement('div'); colRight.className = 'match-col drop-col';

  const iconItems = shuffle(q.pairs.map((p,i)=>Object.assign({}, p, { uid:i })));
  const uniqueLabels = shuffle([...new Set(q.pairs.map(p=>p.label))]);

  const zoneEls = {};
  const zoneIconRow = {};
  const zoneNeeded = {};
  const zoneFilled = {};

  uniqueLabels.forEach(label=>{
    zoneNeeded[label] = q.pairs.filter(p=>p.label===label).length;
    zoneFilled[label] = 0;
    const zone = document.createElement('div');
    zone.className = 'drop-zone';
    zone.dataset.label = label;
    zone.innerHTML = `<span class="drop-zone-label">${label}</span><span class="drop-zone-icons"></span>`;
    colRight.appendChild(zone);
    zoneEls[label] = zone;
    zoneIconRow[label] = zone.querySelector('.drop-zone-icons');
  });

  let matchedCount = 0;
  const totalCount = iconItems.length;
  const chipEntries = [];

  iconItems.forEach(item=>{
    const chip = document.createElement('div');
    chip.className = 'drag-icon';
    chip.innerHTML = `<span class="opt-emoji" aria-hidden="true">${item.visual}</span>`;
    /* Nombre accesible del propio dibujo (no de la categoría a la que
       pertenece, para no revelar la respuesta). Nota: este chip solo
       responde a eventos de puntero (arrastrar), así que aunque ya
       tiene nombre, todavía no es operable por teclado — pendiente
       aparte de este etiquetado. */
    chip.setAttribute('aria-label', emojiLabel(item.visual));
    colLeft.appendChild(chip);
    chipEntries.push({ chip, item });
    makeDraggable(chip, item);
  });

  function makeDraggable(chip, item){
    /* Los listeners de movimiento/soltar se enganchan en window (no en el
       propio icono) mientras dura el arrastre. Esto evita depender de
       setPointerCapture, que se puede perder al reinsertar el icono en
       document.body para que quede por encima de todo mientras se mueve. */
    let dragging = false, offsetX = 0, offsetY = 0, origParent = null, origNextSibling = null;

    function onMove(e){
      if(!dragging) return;
      chip.style.left = (e.clientX - offsetX) + 'px';
      chip.style.top = (e.clientY - offsetY) + 'px';
      Object.values(zoneEls).forEach(z=> z.classList.remove('drag-over'));
      const under = document.elementFromPoint(e.clientX, e.clientY);
      const zone = under && under.closest('.drop-zone');
      if(zone) zone.classList.add('drag-over');
    }

    function returnChip(){
      chip.style.position = ''; chip.style.left = ''; chip.style.top = '';
      chip.style.width = ''; chip.style.height = '';
      chip.style.pointerEvents = '';
      if(origNextSibling && origNextSibling.parentNode===origParent) origParent.insertBefore(chip, origNextSibling);
      else origParent.appendChild(chip);
    }

    function onUp(e){
      if(!dragging) return;
      dragging = false;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      chip.classList.remove('dragging');
      Object.values(zoneEls).forEach(z=> z.classList.remove('drag-over'));
      /* chip.style.pointerEvents sigue en 'none' aquí a propósito: así
         elementFromPoint detecta la zona debajo del icono, no el icono. */
      const under = document.elementFromPoint(e.clientX, e.clientY);
      const zone = under && under.closest('.drop-zone');

      if(zone && zone.dataset.label === item.label){
        chip.style.position = ''; chip.style.left = ''; chip.style.top = '';
        chip.style.width = ''; chip.style.height = '';
        chip.style.pointerEvents = '';
        zoneIconRow[item.label].appendChild(chip);
        chip.classList.add('placed');
        playClick();
        zoneFilled[item.label]++;
        if(zoneFilled[item.label] >= zoneNeeded[item.label]) zone.classList.add('zone-complete');
        matchedCount++;
        if(matchedCount >= totalCount){
          state.answered = true;
          stopTimer();
          resolveCorrect();
        }
      } else if(zone){
        zone.classList.add('wrongflash');
        playWrong();
        setTimeout(()=> zone.classList.remove('wrongflash'), 500);
        returnChip();
      } else {
        returnChip();
      }
    }

    chip.addEventListener('pointerdown', (e)=>{
      if(state.answered || chip.classList.contains('placed')) return;
      dragging = true;
      const rect = chip.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      origParent = chip.parentNode;
      origNextSibling = chip.nextSibling;
      chip.classList.add('dragging');
      chip.style.width = rect.width + 'px';
      chip.style.height = rect.height + 'px';
      document.body.appendChild(chip);
      chip.style.position = 'fixed';
      chip.style.left = rect.left + 'px';
      chip.style.top = rect.top + 'px';
      /* Clave: sin esto, el propio icono (que sigue al cursor) queda
         siempre encima y "elementFromPoint" nunca detecta la zona de
         abajo, así que ningún drop se reconocería. */
      chip.style.pointerEvents = 'none';
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);
      e.preventDefault();
    });
  }

  wrap.appendChild(colLeft);
  wrap.appendChild(colRight);
  answerArea.appendChild(wrap);

  state.revealCorrect = ()=>{
    chipEntries.forEach(({chip,item})=>{
      chip.style.pointerEvents = 'none';
      if(!chip.classList.contains('placed')){
        chip.style.position = ''; chip.style.left = ''; chip.style.top = '';
        chip.style.width = ''; chip.style.height = '';
        zoneIconRow[item.label].appendChild(chip);
        chip.classList.add('placed');
      }
    });
    Object.values(zoneEls).forEach(z=> z.classList.add('zone-complete'));
  };
}

/* ============================================================
   TIPO: ORDENAR SECUENCIA
   ============================================================ */
function renderOrder(q){
  const container = document.createElement('div');
  const slotsWrap = document.createElement('div'); slotsWrap.className = 'order-slots';
  const poolWrap = document.createElement('div'); poolWrap.className = 'order-pool';

  const slots = [];
  q.items.forEach((item,i)=>{
    const slot = document.createElement('div');
    slot.className = 'order-slot';
    slot.innerHTML = `<span class="slot-index">${i+1}</span>`;
    slotsWrap.appendChild(slot);
    slots.push(slot);
  });

  const poolItems = shuffle(q.items.map((item,i)=>Object.assign({}, item, { correctIndex:i })));
  let expected = 0;
  const cardEls = [];

  function revealAll(){
    cardEls.forEach(c=> c.disabled = true);
    q.items.forEach((it,i)=>{
      slots[i].innerHTML = `<span class="slot-index">${i+1}</span>` + it.visual;
      slots[i].classList.add('correctreveal');
    });
  }

  poolItems.forEach(item=>{
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'order-card';
    card.innerHTML = item.visual;
    card.setAttribute('aria-label', emojiLabel(item.visual));
    card.addEventListener('click', ()=>{
      if(state.answered || card.classList.contains('used')) return;
      if(item.correctIndex === expected){
        slots[expected].innerHTML = `<span class="slot-index">${expected+1}</span>` + item.visual;
        slots[expected].classList.add('filled');
        card.classList.add('used');
        playClick();
        expected++;
        if(expected >= q.items.length){
          state.answered = true;
          stopTimer();
          resolveCorrect();
        }
      } else {
        card.classList.add('wrongflash');
        playWrong();
        state.answered = true;
        stopTimer();
        revealAll();
        resolveWrong(q);
      }
    });
    cardEls.push(card);
    poolWrap.appendChild(card);
  });

  container.appendChild(slotsWrap);
  container.appendChild(poolWrap);
  answerArea.appendChild(container);
  state.revealCorrect = revealAll;
}

/* ============================================================
   TIPO: ESPERA / CONTROL INHIBITORIO (wait)
   El niño practica "anular la respuesta impulsiva": debe esperar
   a que la barra de calma se llene antes de poder continuar.
   Completar la espera siempre cuenta como logro (no hay fallo).
   ============================================================ */
function renderWait(q){
  const wrap = document.createElement('div');
  wrap.className = 'wait-wrap';
  wrap.innerHTML = `
    <div class="calm-bar-track"><div class="calm-bar-fill" id="calmBarFill"></div></div>
    <p class="wait-msg" id="waitMsg">${q.prompt2}</p>
    <button type="button" class="primary-btn big-btn wait-continue-btn" id="waitContinueBtn" disabled>✅ ¡Listo! Continuar</button>
  `;
  answerArea.appendChild(wrap);
  const fill = wrap.querySelector('#calmBarFill');
  const btn = wrap.querySelector('#waitContinueBtn');
  const msg = wrap.querySelector('#waitMsg');

  wrap.querySelector('.calm-bar-track').addEventListener('click', ()=>{
    if(!btn.disabled || state.answered) return;
    msg.textContent = 'Espera un poquito más 🌿';
    playClick();
  });

  requestAnimationFrame(()=>{
    fill.style.transition = `width ${q.calmMs}ms linear`;
    fill.style.width = '100%';
  });
  /* Si el niño ya esperó con calma pero se olvida de tocar "Continuar",
     la app avanza sola a los 7s en vez de dejarlo atascado esperando
     indefinidamente -misma lógica no punitiva que el resto del quiz:
     completar la espera ya es un logro, con o sin el toque final. */
  const WAIT_AUTO_ADVANCE_MS = 7000;
  let autoAdvanceTimer = null;
  const readyTimeout = setTimeout(()=>{
    btn.disabled = false;
    msg.textContent = '¡Muy bien esperando! Toca para continuar 🎉';
    autoAdvanceTimer = setTimeout(()=>{
      if(state.answered) return;
      state.answered = true;
      stopTimer();
      resolveCorrect();
    }, WAIT_AUTO_ADVANCE_MS);
  }, q.calmMs);

  btn.addEventListener('click', ()=>{
    if(state.answered || btn.disabled) return;
    clearTimeout(autoAdvanceTimer);
    state.answered = true;
    stopTimer();
    resolveCorrect();
  });

  state.revealCorrect = ()=>{
    clearTimeout(readyTimeout);
    clearTimeout(autoAdvanceTimer);
    btn.disabled = false;
  };
}

/* ============================================================
   TIPO: REGLA CAMBIANTE / FLEXIBILIDAD COGNITIVA (flexRule)
   Mismas tarjetas, la regla de qué tocar cambia a mitad de la
   pregunta: entrena adaptarse a un cambio de reglas inesperado.
   Cuando hay suficientes categorías, la última ronda se presenta
   como un "reto relámpago" ⚡: un cambio de regla final y breve
   que sigue trabajando el mismo concepto (flexibilidad cognitiva)
   pero se anuncia distinto para no sentirse repetitivo.
   ============================================================ */
function renderFlexRule(q){
  const wrap = document.createElement('div');
  wrap.className = 'flex-wrap';
  const banner = document.createElement('div');
  banner.className = 'flex-rule-banner';
  const grid = document.createElement('div');
  grid.className = 'flex-grid';
  wrap.appendChild(banner);
  wrap.appendChild(grid);
  answerArea.appendChild(wrap);

  const hasBonus = q.bonusRoundIndex >= 0;
  let roundIndex = 0;
  let bonusMissed = false; // si hubo algún toque erróneo durante el reto relámpago
  function currentLabel(){ return q.rounds[roundIndex]; }
  function isBonusRound(){ return hasBonus && roundIndex === q.bonusRoundIndex; }
  function updateBanner(){
    const bonus = isBonusRound();
    grid.classList.toggle('flex-grid-bonus', bonus);
    if(bonus){
      banner.innerHTML = `<span class="flex-rule-tag flex-rule-tag-bonus">⚡ Reto relámpago</span> ¡Última mezcla sorpresa! Toca: <b>${currentLabel()}</b>`;
      banner.classList.add('flex-rule-bonus');
      /* Aviso hablado también: es el mismo mecanismo (cambiar de regla),
         pero al anunciarlo aparte se siente como un cierre especial y
         breve, no como "una ronda más" igual a las anteriores. */
      speak('¡Reto relámpago! Cambia la regla una vez más.');
    } else {
      banner.innerHTML = `<span class="flex-rule-tag">Regla</span> Toca: <b>${currentLabel()}</b>`;
      banner.classList.remove('flex-rule-bonus');
    }
  }
  updateBanner();

  const cards = q.items.map(item=>{
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'flex-card';
    card.innerHTML = `<span class="opt-emoji" aria-hidden="true">${item.visual}</span>`;
    card.setAttribute('aria-label', emojiLabel(item.visual));
    card.addEventListener('click', ()=>{
      if(state.answered || card.classList.contains('done')) return;
      if(item.label === currentLabel()){
        card.classList.add('done');
        playClick();
        const remainingInRound = q.items.some(it=> it.label===currentLabel() && !cards.find(c=>c.item===it).card.classList.contains('done'));
        if(!remainingInRound){
          roundIndex++;
          if(roundIndex >= q.rounds.length){
            state.answered = true;
            stopTimer();
            const bonusClean = hasBonus && !bonusMissed;
            resolveCorrect(bonusClean ? pickRandom(FLEX_BONUS_PHRASES) : undefined);
          } else {
            banner.classList.add('flex-rule-change');
            setTimeout(()=> banner.classList.remove('flex-rule-change'), 700);
            updateBanner();
          }
        }
      } else {
        if(isBonusRound()) bonusMissed = true;
        card.classList.add('wrongflash');
        playWrong();
        setTimeout(()=> card.classList.remove('wrongflash'), 500);
      }
    });
    grid.appendChild(card);
    return { card, item };
  });

  state.revealCorrect = ()=>{
    cards.forEach(c=> c.card.disabled = true);
  };
}

/* ============================================================
   TIPO: ACTIVIDAD CRA (Concreto → Representativo → Abstracto)
   Enseña un concepto complejo en 3 fases en vez de solo dar la
   definición de entrada (método prescrito para conceptos difíciles):
     Fase 1 (concreto): clasificar objetos cotidianos y reconocibles,
       tocándolos uno por uno (primero se "levanta" el objeto, luego
       se toca la categoría — un solo toque a la vez, sin arrastre,
       para que sea operable también con dificultades motoras finas).
     Fase 2 (representativo): una imagen que conecta lo recién
       clasificado con la idea abstracta que sigue (aquí, un rastro
       de huellas por cada cosa que se compartió).
     Fase 3 (abstracto): el término y su definición, mostrados Y
       dichos en voz alta.
   Solo al completar las 3 fases se resuelve la pregunta — no hay
   temporizador (ver renderQuestion/startTimer) para no apurar la
   comprensión.
   ============================================================ */
function renderCRA(q){
  const wrap = document.createElement('div');
  wrap.className = 'cra-wrap';
  answerArea.appendChild(wrap);

  let selected = null;
  let sortedCount = 0;
  const total = q.concreteItems.length;

  function renderPhase1(){
    wrap.innerHTML = '';
    selected = null;
    const phaseLabel = document.createElement('p');
    phaseLabel.className = 'cra-phase-label';
    phaseLabel.textContent = '🖐️ Toca cada cosa y luego toca dónde va';
    wrap.appendChild(phaseLabel);

    const pool = document.createElement('div');
    pool.className = 'cra-item-pool';
    wrap.appendChild(pool);

    const zones = document.createElement('div');
    zones.className = 'cra-zones';
    const shareZone = document.createElement('button');
    shareZone.type = 'button';
    shareZone.className = 'cra-zone cra-zone-share';
    shareZone.innerHTML = '<span class="cra-zone-icon" aria-hidden="true">✅</span><span>Puedo compartir</span>';
    const protectZone = document.createElement('button');
    protectZone.type = 'button';
    protectZone.className = 'cra-zone cra-zone-protect';
    protectZone.innerHTML = '<span class="cra-zone-icon" aria-hidden="true">🛡️</span><span>Debo cuidar</span>';
    zones.appendChild(shareZone);
    zones.appendChild(protectZone);
    wrap.appendChild(zones);

    const itemEls = q.concreteItems.map(item=>{
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cra-item';
      btn.innerHTML = `<span class="cra-item-emoji" aria-hidden="true">${item.visual}</span><span>${item.label}</span>`;
      btn.addEventListener('click', ()=>{
        if(state.answered || btn.classList.contains('sorted')) return;
        if(btn.classList.contains('selected')){
          btn.classList.remove('selected');
          selected = null;
          return;
        }
        itemEls.forEach(e=> e.classList.remove('selected'));
        btn.classList.add('selected');
        selected = { item, btn };
        playClick();
      });
      pool.appendChild(btn);
      return btn;
    });

    function tryZone(zone, isShareZone){
      if(state.answered) return;
      if(!selected){
        zone.classList.add('wrongflash');
        setTimeout(()=> zone.classList.remove('wrongflash'), 400);
        return;
      }
      if(selected.item.share === isShareZone){
        selected.btn.classList.remove('selected');
        selected.btn.classList.add('sorted');
        selected.btn.disabled = true;
        playClick();
        sortedCount++;
        selected = null;
        if(sortedCount >= total) setTimeout(renderPhase2, 500);
      } else {
        zone.classList.add('wrongflash');
        playWrong();
        setTimeout(()=> zone.classList.remove('wrongflash'), 500);
      }
    }
    shareZone.addEventListener('click', ()=> tryZone(shareZone, true));
    protectZone.addEventListener('click', ()=> tryZone(protectZone, false));

    state.revealCorrect = ()=>{
      itemEls.forEach(e=> e.disabled = true);
      shareZone.disabled = true;
      protectZone.disabled = true;
    };
  }

  function renderPhase2(){
    wrap.innerHTML = '';
    const phaseLabel = document.createElement('p');
    phaseLabel.className = 'cra-phase-label';
    phaseLabel.textContent = '👀 Mira lo que pasa cuando compartes';
    wrap.appendChild(phaseLabel);

    const shared = q.concreteItems.filter(i=> i.share);
    const trail = document.createElement('div');
    trail.className = 'cra-trail';
    shared.forEach((item,i)=>{
      const step = document.createElement('span');
      step.className = 'cra-footprint';
      step.style.animationDelay = (i*0.3)+'s';
      step.setAttribute('aria-hidden','true');
      step.textContent = '👣';
      trail.appendChild(step);
    });
    wrap.appendChild(trail);

    const note = document.createElement('p');
    note.className = 'cra-note';
    note.textContent = 'Cada vez que compartes algo, dejas una pequeña huella en internet. Lo que guardaste con el escudo 🛡️ se queda seguro y no deja huella.';
    wrap.appendChild(note);
    speakEl(note);

    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'primary-btn cra-continue-btn';
    nextBtn.textContent = 'Ver qué significa →';
    nextBtn.addEventListener('click', renderPhase3);
    wrap.appendChild(nextBtn);

    state.revealCorrect = ()=>{ nextBtn.disabled = true; };
  }

  function renderPhase3(){
    wrap.innerHTML = '';
    const phaseLabel = document.createElement('p');
    phaseLabel.className = 'cra-phase-label';
    phaseLabel.textContent = '💡 Ahora ya lo sabes';
    wrap.appendChild(phaseLabel);

    const card = document.createElement('div');
    card.className = 'cra-abstract-card';
    card.innerHTML = `
      <span class="cra-abstract-icon" aria-hidden="true">${q.abstractIcon}</span>
      <h3>${q.abstractTerm}</h3>
      <p>${q.abstractDef}</p>
    `;
    wrap.appendChild(card);
    speakEl(card);

    const doneBtn = document.createElement('button');
    doneBtn.type = 'button';
    doneBtn.className = 'primary-btn cra-continue-btn';
    doneBtn.textContent = '¡Ya entendí! 🎉';
    doneBtn.addEventListener('click', ()=>{
      if(state.answered) return;
      state.answered = true;
      stopTimer();
      resolveCorrect(`¡Ahora entiendes tu "${q.abstractTerm}"! 🎉`);
    });
    wrap.appendChild(doneBtn);

    state.revealCorrect = ()=>{ doneBtn.disabled = true; };
  }

  renderPhase1();
}

/* ============================================================
   INICIO
   ============================================================ */
/* showScreen('homeScreen') ya intenta arrancar el jingle en bucle, pero
   ese primer intento -antes de cualquier toque del usuario- casi
   siempre lo bloqueará la política de autoplay del navegador. Este
   listener de "primer click" es el respaldo: reintenta el jingle solo
   si el niño sigue en el inicio (si su primer toque ya fue sobre un
   tema, showScreen ya cambió de pantalla y no debe sonar). */
document.addEventListener('click', ()=>{
  ensureAudio();
  if(homeScreen.classList.contains('active')) startIntroLoop();
}, { once:true });
syncSettingsUI();
renderHome();
showScreen('homeScreen');
