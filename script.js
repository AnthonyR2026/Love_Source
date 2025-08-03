// Configuración de APIs
const API_CONFIG = {
  YOUTUBE_API_KEY: "AIzaSyAJM2Tpbf4rYTJcKfoUqSiS4oqKvUdrsbI",
  GROQ_API_KEY: "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",
  USE_REAL_AI: true,
}

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

// Base de conocimiento personal COMPLETA
const KNOWLEDGE_BASE = {
  personal: {
    nombre_completo: "Anthony",
    edad: "16 años",
    lugar_estudia: "instituto Comercial de Panama",
    carrera: "Ciecias",
    ciudad: "Panama/Pacora",
    personalidad: "romántico, detallista, gracioso, inteligente, apasionado, protector, leal",
    gustos: "programar, música romántica, películas de amor, cocinar, videojuegos, leer, tecnología",
    hobbies: "tocar guitarra, escribir poemas, fotografía, caminar contigo",
    sueños:
      "graduarme, conseguir un buen trabajo, casarme contigo, viajar por el mundo juntos, formar una familia hermosa",
    cualidades: "leal, honesto, trabajador, soñador, protector, cariñoso, detallista",
    miedos: "perderte, no ser suficiente para ti, que algo nos separe",
    fortalezas: "determinación, amor incondicional, capacidad de hacerte reír",
  },
  relacion: {
    aniversario: "3 de diciembre de 2024", // CAMBIAR POR FECHA REAL
    tiempo_juntos: "8 meses maravillosos (Cuenta hasta la fecha actual)",
    como_conocieron:
      "Un dia en la escuela nos presentaron personas ya no relevante y desde ese momento tu inciaste a tener un sentimiento por mi que pausaste",
    primer_encuentro: "Fue extraño porque ni tu ni yo sabiamos lo que pasariamos y en ese momento jamas imaginamos nada de esto pero la vida da sorpresas",
    primer_beso:
      "El primero fue curioso porque solo fue un pico pero el siguiente fue el mas lindo porque senti que jamas acabaria como estabas en esa parada esperando ese bus y yo solo esperando hasta que te fueras...  que lindo",
    primera_cita:
      "No hemos tenido aun pero pronto",
    primera_pelea: "Fue por una tontería, pero fue por confusiones de palabras de amor",
    momentos_especiales:
      "Nuestro primer 'te amo', cuando te presente a mi mama, nuestras horas de viajes, cada abrazo tuyo y beso que me complementa",
    planes_futuros:
      "Graduarnos juntos, vivir juntos, casarnos en una ceremonia hermosa, luna de miel en París, tener 2 hijos",
    tradiciones: "Hablamos todos los dias por mensajes y naturalmente decimos lo que hicimos en el dia",
    lugares_especiales:
      "La parada donde fue uno de nuestros primeros besos, Lugares publicos como buses o el metro",
  },
  sobre_glendys: {
    nombre_completo: "Glendys Alesly Martinez Porras", // CAMBIAR POR NOMBRE REAL
    edad: "17 años", // CAMBIAR POR EDAD REAL
    fecha_de_cumpleaños: "23 de Septiembre",
    año_de_nacimiento: "2007",
    estudios: "Estudiante de bachillerato en Turismo", // CAMBIAR POR ESTUDIOS REALES
    personalidad: "dulce, amargada, fuerte mentalmente, independiente, graciosa, cariñosa, comprensiva, sensible, sentimental, gruñona, confusa",
    cualidades_fisicas: "hermosa sonrisa, ojos que brillan, altura adorable, cabello liso precioso, la mujer más bella del mundo",
    cualidades_emocionales: "corazón puro, alma noble, espíritu libre, fortaleza increíble y sentimiento sensible",
    lo_que_amo: "tu risa que ilumina mi día, tu forma de verme con amor, tu habilidad para tranquilizarme, tu forma de ser auténtica con tu forma de ser",
    apodos_cariñosos: "mi amor, mi vida, mi princesa, mi reina, mi vida, mi todo, mi cielo",
    lo_que_admiro: "tu determinación, tu cariño, tu forma de enfrentar los problemas, tu corazón adorable y sensible, tu valentia para siempre intentarlo",
    gustos_de_ella: "música de BTS, películas románticas y naturalmente coreanas, leer libros sobre amor o sentimientos, pasar tiempo conmigo y salir a pasear",
    comida_favorita: "la verdad es que no me acuerdo pero siempre dare lo que quieras", // CAMBIAR POR GUSTOS REALES
    color_favorito: "negro, blanco y alguno mas no recuerdo", // CAMBIAR POR COLOR REAL
    sueños_de_ella: "graduarse para poder sentir orgullosa a su mama, lograr sus metas en los estudios, viajar a todas partes, formar una familia conmigo",
  },
  recuerdos_especiales: {
    primer_te_amo: "Fui yo lo dije primero y fue casi de inmediato. no lo olvidare es mas que especial atravez de chat pero igualmente paso",
    mejor_cita: "nunca hemos tenido una cita oficial pero hemos salido algunas veces y la hemos pasado bien",
    momento_mas_romantico: "Cuando empezamos a decirnos apodos lindos y nos prometimos amor eterno",
    momento_mas_gracioso: "Un momento mas gracioso? pues cualquiera todo siempre es gracioso",
    regalo_especial: "Te regale un peluche de un perrito(tu mascota favorita) y varios collares lindos",
    viaje_juntos: "Jamas hemos viajado pero si hemos compartido juntos en viajes hasta nuestras casas",
    navidad_juntos: "Nuestra primera navidad juntos, fue a distancia pero fue la primera navidad que pasamos con alguien que llamemos pareja",
  },
}

// Sistema de memoria para el chat
class ChatMemory {
  constructor() {
    this.conversations = this.loadConversations()
    this.currentSession = []
  }

  loadConversations() {
    const saved = localStorage.getItem("chatMemory")
    return saved ? JSON.parse(saved) : []
  }

  saveConversations() {
    localStorage.setItem("chatMemory", JSON.stringify(this.conversations))
  }

  addMessage(userMessage, aiResponse) {
    const message = {
      timestamp: new Date().toISOString(),
      user: userMessage,
      ai: aiResponse,
    }

    this.currentSession.push(message)
    this.conversations.push(message)

    // Mantener solo los últimos 50 mensajes para no sobrecargar
    if (this.conversations.length > 50) {
      this.conversations = this.conversations.slice(-50)
    }

    this.saveConversations()
  }

  getRecentContext(limit = 5) {
    return this.conversations.slice(-limit)
  }

  clearMemory() {
    this.conversations = []
    this.currentSession = []
    localStorage.removeItem("chatMemory")
  }
}

// Sistema de IA mejorado con memoria
class AISystem {
  constructor() {
    this.isProcessing = false
    this.memory = new ChatMemory()
  }

  async generateResponse(userMessage) {
    if (API_CONFIG.USE_REAL_AI && API_CONFIG.GROQ_API_KEY !== "TU_GROQ_API_KEY_AQUI") {
      return this.callGroqAPI(userMessage)
    }
  }

  callGroqAPI(userMessage) {
    try {
      const recentContext = this.memory.getRecentContext(3)
      const contextString = recentContext.map((msg) => `Usuario: ${msg.user}\nAnthony: ${msg.ai}`).join("\n\n")

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_CONFIG.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content: `Eres Anthony, un joven de 16 años. 

INFORMACIÓN PERSONAL COMPLETA:
${JSON.stringify(KNOWLEDGE_BASE, null, 2)}

INSTRUCCIONES IMPORTANTES:
- usa la información proporcionada arriba para que sea tu conocimiento
- Si no tienes información específica, di "No tengo esa información específica, pero..." y pide que te pregunte algo mas y que pronto tendras esa informacion en tu base de datos
- Siempre responde como Anthony en primera persona y que la otra persona es Glendys
- Responde de manera formal y con un cariño ligero en tus palabras
- Usa los nombres, fechas y detalles exactos proporcionados pero si son fechas erroneas como meses entonces busca un valor que se relacione como una fecha y 
cuenta hasta la fecha actual y di cuanto tiempo a pasado
- Mantén las respuestas entre 25 - 150 palabras pero si es necesario sube hasta maximo 1000
- Recuerda conversaciones anteriores cuando sea relevante
- Mantente recordando que fecha es actualmente y recuerda dar fechas perfectamente medidas solo en las que se miden 
ejemplo: cuanto_tiempo_juntos: "7 meses" (Aqui buscas algo relacionado como "Fecha_de_aniversario": 3 de diciembre del 2024. agarra esa fecha y cuenta cuanto tiempo a 
pasado hasta la fecha actual y entonces da el nuevo valor)

CONTEXTO DE CONVERSACIONES RECIENTES:
${contextString}

Responde como Anthony con la información exacta proporcionada.`,
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          temperature: 0.3, // Reducido para más consistencia
          max_tokens: 1000,
        }),
      })

      const data = await response.json()
      const aiResponse = data.choices[0].message.content

      // Guardar en memoria
      this.memory.addMessage(userMessage, aiResponse)

      return aiResponse
    } catch (error) {
      console.error("Error con Groq API:", error)
      const fallbackResponse = this.generateLocalResponse(userMessage)
      this.memory.addMessage(userMessage, fallbackResponse)
      return fallbackResponse
    }
  }

  generateLocalResponse(userMessage) {
    const message = userMessage.toLowerCase()
    this.memory.addMessage(userMessage, response)
    return response
  }
}

// Sistema de reproducción
class MusicPlayer {
  constructor() {
    this.currentSong = null
    this.isPlaying = false
    this.player = null
    this.playerReady = false
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

// Sistema de configuración mejorado
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
    // Aplicar tema
    document.documentElement.setAttribute("data-theme", this.settings.theme)

    // Aplicar configuraciones de accesibilidad
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

// Inicializar sistemas
const aiSystem = new AISystem()
const musicPlayer = new MusicPlayer()
const settingsManager = new SettingsManager()

// Funciones principales
async function sendMessage() {
  const input = document.getElementById("user-input")
  const message = input.value.trim()

  if (!message || aiSystem.isProcessing) return

  // Mostrar mensaje del usuario
  addMessage(message, "user")

  // Mostrar estado de carga
  const submitBtn = document.getElementById("submit-btn")
  const originalContent = submitBtn.innerHTML
  submitBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
      <path d="M21 12a9 9 0 11-6.219-8.56"/>
    </svg>
    <span>Pensando...</span>
  `
  submitBtn.disabled = true

  // Limpiar input
  input.value = ""

  aiSystem.isProcessing = true

  try {
    // Generar respuesta de IA
    const response = await aiSystem.generateResponse(message)

    // Simular delay para mejor UX
    setTimeout(() => {
      addMessage(response, "ai")
    }, 1000)
  } catch (error) {
    console.error("Error generando respuesta:", error)
    addMessage("Lo siento mi amor, hubo un error...", "ai")
  } finally {
    // Restaurar botón
    setTimeout(() => {
      submitBtn.innerHTML = originalContent
      submitBtn.disabled = false
      aiSystem.isProcessing = false
    }, 1000)
  }
}

function addMessage(message, sender) {
  const chatMessages = document.getElementById("chat-messages")
  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${sender}-message`

  const messageContent = document.createElement("div")
  messageContent.className = "message-content"
  messageContent.textContent = message

  messageDiv.appendChild(messageContent)
  chatMessages.appendChild(messageDiv)

  // Scroll al final con animación suave
  chatMessages.scrollTo({
    top: chatMessages.scrollHeight,
    behavior: "smooth",
  })
}

function fillInput(text) {
  document.getElementById("user-input").value = text
  document.getElementById("user-input").focus()
}

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

function newQuestion() {
  document.getElementById("chat-messages").innerHTML = ""
  document.getElementById("user-input").focus()
}

function clearChatMemory() {
  aiSystem.memory.clearMemory()
  newQuestion()
  showNotification("Memoria del chat borrada", "success")
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
  // Actualizar UI con configuraciones actuales
  updateSettingsUI()
}

function closeSettings() {
  document.getElementById("settings-modal").classList.add("hidden")
}

function updateSettingsUI() {
  // Actualizar botones de tema
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.dataset.theme === settingsManager.settings.theme) {
      btn.classList.add("active")
    }
  })

  // Actualizar toggles
  Object.keys(settingsManager.settings).forEach((key) => {
    const checkbox = document.getElementById(key.replace("_", "-"))
    if (checkbox && typeof settingsManager.settings[key] === "boolean") {
      checkbox.checked = settingsManager.settings[key]
    }
  })

  // Actualizar select de calidad de audio
  const audioQuality = document.getElementById("audio-quality")
  if (audioQuality) {
    audioQuality.value = settingsManager.settings.audioQuality
  }
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

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  // Pantalla de carga
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden")
  }, 3000)

  // Event listeners
  const userInput = document.getElementById("user-input")
  if (userInput) {
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage()
      }
    })
  }

  // Configurar event listeners de configuración
  setupSettingsListeners()

  // Corazones flotantes
  setInterval(createFloatingHeart, 2000)
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







