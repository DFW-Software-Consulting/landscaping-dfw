// Lightweight form validation helpers (demo forms only; nothing is submitted).
export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
export const isPhone = (value) => value.replace(/\D/g, '').length >= 10
