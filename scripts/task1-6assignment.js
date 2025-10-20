document.addEventListener('DOMContentLoaded', function() {
            console.log('querySelector:', document.querySelector('.star'));
            console.log('querySelectorAll:', document.querySelectorAll('.star'));
            console.log('getElementById:', document.getElementById('ratingValue'));
            
            setupRatingSystem();
            setupReadMore();
            setupCardStyles();
            setupThemeToggle();
            setupContentDemo();
        });

        function setupRatingSystem() {
            const stars = document.querySelectorAll('#ratingStars .star');
            const ratingValue = document.getElementById('ratingValue');
            const ratingMessage = document.getElementById('ratingMessage');
            
            let currentRating = 0;
            
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
                } else {
                    shortText.style.display = 'block';
                    fullText.style.display = 'none';
                    readMoreBtn.textContent = 'Show More Details';
                    isExpanded = false;
                }
            });
        }

        function setupCardStyles() {
            const styleButtons = document.querySelectorAll('.style-btn');
            const saleCards = document.querySelectorAll('.sale-card');
            
            styleButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const theme = this.getAttribute('data-theme');
                    saleCards.forEach(card => {
                        card.classList.remove('pink-theme', 'blue-theme', 'green-theme', 'purple-theme', 'original-theme');
                        if (theme !== 'original-theme') {
                            card.classList.add(theme);
                        }
                    });
                });
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

        function setupContentDemo() {
            const saleInfoBtn = document.getElementById('saleInfoBtn');
            const discountsBtn = document.getElementById('discountsBtn');
            const featuresBtn = document.getElementById('featuresBtn');
            const resetContentBtn = document.getElementById('resetContentBtn');
            const dynamicContent = document.getElementById('dynamicContent');

            const originalContent = dynamicContent.innerHTML;

            saleInfoBtn.addEventListener('click', function() {
                dynamicContent.innerHTML = `
                    <h4 style="color: #db5f9d; margin-bottom: 10px;">Exclusive Sale Information</h4>
                    <p><strong>Limited Time Offer!</strong> All products are <span style="color: #e75a8d;">30-50% OFF</span> original prices.</p>
                    <p>Sale ends in: <strong>3 days</strong></p>
                    <p>Free shipping on orders over $50</p>
                    <p>Bonus: Buy 2 get 1 free on selected items!</p>
                `;
            });

            discountsBtn.addEventListener('click', function() {
                dynamicContent.innerHTML = `
                    <h4 style="color: #db5f9d; margin-bottom: 10px;">Current Discounts</h4>
                    <ul style="text-align: left;">
                        <li>Lipsticks: <strong>40% OFF</strong> - Now $15 (was $25)</li>
                        <li>Cushions: <strong>40% OFF</strong> - Now $18 (was $30)</li>
                        <li>Palettes: <strong>43% OFF</strong> - Now $16 (was $28)</li>
                        <li>Cushions: <strong>41% OFF</strong> - Now $13 (was $22)</li>
                    </ul>
                    <p style="margin-top: 10px;"><em>All discounts are automatically applied at checkout!</em></p>
                `;
            });

            featuresBtn.addEventListener('click', function() {
                dynamicContent.innerHTML = `
                    <h4 style="color: #db5f9d; margin-bottom: 10px;">Product Features</h4>
                    <div style="text-align: left;">
                        <p><strong>All our sale products include:</strong></p>
                        <ul>
                            <li><strong>Cruelty-free</strong> formulas</li>
                            <li><strong>Premium quality</strong> ingredients</li>
                            <li><strong>Long-lasting</strong> performance</li>
                            <li><strong>Vegan options</strong> available</li>
                            <li><strong>Hypoallergenic</strong> for sensitive skin</li>
                        </ul>
                        <p style="margin-top: 10px;"><strong>Bonus:</strong> All products come with 30-day satisfaction guarantee!</p>
                    </div>
                `;
            });

            resetContentBtn.addEventListener('click', function() {
                dynamicContent.innerHTML = originalContent;
            });
        }