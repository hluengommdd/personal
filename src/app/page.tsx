import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGauge,
  faEye,
  faChartLine,
  faPeopleRoof,
  faClipboardList,
  faUserGraduate,
  faChalkboardTeacher,
  faHeart,
  faBrain,
  faCalendarCheck,
  faSchool
} from '@fortawesome/free-solid-svg-icons'

const plataformasGestion = [
  {
    badge: 'Observación',
    icon: faEye,
    title: 'Plataforma de Observación de Aula',
    description: 'Registro y análisis de observaciones pedagógicas en aula.',
    url: 'https://observacionaula.vercel.app'
  },
  {
    badge: 'Dirección',
    icon: faChartLine,
    title: 'Plataforma Directiva de Observación',
    description: 'Visualización integrada de indicadores y datos educativos.',
    url: 'https://mi-dashboard-five.vercel.app'
  },
  {
    badge: 'Convivencia',
    icon: faPeopleRoof,
    title: 'Sistema de Gestión de Convivencia Escolar',
    description: 'Registro y seguimiento de casos y acciones de convivencia escolar.',
    url: 'https://colegios-one.vercel.app/login'
  },
  {
    badge: 'Administración',
    icon: faSchool,
    title: 'Sistema de Gestión Colegio 482',
    description: 'Gestión integral administrativa y académica del establecimiento.',
    url: 'https://sgce-zeta.vercel.app/'
  },
  {
    badge: 'Asistencia',
    icon: faCalendarCheck,
    title: 'Registro de Inasistencias',
    description: 'Control y seguimiento de asistencia de estudiantes.',
    url: 'https://registroinasistencia-xi.vercel.app/'
  }
]

const cuestionarios = [
  {
    badge: 'Estudiantes',
    icon: faUserGraduate,
    title: 'Cuestionario de Acoso Escolar - Estudiantes',
    description: 'Detección de situaciones de acoso desde la voz estudiantil.',
    url: 'https://acosoestudiante.vercel.app'
  },
  {
    badge: 'Docentes',
    icon: faChalkboardTeacher,
    title: 'Cuestionario de Acoso Escolar - Docentes',
    description: 'Instrumento para observar conductas y clima escolar.',
    url: 'https://convivencia-eu8n.vercel.app'
  },
  {
    badge: 'Desarrollo',
    icon: faHeart,
    title: 'Escala de Desarrollo Integral',
    description: 'Valoración del desarrollo personal y socioemocional.',
    url: 'https://evide-snowy.vercel.app'
  },
  {
    badge: 'Emocional',
    icon: faBrain,
    title: 'Test de Tolerancia a la Frustración',
    description: 'Evaluación de la respuesta emocional ante la frustración.',
    url: 'https://tfa-nu.vercel.app'
  }
]

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <Image
          src="/logo-oficial.png"
          alt="Logo oficial Colegio Madres Dominicas"
          width={120}
          height={120}
          className="headerLogo"
          unoptimized
        />
        <h1>Plataforma Educativa Integrada</h1>
        <p>
          Acceso central a observación de aula, dashboards directivos y cuestionarios
          institucionales en un formato moderno y eficiente.
        </p>
      </header>

      <section className="section" id="gestion">
        <h2 className="sectionTitle">
          <FontAwesomeIcon icon={faGauge} style={{ fontSize: '0.85rem' }} aria-hidden="true" />
          Plataformas de Gestión
        </h2>
        <div className="cardsGrid">
          {plataformasGestion.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.title}. ${item.description}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="badge">
                <FontAwesomeIcon icon={item.icon} style={{ fontSize: '0.65rem' }} aria-hidden="true" />
                {item.badge}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="cuestionarios">
        <h2 className="sectionTitle">
          <FontAwesomeIcon icon={faClipboardList} style={{ fontSize: '0.85rem' }} aria-hidden="true" />
          Cuestionarios
        </h2>
        <div className="cardsGrid">
          {cuestionarios.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.title}. ${item.description}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <span className="badge">
                <FontAwesomeIcon icon={item.icon} style={{ fontSize: '0.65rem' }} aria-hidden="true" />
                {item.badge}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>© 2026 Plataforma Educativa Integrada</div>
        <div><strong>Colegio Madres Dominicas de Concepción</strong></div>
      </footer>
    </main>
  )
}
