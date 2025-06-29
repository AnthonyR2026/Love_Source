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
  // Puedes añadir más canciones fácilmente
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
    // Cargar YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

      // Callback cuando la API esté lista
      window.onYouTubeIframeAPIReady = () => {
        window.YT = window.YT || {}
        window.YT.Player = window.YT.Player || {}
        this.playerReady = true
        console.log("YouTube API cargada correctamente")
      }
    }
  }

  initializePlayer() {
    // Crear reproductor flotante
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
        <!-- YouTube player se insertará aquí -->
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

    // Esperar a que YouTube API esté lista
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
        // Destruir player anterior si existe
        if (this.player) {
          this.player.destroy()
        }

        // Crear nuevo player
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
    // Play/Pause
    document.getElementById("play-pause-btn").addEventListener("click", () => {
      this.togglePlayPause()
    })

    // Cerrar player
    document.getElementById("close-player-btn").addEventListener("click", () => {
      this.hidePlayer()
    })

    // Control de volumen
    document.getElementById("volume-btn").addEventListener("click", () => {
      if (this.player) {
        const currentVolume = this.player.getVolume()
        const newVolume = currentVolume > 0 ? 0 : 50
        this.player.setVolume(newVolume)
        document.getElementById("volume-btn").textContent = newVolume > 0 ? "🔊" : "🔇"
      }
    })

    // Barra de progreso clickeable
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

// Función para reproducir canción (llamada desde los botones)
function playSong(songId) {
  musicPlayer.playSong(songId)

  // Mostrar dedicatoria después de un momento
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

  // Auto-cerrar después de 15 segundos
  setTimeout(() => {
    if (modal.parentElement) {
      modal.remove()
    }
  }, 15000)
}

// Configuración de la IA
const AI_CONFIG = {
    USE_REAL_AI: false, // Cambiar a true para usar OpenAI real
    API_KEY: '', // Añadir tu API key de OpenAI aquí
    API_URL: 'https://api.openai.com/v1/chat/completions'
};

// Base de conocimiento de Anthony
const KNOWLEDGE_BASE = {
    personal: {
        nombre_completo: "Anthony Bethel Rodriguez Moreno",
        primer_nombre: "Anthony",
        segundo_nombre: "Bethel", 
        primer_apellido: "Rodriguez",
        segundo_apellido: "Moreno",
        edad: "16",
        cumpleanos: "20 de octubre",
        año_nacimiento: "2008",
        signo: "Libra",
        colores_favoritos: ["Negro", "Blanco", "Azul Royale"],
        comidas_favoritas: ["Lazaña", "Macarrones"],
        hobbies_favoritos: ["Programar juegos", "Jugar PlayStation", "Aprender nuevas cosas", "Hacer ejercicio"],
        libro_favorito: "La Divina Comedia",
        altura: "1.74m",
        tipo_cabello: "Ondulado",
        tipo_ejercicio: "Calistenia",
        lugar_nacimiento: "Ciudad de Panama",
        lugar_vive: "Pacora/Panama",
        lugar_estudia: "Instituto Comercial de Panama",
        bachiller: "Bachiller en Ciencias",
        carrera_quiere: "Ingenieria en Sistemas",
        universidad_quiere: "Universidad Tecnologica de Panama"
    },
    
    relacion: {
        como_conocieron: "Un dia cualquier mi novia en ese momento que era la mejor amiga de Glendys. Me presento hay conoci a Glendys. La conoci ya hace mas de 1 año y no fue amor a primera vista",
        aniversario: "3 de Diciembre",
        momento_enamoramiento: "Me enamore de ella el 22 de Agosto del 2024 por un descubrimiento asombroso y maravilloso que me hizo verla con otros ojos",
        primera_vez_te_amo: "La primera vez que dije Te Amo fue en un viaje en un bus donde basicamente era el ultimo dia que nos ibamos a ver en mucho tiempo. donde simplemente no lo dije en español sino en Inlges diciendo I Love You",
        recuerdo_bonito: "El dia que me confese a ella y le pedi ser mi novia fue un momento donde ella se encontraba recostada en mis pies y yo le di las palabras ¿Quieres Ser mi Novia? y ella no me respondio con palabras sino con un beso",
        planes_futuros: "Tengo planes claros con ella y son basicamente primero completar con exito nuestros estudios y trabajar a los 18, para luego centrarnos en conseguir una casa. luego mejor nuestra economia de pareja, luego divertirnos y viajar a todos lados y hacer todo tipo de cosas, luego quiero casarme con ella y para finalizar formar una familia muy hermosa y unida con ella"
    },
    
    sobre_glendys: {
        nombre_completo: "Glendys Alesly Martinez Porras",
        edad: "17",
        cumpleanos: "23 de Septiembre", 
        lugar_vive: "Nuevo Tocumen",
        lugar_estudia: "Colegio Richard Neumann",
        bachiller: "Bachiller en Turismo",
        es_indigena: true,
        lugar_quiere_ir: "Francia/Paris",
        carrera_posible: "Gestion Hotelera",
        tipo_cabello: "Liso",
        colores_favoritos: ["Blanco", "Negro"]
    },
    
    apodos: [
        "Mi amor", "Mi Princesa", "Mi Corazón de limón", "Mi Vida", 
        "Mi amorcito", "Mi reina", "Mi cielo", "Mamol", "Querida mía", "Amor", "Amor mío"
    ],
    
    cualidades_favoritas: [
        "Su sonrisa hermosa", "Su forma de ser cariñosa", "Su estatura",
        "Su cabello y ojos lindos", "Su forma de cuidarme", "Su forma de pensar parecida a la mia",
        "Su manera de cuidar a los que quiere", "El valor que le da a el amor de alguien"
    ],
    
    frases_romanticas: [
        "Cada día que pasa me enamoro más de ti, Glendys.",
        "Eres el sueño que nunca supe que tenía hasta que te conocí.",
        "Contigo aprendí lo que es amar de verdad.",
        "No hay distancia ni tiempo que pueda separar lo que siento por ti.",
        "Cuando estoy contigo, el mundo entero desaparece.",
        "Tu sonrisa es la luz que ilumina mis días más oscuros.",
        "Eres mi presente y quiero que seas mi futuro.",
        "Cada latido de mi corazón tiene tu nombre.",
        "No hay palabras suficientes para describir lo que siento por ti.",
        "Eres el amor que siempre soñé encontrar."
    ],
    
    inicios_respuestas: [
        "Mi amor, ", "Glendys, mi princesa, ", "Mi corazón de limón, ",
        "Mi vida, ", "Mi reina hermosa, ", "Mi cielo, ", "Querida mía, ",
        "Amor de mi vida, ", "Mi todo, ", "Mi dulce Glendys, "
    ],
    
    finales_respuestas: [
        "Te amo infinitamente. ❤️", "Eres mi todo, nunca lo olvides. 💖",
        "Cada día te amo más. 💕", "Eres lo mejor que me ha pasado. ✨",
        "No puedo imaginar mi vida sin ti. 💘", "Eres mi mayor bendición. 🙏",
        "Gracias por existir en mi vida. 💝", "Eres mi sueño hecho realidad. 💫"
    ]
};

// Variables globales
let currentSection = 'inicio';
let isProcessing = false;
let currentSong = null;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    createFloatingHearts();
    setupEventListeners();
    showWelcomeScreen();
}

// Crear corazones flotantes
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (6 + Math.random() * 6) + 's';
        container.appendChild(heart);
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Navegación
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            switchSection(section);
        });
    });

    // Formulario de IA
    const aiForm = document.getElementById('aiForm');
    aiForm.addEventListener('submit', handleAIQuestion);

    // Sugerencias
    const suggestionButtons = document.querySelectorAll('.suggestion-btn');
    suggestionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.dataset.question;
            document.getElementById('questionInput').value = question;
        });
    });

    // Botones de respuesta
    document.getElementById('newQuestionBtn').addEventListener('click', showQuestionForm);
    document.getElementById('closeBtn').addEventListener('click', showQuestionForm);

    // Reproductor de música
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const song = btn.dataset.song;
            toggleSong(song);
        });
    });

    document.getElementById('playerPause').addEventListener('click', stopCurrentSong);
}

// Mostrar pantalla de bienvenida
function showWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    
    setTimeout(() => {
        welcomeScreen.style.animation = 'fadeOut 1s ease-out forwards';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.classList.add('visible');
        }, 1000);
    }, 4000);
}

// Cambiar sección
function switchSection(sectionId) {
    // Actualizar navegación
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

    // Actualizar secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`section-${sectionId}`).classList.add('active');

    // Actualizar subtítulo del header
    const subtitles = {
        'inicio': 'Pregúntame lo que quieras, mi amor 💕',
        'notas': 'Mis notas de amor para ti 📝',
        'canciones': 'Nuestras canciones especiales 🎵',
        'confesiones': 'Lo que mi corazón quiere decirte 💖',
        'poemas': 'Versos escritos para ti 📖',
        'timeline': 'Nuestra historia de amor ⏰'
    };
    
    document.getElementById('headerSubtitle').textContent = subtitles[sectionId];
    currentSection = sectionId;

    // Si cambiamos de sección desde inicio, mostrar formulario
    if (sectionId === 'inicio') {
        showQuestionForm();
    }
}

// Manejar pregunta de IA
async function handleAIQuestion(e) {
    e.preventDefault();
    
    if (isProcessing) return;
    
    const input = document.getElementById('questionInput');
    const question = input.value.trim();
    
    if (!question) return;
    
    isProcessing = true;
    updateSubmitButton(true);
    
    // Simular procesamiento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    showAIResponse(question);
    isProcessing = false;
    updateSubmitButton(false);
}

// Actualizar botón de envío
function updateSubmitButton(loading) {
    const btn = document.getElementById('submitBtn');
    const btnText = btn.querySelector('.btn-text');
    const btnIcon = btn.querySelector('.btn-icon');
    
    if (loading) {
        btn.disabled = true;
        btnIcon.innerHTML = '<div style="width: 20px; height: 20px; border: 2px solid white; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>';
        btnText.textContent = 'Anthony está pensando...';
    } else {
        btn.disabled = false;
        btnIcon.textContent = '💖';
        btnText.textContent = 'Preguntar con Amor';
    }
}

// Mostrar respuesta de IA
function showAIResponse(question) {
    document.getElementById('questionForm').style.display = 'none';
    document.getElementById('questionDisplay').textContent = `"${question}"`;
    
    const aiResponse = document.getElementById('aiResponse');
    aiResponse.classList.remove('hidden');
    
    // Mostrar loading
    const loadingResponse = document.getElementById('loadingResponse');
    const answerText = document.getElementById('answerText');
    loadingResponse.style.display = 'flex';
    
    // Generar respuesta
    setTimeout(async () => {
        let answer;
        
        if (AI_CONFIG.USE_REAL_AI && AI_CONFIG.API_KEY) {
            answer = await getAIResponse(question);
        } else {
            answer = generateSimulatedResponse(question);
        }
        
        loadingResponse.style.display = 'none';
        answerText.innerHTML = `<div style="animation: fadeIn 0.5s ease-out;">${answer}</div>`;
    }, 2000);
}

// Obtener respuesta de IA real (OpenAI)
async function getAIResponse(question) {
    if (!AI_CONFIG.API_KEY) {
        return generateSimulatedResponse(question);
    }
    
    try {
        const systemPrompt = `Eres Anthony Bethel Rodriguez Moreno, un chico de 16 años que está profundamente enamorado de su novia Glendys Alesly Martinez Porras. Respondes como Anthony directamente a Glendys con mucho amor y cariño.

INFORMACIÓN PERSONAL DE ANTHONY:
- Nombre completo: Anthony Bethel Rodriguez Moreno
- Edad: 16 años (nacido el 20 de octubre de 2008)
- Signo: Libra
- Estudia: Bachiller en Ciencias en el Instituto Comercial de Panama
- Quiere estudiar: Ingenieria en Sistemas en la Universidad Tecnologica de Panama
- Vive en: Pacora/Panama (viene de Veraguas)
- Colores favoritos: Negro, Blanco, Azul Royale
- Comidas favoritas: Lazaña, Macarrones
- Hobbies: Programar juegos, Jugar PlayStation, Aprender nuevas cosas, Hacer ejercicio (calistenia)
- Libro favorito: La Divina Comedia
- Altura: 1.74m
- Tipo de cabello: Ondulado

INFORMACIÓN SOBRE GLENDYS:
- Nombre completo: Glendys Alesly Martinez Porras
- Edad: 17 años (cumple el 23 de Septiembre)
- Estudia: Bachiller en Turismo en el Colegio Richard Neumann
- Vive en: Nuevo Tocumen
- Es indígena (viene de una isla)
- Quiere ir a: Francia/Paris
- Posible carrera: Gestión Hotelera
- Tipo de cabello: Liso
- Colores favoritos: Blanco y negro

SOBRE SU RELACIÓN:
- Aniversario: 3 de Diciembre de 2024
- Se conocieron: A través de la mejor amiga de Glendys que era novia de Anthony en ese momento, hace más de 1 año
- Se enamoró: 22 de Agosto del 2024 por un descubrimiento asombroso
- Primera vez que dijo "Te amo": En un bus, en inglés "I Love You"
- Momento más bonito: Cuando le pidió ser su novia, ella estaba recostada en sus pies y le respondió con un beso

APODOS QUE LE DICE A GLENDYS:
Mi amor, Mi Princesa, Mi Corazón de limón, Mi Vida, Mi amorcito, Mi reina, Mi cielo, Mamol, Querida mía, Amor, Amor mío

PLANES FUTUROS:
Completar estudios, trabajar a los 18, conseguir una casa, mejorar economía de pareja, viajar juntos, casarse, formar una familia hermosa

INSTRUCCIONES:
1. Responde SIEMPRE como Anthony hablándole directamente a Glendys
2. Usa un tono amoroso, romántico y personal
3. Incluye detalles específicos de la información proporcionada cuando sea relevante
4. Usa los apodos cariñosos ocasionalmente
5. Mantén las respuestas naturales y conversacionales
6. Si no sabes algo específico, sé honesto pero mantén el tono amoroso
7. Responde en español
8. Haz que cada respuesta se sienta personal y desde el corazón`;

        const response = await fetch(AI_CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AI_CONFIG.API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: question }
                ],
                temperature: 0.8,
                max_tokens: 500
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error with AI API:', error);
        return generateSimulatedResponse(question);
    }
}

// Generar respuesta simulada inteligente
function generateSimulatedResponse(question) {
    const lowerQuestion = question.toLowerCase().trim();
    
    // Función para obtener elementos aleatorios
    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
    const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
    
    // Iniciar con un saludo aleatorio
    const inicio = getRandomElement(KNOWLEDGE_BASE.inicios_respuestas);
    const final = getRandomElement(KNOWLEDGE_BASE.finales_respuestas);
    
    // Añadir frase romántica ocasionalmente
    const incluirFraseRomantica = Math.random() < 0.3;
    const fraseRomantica = incluirFraseRomantica ? getRandomElement(KNOWLEDGE_BASE.frases_romanticas) + " " : "";
    
    let respuestaBase = "";
    
    // Detectar tipo de pregunta y generar respuesta apropiada
    if (lowerQuestion.includes('amas') || lowerQuestion.includes('quieres') || lowerQuestion.includes('amor')) {
        respuestaBase = `te amo más que a nada en este mundo. Eres la persona más importante en mi vida y cada día me enamoro más de ti. Mi amor por ti es infinito y verdadero.`;
    } else if (lowerQuestion.includes('nombre') || lowerQuestion.includes('llamas')) {
        respuestaBase = `me llamo ${KNOWLEDGE_BASE.personal.nombre_completo}, pero para ti soy simplemente tu Anthony que te ama con todo su corazón.`;
    } else if (lowerQuestion.includes('edad') || lowerQuestion.includes('años')) {
        respuestaBase = `tengo ${KNOWLEDGE_BASE.personal.edad} años y cumplo el ${KNOWLEDGE_BASE.personal.cumpleanos}. Cada año que pasa agradezco más tenerte en mi vida.`;
    } else if (lowerQuestion.includes('estudias') || lowerQuestion.includes('colegio') || lowerQuestion.includes('escuela')) {
        respuestaBase = `estudio ${KNOWLEDGE_BASE.personal.bachiller} en el ${KNOWLEDGE_BASE.personal.lugar_estudia}. Quiero estudiar ${KNOWLEDGE_BASE.personal.carrera_quiere} para poder darte un futuro brillante juntos.`;
    } else if (lowerQuestion.includes('vives') || lowerQuestion.includes('casa') || lowerQuestion.includes('donde')) {
        respuestaBase = `vivo en ${KNOWLEDGE_BASE.personal.lugar_vive}, pero mi verdadero hogar está donde tú estés. Contigo me siento en casa sin importar el lugar.`;
    } else if (lowerQuestion.includes('color') || lowerQuestion.includes('favorito')) {
        respuestaBase = `mis colores favoritos son ${KNOWLEDGE_BASE.personal.colores_favoritos.join(", ")}, pero desde que te conocí, mi color favorito es el que veo en tus ojos cuando me miras.`;
    } else if (lowerQuestion.includes('comida')) {
        respuestaBase = `me encanta ${KNOWLEDGE_BASE.personal.comidas_favoritas.join(" y ")}, pero cualquier comida sabe mejor cuando la comparto contigo.`;
    } else if (lowerQuestion.includes('aniversario') || lowerQuestion.includes('cuando')) {
        respuestaBase = `nuestro aniversario es el ${KNOWLEDGE_BASE.relacion.aniversario}. Ese día cambió mi vida para siempre cuando aceptaste ser mi novia con ese beso tan hermoso.`;
    } else if (lowerQuestion.includes('conocimos') || lowerQuestion.includes('primera vez')) {
        respuestaBase = `${KNOWLEDGE_BASE.relacion.como_conocieron} Y aunque no fue amor a primera vista, ahora no puedo imaginar mi vida sin ti.`;
    } else if (lowerQuestion.includes('planes') || lowerQuestion.includes('futuro')) {
        respuestaBase = `${KNOWLEDGE_BASE.relacion.planes_futuros} Tengo muy claro que quiero pasar el resto de mi vida contigo.`;
    } else if (lowerQuestion.includes('dices') || lowerQuestion.includes('llamas') || lowerQuestion.includes('apodo')) {
        const apodos = KNOWLEDGE_BASE.apodos.slice(0, 3);
        respuestaBase = `me encanta llamarte ${apodos.join(", ")}. Cada apodo refleja una parte de lo especial que eres para mí.`;
    } else if (lowerQuestion.includes('gusta') && lowerQuestion.includes('mi')) {
        const cualidades = KNOWLEDGE_BASE.cualidades_favoritas.slice(0, 3);
        respuestaBase = `amo tantas cosas de ti... especialmente ${cualidades.join(", ")}. Eres perfecta para mí en todos los sentidos.`;
    } else {
        // Respuesta general romántica
        const opciones = [
            `quiero que sepas que eres lo más importante en mi vida. Cada día agradezco tenerte a mi lado.`,
            `pienso en ti todo el tiempo. Eres mi inspiración y mi razón para ser mejor cada día.`,
            `desde que estás en mi vida todo tiene más sentido. Contigo he aprendido lo que es amar de verdad.`,
            `no hay palabras suficientes para expresar lo que siento por ti. Mi amor va más allá de cualquier palabra.`,
            `eres mi sueño hecho realidad. Nunca pensé que podría amar tanto a alguien como te amo a ti.`,
            `cada momento contigo es un tesoro que guardo en mi corazón. Eres mi mayor bendición.`
        ];
        respuestaBase = getRandomElement(opciones);
    }
    
    return inicio + capitalize(respuestaBase) + " " + fraseRomantica + final;
}

// Mostrar formulario de preguntas
function showQuestionForm() {
    document.getElementById('aiResponse').classList.add('hidden');
    document.getElementById('questionForm').style.display = 'block';
    document.getElementById('questionInput').value = '';
    document.getElementById('questionInput').focus();
}

// Funciones de música
function toggleSong(songId) {
    if (currentSong === songId) {
        stopCurrentSong();
    } else {
        playSong(songId);
    }
}

function playSong(songId) {
    currentSong = songId;
    
    // Actualizar botón de reproducción
    document.querySelectorAll('.play-btn').forEach(btn => {
        const icon = btn.querySelector('.play-icon');
        if (btn.dataset.song === songId) {
            icon.textContent = '⏸️';
            btn.parentElement.parentElement.classList.add('playing');
        } else {
            icon.textContent = '▶️';
            btn.parentElement.parentElement.classList.remove('playing');
        }
    });
    
    // Mostrar reproductor flotante
    const player = document.getElementById('floatingPlayer');
    const songData = getSongData(songId);
    
    document.getElementById('playerTitle').textContent = songData.title;
    document.getElementById('playerArtist').textContent = songData.artist;
    player.classList.remove('hidden');
}

function stopCurrentSong() {
    if (!currentSong) return;
    
    // Actualizar botones
    document.querySelectorAll('.play-btn').forEach(btn => {
        const icon = btn.querySelector('.play-icon');
        icon.textContent = '▶️';
        btn.parentElement.parentElement.classList.remove('playing');
    });
    
    // Ocultar reproductor
    document.getElementById('floatingPlayer').classList.add('hidden');
    currentSong = null;
}

function getSongData(songId) {
    const songs = {
        'heather': {
            title: 'Heather',
            artist: 'Conan Gray'
        }
    };
    
    return songs[songId] || { title: 'Canción', artist: 'Artista' };
}

// Añadir animación de spin para loading
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .playing .song-image::after {
        content: '';
        position: absolute;
        inset: 0;
        border: 4px solid rgba(255, 255, 255, 0.4);
        border-radius: 1rem;
        animation: vinylSpin 3s linear infinite;
    }
    
    @keyframes vinylSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Funciones de utilidad
function addCSS(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
