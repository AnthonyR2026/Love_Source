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

  updates: [
    {
      id: 1,
      title: "🎵 Página de Canciones Completada",
      date: "2024-08-30",
      description:
        "Agregué todas nuestras canciones especiales con reproductor funcional y dedicatorias personalizadas.",
      type: "feature",
    },
    {
      id: 2,
      title: "✨ Nuevo Sistema de Temas",
      date: "2024-08-30",
      description: "Ahora puedes cambiar entre 4 temas diferentes: Romántico, Oscuro, Claro y Atardecer.",
      type: "feature",
    },
    {
      id: 3,
      title: "💕 Blog de Amor Creado",
      date: "2024-08-30",
      description: "Convertí la página principal en un blog donde puedes ver eventos especiales y actualizaciones.",
      type: "major",
    },
    {
      id: 4,
      title: "🎨 Efectos Visuales Mejorados",
      date: "2024-08-29",
      description:
        "Agregué corazones flotantes, animaciones suaves y efectos de blur para una experiencia más romántica.",
      type: "enhancement",
    },
    {
      id: 5,
      title: "⚙️ Configuraciones Avanzadas",
      date: "2024-08-29",
      description: "Opciones de accesibilidad, rendimiento y personalización para que tengas la mejor experiencia.",
      type: "feature",
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

// Función para calcular días hasta un evento
function calculateDaysUntil(dateString) {
  const eventDate = new Date(dateString)
  const today = new Date()
  const diffTime = eventDate - today
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 0) {
    // Si ya pasó, calcular para el próximo año
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

  // Calcular días hasta cada evento
  BLOG_DATA.events.forEach((event) => {
    event.daysUntil = calculateDaysUntil(event.date)
  })

  // Ordenar por proximidad
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

  // Calcular días hasta cada evento
  BLOG_DATA.events.forEach((event) => {
    event.daysUntil = calculateDaysUntil(event.date)
  })

  // Ordenar por proximidad
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

// Cargar actualizaciones
function loadUpdates() {
  const container = document.getElementById("updates-container")
  if (!container) return

  container.innerHTML = BLOG_DATA.updates
    .map(
      (update) => `
    <div class="update-item ${update.type}">
      <div class="update-date">${formatDate(update.date)}</div>
      <div class="update-content">
        <h3>${update.title}</h3>
        <p>${update.description}</p>
      </div>
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

// Formatear fecha
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
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

  initializePlayer() {
    const playerHTML = `
      <div id="floating-player" class="floating-player hidden">
        <div class="player-header">
          <div class="song-info">
            <div class="song-title">Selecciona una canción</div>
            <div class="song-artist">para comenzar a escuchar</div>
          </div>
          <button id="close-player-btn" class="close-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div class="player-controls">
          <button id="prev-btn" class="control-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="19,20 9,12 19,4"></polygon>
              <line x1="5" y1="19" x2="5" y2="5"></line>
            </svg>
          </button>
          <button id="play-pause-btn" class="control-btn play-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5,3 19,12 5,21"></polygon>
            </svg>
          </button>
          <button id="next-btn" class="control-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5,4 15,12 5,20"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
          </button>
          <button id="volume-btn" class="control-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>
        </div>
        
        <div class="progress-container">
          <div class="progress-bar" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
          </div>
          <div class="time-display">
            <span class="current-time" id="current-time">0:00</span>
            <span class="total-time" id="total-time">0:00</span>
          </div>
        </div>
        
        <div id="youtube-player" style="display: none;"></div>
      </div>
    `

    document.body.insertAdjacentHTML("beforeend", playerHTML)
    this.setupPlayerEvents()
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

    // Seleccionar una canción aleatoria para música de fondo
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
            event.target.setVolume(15) // Volumen bajo para música de fondo
            console.log("Música de fondo iniciada:", song.title)
          },
          onError: (event) => {
            console.error("Error en música de fondo:", event.data)
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
          document.getElementById("progress-fill").style.width = `${progressPercent}%`
          document.getElementById("current-time").textContent = this.formatTime(current)
          document.getElementById("total-time").textContent = this.formatTime(total)
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
      const svg = this.isPlaying
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <rect x="6" y="4" width="4" height="16"></rect>
             <rect x="14" y="4" width="4" height="16"></rect>
           </svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <polygon points="5,3 19,12 5,21"></polygon>
           </svg>`
      btn.innerHTML = svg
    }
  }

  updateSongInfo(song) {
    const titleEl = document.querySelector(".song-title")
    const artistEl = document.querySelector(".song-artist")

    if (titleEl) titleEl.textContent = song.title
    if (artistEl) artistEl.textContent = song.artist
  }

  showPlayer() {
    document.getElementById("floating-player").classList.remove("hidden")
  }

  hidePlayer() {
    document.getElementById("floating-player").classList.add("hidden")
    if (this.player) {
      this.player.pauseVideo()
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval)
    }
    this.isPlaying = false
  }

  showError(message) {
    this.showNotification(message, "error")
  }

  showSuccess(message) {
    this.showNotification(message, "success")
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.textContent = message

    const styles = {
      error: "background: #ef4444; color: white;",
      success: "background: #10b981; color: white;",
      info: "background: #3b82f6; color: white;",
    }

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 3000;
      animation: slideInRight 0.3s ease;
      font-weight: 500;
      backdrop-filter: blur(10px);
      ${styles[type]}
    `

    document.body.appendChild(notification)

    setTimeout(() => {
      notification.remove()
    }, 4000)
  }

  setupPlayerEvents() {
    document.getElementById("play-pause-btn").addEventListener("click", () => {
      this.togglePlayPause()
    })

    document.getElementById("close-player-btn").addEventListener("click", () => {
      this.hidePlayer()
    })

    document.getElementById("volume-btn").addEventListener("click", () => {
      if (this.player) {
        const currentVolume = this.player.getVolume()
        const newVolume = currentVolume > 0 ? 0 : 50
        this.player.setVolume(newVolume)

        const volumeBtn = document.getElementById("volume-btn")
        const svg =
          newVolume > 0
            ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"></polygon>
               <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
             </svg>`
            : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"></polygon>
               <line x1="23" y1="9" x2="17" y2="15"></line>
               <line x1="17" y1="9" x2="23" y2="15"></line>
             </svg>`
        volumeBtn.innerHTML = svg
      }
    })

    document.getElementById("progress-bar").addEventListener("click", (e) => {
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
      visualizerEnabled: true,
      backgroundMusic: true,
      soundEffects: true,
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
    this.setupKeyListener()
    this.loadEventState()
  }

  setupKeyListener() {
    document.addEventListener("keydown", (e) => {
      // Limpiar secuencia anterior si ha pasado mucho tiempo
      if (this.sequenceTimeout) {
        clearTimeout(this.sequenceTimeout)
      }

      // Agregar tecla a la secuencia
      this.keySequence.push(e.code)

      // Mantener solo las últimas teclas necesarias
      if (this.keySequence.length > this.targetSequence.length) {
        this.keySequence.shift()
      }

      // Verificar si la secuencia coincide
      if (this.keySequence.length === this.targetSequence.length) {
        const matches = this.keySequence.every((key, index) => key === this.targetSequence[index])
        if (matches) {
          this.openAdminPanel()
          this.keySequence = []
          return
        }
      }

      // Limpiar secuencia después de 2 segundos
      this.sequenceTimeout = setTimeout(() => {
        this.keySequence = []
      }, 2000)
    })
  }

  openAdminPanel() {
    document.getElementById("admin-panel").classList.remove("hidden")
    this.updateAdminStatus()
    showNotification("Panel de administrador activado", "success")
  }

  closeAdminPanel() {
    document.getElementById("admin-panel").classList.add("hidden")
  }

  activateEvent(eventType) {
    this.currentEvent = eventType
    this.eventStartTime = new Date().toISOString()

    // Aplicar tema del evento
    document.documentElement.setAttribute("data-event", eventType)

    // Mostrar título flotante
    this.showFloatingTitle(eventType)

    // Mostrar pestaña de evento
    this.showEventTab(eventType)

    // Comprimir eventos en burbuja
    this.compressEvents()

    // Iniciar música de fondo si está habilitada
    if (settingsManager.settings.backgroundMusic) {
      setTimeout(() => {
        musicPlayer.playBackgroundMusic()
      }, 2000)
    }

    // Guardar estado
    this.saveEventState()

    // Mostrar notificación del evento
    this.showEventNotification(eventType)

    // Cerrar panel de admin
    this.closeAdminPanel()

    // Actualizar estadísticas si es aniversario mensual
    if (eventType === "monthly") {
      this.updateMonthlyStats()
    }
  }

  deactivateAllEvents() {
    this.currentEvent = null
    this.eventStartTime = null

    // Remover tema del evento
    document.documentElement.removeAttribute("data-event")

    // Ocultar título flotante
    this.hideFloatingTitle()

    // Ocultar pestaña de evento
    this.hideEventTab()

    // Descomprimir eventos
    this.decompressEvents()

    // Detener música de fondo
    musicPlayer.stopBackgroundMusic()

    // Guardar estado
    this.saveEventState()

    showNotification("Todos los eventos desactivados", "info")
    this.closeAdminPanel()
  }

  showFloatingTitle(eventType) {
    const eventData = this.getEventData(eventType)
    const floatingTitle = document.getElementById("floating-event-title")
    const floatingEmoji = document.getElementById("floating-event-emoji")
    const floatingName = document.getElementById("floating-event-name")

    floatingEmoji.textContent = eventData.icon
    floatingName.textContent = eventData.title
    floatingTitle.classList.remove("hidden")
  }

  hideFloatingTitle() {
    document.getElementById("floating-event-title").classList.add("hidden")
  }

  showEventTab(eventType) {
    const eventData = this.getEventData(eventType)
    const eventTab = document.getElementById("event-tab")
    const eventTabEmoji = document.getElementById("event-tab-emoji")
    const eventTabName = document.getElementById("event-tab-name")

    eventTabEmoji.textContent = eventData.icon
    eventTabName.textContent = "EVENTO"
    eventTab.classList.remove("hidden")
  }

  hideEventTab() {
    document.getElementById("event-tab").classList.add("hidden")
  }

  compressEvents() {
    const eventsGrid = document.getElementById("events-container")
    const eventsBubble = document.getElementById("events-bubble")
    const bubbleCount = document.getElementById("bubble-count")

    if (eventsGrid && eventsBubble) {
      eventsGrid.style.display = "none"
      eventsBubble.classList.remove("hidden")
      bubbleCount.textContent = BLOG_DATA.events.length
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

    document.getElementById("event-icon").textContent = eventData.icon
    document.getElementById("event-title").textContent = eventData.title
    document.getElementById("event-message").textContent = eventData.message

    document.getElementById("event-overlay").classList.remove("hidden")

    // Efectos especiales según el evento
    this.triggerEventEffects(eventType)

    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
      this.closeEventNotification()
    }, 5000)
  }

  closeEventNotification() {
    document.getElementById("event-overlay").classList.add("hidden")

    // Cambiar automáticamente a la sección de evento
    setTimeout(() => {
      switchSection("evento-especial")
      this.setupEventSection()
    }, 500)
  }

  setupEventSection() {
    if (!this.currentEvent) return

    const eventData = this.getEventData(this.currentEvent)
    const eventTexts = EVENT_TEXTS[this.currentEvent]

    // Actualizar título y subtítulo de la sección
    document.getElementById("event-section-title").textContent = eventData.title
    document.getElementById("event-section-subtitle").textContent = eventData.message

    // Configurar carta
    this.setupLoveLetter(eventTexts.letter)

    // Configurar cubo
    this.setupLoveCube(eventTexts.cubeMessage)
  }

  setupLoveLetter(letterText) {
    const letterDate = document.getElementById("letter-date")
    const letterTextEl = document.getElementById("letter-text")

    letterDate.textContent = new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    letterTextEl.textContent = letterText

    // Configurar evento de click en el sobre
    const letterEnvelope = document.getElementById("letter-envelope")
    letterEnvelope.addEventListener("click", this.openLetter.bind(this))
  }

  setupLoveCube(cubeMessage) {
    // Guardar el mensaje del cubo para cuando se abra
    this.cubeMessage = cubeMessage
  }

  openLetter() {
    const envelope = document.getElementById("letter-envelope")
    const letterContent = document.getElementById("letter-content")

    // Reproducir sonido de papel (si está habilitado)
    if (settingsManager.settings.soundEffects) {
      this.playSound("paper")
    }

    // Animación de apertura
    envelope.classList.add("opening")

    setTimeout(() => {
      envelope.style.display = "none"
      letterContent.classList.remove("hidden")
    }, 1000)
  }

  markLetterAsRead() {
    const letterContainer = document.getElementById("love-letter-container")
    const cubeContainer = document.getElementById("love-cube-container")

    // Reproducir sonido de éxito
    if (settingsManager.settings.soundEffects) {
      this.playSound("success")
    }

    // Animación de guardar carta
    letterContainer.style.transform = "scale(0.8)"
    letterContainer.style.opacity = "0.5"

    setTimeout(() => {
      letterContainer.style.display = "none"
      cubeContainer.classList.remove("hidden")
    }, 800)
  }

  openLoveCube() {
    // Reproducir sonido de regalo
    if (settingsManager.settings.soundEffects) {
      this.playSound("gift")
    }

    // Mostrar mensaje de amor enfocado
    const messageText = document.getElementById("love-message-text")
    messageText.textContent = this.cubeMessage || "¡Te amo con todo mi corazón! 💕"

    document.getElementById("love-message-overlay").classList.remove("hidden")

    // Efectos especiales
    this.triggerHeartRain(10)
  }

  closeLoveMessage() {
    document.getElementById("love-message-overlay").classList.add("hidden")
  }

  playSound(type) {
    // Crear sonidos usando Web Audio API o simplemente efectos visuales
    // Por ahora, solo efectos visuales
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
    // Lluvia de corazones especial
    setTimeout(() => {
      this.triggerHeartRain(20)
    }, 1000)

    // Efectos específicos por evento
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
    // Confeti de cumpleaños
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        this.createConfetti()
      }, i * 100)
    }
  }

  triggerAnniversaryEffects() {
    // Corazones dorados
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        this.createSpecialHeart("💖")
      }, i * 200)
    }
  }

  triggerChristmasEffects() {
    // Nieve digital
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        this.createSnowflake()
      }, i * 150)
    }
  }

  triggerValentineEffects() {
    // Corazones rojos intensos
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
    showNotification(randomMessage, "success")
  }

  playRandomSong() {
    const songIds = Object.keys(SONGS_DATABASE)
    const randomSong = songIds[Math.floor(Math.random() * songIds.length)]
    playSong(randomSong)
  }

  updateMonthlyStats() {
    // Actualizar estadísticas para aniversario mensual
    const monthlyCount = this.getMonthlyCount()
    showNotification(`¡${monthlyCount} meses de amor puro! 💜`, "success")
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
      activeEventName.textContent = eventData.title
      eventStartTime.textContent = new Date(this.eventStartTime).toLocaleString("es-ES")
    } else {
      activeEventName.textContent = "Ninguno"
      eventStartTime.textContent = "-"
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
        this.showEventTab(state.currentEvent)
        this.compressEvents()

        // Iniciar música de fondo si está habilitada
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
  modal.className = "dedication-modal"
  modal.innerHTML = `
    <div class="dedication-content">
      <div class="dedication-header">
        <h3>${song.title}</h3>
        <p class="artist">por ${song.artist} (${song.year})</p>
      </div>
      <div class="dedication-text">
        <p>${song.dedication}</p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" class="close-dedication">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        Cerrar
      </button>
    </div>
  `

  document.body.appendChild(modal)

  setTimeout(() => {
    if (modal.parentElement) {
      modal.remove()
    }
  }, 15000)
}

// Funciones de navegación
function switchSection(sectionName) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active")
  })

  document.getElementById(sectionName).classList.add("active")

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  event.target.closest(".nav-btn").classList.add("active")
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

  Object.keys(settingsManager.settings).forEach((key) => {
    const checkbox = document.getElementById(key.replace("_", "-"))
    if (checkbox && typeof settingsManager.settings[key] === "boolean") {
      checkbox.checked = settingsManager.settings[key]
    }
  })

  const audioQuality = document.getElementById("audio-quality")
  if (audioQuality) {
    audioQuality.value = settingsManager.settings.audioQuality
  }
}

// Función para alternar burbuja de eventos
function toggleEventsBubble() {
  const bubbleContent = document.getElementById("bubble-content")
  const bubbleToggle = document.querySelector(".bubble-toggle")

  if (bubbleContent.classList.contains("hidden")) {
    bubbleContent.classList.remove("hidden")
    bubbleToggle.classList.add("expanded")
  } else {
    bubbleContent.classList.add("hidden")
    bubbleToggle.classList.remove("expanded")
  }
}

// Función para marcar carta como leída
function markLetterAsRead() {
  adminSystem.markLetterAsRead()
}

// Función para abrir cubo de amor
function openLoveCube() {
  adminSystem.openLoveCube()
}

// Función para cerrar mensaje de amor
function closeLoveMessage() {
  adminSystem.closeLoveMessage()
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message

  const styles = {
    error: "background: #ef4444; color: white;",
    success: "background: #10b981; color: white;",
    info: "background: #3b82f6; color: white;",
  }

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 3000;
    animation: slideInRight 0.3s ease;
    font-weight: 500;
    backdrop-filter: blur(10px);
    ${styles[type]}
  `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 4000)
}

// Corazones flotantes
function createFloatingHeart() {
  const hearts = ["💖", "💕", "💗", "💝", "💘"]
  const heart = document.createElement("div")
  heart.className = "heart"
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)]
  heart.style.left = Math.random() * 100 + "%"
  heart.style.animationDuration = Math.random() * 3 + 3 + "s"
  heart.style.fontSize = Math.random() * 10 + 15 + "px"

  document.querySelector(".floating-hearts").appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 6000)
}

// Funciones globales para el panel de administrador
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

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  // Pantalla de carga
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden")
  }, 3000)

  // Cargar contenido del blog
  loadEvents()
  loadUpdates()
  loadStats()

  // Configurar event listeners de configuración
  setupSettingsListeners()

  // Mostrar notificación sobre el panel secreto
  setTimeout(() => {
    showNotification("💡 Tip: Presiona P + L para acceder al panel secreto", "info")
  }, 8000)

  // Corazones flotantes
  setInterval(createFloatingHeart, 2000)

  // Mostrar notificación de bienvenida
  setTimeout(() => {
    showNotification("¡Bienvenida a nuestro blog de amor! 💕", "success")
  }, 4000)
})

function setupSettingsListeners() {
  // Theme buttons
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".theme-btn").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      settingsManager.updateSetting("theme", btn.dataset.theme)
    })
  })

  // Toggle switches
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const setting = checkbox.id.replace("-", "_")
      settingsManager.updateSetting(setting, checkbox.checked)
    })
  })

  // Audio quality
  const audioQualitySelect = document.getElementById("audio-quality")
  if (audioQualitySelect) {
    audioQualitySelect.addEventListener("change", (e) => {
      settingsManager.updateSetting("audioQuality", e.target.value)
    })
  }
}

// Inicializar sistemas
const musicPlayer = new MusicPlayer()
const settingsManager = new SettingsManager()
const adminSystem = new AdminSystem()
