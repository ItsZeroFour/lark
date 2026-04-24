# Lark — React App

Пересборка Lark Design System в полноценное React-приложение.

## Структура

```
src/
├── App.jsx                        # Корневой компонент, роутинг
├── index.js                       # Точка входа
│
├── pages/
│   ├── HomePage.jsx               # Главная — все секции лендинга
│   ├── AboutPage.jsx              # О нас, манифест, таймлайн
│   ├── TeamPage.jsx               # Команда и советники
│   └── ApplyPage.jsx              # Форма заявки F-01
│
├── components/
│   ├── layout/
│   │   ├── Nav.jsx                # Sticky-навигация с мобильным меню
│   │   ├── Footer.jsx             # Колофон / подвал
│   │   └── CtaBanner.jsx          # Жёлтый CTA-блок «Готовы строить?»
│   │
│   ├── sections/
│   │   ├── Hero.jsx               # Главный герой с заголовком и статистикой
│   │   ├── HowItWorks.jsx         # Схема трёх фаз
│   │   ├── ForStudents.jsx        # Секция для студентов
│   │   ├── ForClients.jsx         # Секция для клиентов
│   │   ├── FeatureGrid.jsx        # Три столпа платформы
│   │   └── LarkinsCallout.jsx     # Терминал Ларкинса с typewriter-эффектом
│   │
│   ├── cards/
│   │   ├── StudentCard.jsx        # ID-карточка студента (Майя Климова)
│   │   ├── ProjectSheet.jsx       # Наряд проекта #LRK-248
│   │   └── TeamCard.jsx           # Карточка члена команды
│   │
│   └── ui/
│       └── Atoms.jsx              # Wordmark, CtaBig, CtaGhost, Marquee
│
├── styles/
│   ├── tokens.css                 # CSS-переменные (цвета, типографика, отступы)
│   └── globals.css                # Глобальные стили всех компонентов
│
└── assets/
    ├── lark-logo.svg
    └── larkins-mark.svg
```

## Запуск

```bash
npm install
npm start
```

## Сборка

```bash
npm run build
```

## Зависимости

- `react` + `react-dom` 18
- `react-router-dom` 6 — клиентский роутинг
- `react-scripts` 5 — CRA toolchain

## Страницы

| Путь      | Страница   |
|-----------|------------|
| `/`       | Главная    |
| `/about`  | О нас      |
| `/team`   | Команда    |
| `/apply`  | Заявка     |
| `/apply?role=client` | Заявка (клиент) |
