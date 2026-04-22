
  const stackToggle = document.getElementById('stackToggle');
  const stackPanel  = document.getElementById('stackPanel');

  stackToggle.addEventListener('click', () => {
    const isOpen = stackPanel.classList.toggle('open');
    stackToggle.classList.toggle('open', isOpen);
    stackToggle.setAttribute('aria-expanded', isOpen);
  });
