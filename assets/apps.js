// Apps shown in the catalog and on app.html?id=<id>. Versions, dates and news are NOT here:
// app.html reads them live from GitHub (updates/A.json and B.json, or the latest commits).
// Screenshots live in assets/apps/<id>/.
window.INHOUSE_APPS = [
 {
  "id": "youtube",
  "pre": "inhouse",
  "name": "youtube",
  "full": "Inhouse YouTube",
  "repo": "youtube-calma",
  "apk": true,
  "platforms": [
   "Android"
  ],
  "bg": "#fff4f3",
  "fg": "#492020",
  "icon": {
   "img": "assets/inhouse-youtube.png"
  },
  "url": "",
  "tag": "Sin Shorts",
  "lead": "YouTube con tus suscripciones y nada más.",
  "desc": [
   "Es la app de YouTube de siempre, con su reproductor y sus ajustes, pero sin la pestaña de Inicio. Al abrirla vas directo a Suscripciones.",
   "Los Shorts desaparecen de todas partes: canales, búsqueda, historial y descripción. Debajo de cada vídeo siguen la descripción y los comentarios, pero ya no hay una lista de vídeos recomendados tirando de ti.",
   "Lleva microG dentro, así que no hay que instalar nada más. Pide Android 14 o posterior."
  ],
  "orientation": "portrait",
  "shots": [],
  "facts": {
   "Necesita": "Android 14 o posterior",
   "Basada en": "YouTube ReVanced"
  }
 },
 {
  "id": "instagram",
  "pre": "inhouse",
  "name": "instagram",
  "full": "Inhouse Instagram",
  "repo": "ig-calma",
  "apk": true,
  "platforms": [
   "Android"
  ],
  "bg": "#fff1f8",
  "fg": "#54213f",
  "icon": {
   "img": "assets/inhouse-instagram.png"
  },
  "url": "",
  "tag": "Solo a quien sigues",
  "lead": "Un feed de quienes sigues, que se acaba.",
  "desc": [
   "Abre en Following: las publicaciones de las últimas 48 horas de las cuentas que sigues, de la más nueva a la más antigua. Cuando las has visto todas, el feed termina con un «That's it».",
   "El feed del algoritmo sigue ahí, pero bloqueado. Ganas un minuto por cada hora y decides en los ajustes cuántos. Los anuncios se filtran del feed, de las historias y de Explorar.",
   "Historias, mensajes y vídeos funcionan como en la app normal, y puede convivir con el Instagram oficial."
  ],
  "orientation": "portrait",
  "shots": [],
  "facts": {
   "Necesita": "Android 9 o posterior (ARM64)"
  }
 },
 {
  "id": "notes",
  "full": "Inhouse Notes",
  "url": "https://miguelcoxcaballero.github.io/inhousenotes/",
  "redirect": true
 },
 {
  "id": "read",
  "full": "Inhouse Read",
  "url": "https://miguelcoxcaballero.github.io/inhouse-read/",
  "redirect": true
 },
 {
  "id": "photos",
  "pre": "inhouse",
  "name": "photos",
  "full": "Inhouse Photos",
  "repo": "Inhouse-Photos",
  "apk": true,
  "platforms": [
   "Android",
   "iOS",
   "Web",
   "Windows"
  ],
  "bg": "#fff5ef",
  "fg": "#4a2a17",
  "icon": {
   "img": "assets/inhouse-photos.png"
  },
  "url": "https://fotos.miguelcoxcaballero.com/descargas/",
  "tag": "Tu nube de fotos",
  "lead": "Tus fotos en tu ordenador, no en la nube de otro.",
  "desc": [
   "Instalas el servidor en un ordenador con Windows y ahí se guardan tus fotos y vídeos. Desde el móvil o desde el navegador las ves y haces copia de las nuevas.",
   "Para conectar el móvil escaneas un código QR que muestra el ordenador y compruebas que el número de seis cifras coincide. Si ya tenías una biblioteca, se conecta sin mover las fotos de sitio.",
   "El ordenador tiene que estar encendido para verlas desde fuera de casa."
  ],
  "orientation": "portrait",
  "shots": [],
  "facts": {
   "Necesita": "Un PC con Windows 10 u 11"
  },
  "openLabel": "Página de descargas"
 },
 {
  "id": "learn",
  "pre": "inhouse",
  "name": "learn",
  "full": "Inhouse Learn",
  "repo": "inhouselearn",
  "apk": true,
  "platforms": [
   "Web",
   "Android"
  ],
  "bg": "#fff8e6",
  "fg": "#4a3306",
  "icon": {
   "img": "assets/inhouse-learn.png"
  },
  "url": "https://miguelcoxcaballero.github.io/inhouselearn/",
  "tag": "Tutor con IA",
  "lead": "Un tutor que explica, dibuja y te pregunta.",
  "desc": [
   "Le dices qué quieres aprender y te lo explica, con calma y a tu nivel. Cuando algo se entiende mejor viéndolo, te pone una gráfica, una simulación o un ejercicio que puedes tocar ahí mismo.",
   "Si quieres ir en serio, activa Guided Learning: te prepara un plan por lecciones, te hace un mini test al final de cada una y termina con un examen.",
   "Usa tu propia clave de OpenRouter, así que eliges el modelo y pagas solo lo que gastes. Tus chats se guardan en tu Google Drive."
  ],
  "orientation": "portrait",
  "shots": [
   [
    "01.webp",
    "Empieza con una pregunta"
   ],
   [
    "02.webp",
    "Explicaciones claras"
   ],
   [
    "03.webp",
    "Gráficas que se mueven"
   ],
   [
    "04.webp",
    "Tarjetas para repasar"
   ],
   [
    "05.webp",
    "Simulaciones"
   ],
   [
    "06.webp",
    "Física en vivo"
   ],
   [
    "07.webp",
    "Ejercicios variados"
   ],
   [
    "08.webp",
    "Un plan a tu medida"
   ],
   [
    "09.webp",
    "Mini tests"
   ],
   [
    "10.webp",
    "Elige el modelo"
   ]
  ],
  "facts": {
   "Idioma": "Español",
   "Necesita": "Clave de OpenRouter"
  }
 },
 {
  "id": "sakai",
  "pre": "",
  "name": "Nueva interfaz para Sakai",
  "full": "Nueva interfaz para Sakai",
  "repo": "sakai-nueva-interfaz",
  "apk": false,
  "platforms": [
   "Chrome"
  ],
  "bg": "#eef6ff",
  "fg": "#183a66",
  "icon": {
   "img": "assets/sakai-icon.png"
  },
  "url": "https://chromewebstore.google.com/detail/nueva-interfaz-para-sakai/fnpheogcbbdkfpkinpackdgmbjfnjhga",
  "tag": "Sakai como Classroom",
  "lead": "Tu aula Sakai con el aspecto de Google Classroom.",
  "desc": [
   "Es una extensión que cambia la cara de PoliformaT, del Aula Virtual de la UM y de otras aulas hechas con Sakai. Entras como siempre y ves tus asignaturas en tarjetas, con lo que hay que entregar esa semana.",
   "Cada asignatura tiene tablón, trabajo de clase, personas y calificaciones con tu media. Hay una lista de pendientes y un calendario semanal de todas las clases. Puedes marcar favoritas, ordenarlas y cambiarles el color, y con un interruptor vuelves a la vista original cuando quieras."
  ],
  "orientation": "landscape",
  "shots": [
   [
    "01.webp",
    "Tus asignaturas"
   ],
   [
    "02.webp",
    "Tablón"
   ],
   [
    "03.webp",
    "Trabajo de clase"
   ],
   [
    "04.webp",
    "Personas"
   ],
   [
    "05.webp",
    "Tus notas"
   ],
   [
    "06.webp",
    "Pendientes"
   ],
   [
    "07.webp",
    "Calendario semanal"
   ],
   [
    "08.webp",
    "Editar favoritas"
   ],
   [
    "09.webp",
    "Color de la asignatura"
   ],
   [
    "10.webp",
    "Menú plegado"
   ]
  ],
  "facts": {
   "Idioma": "Español",
   "Necesita": "Cuenta en un aula Sakai"
  },
  "openLabel": "Ver en Chrome Web Store",
  "manifest": "poliformat-classroom/manifest.json"
 },
 {
  "id": "jobs",
  "pre": "inhouse",
  "name": "jobs",
  "full": "Inhouse Jobs",
  "repo": "inhouse-jobs",
  "apk": false,
  "platforms": [
   "Web"
  ],
  "bg": "#eef5ff",
  "fg": "#183a66",
  "icon": {
   "sym": "work",
   "bg": "#ffffff",
   "fg": "#3269ae"
  },
  "url": "https://miguelcoxcaballero.github.io/inhouse-jobs/",
  "tag": "Busca trabajo con orden",
  "lead": "Busca ofertas y lleva el control de tus candidaturas.",
  "desc": [
   "Junta ofertas de varias webs de empleo en una misma lista, sobre todo de España, Reino Unido y trabajo en remoto. Buscas por puesto o ciudad y filtras por modalidad, país, contrato o fecha de publicación.",
   "Las ofertas que te interesan las guardas, o las vas pasando de una en una en el modo swipe. Al pulsar Solicitar te prepara la candidatura con tus datos, y luego apuntas en Actividad si la enviaste o tienes entrevista. Tu perfil se queda guardado solo en tu dispositivo."
  ],
  "orientation": "portrait",
  "shots": [
   [
    "01.webp",
    "Pantalla de búsqueda"
   ],
   [
    "02.webp",
    "Resultados filtrados"
   ],
   [
    "03.webp",
    "Filtros"
   ],
   [
    "04.webp",
    "Detalle de la oferta"
   ],
   [
    "05.webp",
    "Preparar candidatura"
   ],
   [
    "06.webp",
    "Modo swipe"
   ],
   [
    "07.webp",
    "Tus guardados"
   ],
   [
    "08.webp",
    "Estado de candidaturas"
   ],
   [
    "09.webp",
    "Tu perfil"
   ],
   [
    "10.webp",
    "Modo oscuro"
   ]
  ],
  "facts": {
   "Idioma": "Español e inglés"
  }
 },
 {
  "id": "vidmaker",
  "pre": "inhouse",
  "name": "vidmaker",
  "full": "Inhouse Vidmaker",
  "repo": "inhouse-vidmaker",
  "apk": false,
  "platforms": [
   "Web"
  ],
  "bg": "#f8f1ff",
  "fg": "#4a2a60",
  "icon": {
   "sym": "movie_edit",
   "bg": "#ffffff",
   "fg": "#8856aa"
  },
  "url": "https://miguelcoxcaballero.github.io/inhouse-vidmaker/",
  "tag": "Vídeo desde el navegador",
  "lead": "Monta vídeos en el navegador y guárdalos en tu Drive.",
  "desc": [
   "Es un editor de vídeo que se abre en el navegador. Cada proyecto es una carpeta en tu Google Drive y se va guardando mientras editas.",
   "Subes vídeos, fotos y audio, los arrastras a la línea de tiempo y los repartes en pistas de texto, vídeo y audio. Desde el inspector cambias la escala, la posición, el encuadre, la velocidad o la transición de cada clip, y añades títulos con su tipografía, tamaño y color. Cuando acabas, lo exportas a MP4."
  ],
  "orientation": "landscape",
  "shots": [
   [
    "01.webp",
    "Tus proyectos"
   ],
   [
    "02.webp",
    "Nuevo proyecto"
   ],
   [
    "03.webp",
    "Archivos subidos"
   ],
   [
    "04.webp",
    "Texto sobre vídeo"
   ],
   [
    "05.webp",
    "Escala del clip"
   ],
   [
    "06.webp",
    "Transiciones"
   ],
   [
    "07.webp",
    "Vista de lista"
   ],
   [
    "08.webp",
    "Modo noche"
   ],
   [
    "09.webp",
    "Menú del proyecto"
   ],
   [
    "10.webp",
    "Inicio en oscuro"
   ]
  ],
  "facts": {
   "Idioma": "Español",
   "Necesita": "Cuenta de Google"
  }
 },
 {
  "id": "math",
  "pre": "inhouse",
  "name": "math playground",
  "full": "Inhouse Math Playground",
  "repo": "inhouse-math-playground",
  "apk": false,
  "platforms": [
   "Web"
  ],
  "bg": "#fff6e8",
  "fg": "#654313",
  "icon": {
   "sym": "functions",
   "bg": "#ffffff",
   "fg": "#b77b24"
  },
  "url": "https://htmlpreview.github.io/?https://github.com/miguelcoxcaballero/inhouse-math-playground/blob/main/inhouse-math-playground.html",
  "tag": "Mates que se ven",
  "lead": "Deforma una imagen con log(z) y mira lo que pasa.",
  "desc": [
   "Es un pequeño banco de pruebas para ver qué le pasa a una imagen cuando le aplicas el logaritmo complejo. A la izquierda está la imagen plana y a la derecha la versión deformada, que se enrosca en espiral alrededor del centro.",
   "Arrastras la flecha azul para cambiar el valor de c y el dibujo cambia al momento. Puedes subir tu propia imagen, ajustar cuántas veces se repite el zoom o hacer el camino contrario, de la imagen deformada al plano, girando y ampliando el resultado."
  ],
  "orientation": "landscape",
  "shots": [
   [
    "01.webp",
    "Inicio"
   ],
   [
    "02.webp",
    "Cuadrícula base"
   ],
   [
    "03.webp",
    "Mover la flecha"
   ],
   [
    "04.webp",
    "Menos repeticiones"
   ],
   [
    "05.webp",
    "Tu propia imagen"
   ],
   [
    "06.webp",
    "Otro valor de c"
   ],
   [
    "07.webp",
    "Zoom repetido"
   ],
   [
    "08.webp",
    "De warp a plano"
   ],
   [
    "09.webp",
    "Girar y ampliar"
   ],
   [
    "10.webp",
    "Cambiar c"
   ]
  ],
  "facts": {
   "Idioma": "Español"
  }
 },
 {
  "id": "apkbuilder",
  "full": "Inhouse APK Builder",
  "url": "https://github.com/miguelcoxcaballero/inhouse-apkbuilder",
  "redirect": true
 },
 {
  "id": "scanner",
  "full": "Scanner",
  "url": "https://raw.githack.com/miguelcoxcaballero/scan/main/index.html",
  "redirect": true
 },
 {
  "id": "wonderxam",
  "full": "Wonderxam",
  "url": "https://github.com/miguelcoxcaballero/wonderxam",
  "redirect": true
 },
 {
  "id": "metro",
  "pre": "",
  "name": "Metro Studio",
  "full": "Metro Studio",
  "repo": "metro-studio",
  "apk": false,
  "platforms": [
   "Web"
  ],
  "bg": "#eef4ff",
  "fg": "#123a7a",
  "icon": {
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M17.8 4.8C16.07 3.74 14.12 3.5 12 3.5c-2.12 0-4.07.24-5.8 1.3C4.24 6.03 3.5 8.05 3.5 10.5v6c0 2.56 1.92 4.67 4.41 4.95L6.5 23h11l-1.41-1.55c2.49-.28 4.41-2.39 4.41-4.95v-6c0-2.45-.74-4.47-2.7-5.7zM7.5 17.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11-6.5h-13V8h13v3zm-2 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"/></svg>",
   "bg": "#ffffff",
   "fg": "#1a73e8"
  },
  "url": "https://raw.githack.com/miguelcoxcaballero/metro-studio/main/metro.html",
  "tag": "Dibuja planos de metro",
  "lead": "Haz el plano de metro de tu ciudad inventada.",
  "desc": [
   "Haces clic en la cuadrícula para poner estaciones y arrastras de una a otra para trazar una línea. Las líneas van en rectas y diagonales, como en los planos de verdad.",
   "Al tocar una estación le pones nombre y eliges cómo se ve y con qué letra. Las líneas se renombran desde el panel de abajo, y para alargar una tiras de su extremo.",
   "No se guarda solo: exporta el plano como SVG y vuelve a importarlo para seguir otro día."
  ],
  "orientation": "landscape",
  "shots": [
   [
    "01.webp",
    "Tu plano"
   ],
   [
    "02.webp",
    "Pon estaciones"
   ],
   [
    "03.webp",
    "Traza una línea"
   ],
   [
    "04.webp",
    "Primera línea"
   ],
   [
    "05.webp",
    "Varias líneas"
   ],
   [
    "06.webp",
    "Nombra la estación"
   ],
   [
    "07.webp",
    "Estilo y letra"
   ],
   [
    "08.webp",
    "Renombra la línea"
   ],
   [
    "09.webp",
    "Alarga una línea"
   ],
   [
    "10.webp",
    "Acerca el plano"
   ]
  ],
  "facts": {
   "Idioma": "Inglés"
  }
 },
 {
  "id": "maps",
  "full": "Maps",
  "url": "https://github.com/miguelcoxcaballero/maps",
  "redirect": true
 },
 {
  "id": "typetest",
  "pre": "",
  "name": "TypeTest",
  "full": "TypeTest",
  "repo": "TypeTest",
  "apk": false,
  "platforms": [
   "Web"
  ],
  "bg": "#141414",
  "fg": "#66BB6A",
  "icon": {
   "sym": "keyboard_alt",
   "bg": "#141414",
   "fg": "#66BB6A"
  },
  "url": "https://raw.githack.com/miguelcoxcaballero/TypeTest/main/TypeTest.html",
  "tag": "Mide cómo tecleas",
  "lead": "Pruebas de mecanografía de 30 segundos.",
  "desc": [
   "Tiene dos modos. En el de escritura copias un texto de palabras sueltas durante 30 segundos y ves al momento las pulsaciones por minuto y la precisión. Los fallos se marcan en rojo y la barra de tiempo cambia de color al final.",
   "En el modo de caracteres va saliendo una letra cada vez y te dice tus palabras por minuto y caracteres por segundo. Puedes quitar los números si solo quieres practicar letras. Las palabras del texto están en inglés."
  ],
  "orientation": "landscape",
  "shots": [
   [
    "01.webp",
    "Elige un modo"
   ],
   [
    "02.webp",
    "Texto preparado"
   ],
   [
    "03.webp",
    "Escribiendo"
   ],
   [
    "04.webp",
    "Un fallo marcado"
   ],
   [
    "05.webp",
    "Últimos segundos"
   ],
   [
    "06.webp",
    "Se acaba el tiempo"
   ],
   [
    "07.webp",
    "Tu resultado"
   ],
   [
    "08.webp",
    "Modo caracteres"
   ],
   [
    "09.webp",
    "Letra a letra"
   ],
   [
    "10.webp",
    "Sin números"
   ]
  ],
  "facts": {
   "Idioma": "Inglés"
  },
  "dark": true
 },
 {
  "id": "eggtimer",
  "full": "Egg Timer",
  "url": "https://raw.githack.com/miguelcoxcaballero/eggtimer/main/egg.html",
  "redirect": true
 },
 {
  "id": "politraumat",
  "pre": "",
  "name": "politraumat",
  "full": "politraumat",
  "repo": "politraumat",
  "apk": false,
  "platforms": [
   "Web"
  ],
  "bg": "#0b0f14",
  "fg": "#e8ecf1",
  "icon": {
   "sym": "style",
   "bg": "#0b0f14",
   "fg": "#e8ecf1"
  },
  "url": "https://raw.githack.com/miguelcoxcaballero/politraumat/main/politraumat.html",
  "tag": "Tarjetas para estudiar",
  "lead": "Repasa con tarjetas y desliza para puntuarte.",
  "desc": [
   "Cargas tu baraja desde un CSV o un JSON, o la pegas como texto, y te va sacando las tarjetas una a una. Tocas para ver el reverso y deslizas hacia un lado según lo bien que te la sabías: otra vez, difícil, bien o fácil.",
   "Arriba ves cuántas te quedan, cuántas llevas y cuántas ya dominas. Si prefieres escribir la respuesta, el modo completa te la corrige. El progreso se guarda en el navegador y lo puedes exportar."
  ],
  "orientation": "portrait",
  "shots": [
   [
    "01.webp",
    "Una tarjeta"
   ],
   [
    "02.webp",
    "El reverso"
   ],
   [
    "03.webp",
    "Desliza: fácil"
   ],
   [
    "04.webp",
    "Desliza: otra vez"
   ],
   [
    "05.webp",
    "Tu progreso"
   ],
   [
    "06.webp",
    "Ajustes de sesión"
   ],
   [
    "07.webp",
    "Escribe la respuesta"
   ],
   [
    "08.webp",
    "Respuesta correcta"
   ],
   [
    "09.webp",
    "Respuesta incorrecta"
   ],
   [
    "10.webp",
    "Pega tu baraja"
   ]
  ],
  "facts": {
   "Idioma": "Español"
  },
  "dark": true
 },
 {
  "id": "rendezplan",
  "pre": "",
  "name": "RendezPlan",
  "full": "RendezPlan",
  "repo": "RendezPlan",
  "apk": false,
  "platforms": [
   "Web"
  ],
  "bg": "#effbf3",
  "fg": "#14532d",
  "icon": {
   "sym": "bolt",
   "bg": "#16a34a",
   "fg": "#ffffff"
  },
  "url": "https://raw.githack.com/miguelcoxcaballero/RendezPlan/main/main.html",
  "tag": "Comparte cuándo puedes",
  "lead": "Marca tus horas libres y pásalas por chat.",
  "desc": [
   "Es una semana dividida en medias horas. Arrastras el ratón por las horas en las que puedes quedar y se quedan en verde. Con un botón copias el horario como texto, listo para pegarlo en un chat, y con otro lo pegas en la semana siguiente si se repite.",
   "La vista de mes te enseña de un vistazo qué días tienes huecos. También puedes elegir tu zona horaria, mover la línea del mediodía y sacar un PDF con tu disponibilidad."
  ],
  "orientation": "landscape",
  "shots": [
   [
    "01.webp",
    "Tu semana"
   ],
   [
    "02.webp",
    "Arrastra para marcar"
   ],
   [
    "03.webp",
    "Semana copiada"
   ],
   [
    "04.webp",
    "Pegada en otra semana"
   ],
   [
    "05.webp",
    "Vista de mes"
   ],
   [
    "06.webp",
    "Elige continente"
   ],
   [
    "07.webp",
    "Zona horaria"
   ],
   [
    "08.webp",
    "Zona cambiada"
   ],
   [
    "09.webp",
    "Borrar la semana"
   ],
   [
    "10.webp",
    "Semana vacía"
   ]
  ],
  "facts": {
   "Idioma": "Español"
  }
 },
 {
  "id": "speedread",
  "pre": "",
  "name": "SpeedRead",
  "full": "SpeedRead",
  "repo": "speedread",
  "apk": false,
  "platforms": [
   "Web"
  ],
  "bg": "#1a1a1a",
  "fg": "#ff90e8",
  "icon": {
   "sym": "speed",
   "bg": "#1a1a1a",
   "fg": "#ff90e8"
  },
  "url": "https://raw.githack.com/miguelcoxcaballero/speedread/main/index.html",
  "tag": "Lee PDFs más rápido",
  "lead": "Lee un PDF palabra a palabra a tu ritmo.",
  "desc": [
   "Abres un PDF y te lo va mostrando palabra a palabra en el centro, a las palabras por minuto que elijas. A la izquierda ves la página con la frase que vas leyendo resaltada, para no perderte.",
   "Puedes mostrar varias palabras a la vez, cambiar la letra y el tamaño, pasar a una vista de solo texto y alternar entre modo claro y oscuro. Con la barra de progreso saltas a cualquier punto del documento."
  ],
  "orientation": "landscape",
  "shots": [
   [
    "01.webp",
    "Leyendo"
   ],
   [
    "02.webp",
    "Abre un PDF"
   ],
   [
    "03.webp",
    "PDF cargado"
   ],
   [
    "04.webp",
    "Tres palabras"
   ],
   [
    "05.webp",
    "Solo texto"
   ],
   [
    "06.webp",
    "Otra letra"
   ],
   [
    "07.webp",
    "Modo claro"
   ],
   [
    "08.webp",
    "Página en claro"
   ],
   [
    "09.webp",
    "Salta y acelera"
   ],
   [
    "10.webp",
    "En pausa"
   ]
  ],
  "facts": {
   "Idioma": "Inglés",
   "Necesita": "Un archivo PDF"
  },
  "dark": true
 }
];
