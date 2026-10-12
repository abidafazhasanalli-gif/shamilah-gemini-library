:root {
  --bg: #f3f6ff;
  --panel: #ffffff;
  --panel-soft: #eef3ff;
  --primary: #1b5bff;
  --primary-dark: #0f3fcf;
  --secondary: #f7c75e;
  --accent: #e8f7ee;
  --text: #12213d;
  --muted: #5d6d8a;
  --line: rgba(18, 33, 61, 0.08);
  --shadow: 0 18px 50px rgba(27, 91, 255, 0.12);
  --radius: 22px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Cairo", sans-serif;
  background: linear-gradient(180deg, #eff5ff 0%, #f9fafe 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.72);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), #70a2ff);
  color: white;
  font-weight: 800;
  border-radius: 14px;
  box-shadow: var(--shadow);
}

.brand strong {
  display: block;
  font-size: 1.1rem;
}

.brand small {
  color: var(--muted);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
  font-weight: 600;
}

.nav-links a:hover {
  color: var(--primary);
}

.primary-btn,
.ghost-btn,
.small-btn {
  border-radius: 14px;
  transition: 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), #6698ff);
  color: white;
  font-weight: 700;
  padding: 0.8rem 1.4rem;
  box-shadow: var(--shadow);
}

.primary-btn:hover {
  transform: translateY(-1px);
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
}

.ghost-btn {
  background: rgba(27, 91, 255, 0.08);
  color: var(--primary);
  font-weight: 700;
  padding: 0.8rem 1.3rem;
}

.small-btn {
  background: var(--panel-soft);
  color: var(--primary);
  font-weight: 700;
  padding: 0.6rem 0.9rem;
}

.hero {
  padding: 72px 0 52px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 34px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  background: rgba(27, 91, 255, 0.08);
  color: var(--primary);
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  font-weight: 700;
  margin-bottom: 18px;
}

.hero-copy h1 {
  font-size: clamp(2.3rem, 5vw, 4.2rem);
  line-height: 1.2;
  margin: 0 0 18px;
}

.hero-copy p {
  font-size: 1.08rem;
  line-height: 1.9;
  color: var(--muted);
  max-width: 650px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.stats {
  list-style: none;
  padding: 0;
  margin: 32px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.stats li {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stats strong {
  font-size: 1.7rem;
}

.stats span {
  color: var(--muted);
}

.hero-panel {
  display: grid;
  gap: 20px;
}

.mini-card {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 22px;
}

.main-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(232, 240, 255, 0.8));
}

.tag {
  display: inline-block;
  background: rgba(247, 199, 94, 0.2);
  color: #8a6000;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  margin-bottom: 12px;
  font-weight: 700;
}

.main-card h3 {
  margin: 0 0 12px;
  font-size: 1.5rem;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-weight: 600;
}

.progress-block {
  margin-top: 22px;
}

.progress-block label {
  display: block;
  color: var(--muted);
  margin-bottom: 10px;
}

.progress {
  width: 100%;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(27, 91, 255, 0.08);
}

.progress span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), #8cabff);
}

.chat-bubble {
  background: linear-gradient(135deg, rgba(245,247,255,0.9), rgba(255,255,255,0.9));
}

.chat-bubble p {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.8;
}

.reply-box {
  background: rgba(27, 91, 255, 0.04);
  border-radius: 14px;
  padding: 15px 14px;
  color: var(--text);
  line-height: 1.7;
}

.features,
.library,
.assistant {
  padding: 40px 0 80px;
}

.section-head {
  margin-bottom: 24px;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.6rem);
}

.split {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
}

.feature-grid,
.library-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.feature-card,
.book-card {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: 0 18px 40px rgba(17, 24, 39, 0.04);
}

.icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(27, 91, 255, 0.1);
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.feature-card h3,
.book-body h3 {
  margin: 0 0 10px;
}

.feature-card p,
.book-body p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.book-card {
  overflow: hidden;
  padding: 0;
}

.book-cover {
  min-height: 150px;
  display: grid;
  place-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
}

.book-cover.blue {
  background: linear-gradient(135deg, #3683ff, #1b5bff);
}

.book-cover.gold {
  background: linear-gradient(135deg, #efc157, #d69d1a);
}

.book-cover.purple {
  background: linear-gradient(135deg, #7c65ff, #5745d6);
}

.book-cover.green {
  background: linear-gradient(135deg, #2ec6a0, #169a73);
}

.book-body {
  padding: 20px 18px 24px;
}

.book-body span {
  display: inline-block;
  margin-top: 12px;
  color: var(--primary);
  font-weight: 700;
}

.assistant-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 24px;
  align-items: start;
}

.assistant-copy h2 {
  margin: 0 0 18px;
  font-size: clamp(2rem, 5vw, 3rem);
}

.assistant-copy p {
  color: var(--muted);
  line-height: 1.9;
  margin: 0 0 20px;
}

.tips {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tips span {
  display: inline-block;
  background: rgba(27, 91, 255, 0.06);
  border: 1px solid rgba(27, 91, 255, 0.09);
  color: var(--primary);
  padding: 0.8rem 1rem;
  border-radius: 14px;
  font-weight: 600;
}

.chat-panel {
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.chat-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--line);
  font-weight: 700;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2fce7c;
  box-shadow: 0 0 0 6px rgba(47, 206, 124, 0.12);
}

.chat-window {
  min-height: 300px;
  max-height: 420px;
  overflow-y: auto;
  padding: 18px 18px 12px;
  background: linear-gradient(180deg, #f8faff, #ffffff);
}

.message {
  display: flex;
  margin-bottom: 18px;
}

.message span {
  max-width: 80%;
  line-height: 1.8;
  padding: 12px 14px;
  border-radius: 16px;
}

.message.bot {
  justify-content: flex-start;
}

.message.bot span {
  background: #edf3ff;
  color: var(--text);
}

.message.user {
  justify-content: flex-end;
}

.message.user span {
  background: linear-gradient(135deg, var(--primary), #6d9dff);
  color: white;
}

.chat-form {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 16px 18px 12px;
  border-top: 1px solid var(--line);
  background: rgba(255,255,255,0.9);
}

.chat-form input {
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(18, 33, 61, 0.14);
  border-radius: 14px;
  outline: none;
  background: #f9fbff;
}

.chat-form input:focus {
  border-color: rgba(27, 91, 255, 0.4);
  box-shadow: 0 0 0 4px rgba(27, 91, 255, 0.08);
}

.api-box {
  border-top: 1px solid var(--line);
  padding: 16px 18px 20px;
  display: grid;
  gap: 12px;
  background: rgba(247,250,255,0.9);
}

.api-box label {
  font-size: 0.92rem;
  color: var(--muted);
  font-weight: 600;
}

.api-box input {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(18, 33, 61, 0.12);
  background: white;
}

.footer {
  border-top: 1px solid var(--line);
  background: rgba(255,255,255,0.7);
  padding: 28px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  color: var(--muted);
}

.footer-links {
  display: flex;
  gap: 18px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

@media (max-width: 980px) {
  .hero-grid,
  .assistant-grid,
  .feature-grid,
  .library-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid,
  .assistant-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .nav {
    flex-wrap: wrap;
    justify-content: center;
    padding: 14px 0;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .feature-grid,
  .library-grid {
    grid-template-columns: 1fr;
  }

  .chat-form {
    flex-direction: column;
  }

  .chat-form input,
  .chat-form button {
    width: 100%;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}












































































