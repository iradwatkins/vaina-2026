export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{
          fontSize: '4rem',
          marginBottom: '0.5rem',
          fontWeight: 800,
          letterSpacing: '-0.02em'
        }}>
          Vaina
        </h1>
        <p style={{
          fontSize: '1.5rem',
          opacity: 0.9,
          marginBottom: '3rem',
          fontWeight: 300
        }}>
          .com.do
        </p>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '3rem 2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            Próximamente
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.8,
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Tu mercado digital en República Dominicana.<br/>
            Compra, vende y encuentra de todo.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="mailto:info@vaina.com.do"
              style={{
                background: 'white',
                color: '#059669',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              Contáctanos
            </a>
          </div>
        </div>

        <p style={{
          marginTop: '3rem',
          opacity: 0.6,
          fontSize: '0.875rem'
        }}>
          © 2025 Vaina. Todos los derechos reservados.
        </p>
      </div>
    </main>
  )
}
