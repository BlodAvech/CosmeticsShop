$(document).ready(function(){
	const $purchasesCountText = $('.purchased_count');
	const $buyersCountText = $('.buyers_count');
	const $visitsCountText = $('.visits_count');
    const $purchasesBg = $('.purchased_stat .progress_bg');
    const $buyersBg = $('.buyers_stat .progress_bg');
    const $visitsBg = $('.visits_stat .progress_bg');

	animateStat($purchasesCountText , $purchasesBg , 0 , 987654321 , 5);
	animateStat($buyersCountText , $buyersBg , 0 , 12345678 , 5);
	animateStat($visitsCountText , $visitsBg , 0 , 1234567890 , 5);
});

            function animateStat($element, $progressBar, startV, endV, duration) {
                let value = startV;
                const steps = duration * 1000 / 16;
                const increment = (endV - startV) / steps;
                
                
                const timer = setInterval(() => {
                    value += increment;
                    const currentValue = Math.floor(value);
                    
                    if(currentValue >= endV) {
                        $element.text(formatNumber(endV));
                        $progressBar.css('height', 100 + '%');
                        clearInterval(timer);
                    } else {
                        $element.text(formatNumber(currentValue));
                        
                        const currentProgress = (currentValue / endV) * 100;
                        $progressBar.css('height', currentProgress + '%');
                    }
                }, 16);
            }

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
