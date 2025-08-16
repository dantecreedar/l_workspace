import { useState, useEffect } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Mostrar contenido después de un pequeño delay
    const timer1 = setTimeout(() => setShowContent(true), 500);
    const timer2 = setTimeout(() => setShowButton(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleContinue = () => {
    setIsLoading(true);
    // Simular carga con delay más largo (2.5 segundos)
    setTimeout(() => {
      onComplete();
    }, 2500);
  };

  return (
    <div className="loading-screen">
      {/* Background animated elements */}
      <div className="floating-icons">
        <span className="floating-icon" style={{ '--delay': '0s' } as React.CSSProperties}>🌺</span>
        <span className="floating-icon" style={{ '--delay': '2s' } as React.CSSProperties}>💕</span>
        <span className="floating-icon" style={{ '--delay': '4s' } as React.CSSProperties}>🌸</span>
        <span className="floating-icon" style={{ '--delay': '1s' } as React.CSSProperties}>✨</span>
        <span className="floating-icon" style={{ '--delay': '3s' } as React.CSSProperties}>💫</span>
        <span className="floating-icon" style={{ '--delay': '5s' } as React.CSSProperties}>🌹</span>
        <span className="floating-icon" style={{ '--delay': '1.5s' } as React.CSSProperties}>💝</span>
        <span className="floating-icon" style={{ '--delay': '3.5s' } as React.CSSProperties}>🌷</span>
      </div>
      
      <div className="loading-container">
        <div className="logo-section">
          <div className="logo-icon">🌺</div>
          <h1 className="app-title">Se Busca Personal Femenino</h1>
          <p className="app-subtitle">Estado de la vacante: Abierto</p>
        </div>

        {showContent && (
          <div className="intro-content">
            <h2 className="job-title">Estado del puesto de trabajo: Abierto</h2>
            
            <div className="job-description">
              <p>
                Como <strong>En este puesto de trabajo se busca a una persona que se dedique a la Lactancia Inducida</strong>, tu rol será fundamental 
                en el acompañamiento de personas que desean experimentar este proceso único de 
                conexión biológica y emocional.
              </p>
              
              <div className="responsibilities">
                <h3>Responsabilidades Principales:</h3>
                <ul>
                  <li>Asesoramiento médico y emocional personalizado</li>
                  <li>Diseño de protocolos hormonales individualizados</li>
                  <li>Guía en técnicas de estimulación y extracción</li>
                  <li>Acompañamiento en la dimensión íntima del proceso</li>
                  <li>Seguimiento del progreso y ajustes del tratamiento</li>
                </ul>
              </div>

              <div className="requirements">
                <h3>Perfil Requerido:</h3>
                <ul>
                  <li>Sensibilidad y empatía excepcionales</li>
                  <li>Capacidad para manejar aspectos íntimos con profesionalismo</li>
                  <li>Compromiso con la educación continua</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {showButton && (
          <div className="action-section">
            <button 
              className={`continue-btn ${isLoading ? 'loading' : ''}`}
              onClick={handleContinue}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  <div className="loading-text">
                    <span>Preparando experiencia...</span>
                    <span className="loading-dots">...</span>
                  </div>
                </>
              ) : (
                'Entrar para ver mas información'
              )}
            </button>
            
            {isLoading && (
              <div className="loading-progress">
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <p className="progress-text">Cargando la Página...</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
