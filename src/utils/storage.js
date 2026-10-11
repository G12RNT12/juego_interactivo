const STORAGE_KEY = 'muse_studio_highscore';

export function loadHighScore() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? parseInt(saved, 10) : 0;
  } catch (err) {
    console.warn("localStorage inaccessible", err);
    return 0;
  }
}

export function saveHighScore(score) {
  try {
    const current = loadHighScore();
    if (score > current) {
      localStorage.setItem(STORAGE_KEY, score.toString());
      return true;
    }
  } catch (err) {
    console.warn("Failed to write to localStorage", err);
  }
  return false;
}
