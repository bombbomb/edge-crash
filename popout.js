document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', () => {
    navigator.getUserMedia(
      { audio: true, video: true },
      (...args) => console.log('success', args),
      (...args) => console.error('error', args)
    )
  });
});
