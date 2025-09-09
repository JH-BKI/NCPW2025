// Performance Helpers for AR Animations
// This file provides optimized functions for better AR asset performance

/**
 * Optimized timeline animation helpers
 */
window.PerformanceHelpers = {
    
    /**
     * Batch set multiple elements to invisible with optimized DOM updates
     */
    setElementsInvisible: function(elementIds) {
        const updates = elementIds.map(id => ({
            id: id,
            visible: false,
            opacity: 0
        }));
        
        if (window.batchUpdateElements) {
            window.batchUpdateElements(updates);
        } else {
            // Fallback to individual updates
            elementIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.setAttribute('visible', false);
                    element.setAttribute('opacity', 0);
                }
            });
        }
    },
    
    /**
     * Batch set multiple elements to visible with optimized DOM updates
     */
    setElementsVisible: function(elementIds, opacity = 1) {
        const updates = elementIds.map(id => ({
            id: id,
            visible: true,
            opacity: opacity
        }));
        
        if (window.batchUpdateElements) {
            window.batchUpdateElements(updates);
        } else {
            // Fallback to individual updates
            elementIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.setAttribute('visible', true);
                    element.setAttribute('opacity', opacity);
                }
            });
        }
    },
    
    /**
     * Optimized anime.js timeline with performance settings
     */
    createOptimizedTimeline: function(options = {}) {
        const defaultOptions = {
            easing: 'easeOutExpo',
            duration: 750,
            autoplay: false,
            // Performance optimizations
            update: function(anim) {
                // Use requestAnimationFrame for smooth updates
                requestAnimationFrame(() => {
                    // Let anime.js handle the updates
                });
            }
        };
        
        return anime.timeline({...defaultOptions, ...options});
    },
    
    /**
     * Preload images for better performance
     */
    preloadImages: function(imageUrls) {
        const promises = imageUrls.map(url => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = url;
            });
        });
        
        return Promise.all(promises);
    },
    
    /**
     * Debounced function for performance-critical operations
     */
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    /**
     * Throttled function for performance-critical operations
     */
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

console.log('Performance helpers loaded');
