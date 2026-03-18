import { useState } from 'react';
import './index.css';
import { ChevronRight } from 'lucide-react';

// Данные
const HERO_SLIDES = [
  {
    img: 'https://avatars.mds.yandex.net/get-altay/4336915/2a0000017758c7aacd777df5b4b053fdecf5/L_height',
    title: 'Твоё будущее начинается здесь',
    subtitle: 'Тольяттинский социально-педагогический колледж',
    label: 'Приём документов с 1 июня 2026',
  },
  {
    img: 'https://sun9-64.userapi.com/impf/Gw6yftMfPK7mKf8ZvwyOvT48ZCbJyw1LWJDgEg/e6lr_AulRoU.jpg?size=1920x768&quality=95&crop=19,91,1154,462&sign=bbad2b75d5ec0cdeb548b588412cc1a6&type=cover_group',
    title: 'Выбери свою специальность',
    subtitle: '10 направлений подготовки',
    label: 'Бюджетные и платные места',
  },
];

const SPECIALTIES = [
  {
    id: 1,
    name: 'Дошкольное образование',
    category: 'Педагогика',
    budgetPlaces: 25,
    paidPlaces: 10,
    duration: '2 г. 10 мес.',
    exam: 'Собеседование',
    icon: '👶',
  },
  {
    id: 2,
    name: 'Преподавание в начальных классах',
    category: 'Педагогика',
    budgetPlaces: 25,
    paidPlaces: 10,
    duration: '3 г. 10 мес.',
    exam: 'Собеседование',
    icon: '📚',
  },
  {
    id: 3,
    name: 'Информационные системы',
    category: 'IT',
    budgetPlaces: 25,
    paidPlaces: 10,
    duration: '3 г. 10 мес.',
    exam: 'Средний балл аттестата',
    icon: '💻',
  },
  {
    id: 4,
    name: 'Физическая культура',
    category: 'Спорт',
    budgetPlaces: 25,
    paidPlaces: 10,
    duration: '2 г. 10 мес.',
    exam: 'ОФП',
    icon: '⚽',
  },
  {
    id: 5,
    name: 'Социальная работа',
    category: 'Социальная сфера',
    budgetPlaces: 20,
    paidPlaces: 8,
    duration: '2 г. 10 мес.',
    exam: 'Средний балл аттестата',
    icon: '🤝',
  },
  {
    id: 6,
    name: 'Адаптивная физкультура',
    category: 'Спорт',
    budgetPlaces: 20,
    paidPlaces: 8,
    duration: '2 г. 10 мес.',
    exam: 'ОФП',
    icon: '🏃',
  },
];

const STEPS = [
  { num: '01', title: 'Выбор специальности', desc: 'Ознакомься с направлениями на сайте' },
  { num: '02', title: 'Подача документов', desc: 'С 1 июня по 10 августа 2026' },
  { num: '03', title: 'Вступительные испытания', desc: 'Для педагогических специальностей' },
  { num: '04', title: 'Отслеживание рейтинга', desc: 'Ежедневное обновление на сайте' },
  { num: '05', title: 'Зачисление', desc: 'Приказы публикуются в конце августа' },
];

const NEWS = [
  {
    date: '15 марта 2026',
    title: 'День открытых дверей',
    desc: 'Приглашаем абитуриентов и родителей 5 апреля в 12:00',
  },
  {
    date: '1 марта 2026',
    title: 'Начало приёма документов',
    desc: 'С 1 июня начинаем принимать документы на все специальности',
  },
  {
    date: '20 февраля 2026',
    title: 'Новая специальность',
    desc: 'Открываем набор на "Оператор информационных систем"',
  },
];

const TEACHERS = [
  { name: 'Ряполова Е. О.', subject: 'Английский язык', exp: '?', img: '👩‍🏫' },
  { name: 'Романова Т. Н.', subject: 'Информатика', exp: '?', img: '👨‍💻' },
  { name: 'Олейников Ю А.', subject: 'Физкультура', exp: '?', img: '🏃‍♀️' },
  { name: 'Романова Т. Н.', subject: 'Математика', exp: '?', img: '🧑‍🏫' },
];

const REVIEWS = [
  {
    name: 'Арбитраженко Тимурко',
    year: 'Выпуск 2028',
    text: 'Очень благодарна колледжу за знания и поддержку. Сейчас работаю воспитателем в детском саду.',
  },
  {
    name: 'Скрыльников Артур',
    year: 'Выпуск 2028',
    text: 'Отличная база для будущего поступления в вуз. Преподаватели настоящие профессионалы!',
  },
  {
    name: 'Седов Никита',
    year: 'Студент 2 курса',
    text: 'Учусь на программиста, очень нравится современное оборудование и практика.',
  },
];

const EVENTS = [
  { date: '5 апреля', title: 'День открытых дверей', place: '1 корпус' },
  { date: '1 июня', title: 'Старт приёмной кампании', place: 'Приёмная комиссия' },
  { date: '20 июня', title: 'Спортивный праздник', place: 'Стадион' },
  { date: '25 августа', title: 'Orientation Day', place: 'Актовый зал' },
];

const PARTNERS = [
  { name: 'ТГУ', logo: '🎓' },
  { name: 'Департамент образования', logo: '📚' },
  { name: 'Детские сады', logo: '🏫' },
  { name: 'IT-компании', logo: '💼' },
];

const FAQ = [
  { q: 'Какие документы нужны для поступления?', a: 'Паспорт, аттестат, 4 фото 3х4, СНИЛС, медсправка 086/у' },
  { q: 'Есть ли общежитие?', a: 'Да, иногородним студентам предоставляется общежитие' },
  { q: 'Когда начинаются вступительные испытания?', a: 'После окончания приёма документов, обычно в середине августа' },
  { q: 'Можно ли подать документы онлайн?', a: 'Да, через электронную почту tu_tspk_tlt@63edu.ru' },
];

function App() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [noSeatsOpen, setNoSeatsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSpec, setSelectedSpec] = useState('');

  const openModal = (spec = '') => {
    setSelectedSpec(spec);
    setModalOpen(true);
  };

  return (
    <div className="app">
      {/* Навигация */}
      <div className="navbar">
        <div className="container nav-container">
          <div className="logo">ТСПК</div>
          <div className="nav-links">
            <a href="#spec">Специальности</a>
            <a href="#teachers">Преподаватели</a>
            <a href="#news">Новости</a>
            <a href="#contacts">Контакты</a>
          </div>
          <button className="btn btn-small" onClick={() => openModal()}>
            Подать заявку
          </button>
        </div>
      </div>


      <HeroSection openModal={openModal} />

      <StatsSection />


      <SpecialtiesSection openModal={openModal} />

      <StepsSection />

      <TeachersSection />

      {/* Новости */}
      <NewsSection onDetailsClick={() => setComingSoonOpen(true)} />

      {/* Мероприятия */}
      <EventsSection onRegisterClick={() => setNoSeatsOpen(true)} />

      {/* Отзывы */}
      <ReviewsSection />

      {/* Партнёры */}
      <PartnersSection />

      {/* FAQ */}
      <FAQSection />

      {/* Контакты */}
      <Footer openModal={openModal} />

      {/* Модалка */}
      {modalOpen && (
        <ApplicationModal
          spec={selectedSpec}
          onClose={() => setModalOpen(false)}
        />
      )}
      {comingSoonOpen && (
  <div className="modal" onClick={() => setComingSoonOpen(false)}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Скоро...</h2>
      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}>
        Всё будет, но не сразу.
      </p>
      <button className="btn btn-full" onClick={() => setComingSoonOpen(false)}>
        Понятно
      </button>
      <button className="modal-close" onClick={() => setComingSoonOpen(false)}>×</button>
    </div>
  </div>
)}
{noSeatsOpen && (
  <div className="modal" onClick={() => setNoSeatsOpen(false)}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Мест НЕТ</h2>
      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}>
        К сожалению, все места на это мероприятие уже заняты.<br />
        Следите за новыми событиями!
      </p>
      <button className="btn btn-full" onClick={() => setNoSeatsOpen(false)}>
        Понятно
      </button>
      <button className="modal-close" onClick={() => setNoSeatsOpen(false)}>×</button>
    </div>
  </div>
)}
    </div>
  );
}

function HeroSection({ openModal }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => setSlide(slide === 0 ? 1 : 0);

  return (
    <div className="hero">
      <img src={HERO_SLIDES[slide].img} alt="hero" />
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <span className="hero-label">{HERO_SLIDES[slide].label}</span>
        <h1>{HERO_SLIDES[slide].title}</h1>
        <p>{HERO_SLIDES[slide].subtitle}</p>
        <div className="hero-btns">
          <button className="btn btn-large" onClick={() => openModal()}>
            Подать заявку
          </button>
          <button className="btn btn-outline" onClick={nextSlide}>
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Статистика
function StatsSection() {
  return (
    <div className="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Лет колледжу</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10</div>
            <div className="stat-label">Специальностей</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Корпуса</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Студентов</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">80+</div>
            <div className="stat-label">Преподавателей</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Трудоустройство</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Специальности
function SpecialtiesSection({ openModal }) {
  const [activeTab, setActiveTab] = useState('Все');
  const categories = ['Все', 'Педагогика', 'IT', 'Спорт', 'Социальная сфера'];

  const filtered = activeTab === 'Все'
    ? SPECIALTIES
    : SPECIALTIES.filter(s => s.category === activeTab);

  return (
    <div id="spec" className="section">
      <div className="container">
        <h2 className="section-title">Наши специальности</h2>

        <div className="tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="spec-grid">
          {filtered.map(spec => (
            <div key={spec.id} className="spec-card">
              <div className="spec-icon">{spec.icon}</div>
              <h3>{spec.name}</h3>
              <div className="spec-badge">{spec.category}</div>

              <div className="spec-details">
                <div className="spec-detail">
                  <span>Бюджетных мест:</span>
                  <strong>{spec.budgetPlaces}</strong>
                </div>
                <div className="spec-detail">
                  <span>Платных мест:</span>
                  <strong>{spec.paidPlaces}</strong>
                </div>
                <div className="spec-detail">
                  <span>Срок обучения:</span>
                  <strong>{spec.duration}</strong>
                </div>
                <div className="spec-detail">
                  <span>Испытание:</span>
                  <strong>{spec.exam}</strong>
                </div>
              </div>

              <button className="btn btn-full" onClick={() => openModal(spec.name)}>
                Подать заявку
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Шаги поступления
function StepsSection() {
  return (
    <div className="section gray">
      <div className="container">
        <h2 className="section-title">Как поступить?</h2>
        <div className="steps">
          {STEPS.map(step => (
            <div key={step.num} className="step-card">
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Преподаватели
function TeachersSection() {
  return (
    <div id="teachers" className="section">
      <div className="container">
        <h2 className="section-title">Наши преподаватели</h2>
        <div className="teachers-grid">
          {TEACHERS.map(teacher => (
            <div key={teacher.name} className="teacher-card">
              <div className="teacher-icon">{teacher.img}</div>
              <h3>{teacher.name}</h3>
              <p className="teacher-subject">{teacher.subject}</p>
              <p className="teacher-exp">Стаж: {teacher.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsSection({ onDetailsClick }: { onDetailsClick: () => void }) {
  return (
    <div id="news" className="section gray">
      <div className="container">
        <h2 className="section-title">Новости колледжа</h2>
        <div className="news-grid">
          {NEWS.map((item, i) => (
            <div key={i} className="news-card">
              <div className="news-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button 
                className="btn btn-small btn-outline" 
                onClick={onDetailsClick}
              >
                Подробнее
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventsSection({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <div id="events" className="section">
      <div className="container">
        <h2 className="section-title">Ближайшие мероприятия</h2>
        <div className="events-list">
          {EVENTS.map((event, i) => (
            <div key={i} className="event-item">
              <div className="event-date">{event.date}</div>
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.place}</p>
              </div>
              <button className="btn btn-small" onClick={onRegisterClick}>Записаться</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// comm
function ReviewsSection() {
  return (
    <div id="reviews" className="section gray">
      <div className="container">
        <h2 className="section-title">Отзывы студентов</h2>
        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-quote"></div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <strong>{review.name}</strong>
                <span>{review.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Партнёры
function PartnersSection() {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Наши партнёры</h2>
        <div className="partners-grid">
          {PARTNERS.map(partner => (
            <div key={partner.name} className="partner-card">
              <div className="partner-logo">{partner.logo}</div>
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq" className="section gray">
      <div className="container">
        <h2 className="section-title">Часто задаваемые вопросы</h2>
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq-icon-wrapper">
                  <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Футер
function Footer({ openModal }) {
  return (
    <footer id="contacts" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>1 корпус</h4>
            <p>📍 ул. Мурысева, 84</p>
            <p>📞 24-10-25 (вахта)</p>
            <p>📞 24-30-54 (приёмная)</p>
            <p>✉️ tu_tspk_tlt@63edu.ru</p>
          </div>

          <div className="footer-col">
            <h4>2 корпус</h4>
            <p>📍 ул. Ленинградская, 28</p>
            <p>📞 48-20-93 (вахта)</p>
            <p>📞 28-36-44 (секретарь)</p>
            <p>✉️ tspk-zo@yandex.ru</p>
          </div>

          <div className="footer-col">
            <h4>Приёмная комиссия</h4>
            <p>🕒 Пн-Чт: 8:30 - 17:00</p>
            <p>🕒 Пт: 8:30 - 16:00</p>
            <p>🍽️ Обед: 12:30 - 13:00</p>
            <p>📍 каб. 114</p>
          </div>

          <div className="footer-col">
            <h4>Мы в соцсетях</h4>
            <p>📱 ВКонтакте: vk.com/tspk63</p>
            <p>📱 Telegram: @tspk_official</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ГАПОУ «ТСПК»</p>
        </div>
      </div>
    </footer>
  );
}

// Модалка заявки
function ApplicationModal({ spec, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    specialty: spec || '',
    consent: false,
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.phone && form.email && form.specialty && form.consent) {
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h2>Заявка отправлена! ✅</h2>
          <p>Спасибо, {form.name.split(' ')[0] || 'абитуриент'}!</p>
          <p>Мы свяжемся с вами в ближайшее время.</p>
          <button className="btn btn-full" onClick={onClose}>
            Закрыть
          </button>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Подать заявку</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ваше ФИО *"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="tel"
            placeholder="Телефон *"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email *"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />

          <select
            value={form.specialty}
            onChange={e => setForm({ ...form, specialty: e.target.value })}
            required
          >
            <option value="">Выберите специальность *</option>
            {SPECIALTIES.map(s => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={e => setForm({ ...form, consent: e.target.checked })}
              required
            />
            <span>Согласен на обработку данных</span>
          </label>

          <button type="submit" className="btn btn-full">
            Отправить
          </button>
        </form>

        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
}


export default App;