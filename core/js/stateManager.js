// Simple State Manager for the learning app
class StateManager {
    constructor() {
        this.currentState = 'none';  //'loading'; // Start with loading state
        this.states = {
            none: {
                onEnter: () => {
                    console.log('Entering none state');
                },
                onExit: () => {
                    console.log('Exiting none state');
                }
            },

            loading: {
                onEnter: () => {
                    console.log('Entering loading state');
                    // Show loading screen
                    this.hideAllSections();
                    // Note: loading section will be created in HTML
                },
                onExit: () => {
                    console.log('Exiting loading state');
                }
            },
            campus_selection: {
                onEnter: () => {
                    console.log('Entering campus selection state');
                    this.hideAllSections();
                    // Show campus selection section
                    const campusSection = document.getElementById('campus-section');
                    if (campusSection) {
                        campusSection.classList.remove('hidden');
                    }
                },
                onExit: () => {
                    console.log('Exiting campus selection state');
                }
            },
            splash: {
                onEnter: () => {
                    console.log('Entering splash state');
                    this.hideAllSections();
                    // Show splash section
                    document.getElementById('splash-section').classList.remove('hidden');
                    
                    // Add event listener for start button
                    const startButton = document.getElementById('start-app-button');
                    if (startButton) {
                        startButton.addEventListener('click', () => {
                            console.log('Start app button clicked - transitioning to menu');
                            this.changeState('menu');
                        });
                    }
                },
                onExit: () => {
                    console.log('Exiting splash state');
                    // Hide splash section
                    document.getElementById('splash-section').classList.add('hidden');
                }
            },            
            onboarding: {
                onEnter: () => {
                    console.log('Entering onboarding state');
                },
                onExit: () => {
                    console.log('Exiting onboarding state');
                }
            },
            help: {
                onEnter: () => {
                    console.log('Entering help state');
                },
                onExit: () => {
                    console.log('Exiting help state');
                }
            },
            celebration: {
                onEnter: () => {
                    console.log('Entering celebration state');
                    this.hideAllSections();
                    const celebrationSection = document.getElementById('celebration-section');
                    if (celebrationSection) {
                        celebrationSection.classList.remove('hidden');
                    }
                    // Trigger celebration animations
                    this.startCelebrationAnimations();
                },
                onExit: () => {
                    console.log('Exiting celebration state');
                }
            },
            menu: {
                onEnter: () => {
                    console.log('Entering menu state');
                    
                    // Stop AR camera when returning to menu
                    if (window.arSceneManager) {
                        console.log('🛑 MENU STATE: Disabling camera');
                        window.arSceneManager.disableCamera();
                        console.log('🛑 MENU STATE: Camera disabled');
                    }

                    this.hideAllSections();
                    this.scrollToTop();

                    // Show menu section
                    const menuSection = document.getElementById('menu-section');
                    if (menuSection) {
                        menuSection.classList.remove('hidden');
                    }
                    // Refresh progress display when entering menu
                    if (window.progressManager) {
                        window.progressManager.updateMenuUI();
                    }
                    
                },
                onExit: () => {
                    console.log('Exiting menu state');
                }
            },
            scanning: {
                onEnter: () => {
                    console.log('Entering scanning state');
                    this.hideAllSections();
                    this.scrollToTop();
                    // Show scanning section
                    const scanningSection = document.getElementById('scanning-section');
                    if (scanningSection) {
                        scanningSection.classList.remove('hidden');
                    }
                    
                    // Create AR scene and start MindAR camera when entering scanning state
                    if (window.arSceneManager) {
                        console.log('🔄 SCANNING STATE: Creating scene and enabling camera');
                        window.arSceneManager.injectARScene();
                        window.arSceneManager.enableCamera();
                        console.log('🔄 SCANNING STATE: Scene and camera setup complete');
                    }
                },
                onExit: () => {
                    console.log('Exiting scanning state');
                }
            },
            ar_ready: {
                onEnter: () => {
                    console.log('Entering AR ready state');
                    this.hideAllSections();
                    this.scrollToTop();
                    // Show AR ready section
                    const arReadySection = document.getElementById('ar-ready-section');
                    if (arReadySection) {
                        arReadySection.classList.remove('hidden');
                    }
                    
                    // AR scene already running from scanning state
                    
                    // Auto-trigger countdown for start button
                    const startButton = document.getElementById('start-ar-button');
                    if (startButton && typeof window.countdownTimer === 'function') {
                        setTimeout(() => {
                            window.countdownTimer(5, window.startARExperience, startButton);
                        }, 500);
                    }
                },
                onExit: () => {
                    console.log('Exiting AR ready state');
                    // Stop any running countdown timer
                    if (window.countdownTimer && window.countdownTimer.cancel) {
                        window.countdownTimer.cancel();
                    }
                }
            },
            animating: {
                onEnter: () => {
                    console.log('Entering animating state');
                    this.hideAllSections();
                    this.scrollToTop();
                    // Show animating section
                    const animatingSection = document.getElementById('animating-section');
                    if (animatingSection) {
                        animatingSection.classList.remove('hidden');
                    }
                    
                    // Start the animation for the current topic
                    if (window.arSceneManager && window.currentTopic) {
                        console.log(`🎬 Starting AR experience for ${window.currentTopic}`);
                        
                        // Ensure AR scene is injected before starting animation
                        if (!document.querySelector('a-scene')) {
                            console.log('🧹 AR Scene not found - injecting scene first');
                            window.arSceneManager.injectARScene();
                        }
                        
                        // Start the AR experience
                        window.arSceneManager.startARExperience();
                    } else {
                        console.error('❌ AR Scene Manager or current topic not available');
                    }
                },
                onExit: () => {
                    console.log('Exiting animating state');
                    // Stop the timeline completely when transitioning to video
                    if (window.timelineController) {
                        console.log('🛑 Stopping timeline when transitioning to video state');
                        window.timelineController.resetTimeline();
                    }
                }
            },
            video: {
                onEnter: () => {
                    console.log('Entering video state');
                    // Stop AR camera when entering video state
                    if (window.arSceneManager) {
                        console.log('🛑 VIDEO STATE: Disabling camera');
                        try {
                            window.arSceneManager.disableCamera();
                            console.log('🛑 VIDEO STATE: Camera disabled');
                        } catch (error) {
                            console.warn('⚠️ Error stopping MindAR:', error);
                        }
                    }

                    this.hideAllSections();
                    this.scrollToTop();
                    // document.getElementById('progress').classList.remove('hidden');
                    const videoSection = document.getElementById('video-section');
                    if (videoSection) {
                        // Load video content after state transition
                        if (typeof window.loadVideoContent === 'function') {
                            console.log('🎬 Loading video content after timeline completion');
                            window.loadVideoContent();
                        } else {
                            console.error('❌ loadVideoContent function not available');
                        }
                        videoSection.classList.remove('hidden');
                        console.log('✅ Video section shown');
                    } else {
                        console.error('❌ Video section not found!');
                    }
                    
                    // Camera already stopped above
                    
                },
                onExit: () => {
                    console.log('Exiting video state');
                    
                    // Stop any playing video when exiting video state
                    const videoIframe = document.querySelector('#video-section iframe');
                    if (videoIframe) {
                        console.log('🛑 VIDEO EXIT: Stopping video playback');
                        try {
                            // Clear the iframe src to stop video playback
                            videoIframe.src = '';
                            console.log('✅ Video iframe src cleared');
                        } catch (error) {
                            console.warn('⚠️ Error stopping video:', error);
                        }
                    } else {
                        console.log('ℹ️ No video iframe found to stop');
                    }
                    
                    //document.getElementById('progress').classList.add('hidden');
                    document.getElementById('video-section').classList.add('hidden');
                }
            },
            quiz: {
                onEnter: () => {
                    console.log('Entering quiz state');
                    this.hideAllSections();
                    this.scrollToTop();
                    //document.getElementById('progress').classList.remove('hidden');
                    document.getElementById('quiz-section').classList.remove('hidden');
                    
                    // Stop MindAR camera when showing fullscreen quiz
                    if (window.arSceneManager) {
                        window.arSceneManager.disableCamera();
                    }
                    
                    // Stop the timeline completely when transitioning to quiz
                    if (window.timelineController) {
                        console.log('🛑 Stopping timeline when transitioning to quiz state');
                        window.timelineController.resetTimeline();
                    }
                    
                    // Load quiz questions
                    if (typeof window.loadQuiz === 'function') {
                        console.log('📝 Loading quiz questions');
                        window.loadQuiz();
                    } else {
                        console.error('❌ loadQuiz function not available');
                    }
                },
                onExit: () => {
                    console.log('Exiting quiz state');
                    document.getElementById('quiz-section').classList.add('hidden');
                }
            },
            summary: {
                onEnter: () => {
                    console.log('Entering summary state');
                    this.hideAllSections();
                    this.scrollToTop();
                    //document.getElementById('progress').classList.remove('hidden');
                    document.getElementById('summary-section').classList.remove('hidden');
                    
                    // Stop MindAR camera when showing fullscreen summary
                    if (window.arSceneManager) {
                        window.arSceneManager.disableCamera();
                    }
                    
                    // Stop the timeline completely when transitioning to summary
                    if (window.timelineController) {
                        console.log('🛑 Stopping timeline when transitioning to summary state');
                        window.timelineController.resetTimeline();
                    }
                    
                    // Load summary content
                    if (typeof window.loadSummary === 'function') {
                        console.log('📄 Loading summary content');
                        window.loadSummary();
                    } else {
                        console.error('❌ loadSummary function not available');
                    }
                },
                onExit: () => {
                    console.log('Exiting summary state');
                    document.getElementById('summary-section').classList.add('hidden');
                }
            },
            face_filter_setup: {
                onEnter: () => {
                    console.log('Entering face_filter state');
                    this.scrollToTop();
                },
                onExit: () => {
                    console.log('Exiting face_filter state');
                }
            },
            face_filter_scanning: {
                onEnter: () => {
                    console.log('Entering face_filter state');
                    this.scrollToTop();
                },
                onExit: () => {
                    console.log('Exiting face_filter state');
                }
            },
            face_filter_ready: {
                onEnter: () => {
                    console.log('Entering face_filter state');
                    this.scrollToTop();
                },
                onExit: () => {
                    console.log('Exiting face_filter state');
                }
            },
            face_filter_animating: {
                onEnter: () => {
                    console.log('Entering face_filter state');
                    this.scrollToTop();
                },
                onExit: () => {
                    console.log('Exiting face_filter state');
                }
            }
        };
    }

    // Change to a new state
    changeState(newState) {
        if (!this.states[newState]) {
            console.error(`Invalid state: ${newState}`);
            return false;
        }

        if (this.currentState === newState) {
            console.log(`Already in state: ${newState}`);
            return true;
        }

        // Exit current state
        if (this.states[this.currentState].onExit) {
            this.states[this.currentState].onExit();
        }

        // Update current state
        this.currentState = newState;

        // Enter new state
        if (this.states[this.currentState].onEnter) {
            this.states[this.currentState].onEnter();
        }

        console.log(`State changed to: ${newState}`);
        return true;
    }

    // Get current state
    getCurrentState() {
        return this.currentState;
    }

    // Check if currently in a specific state
    isInState(state) {
        return this.currentState === state;
    }

    // Helper method to hide all sections
    hideAllSections() {
        const sections = [
            'loading-section', 
            'splash-section', 
            'onboarding-section', 
            'campus-section', 
            'onboarding-section',
            'help',
            'menu-section', 
            'scanning-section', 
            'ar-ready-section', 
            'animating-section',
            'video-section', 
            'quiz-section', 
            'summary-section',
            'celebration-section',
            'face-filter'
            ];
            
        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.classList.add('hidden');
            }
        });
    }

    // Scroll all sections to top
    scrollToTop() {
        document.querySelectorAll('.section').forEach(section => {
            section.scrollTop = 0;
        });
    }

    // Add a new state (for future extensibility)
    addState(stateName, onEnter, onExit) {
        this.states[stateName] = {
            onEnter: onEnter || (() => {}),
            onExit: onExit || (() => {})
        };
        console.log(`Added new state: ${stateName}`);
    }

    // Celebration animation methods
    startCelebrationAnimations() {
        console.log('🎉 Starting celebration animations...');
        this.createConfetti();
        // Optional: Add sound effects here
        // this.playCelebrationSound();
    }

    createConfetti() {
        const container = document.getElementById('confetti-container');
        if (!container) return;
        
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b'];
        
        // Clear any existing confetti
        container.innerHTML = '';
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            container.appendChild(confetti);
        }
    }
}

// Debug function to show complete app status
function debugAppStatus() {
  console.log('📊 APP STATUS OVERVIEW');
  console.log('====================');
  
  // Current state from stateManager
  if (window.stateManager) {
    console.log('🔄 Current State:', window.stateManager.getCurrentState());
  } else {
    console.log('❌ StateManager not available');
  }
  
  // Current topic
  if (typeof currentTopic !== 'undefined') {
    console.log('📚 Current Topic:', currentTopic || 'None selected');
  } else {
    console.log('❌ currentTopic variable not available');
  }
  
  // Campus selection
  if (typeof selectedCampus !== 'undefined') {
    console.log('🏫 Selected Campus:', selectedCampus || 'None selected');
  } else {
    console.log('❌ selectedCampus variable not available');
  }
  
  // Quiz progress
  if (typeof currentScore !== 'undefined') {
    console.log('📝 Current Score:', currentScore);
  } else {
    console.log('❌ currentScore variable not available');
  }
  
  if (typeof selectedAnswers !== 'undefined') {
    console.log('✅ Selected Answers:', selectedAnswers);
  } else {
    console.log('❌ selectedAnswers variable not available');
  }
  
  // Progress tracking
  if (window.progressManager) {
    const progress = window.progressManager.getProgressSummary();
    console.log('📈 Progress Summary:', progress);
  } else {
    console.log('❌ ProgressManager not available');
  }
  
  console.log('====================');
  console.log('💡 Use debugCurrentTopic() to see current topic details');
  console.log('💡 Use testProgress.show() to see detailed progress info');
}

// Create and make stateManager available globally
window.stateManager = new StateManager();

// Test function for AR scene pause/resume functionality
function testARSceneControl() {
    console.log('🧪 Testing AR Scene Control...');
    
    if (window.arSceneManager) {
        const isPaused = window.arSceneManager.isScenePaused();
        console.log(`Current pause state: ${isPaused ? 'PAUSED' : 'RUNNING'}`);
        
        if (isPaused) {
            console.log('▶️ Resuming AR scene...');
            window.arSceneManager.resumeScene();
        } else {
            console.log('⏸️ Disabling camera...');
            window.arSceneManager.disableCamera();
        }
    } else {
        console.error('❌ AR Scene Manager not available');
    }
}

// Make debug function available globally
window.debugAppStatus = debugAppStatus;

// Make test function available globally
window.testARSceneControl = testARSceneControl;