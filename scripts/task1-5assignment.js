document.addEventListener('DOMContentLoaded', function() {
            setupRatingSystem();
            setupReadMore();
            setupThemeToggle();
        });

        function setupRatingSystem() {
            const stars = document.querySelectorAll('#ratingStars .star');
            const ratingValue = document.getElementById('ratingValue');
            const ratingMessage = document.getElementById('ratingMessage');
            
            stars.forEach(star => {
                star.addEventListener('click', function() {
                    const value = parseInt(this.getAttribute('data-value'));
                    currentRating = value;
                    
                    ratingValue.textContent = value;
                    
                    const messages = [
                        "Please select rating",
                        "Not satisfied",
                        "Could be better", 
                        "Good deal",
                        "Great value",
                        "Excellent purchase!"
                    ];
                    ratingMessage.innerHTML = `<strong>${messages[value]}</strong>`;
                    
                    stars.forEach((s, index) => {
                        if (index < value) {
                            s.classList.add('active');
                        } else {
                            s.classList.remove('active');
                        }
                    });
                });
            });
        }

        function setupReadMore() {
            const readMoreBtn = document.querySelector('.read-more-btn');
            const shortText = document.querySelector('.short-text');
            const fullText = document.querySelector('.full-text');
            
            let isExpanded = false;
            
            readMoreBtn.addEventListener('click', function() {
                if (!isExpanded) {
                    shortText.style.display = 'none';
                    fullText.style.display = 'block';
                    readMoreBtn.textContent = 'Show Less';
                    isExpanded = true;
                } 
                else {
                    shortText.style.display = 'block';
                    fullText.style.display = 'none';
                    readMoreBtn.textContent = 'Show More Details';
                    isExpanded = false;
                }
            });
        }


        function setupThemeToggle() {
            const themeToggle = document.getElementById('themeToggle');
            
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);
            
            themeToggle.addEventListener('click', function() {
                const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                setTheme(newTheme);
            });
            
            function setTheme(theme) {
                if (theme === 'dark') {
                    document.body.classList.add('dark-theme');
                    themeToggle.textContent = 'Day Mode';
                } else {
                    document.body.classList.remove('dark-theme');
                    themeToggle.textContent = 'Night Mode';
                }
                localStorage.setItem('theme', theme);
            }
        }
