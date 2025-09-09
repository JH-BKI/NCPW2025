/**
 * Progress Manager - Handles topic completion tracking and persistence
 * 
 * Features:
 * - Track completed topics in memory
 * - Save/load progress from localStorage
 * - Update UI with completion status and topic names
 * - Provide testing functions for development
 * 
 * Integration:
 * - Called when user completes summary (topic marked as complete)
 * - Updates menu UI with completion status
 * - Persists across browser sessions
 */

class ProgressManager {
    constructor(expiryDays = null) {
        this.completedTopics = new Set(); // Use Set for efficient lookups
        this.storageKey = 'arLearningApp_progress';
        this.expiryDays = expiryDays; // Number of days until expiry (null = no expiry)
        this.loadProgress();
        console.log('ProgressManager initialized. Completed topics:', Array.from(this.completedTopics));
        if (this.expiryDays) {
            console.log(`Progress will expire in ${this.expiryDays} days`);
        } else {
            console.log('Progress has no expiry (stored indefinitely)');
        }
    }

    /**
     * Mark a topic as completed
     * @param {number} topicNumber - Topic number (1-4)
     */
    markTopicCompleted(topicNumber) {
        if (topicNumber >= 1 && topicNumber <= 4) {
            this.completedTopics.add(topicNumber);
            this.saveProgress();
            this.updateMenuUI();
            console.log(`Topic ${topicNumber} marked as completed. Total completed: ${this.completedTopics.size}/4`);
            
            // Note: Celebration is now manually triggered via button in menu
            // No automatic celebration trigger
        } else {
            console.error('Invalid topic number:', topicNumber);
        }
    }

    /**
     * Check if a topic is completed
     * @param {number} topicNumber - Topic number (1-4)
     * @returns {boolean}
     */
    isTopicCompleted(topicNumber) {
        return this.completedTopics.has(topicNumber);
    }

    /**
     * Get all completed topic numbers
     * @returns {Array<number>}
     */
    getCompletedTopics() {
        return Array.from(this.completedTopics).sort();
    }

    /**
     * Get completion count
     * @returns {number}
     */
    getCompletionCount() {
        return this.completedTopics.size;
    }

    /**
     * Get completion percentage
     * @returns {number}
     */
    getCompletionPercentage() {
        return Math.round((this.completedTopics.size / 4) * 100);
    }

    /**
     * Get remaining topics count
     * @returns {number}
     */
    getRemainingTopicsCount() {
        return 4 - this.completedTopics.size;
    }

    /**
     * Get completed topic names
     * @returns {Array<string>}
     */
    getCompletedTopicNames() {
        return this.getCompletedTopics().map(topicNumber => {
            return window.getTopicTitle ? window.getTopicTitle(topicNumber) : `Topic ${topicNumber}`;
        });
    }

    /**
     * Save progress to localStorage
     */
    saveProgress() {
        try {
            const progressData = {
                completedTopics: Array.from(this.completedTopics),
                lastUpdated: new Date().toISOString()
            };
            
            // Add expiry date if configured
            if (this.expiryDays) {
                const expiryDate = new Date();
                expiryDate.setDate(expiryDate.getDate() + this.expiryDays);
                progressData.expiresAt = expiryDate.toISOString();
            }
            
            localStorage.setItem(this.storageKey, JSON.stringify(progressData));
            console.log('Progress saved to localStorage:', progressData);
        } catch (error) {
            console.error('Failed to save progress:', error);
        }
    }

    /**
     * Load progress from localStorage
     */
    loadProgress() {
        try {
            const savedData = localStorage.getItem(this.storageKey);
            if (savedData) {
                const progressData = JSON.parse(savedData);
                
                // Check if data has expired
                if (this.isDataExpired(progressData)) {
                    console.log('Progress data has expired, starting fresh');
                    this.completedTopics = new Set();
                    this.clearExpiredData();
                    return;
                }
                
                this.completedTopics = new Set(progressData.completedTopics || []);
                console.log('Progress loaded from localStorage:', progressData);
                
                // Log expiry info if applicable
                if (progressData.expiresAt) {
                    const expiryDate = new Date(progressData.expiresAt);
                    const daysUntilExpiry = Math.ceil((expiryDate - new Date()) / (1000 * 60 * 60 * 24));
                    console.log(`Progress expires in ${daysUntilExpiry} days (${expiryDate.toLocaleDateString()})`);
                }
            } else {
                console.log('No saved progress found, starting fresh');
            }
        } catch (error) {
            console.error('Failed to load progress:', error);
            this.completedTopics = new Set(); // Reset on error
        }
    }

    /**
     * Check if stored data has expired
     * @param {Object} progressData - The parsed progress data from localStorage
     * @returns {boolean} - True if data has expired
     */
    isDataExpired(progressData) {
        if (!progressData.expiresAt) {
            return false; // No expiry date means data never expires
        }
        
        const expiryDate = new Date(progressData.expiresAt);
        const now = new Date();
        return now > expiryDate;
    }

    /**
     * Clear expired data from localStorage
     */
    clearExpiredData() {
        try {
            localStorage.removeItem(this.storageKey);
            console.log('Expired progress data cleared from localStorage');
        } catch (error) {
            console.error('Failed to clear expired data:', error);
        }
    }

    /**
     * Set expiry days for progress data
     * @param {number|null} days - Number of days until expiry (null = no expiry)
     */
    setExpiryDays(days) {
        this.expiryDays = days;
        if (days) {
            console.log(`Progress expiry set to ${days} days`);
            // Re-save current progress with new expiry
            this.saveProgress();
        } else {
            console.log('Progress expiry disabled (stored indefinitely)');
        }
    }

    /**
     * Get expiry information for current data
     * @returns {Object|null} - Expiry info or null if no expiry
     */
    getExpiryInfo() {
        try {
            const savedData = localStorage.getItem(this.storageKey);
            if (savedData) {
                const progressData = JSON.parse(savedData);
                if (progressData.expiresAt) {
                    const expiryDate = new Date(progressData.expiresAt);
                    const now = new Date();
                    const daysUntilExpiry = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
                    const isExpired = now > expiryDate;
                    
                    return {
                        expiresAt: progressData.expiresAt,
                        expiryDate: expiryDate,
                        daysUntilExpiry: Math.max(0, daysUntilExpiry),
                        isExpired: isExpired
                    };
                }
            }
        } catch (error) {
            console.error('Failed to get expiry info:', error);
        }
        return null;
    }

    /**
     * Update the menu UI with current progress
     */
    updateMenuUI() {
        const completionCount = this.getCompletionCount();
        const completedTopicNames = this.getCompletedTopicNames();
        
        // Update progress counter
        const progressCounter = document.querySelector('#progress-counter');
        if (progressCounter) {
            progressCounter.textContent = `${completionCount} of 4 completed`;
        }

        // Update remaining topics count
        const progressLeftElement = document.querySelector('#progress-left');
        if (progressLeftElement) {
            const remaining = this.getRemainingTopicsCount();
            progressLeftElement.textContent = remaining;
        }

        // Update all progress-left elements in summary sections
        document.querySelectorAll('#progress-left').forEach(element => {
            const remaining = this.getRemainingTopicsCount();
            element.textContent = remaining;
        });

        // Update completed topics list
        const completedTopicsList = document.querySelector('#completed-topics-list');
        if (completedTopicsList) {
            if (completedTopicNames.length > 0) {
                completedTopicsList.innerHTML = completedTopicNames
                    .map(name => `<li class="completed-topic-item">✓ ${name}</li>`)
                    .join('');
                completedTopicsList.style.display = 'block';
            } else {
                completedTopicsList.innerHTML = '';
                completedTopicsList.style.display = 'none';
            }
        }

        // Update progress bar if it exists
        const progressBar = document.querySelector('#progress-bar');
        if (progressBar) {
            const percentage = this.getCompletionPercentage();
            progressBar.style.width = `${percentage}%`;
        }

        // Show/hide celebration button based on completion status
        const celebrationButtonContainer = document.querySelector('#celebration-button-container');
        if (celebrationButtonContainer) {
            if (completionCount === 4) {
                celebrationButtonContainer.style.display = 'block';
                console.log('🎉 All topics completed - showing celebration button');
            } else {
                celebrationButtonContainer.style.display = 'none';
            }
        }

        console.log('Menu UI updated with progress:', {
            count: completionCount,
            topics: completedTopicNames
        });
    }

    /**
     * Clear all progress (for testing)
     */
    clearAllProgress() {
        this.completedTopics.clear();
        this.saveProgress();
        this.updateMenuUI();
        console.log('All progress cleared');
    }

    /**
     * Set specific topics as completed (for testing)
     * @param {Array<number>} topicNumbers - Array of topic numbers to mark as completed
     */
    setCompletedTopics(topicNumbers) {
        this.completedTopics.clear();
        topicNumbers.forEach(topicNumber => {
            if (topicNumber >= 1 && topicNumber <= 4) {
                this.completedTopics.add(topicNumber);
            }
        });
        this.saveProgress();
        this.updateMenuUI();
        console.log('Progress set to:', Array.from(this.completedTopics));
    }

    /**
     * Get progress summary for debugging
     * @returns {Object}
     */
    getProgressSummary() {
        return {
            completedTopics: this.getCompletedTopics(),
            completedTopicNames: this.getCompletedTopicNames(),
            completionCount: this.getCompletionCount(),
            completionPercentage: this.getCompletionPercentage(),
            totalTopics: 4
        };
    }

    /**
     * Trigger completion celebration when all topics are completed
     */
    triggerCompletionCelebration() {
        console.log('🎉 All topics completed! Triggering celebration...');
        // Dispatch custom event for celebration
        window.dispatchEvent(new CustomEvent('allTopicsCompleted'));
    }
}

// Create global instance with configurable expiry
// To set expiry: new ProgressManager(30) for 30 days, or new ProgressManager() for no expiry
window.progressManager = new ProgressManager();

// Testing functions (available in console)
window.testProgress = {
    /**
     * Clear all progress
     */
    clear: () => {
        window.progressManager.clearAllProgress();
        console.log('Progress cleared. Call testProgress.show() to see current state.');
    },

    /**
     * Mark specific topics as completed
     * @param {Array<number>} topics - Array of topic numbers (1-4)
     */
    set: (topics) => {
        window.progressManager.setCompletedTopics(topics);
        console.log('Progress set. Call testProgress.show() to see current state.');
    },

    /**
     * Mark all topics as completed
     */
    completeAll: () => {
        window.progressManager.setCompletedTopics([1, 2, 3, 4]);
        console.log('All topics marked as completed. Call testProgress.show() to see current state.');
    },

    /**
     * Show current progress summary
     */
    show: () => {
        const summary = window.progressManager.getProgressSummary();
        console.table(summary);
        return summary;
    },

    /**
     * Mark a single topic as completed
     * @param {number} topicNumber - Topic number (1-4)
     */
    complete: (topicNumber) => {
        window.progressManager.markTopicCompleted(topicNumber);
        console.log(`Topic ${topicNumber} marked as completed. Call testProgress.show() to see current state.`);
    },

    /**
     * Set expiry days for progress data
     * @param {number|null} days - Number of days until expiry (null = no expiry)
     */
    setExpiry: (days) => {
        window.progressManager.setExpiryDays(days);
        console.log(`Expiry set to ${days ? days + ' days' : 'disabled'}. Call testProgress.expiry() to see current expiry info.`);
    },

    /**
     * Show expiry information
     */
    expiry: () => {
        const expiryInfo = window.progressManager.getExpiryInfo();
        if (expiryInfo) {
            console.log('Expiry Information:', expiryInfo);
            console.log(`Progress expires in ${expiryInfo.daysUntilExpiry} days (${expiryInfo.expiryDate.toLocaleDateString()})`);
        } else {
            console.log('No expiry set - progress stored indefinitely');
        }
        return expiryInfo;
    },

    /**
     * Simulate expired data (for testing)
     */
    simulateExpired: () => {
        // Manually set an expired date in localStorage
        const expiredData = {
            completedTopics: [1, 2, 3],
            lastUpdated: new Date().toISOString(),
            expiresAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() // Yesterday
        };
        localStorage.setItem('arLearningApp_progress', JSON.stringify(expiredData));
        console.log('Simulated expired data. Reload the page to see expiry behavior.');
    }
};

console.log('Progress Manager loaded. Use testProgress.show() to see current progress, or testProgress.clear() to reset.');
