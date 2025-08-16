import { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';

type Phase = {
  title: string;
  description: string;
  duration: string;
  sensualityLevel: number;
  keyActions: string[];
};

type Tip = {
  title: string;
  content: string;
  icon: string;
};

export default function LactanciaInducidaApp() {
  const [activeTab, setActiveTab] = useState<'process' | 'sensuality' | 'finances' | 'office' | 'download'>('process');
  const [showExplicit, setShowExplicit] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const phases: Phase[] = [
    {
      title: "Preparación Hormonal",
      description: "El cuerpo se prepara mediante un delicado balance químico, imitando los cambios del embarazo.",
      duration: "3-4 semanas",
      sensualityLevel: 2,
      keyActions: [
        "Aplicación de estrógenos y progesterona",
        "Monitoreo médico constante",
        "Inicio de la sensibilización mamaria"
      ]
    },
    {
      title: "Estimulación Física",
      description: "La conexión íntima y la estimulación regular despiertan la respuesta fisiológica necesaria.",
      duration: "2-3 semanas",
      sensualityLevel: 4,
      keyActions: [
        "Sesiones regulares de estimulación",
        "Uso de extractor cada 2-3 horas",
        "Incorporación de técnicas"
      ]
    },
    {
      title: "Producción Activa",
      description: "El cuerpo responde al estímulo constante, comenzando la producción láctea.",
      duration: "En adelante",
      sensualityLevel: 3,
      keyActions: [
        "Mantenimiento del ritmo de extracción",
        "Ajuste de técnicas según respuesta",
        "Disfrute pleno de la conexión"
      ]
    }
  ];

  const sensualTips: Tip[] = [
    {
      title: "Ambiente Íntimo",
      content: "Crea un espacio con iluminación tenue, temperatura agradable y texturas suaves que invite a la conexión.",
      icon: "✨"
    },
    {
      title: "Ritmo Sensual",
      content: "Establece un ritmo pausado y placentero, permitiendo que la estimulación sea tanto funcional como erótica.",
      icon: "⏳"
    },
    {
      title: "Comunicación No Verbal",
      content: "Desarrolla un lenguaje corporal compartido que exprese necesidades y placer sin interrumpir el flujo.",
      icon: "💬"
    },
    {
      title: "Exploración Mutua",
      content: "Transforma cada sesión en un descubrimiento compartido de sensaciones y respuestas corporales.",
      icon: "🔍"
    }
  ];

  const professionalTips: Tip[] = [
    {
      title: "Registro Precise",
      content: "Implementa un sistema de tracking de horarios, cantidades y observaciones para optimizar el proceso.",
      icon: "📊"
    },
    {
      title: "Protocolo Científico",
      content: "Sigue un método basado en evidencia médica mientras adaptas a las necesidades personales.",
      icon: "🔬"
    },
    {
      title: "Ergonomía",
      content: "Diseña posiciones y apoyos que combinen eficiencia fisiológica con comodidad íntima.",
      icon: "🧘"
    },
    {
      title: "Tecnología Discreta",
      content: "Utiliza apps y dispositivos que faciliten el proceso sin romper la atmósfera íntima.",
      icon: "📱"
    }
  ];

  if (showLoadingScreen) {
    return <LoadingScreen onComplete={() => setShowLoadingScreen(false)} />;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Lactancia Inducida: <span className="highlight">Proyecto de lactancia</span></h1>
        <p className="subtitle">Un viaje íntimo de conexión y creación</p>
        <p className="gender-notice">👩 Se busca personal femenino</p>
        <p className="location-notice">📍 <strong>Posadas, Misiones</strong> - Argentina</p>
      </header>

      {isMobile ? (
        <MobileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <DesktopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      <div className="explicit-toggle">
        <label>
          <input 
            type="checkbox" 
            checked={showExplicit}
            onChange={() => setShowExplicit(!showExplicit)}
          />
          Mostrar contenido explícito
        </label>
      </div>

      <div className="content-wrapper">
        <main className="main-content">
          {activeTab === 'process' && (
            <section className="process-section">
              <h2>Fases del Proceso</h2>
              <div className="phase-cards">
                {phases.map((phase, index) => (
                  <div key={index} className="phase-card">
                    <div className="phase-header">
                      <span className="phase-number">0{index + 1}</span>
                      <h3>{phase.title}</h3>
                      <span className="duration-badge">{phase.duration}</span>
                    </div>
                    
                    <div className="phase-image">
                      {index === 0 && (
                        <img 
                          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center" 
                          alt="Preparación hormonal y médica"
                          className="phase-img"
                        />
                      )}
                      {index === 1 && (
                        <img 
                          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center" 
                          alt="Estimulación física y conexión"
                          className="phase-img"
                        />
                      )}
                      {index === 2 && (
                        <img 
                          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center" 
                          alt="Producción activa y mantenimiento"
                          className="phase-img"
                        />
                      )}
                    </div>
                    
                    <p>{phase.description}</p>
                    <div className="sensuality-meter">
                      <span>Intensidad: </span>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < phase.sensualityLevel ? 'active' : ''}>♥</span>
                      ))}
                    </div>
                    <ul>
                      {phase.keyActions.map((action, i) => (
                        <li key={i}>{action}</li>
                      ))}
                    </ul>
                    {showExplicit && index === 1 && (
                      <div className="explicit-note">
                        <p><strong>Nota Íntima:</strong> La estimulación manual combinada con contacto piel con piel puede aumentar significativamente la producción de oxitocina, facilitando el flujo lácteo.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'sensuality' && (
            <section className="sensuality-section">
              <h2>La Danza de la Conexión</h2>
              <div className="tip-grid">
                <div className="sensual-tips">
                  <h3>🌺 Arte Íntimo</h3>
                  <div className="tips-header-image">
                    <img 
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=200&fit=crop&crop=center" 
                      alt="Arte íntimo y sensualidad"
                      className="section-header-img"
                    />
                  </div>
                  {sensualTips.map((tip, index) => (
                    <div key={index} className="tip-card sensual">
                      <span className="tip-icon">{tip.icon}</span>
                      <h4>{tip.title}</h4>
                      <p>{tip.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="professional-tips">
                  <h3>⚙️ Excelencia Técnica</h3>
                  <div className="tips-header-image">
                    <img 
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=200&fit=crop&crop=center" 
                      alt="Excelencia técnica y profesional"
                      className="section-header-img"
                    />
                  </div>
                  {professionalTips.map((tip, index) => (
                    <div key={index} className="tip-card professional">
                      <span className="tip-icon">{tip.icon}</span>
                      <h4>{tip.title}</h4>
                      <p>{tip.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {showExplicit && (
                <div className="explicit-content">
                  <h3>Fusión de Placer y Función</h3>
                  <p>La lactancia inducida ofrece una oportunidad única para explorar la erótica de la nutrición. La estimulación mamaria, cuando se realiza con intención sensual, puede:</p>
                  <ul>
                    <li>Convertir cada sesión en un ritual de conexión</li>
                    <li>Transformar la producción láctea en un acto compartido de creación</li>
                    <li>Profundizar la intimidad a través de la vulnerabilidad controlada</li>
                  </ul>
                  <div className="erotic-note">
                    <p><em>"El acto de alimentar contiene en sí mismo una profunda carga erótica cuando se vive con conciencia plena y entrega mutua."</em> - Dra. Elena Torres, Sexóloga</p>
                  </div>
                </div>
              )}
            </section>
          )}

          {activeTab === 'finances' && (
            <section className="finance-section">
              <h2>Inversión en Conexión</h2>
              <div className="finance-cards">
                <div className="finance-card">
                  <div className="finance-card-image">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&crop=center" 
                      alt="Presupuesto base y planificación financiera"
                      className="finance-img"
                    />
                  </div>
                  <h3>📋 Presupuesto Base</h3>
                  <ul>
                    <li>Consultas especializadas: $200-$400 c/u</li>
                    <li>Hormonas y medicación: $120-$250/mes</li>
                    <li>Extractor de calidad: $300-$600</li>
                    <li>Suplementos nutricionales: $50-$100/mes</li>
                  </ul>
                </div>
                
                <div className="finance-card">
                  <div className="finance-card-image">
                    <img 
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop&crop=center" 
                      alt="Experiencia de lujo y servicios premium"
                      className="finance-img"
                    />
                  </div>
                  <h3>💎 Luxe Experience</h3>
                  <ul>
                    <li>Asesoría íntima personalizada: $150/hora</li>
                    <li>Kit de sensualidad lactante: $250-$500</li>
                    <li>Retiro de conexión: $1200+</li>
                    <li>Fotografía profesional del proceso: $800+</li>
                  </ul>
                </div>
              </div>
              
              <div className="investment-return">
                <h3>Retorno de Inversión</h3>
                <p>Más allá de lo económico, considera estos retornos intangibles:</p>
                <div className="return-items">
                  <div className="return-item">
                    <span>💞</span>
                    <p>Profundización del vínculo emocional</p>
                  </div>
                  <div className="return-item">
                    <span>🌿</span>
                    <p>Experiencia de creación biológica compartida</p>
                  </div>
                  <div className="return-item">
                    <span>⚡</span>
                    <p>Exploración de nuevas dimensiones sensuales</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'office' && (
            <section className="office-section">
              <h2>🏢 Mapa de la Oficina - <span className="highlight">Posadas, Misiones</span></h2>
              <div className="office-map-container">
                <div className="office-map">
                  <div className="floor-plan">
                    <div className="reception-area">
                      <div className="area-image">
                        <img 
                          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop&crop=center" 
                          alt="Recepción y área de bienvenida"
                          className="area-img"
                        />
                      </div>
                      <h3>🚪 Recepción</h3>
                      <p>Área de bienvenida y registro</p>
                      <div className="area-details">
                        <span>📋 Registro</span>
                        <span>🪑 Sala de espera</span>
                        <span>☕ Cafetería</span>
                      </div>
                    </div>
                    
                    <div className="consultation-rooms">
                      <div className="area-image">
                        <img 
                          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=200&fit=crop&crop=center" 
                          alt="Salas de consulta médica"
                          className="area-img"
                        />
                      </div>
                      <h3>🏥 Salas de Consulta</h3>
                      <div className="room-grid">
                        <div className="room">
                          <span className="room-number">1</span>
                          <p>Consulta General</p>
                        </div>
                        <div className="room">
                          <span className="room-number">2</span>
                          <p>Evaluación Hormonal</p>
                        </div>
                        <div className="room">
                          <span className="room-number">3</span>
                          <p>Seguimiento</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-area">
                      <h3>💆 Área de Tratamiento</h3>
                      <p>Espacio dedicado a procedimientos especializados</p>
                      <div className="area-details">
                        <span>🛏️ Camilla de tratamiento</span>
                        <span>🔬 Equipos médicos</span>
                        <span>🧴 Materiales especializados</span>
                      </div>
                    </div>
                    
                    <div className="intimate-space">
                      <h3>🌹 Espacio Íntimo</h3>
                      <p>Área privada para sesiones de estimulación</p>
                      <div className="area-details">
                        <span>🕯️ Ambiente relajante</span>
                        <span>🎵 Música ambiental</span>
                        <span>🪞 Espejos de cuerpo completo</span>
                      </div>
                    </div>
                    
                    <div className="storage-room">
                      <h3>📦 Almacén</h3>
                      <p>Suministros médicos y equipos</p>
                    </div>
                    
                    <div className="staff-room">
                      <h3>👥 Sala de Personal</h3>
                      <p>Área de descanso para el equipo</p>
                    </div>
                  </div>
                </div>
                
                <div className="office-info">
                  <h3>📍 Información de Ubicación</h3>
                  <div className="info-card">
                    <p><strong>🏢 Oficina:</strong> Wop Coworking</p>
                    <p><strong>📍 Dirección:</strong> Av. Roque Pérez 1615, N3300 Posadas, Misiones</p>
                    <p><strong>🕒 Horarios:</strong> General con cita previa</p>
                    <p><strong>📞 Contacto:</strong> <a href="https://www.facebook.com/profile.php?id=61578721067629" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    <p><strong>🚗 Estacionamiento:</strong> Disponible en el lugar</p>
                    <p><strong>⚠️ Importante:</strong> Las reuniones son con cita programada</p>
                  </div>
                  
                  <div className="map-container">
                    <h4>🗺️ Ubicación en el Mapa</h4>
                    <div className="map-frame">
                      <div className="map-placeholder">
                        <div className="map-content">
                          <div className="map-icon">🗺️</div>
                          <h5>Wop Coworking - Posadas, Misiones</h5>
                          <p><strong>Av. Roque Pérez 1615, N3300</strong></p>
                          <div className="map-coordinates">
                            <span>🌍 Coordenadas: -27.3671°S, -55.8968°W</span>
                          </div>
                          <div className="map-actions">
                            <a 
                              href="https://www.google.com/maps?q=Av.+Roque+Pérez+1615,+Posadas,+Misiones,+Argentina" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="map-link"
                            >
                              📍 Abrir en Google Maps
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="map-note">📍 Wop Coworking - Espacio de trabajo colaborativo en Posadas</p>
                  </div>
                  

                  <div className="appointment-info">
                    <h4>📅 Citas y Reuniones</h4>
                    <div className="appointment-card">
                      <p><strong>🔒 Sistema de Citas:</strong></p>
                      <ul>
                        <li>Todas las consultas requieren cita previa</li>
                        <li>Reserva tu horario con anticipación</li>
                        <li>Confirmación 24h antes de la cita</li>
                        <li>Cancelación con 48h de anticipación</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'download' && (
            <section className="download-section">
              <h2>📄 Descargar Informe del Contrato - <span className="highlight">Posadas, Misiones</span></h2>
              
              <div className="contract-info">
                <div className="contract-overview">
                  <h3>📋 Resumen del Contrato</h3>
                  <p>
                    Este documento contiene toda la información detallada sobre el puesto de trabajo, 
                    responsabilidades, requisitos y condiciones del contrato para el cargo de 
                    <strong> Especialista en Lactancia Inducida</strong> en <strong>Posadas, Misiones</strong>.
                  </p>
                </div>

                <div className="contract-details">
                  <h3>📝 Contenido del Informe</h3>
                  <div className="content-list">
                    <div className="content-item">
                      <span className="content-icon">🎯</span>
                      <div>
                        <h4>Objetivo del Trabajo</h4>
                        <p>Descripción detallada de la misión y visión del puesto</p>
                      </div>
                    </div>
                    
                    <div className="content-item">
                      <span className="content-icon">👩‍⚕️</span>
                      <div>
                        <h4>Perfil del Candidato</h4>
                        <p>Requisitos académicos, experiencia y habilidades necesarias</p>
                      </div>
                    </div>
                    
                    <div className="content-item">
                      <span className="content-icon">📋</span>
                      <div>
                        <h4>Responsabilidades</h4>
                        <p>Lista completa de funciones y deberes del puesto</p>
                      </div>
                    </div>
                    
                    <div className="content-item">
                      <span className="content-icon">💰</span>
                      <div>
                        <h4>Condiciones Laborales</h4>
                        <p>Salario, horarios, beneficios y modalidad de trabajo</p>
                      </div>
                    </div>
                    
                    <div className="content-item">
                      <span className="content-icon">📍</span>
                      <div>
                        <h4>Ubicación y Horarios</h4>
                        <p>Detalles sobre la oficina en <strong>Posadas, Misiones</strong> y flexibilidad horaria</p>
                      </div>
                    </div>
                    
                    <div className="content-item">
                      <span className="content-icon">📞</span>
                      <div>
                        <h4>Proceso de Aplicación</h4>
                        <p>Pasos para postularse y contacto directo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="download-actions">
                  <h3>⬇️ Descargar Documento</h3>
                  <div className="download-buttons">
                    <a 
                      href="/📌 Posición Disponible_.pdf" 
                      download="📌 Posición Disponible_.pdf"
                      className="download-btn pdf"
                    >
                      <span className="btn-icon">📄</span>
                      <span className="btn-text">Descargar PDF</span>
                      <span className="btn-size">(2.3 MB)</span>
                    </a>
                  </div>
                  
                  <div className="download-note">
                    <p>💡 <strong>Consejo:</strong> Descarga el PDF para la mejor visualización del documento</p>
                    <p>📱 El documento es compatible con todos los dispositivos</p>
                  </div>
                </div>

                <div className="contact-section">
                  <h3>📞 ¿Tienes Preguntas?</h3>
                  <p>
                    Si necesitas más información sobre el contrato o tienes dudas sobre el puesto en <strong>Posadas, Misiones</strong>, 
                    no dudes en contactarnos directamente.
                  </p>
                  <div className="contact-buttons">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61578721067629" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-btn facebook"
                    >
                      <span className="btn-icon">📘</span>
                      Contactar por Facebook
                    </a>
                    
                    <a 
                      href="mailto:santesrocio251@gmail.com?subject=Consulta sobre puesto de Especialista en Lactancia Inducida&body=Hola, me interesa el puesto de Especialista en Lactancia Inducida y me gustaría obtener más información."
                      className="contact-btn email"
                    >
                      <span className="btn-icon">📧</span>
                      santesrocio251@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

const MobileNavigation = ({ activeTab, setActiveTab }: {
  activeTab: string;
  setActiveTab: (tab: 'process' | 'sensuality' | 'finances' | 'office' | 'download') => void;
}) => (
  <nav className="mobile-nav">
    <button 
      onClick={() => setActiveTab('process')} 
      className={activeTab === 'process' ? 'active' : ''}
      aria-label="Proceso técnico"
    >
      <span className="icon">🧪</span>
      <span className="label">Proceso</span>
    </button>
    <button 
      onClick={() => setActiveTab('sensuality')} 
      className={activeTab === 'sensuality' ? 'active' : ''}
      aria-label="Dimensión íntima"
    >
      <span className="icon">🌹</span>
      <span className="label">Íntima</span>
    </button>
    <button 
      onClick={() => setActiveTab('finances')} 
      className={activeTab === 'finances' ? 'active' : ''}
      aria-label="Aspectos financieros"
    >
      <span className="icon">💰</span>
      <span className="label">Finanzas</span>
    </button>
    <button 
      onClick={() => setActiveTab('office')} 
      className={activeTab === 'office' ? 'active' : ''}
      aria-label="Mapa de la oficina"
    >
      <span className="icon">🏢</span>
      <span className="label">Oficina</span>
    </button>
    <button 
      onClick={() => setActiveTab('download')} 
      className={activeTab === 'download' ? 'active' : ''}
      aria-label="Descargar informe"
    >
      <span className="icon">📄</span>
      <span className="label">Descargar</span>
    </button>
  </nav>
);

const DesktopNavigation = ({ activeTab, setActiveTab }: {
  activeTab: string;
  setActiveTab: (tab: 'process' | 'sensuality' | 'finances' | 'office' | 'download') => void;
}) => (
  <nav className="desktop-nav">
    <button 
      className={activeTab === 'process' ? 'active' : ''} 
      onClick={() => setActiveTab('process')}
    >
      Proceso Técnico
    </button>
    <button 
      className={activeTab === 'sensuality' ? 'active' : ''} 
      onClick={() => setActiveTab('sensuality')}
    >
      Dimensión Intima
    </button>
    <button 
      className={activeTab === 'finances' ? 'active' : ''} 
      onClick={() => setActiveTab('finances')}
    >
      Aspectos Financieros
    </button>
    <button 
      className={activeTab === 'office' ? 'active' : ''} 
      onClick={() => setActiveTab('office')}
    >
      Mapa de la Oficina
    </button>
    <button 
      className={activeTab === 'download' ? 'active' : ''} 
      onClick={() => setActiveTab('download')}
    >
      Descargar Informe
    </button>
  </nav>
);

const Footer = () => (
  <footer className="app-footer">
    <p>© {new Date().getFullYear()} Lactance · <strong>Posadas, Misiones</strong> · Todos los derechos reservados</p>
    <p className="disclaimer">Este contenido es para fines educativos e informativos.</p>
  </footer>
);