document.addEventListener('DOMContentLoaded', () => {
      const headers = document.querySelectorAll('.accordion-header');

      headers.forEach(header => {
        header.addEventListener('click', () => {
          const content = header.nextElementSibling;
          if (!content) return; // safety check

          // If content is already open -> close it
          if (content.style.maxHeight && content.style.maxHeight !== '0px') {
            content.style.maxHeight = '0px';
            header.setAttribute('aria-expanded', 'false');
          } else {
            // Optional: close others (uncomment if you want only one open at a time)
            // document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = '0px');

            // Open clicked one:
            content.style.maxHeight = content.scrollHeight + 'px';
            header.setAttribute('aria-expanded', 'true');
          }
        });
      });

      // Optional: on load, if some content has 'open' class, set its maxHeight
      document.querySelectorAll('.accordion-content').forEach(c => {
        if (c.classList.contains('open')) c.style.maxHeight = c.scrollHeight + 'px';
      });
    });