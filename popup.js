document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
      const options = {
        url: chrome.runtime.getURL('popout.html'),
        focused: true,
        width: 500,
        height: 500,
      };
      if (event.target.id.includes('popup')) {
        options.type = 'popup';
      }
      chrome.windows.create(options);
      console.log('window created with options', options);
    }
  });
})
