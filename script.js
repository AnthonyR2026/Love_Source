// Base de datos de canciones
const SONGS_DATABASE = {
  heather: {
    title: "Heather",
    artist: "Conan Gray",
    dedication:
      "Esta cancion te la dedique ya que decia perfectamente la manera que me sentia cuando era alguien mas quien estaba contigo...",
    youtubeId: "24u3NoPvgMw",
    duration: "3:25",
    year: "2020",
  },
  line_without_a_hook: {
    title: "Line Without a Hook",
    artist: "Ricky Montgomery",
    dedication:
      "Cuando pienso en mis sentimientos, esta canción siempre resuena en mi corazón. ya que es lo que me gustaria decirte esto cada vez que la escucho.",
    youtubeId: "8JW6qzPCkE8",
    duration: "4:09",
    year: "2020",
  },
  golden_hour: {
    title: "golden hour",
    artist: "JVKE",
    dedication: "Las horas contigo resuenan así. Horas doradas en mi corazón.",
    youtubeId: "PEM0Vs8jf1w",
    duration: "3:51",
    year: "2022",
  },
  this_is_what_falling_in_love_feels_like: {
    title: "this is what falling in love feels like",
    artist: "JVKE",
    dedication: "Tu y yo estamos enamorados. Eso nos complementa perfectamente",
    youtubeId: "BOyO8sZOaOQ",
    duration: "2:34",
    year: "2021",
  },
  catorce: {
    title: "Catorce",
    artist: "Sebastian Romero",
    dedication: "Lo intentamos y lo estamos logrando. Cada día es un paso más hacia nuestro sueño.",
    youtubeId: "qqZGQPukZ-0",
    duration: "3:44",
    year: "2019",
  },
  me_gustas: {
    title: "Me Gustas",
    artist: "TIMØ",
    dedication: "Cancion que demuestra mi duda inicial y luego muestra donde me atrevi a decirte TE AMO",
    youtubeId: "qzh0F1ey-bI",
    duration: "3:03",
    year: "2020",
  },
  llegaste_a_mi: {
    title: "Llegaste a Mí",
    artist: "LÚA",
    dedication: "Palabras que queria decir apenas tuve la oportunidad de iniciar todo contigo",
    youtubeId: "sLpqWO0QvyQ",
    duration: "2:22",
    year: "2020",
  },
  sol: {
    title: "Sol",
    artist: "Claudio Matta",
    dedication: "Palabras lindas como tu. Siempre iluminas mis días. y esta cancion te la dedique por eso mismo",
    youtubeId: "Ns0tIIXoZhg",
    duration: "3:03",
    year: "2021",
  },
  quererte: {
    title: "Quererte",
    artist: "Pastrana, Chava Salazar",
    dedication: "Una forma graciosa y distinta de decirte lo mucho que te amo",
    youtubeId: "lfA_mhMwjRM",
    duration: "3:24",
    year: "2020",
  },
  a_la_mera_hora: {
    title: "A La Mera Hora",
    artist: "Giorgio Siladi",
    dedication: "Refleja mi duda y miedo a que te fueras de mi lado luego de enamorarme tan perdidamente",
    youtubeId: "_3tRXQvict4",
    duration: "3:20",
    year: "2020",
  },
  lo_que_siento: {
    title: "Lo Que Siento",
    artist: "CUCO",
    dedication: "La manera mas tranquila y bonita de decirte lo mucho que te quiero y que te e querido",
    youtubeId: "AjGkbFqi67c",
    duration: "5:12",
    year: "2018",
  },
  tus_ojitos: {
    title: "Tus Ojitos",
    artist: "Samanez",
    dedication: "Palabras calidas que al escuchar sabia que te encantarían ya que tus ojos son mi luz de vida",
    youtubeId: "ZbjWXcMwJ_k",
    duration: "4:15",
    year: "2021",
  },
  amor_viral: {
    title: "Amor Viral",
    artist: "Marco Mares",
    dedication: "Cositas lindas que me hacen recordarte que cualquier cosa es linda si estoy contigo.",
    youtubeId: "7Q-oEKcOcns",
    duration: "4:26",
    year: "2019",
  },
}

// Datos del blog
const BLOG_DATA = {
  events: [
    {
      id: 1,
      title: "🎂 Cumpleaños de Glendys",
      date: "2025-09-23",
      type: "birthday",
      description: "El día más especial del año - ¡Tu cumpleaños número 18!",
      daysUntil: null,
      icon: "🎂",
    },
    {
      id: 2,
      title: "💕 Nuestro Aniversario",
      date: "2025-12-03",
      type: "anniversary",
      description: "Celebrando un año más de amor infinito",
      daysUntil: null,
      icon: "💕",
    },
    {
      id: 3,
      title: "🎄 Primera Navidad Juntos (Presencial)",
      date: "2024-12-25",
      type: "holiday",
      description: "Nuestra primera navidad juntos en persona",
      daysUntil: null,
      icon: "🎄",
    },
    {
      id: 4,
      title: "💝 Día de San Valentín",
      date: "2025-02-14",
      type: "valentine",
      description: "El día del amor y la amistad - perfecto para nosotros",
      daysUntil: null,
      icon: "💝",
    },
  ],
}

// Textos de eventos especiales
const EVENT_TEXTS = {
  birthday: {
    letter: `Mi querida Glendys,

Hoy es tu día especial, el día en que el mundo se volvió más hermoso porque llegaste a él. Cada año que cumples es una bendición para mí, porque significa otro año más de tenerte en mi vida.

Eres la luz que ilumina mis días más oscuros, la sonrisa que hace que todo valga la pena, y el amor que llena mi corazón de felicidad infinita. En tu cumpleaños, quiero que sepas que eres la persona más especial del universo para mí.

Que este nuevo año de vida te traiga toda la felicidad que mereces, todos los sueños que deseas cumplir, y todo el amor que yo tengo para darte. Porque tú, mi amor, mereces todo lo mejor del mundo.

¡Feliz cumpleaños, mi princesa! 🎂✨`,

    cubeMessage: `🎂 ¡FELIZ CUMPLEAÑOS MI AMOR! 🎂

Hoy celebramos no solo tu nacimiento, sino la llegada de la persona más maravillosa a mi vida. Cada día contigo es un regalo, pero hoy es especial porque es TU día.

Eres mi inspiración, mi alegría, mi todo. Que este nuevo año de vida esté lleno de aventuras juntos, risas compartidas, y momentos que recordaremos para siempre.

Te amo más de lo que las palabras pueden expresar. ¡Que todos tus deseos se hagan realidad! 🌟💕

Con todo mi amor eterno,
Anthony ❤️`,
  },

  anniversary: {
    letter: `Mi amada Glendys,

Hoy celebramos otro año más de nuestro amor, otro año de momentos compartidos, de risas, de lágrimas, de crecimiento juntos. Cada día a tu lado ha sido una aventura hermosa que no cambiaría por nada.

Recuerdo el día que nos conocimos como si fuera ayer, y desde entonces mi vida cambió completamente. Tú le diste color a mi mundo, música a mi silencio, y amor a mi corazón.

En este aniversario quiero prometerte que mi amor por ti seguirá creciendo cada día, que estaré a tu lado en cada momento, y que juntos construiremos el futuro más hermoso que podamos imaginar.

Gracias por ser mi compañera, mi mejor amiga, mi amor verdadero. Aquí tienes mi corazón, para siempre.

Con amor infinito,
Anthony 💕`,

    cubeMessage: `💕 ¡FELIZ ANIVERSARIO MI VIDA! 💕

Otro año más de amor puro, de momentos mágicos, de construir juntos nuestros sueños. Cada día contigo es una página nueva en nuestra historia de amor.

Gracias por elegirme cada día, por amarme con toda tu alma, por ser mi hogar en este mundo. Eres mi pasado, mi presente y mi futuro.

Que vengan muchos años más de aventuras, de amor, de felicidad juntos. Porque contigo, mi amor, todo es posible.

Te amo hasta el infinito y más allá 🌟

Para siempre tuyo,
Anthony ❤️`,
  },

  monthly: {
    letter: `Mi dulce Glendys,

Un mes más juntos, un mes más de amor que crece y se fortalece. Cada mes que pasa es una nueva oportunidad de amarte más profundamente, de conocerte mejor, de construir juntos nuestros sueños.

En estos 30 días hemos compartido sonrisas, conversaciones hasta altas horas, momentos de silencio cómodo, y ese amor que nos une cada vez más. Cada día 3 del mes es especial porque marca otro mes de nuestra historia de amor.

Quiero que sepas que mi amor por ti no tiene límites de tiempo. Cada mes, cada semana, cada día, cada segundo contigo es un regalo que atesoro en mi corazón.

Gracias por ser mi compañera en esta hermosa aventura que llamamos amor.

Con cariño infinito,
Anthony 💜`,

    cubeMessage: `📅 ¡UN MES MÁS DE AMOR PURO! 💜

Cada mes que pasa es una nueva razón para celebrar lo hermoso que es nuestro amor. 30 días más de mensajes tiernos, de "buenos días" y "buenas noches", de compartir nuestros sueños.

Eres mi constante en este mundo cambiante, mi paz en medio del caos, mi alegría en cada despertar. Cada mes contigo es mejor que el anterior.

Que vengan muchos meses más de amor, de crecimiento juntos, de momentos que nos hagan sonreír. Porque contigo, cada mes es una nueva aventura.

Te amo más cada día 💫

Siempre tuyo,
Anthony ❤️`,
  },

  christmas: {
    letter: `Mi querida Glendys,

En esta Navidad tan especial, la primera que pasamos juntos, quiero decirte que tú eres el mejor regalo que la vida me ha dado. No hay adorno más hermoso que tu sonrisa, ni luz más brillante que la que hay en tus ojos.

Esta época navideña tiene un significado completamente nuevo para mí porque la comparto contigo. Cada villancico me recuerda lo afortunado que soy de tenerte, cada luz navideña me hace pensar en lo brillante que es nuestro futuro juntos.

Que esta Navidad esté llena de momentos mágicos, de abrazos cálidos, de risas compartidas, y de todo el amor que tengo para darte. Porque tú, mi amor, haces que cada día sea como Navidad.

¡Feliz Navidad, mi regalo más preciado! 🎄✨`,

    cubeMessage: `🎄 ¡FELIZ NAVIDAD MI AMOR! 🎄

En esta época mágica, tú eres mi estrella de Belén, mi regalo más preciado, mi milagro navideño. Cada copo de nieve que cae me recuerda lo única y especial que eres.

Gracias por hacer que esta Navidad sea la más hermosa de mi vida. Contigo, cada día es una celebración, pero hoy es especial porque es nuestra primera Navidad juntos.

Que el espíritu navideño llene nuestros corazones de amor, paz y felicidad. Y que el próximo año esté lleno de más momentos mágicos juntos.

¡Eres mi regalo de Navidad eterno! 🌟❄️

Con amor navideño,
Anthony ❤️`,
  },

  valentine: {
    letter: `Mi adorada Glendys,

En el día del amor y la amistad, quiero gritarle al mundo entero lo mucho que te amo. Tú eres mi San Valentín no solo hoy, sino cada día del año, porque cada momento contigo es una celebración del amor más puro.

Eres la razón por la que mi corazón late con tanta fuerza, la inspiración detrás de cada sonrisa, la musa de cada pensamiento romántico. Contigo he descubierto que el amor verdadero no es solo una fantasía, sino una realidad hermosa que vivimos cada día.

En este día especial, quiero renovar mi promesa de amarte incondicionalmente, de cuidarte siempre, de ser tu compañero en cada aventura. Porque tú, mi amor, eres mi San Valentín eterno.

Con todo el amor de mi corazón,
Anthony 💝`,

    cubeMessage: `💝 ¡FELIZ SAN VALENTÍN MI VIDA! 💝

En el día más romántico del año, quiero decirte que TODOS los días son San Valentín cuando estoy contigo. Eres mi amor eterno, mi corazón, mi alma gemela.

Gracias por llenar mi vida de tanto amor, por ser mi compañera perfecta, por hacer que cada día sea una nueva oportunidad de amarte más. Eres mi definición de amor verdadero.

Que este día esté lleno de momentos románticos, de besos tiernos, de abrazos infinitos. Porque contigo, mi amor, cada día es una celebración del amor más puro.

¡Eres mi San Valentín para siempre! 💘🌹

Con amor infinito,
Anthony ❤️`,
  },
}

// Sistema de cámara y viewport
class CameraSystem {
  constructor() {
    this.container = document.getElementById("camera-container")
    this.worldContent = document.getElementById("world-content")
    this.fixedUI = document.querySelector(".fixed-ui")
    this.mainNav = document.querySelector(".main-navigation")
    this.currentSection = "blog"
    this.isScrolling = false
    this.mouseTimer = null

    this.init()
  }

  init() {
    this.setupScrollListener()
    this.setupResizeListener()
    this.setupNavigation()
    this.setupMouseListener()
  }

  setupMouseListener() {
    // Mostrar navegación al mover el mouse
    document.addEventListener("mousemove", () => {
      if (this.mainNav) {
        this.mainNav.classList.add("visible")
      }

      // Ocultar después de 3 segundos de inactividad
      if (this.mouseTimer) {
        clearTimeout(this.mouseTimer)
      }

      this.mouseTimer = setTimeout(() => {
        if (this.mainNav) {
          this.mainNav.classList.remove("visible")
        }
      }, 3000)
    })

    // Mantener visible cuando el mouse está sobre la navegación
    if (this.mainNav) {
      this.mainNav.addEventListener("mouseenter", () => {
        if (this.mouseTimer) {
          clearTimeout(this.mouseTimer)
        }
      })

      this.mainNav.addEventListener("mouseleave", () => {
        this.mouseTimer = setTimeout(() => {
          this.mainNav.classList.remove("visible")
        }, 1000)
      })
    }
  }

  setupScrollListener() {
    this.container.addEventListener("scroll", () => {
      this.updateCameraEffects()
    })
  }

  setupResizeListener() {
    window.addEventListener("resize", () => {
      this.updateViewport()
    })
  }

  setupNavigation() {
    const navItems = document.querySelectorAll(".nav-item")
    navItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault()
        const section = item.dataset.section
        this.switchToSection(section)
      })
    })

    const featureCards = document.querySelectorAll(".feature-card")
    featureCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        const section = card.dataset.section
        if (section) {
          this.switchToSection(section)
        }
      })
    })
  }

  switchToSection(sectionName) {
    // Actualizar navegación activa
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active")
    })

    const activeNavItem = document.querySelector(`[data-section="${sectionName}"]`)
    if (activeNavItem) {
      activeNavItem.classList.add("active")
    }

    // Cambiar sección
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.remove("active")
    })

    const targetSection = document.getElementById(sectionName)
    if (targetSection) {
      targetSection.classList.add("active")
      this.currentSection = sectionName

      // Scroll suave al inicio de la sección
      this.container.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  updateCameraEffects() {
    const scrollY = this.container.scrollTop
    const maxScroll = this.container.scrollHeight - this.container.clientHeight
    const scrollProgress = scrollY / maxScroll

    // Efectos de paralaje en el fondo
    const backgroundEffects = document.querySelector(".background-effects")
    if (backgroundEffects) {
      backgroundEffects.style.transform = `translateY(${scrollY * 0.5}px)`
    }

    // Efectos en las luces ambientales
    const lights = document.querySelectorAll(".light")
    lights.forEach((light, index) => {
      const offset = (index + 1) * 0.3
      light.style.transform = `translateY(${scrollY * offset}px) scale(${1 + scrollProgress * 0.2})`
    })
  }

  updateViewport() {
    // Actualizar efectos basados en el tamaño de la ventana
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }

  centerNotification(element) {
    const rect = this.container.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    element.style.position = "fixed"
    element.style.left = `${centerX}px`
    element.style.top = `${centerY}px`
    element.style.transform = "translate(-50%, -50%)"
    element.style.zIndex = "2000"
  }
}

// Sistema de shaders y efectos visuales
class ShaderSystem {
  constructor() {
    this.canvas = document.getElementById("shader-canvas")
    this.ctx = null
    this.animationId = null
    this.time = 0

    this.init()
  }

  init() {
    if (!this.canvas) return

    this.ctx = this.canvas.getContext("2d")
    this.resize()
    this.startAnimation()

    window.addEventListener("resize", () => this.resize())
  }

  resize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  startAnimation() {
    const animate = () => {
      this.time += 0.016 // ~60fps
      this.render()
      this.animationId = requestAnimationFrame(animate)
    }
    animate()
  }

  render() {
    const { width, height } = this.canvas
    this.ctx.clearRect(0, 0, width, height)

    // Crear gradiente animado
    const gradient = this.ctx.createRadialGradient(
      width * 0.5 + Math.sin(this.time * 0.5) * 100,
      height * 0.5 + Math.cos(this.time * 0.3) * 100,
      0,
      width * 0.5,
      height * 0.5,
      Math.max(width, height) * 0.8,
    )

    const hue1 = (this.time * 20) % 360
    const hue2 = (this.time * 30 + 120) % 360
    const hue3 = (this.time * 25 + 240) % 360

    gradient.addColorStop(0, `hsla(${hue1}, 70%, 60%, 0.1)`)
    gradient.addColorStop(0.5, `hsla(${hue2}, 60%, 50%, 0.05)`)
    gradient.addColorStop(1, `hsla(${hue3}, 80%, 40%, 0.02)`)

    this.ctx.fillStyle = gradient
    this.ctx.fillRect(0, 0, width, height)

    // Añadir partículas flotantes
    this.renderParticles()
  }

  renderParticles() {
    const { width, height } = this.canvas
    const particleCount = 20

    for (let i = 0; i < particleCount; i++) {
      const x = width * 0.5 + Math.sin(this.time * 0.5 + i * 0.5) * (width * 0.3)
      const y = height * 0.5 + Math.cos(this.time * 0.3 + i * 0.7) * (height * 0.3)
      const size = 2 + Math.sin(this.time * 2 + i) * 1
      const opacity = 0.1 + Math.sin(this.time + i) * 0.05

      this.ctx.beginPath()
      this.ctx.arc(x, y, size, 0, Math.PI * 2)
      this.ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      this.ctx.fill()
    }
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  }
}

// Función para calcular días hasta un evento
function calculateDaysUntil(dateString) {
  const eventDate = new Date(dateString)
  const today = new Date()
  const diffTime = eventDate - today
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 0) {
    eventDate.setFullYear(eventDate.getFullYear() + 1)
    const newDiffTime = eventDate - today
    return Math.ceil(newDiffTime / (1000 * 60 * 60 * 24))
  }

  return diffDays
}

// Función para calcular tiempo juntos
function calculateTimeTogetherStats() {
  const startDate = new Date("2024-12-03")
  const now = new Date()
  const diffTime = now - startDate

  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const months = Math.floor(days / 30.44)
  const weeks = Math.floor(days / 7)
  const hours = Math.floor(diffTime / (1000 * 60 * 60))

  return { days, months, weeks, hours }
}

// Cargar eventos
function loadEvents() {
  const container = document.getElementById("events-container")
  if (!container) return

  BLOG_DATA.events.forEach((event) => {
    event.daysUntil = calculateDaysUntil(event.date)
  })

  const sortedEvents = BLOG_DATA.events.sort((a, b) => a.daysUntil - b.daysUntil)

  container.innerHTML = sortedEvents
    .map(
      (event) => `
    <div class="event-card ${event.type}">
      <div class="event-icon">${event.icon}</div>
      <div class="event-content">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <div class="event-countdown">
          <span class="days-count">${event.daysUntil}</span>
          <span class="days-label">${event.daysUntil === 1 ? "día" : "días"}</span>
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

// Cargar eventos en burbuja
function loadEventsBubble() {
  const bubbleContent = document.getElementById("bubble-content")
  if (!bubbleContent) return

  BLOG_DATA.events.forEach((event) => {
    event.daysUntil = calculateDaysUntil(event.date)
  })

  const sortedEvents = BLOG_DATA.events.sort((a, b) => a.daysUntil - b.daysUntil)

  bubbleContent.innerHTML = sortedEvents
    .map(
      (event) => `
    <div class="bubble-event">
      <div class="bubble-event-icon">${event.icon}</div>
      <div class="bubble-event-info">
        <h4>${event.title}</h4>
        <p>${event.description}</p>
      </div>
      <div class="bubble-event-days">${event.daysUntil} ${event.daysUntil === 1 ? "día" : "días"}</div>
    </div>
  `,
    )
    .join("")
}

// Cargar estadísticas
function loadStats() {
  const container = document.getElementById("stats-container")
  if (!container) return

  const stats = calculateTimeTogetherStats()

  container.innerHTML = `
    <div class="stat-card">
      <div class="stat-number">${Math.abs(stats.days)}</div>
      <div class="stat-label">Días ${stats.days >= 0 ? "juntos" : "hasta estar juntos"}</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">${Object.keys(SONGS_DATABASE).length}</div>
      <div class="stat-label">Canciones Especiales</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">∞</div>
      <div class="stat-label">Amor Infinito</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">1</div>
      <div class="stat-label">Amor Verdadero</div>
    </div>
  `
}

// Cargar canciones
function loadSongs() {
  const container = document.getElementById("songs-grid")
  if (!container) return

  container.innerHTML = Object.entries(SONGS_DATABASE)
    .map(
      ([id, song]) => `
    <div class="song-card" data-song="${id}">
      <div class="song-info">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
        <span class="duration">${song.duration}</span>
      </div>
      <div class="song-actions">
        <button onclick="playSong('${id}')" class="action-btn play-btn">
          <span>▶</span>
          <span>Reproducir</span>
        </button>
        <button onclick="showSongDedication(SONGS_DATABASE.${id})" class="action-btn story-btn">
          <span>💕</span>
          <span>Historia</span>
        </button>
      </div>
    </div>
  `,
    )
    .join("")
}

// Sistema de reproducción de música
class MusicPlayer {
  constructor() {
    this.currentSong = null
    this.isPlaying = false
    this.player = null
    this.playerReady = false
    this.backgroundMusic = null
    this.initializePlayer()
    this.loadYouTubeAPI()
  }

  loadYouTubeAPI() {
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

      window.onYouTubeIframeAPIReady = () => {
        this.playerReady = true
        console.log("YouTube API cargada correctamente")
      }
    }
  }

  async playSong(songId) {
    const song = SONGS_DATABASE[songId]
    if (!song) {
      this.showError("Canción no encontrada")
      return
    }

    this.currentSong = song
    this.showPlayer()
    this.updateSongInfo(song)

    if (!this.playerReady) {
      this.showError("Cargando reproductor... Intenta de nuevo en un momento")
      setTimeout(() => this.playSong(songId), 2000)
      return
    }

    try {
      await this.playYouTubeVideo(song.youtubeId)
      this.showSuccess(`Reproduciendo: ${song.title}`)
    } catch (error) {
      console.error("Error reproduciendo:", error)
      this.showError("Error al reproducir la canción")
    }
  }

  async playBackgroundMusic() {
    if (!this.playerReady) {
      setTimeout(() => this.playBackgroundMusic(), 1000)
      return
    }

    const songIds = Object.keys(SONGS_DATABASE)
    const randomSongId = songIds[Math.floor(Math.random() * songIds.length)]
    const song = SONGS_DATABASE[randomSongId]

    try {
      if (this.backgroundMusic) {
        this.backgroundMusic.destroy()
      }

      this.backgroundMusic = new window.YT.Player("background-music", {
        height: "0",
        width: "0",
        videoId: song.youtubeId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          loop: 1,
          playlist: song.youtubeId,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(8)
            console.log("Música de fondo iniciada:", song.title)
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo()
            }
          },
          onError: (event) => {
            console.error("Error en música de fondo:", event.data)
            setTimeout(() => {
              this.playBackgroundMusic()
            }, 2000)
          },
        },
      })
    } catch (error) {
      console.error("Error iniciando música de fondo:", error)
    }
  }

  stopBackgroundMusic() {
    if (this.backgroundMusic) {
      this.backgroundMusic.destroy()
      this.backgroundMusic = null
    }
  }

  playYouTubeVideo(videoId) {
    return new Promise((resolve, reject) => {
      try {
        if (this.player) {
          this.player.destroy()
        }

        this.player = new window.YT.Player("youtube-player", {
          height: "0",
          width: "0",
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
          },
          events: {
            onReady: (event) => {
              console.log("Player listo")
              this.isPlaying = true
              this.updatePlayButton()
              this.startProgressTracking()
              resolve(true)
            },
            onStateChange: (event) => {
              this.handlePlayerStateChange(event)
            },
            onError: (event) => {
              console.error("Error del player:", event.data)
              reject(new Error("Error del reproductor de YouTube"))
            },
          },
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  handlePlayerStateChange(event) {
    const state = event.data

    switch (state) {
      case window.YT.PlayerState.PLAYING:
        this.isPlaying = true
        this.updatePlayButton()
        break
      case window.YT.PlayerState.PAUSED:
        this.isPlaying = false
        this.updatePlayButton()
        break
      case window.YT.PlayerState.ENDED:
        this.isPlaying = false
        this.updatePlayButton()
        this.showSuccess("Canción terminada")
        break
    }
  }

  togglePlayPause() {
    if (!this.player) return

    if (this.isPlaying) {
      this.player.pauseVideo()
    } else {
      this.player.playVideo()
    }
  }

  startProgressTracking() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval)
    }

    this.progressInterval = setInterval(() => {
      if (this.player && this.player.getCurrentTime) {
        const current = this.player.getCurrentTime()
        const total = this.player.getDuration()

        if (total > 0) {
          const progressPercent = (current / total) * 100
          const progressFill = document.getElementById("progress-fill")
          const currentTime = document.getElementById("current-time")
          const totalTime = document.getElementById("total-time")

          if (progressFill) progressFill.style.width = `${progressPercent}%`
          if (currentTime) currentTime.textContent = this.formatTime(current)
          if (totalTime) totalTime.textContent = this.formatTime(total)
        }
      }
    }, 1000)
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  updatePlayButton() {
    const btn = document.getElementById("play-pause-btn")
    if (btn) {
      btn.textContent = this.isPlaying ? "⏸" : "▶"
    }
  }

  updateSongInfo(song) {
    const titleEl = document.querySelector(".song-title")
    const artistEl = document.querySelector(".song-artist")

    if (titleEl) titleEl.textContent = song.title
    if (artistEl) artistEl.textContent = song.artist
  }

  showPlayer() {
    const player = document.getElementById("floating-player")
    if (player) player.classList.remove("hidden")
  }

  hidePlayer() {
    const player = document.getElementById("floating-player")
    if (player) player.classList.add("hidden")

    if (this.player) {
      this.player.pauseVideo()
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval)
    }
    this.isPlaying = false
  }

  showError(message) {
    showScreenCenterNotification(message, "error")
  }

  showSuccess(message) {
    showScreenCenterNotification(message, "success")
  }

  setupPlayerEvents() {
    const playPauseBtn = document.getElementById("play-pause-btn")
    const closeBtn = document.getElementById("close-player-btn")
    const volumeBtn = document.getElementById("volume-btn")
    const progressBar = document.getElementById("progress-bar")

    if (playPauseBtn) {
      playPauseBtn.addEventListener("click", () => {
        this.togglePlayPause()
      })
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        this.hidePlayer()
      })
    }

    if (volumeBtn) {
      volumeBtn.addEventListener("click", () => {
        if (this.player) {
          const currentVolume = this.player.getVolume()
          const newVolume = currentVolume > 0 ? 0 : 50
          this.player.setVolume(newVolume)
          volumeBtn.textContent = newVolume > 0 ? "🔊" : "🔇"
        }
      })
    }

    if (progressBar) {
      progressBar.addEventListener("click", (e) => {
        if (this.player) {
          const rect = e.target.getBoundingClientRect()
          const clickX = e.clientX - rect.left
          const width = rect.width
          const percentage = clickX / width
          const duration = this.player.getDuration()
          const seekTime = duration * percentage
          this.player.seekTo(seekTime)
        }
      })
    }
  }
}

// Sistema de configuración
class SettingsManager {
  constructor() {
    this.settings = {
      theme: "romantic",
      reduceMotion: false,
      highContrast: false,
      largeText: false,
      lowResources: false,
      audioQuality: "medium",
      backgroundMusic: true,
      soundEffects: true,
      visualEffects: true,
    }
    this.loadSettings()
    this.applySettings()
  }

  loadSettings() {
    const saved = localStorage.getItem("lovePageSettings")
    if (saved) {
      this.settings = { ...this.settings, ...JSON.parse(saved) }
    }
  }

  saveSettings() {
    localStorage.setItem("lovePageSettings", JSON.stringify(this.settings))
  }

  applySettings() {
    document.documentElement.setAttribute("data-theme", this.settings.theme)

    if (this.settings.reduceMotion) {
      document.documentElement.style.setProperty("--transition", "none")
    } else {
      document.documentElement.style.setProperty("--transition", "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)")
    }

    if (this.settings.highContrast) {
      document.body.classList.add("high-contrast")
    } else {
      document.body.classList.remove("high-contrast")
    }

    if (this.settings.largeText) {
      document.body.classList.add("large-text")
    } else {
      document.body.classList.remove("large-text")
    }

    if (this.settings.lowResources) {
      document.body.classList.add("low-resources")
    } else {
      document.body.classList.remove("low-resources")
    }

    if (!this.settings.visualEffects) {
      if (shaderSystem) {
        shaderSystem.destroy()
      }
      document.querySelector(".shader-canvas")?.style.setProperty("display", "none")
      document.querySelector(".floating-particles")?.style.setProperty("display", "none")
      document.querySelector(".ambient-lights")?.style.setProperty("display", "none")
    } else {
      document.querySelector(".shader-canvas")?.style.removeProperty("display")
      document.querySelector(".floating-particles")?.style.removeProperty("display")
      document.querySelector(".ambient-lights")?.style.removeProperty("display")
      if (!shaderSystem && !this.settings.lowResources) {
        shaderSystem = new ShaderSystem()
      }
    }
  }

  updateSetting(key, value) {
    this.settings[key] = value
    this.saveSettings()
    this.applySettings()
  }
}

// Sistema de Administrador
class AdminSystem {
  constructor() {
    this.keySequence = []
    this.targetSequence = ["KeyP", "KeyL"]
    this.sequenceTimeout = null
    this.currentEvent = null
    this.eventStartTime = null
    this.isListening = true
    this.setupKeyListener()
    this.loadEventState()
  }

  setupKeyListener() {
    document.addEventListener("keydown", (e) => {
      if (!this.isListening) return

      console.log("Key pressed:", e.code) // Debug log

      if (this.sequenceTimeout) {
        clearTimeout(this.sequenceTimeout)
      }

      this.keySequence.push(e.code)
      console.log("Current sequence:", this.keySequence) // Debug log

      if (this.keySequence.length > this.targetSequence.length) {
        this.keySequence.shift()
      }

      if (this.keySequence.length === this.targetSequence.length) {
        const matches = this.keySequence.every((key, index) => key === this.targetSequence[index])
        console.log("Sequence matches:", matches) // Debug log
        if (matches) {
          this.openAdminPanel()
          this.keySequence = []
          return
        }
      }

      this.sequenceTimeout = setTimeout(() => {
        this.keySequence = []
      }, 2000)
    })
  }

  openAdminPanel() {
    document.getElementById("admin-panel").classList.remove("hidden")
    this.updateAdminStatus()
    showScreenCenterNotification("Panel de administrador activado", "success")
  }

  closeAdminPanel() {
    document.getElementById("admin-panel").classList.add("hidden")
  }

  activateEvent(eventType) {
    this.currentEvent = eventType
    this.eventStartTime = new Date().toISOString()

    document.documentElement.setAttribute("data-event", eventType)

    this.showFloatingTitle(eventType)
    this.showEventNav(eventType)
    this.compressEvents()

    if (settingsManager.settings.backgroundMusic) {
      setTimeout(() => {
        musicPlayer.playBackgroundMusic()
      }, 2000)
    }

    this.saveEventState()
    this.showEventNotification(eventType)
    this.closeAdminPanel()

    if (eventType === "monthly") {
      this.updateMonthlyStats()
    }
  }

  deactivateAllEvents() {
    this.currentEvent = null
    this.eventStartTime = null

    document.documentElement.removeAttribute("data-event")

    this.hideFloatingTitle()
    this.hideEventNav()
    this.decompressEvents()

    musicPlayer.stopBackgroundMusic()

    this.saveEventState()

    showScreenCenterNotification("Todos los eventos desactivados", "info")
    this.closeAdminPanel()
  }

  showFloatingTitle(eventType) {
    const eventData = this.getEventData(eventType)
    const floatingTitle = document.getElementById("floating-event-title")
    const floatingEmoji = document.getElementById("floating-event-emoji")
    const floatingName = document.getElementById("floating-event-name")

    if (floatingEmoji) floatingEmoji.textContent = eventData.icon
    if (floatingName) floatingName.textContent = eventData.title
    if (floatingTitle) floatingTitle.classList.remove("hidden")
  }

  hideFloatingTitle() {
    const floatingTitle = document.getElementById("floating-event-title")
    if (floatingTitle) floatingTitle.classList.add("hidden")
  }

  showEventNav(eventType) {
    const eventData = this.getEventData(eventType)
    const eventNav = document.getElementById("event-nav")
    const eventNavIcon = document.getElementById("event-nav-icon")

    if (eventNavIcon) eventNavIcon.textContent = eventData.icon
    if (eventNav) eventNav.classList.remove("hidden")
  }

  hideEventNav() {
    const eventNav = document.getElementById("event-nav")
    if (eventNav) eventNav.classList.add("hidden")
  }

  compressEvents() {
    const eventsGrid = document.getElementById("events-container")
    const eventsBubble = document.getElementById("events-bubble")
    const bubbleCount = document.getElementById("bubble-count")

    if (eventsGrid && eventsBubble) {
      eventsGrid.style.display = "none"
      eventsBubble.classList.remove("hidden")
      if (bubbleCount) bubbleCount.textContent = BLOG_DATA.events.length
      loadEventsBubble()
    }
  }

  decompressEvents() {
    const eventsGrid = document.getElementById("events-container")
    const eventsBubble = document.getElementById("events-bubble")

    if (eventsGrid && eventsBubble) {
      eventsGrid.style.display = "grid"
      eventsBubble.classList.add("hidden")
    }
  }

  showEventNotification(eventType) {
    const eventData = this.getEventData(eventType)

    const overlay = document.getElementById("event-notification-overlay")
    const icon = document.getElementById("event-notification-icon")
    const title = document.getElementById("event-notification-title")
    const message = document.getElementById("event-notification-message")

    if (icon) icon.textContent = eventData.icon
    if (title) title.textContent = eventData.title
    if (message) message.textContent = eventData.message
    if (overlay) overlay.classList.remove("hidden")

    this.triggerEventEffects(eventType)

    setTimeout(() => {
      this.closeEventNotification()
    }, 5000)
  }

  closeEventNotification() {
    const overlay = document.getElementById("event-notification-overlay")
    if (overlay) overlay.classList.add("hidden")

    setTimeout(() => {
      cameraSystem.switchToSection("evento-especial")
      this.setupEventSection()
    }, 500)
  }

  setupEventSection() {
    if (!this.currentEvent) return

    const eventData = this.getEventData(this.currentEvent)
    const eventTexts = EVENT_TEXTS[this.currentEvent]

    const sectionTitle = document.getElementById("event-section-title")
    const sectionSubtitle = document.getElementById("event-section-subtitle")

    if (sectionTitle) sectionTitle.textContent = eventData.title
    if (sectionSubtitle) sectionSubtitle.textContent = eventData.message

    this.setupLoveLetter(eventTexts.letter)
    this.setupGift(eventTexts.cubeMessage)
  }

  setupLoveLetter(letterText) {
    const letterDate = document.getElementById("letter-date")
    const letterTextEl = document.getElementById("letter-text")
    const letterEnvelope = document.getElementById("letter-envelope")

    if (letterDate) {
      letterDate.textContent = new Date().toLocaleDateString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }

    if (letterTextEl) letterTextEl.textContent = letterText

    // Remove any existing event listeners
    if (letterEnvelope) {
      letterEnvelope.replaceWith(letterEnvelope.cloneNode(true))
      const newEnvelope = document.getElementById("letter-envelope")
      if (newEnvelope) {
        newEnvelope.addEventListener("click", () => {
          this.openLetter()
        })
        newEnvelope.style.cursor = "pointer"
      }
    }
  }

  markLetterAsRead() {
    const letterArea = document.getElementById("love-letter-area")
    const giftArea = document.getElementById("gift-area")
    const readBtn = document.querySelector(".letter-read-btn")

    if (settingsManager && settingsManager.settings.soundEffects) {
      this.playSound("success")
    }

    if (readBtn) {
      readBtn.disabled = true
      readBtn.textContent = "✓ Leído"
    }

    if (letterArea) {
      letterArea.style.transform = "scale(0.8)"
      letterArea.style.opacity = "0.5"
      letterArea.style.transition = "all 0.8s ease"
    }

    setTimeout(() => {
      if (letterArea) letterArea.style.display = "none"
      if (giftArea) giftArea.classList.remove("hidden")
    }, 800)
  }

  setupGift(giftMessage) {
    this.giftMessage = giftMessage
  }

  openLetter() {
    const envelope = document.getElementById("letter-envelope")
    const letterContent = document.getElementById("letter-content")

    if (settingsManager.settings.soundEffects) {
      this.playSound("paper")
    }

    if (envelope) envelope.classList.add("opening")

    setTimeout(() => {
      if (envelope) envelope.style.display = "none"
      if (letterContent) letterContent.classList.remove("hidden")
    }, 1000)
  }

  markLetterAsRead() {
    const letterArea = document.getElementById("love-letter-area")
    const giftArea = document.getElementById("gift-area")

    if (settingsManager.settings.soundEffects) {
      this.playSound("success")
    }

    if (letterArea) {
      letterArea.style.transform = "scale(0.8)"
      letterArea.style.opacity = "0.5"
    }

    setTimeout(() => {
      if (letterArea) letterArea.style.display = "none"
      if (giftArea) giftArea.classList.remove("hidden")
    }, 800)
  }

  openGift() {
    if (settingsManager.settings.soundEffects) {
      this.playSound("gift")
    }

    const messageText = document.getElementById("love-message-text")
    if (messageText) {
      messageText.textContent = this.giftMessage || "¡Te amo con todo mi corazón! 💕"
    }

    const overlay = document.getElementById("love-message-overlay")
    if (overlay) overlay.classList.remove("hidden")

    this.triggerHeartRain(10)
  }

  closeLoveMessage() {
    const overlay = document.getElementById("love-message-overlay")
    if (overlay) overlay.classList.add("hidden")
  }

  playSound(type) {
    switch (type) {
      case "paper":
        this.createSoundEffect("📄")
        break
      case "success":
        this.createSoundEffect("✅")
        break
      case "gift":
        this.createSoundEffect("🎁")
        break
    }
  }

  createSoundEffect(emoji) {
    const effect = document.createElement("div")
    effect.textContent = emoji
    effect.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      z-index: 7000;
      pointer-events: none;
      animation: soundEffect 1s ease-out forwards;
    `

    const keyframes = `
      @keyframes soundEffect {
        0% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(0.5);
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1.5);
        }
      }
    `

    if (!document.getElementById("sound-effects-styles")) {
      const style = document.createElement("style")
      style.id = "sound-effects-styles"
      style.textContent = keyframes
      document.head.appendChild(style)
    }

    document.body.appendChild(effect)

    setTimeout(() => {
      effect.remove()
    }, 1000)
  }

  getEventData(eventType) {
    const events = {
      birthday: {
        icon: "🎂",
        title: "¡Feliz Cumpleaños Glendys!",
        message: "Hoy celebramos tu día especial con un tema festivo lleno de amor",
      },
      anniversary: {
        icon: "💕",
        title: "¡Feliz Aniversario!",
        message: "Celebrando nuestro amor eterno con un tema romántico especial",
      },
      monthly: {
        icon: "📅",
        title: "¡Aniversario Mensual!",
        message: "Un mes más de amor infinito - celebremos este momento especial",
      },
      christmas: {
        icon: "🎄",
        title: "¡Feliz Navidad Juntos!",
        message: "Nuestra primera navidad juntos merece una celebración especial",
      },
      valentine: {
        icon: "💝",
        title: "¡Feliz San Valentín!",
        message: "El día del amor perfecto para celebrar lo nuestro",
      },
    }

    return events[eventType] || { icon: "🎉", title: "Evento Especial", message: "Celebrando un momento único" }
  }

  triggerEventEffects(eventType) {
    setTimeout(() => {
      this.triggerHeartRain(20)
    }, 1000)

    switch (eventType) {
      case "birthday":
        this.triggerBirthdayEffects()
        break
      case "anniversary":
      case "monthly":
        this.triggerAnniversaryEffects()
        break
      case "christmas":
        this.triggerChristmasEffects()
        break
      case "valentine":
        this.triggerValentineEffects()
        break
    }
  }

  triggerBirthdayEffects() {
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        this.createConfetti()
      }, i * 100)
    }
  }

  triggerAnniversaryEffects() {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        this.createSpecialHeart("💖")
      }, i * 200)
    }
  }

  triggerChristmasEffects() {
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        this.createSnowflake()
      }, i * 150)
    }
  }

  triggerValentineEffects() {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.createSpecialHeart("💘")
      }, i * 100)
    }
  }

  createConfetti() {
    const confetti = document.createElement("div")
    const emojis = ["🎉", "🎊", "🎈", "🎂", "⭐"]
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)]
    confetti.className = "heart-rain"
    confetti.style.left = Math.random() * 100 + "%"
    confetti.style.fontSize = Math.random() * 20 + 20 + "px"
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s"

    document.body.appendChild(confetti)

    setTimeout(() => {
      confetti.remove()
    }, 4000)
  }

  createSpecialHeart(emoji) {
    const heart = document.createElement("div")
    heart.textContent = emoji
    heart.className = "heart-rain"
    heart.style.left = Math.random() * 100 + "%"
    heart.style.fontSize = Math.random() * 15 + 20 + "px"
    heart.style.animationDuration = Math.random() * 2 + 2 + "s"

    document.body.appendChild(heart)

    setTimeout(() => {
      heart.remove()
    }, 3000)
  }

  createSnowflake() {
    const snow = document.createElement("div")
    const snowEmojis = ["❄️", "⭐", "✨"]
    snow.textContent = snowEmojis[Math.floor(Math.random() * snowEmojis.length)]
    snow.className = "heart-rain"
    snow.style.left = Math.random() * 100 + "%"
    snow.style.fontSize = Math.random() * 10 + 15 + "px"
    snow.style.animationDuration = Math.random() * 3 + 3 + "s"
    snow.style.color = "#ffffff"

    document.body.appendChild(snow)

    setTimeout(() => {
      snow.remove()
    }, 6000)
  }

  triggerHeartRain(count = 10) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const heart = document.createElement("div")
        const hearts = ["💕", "💖", "💗", "💝", "💘"]
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)]
        heart.className = "heart-rain"
        heart.style.left = Math.random() * 100 + "%"
        heart.style.fontSize = Math.random() * 15 + 20 + "px"
        heart.style.animationDuration = Math.random() * 2 + 2 + "s"

        document.body.appendChild(heart)

        setTimeout(() => {
          heart.remove()
        }, 4000)
      }, i * 100)
    }
  }

  showLoveMessage() {
    const messages = [
      "Eres la razón de mi sonrisa cada día 💕",
      "Mi amor por ti crece más cada segundo ❤️",
      "Eres mi persona favorita en todo el universo 🌟",
      "Contigo cada día es una aventura hermosa 🌈",
      "Tu amor es mi mayor tesoro 💎",
      "Eres mi hogar, mi paz, mi todo 🏠",
      "Mi corazón late solo por ti 💓",
    ]

    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    showScreenCenterNotification(randomMessage, "success")
  }

  playRandomSong() {
    const songIds = Object.keys(SONGS_DATABASE)
    const randomSong = songIds[Math.floor(Math.random() * songIds.length)]
    playSong(randomSong)
  }

  updateMonthlyStats() {
    const monthlyCount = this.getMonthlyCount()
    showScreenCenterNotification(`¡${monthlyCount} meses de amor puro! 💜`, "success")
  }

  getMonthlyCount() {
    const startDate = new Date("2024-12-03")
    const now = new Date()
    const diffTime = now - startDate
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44))
    return Math.max(0, diffMonths)
  }

  updateAdminStatus() {
    const activeEventName = document.getElementById("active-event-name")
    const eventStartTime = document.getElementById("event-start-time")

    if (this.currentEvent) {
      const eventData = this.getEventData(this.currentEvent)
      if (activeEventName) activeEventName.textContent = eventData.title
      if (eventStartTime) eventStartTime.textContent = new Date(this.eventStartTime).toLocaleString("es-ES")
    } else {
      if (activeEventName) activeEventName.textContent = "Ninguno"
      if (eventStartTime) eventStartTime.textContent = "-"
    }
  }

  saveEventState() {
    const state = {
      currentEvent: this.currentEvent,
      eventStartTime: this.eventStartTime,
    }
    localStorage.setItem("adminEventState", JSON.stringify(state))
  }

  loadEventState() {
    const saved = localStorage.getItem("adminEventState")
    if (saved) {
      const state = JSON.parse(saved)
      if (state.currentEvent) {
        this.currentEvent = state.currentEvent
        this.eventStartTime = state.eventStartTime
        document.documentElement.setAttribute("data-event", state.currentEvent)
        this.showFloatingTitle(state.currentEvent)
        this.showEventNav(state.currentEvent)
        this.compressEvents()

        if (settingsManager.settings.backgroundMusic) {
          setTimeout(() => {
            musicPlayer.playBackgroundMusic()
          }, 3000)
        }
      }
    }
  }
}

// Funciones principales
function playSong(songId) {
  musicPlayer.playSong(songId)

  setTimeout(() => {
    const song = SONGS_DATABASE[songId]
    if (song) {
      showSongDedication(song)
    }
  }, 1000)
}

function showSongDedication(song) {
  const modal = document.createElement("div")
  modal.className = "modal-overlay"
  modal.innerHTML = `
    <div class="modal-content" style="width: 500px;">
      <div class="modal-header">
        <h2 class="modal-title">
          <span class="modal-icon">🎵</span>
          ${song.title}
        </h2>
        <button onclick="this.closest('.modal-overlay').remove()" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <div style="margin-bottom: 16px;">
          <strong>Artista:</strong> ${song.artist} (${song.year})
        </div>
        <div style="font-style: italic; line-height: 1.6; color: var(--text-secondary);">
          ${song.dedication}
        </div>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  setTimeout(() => {
    if (modal.parentElement) {
      modal.remove()
    }
  }, 15000)
}

function openSettings() {
  document.getElementById("settings-modal").classList.remove("hidden")
  updateSettingsUI()
}

function closeSettings() {
  document.getElementById("settings-modal").classList.add("hidden")
}

function updateSettingsUI() {
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.dataset.theme === settingsManager.settings.theme) {
      btn.classList.add("active")
    }
  })

  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const setting = checkbox.id.replace("_", "-")
      settingsManager.updateSetting(setting, checkbox.checked)
    })
  })

  const audioQuality = document.getElementById("audio-quality")
  if (audioQuality) {
    audioQuality.value = settingsManager.settings.audioQuality
  }
}

function toggleEventsBubble() {
  const bubbleContent = document.getElementById("bubble-content")
  const bubbleToggle = document.querySelector(".bubble-toggle")

  if (bubbleContent && bubbleToggle) {
    if (bubbleContent.classList.contains("hidden")) {
      bubbleContent.classList.remove("hidden")
      bubbleToggle.classList.add("expanded")
    } else {
      bubbleContent.classList.add("hidden")
      bubbleToggle.classList.remove("expanded")
    }
  }
}

function markLetterAsRead() {
  adminSystem.markLetterAsRead()
}

function openGift() {
  adminSystem.openGift()
}

function closeLoveMessage() {
  adminSystem.closeLoveMessage()
}

function showScreenCenterNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `screen-notification ${type}`

  const styles = {
    error: "border-color: #ef4444; background: rgba(239, 68, 68, 0.1);",
    success: "border-color: #10b981; background: rgba(16, 185, 129, 0.1);",
    info: "border-color: #3b82f6; background: rgba(59, 130, 246, 0.1);",
  }

  notification.style.cssText = `
    ${styles[type]}
    color: var(--text-primary);
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
  `

  notification.textContent = message

  const container = document.getElementById("screen-center-notifications")
  if (container) {
    container.appendChild(notification)

    setTimeout(() => {
      notification.remove()
    }, 4000)
  }
}

function createFloatingHeart() {
  const hearts = ["💖", "💕", "💗", "💝", "💘"]
  const heart = document.createElement("div")
  heart.className = "heart"
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)]
  heart.style.left = Math.random() * 100 + "%"
  heart.style.animationDuration = Math.random() * 3 + 3 + "s"
  heart.style.fontSize = Math.random() * 10 + 15 + "px"

  const container = document.querySelector(".floating-hearts")
  if (container) {
    container.appendChild(heart)

    setTimeout(() => {
      heart.remove()
    }, 6000)
  }
}

function closeAdminPanel() {
  adminSystem.closeAdminPanel()
}

function activateEvent(eventType) {
  adminSystem.activateEvent(eventType)
}

function deactivateAllEvents() {
  adminSystem.deactivateAllEvents()
}

function closeEventNotification() {
  adminSystem.closeEventNotification()
}

function triggerHeartRain() {
  adminSystem.triggerHeartRain(15)
}

function showLoveMessage() {
  adminSystem.showLoveMessage()
}

function playRandomSong() {
  adminSystem.playRandomSong()
}

function setupSettingsListeners() {
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".theme-btn").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      settingsManager.updateSetting("theme", btn.dataset.theme)
    })
  })

  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const setting = checkbox.id.replace("-", "_")
      settingsManager.updateSetting(setting, checkbox.checked)
    })
  })

  const audioQualitySelect = document.getElementById("audio-quality")
  if (audioQualitySelect) {
    audioQualitySelect.addEventListener("change", (e) => {
      settingsManager.updateSetting("audioQuality", e.target.value)
    })
  }
}

// Variables globales
let cameraSystem
let shaderSystem
let musicPlayer
let settingsManager
let adminSystem

// Inicialización mejorada
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing...") // Debug log

  // Ocultar pantalla de carga
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
      loadingScreen.classList.add("hidden")
      console.log("Loading screen hidden") // Debug log
    }
  }, 3000)

  // Inicializar sistemas con verificación
  try {
    cameraSystem = new CameraSystem()
    console.log("Camera system initialized") // Debug log
  } catch (error) {
    console.error("Error initializing camera system:", error)
  }

  try {
    shaderSystem = new ShaderSystem()
    console.log("Shader system initialized") // Debug log
  } catch (error) {
    console.error("Error initializing shader system:", error)
  }

  try {
    musicPlayer = new MusicPlayer()
    console.log("Music player initialized") // Debug log
  } catch (error) {
    console.error("Error initializing music player:", error)
  }

  try {
    settingsManager = new SettingsManager()
    console.log("Settings manager initialized") // Debug log
  } catch (error) {
    console.error("Error initializing settings manager:", error)
  }

  try {
    adminSystem = new AdminSystem()
    console.log("Admin system initialized") // Debug log
  } catch (error) {
    console.error("Error initializing admin system:", error)
  }

  // Cargar contenido
  try {
    loadEvents()
    loadStats()
    loadSongs()
    console.log("Content loaded") // Debug log
  } catch (error) {
    console.error("Error loading content:", error)
  }

  // Configurar listeners
  try {
    setupSettingsListeners()
    if (musicPlayer) {
      musicPlayer.setupPlayerEvents()
    }
    console.log("Event listeners set up") // Debug log
  } catch (error) {
    console.error("Error setting up listeners:", error)
  }

  // Mostrar tip inicial
  setTimeout(() => {
    showScreenCenterNotification("💡 Tip: Presiona P + L para acceder al panel secreto", "info")
  }, 8000)

  // Iniciar efectos flotantes
  setInterval(createFloatingHeart, 2000)

  // Mensaje de bienvenida
  setTimeout(() => {
    showScreenCenterNotification("¡Bienvenida a nuestro blog de amor! 💕", "success")
  }, 4000)

  // Mostrar navegación inicialmente por 5 segundos
  setTimeout(() => {
    const mainNav = document.querySelector(".main-navigation")
    if (mainNav) {
      mainNav.classList.add("visible")
      setTimeout(() => {
        mainNav.classList.remove("visible")
      }, 5000)
    }
  }, 3500)
})

// Fix the global functions to ensure they work properly
function markLetterAsRead() {
  if (adminSystem) {
    adminSystem.markLetterAsRead()
  } else {
    console.error("Admin system not initialized")
  }
}

function openGift() {
  if (adminSystem) {
    adminSystem.openGift()
  } else {
    console.error("Admin system not initialized")
  }
}

function closeAdminPanel() {
  if (adminSystem) {
    adminSystem.closeAdminPanel()
  } else {
    console.error("Admin system not initialized")
  }
}

// Cleanup al cerrar la página
window.addEventListener("beforeunload", () => {
  if (shaderSystem) {
    shaderSystem.destroy()
  }
})
