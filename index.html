<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Iris Wallet">
<meta name="mobile-web-app-capable" content="yes">
<meta name="format-detection" content="telephone=no"><!-- prevent iOS auto-linking numbers on cards -->
<meta name="theme-color" content="#000000">
<link rel="manifest" href="manifest.json">
<link rel="apple-touch-icon" href="icon.png">
<title>Iris Wallet</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap" rel="stylesheet">

<style>
/* ================================================================
   IRIS WALLET — DESIGN SYSTEM
================================================================ */
:root {
  /* Layout */
  --sat: env(safe-area-inset-top, 44px);
  --sab: env(safe-area-inset-bottom, 34px);
  --sal: env(safe-area-inset-left, 0px);
  --sar: env(safe-area-inset-right, 0px);

  /* Background */
  --bg: #000000;
  --bg2: #0a0a0a;

  /* Surfaces */
  --s1: rgba(255,255,255,0.04);
  --s2: rgba(255,255,255,0.07);
  --s3: rgba(255,255,255,0.12);
  --s4: rgba(255,255,255,0.18);

  /* Borders */
  --b1: rgba(255,255,255,0.08);
  --b2: rgba(255,255,255,0.14);
  --b3: rgba(255,255,255,0.22);

  /* Accent */
  --accent:       #7B5CF0;
  --accent-mid:   #9B7EF8;
  --accent-light: #C4B0FF;
  --accent-glow:  rgba(123, 92, 240, 0.35);

  /* Text */
  --t1: #FFFFFF;
  --t2: rgba(255,255,255,0.58);
  --t3: rgba(255,255,255,0.32);
  --t4: rgba(255,255,255,0.16);

  /* Card */
  --cr: 22px;
  --ca: 1.5867; /* ISO/IEC 7810 ID-1 ratio */

  /* Easing */
  --spring: cubic-bezier(0.34, 1.4, 0.64, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
}

/* ================================================================
   RESET & BASE — iPhone PWA hardened
================================================================ */
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;    /* no long-press popup */
  -webkit-user-select: none;      /* no text selection on tap */
  user-select: none;
  outline: none;
  margin: 0; padding: 0;
}

/* Allow text selection only inside actual text fields */
input, textarea { -webkit-user-select: auto; user-select: auto; }

html {
  /* Use dvh (dynamic viewport height) — accounts for iOS Safari chrome */
  height: 100%;
  /* Prevent elastic bounce on the root */
  overscroll-behavior: none;
  -webkit-overflow-scrolling: auto;
  overflow: hidden;
}

body {
  /* Fill exactly the visible screen — dvh handles notch/home bar correctly */
  width: 100vw;
  height: 100%;
  min-height: -webkit-fill-available; /* iOS Safari fallback */
  position: fixed;                    /* critical: prevents page shift on scroll */
  top: 0; left: 0;
  overflow: hidden;
  overscroll-behavior: none;          /* kill rubber-band on body */
  background: var(--bg);
  color: var(--t1);
  font-family: -apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Prevent any accidental horizontal scrolling */
  touch-action: pan-y;
}

button {
  font-family: inherit; cursor: pointer; border: none; background: none;
  -webkit-appearance: none;  /* prevent iOS button styling */
  touch-action: manipulation; /* faster tap response */
}

/* ================================================================
   AMBIENT GLOW — fixed, never causes overflow
================================================================ */
.ambient {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  overflow: hidden;   /* orbs clipped to screen, never cause scroll */
  width: 100vw; height: 100vh;
}
.ambient-orb {
  position: absolute; border-radius: 50%;
  filter: blur(80px); opacity: 0.5;
}
.orb1 {
  width: 50vw; height: 50vw;
  top: -15%; left: -10%;
  background: radial-gradient(circle, rgba(123,92,240,0.3) 0%, transparent 70%);
  animation: orbFloat1 9s ease-in-out infinite alternate;
}
.orb2 {
  width: 40vw; height: 40vw;
  bottom: 5%; right: -10%;
  background: radial-gradient(circle, rgba(0,210,255,0.12) 0%, transparent 70%);
  animation: orbFloat2 11s ease-in-out infinite alternate;
}
@keyframes orbFloat1 { from{transform:translate(0,0) scale(1)} to{transform:translate(24px,18px) scale(1.08)} }
@keyframes orbFloat2 { from{transform:translate(0,0) scale(1)} to{transform:translate(-18px,-24px) scale(1.12)} }

/* ================================================================
   APP SHELL
================================================================ */
.app {
  display: flex; flex-direction: column;
  width: 100%;
  /* Use dvh for dynamic viewport that adjusts to iOS browser chrome */
  height: 100dvh;
  height: 100vh; /* fallback for older iOS */
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  overflow: hidden;
  z-index: 1;
}

/* ================================================================
   HEADER
================================================================ */
.header {
  flex-shrink: 0;
  padding: calc(var(--sat) + 14px) 22px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
}
.header::after {
  content: '';
  position: absolute; bottom: 0; left: 20px; right: 20px; height: 1px;
  background: linear-gradient(to right, transparent, var(--b2), transparent);
}
.wordmark {
  font-family: 'Syne', -apple-system, sans-serif;
  font-size: 30px; font-weight: 800; letter-spacing: -1px;
  background: linear-gradient(135deg, #fff 30%, var(--accent-light) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}
.header-actions { display: flex; gap: 10px; align-items: center; }

.key-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 9px 14px;
  background: var(--s2);
  border: 1px solid var(--b2);
  border-radius: 100px;
  color: var(--t2);
  font-size: 12px; font-weight: 600; letter-spacing: 0.2px;
  transition: all 0.2s var(--spring);
}
.key-btn:active { transform: scale(0.92); background: var(--s3); }
.key-btn svg { width: 13px; height: 13px; }

.add-btn {
  width: 38px; height: 38px;
  background: var(--accent);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 0 0 var(--accent-glow);
  transition: all 0.2s var(--spring);
}
.add-btn:active { transform: scale(0.86); }
.add-btn svg { width: 18px; height: 18px; stroke: white; fill: none; stroke-width: 2.5; stroke-linecap: round; }

/* ================================================================
   SCROLL AREA — iPhone native-feel
================================================================ */
.scroll-area {
  flex: 1; min-height: 0;
  overflow-y: scroll;          /* 'scroll' not 'auto' — smoother on iOS */
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;   /* momentum scrolling */
  overscroll-behavior-y: contain;      /* contain bounce to this element only */
  overscroll-behavior-x: none;         /* never allow horizontal drift */
  /* Hide scrollbars on all browsers */
  scrollbar-width: none;
  -ms-overflow-style: none;
  touch-action: pan-y;                 /* only vertical pan allowed */
}
.scroll-area::-webkit-scrollbar { display: none; width: 0; height: 0; }

/* ================================================================
   STATS BAR
================================================================ */
.stats-bar {
  padding: 24px 24px 4px;
}
.stats-label {
  font-size: 11px; font-weight: 700;
  letter-spacing: 1.8px; text-transform: uppercase;
  color: var(--t3); margin-bottom: 6px;
}
.stats-count {
  font-family: 'Syne', sans-serif;
  font-size: 46px; font-weight: 800; letter-spacing: -2.5px;
  line-height: 1;
  background: linear-gradient(135deg, #fff 40%, var(--accent-light) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stats-count em {
  font-style: normal;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
  color: var(--t3); -webkit-text-fill-color: var(--t3);
  margin-left: 6px;
}
.section-label {
  padding: 20px 24px 12px;
  font-size: 13px; font-weight: 700;
  letter-spacing: 1px; text-transform: uppercase; color: var(--t3);
  display: none;
}

/* ================================================================
   CARDS CONTAINER
================================================================ */
.cards-wrap {
  padding: 0 16px calc(var(--sab) + 110px);
  display: flex; flex-direction: column; gap: 14px;
}

/* ================================================================
   CARD WRAPPER & FLIP
================================================================ */
.card-item {
  position: relative;
  animation: cardAppear 0.5s var(--ease-out) both;
}
@keyframes cardAppear {
  from { opacity: 0; transform: translateY(24px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.card-scene {
  width: 100%;
  aspect-ratio: var(--ca);
  perspective: 1400px;
  cursor: pointer;
}
.card-flipper {
  width: 100%; height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.72s cubic-bezier(0.34, 1.25, 0.64, 1);
}
.card-item.flipped .card-flipper { transform: rotateY(180deg); }

.card-face {
  position: absolute; width: 100%; height: 100%;
  backface-visibility: hidden; -webkit-backface-visibility: hidden;
  border-radius: var(--cr);
  overflow: hidden;
  box-shadow:
    0 2px 0 0 rgba(255,255,255,0.08) inset,
    0 -1px 0 0 rgba(0,0,0,0.35) inset,
    0 20px 60px rgba(0,0,0,0.7),
    0 8px 20px rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.10);
}
.card-face.back { transform: rotateY(180deg); }

/* ================================================================
   CARD THEMES — FRONT
================================================================ */

/* CREDIT / DEBIT */
.theme-credit .card-face.front {
  background: linear-gradient(148deg, #090918 0%, #131340 45%, #1a1050 100%);
}
.theme-credit .holo-layer {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(110deg,
    transparent 25%,
    rgba(123,92,240,0.08) 35%,
    rgba(0,200,255,0.06) 45%,
    rgba(255,100,200,0.05) 55%,
    transparent 65%
  );
  background-size: 300% 300%;
  animation: holoShift 6s ease-in-out infinite alternate;
}
.theme-credit .grid-layer {
  position: absolute; inset: 0; z-index: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 24px 24px;
}
.theme-credit .glow-layer {
  position: absolute; z-index: 0;
  top: -60%; right: -30%; width: 100%; height: 100%;
  background: radial-gradient(circle, rgba(123,92,240,0.22) 0%, transparent 55%);
}
.theme-credit .glow-layer2 {
  position: absolute; z-index: 0;
  bottom: -50%; left: -20%; width: 70%; height: 80%;
  background: radial-gradient(circle, rgba(0,200,255,0.1) 0%, transparent 60%);
}
@keyframes holoShift {
  0%   { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* AADHAAR */
.theme-aadhaar .card-face.front {
  background: linear-gradient(148deg, #003087 0%, #0050B3 55%, #0072CE 100%);
}
.theme-aadhaar .deco-circle {
  position: absolute; z-index: 0;
  top: -40%; right: -15%; width: 90%; height: 90%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 60%);
}
.theme-aadhaar .deco-lines {
  position: absolute; inset: 0; z-index: 0; overflow: hidden;
  background: repeating-linear-gradient(
    -25deg, transparent, transparent 18px,
    rgba(255,255,255,0.02) 18px, rgba(255,255,255,0.02) 19px
  );
}

/* PAN */
.theme-pan .card-face.front {
  background: linear-gradient(148deg, #F5EDD8 0%, #EAD9B8 100%);
  color: #1C1206;
}

/* VOTER */
.theme-voter .card-face.front {
  background: linear-gradient(148deg, #14012B 0%, #2D1275 55%, #1A4068 100%);
}
.theme-voter .deco-stars {
  position: absolute; inset: 0; z-index: 0;
  background:
    radial-gradient(1.5px 1.5px at 20% 25%, rgba(255,255,255,0.25) 0%, transparent 100%),
    radial-gradient(1px 1px at 60% 15%, rgba(255,255,255,0.2) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 80% 40%, rgba(255,255,255,0.2) 0%, transparent 100%),
    radial-gradient(1px 1px at 40% 60%, rgba(255,255,255,0.15) 0%, transparent 100%),
    radial-gradient(1px 1px at 75% 70%, rgba(255,255,255,0.2) 0%, transparent 100%);
}

/* DRIVING LICENSE */
.theme-driving .card-face.front {
  background: linear-gradient(148deg, #0A2416 0%, #134A2C 55%, #1A6040 100%);
}

/* GENERIC */
.theme-generic .card-face.front {
  background: linear-gradient(148deg, #0D0D1E 0%, #1A1535 55%, #0E1A35 100%);
}

/* ================================================================
   CARD CONTENT LAYOUT (front)
================================================================ */
.cf { /* card front content */
  position: relative; z-index: 2;
  width: 100%; height: 100%;
  padding: 20px 22px;
  display: flex; flex-direction: column;
  justify-content: space-between;
}
.cf-top { display: flex; justify-content: space-between; align-items: flex-start; }
.cf-issuer { font-size: 10px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; opacity: 0.45; }
.cf-product { font-size: 13px; font-weight: 700; margin-top: 2px; opacity: 0.9; }
.cf-mid {}
.cf-num {
  font-family: 'SF Mono', 'Menlo', 'Courier New', monospace;
  font-size: 16px; letter-spacing: 2.5px; font-weight: 500;
  display: flex; align-items: center; gap: 10px;
  margin-top: 10px;
}
.cf-num-masked { opacity: 0.4; letter-spacing: 4px; font-size: 18px; }
.cf-bot { display: flex; justify-content: space-between; align-items: flex-end; }
.cf-field {}
.cf-flabel { font-size: 7.5px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; opacity: 0.38; margin-bottom: 3px; }
.cf-fval { font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px; }

/* PAN card dark overrides */
.theme-pan .cf-issuer,
.theme-pan .cf-product,
.theme-pan .cf-num,
.theme-pan .cf-fval { color: #2D1A04; }
.theme-pan .cf-flabel { color: #2D1A04; opacity: 0.38; }
.theme-pan .cf-num-masked { color: #2D1A04; opacity: 0.3; }

/* ================================================================
   CHIP SVG
================================================================ */
.chip-wrap { margin-bottom: 2px; }

/* ================================================================
   COPY BUTTON
================================================================ */
.cp-btn {
  padding: 5px 6px;
  background: rgba(255,255,255,0.13);
  border-radius: 8px;
  color: inherit; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s;
}
.cp-btn:active { background: rgba(255,255,255,0.28); transform: scale(0.86); }
.cp-btn svg { width: 11px; height: 11px; fill: currentColor; }
.theme-pan .cp-btn { background: rgba(0,0,0,0.08); }

/* Tricolor stripe */
.tricolor {
  position: absolute; bottom: 0; left: 0; right: 0; height: 5px;
  background: linear-gradient(to right, #FF9933 33.33%, #FFFFFF 33.33%, #FFFFFF 66.66%, #138808 66.66%);
  z-index: 3;
}

/* ================================================================
   CARD BACK — UNIVERSAL
================================================================ */
.cb { /* card back */
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  position: relative; overflow: hidden;
  border-radius: var(--cr);
}

/* Credit/Debit back */
.cb-credit {
  background: linear-gradient(148deg, #090918 0%, #141440 100%);
}
.cb-magstripe {
  width: 100%; height: 38px; margin-top: 22px; flex-shrink: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
}
.cb-body { flex: 1; padding: 10px 18px 14px; display: flex; flex-direction: column; justify-content: space-between; }
.cb-sigstrip {
  background: repeating-linear-gradient(
    -45deg, rgba(255,255,255,0.04), rgba(255,255,255,0.04) 2px,
    rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 8px
  );
  border-radius: 5px; padding: 8px 10px;
  display: flex; align-items: center; justify-content: space-between;
}
.cb-siglabel { font-size: 7px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--t3); }
.cb-sigsub { font-size: 9px; letter-spacing: 1.5px; color: var(--t4); margin-top: 2px; }
.cb-cvv-box {
  background: white; color: #000;
  padding: 4px 10px; border-radius: 4px;
  font-family: 'SF Mono', monospace; font-size: 14px; font-weight: 700; letter-spacing: 3px;
  flex-shrink: 0;
}
.cb-cvv-label { font-size: 7px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--t3); text-align: right; margin-bottom: 3px; }
.cb-inforow { display: flex; gap: 16px; }
.cb-infoitem {}
.cb-infol { font-size: 7.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--t3); margin-bottom: 2px; }
.cb-infov { font-size: 11px; font-weight: 500; color: var(--t2); line-height: 1.3; }
.cb-foot { display: flex; justify-content: space-between; align-items: flex-end; }
.cb-bankname { font-size: 8px; font-weight: 600; letter-spacing: 0.5px; color: var(--t4); }
.cb-barcode { display: flex; align-items: flex-end; gap: 1.5px; height: 22px; opacity: 0.25; }
.cb-barcode span { background: white; border-radius: 1px; }

/* ID card back */
.cb-id {
  padding: 16px 18px 16px;
  display: flex; flex-direction: column; gap: 10px;
}
.cb-id-header { font-size: 8px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--t3); }
.cb-id-field {}
.cb-id-label { font-size: 7.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--t3); margin-bottom: 3px; }
.cb-id-val { font-size: 11.5px; font-weight: 500; line-height: 1.45; color: var(--t2); }
.cb-qr-placeholder {
  width: 46px; height: 46px;
  border: 1.5px solid rgba(255,255,255,0.18); border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  opacity: 0.35; flex-shrink: 0;
}

/* PAN back */
.cb-pan {
  background: linear-gradient(148deg, #F5EDD8 0%, #EAD9B8 100%);
  color: #2D1A04;
  padding: 16px 18px;
  display: flex; flex-direction: column; gap: 10px;
}
.cb-pan .cb-id-label { color: #2D1A04; opacity: 0.4; }
.cb-pan .cb-id-val { color: #2D1A04; opacity: 0.75; }
.cb-pan .cb-id-header { color: #2D1A04; opacity: 0.35; }
.cb-pan-barcode { display: flex; align-items: flex-end; gap: 1.5px; height: 22px; opacity: 0.18; flex-shrink: 0; }
.cb-pan-barcode span { background: #2D1A04; border-radius: 1px; }

/* ================================================================
   ACTION BAR (below card)
================================================================ */
.card-actions {
  display: flex; gap: 8px; margin-top: 0;
  height: 0; overflow: hidden; opacity: 0;
  transition: all 0.38s var(--ease-out);
}
.card-item.expanded .card-actions {
  height: 40px; opacity: 1; margin-top: 10px;
}
.act-btn {
  flex: 1; height: 40px;
  background: var(--s2); border: 1px solid var(--b2); border-radius: 12px;
  font-size: 12px; font-weight: 600; color: var(--t2);
  display: flex; align-items: center; justify-content: center; gap: 6px;
  transition: all 0.2s var(--spring);
}
.act-btn:active { transform: scale(0.94); background: var(--s3); }
.act-btn.danger { color: #FF3B30; border-color: rgba(255,59,48,0.18); }
.act-btn svg { width: 13px; height: 13px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

/* ================================================================
   EMPTY STATE
================================================================ */
.empty {
  display: flex; flex-direction: column; align-items: center;
  padding: 60px 40px; text-align: center; min-height: 50vh; justify-content: center;
}
.empty-icon {
  width: 76px; height: 76px;
  background: var(--s1); border: 1px solid var(--b1); border-radius: 22px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 22px;
}
.empty-title {
  font-family: 'Syne', sans-serif; font-size: 21px; font-weight: 700;
  letter-spacing: -0.5px; margin-bottom: 8px;
}
.empty-sub { font-size: 14px; color: var(--t2); line-height: 1.5; max-width: 230px; }

/* ================================================================
   SCANNER OVERLAY
================================================================ */
.scanner {
  position: fixed; inset: 0; background: #000; z-index: 3000;
  display: flex; flex-direction: column;
  overflow: hidden;                  /* never scroll inside scanner */
  overscroll-behavior: none;
  touch-action: none;                /* block all touch gestures escaping */
  transform: translateY(100%);
  transition: transform 0.52s var(--ease-out);
  /* Use full safe-area aware height */
  height: 100%;
  height: 100dvh;
}
.scanner.open { transform: translateY(0); }

.scanner-hdr {
  position: absolute; top: 0; left: 0; right: 0;
  padding: calc(var(--sat) + 14px) 20px 16px;
  display: flex; justify-content: space-between; align-items: center;
  z-index: 10;
  background: linear-gradient(to bottom, rgba(0,0,0,0.82), transparent);
}
.scanner-title {
  font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; letter-spacing: -0.3px;
}
.close-btn {
  width: 32px; height: 32px;
  background: rgba(255,255,255,0.14); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; color: white; transition: all 0.2s;
}
.close-btn:active { transform: scale(0.86); background: rgba(255,255,255,0.25); }

/* Camera view */
.cam-view { flex: 1; position: relative; overflow: hidden; }
#videoEl { width: 100%; height: 100%; object-fit: cover; display: block; }

/* Scan frame */
.scan-frame {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  pointer-events: none; z-index: 5;
}
.frame-box {
  width: 86%; aspect-ratio: var(--ca);
  position: relative;
}
.corner {
  position: absolute; width: 26px; height: 26px;
  border-color: var(--accent); border-style: solid; border-width: 0;
  transition: filter 0.3s;
}
.corner.tl { top:0;left:0; border-top-width:3px; border-left-width:3px; border-radius:7px 0 0 0; }
.corner.tr { top:0;right:0; border-top-width:3px; border-right-width:3px; border-radius:0 7px 0 0; }
.corner.bl { bottom:0;left:0; border-bottom-width:3px; border-left-width:3px; border-radius:0 0 0 7px; }
.corner.br { bottom:0;right:0; border-bottom-width:3px; border-right-width:3px; border-radius:0 0 7px 0; }

/* Scan line */
.scan-line {
  position: absolute; left: 0; right: 0; height: 2px; top: 0;
  background: linear-gradient(to right, transparent, var(--accent) 30%, var(--accent-light) 50%, var(--accent) 70%, transparent);
  box-shadow: 0 0 10px var(--accent-glow), 0 0 2px var(--accent);
  border-radius: 1px; opacity: 0;
  pointer-events: none;
  /* No animation by default */
}

/* SCANNING: beam sweeping top → bottom */
.sf-scanning .scan-line {
  opacity: 1;
  animation: scanBeam 2.2s linear infinite;
}
.sf-scanning .corner {
  filter: drop-shadow(0 0 5px var(--accent));
  animation: none;
}

/* PROCESSING: faster sweep + pulsing corners = "working" feel */
.sf-processing .scan-line {
  opacity: 1;
  animation: scanBeam 0.6s linear infinite;
}
.sf-processing .corner {
  filter: drop-shadow(0 0 10px var(--accent-mid));
  animation: cornerPulse 0.45s ease-in-out infinite alternate;
}

/* DONE / IDLE: everything off */
.sf-idle .scan-line { opacity: 0; animation: none; }
.sf-idle .corner    { filter: none; animation: none; }

@keyframes scanBeam {
  0%   { top: 0%; }
  100% { top: calc(100% - 2px); }
}
@keyframes cornerPulse {
  from { opacity: 0.5; }
  to   { opacity: 1;   }
}

/* Processing overlay */
.proc-overlay {
  position: absolute; inset: 0; background: rgba(0,0,0,0.65);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 14px; z-index: 20;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s var(--ease-out);
}
.proc-overlay.show { opacity: 1; pointer-events: all; }
.proc-ring {
  width: 54px; height: 54px; border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.1);
  border-top-color: var(--accent); border-right-color: var(--accent-mid);
  animation: spin 0.75s linear infinite;
}
@keyframes spin { to{transform:rotate(360deg)} }
.proc-text { font-size: 16px; font-weight: 600; color: white; }
.proc-sub { font-size: 12px; color: var(--t2); }

/* Capture flash */
.flash { position: absolute; inset: 0; background: white; opacity: 0; pointer-events: none; z-index: 18; transition: opacity 0.25s; }

/* Scanner bottom */
.scanner-bot {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 20px 24px calc(var(--sab) + 22px);
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  display: flex; flex-direction: column; align-items: center; gap: 16px;
  z-index: 10;
}
.step-dots { display: flex; gap: 8px; align-items: center; }
.sdot {
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(255,255,255,0.25);
  transition: all 0.35s var(--spring);
}
.sdot.active { background: var(--accent); width: 22px; border-radius: 3px; }
.sdot.done { background: var(--accent-light); opacity: 0.7; }
.scan-info { text-align: center; }
.scan-instr { font-size: 16px; font-weight: 600; }
.scan-sub-text { font-size: 12px; color: var(--t2); margin-top: 2px; }

.shutter {
  width: 70px; height: 70px;
  border-radius: 50%; border: 3px solid rgba(255,255,255,0.45);
  background: none; display: flex; align-items: center; justify-content: center;
  position: relative;
  transition: transform 0.2s var(--spring);
}
.shutter:active { transform: scale(0.88); }
.shutter::before {
  content: '';
  width: 54px; height: 54px; background: white; border-radius: 50%;
  transition: all 0.2s var(--spring);
}
.shutter:active::before { width: 46px; height: 46px; }

/* ================================================================
   TOAST
================================================================ */
.toast {
  position: fixed;
  bottom: calc(var(--sab) + 94px); left: 50%;
  transform: translateX(-50%) translateY(16px);
  background: rgba(30,30,36,0.92); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--b3); border-radius: 100px;
  padding: 11px 18px 11px 14px;
  display: flex; align-items: center; gap: 9px;
  font-size: 13px; font-weight: 600; white-space: nowrap;
  z-index: 9999; opacity: 0; pointer-events: none;
  box-shadow: 0 8px 30px rgba(0,0,0,0.55);
  transition: all 0.42s var(--spring);
  max-width: calc(100vw - 40px);
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
.toast-dot {
  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
  transition: background 0.2s;
}
.toast.success .toast-dot { background: #30D158; }
.toast.error   .toast-dot { background: #FF3B30; }
.toast.info    .toast-dot { background: var(--accent); }

/* ================================================================
   EXPANDED CARD STATE
================================================================ */
.card-item.expanded .card-scene {
  filter: drop-shadow(0 24px 48px rgba(0,0,0,0.8)) drop-shadow(0 0 1px rgba(123,92,240,0.2));
}

/* Tap hint dot on card */
.flip-hint {
  position: absolute; bottom: 11px; left: 50%; transform: translateX(-50%);
  display: flex; gap: 4px; z-index: 10; pointer-events: none;
  opacity: 0; transition: opacity 0.3s 0.1s;
}
.card-item.expanded .flip-hint { opacity: 1; }
.flip-hint span {
  width: 4px; height: 4px; border-radius: 50%;
  background: rgba(255,255,255,0.28);
  display: block;
}
.flip-hint span.fh-active { background: rgba(255,255,255,0.65); }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
</style>
</head>
<body>

<div class="ambient">
  <div class="ambient-orb orb1"></div>
  <div class="ambient-orb orb2"></div>
</div>

<div class="app">

  <!-- HEADER -->
  <header class="header">
    <div class="wordmark">iris.</div>
    <div class="header-actions">
      <button class="key-btn" onclick="promptApiKey()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8" cy="15" r="4"/><path d="M11.8 11.8L20 4"/><path d="M18 6l2 2"/><path d="M15 9l2 2"/>
        </svg>
        API Key
      </button>
      <button class="add-btn" onclick="openScanner()">
        <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
    </div>
  </header>

  <!-- SCROLL -->
  <div class="scroll-area" id="scrollArea">
    <div class="stats-bar">
      <div class="stats-label">Secured Cards</div>
      <div class="stats-count" id="statsCount">0<em>cards</em></div>
    </div>
    <div class="section-label" id="sectionLabel">My Wallet</div>
    <div class="cards-wrap" id="cardsWrap"></div>
  </div>

</div>

<!-- SCANNER OVERLAY -->
<div id="scanner" class="scanner">

  <div class="scanner-hdr">
    <div class="scanner-title" id="scanTitle">Scan Card</div>
    <button class="close-btn" onclick="closeScanner()">✕</button>
  </div>

  <div class="cam-view" id="camView">
    <video id="videoEl" autoplay playsinline muted></video>
    <canvas id="snapCanvas" style="display:none"></canvas>

    <!-- Scan frame -->
    <div class="scan-frame" id="scanFrame">
      <div class="frame-box" id="frameBox">
        <div class="corner tl"></div>
        <div class="corner tr"></div>
        <div class="corner bl"></div>
        <div class="corner br"></div>
        <div class="scan-line"></div>
      </div>
    </div>

    <!-- Flash -->
    <div class="flash" id="flashEl"></div>

    <!-- Processing overlay -->
    <div class="proc-overlay" id="procOverlay">
      <div class="proc-ring"></div>
      <div class="proc-text">Iris AI Scanning…</div>
      <div class="proc-sub">Extracting all card details</div>
    </div>
  </div>

  <div class="scanner-bot">
    <div class="step-dots">
      <div class="sdot" id="sd0"></div>
      <div class="sdot" id="sd1"></div>
      <div class="sdot" id="sd2"></div>
    </div>
    <div class="scan-info">
      <div class="scan-instr" id="scanInstr">Position front of card</div>
      <div class="scan-sub-text" id="scanSubText">Align within frame, then tap to capture</div>
    </div>
    <button class="shutter" id="shutterBtn" onclick="captureFrame()"></button>
  </div>

</div>

<!-- TOAST -->
<div class="toast" id="toast">
  <div class="toast-dot" id="toastDot"></div>
  <span id="toastMsg">—</span>
</div>

<script>
// ================================================================
// IRIS WALLET — Core Engine
// ================================================================

'use strict';

// --- Constants ---
const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const DB_NAME = 'IrisWalletV5';
const DB_VERSION = 1;

// --- State ---
let db = null;
let camStream = null;
let scan = { step: 0, front: null, back: null };
let expandedId = null;
let toastTimer = null;

// --- DOM shortcuts ---
const $ = id => document.getElementById(id);
const scannerEl  = $('scanner');
const videoEl    = $('videoEl');
const snapCanvas = $('snapCanvas');
const scanFrame  = $('scanFrame');
const procOverlay= $('procOverlay');
const flashEl    = $('flashEl');
const cardsWrap  = $('cardsWrap');
const statsCount = $('statsCount');
const sectionLabel = $('sectionLabel');
const scanTitle  = $('scanTitle');
const scanInstr  = $('scanInstr');
const scanSubText= $('scanSubText');
const shutterBtn = $('shutterBtn');

// ================================================================
// DATABASE
// ================================================================
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('cards')) {
        d.createObjectStore('cards', { keyPath: 'id' });
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror   = () => reject(req.error);
  });
}
function txAll() {
  return new Promise((res, rej) => {
    const req = db.transaction('cards','readonly').objectStore('cards').getAll();
    req.onsuccess = () => res(req.result);
    req.onerror   = () => rej(req.error);
  });
}
function txAdd(card) {
  return new Promise((res, rej) => {
    const req = db.transaction('cards','readwrite').objectStore('cards').add(card);
    req.onsuccess = () => res();
    req.onerror   = () => rej(req.error);
  });
}
function txDel(id) {
  return new Promise((res, rej) => {
    const req = db.transaction('cards','readwrite').objectStore('cards').delete(id);
    req.onsuccess = () => res();
    req.onerror   = () => rej(req.error);
  });
}

// ================================================================
// API KEY
// ================================================================
function promptApiKey() {
  const cur = localStorage.getItem('iris_key') || '';
  const val = prompt('Gemini API Key:', cur);
  if (val === null) return;
  const k = val.trim();
  if (k) {
    localStorage.setItem('iris_key', k);
    toast('API key saved', 'success');
  } else {
    localStorage.removeItem('iris_key');
    toast('API key cleared', 'info');
  }
}

// ================================================================
// SCANNER
// ================================================================
async function openScanner() {
  if (!localStorage.getItem('iris_key')) {
    toast('Set your Gemini API key first', 'error');
    setTimeout(promptApiKey, 800);
    return;
  }
  // Reset scan state
  scan = { step: 0, front: null, back: null };
  refreshScanUI();

  try {
    camStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } }
    });
    videoEl.srcObject = camStream;
    await videoEl.play().catch(() => {});
  } catch {
    toast('Camera access denied — check permissions', 'error');
    return;
  }

  scannerEl.classList.add('open');
  setFrameState('scanning');
}

function closeScanner() {
  stopCam();
  scannerEl.classList.remove('open');
  // Must delay the idle state slightly so animation stops after overlay hides
  setTimeout(() => setFrameState('idle'), 550);
  procOverlay.classList.remove('show');
  shutterBtn.disabled = false;
  shutterBtn.style.opacity = '';
}

function stopCam() {
  if (camStream) { camStream.getTracks().forEach(t => t.stop()); camStream = null; }
  videoEl.srcObject = null;
}

function setFrameState(state) {
  // states: 'idle' | 'scanning' | 'processing'
  scanFrame.classList.remove('sf-idle', 'sf-scanning', 'sf-processing');
  if (state === 'idle')       scanFrame.classList.add('sf-idle');
  if (state === 'scanning')   scanFrame.classList.add('sf-scanning');
  if (state === 'processing') scanFrame.classList.add('sf-processing');
}

const SCAN_STEPS = [
  { title: 'Scan Front', instr: 'Position front of card',         sub: 'Align within frame, then tap to capture' },
  { title: 'Scan Back',  instr: 'Flip card — now scan the back',  sub: 'Hold steady, then tap to capture'        },
  { title: 'Analyzing',  instr: 'AI extracting all card details', sub: 'Please wait a few seconds...'            },
];

function refreshScanUI() {
  const stepIdx = Math.min(scan.step, 2);
  const s = SCAN_STEPS[stepIdx];
  scanTitle.textContent   = s.title;
  scanInstr.textContent   = s.instr;
  scanSubText.textContent = s.sub;
  for (let i = 0; i < 3; i++) {
    const d = $('sd' + i);
    d.className = 'sdot';
    if (i === stepIdx)    d.classList.add('active');
    else if (i < stepIdx) d.classList.add('done');
  }
  const isProc = stepIdx === 2;
  shutterBtn.disabled      = isProc;
  shutterBtn.style.opacity = isProc ? '0.3' : '';
}

function captureFrame() {
  if (!videoEl.videoWidth || !camStream) { toast('Camera not ready', 'error'); return; }
  shutterBtn.disabled = true;

  snapCanvas.width  = videoEl.videoWidth;
  snapCanvas.height = videoEl.videoHeight;
  snapCanvas.getContext('2d').drawImage(videoEl, 0, 0);
  const imgData = snapCanvas.toDataURL('image/jpeg', 0.92);

  doFlash(() => {
    if (scan.step === 0) {
      scan.front = imgData;
      scan.step  = 1;
      refreshScanUI(); // re-enables shutter for back capture
      setFrameState('scanning');
      toast('Front captured', 'success');
    } else {
      scan.back = imgData;
      scan.step = 2;
      refreshScanUI(); // disables shutter, step dots advance
      setFrameState('processing');
      runAI();
    }
  });
}

function doFlash(cb) {
  flashEl.style.opacity = '0.65';
  setTimeout(() => {
    flashEl.style.opacity = '0';
    setTimeout(cb, 250);
  }, 60);
}

// ================================================================
// AI PROCESSING
// ================================================================
async function runAI() {
  setFrameState('processing');
  procOverlay.classList.add('show');
  shutterBtn.disabled = true;
  shutterBtn.style.opacity = '0.4';

  const key = localStorage.getItem('iris_key');

  const systemPrompt = `You are a precise OCR and document analysis engine. I am showing you BOTH the front and back of a card or identity document.

Return ONLY a raw JSON object — no markdown, no code fences, no extra text. Use null for any missing field.

JSON schema:
{
  "type":           "<category: Credit Card | Debit Card | Aadhaar Card | PAN Card | Voter ID | Driving License | Passport | Other>",
  "product":        "<specific product name e.g. HDFC Regalia Credit Card. If unknown, same as type>",
  "bank":           "<bank or issuing authority>",
  "number":         "<primary ID or card number>",
  "name":           "<full name on card>",
  "dob":            "<date of birth>",
  "expiry":         "<expiry date>",
  "cvv":            "<CVV/CVC from back if visible, else null>",
  "address":        "<address from back if visible, else null>",
  "back_info":      "<any other notable back info: blood group, emergency contact, back document number, etc. Combine into one string.>",
  "barcode_ref":    "<reference/barcode/QR number from back if any>"
}`;

  const body = {
    contents: [{
      parts: [
        { text: systemPrompt },
        { text: '— FRONT of card/document —' },
        { inline_data: { mime_type: 'image/jpeg', data: scan.front.split(',')[1] } },
        { text: '— BACK of card/document —' },
        { inline_data: { mime_type: 'image/jpeg', data: scan.back.split(',')[1] } },
      ]
    }],
    generationConfig: { temperature: 0.05, maxOutputTokens: 800 }
  };

  try {
    const res = await fetch(`${GEMINI_ENDPOINT}?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message || `HTTP ${res.status}`);
    }

    const data = await res.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error('Empty AI response');

    // Extract JSON from response
    const clean = rawText.replace(/```json\s*/gi,'').replace(/```\s*/gi,'').trim();
    const match = clean.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Could not parse AI response as JSON');

    const p = JSON.parse(match[0]);

    const card = {
      id:         Date.now(),
      type:       p.type       || 'Card',
      product:    p.product    || p.type || 'Card',
      bank:       p.bank       || null,
      number:     p.number     || null,
      name:       p.name       || null,
      dob:        p.dob        || null,
      expiry:     p.expiry     || null,
      cvv:        p.cvv        || null,
      address:    p.address    || null,
      back_info:  p.back_info  || null,
      barcode_ref:p.barcode_ref|| null,
      frontImg:   scan.front,
      backImg:    scan.back,
      savedAt:    new Date().toISOString()
    };

    await txAdd(card);
    closeScanner();
    await renderWallet();
    toast('Card secured successfully', 'success');

  } catch (err) {
    console.error('[Iris] AI error:', err);
    // Reset fully so user can retry from front
    scan = { step: 0, front: null, back: null };
    setFrameState('scanning');
    procOverlay.classList.remove('show');
    refreshScanUI(); // re-enables shutter, resets dots
    toast('Error: ' + String(err.message).slice(0, 55), 'error');
  }
}

// ================================================================
// RENDER WALLET
// ================================================================
async function renderWallet() {
  const all = (await txAll()).sort((a, b) => b.id - a.id);
  const n = all.length;

  statsCount.innerHTML = `${n}<em>${n === 1 ? 'card' : 'cards'}</em>`;
  sectionLabel.style.display = n > 0 ? 'block' : 'none';
  cardsWrap.innerHTML = '';

  if (n === 0) {
    cardsWrap.innerHTML = `
      <div class="empty">
        <div class="empty-icon">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="3"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
        </div>
        <div class="empty-title">No cards yet</div>
        <div class="empty-sub">Tap <strong>+</strong> to scan and secure your first card or ID document</div>
      </div>`;
    return;
  }

  all.forEach((card, idx) => {
    const el = buildCard(card);
    el.style.animationDelay = `${idx * 55}ms`;
    cardsWrap.appendChild(el);
  });
}

// ================================================================
// CARD BUILDER
// ================================================================
function getTheme(type) {
  const t = String(type || '').toLowerCase();
  if (t.includes('credit') || t.includes('debit')) return 'credit';
  if (t.includes('aadhaar') || t.includes('aadhar'))  return 'aadhaar';
  if (t.includes('pan'))                              return 'pan';
  if (t.includes('voter'))                            return 'voter';
  if (t.includes('driv') || t.includes('license') || t.includes('licence')) return 'driving';
  return 'generic';
}

function isCard(type) {
  const t = String(type || '').toLowerCase();
  return t.includes('credit') || t.includes('debit');
}

function buildCard(card) {
  const theme = getTheme(card.type);
  const isPan  = theme === 'pan';
  const isCreditDebit = isCard(card.type);

  // Number formatting
  const rawNum = String(card.number || '').replace(/\s/g, '');
  let numDisplay = '— — — —';
  if (rawNum.length > 0) {
    if (rawNum.length >= 12) {
      // show ••• ••• ••• XXXX
      numDisplay = `<span class="cf-num-masked">•••• •••• ••••</span> ${escH(rawNum.slice(-4))}`;
    } else {
      numDisplay = escH(card.number);
    }
  }

  const fullNum = card.number || '';
  const cpBtn = (val, label) => val
    ? `<button class="cp-btn" onclick="copyVal(${JSON.stringify(String(val))},event)" title="Copy ${label}">
        <svg viewBox="0 0 24 24"><path d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
       </button>` : '';

  // Chip SVG (gold)
  const chipSVG = isCreditDebit ? `
    <div class="chip-wrap">
      <svg width="36" height="26" viewBox="0 0 36 26">
        <rect width="36" height="26" rx="4" fill="${isPan ? '#C49A22' : '#C5A028'}"/>
        <rect x="0.5" y="7.5" width="35" height="11" fill="${isPan ? '#D4B035' : '#D4B240'}"/>
        <rect x="11.5" y="0.5" width="13" height="25" fill="${isPan ? '#D4B035' : '#D4B240'}"/>
        <rect x="12.5" y="8.5" width="11" height="9" rx="1.5" fill="${isPan ? '#9A7B10' : '#A08010'}"/>
        <line x1="18" y1="0.5" x2="18" y2="25.5" stroke="${isPan ? '#C49A22' : '#C5A028'}" stroke-width="0.5"/>
        <line x1="0.5" y1="13" x2="35.5" y2="13" stroke="${isPan ? '#C49A22' : '#C5A028'}" stroke-width="0.5"/>
      </svg>
    </div>` : '';

  // Contactless symbol
  const contactlessSVG = isCreditDebit ? `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M5 16.5a9 9 0 0 1 0-11" stroke="${isPan ? '#2D1A04' : 'white'}" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>
      <path d="M8 13.5a5 5 0 0 1 0-5" stroke="${isPan ? '#2D1A04' : 'white'}" stroke-width="1.6" stroke-linecap="round" opacity=".75"/>
      <circle cx="11" cy="11" r="1.2" fill="${isPan ? '#2D1A04' : 'white'}"/>
      <path d="M14 13.5a5 5 0 0 0 0-5" stroke="${isPan ? '#2D1A04' : 'white'}" stroke-width="1.6" stroke-linecap="round" opacity=".75"/>
      <path d="M17 16.5a9 9 0 0 0 0-11" stroke="${isPan ? '#2D1A04' : 'white'}" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>
    </svg>` : `<span style="font-size:18px;opacity:0.12">✦</span>`;

  // Theme decoration layers
  const themeDecos = {
    credit:  `<div class="holo-layer"></div><div class="grid-layer"></div><div class="glow-layer"></div><div class="glow-layer2"></div>`,
    aadhaar: `<div class="deco-circle"></div><div class="deco-lines"></div>`,
    voter:   `<div class="deco-stars"></div>`,
    pan: '', driving: '', generic: '',
  }[theme] || '';

  // Front HTML
  const frontHTML = `
    <div class="theme-${theme} card-face front">
      ${themeDecos}
      <div class="cf">
        <div class="cf-top">
          <div>
            <div class="cf-issuer">${escH(card.bank || card.type || 'Issuer')}</div>
            <div class="cf-product">${escH(card.product || card.type)}</div>
          </div>
          ${contactlessSVG}
        </div>
        <div class="cf-mid">
          ${chipSVG}
          <div class="cf-num">
            <span>${numDisplay}</span>
            ${fullNum ? cpBtn(fullNum, 'number') : ''}
          </div>
        </div>
        <div class="cf-bot">
          <div class="cf-field">
            <div class="cf-flabel">${card.name ? 'Card Holder' : (card.dob ? 'Date of Birth' : '&nbsp;')}</div>
            <div class="cf-fval">
              ${escH(card.name || card.dob || '—')}
              ${card.name ? cpBtn(card.name, 'name') : ''}
            </div>
          </div>
          <div class="cf-field" style="text-align:right">
            <div class="cf-flabel">${card.expiry ? 'Expires' : (card.dob && card.name ? 'DOB' : '&nbsp;')}</div>
            <div class="cf-fval">${escH(card.expiry || (card.name && card.dob ? card.dob : '') || '')}</div>
          </div>
        </div>
      </div>
      ${(theme === 'pan' || theme === 'aadhaar') ? '<div class="tricolor"></div>' : ''}
    </div>`;

  // Back HTML
  const backHTML = buildBack(card, theme);

  // Action bar
  const flipSVG = `<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`;
  const delSVG  = `<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6m4-6v6"/><path d="M9 6V4h6v2"/></svg>`;

  const el = document.createElement('div');
  el.className = 'card-item';
  el.dataset.id = card.id;
  el.innerHTML = `
    <div class="card-scene" id="scene-${card.id}">
      <div class="card-flipper" id="flip-${card.id}">
        ${frontHTML}
        <div class="card-face back">${backHTML}</div>
      </div>
    </div>
    <div class="card-actions" id="act-${card.id}">
      <button class="act-btn" onclick="flipCard(${card.id},event)">${flipSVG} Flip</button>
      <button class="act-btn danger" onclick="deleteCard(${card.id},event)">${delSVG} Delete</button>
    </div>`;

  // Inject flip hint dots inside scene
  const scene = el.querySelector('.card-scene');
  const hint = document.createElement('div');
  hint.className = 'flip-hint';
  hint.innerHTML = `<span class="fh-active"></span><span></span>`;
  scene.appendChild(hint);

  el.querySelector('.card-scene').addEventListener('click', () => toggleExpand(card.id));
  return el;
}

// ================================================================
// CARD BACK BUILDER
// ================================================================
function barcodeLines(n, dark) {
  const pat = [100,68,85,55,92,72,100,60,80,95,65,100,70,85,58,90,75,100,52,80];
  return Array.from({length:n}, (_,i) => {
    const h = pat[i % pat.length];
    const w = (i % 3 === 0) ? 2.5 : 1.5;
    return `<span style="height:${h}%;width:${w}px;background:${dark ? '#2D1A04' : 'white'};border-radius:1px;display:block"></span>`;
  }).join('');
}

function buildBack(card, theme) {
  const isCreditDebit = isCard(card.type);

  if (isCreditDebit) {
    return `<div class="cb cb-credit">
      <div class="cb-magstripe"></div>
      <div class="cb-body">
        <div class="cb-sigstrip">
          <div>
            <div class="cb-siglabel">Authorized Signature</div>
            <div class="cb-sigsub">NOT VALID WITHOUT SIGNATURE</div>
          </div>
          ${card.cvv ? `<div>
            <div class="cb-cvv-label">CVV</div>
            <div class="cb-cvv-box">${escH(card.cvv)}</div>
          </div>` : ''}
        </div>
        ${card.back_info ? `<div class="cb-inforow" style="margin-top:10px">
          <div class="cb-infoitem"><div class="cb-infol">Additional Info</div><div class="cb-infov">${escH(card.back_info)}</div></div>
        </div>` : ''}
        <div class="cb-foot" style="margin-top:auto;padding-top:8px">
          <div class="cb-bankname">${escH(card.bank || card.product || '')}</div>
          <div class="cb-barcode">${barcodeLines(20, false)}</div>
        </div>
      </div>
    </div>`;
  }

  if (theme === 'aadhaar') {
    return `<div class="cb" style="background:linear-gradient(148deg,#003087 0%,#0050B3 100%)">
      <div class="cb-id">
        <div class="cb-id-header">Government of India — UIDAI</div>
        ${card.address ? `<div class="cb-id-field"><div class="cb-id-label">Registered Address</div><div class="cb-id-val">${escH(card.address)}</div></div>` : ''}
        ${card.back_info ? `<div class="cb-id-field"><div class="cb-id-label">Details</div><div class="cb-id-val">${escH(card.back_info)}</div></div>` : ''}
        ${card.barcode_ref ? `<div class="cb-id-field"><div class="cb-id-label">Reference</div><div class="cb-id-val" style="font-family:'SF Mono',monospace;font-size:10px;letter-spacing:1px">${escH(card.barcode_ref)}</div></div>` : ''}
        <div style="display:flex;justify-content:flex-end;margin-top:auto">
          <div class="cb-qr-placeholder">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M3 3h7v7H3V3zm1 1v5h5V4H4zm1 1h3v3H5V5zm8-2h7v7h-7V3zm1 1v5h5V4h-5zm1 1h3v3h-3V5zM3 13h7v7H3v-7zm1 1v5h5v-5H4zm1 1h3v3H5v-3zm8 0h2v2h-2v-2zm0 4h2v2h-2v-2zm3-4h2v2h-2v-2zm-1 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 0h2v2h-2v-2z"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="tricolor"></div>
    </div>`;
  }

  if (theme === 'pan') {
    return `<div class="cb-pan">
      <div class="cb-id-header">Income Tax Department — Govt of India</div>
      ${card.address ? `<div class="cb-id-field"><div class="cb-id-label">Address</div><div class="cb-id-val">${escH(card.address)}</div></div>` : ''}
      ${card.back_info ? `<div class="cb-id-field"><div class="cb-id-label">Details</div><div class="cb-id-val">${escH(card.back_info)}</div></div>` : ''}
      <div style="display:flex;justify-content:flex-end;margin-top:auto">
        <div class="cb-pan-barcode">${barcodeLines(18, true)}</div>
      </div>
      <div class="tricolor"></div>
    </div>`;
  }

  // Generic / Voter / Driving
  const bgs = {
    voter:   'linear-gradient(148deg,#14012B 0%,#2D1275 100%)',
    driving: 'linear-gradient(148deg,#0A2416 0%,#134A2C 100%)',
    generic: 'linear-gradient(148deg,#0D0D1E 0%,#1A1535 100%)',
  };
  const bg = bgs[theme] || bgs.generic;
  return `<div class="cb" style="background:${bg}">
    <div class="cb-id">
      ${card.back_info ? `<div class="cb-id-field"><div class="cb-id-label">Details</div><div class="cb-id-val">${escH(card.back_info)}</div></div>` : ''}
      ${card.address ? `<div class="cb-id-field"><div class="cb-id-label">Address</div><div class="cb-id-val">${escH(card.address)}</div></div>` : ''}
      ${card.barcode_ref ? `<div class="cb-id-field"><div class="cb-id-label">Reference</div><div class="cb-id-val" style="font-family:'SF Mono',monospace;font-size:10px;letter-spacing:1px">${escH(card.barcode_ref)}</div></div>` : ''}
      <div style="display:flex;justify-content:flex-end;margin-top:auto">
        <div class="cb-barcode">${barcodeLines(18, false)}</div>
      </div>
    </div>
  </div>`;
}

// ================================================================
// CARD INTERACTIONS
// ================================================================
function toggleExpand(id) {
  const el = document.querySelector(`.card-item[data-id="${id}"]`);
  if (!el) return;

  if (expandedId === id) {
    // Second tap → flip the card
    const flipped = el.dataset.flipped === '1';
    const flipper = $('flip-' + id);
    const newFlipped = !flipped;
    el.dataset.flipped = newFlipped ? '1' : '0';
    flipper.style.transform = newFlipped ? 'rotateY(180deg)' : '';
    // Update hint dots
    const dots = el.querySelectorAll('.flip-hint span');
    if (dots.length === 2) {
      dots[0].classList.toggle('fh-active', !newFlipped);
      dots[1].classList.toggle('fh-active', newFlipped);
    }
    return;
  }

  // Collapse any open card first
  if (expandedId) {
    const prev = document.querySelector(`.card-item[data-id="${expandedId}"]`);
    if (prev) {
      prev.classList.remove('expanded');
      prev.dataset.flipped = '0';
      const pf = $('flip-' + expandedId);
      if (pf) pf.style.transform = '';
      // Reset prev dots
      const pd = prev.querySelectorAll('.flip-hint span');
      if (pd.length === 2) { pd[0].classList.add('fh-active'); pd[1].classList.remove('fh-active'); }
    }
  }

  el.classList.add('expanded');
  el.dataset.flipped = '0';
  // Reset this card dots to front
  const dots = el.querySelectorAll('.flip-hint span');
  if (dots.length === 2) { dots[0].classList.add('fh-active'); dots[1].classList.remove('fh-active'); }
  expandedId = id;

  // Scroll card into view smoothly
  setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
}

function flipCard(id, e) {
  e.stopPropagation();
  const el = document.querySelector(`.card-item[data-id="${id}"]`);
  if (!el) return;
  const flipped = el.dataset.flipped === '1';
  const newFlipped = !flipped;
  const flipper = $('flip-' + id);
  el.dataset.flipped = newFlipped ? '1' : '0';
  flipper.style.transform = newFlipped ? 'rotateY(180deg)' : '';
  const dots = el.querySelectorAll('.flip-hint span');
  if (dots.length === 2) {
    dots[0].classList.toggle('fh-active', !newFlipped);
    dots[1].classList.toggle('fh-active', newFlipped);
  }
}

async function deleteCard(id, e) {
  e.stopPropagation();
  if (!confirm('Permanently delete this card?')) return;
  const el = document.querySelector(`.card-item[data-id="${id}"]`);
  if (el) {
    el.style.transition = 'all 0.3s ease';
    el.style.opacity = '0';
    el.style.transform = 'scale(0.88) translateY(-8px)';
  }
  setTimeout(async () => {
    await txDel(id);
    if (expandedId === id) expandedId = null;
    await renderWallet();
    toast('Card deleted', 'info');
  }, 280);
}

// ================================================================
// CLIPBOARD
// ================================================================
async function copyVal(text, e) {
  e.stopPropagation();
  if (!text || text === 'null') { toast('Nothing to copy', 'error'); return; }
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = Object.assign(document.createElement('textarea'), {
        value: text, readOnly: true,
        style: 'position:fixed;opacity:0;top:0;left:0'
      });
      document.body.appendChild(ta);
      ta.select(); document.execCommand('copy');
      ta.remove();
    }
    toast('Copied to clipboard', 'success');
  } catch {
    toast('Copy failed', 'error');
  }
}

// ================================================================
// TOAST
// ================================================================
function toast(msg, type = 'info') {
  if (toastTimer) clearTimeout(toastTimer);
  const el = $('toast');
  $('toastMsg').textContent = msg;
  el.className = `toast ${type} show`;
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

// ================================================================
// HTML ESCAPING
// ================================================================
function escH(s) {
  if (!s || s === 'null') return '';
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

// ================================================================
// TOUCH LOCKDOWN — iPhone PWA: no bounce, no scroll escape
// ================================================================

// Block ALL touchmove by default (prevents rubber-band on fixed shell)
document.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

// Re-allow ONLY vertical scrolling inside the designated scroll area
$('scrollArea').addEventListener('touchmove', e => {
  // Allow only if there's actually scrollable content
  const el = $('scrollArea');
  const canScrollDown = el.scrollTop < (el.scrollHeight - el.clientHeight);
  const canScrollUp   = el.scrollTop > 0;

  // Determine swipe direction
  if (e.touches.length === 1) {
    const touch = e.touches[0];
    // Store first touch position
    if (!el._touchStartY) el._touchStartY = touch.clientY;
    const dy = touch.clientY - el._touchStartY;

    // Block if: trying to scroll up at top, or down at bottom
    if ((!canScrollUp && dy > 0) || (!canScrollDown && dy < 0)) {
      e.preventDefault();
    }
    // Otherwise let it scroll naturally
  }
}, { passive: false });

// Reset stored touch position on touchstart
$('scrollArea').addEventListener('touchstart', e => {
  if (e.touches.length === 1) {
    $('scrollArea')._touchStartY = e.touches[0].clientY;
  }
}, { passive: true });

// Block pull-to-refresh and any gesture on the header/non-scroll areas
document.addEventListener('touchstart', e => {
  // nothing needed here — touchmove block covers it
}, { passive: true });

// ================================================================
// KEYBOARD shortcuts
// ================================================================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (scannerEl.classList.contains('open')) closeScanner();
    if (expandedId) {
      const prev = document.querySelector(`.card-item[data-id="${expandedId}"]`);
      if (prev) {
        prev.classList.remove('expanded');
        prev.dataset.flipped = '0';
        const pf = $('flip-' + expandedId);
        if (pf) pf.style.transform = '';
        expandedId = null;
      }
    }
  }
});

// Tap outside expanded card to collapse
$('scrollArea').addEventListener('click', e => {
  if (!expandedId) return;
  const card = e.target.closest('.card-item');
  if (!card || String(card.dataset.id) !== String(expandedId)) {
    const prev = document.querySelector(`.card-item[data-id="${expandedId}"]`);
    if (prev) {
      prev.classList.remove('expanded');
      prev.dataset.flipped = '0';
      const pf = $('flip-' + expandedId);
      if (pf) pf.style.transform = '';
    }
    expandedId = null;
  }
});

// ================================================================
// SERVICE WORKER
// ================================================================
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .catch(err => console.warn('[Iris] SW failed:', err));
}

// ================================================================
// BOOT
// ================================================================
(async () => {
  try {
    db = await openDB();
    await renderWallet();
  } catch (err) {
    console.error('[Iris] Boot error:', err);
    toast('Startup error — refresh the app', 'error');
  }
})();
</script>
</body>
</html>
