document.addEventListener('DOMContentLoaded', () => {
      const headers = document.querySelectorAll('.accordion-header');

      headers.forEach(h => {

        h.addEventListener('click', () => {
          const content = h.nextElementSibling;
          if (!content) return; 

          if (content.style.maxHeight !== '0px') {
            content.style.maxHeight = '0px';
            h.setAttribute('aria-expanded', 'false');
          } else {
              content.style.maxHeight = content.scrollHeight + 'px';
            header.setAttribute('aria-expanded', 'true');
          }
        });
      });
      });
