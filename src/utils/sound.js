class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.15) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  equip() {
    this.playTone(520, 'triangle', 0.08, 0.2);
    setTimeout(() => this.playTone(780, 'triangle', 0.12, 0.18), 50);
  }

  unequip() {
    this.playTone(360, 'sine', 0.08, 0.15);
  }

  click() {
    this.playTone(600, 'sine', 0.04, 0.1);
  }

  error() {
    this.playTone(180, 'sawtooth', 0.2, 0.2);
  }

  success() {
    this.playTone(440, 'triangle', 0.1, 0.18);
    setTimeout(() => this.playTone(554, 'triangle', 0.1, 0.18), 80);
    setTimeout(() => this.playTone(659, 'triangle', 0.15, 0.2), 160);
  }

  starBurst() {
    const notes = [523, 659, 784, 1046];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.25, 0.2), idx * 70);
    });
  }

  tick() {
    this.playTone(800, 'square', 0.03, 0.06);
  }
}

export const sound = new SoundEngine();
