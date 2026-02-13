  const flowerImages = {
            'rose': '../photos/pink flower wt stem.png',
            'tulip': '../photos/blue flower wt stem.png',
            'sunflower': '../photos/orange flower wt stem.png',
            'daisy': '../photos/blue flower 2 wt stem.png',
            'lily': '../photos/orange flower wt stem2.png',
            'orchid': '..photos/pink blue flower wt stem.png',
            'peony': '../photos/purple flower wt stem.png',
            'carnation': '../photos/purple pink wt stem.png'
        };

        // Get selected flowers from localStorage
        const selectedFlowers = JSON.parse(localStorage.getItem('selectedFlowers')) || [];

        // If no flowers selected, redirect back
        if (selectedFlowers.length === 0) {
            window.location.href = 'flower-selection.html';
        }

        // Place each selected flower in the bouquet
        selectedFlowers.forEach((flowerName, index) => {
            const position = document.getElementById(`flower${index + 1}`);
            if (position && flowerImages[flowerName]) {
                const img = document.createElement('img');
                img.src = flowerImages[flowerName];
                img.alt = flowerName;
                
                // Fallback to placeholder if image doesn't load
                img.onerror = function() {
                    // You can use placeholder images from unsplash temporarily
                    const placeholders = {
                        'rose': '../photos/pink flower wt stem.png',
                        'tulip': '../photos/blue flower wt stem.png',
                        'sunflower': '../photos/orange flower wt stem.png',
                        'daisy': '../photos/blue flower 2 wt stem.png',
                        'lily': '../photos/orange flower wt stem2.png',
                        'orchid': '..photos/pink blue flower wt stem.png',
                        'peony': '../photos/purple flower wt stem.png',
                        'carnation': '../photos/purple pink wt stem.png'
                    };
                    this.src = placeholders[flowerName];
                };
                
                position.appendChild(img);
            }
        });