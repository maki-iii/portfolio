// Apply the saved preference before the page paints to avoid a theme flash.
try {
  const saved = localStorage.getItem('portfolio-theme');
  document.documentElement.dataset.theme = saved === 'dark' || saved === 'light'
    ? saved
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
} catch {
  document.documentElement.dataset.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
