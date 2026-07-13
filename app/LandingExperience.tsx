"use client";

import { useEffect, useState } from "react";

const demoSteps = [
  { id: 0, label: "Гость", title: "Сканирует QR", note: "Без приложения и регистрации" },
  { id: 1, label: "Заказ", title: "Выбирает блюда", note: "Фото, состав, цены и комментарии" },
  { id: 2, label: "Кухня", title: "Получает заказ", note: "Статус меняется в реальном времени" },
  { id: 3, label: "Зал", title: "Официант подаёт", note: "Меньше беготни — больше внимания гостю" },
];

const metrics = [
  ["01", "Заказ без ожидания", "Гость открывает меню и оформляет заказ, не дожидаясь официанта."],
  ["02", "Меньше рутины в зале", "Официант видит готовность и вызовы, а не переносит заказ с бумаги."],
  ["03", "Меню всегда актуально", "Цена, фото и доступность блюда меняются один раз — сразу для всех столов."],
  ["04", "Видно, что происходит", "Заказы, выручка, столы и работа команды собраны в панели владельца."],
];

const features = [
  { tag: "Для гостя", title: "Меню, заказ и статус — в телефоне", text: "Понятный путь без установки приложения. Можно добавить комментарий к блюду, вызвать официанта и следить за заказом.", tone: "lime" },
  { tag: "Для кухни", title: "Новый заказ сразу на экране", text: "Повар меняет статус от «новый» до «готов». Команда зала получает уведомление без криков и бумажных чеков.", tone: "cream" },
  { tag: "Для официанта", title: "Приоритеты видны с первого взгляда", text: "Активные столы, готовые блюда и вызовы гостя помогают работать спокойнее даже в час пик.", tone: "rose" },
  { tag: "Для владельца", title: "Управление не заканчивается на QR", text: "Меню, столы, сотрудники, заказы, статистика и финансы — в одной системе для одной или нескольких точек.", tone: "ink" },
  { tag: "Склад и производство", title: "От заказа — сразу к реальным остаткам", text: "Техкарты связывают блюда с ингредиентами, продажи автоматически списывают сырьё, а владелец видит себестоимость, закупки, поставщиков и позиции ниже минимума.", tone: "wine wide" },
];

const marqueeItems = [
  "QR-МЕНЮ",
  "ЗАКАЗ ЗА СТОЛОМ",
  "КУХНЯ ONLINE",
  "УВЕДОМЛЕНИЯ",
  "АНАЛИТИКА",
  "СКЛАД И ТЕХКАРТЫ",
];

const PHONE_DISPLAY = "+7 707 460 59 52";
const PHONE_TEL = "+77074605952";
const WHATSAPP_URL =
  "https://wa.me/77074605952?text=" +
  encodeURIComponent("Здравствуйте! Хочу запросить демонстрацию E-CAFE для нашего заведения.");

const interfaceViews = [
  {
    id: "guest",
    label: "Гость",
    kicker: "QR-меню",
    title: "Заказ со смартфона — без приложения",
    text: "Гость видит фирменное меню заведения, выбирает категорию, добавляет блюда и отслеживает готовность заказа.",
    images: ["/screens/guest-menu.png"],
    format: "mobile",
  },
  {
    id: "waiter",
    label: "Официант",
    kicker: "Работа в зале",
    title: "Все столы и приоритеты — перед глазами",
    text: "Цветовые статусы показывают, где ждут кухню, где блюдо уже готово и с какого стола поступил вызов.",
    images: ["/screens/waiter-tables.png", "/screens/waiter-orders.png"],
    format: "mobile-duo",
  },
  {
    id: "hall",
    label: "Зал",
    kicker: "Панель владельца",
    title: "Состояние каждого стола в реальном времени",
    text: "Администратор видит загрузку зала, активные заказы, вызовы и QR-коды столов на одном экране.",
    images: ["/screens/admin-tables.png"],
    format: "desktop",
  },
  {
    id: "menu",
    label: "Меню",
    kicker: "Управление витриной",
    title: "Каждое заведение выбирает свой стиль",
    text: "Три оформления QR-меню, категории, блюда, фотографии, доступность позиций и импорт между заведениями.",
    images: ["/screens/menu-design.png"],
    format: "desktop",
  },
  {
    id: "analytics",
    label: "Аналитика",
    kicker: "Цифры бизнеса",
    title: "Выручка, расходы и прибыль в одной картине",
    text: "Владелец выбирает период и видит продажи, зарплаты, средний чек, количество заказов и динамику по дням.",
    images: ["/screens/analytics.png"],
    format: "desktop",
  },
];

export function LandingExperience() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeInterface, setActiveInterface] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveStep((step) => (step + 1) % demoSteps.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="E-CAFE — на главную">
          <img className="brand-image" src="/screens/ecafe-logo.png" alt="" />
          <span>E-CAFE</span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Основная навигация">
          <button onClick={() => scrollTo("interface")}>Интерфейс</button>
          <button onClick={() => scrollTo("benefits")}>Возможности</button>
          <button onClick={() => scrollTo("flow")}>Как работает</button>
          <button onClick={() => scrollTo("owner")}>Для владельца</button>
        </nav>
        <div className="header-actions">
          <span className="locale">RU · KZ</span>
          <button className="button button-small" onClick={() => scrollTo("launch")}>Запустить пилот <span>↗</span></button>
        </div>
        <button className="menu-button" aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> Цифровой сервис для кафе и ресторанов</div>
          <h1>Гость заказывает.<br /><em>Команда успевает.</em></h1>
          <p className="hero-lede">E-CAFE превращает QR-код на столе в прямой канал заказа — от меню гостя до кухни, официанта и панели владельца.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("launch")}>Обсудить запуск <span>↗</span></button>
            <button className="text-button" onClick={() => scrollTo("flow")}><span className="play">▶</span> Посмотреть сценарий</button>
          </div>
          <div className="hero-proof">
            <span><b>Без приложения</b><small>открывается в браузере</small></span>
            <span><b>В реальном времени</b><small>зал ↔ кухня ↔ гость</small></span>
            <span><b>RU / KZ</b><small>два языка из коробки</small></span>
          </div>
        </div>

        <div className="hero-demo" aria-label="Демонстрация электронного меню и панели кухни">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="kitchen-card real-admin-card">
            <div className="real-card-caption"><b>Панель зала</b><span className="online">● онлайн</span></div>
            <img src="/screens/admin-tables.png" alt="Панель управления столами E-CAFE" />
          </div>
          <div className="phone">
            <img className="hero-screen-image" src="/screens/guest-menu.png" alt="Реальное QR-меню E-CAFE на смартфоне" />
          </div>
          <div className="qr-card"><div className="qr-pattern" /><span><b>Сканируй</b><small>Меню уже здесь</small></span></div>
          <div className="floating-note">+ новый заказ<br /><b>Стол 12</b></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {marqueeItems.map((item) => (
                <span key={`${copy}-${item}`}><b>{item}</b><i>✦</i></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="interface-section" id="interface">
        <div className="section interface-inner">
          <div className="section-kicker light">01 · Реальный продукт</div>
          <div className="interface-heading">
            <h2>Не макет.<br /><em>Уже работает.</em></h2>
            <p>Это настоящие экраны E-CAFE: от меню гостя до операционной панели и финансов владельца.</p>
          </div>
          <div className="interface-tabs" role="tablist" aria-label="Интерфейсы E-CAFE">
            {interfaceViews.map((view, index) => (
              <button key={view.id} type="button" role="tab" aria-selected={activeInterface === index} className={activeInterface === index ? "active" : ""} onClick={() => setActiveInterface(index)}>
                <span>0{index + 1}</span>{view.label}
              </button>
            ))}
          </div>
          <div className="interface-stage">
            <div className="interface-copy">
              <span>{interfaceViews[activeInterface].kicker}</span>
              <h3>{interfaceViews[activeInterface].title}</h3>
              <p>{interfaceViews[activeInterface].text}</p>
              <div className="interface-fact"><i>●</i> Реальный экран приложения</div>
            </div>
            <div className={`interface-visual ${interfaceViews[activeInterface].format}`}>
              {interfaceViews[activeInterface].images.map((image, index) => (
                <div className="device-frame" key={image}>
                  <div className="device-bar"><i /><i /><i /><span>E-CAFE</span></div>
                  <img src={image} alt={`${interfaceViews[activeInterface].title}${index ? ` — экран ${index + 1}` : ""}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="why section" id="benefits">
        <div className="section-kicker">02 · Зачем E-CAFE</div>
        <div className="why-heading">
          <h2>QR — это не замена бумаге.<br />Это <em>новый маршрут заказа.</em></h2>
          <p>Обычное QR-меню только показывает блюда. E-CAFE ведёт заказ дальше: на кухню, к официанту и в аналитику владельца.</p>
        </div>
        <div className="metric-grid">
          {metrics.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="flow-section" id="flow">
        <div className="section flow-inner">
          <div className="section-kicker light">03 · Один заказ, одна система</div>
          <div className="flow-heading"><h2>От сканирования<br />до подачи — <em>без разрывов.</em></h2><p>Нажмите на этап и посмотрите, как заказ проходит через E-CAFE.</p></div>
          <div className="flow-stage">
            <div className="flow-tabs" role="tablist" aria-label="Этапы заказа">
              {demoSteps.map((step) => <button key={step.id} role="tab" aria-selected={activeStep === step.id} className={activeStep === step.id ? "active" : ""} onClick={() => setActiveStep(step.id)}><span>0{step.id + 1}</span><b>{step.label}</b></button>)}
            </div>
            <div className="flow-preview">
              <div className="preview-number">0{activeStep + 1}</div>
              <div className="preview-copy"><span>{demoSteps[activeStep].label}</span><h3>{demoSteps[activeStep].title}</h3><p>{demoSteps[activeStep].note}</p></div>
              <div className={`preview-art art-${activeStep}`}>
                {activeStep === 0 && <><div className="big-qr" /><span className="scan-line" /></>}
                {activeStep === 1 && <><div className="dish-dot">+</div><div className="dish-copy"><b>Томатная паста</b><span>3 490 ₸</span></div><button>В заказ ✓</button></>}
                {activeStep === 2 && <><div className="ticket"><span>НОВЫЙ · СТОЛ 12</span><b>Паста × 1</b><b>Лимонад × 1</b></div><div className="pulse-ring" /></>}
                {activeStep === 3 && <><div className="bell">✓</div><div><b>Заказ готов</b><span>Стол 12 · 12:48</span></div></>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section feature-section" id="owner">
        <div className="section-kicker">04 · Каждый видит своё</div>
        <div className="feature-heading"><h2>Четыре интерфейса.<br /><em>Один ритм работы.</em></h2><p>Гостю — простота. Команде — ясные задачи. Владельцу — контроль без микроменеджмента.</p></div>
        <div className="feature-grid">
          {features.map((feature, index) => <article className={`feature-card ${feature.tone}`} key={feature.tag}><span className="feature-index">0{index + 1}</span><small>{feature.tag}</small><h3>{feature.title}</h3><p>{feature.text}</p><div className="feature-arrow">↗</div></article>)}
        </div>
      </section>

      <section className="compare-section">
        <div className="section compare-inner">
          <div className="compare-copy"><div className="section-kicker light">05 · Главное отличие</div><h2>Не просто автоматизация.<br /><em>Удобство с обеих сторон стола.</em></h2><p>Тяжёлые системы часто начинаются с учёта. E-CAFE начинается с момента, когда гость сел за стол — и связывает его с каждым следующим действием команды.</p></div>
          <div className="compare-list">
            <div><span>Только посмотреть меню</span><b>Увидеть → заказать → отследить <i>✓</i></b></div>
            <div><span>Заказ через официанта</span><b>Прямо со смартфона гостя <i>✓</i></b></div>
            <div><span>Разрозненные уведомления</span><b>Единый поток в реальном времени <i>✓</i></b></div>
            <div><span>Один язык интерфейса</span><b>Русский и казахский <i>✓</i></b></div>
          </div>
        </div>
      </section>

      <section className="launch section" id="launch">
        <div className="launch-panel">
          <div className="launch-copy">
            <span className="launch-label">Пилотный запуск</span>
            <h2>
              Начните с одного зала.
              <br />
              <em>Эффект увидит вся команда.</em>
            </h2>
            <p>
              Подготовим меню, столы, роли сотрудников, склад и техкарты. Покажем полный сценарий на
              вашем заведении — от QR-кода до готового заказа и автоматического списания ингредиентов.
            </p>
            <div className="launch-contacts">
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="launch-actions">
            <a className="button button-light" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Запросить демонстрацию <span>↗</span>
            </a>
            <small>Откроется WhatsApp с готовым сообщением — напишите, когда удобно созвониться.</small>
          </div>
          <div className="launch-rings">
            <i />
            <i />
            <i />
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <img className="brand-image" src="/screens/ecafe-logo.png" alt="" />
          <span>E-CAFE</span>
        </a>
        <p>Цифровой зал для современного ресторана.</p>
        <div className="footer-contacts">
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
        <div>
          <button onClick={() => scrollTo("benefits")}>Возможности</button>
          <button onClick={() => scrollTo("flow")}>Сценарий</button>
          <button onClick={() => scrollTo("launch")}>Демо</button>
        </div>
        <span>© 2026 E-CAFE</span>
      </footer>
    </main>
  );
}
