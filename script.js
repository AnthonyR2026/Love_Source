// Configuración de APIs
const API_CONFIG = {
  YOUTUBE_API_KEY: "AIzaSyAJM2Tpbf4rYTJcKfoUqSiS4oqKvUdrsbI",
  GROQ_API_KEY: "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", // Obtener en groq.com
  USE_REAL_AI: true, // Cambiar a true cuando tengas la API key
}

// Base de datos de canciones mejorada
const SONGS_DATABASE = {
  perfect: {
    title: "Perfect",
    artist: "Ed Sheeran",
    dedication:
      "Esta canción describe exactamente cómo me siento contigo, Glendys. Eres perfecta para mí en todos los sentidos.",
    youtubeId: "2Vv-BfVoq4g",
    duration: "4:23",
    year: "2017",
    coverUrl: "https://i.ytimg.com/vi/2Vv-BfVoq4g/maxresdefault.jpg",
  },
  thinking_out_loud: {
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    dedication:
      "Cuando pienso en nuestro futuro juntos, esta canción siempre viene a mi mente. Quiero envejecer contigo.",
    youtubeId: "lp-EO5I60KA",
    duration: "4:41",
    year: "2014",
    coverUrl: "https://i.ytimg.com/vi/lp-EO5I60KA/maxresdefault.jpg",
  },
  all_of_me: {
    title: "All of Me",
    artist: "John Legend",
    dedication: "Te doy todo de mí, Glendys. Mis imperfecciones, mis sueños, mi corazón completo.",
    youtubeId: "450p7goxZqg",
    duration: "4:29",
    year: "2013",
    coverUrl: "https://i.ytimg.com/vi/450p7goxZqg/maxresdefault.jpg",
  },
  a_thousand_years: {
    title: "A Thousand Years",
    artist: "Christina Perri",
    dedication: "He esperado mil años para encontrarte, y esperaría mil más si fuera necesario.",
    youtubeId: "rtOvBOTyX00",
    duration: "4:45",
    year: "2011",
    coverUrl: "https://i.ytimg.com/vi/rtOvBOTyX00/maxresdefault.jpg",
  },
  love_me_like_you_do: {
    title: "Love Me Like You Do",
    artist: "Ellie Goulding",
    dedication: "Ámame como lo haces, con esa intensidad que me hace sentir vivo.",
    youtubeId: "AJtDXIazrMo",
    duration: "4:10",
    year: "2015",
    coverUrl: "https://i.ytimg.com/vi/AJtDXIazrMo/maxresdefault.jpg",
  },
}

// Base de conocimiento personal mejorada
const KNOWLEDGE_BASE = {
  personal: {
    nombre_completo: "Anthony",
    edad: "22 años",
    lugar_estudia: "Universidad",
    personalidad: "romántico, detallista, gracioso, inteligente, apasionado",
    gustos: "música, tecnología, películas románticas, cocinar para ti, programar",
    sueños: "construir un futuro contigo, viajar por el mundo juntos, formar una familia hermosa",
    cualidades: "leal, honesto, trabajador, soñador, protector",
  },
  relacion: {
    aniversario: "hace varios meses maravillosos",
    como_conocieron: "nos conocimos de una manera muy especial que cambió nuestras vidas",
    primer_beso: "fue mágico, bajo las estrellas, un momento que nunca olvidaré",
    momentos_especiales: "cada día contigo es especial, cada sonrisa tuya es un regalo",
    planes_futuros: "quiero pasar toda mi vida a tu lado, crear recuerdos increíbles juntos",
    primera_cita: "fue perfecta, nerviosa pero llena de magia y conexión",
  },
  sobre_glendys: {
    nombre_completo: "Glendys",
    cualidades: "hermosa, inteligente, dulce, perfecta, fuerte, inspiradora",
    lo_que_amo: "tu sonrisa que ilumina mi día, tu forma de ser auténtica, tu corazón puro",
    apodos_cariñosos: "mi amor, mi vida, mi princesa, mi todo, mi estrella",
    lo_que_admiro: "tu fortaleza, tu inteligencia, tu forma de ver la vida",
  },
}

// Sistema de IA mejorado
class AISystem {
  constructor() {
    this.isProcessing = false
  }

  async generateResponse(userMessage) {
    if (API_CONFIG.USE_REAL_AI && API_CONFIG.GROQ_API_KEY !== "TU_GROQ_API_KEY_AQUI") {
      return await this.callGroqAPI(userMessage)
    } else {
      return this.generateLocalResponse(userMessage)
    }
  }

  async callGroqAPI(userMessage) {
    try {
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
              content: `Eres Anthony, un joven de 22 años profundamente enamorado de Glendys. 
              Información personal: ${JSON.stringify(KNOWLEDGE_BASE)}
              
              Responde como Anthony, siendo romántico, detallista y personal. 
              Usa esta información para crear respuestas únicas y emotivas.
              Siempre habla en primera persona como si fueras Anthony.
              Sé específico y usa los detalles proporcionados.`,
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          temperature: 0.7,
          max_tokens: 200,
        }),
      })

      const data = await response.json()
      return data.choices[0].message.content
    } catch (error) {
      console.error("Error con Groq API:", error)
      return this.generateLocalResponse(userMessage)
    }
  }

  generateLocalResponse(userMessage) {
    const message = userMessage.toLowerCase()

    // Respuestas contextuales basadas en la base de conocimiento
    if (message.includes("amor") || message.includes("amo") || message.includes("quiero")) {
      const responses = [
        `Te amo más de lo que las palabras pueden expresar, Glendys. Eres mi ${KNOWLEDGE_BASE.sobre_glendys.apodos_cariñosos.split(", ")[Math.floor(Math.random() * 4)]}, mi razón de ser. 💕`,
        `Mi amor por ti crece cada día. Eres ${KNOWLEDGE_BASE.sobre_glendys.cualidades.split(", ")[Math.floor(Math.random() * 6)]} y perfecta en todos los sentidos. 💖`,
        `${KNOWLEDGE_BASE.sobre_glendys.lo_que_amo}. Te amo infinitamente, Glendys. 💕`,
      ]
      return responses[Math.floor(Math.random() * responses.length)]
    }

    if (message.includes("conocimos") || message.includes("conocer")) {
      return `${KNOWLEDGE_BASE.relacion.como_conocieron}. Desde el primer momento supe que eras especial, y cada día confirmo que eres la persona perfecta para mí. ✨`
    }

    if (message.includes("futuro") || message.includes("planes")) {
      return `${KNOWLEDGE_BASE.relacion.planes_futuros}. ${KNOWLEDGE_BASE.personal.sueños}. Contigo todo es posible, mi amor. 🌟`
    }

    if (message.includes("hermosa") || message.includes("bella") || message.includes("bonita")) {
      return `Eres la mujer más hermosa del mundo, por dentro y por fuera. ${KNOWLEDGE_BASE.sobre_glendys.lo_que_amo}. Tu belleza ilumina mi vida. 😍`
    }

    if (message.includes("música") || message.includes("canción")) {
      return `La música es el lenguaje de nuestro amor, Glendys. Cada canción que escuchamos juntos se vuelve especial y me recuerda a ti. 🎵 Como dice nuestra canción favorita, eres perfecta para mí.`
    }

    if (message.includes("primer beso") || message.includes("beso")) {
      return `${KNOWLEDGE_BASE.relacion.primer_beso}. Ese momento cambió mi vida para siempre, mi amor. 💋`
    }

    if (message.includes("primera cita") || message.includes("cita")) {
      return `${KNOWLEDGE_BASE.relacion.primera_cita}. Sabía que eras especial desde ese momento. 💕`
    }

    // Respuestas románticas generales
    const romanticResponses = [
      `Eres mi sueño hecho realidad, Glendys. ${KNOWLEDGE_BASE.personal.personalidad.includes("romántico") ? "Mi corazón romántico" : "Mi corazón"} late solo por ti. 💖`,
      `${KNOWLEDGE_BASE.sobre_glendys.lo_que_admiro}. No hay palabras suficientes para describir lo mucho que significas para mí. 💕`,
      `Contigo he encontrado mi hogar, mi paz, mi felicidad completa. Eres mi ${KNOWLEDGE_BASE.sobre_glendys.apodos_cariñosos.split(", ")[0]}. 🏠💕`,
      `Cada día me enamoro más de ti. ${KNOWLEDGE_BASE.sobre_glendys.cualidades.split(", ")[0]} y perfecta en todos los sentidos. 😍`,
      `Tu amor es mi fuerza, tu sonrisa mi motivación. ${KNOWLEDGE_BASE.relacion.momentos_especiales}. 💪💕`,
      `Eres mi estrella más brillante, mi guía, mi inspiración. ${KNOWLEDGE_BASE.personal.cualidades.includes("soñador") ? "Mis sueños" : "Todo"} incluye a ti. ⭐`,
    ]

    return romanticResponses[Math.floor(Math.random() * romanticResponses.length)]
  }
}

// Inicializar sistema de IA
const aiSystem = new AISystem()

// Sistema de reproducción mejorado con visualizador
class EnhancedMusicPlayer {
  constructor() {
    this.currentSong = null
    this.isPlaying = false
    this.player = null
    this.playerReady = false
    this.audioContext = null
    this.analyser = null
    this.visualizer = null
    this.settings = {
      audioQuality: "medium",
      visualizerEnabled: true,
      lowResources: false,
    }

    this.initializePlayer()
    this.loadYouTubeAPI()
    this.initializeVisualizer()
    this.loadSongCovers()
  }

  async loadSongCovers() {
    // Cargar portadas de canciones
    Object.keys(SONGS_DATABASE).forEach((songId) => {
      const song = SONGS_DATABASE[songId]
      const imgElement = document.querySelector(`[data-song="${songId}"] .cover-image`)
      if (imgElement && song.coverUrl) {
        imgElement.src = song.coverUrl
        imgElement.onerror = () => {
          // Fallback a gradiente si no carga la imagen
          imgElement.style.display = "none"
        }
      }
    })
  }

  initializeVisualizer() {
    if (!this.settings.visualizerEnabled) return

    const canvas = document.getElementById("audio-visualizer")
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    this.visualizer = {
      canvas,
      ctx,
      width: canvas.width,
      height: canvas.height,
    }

    // Redimensionar canvas cuando cambie la ventana
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      this.visualizer.width = canvas.width
      this.visualizer.height = canvas.height
    })
  }

  startVisualizer() {
    if (!this.visualizer || !this.analyser) return

    const { ctx, width, height } = this.visualizer
    const bufferLength = this.analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const draw = () => {
      if (!this.isPlaying) return

      requestAnimationFrame(draw)
      this.analyser.getByteFrequencyData(dataArray)

      ctx.clearRect(0, 0, width, height)

      // Crear efecto de ondas
      const centerX = width / 2
      const centerY = height / 2
      const maxRadius = Math.min(width, height) / 4

      for (let i = 0; i < bufferLength; i += 4) {
        const amplitude = dataArray[i] / 255
        const angle = (i / bufferLength) * Math.PI * 2
        const radius = maxRadius * amplitude

        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        ctx.beginPath()
        ctx.arc(x, y, amplitude * 3, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${(i / bufferLength) * 360}, 70%, 60%, ${amplitude})`
        ctx.fill()
      }
    }

    draw()
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
        <div class="player-content">
          <div class="song-info">
            <div class="song-title">Selecciona una canción</div>
            <div class="song-artist">para comenzar a escuchar</div>
          </div>
          <div class="player-controls">
            <button id="prev-btn" class="control-btn" title="Anterior">⏮️</button>
            <button id="play-pause-btn" class="control-btn" title="Reproducir/Pausar">▶️</button>
            <button id="next-btn" class="control-btn" title="Siguiente">⏭️</button>
            <button id="volume-btn" class="control-btn" title="Volumen">🔊</button>
            <button id="close-player-btn" class="control-btn" title="Cerrar">❌</button>
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
      this.showSuccess(`🎵 Reproduciendo: ${song.title}`)
      if (this.settings.visualizerEnabled) {
        this.startVisualizer()
      }
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
    const states = {
      [-1]: "sin iniciar",
      [0]: "terminado",
      [1]: "reproduciendo",
      [2]: "pausado",
      [3]: "buffering",
      [5]: "video cued",
    }

    const state = event.data
    console.log("Estado del player:", states[state])

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
        this.showSuccess("🎵 Canción terminada")
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
      btn.textContent = this.isPlaying ? "⏸️" : "▶️"
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
      error: "background: #ff4757; color: white;",
      success: "background: #2ed573; color: white;",
      info: "background: #3742fa; color: white;",
    }

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      z-index: 3000;
      animation: slideInRight 0.3s ease;
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
        document.getElementById("volume-btn").textContent = newVolume > 0 ? "🔊" : "🔇"
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
    }

    if (this.settings.highContrast) {
      document.body.classList.add("high-contrast")
    }

    if (this.settings.largeText) {
      document.body.classList.add("large-text")
    }

    if (this.settings.lowResources) {
      document.body.classList.add("low-resources")
    }
  }

  updateSetting(key, value) {
    this.settings[key] = value
    this.saveSettings()
    this.applySettings()
  }
}

// Inicializar sistemas
const musicPlayer = new EnhancedMusicPlayer()
const settingsManager = new SettingsManager()

// Funciones principales
async function sendMessage() {
  const input = document.getElementById("user-input")
  const message = input.value.trim()

  if (!message || aiSystem.isProcessing) return

  // Mostrar estado de carga
  const submitBtn = document.getElementById("submit-btn")
  const originalContent = submitBtn.innerHTML
  submitBtn.innerHTML = '<i data-lucide="loader-2"></i><span>Pensando...</span>'
  submitBtn.disabled = true

  // Limpiar input
  input.value = ""

  aiSystem.isProcessing = true

  try {
    // Generar respuesta de IA
    const response = await aiSystem.generateResponse(message)
    showAIResponse(response)
  } catch (error) {
    console.error("Error generando respuesta:", error)
    showAIResponse("Lo siento mi amor, hubo un error. Pero mi amor por ti nunca falla. 💕")
  } finally {
    // Restaurar botón
    submitBtn.innerHTML = originalContent
    submitBtn.disabled = false
    aiSystem.isProcessing = false

    // Reinicializar iconos
    createIcons()
  }
}

function showAIResponse(response) {
  const bubble = document.getElementById("ai-response-bubble")
  const responseText = bubble.querySelector(".response-text")

  responseText.textContent = response
  bubble.classList.remove("hidden")

  // Auto-cerrar después de 10 segundos
  setTimeout(() => {
    bubble.classList.add("hidden")
  }, 10000)
}

function closeAIResponse() {
  document.getElementById("ai-response-bubble").classList.add("hidden")
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
      <h3>💕 ${song.title}</h3>
      <p class="artist">por ${song.artist} (${song.year})</p>
      <div class="dedication-text">
        <p>${song.dedication}</p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" class="close-dedication">
        Cerrar ❤️
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

// Funciones de navegación y configuración
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
}

function closeSettings() {
  document.getElementById("settings-modal").classList.add("hidden")
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

  // Inicializar iconos
  createIcons()

  // Corazones flotantes
  setInterval(createFloatingHeart, 3000)
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
  document.getElementById("audio-quality").addEventListener("change", (e) => {
    settingsManager.updateSetting("audioQuality", e.target.value)
  })
}

function createFloatingHeart() {
  const heart = document.createElement("div")
  heart.className = "heart"
  heart.textContent = "💖"
  heart.style.left = Math.random() * 100 + "%"
  heart.style.animationDuration = Math.random() * 3 + 3 + "s"

  document.querySelector(".floating-hearts").appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 6000)
}

// Function to create icons, assuming lucide is a global object
function createIcons() {
  if (window.lucide) {
    window.lucide.createIcons()
  } else {
    console.error("Lucide variable is undeclared.")
  }
}
