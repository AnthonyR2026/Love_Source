// Configuración de YouTube API
const MUSIC_CONFIG = {
  YOUTUBE_API_KEY: "AIzaSyAJM2Tpbf4rYTJcKfoUqSiS4oqKvUdrsbI", // Reemplaza con tu API key
  USE_YOUTUBE_API: true, // Cambiar a false para usar solo embeds
}

// Base de datos de canciones con IDs de YouTube
const SONGS_DATABASE = {
  perfect: {
    title: "Perfect",
    artist: "Ed Sheeran",
    dedication:
      "Esta canción describe exactamente cómo me siento contigo, Glendys. Eres perfecta para mí en todos los sentidos.",
    youtubeId: "2Vv-BfVoq4g",
    duration: "4:23",
    year: "2017",
  },
  thinking_out_loud: {
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    dedication:
      "Cuando pienso en nuestro futuro juntos, esta canción siempre viene a mi mente. Quiero envejecer contigo.",
    youtubeId: "lp-EO5I60KA",
    duration: "4:41",
    year: "2014",
  },
  all_of_me: {
    title: "All of Me",
    artist: "John Legend",
    dedication: "Te doy todo de mí, Glendys. Mis imperfecciones, mis sueños, mi corazón completo.",
    youtubeId: "450p7goxZqg",
    duration: "4:29",
    year: "2013",
  },
  a_thousand_years: {
    title: "A Thousand Years",
    artist: "Christina Perri",
    dedication: "He esperado mil años para encontrarte, y esperaría mil más si fuera necesario.",
    youtubeId: "rtOvBOTyX00",
    duration: "4:45",
    year: "2011",
  },
  love_me_like_you_do: {
    title: "Love Me Like You Do",
    artist: "Ellie Goulding",
    dedication: "Ámame como lo haces, con esa intensidad que me hace sentir vivo.",
    youtubeId: "AJtDXIazrMo",
    duration: "4:10",
    year: "2015",
  },
}

// Sistema de reproducción optimizado para YouTube
class YouTubeMusicPlayer {
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

// Inicializar reproductor
const musicPlayer = new YouTubeMusicPlayer()

// Función para reproducir canción
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

// Sistema de navegación
function switchSection(sectionName) {
  // Ocultar todas las secciones
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active")
  })

  // Mostrar la sección seleccionada
  document.getElementById(sectionName).classList.add("active")

  // Actualizar botones de navegación
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  event.target.classList.add("active")
}

// Sistema de IA (simulado)
const KNOWLEDGE_BASE = {
  personal: {
    nombre_completo: "Anthony",
    edad: "22 años",
    lugar_estudia: "Universidad",
    personalidad: "romántico, detallista, gracioso, inteligente",
    gustos: "música, tecnología, películas románticas, cocinar para ti",
    sueños: "construir un futuro contigo, viajar juntos, formar una familia",
  },
  relacion: {
    aniversario: "hace varios meses",
    como_conocieron: "nos conocimos de una manera muy especial",
    primer_beso: "fue mágico, bajo las estrellas",
    momentos_especiales: "cada día contigo es especial",
    planes_futuros: "quiero pasar toda mi vida a tu lado",
  },
  sobre_glendys: {
    nombre_completo: "Glendys",
    cualidades: "hermosa, inteligente, dulce, perfecta",
    lo_que_amo: "tu sonrisa, tu forma de ser, tu corazón",
    apodos_cariñosos: "mi amor, mi vida, mi princesa, mi todo",
  },
}

function sendMessage() {
  const input = document.getElementById("user-input")
  const message = input.value.trim()

  if (!message) return

  // Mostrar mensaje del usuario
  addMessage(message, "user")

  // Limpiar input
  input.value = ""

  // Simular respuesta de IA
  setTimeout(() => {
    const response = generateAIResponse(message)
    addMessage(response, "ai")
  }, 1000)
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

  // Scroll al final
  chatMessages.scrollTop = chatMessages.scrollHeight
}

function generateAIResponse(userMessage) {
  const message = userMessage.toLowerCase()

  // Respuestas sobre la relación
  if (message.includes("amor") || message.includes("amo") || message.includes("quiero")) {
    return "Te amo más de lo que las palabras pueden expresar, Glendys. Eres mi todo, mi razón de ser, mi felicidad completa. 💕"
  }

  if (message.includes("conocimos") || message.includes("conocer")) {
    return "Nos conocimos de la manera más hermosa posible. Desde el primer momento supe que eras especial, y cada día confirmo que eres la persona perfecta para mí. ✨"
  }

  if (message.includes("futuro") || message.includes("planes")) {
    return "Nuestro futuro será increíble, mi amor. Quiero construir una vida hermosa contigo, llena de aventuras, risas, y mucho amor. Tú y yo contra el mundo. 🌟"
  }

  if (message.includes("hermosa") || message.includes("bella") || message.includes("bonita")) {
    return "Eres la mujer más hermosa del mundo, por dentro y por fuera. Tu belleza ilumina mi vida y hace que cada día sea perfecto. 😍"
  }

  if (message.includes("música") || message.includes("canción")) {
    return "Cada canción que escuchamos juntos se vuelve especial. La música es el lenguaje de nuestro amor, y cada melodía me recuerda a ti. 🎵"
  }

  // Respuestas generales románticas
  const romanticResponses = [
    "Eres mi sueño hecho realidad, Glendys. Cada momento contigo es un regalo. 💖",
    "No hay palabras suficientes para describir lo mucho que significas para mí, mi amor. 💕",
    "Contigo he encontrado mi hogar, mi paz, mi felicidad completa. Te amo infinitamente. 🏠💕",
    "Eres mi estrella más brillante, mi guía, mi inspiración. Gracias por existir. ⭐",
    "Cada día me enamoro más de ti. Eres perfecta en todos los sentidos. 😍",
    "Tu amor es mi fuerza, tu sonrisa mi motivación. Eres mi todo, Glendys. 💪💕",
  ]

  return romanticResponses[Math.floor(Math.random() * romanticResponses.length)]
}

function newQuestion() {
  document.getElementById("chat-messages").innerHTML = ""
  document.getElementById("user-input").focus()
}

// Corazones flotantes
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

// Crear corazones cada 3 segundos
setInterval(createFloatingHeart, 3000)

// Event listener para Enter en el input
document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("user-input")
  if (userInput) {
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage()
      }
    })
  }
})
