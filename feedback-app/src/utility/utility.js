export function uuid() {
  return ("xxyx".replace(/[xy]/g, c => {
    let r = Math.random() * 36 | 0;
    let v = c === 'x' ? r : ((r & 0x3) | 0x8);

    return Math.random() >= 0.5 ? v.toString(36).toUpperCase() : v.toString(36);
  }));
}