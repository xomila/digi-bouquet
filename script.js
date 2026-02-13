     // Track selected flowers
        let selectedFlowers = [];
        const maxSelection = 4;

        // Get all flower cards
        const flowerCards = document.querySelectorAll('.flower-card');
        const nextBtn = document.getElementById('nextBtn');

        // Add click event to each flower card
        flowerCards.forEach(card => {
            card.addEventListener('click', function() {
                const flowerName = this.getAttribute('data-flower');
                
                // If already selected, deselect it
                if (this.classList.contains('selected')) {
                    this.classList.remove('selected');
                    selectedFlowers = selectedFlowers.filter(f => f !== flowerName);
                } 
                // If not at max, select it
                else if (selectedFlowers.length < maxSelection) {
                    this.classList.add('selected');
                    selectedFlowers.push(flowerName);
                }

                // Enable/disable next button
                if (selectedFlowers.length === maxSelection) {
                    nextBtn.disabled = false;
                } else {
                    nextBtn.disabled = true;
                }
            });
        });

        // Next button click handler
        nextBtn.addEventListener('click', function() {
            // Store selected flowers in localStorage for the next page
            localStorage.setItem('selectedFlowers', JSON.stringify(selectedFlowers));
            
            // Navigate to bouquet page
            window.location.href = 'bouquet.html';
        });