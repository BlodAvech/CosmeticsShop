document.addEventListener('DOMContentLoaded', () => {
      const headers = document.querySelectorAll('.accordion-header');

      headers.forEach(header => {
        header.addEventListener('click', () => {
          const content = header.nextElementSibling;
          if (!content) return; 

          if (content.style.maxHeight && content.style.maxHeight !== '0px') {
            content.style.maxHeight = '0px';
            header.setAttribute('aria-expanded', 'false');
          } else {
              content.style.maxHeight = content.scrollHeight + 'px';
            header.setAttribute('aria-expanded', 'true');
          }
        });
      });

      document.querySelectorAll('.accordion-content').forEach(c => {
        if (c.classList.contains('open')) c.style.maxHeight = c.scrollHeight + 'px';
      });
    });