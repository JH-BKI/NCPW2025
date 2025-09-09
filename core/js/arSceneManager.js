// AR Scene Manager - Phase 4.5 Implementation
// Handles A-Frame scene creation, management, and disposal with asset caching

class ARSceneManager {
    constructor() {
        this.currentScene = null;
        this.isInitialized = false;
        this.assetCache = new Map(); // topicId -> cached assets
        this.stateManager = null;
        this.currentTopic = null;
        this.tipInterval = null;
        this.tipIndex = 0;
        this.isPaused = false; // Track pause state
        
        // Performance optimization caches
        this.elementCache = new Map(); // Cache DOM element references
        this.assetPreloadCache = new Map(); // Cache preloaded images
        this.animationBatchQueue = []; // Batch animation updates
        
        // Multi-poster workflow state tracking
        this.lastDetectedTargetIndex = null; // Track last detected poster
        this.isTimelinePaused = false; // Track if timeline is paused (not stopped)
        
        // ADD TIMELINE STATE TRACKING VARIABLES
        this.previousState = null;
        this.timelineWasRunning = false;
        this.timelineWasCompleted = false;
        
        // Topic mapping: target index -> topic number
        this.topicMapping = {
            0: 1, // Target 0 -> topic_1 (Web Development)
            1: 2, // Target 1 -> topic_2 (Digital Marketing)  
            2: 3, // Target 2 -> topic_3 (Data Science)
            3: 4  // Target 3 -> topic_4 (Cybersecurity)
        };
        
        // Tips for AR scanning
        this.tips = [
            "💡 <strong>Tip:</strong> Keep your device steady and follow the on-screen instructions",
            "💡 <strong>Tip:</strong> Make sure your camera lens is clean for best results",
            "💡 <strong>Tip:</strong> Good lighting helps the camera detect posters faster",
            "💡 <strong>Tip:</strong> Move closer if the poster is not detected",
            "💡 <strong>Tip:</strong> Try different angles if scanning is slow"
        ];
        
        console.log('AR Scene Manager initialized');
    }
    
    /**
     * Preload all AR assets for better performance
     */
    async preloadARAssets() {
        console.log('🚀 Preloading AR assets for performance optimization...');
        
        const preloadPromises = [];
        
        // Preload all topic assets
        for (let topicId = 1; topicId <= 4; topicId++) {
            const assets = this.getTopicARAssets(topicId);
            if (assets && assets.images) {
                assets.images.forEach(asset => {
                    if (!this.assetPreloadCache.has(asset.src)) {
                        const promise = this.preloadImage(asset.src);
                        this.assetPreloadCache.set(asset.src, promise);
                        preloadPromises.push(promise);
                    }
                });
            }
        }
        
        try {
            await Promise.all(preloadPromises);
            console.log('✅ All AR assets preloaded successfully');
        } catch (error) {
            console.warn('⚠️ Some assets failed to preload:', error);
        }
    }
    
    /**
     * Preload a single image
     */
    preloadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }
    
    /**
     * Get cached element reference or create new one
     */
    getCachedElement(id) {
        if (!this.elementCache.has(id)) {
            const element = document.getElementById(id);
            if (element) {
                this.elementCache.set(id, element);
            }
        }
        return this.elementCache.get(id);
    }
    
    /**
     * Batch update multiple elements for better performance
     */
    batchUpdateElements(updates) {
        // Use requestAnimationFrame to batch DOM updates
        requestAnimationFrame(() => {
            updates.forEach(update => {
                const element = this.getCachedElement(update.id);
                if (element) {
                    if (update.opacity !== undefined) {
                        element.setAttribute('opacity', update.opacity);
                    }
                    if (update.visible !== undefined) {
                        element.setAttribute('visible', update.visible);
                    }
                    if (update.position !== undefined) {
                        element.setAttribute('position', update.position);
                    }
                }
            });
        });
    }
    
    /**
     * Optimized element visibility toggle
     */
    setElementVisibility(id, visible, opacity = 1) {
        const element = this.getCachedElement(id);
        if (element) {
            element.setAttribute('visible', visible);
            if (visible) {
                element.setAttribute('opacity', opacity);
            }
        }
    }
    
    /**
     * Get AR assets for a specific topic
     */
    getTopicARAssets(topicId) {
        if (typeof window.getTopicARAssets === 'function') {
            return window.getTopicARAssets(topicId);
        }
        return null;
    }
    
    async initialize() {
        if (typeof window.AFRAME === 'undefined') {
            console.error('A-Frame library not loaded');
            return false;
        }
        
        // Add global error handler for MindAR errors
        this.setupGlobalErrorHandler();
        
        this.isInitialized = true;
        console.log('AR Scene Manager initialized successfully');
        return true;
    }
    
    // Set up global error handler for MindAR issues
    setupGlobalErrorHandler() {
        // Handle unhandled promise rejections (common with MindAR)
        window.addEventListener('unhandledrejection', (event) => {
            if (event.reason && event.reason.message && event.reason.message.includes('dummyRun')) {
                console.warn('⚠️ AR Scene Manager: MindAR dummyRun error caught globally - this is a known issue with MindAR 1.2.5');
                console.log('ℹ️ AR Scene Manager: AR functionality may still work despite this error');
                event.preventDefault(); // Prevent the error from showing in console
            }
        });
        
        // Handle general errors
        window.addEventListener('error', (event) => {
            if (event.message && event.message.includes('dummyRun')) {
                console.warn('⚠️ AR Scene Manager: MindAR dummyRun error caught globally');
                event.preventDefault();
            }
        });
    }
    
    async createScene(topicId) {
        if (!this.isInitialized) {
            console.error('AR Scene Manager not initialized');
            return false;
        }
        
        // Scene disposal removed - keeping scene alive
        
        // Check cache first
        const cachedAssets = this.assetCache.get(topicId);
        if (cachedAssets) {
            console.log(`Using cached assets for topic ${topicId}`);
            return this.buildSceneFromCache(topicId, cachedAssets);
        }
        
        // Download and cache assets
        const assets = await this.downloadAndCacheAssets(topicId);
        return this.buildSceneFromCache(topicId, assets);
    }
    
    async downloadAndCacheAssets(topicId) {
        const assets = {
            models: [],
            textures: [],
            timestamp: Date.now()
        };
        
        // Asset loading will be implemented when real assets are available
        // assets.models = [
        //     { id: `model_${topicId}_1`, url: `./assets/models/topic_${topicId}/model1.glb` }
        // ];
        
        this.assetCache.set(topicId, assets);
        console.log(`Assets cached for topic ${topicId}`);
        return assets;
    }
    
    buildSceneFromCache(topicId, assets) {
        const container = document.getElementById('ar-scene-container');
        if (!container) return false;
        
        // Create A-Frame scene with MindAR for real camera feed and timeline controller
        const sceneHTML = `
            <a-scene 
                id="ar-scene-${topicId}"
                background="transparent"
                embedded
                vr-mode-ui="enabled: false"
                renderer="logarithmicDepthBuffer: true; colorManagement: true"
                mindar-image="imageTargetSrc: ./assets/targets/targets_4.mind; maxTrack: 4; uiLoading: yes; uiScanning: yes; uiError: yes; autoStart: true"
                timeline-controller
                color-space="sRGB"
                device-orientation-permission-ui="enabled: false">
                
                <!-- Camera for AR tracking -->
                <a-camera 
                    id="ar-camera-${topicId}"
                    position="0 0 0"
                    look-controls="enabled: false"
                    wasd-controls="enabled: false"
                    cursor="rayOrigin: mouse"
                    raycaster="objects: [data-raycastable]">
                </a-camera>
                
                <!-- Lighting for 3D content -->
                <a-light 
                    type="ambient" 
                    color="#404040" 
                    intensity="0.6">
                </a-light>
                <a-light 
                    type="directional" 
                    color="#ffffff" 
                    intensity="0.8"
                    position="1 1 1">
                </a-light>
                
                <!-- Topic-specific content containers for each target -->
                <a-entity id="topic-${topicId}-assets" position="0 0 -2" mindar-image-target="targetIndex: ${topicId - 1}">
                    <!-- Topic ${topicId} 3D content will be added here -->
                    <a-entity id="topic-${topicId}-content">
                        <!-- Basic 3D content for testing - will be enhanced by animation system -->
                        <a-box id="topic${topicId}-cube" 
                               position="0 0 0" 
                               scale="0.5 0.5 0.5" 
                               color="#e34c26" 
                               visible="false" 
                               opacity="0"
                               data-raycastable>
                        </a-box>
                        <a-sphere id="topic${topicId}-sphere" 
                                  position="1 0 0" 
                                  scale="0.5 0.5 0.5" 
                                  color="#264de4" 
                                  visible="false" 
                                  opacity="0"
                                  data-raycastable>
                        </a-sphere>
                        <a-pyramid id="topic${topicId}-pyramid" 
                                   position="-1 0 0" 
                                   scale="0.5 0.5 0.5" 
                                   color="#f7df1e" 
                                   visible="false" 
                                   opacity="0"
                                   data-raycastable>
                        </a-pyramid>
                    </a-entity>
                </a-entity>
                
            </a-scene>
        `;
        
        container.innerHTML = sceneHTML;
        this.currentScene = container.querySelector(`#ar-scene-${topicId}`);
        
        // Set up MindAR event listeners for this scene
        this.setupMindARListeners(topicId);
        
        // Load topic-specific animation file
        this.loadTopicAnimation(topicId);
        
        console.log(`AR scene created for topic ${topicId} with timeline controller`);
        return true;
    }
    
    // Set up MindAR event listeners for target detection
    setupMindARListeners() {
        const sceneEl = document.querySelector('a-scene');
        if (!sceneEl) {
            console.error('❌ AR Scene Manager: No AR scene found for event listeners');
            return;
        }
        
        // Always set up listeners for the current scene
        console.log('🎯 AR Scene Manager: Setting up MindAR event listeners for current scene');
        
        // Listen for target found events
        sceneEl.addEventListener('targetFound', (event) => {
            console.log('🎯 targetFound event received:', event);
            console.log('🎯 Event detail:', event.detail);
            console.log('🎯 Event target:', event.target);
            console.log('🎯 About to call handleTargetFound...');
            
            let targetIndex = null;
            
            // Try to get targetIndex from event detail first
            if (event.detail && event.detail.targetIndex !== undefined) {
                targetIndex = event.detail.targetIndex;
                console.log(`🎯 Target index from detail: ${targetIndex}`);
            } else {
                // Fallback: extract targetIndex from the target entity's mindar-image-target attribute
                const targetEntity = event.target;
                if (targetEntity && targetEntity.getAttribute) {
                    const mindarTarget = targetEntity.getAttribute('mindar-image-target');
                    if (mindarTarget && mindarTarget.targetIndex !== undefined) {
                        targetIndex = mindarTarget.targetIndex;
                        console.log(`🎯 Target index from entity attribute: ${targetIndex}`);
                    }
                }
            }
            
            if (targetIndex === null) {
                console.warn('⚠️ AR Scene Manager: Could not extract targetIndex from event');
                return;
            }
            
            console.log(`🎯 Target detected in AR scene: ${targetIndex}`);
            console.log(`🎯 Calling handleTargetFound with targetIndex: ${targetIndex}`);
            this.handleTargetFound(targetIndex);
            console.log(`🎯 handleTargetFound call completed`);
        });
        
        // Listen for target lost events
        sceneEl.addEventListener('targetLost', (event) => {
            console.log('📤 targetLost event received:', event);
            
            let targetIndex = null;
            
            // Try to get targetIndex from event detail first
            if (event.detail && event.detail.targetIndex !== undefined) {
                targetIndex = event.detail.targetIndex;
                console.log(`📤 Target index from detail: ${targetIndex}`);
            } else {
                // Fallback: extract targetIndex from the target entity's mindar-image-target attribute
                const targetEntity = event.target;
                if (targetEntity && targetEntity.getAttribute) {
                    const mindarTarget = targetEntity.getAttribute('mindar-image-target');
                    if (mindarTarget && mindarTarget.targetIndex !== undefined) {
                        targetIndex = mindarTarget.targetIndex;
                        console.log(`📤 Target index from entity attribute: ${targetIndex}`);
                    }
                }
            }
            
            if (targetIndex === null) {
                console.warn('⚠️ AR Scene Manager: Could not extract targetIndex from targetLost event');
                return;
            }
            
            console.log(`📤 Target lost in AR scene: ${targetIndex}`);
            this.handleTargetLost(targetIndex);
        });
        
        // Listen for AR ready events
        sceneEl.addEventListener('arReady', (event) => {
            console.log('✅ AR Scene Manager: MindAR is ready');
        });
        
        // Listen for AR error events
        sceneEl.addEventListener('arError', (event) => {
            console.error('❌ AR Scene Manager: MindAR failed to start');
        });
        
        console.log('🎯 AR Scene Manager: MindAR event listeners set up');
    }
    
    // Load topic-specific animation file
    async loadTopicAnimation(topicId) {
        try {
            // Load the animation file dynamically
            const script = document.createElement('script');
            // Load topic-specific animation file
            script.src = `./core/js/animations/timeline-topic-${topicId}.js?v=${Date.now()}`;
            script.onload = () => {
                console.log(`Animation file loaded for topic ${topicId}`);
                // Set the topic in the timeline controller
                this.setTimelineTopic(topicId);
            };
            script.onerror = () => {
                console.error(`Failed to load animation file for topic ${topicId}`);
            };
            document.head.appendChild(script);
        } catch (error) {
            console.error(`Error loading animation file for topic ${topicId}:`, error);
        }
    }
    
    // Set the topic in the timeline controller
    setTimelineTopic(topicId) {
        const sceneEl = document.querySelector('a-scene');
        if (sceneEl) {
            const timelineController = sceneEl.components['timeline-controller'];
            if (timelineController) {
                const zeroBasedTopicId = topicId - 1; // Convert to 0-based index
                console.log(`Timeline controller: Setting topic ${topicId} (0-based: ${zeroBasedTopicId})`);
                timelineController.setTopic(zeroBasedTopicId);
            }
        }
    }
    
    // Handle target found event
    handleTargetFound(targetIndex) {
        console.log(`🎯 handleTargetFound called with targetIndex: ${targetIndex}`);
        console.log(`🎯 Topic mapping:`, this.topicMapping);
        console.log(`🎯 Current state:`, window.stateManager ? window.stateManager.currentState : 'unknown');
        
        // Clear any pending target loss timeout since we found the target
        if (this.targetLossTimeout) {
            clearTimeout(this.targetLossTimeout);
            this.targetLossTimeout = null;
            console.log('⏰ Target found - cancelled pending target loss timeout');
        }
        
        // Don't process target found events when in video state or other non-AR states
        const currentState = window.stateManager ? window.stateManager.currentState : null;
        if (['video', 'quiz', 'summary', 'menu'].includes(currentState)) {
            console.log(`🚫 Ignoring target found event in ${currentState} state`);
            return;
        }
        
        const detectedTopicId = this.topicMapping[targetIndex];
        if (detectedTopicId) {
            console.log(`✅ Poster detected for topic ${detectedTopicId}`);
            
            const isSamePoster = (this.lastDetectedTargetIndex === targetIndex);
            
            if (isSamePoster && this.isTimelinePaused) {
                // Same poster + timeline was paused = RESUME (but still go through ar_ready)
                console.log(`🔄 Same poster detected - will resume paused timeline after ar_ready`);
                // Don't resume immediately, let ar_ready handle the countdown first
            } else if (isSamePoster && !this.isTimelinePaused && this.timelineWasRunning)  {
                // Same poster + timeline already running = IGNORE (don't restart)
                console.log(`🔄 Same poster detected - timeline already running, staying in current state`);
                return; // Don't change state
            } else {
                // Different poster OR no paused timeline = START NEW
                console.log(`🆕 Different poster or new session - starting fresh`);
                this.stopCurrentTimeline();
                this.lastDetectedTargetIndex = targetIndex;
                
                // Reset timeline state tracking for new topic
                this.timelineWasRunning = false;
                this.timelineWasCompleted = false;
                this.isTimelinePaused = false;
                
                // Reset countdown buttons for new topic
                if (window.resetAllCountdownButtons) {
                    window.resetAllCountdownButtons();
                }
            }
            
            // Update global topic
            this.setGlobalTopic(detectedTopicId);
            
            // Add entities to the detected topic container
            this.addEntitiesToTopic(detectedTopicId);
            
            // Set topic in timeline controller
            this.setTimelineTopic(detectedTopicId);
            
            // Update UI
            this.updateDetectedPosterUI(detectedTopicId);
            
            // For different poster, always go through AR Ready flow
            if (window.stateManager && window.stateManager.currentState !== 'ar_ready') {
                console.log(`🔄 AR Scene Manager: Different poster detected - transitioning to ar_ready state`);
                window.stateManager.changeState('ar_ready');
            } else {
                console.log(`🔄 AR Scene Manager: Already in ar_ready state, skipping transition`);
            }
        } else {
            console.log(`⚠️ Unknown target detected: ${targetIndex}`);
            console.log(`⚠️ Available targets:`, Object.keys(this.topicMapping));
        }
    }
    
    // Start animation for the detected topic
    startAnimation(topicId) {
        const sceneEl = document.querySelector('a-scene');
        if (sceneEl) {
            const timelineController = sceneEl.components['timeline-controller'];
            if (timelineController && timelineController.isTimelineReady()) {
                console.log(`Starting animation for topic ${topicId}`);
                timelineController.startAnimeTimeline();
            } else {
                console.log(`Timeline not ready for topic ${topicId}`);
            }
        }
    }
    
    
    // Start animation when user clicks "Start AR Experience"
    startARExperience() {
        if (this.currentTopic) {
            console.log(`🎬 Starting AR experience for topic ${this.currentTopic}`);
            
            // Check if we should resume a paused timeline
            if (this.isTimelinePaused && this.timelineWasRunning) {
                console.log(`🔄 Resuming paused timeline for topic ${this.currentTopic}`);
                this.resumeTimeline();
                window.stateManager.changeState('animating');
            } else {
                console.log(`🆕 Starting fresh animation for topic ${this.currentTopic}`);
                this.startAnimation(this.currentTopic);
            }
        } else {
            console.error('❌ No topic detected - cannot start AR experience');
        }
    }
    
    // Handle target lost event
    handleTargetLost(targetIndex) {
        console.log(`🎯 handleTargetLost called with targetIndex: ${targetIndex}`);
        
        // Don't process target lost events when in video state or other non-AR states
        const currentState = window.stateManager ? window.stateManager.currentState : null;
        if (['video', 'quiz', 'summary', 'menu'].includes(currentState)) {
            console.log(`🚫 Ignoring target lost event in ${currentState} state`);
            return;
        }
        
        // Add hysteresis to prevent rapid state switching
        clearTimeout(this.targetLossTimeout);
        this.targetLossTimeout = setTimeout(() => {
            // Double-check we're still in a state that should respond to target loss
            const currentState = window.stateManager ? window.stateManager.currentState : null;
            if (!['animating', 'ar_ready'].includes(currentState)) {
                console.log(`🚫 Target loss timeout cancelled - no longer in responsive state: ${currentState}`);
                return;
            }
            
            // Track timeline state before transitioning
            if (currentState === 'animating' || currentState === 'ar_ready') {
                console.log(`📊 Timeline state before loss - Running: ${this.timelineController?.isRunning}, Completed: ${this.timelineController?.isCompleted}, Previous State: ${currentState}`);
                this.isTimelinePaused = true;
                // For ar_ready state, timeline is loaded but not started yet, so we consider it "ready to start"
                this.timelineWasRunning = (currentState === 'animating') ? (this.timelineController?.isRunning || false) : false;
                this.timelineWasCompleted = this.timelineController?.isCompleted || false;
                
                // Pause the timeline for potential resume
                console.log(`⏸️ Pausing timeline for potential resume`);
                if (this.timelineController && typeof this.timelineController.pauseTimeline === 'function') {
                    this.timelineController.pauseTimeline();
                } else {
                    console.log(`⚠️ Timeline controller not available for pause`);
                }
            }
            
            console.log(`⏰ Target loss confirmed after delay - transitioning to scanning`);
            // Always go back to scanning when tracking is lost
            window.stateManager.changeState('scanning');
        }, 1000); // 1 second delay
        
        // Store current state and timeline status before pausing
        this.previousState = window.stateManager ? window.stateManager.currentState : null;
        this.timelineWasRunning = this.isTimelineRunning();
        this.timelineWasCompleted = this.isTimelineCompleted();
        
        console.log(`📊 Timeline state before loss - Running: ${this.timelineWasRunning}, Completed: ${this.timelineWasCompleted}, Previous State: ${this.previousState}`);
        
        // Pause the animation when target is lost (don't stop/reset)
        const sceneEl = document.querySelector('a-scene');
        if (sceneEl) {
            const timelineController = sceneEl.components['timeline-controller'];
            if (timelineController) {
                console.log(`⏸️ Pausing timeline for potential resume`);
                timelineController.quickPause();
                this.isTimelinePaused = true;
            }
        }
    }
    
    // Helper method to check if timeline is running
    isTimelineRunning() {
        const sceneEl = document.querySelector('a-scene');
        if (sceneEl) {
            const timelineController = sceneEl.components['timeline-controller'];
            if (timelineController) {
                return timelineController.timelineRunning || (timelineController.timeline && timelineController.timelineState === 'running');
            }
        }
        return false;
    }
    
    // Helper method to check if timeline is completed
    isTimelineCompleted() {
        const sceneEl = document.querySelector('a-scene');
        if (sceneEl) {
            const timelineController = sceneEl.components['timeline-controller'];
            if (timelineController) {
                return timelineController.timelineState === 'completed';
            }
        }
        return false;
    }
    
    disposeScene() {
        // DISABLED: Scene disposal removed to keep scene alive
        console.log('🧹 AR Scene Manager: Scene disposal disabled - keeping scene alive');
        return; // Early return to prevent disposal
        
        // Stop MindAR first to ensure clean state
        try {
            this.stopMindAR();
        } catch (error) {
            console.warn('⚠️ Error stopping MindAR during dispose:', error);
        }
        
        // Clean up MindAR overlays that are created outside the container
        const mindarOverlays = document.querySelectorAll('.mindar-ui-overlay');
        mindarOverlays.forEach(overlay => {
            console.log('🗑️ Removing MindAR overlay:', overlay.className);
            overlay.remove();
        });
        
        // Clean up ALL video elements (MindAR creates them dynamically)
        const allVideos = document.querySelectorAll('video');
        allVideos.forEach(video => {
            console.log('🗑️ Stopping and removing video element');
            video.srcObject = null; // Stop camera stream
            video.pause(); // Ensure video is paused
            video.remove();
        });
        
        if (this.currentScene) {
            console.log('🧹 AR Scene Manager: Disposing current scene...');
            
            // Stop any running animations
            const timelineController = this.currentScene.components['timeline-controller'];
            if (timelineController) {
                console.log('⏹️ AR Scene Manager: Stopping timeline controller');
                timelineController.reset();
                // Also explicitly stop any running timeline
                if (timelineController.stopTimeline) {
                    timelineController.stopTimeline();
                }
            }
            
            const container = document.getElementById('ar-scene-container');
            if (container) {
                console.log('🗑️ AR Scene Manager: Clearing container HTML and hiding container');
                container.innerHTML = '';
                container.classList.add('hidden');
            }
            
            // Event listeners will be set up fresh for the next scene
            console.log('🔄 AR Scene Manager: Scene disposed - event listeners will be set up fresh for next scene');
                       
            this.currentScene = null;
            console.log('✅ AR Scene Manager: Scene disposed (assets remain cached)');
        }
    }
    
    // Simplified: No automatic state management connection
    // AR Scene Manager is now self-contained and responds to explicit method calls
    
    // Public API methods for explicit control
    startScanning() {
        console.log('🎬 AR Scene Manager: Starting AR scanning');
        
        // Scene disposal removed - keeping scene alive
        
        // Reset state tracking variables for new scanning session
        this.previousState = null;
        this.timelineWasRunning = false;
        this.timelineWasCompleted = false;
        
        console.log('🔄 AR Scene Manager: State tracking variables reset for new session');
        
        // Scene injection removed - scene stays alive
        
        // Start MindAR camera after scene is created
        setTimeout(() => {
            this.startMindAR();
        }, 200);
        
        // Reset timeline controller state after scene is created
        setTimeout(() => {
            const sceneEl = document.querySelector('a-scene');
            if (sceneEl) {
                const timelineController = sceneEl.components['timeline-controller'];
                if (timelineController) {
                    console.log('🔄 AR Scene Manager: Resetting timeline controller for new session');
                    timelineController.resetTimeline();
                } else {
                    console.log('⚠️ AR Scene Manager: Timeline controller not found, trying again...');
                    // Try again after a longer delay
                    setTimeout(() => {
                        const timelineController = sceneEl.components['timeline-controller'];
                        if (timelineController) {
                            console.log('🔄 AR Scene Manager: Resetting timeline controller for new session (retry)');
                            timelineController.resetTimeline();
                        }
                    }, 1000);
                }
            }
        }, 100);
    }
    
    stopScanning() {
        console.log('⏹️ AR Scene Manager: Stopping AR scanning');
        this.stopMindAR();
        // Scene disposal removed - keeping scene alive
    }
    
    createSceneForTopic(topicId) {
        console.log(`🎯 AR Scene Manager: Creating scene for topic ${topicId}`);
        return this.createSceneForDetectedTopic(topicId);
    }
    
 
    
    // Create scene when poster is detected (called by MindAR Manager)
    async createSceneForDetectedTopic(topicId) {
        console.log(`Creating AR scene for detected topic: ${topicId}`);
        
        if (!this.isInitialized) {
            console.error('AR Scene Manager not initialized');
            return false;
        }
        
        try {
            const success = await this.createScene(topicId);
            if (success) {
                console.log(`AR scene created successfully for topic ${topicId}`);
                return true;
            } else {
                console.error(`Failed to create AR scene for topic ${topicId}`);
                return false;
            }
        } catch (error) {
            console.error(`Error creating AR scene for topic ${topicId}:`, error);
            return false;
        }
    }
    
    getCacheStatus() {
        return {
            cachedTopics: Array.from(this.assetCache.keys()),
            cacheSize: this.assetCache.size
        };
    }
    
    // Update UI when poster is detected
    updateDetectedPosterUI(topicId) {
        const topicTitle = window.getTopicTitle ? window.getTopicTitle(topicId) : `Topic ${topicId}`;
        
        const titleElement = document.getElementById('detected-poster-title');
        // const nameElement = document.getElementById('detected-topic-name');
        
        if (titleElement) {
            titleElement.textContent = `Topic ${topicId}: ${topicTitle}`;
        }
        
        // if (nameElement) {
        //     nameElement.textContent = topicTitle;
        // }
        
        console.log(`🎨 UI updated for topic: ${topicTitle}`);
    }
    
    // Set global topic
    setGlobalTopic(topicId) {
        if (typeof setCurrentTopic === 'function') {
            setCurrentTopic(`topic_${topicId}`);
        }
        
        if (typeof window !== 'undefined') {
            window.currentTopic = `topic_${topicId}`;
        }
        
        this.currentTopic = topicId;
        console.log(`📚 Topic set globally: ${topicId} (topic_${topicId})`);
    }
    
    // Get current topic
    getCurrentTopic() {
        return this.currentTopic;
    }
    
    // Reset for new scanning session
    reset() {
        this.currentTopic = null;
        this.stopTipsRotation();
        // Scene disposal removed - keeping scene alive
        console.log('AR Scene Manager reset');
    }
    
    // Check if system is ready
    isReady() {
        return this.isInitialized;
    }
    
    // Pause AR scene (stop rendering and processing)
    pauseScene() {
        if (!this.currentScene) {
            console.log('⚠️ AR Scene Manager: No scene to pause');
            return false;
        }
        
        if (this.isPaused) {
            console.log('⚠️ AR Scene Manager: Scene already paused');
            return true;
        }
        
        console.log('⏸️ AR Scene Manager: Pausing AR scene...');
        
        // Pause timeline controller if available
        const timelineController = this.currentScene.components['timeline-controller'];
        if (timelineController) {
            timelineController.quickPause();
        }
        
        // Hide the AR scene container
        const container = document.getElementById('ar-scene-container');
        if (container) {
            container.style.display = 'none';
        }
        
        // Pause MindAR tracking
        const mindarSystem = this.currentScene.systems['mindar-image'];
        if (mindarSystem) {
            mindarSystem.pause();
        }
        
        this.isPaused = true;
        console.log('✅ AR Scene Manager: Scene paused successfully');
        return true;
    }
    
    // Resume AR scene (restart rendering and processing)
    resumeScene() {
        if (!this.currentScene) {
            console.log('⚠️ AR Scene Manager: No scene to resume');
            return false;
        }
        
        if (!this.isPaused) {
            console.log('⚠️ AR Scene Manager: Scene not paused');
            return true;
        }
        
        console.log('▶️ AR Scene Manager: Resuming AR scene...');
        
        // Show the AR scene container
        const container = document.getElementById('ar-scene-container');
        if (container) {
            container.style.display = 'block';
        }
        
        // Resume MindAR tracking
        const mindarSystem = this.currentScene.systems['mindar-image'];
        if (mindarSystem) {
            mindarSystem.resume();
        }
        
        // Resume timeline controller if available
        const timelineController = this.currentScene.components['timeline-controller'];
        if (timelineController && timelineController.timeline && timelineController.timeline.paused) {
            timelineController.timeline.play();
        }
        
        this.isPaused = false;
        console.log('✅ AR Scene Manager: Scene resumed successfully');
        return true;
    }
    
    // Check if scene is currently paused
    isScenePaused() {
        return this.isPaused;
    }
    
    // Start MindAR camera and tracking
    startMindAR() {
        // Clean up any lingering video elements before starting MindAR
        const existingVideos = document.querySelectorAll('video');
        console.log(`📊 VIDEO COUNT: Found ${existingVideos.length} video elements before starting MindAR`);
        if (existingVideos.length > 0) {
            console.log(`🧹 AR Scene Manager: Cleaning up ${existingVideos.length} existing video elements before starting MindAR`);
            existingVideos.forEach(video => {
                video.srcObject = null;
                video.pause();
                video.remove();
            });
        }
        
        const sceneEl = document.querySelector('a-scene');
        if (sceneEl) {
            const mindarSystem = sceneEl.systems['mindar-image-system'];
            if (mindarSystem) {
                // Check if MindAR is ready (no artificial delays)
                if (mindarSystem.start && typeof mindarSystem.start === 'function') {
                    try {
                        console.log('📹 Starting MindAR camera and tracking');
                        mindarSystem.start();
                        
                        // Clean up any video elements MindAR might have created after starting
                        setTimeout(() => {
                            const newVideos = document.querySelectorAll('video');
                            if (newVideos.length > 1) { // More than 1 means duplicates
                                console.log(`🧹 AR Scene Manager: Found ${newVideos.length} video elements after MindAR start, cleaning up duplicates`);
                                // Keep the first one, remove the rest
                                for (let i = 1; i < newVideos.length; i++) {
                                    newVideos[i].srcObject = null;
                                    newVideos[i].pause();
                                    newVideos[i].remove();
                                }
                            }
                        }, 1000); // Give MindAR time to create video elements
                    } catch (error) {
                        console.warn('⚠️ MindAR start failed, retrying in 1000ms:', error.message);
                        // Only retry if not ready, with longer delay
                        setTimeout(() => {
                            try {
                                console.log('📹 Retrying MindAR start...');
                                mindarSystem.start();
                                
                                // Clean up any video elements MindAR might have created after retry
                                setTimeout(() => {
                                    const newVideos = document.querySelectorAll('video');
                                    if (newVideos.length > 1) { // More than 1 means duplicates
                                        console.log(`🧹 AR Scene Manager: Found ${newVideos.length} video elements after MindAR retry, cleaning up duplicates`);
                                        // Keep the first one, remove the rest
                                        for (let i = 1; i < newVideos.length; i++) {
                                            newVideos[i].srcObject = null;
                                            newVideos[i].pause();
                                            newVideos[i].remove();
                                        }
                                    }
                                }, 1000);
                            } catch (retryError) {
                                console.error('❌ MindAR start failed after retry:', retryError.message);
                            }
                        }, 1000);
                    }
                } else {
                    console.warn('⚠️ MindAR system not ready - start method not available');
                    // Wait for MindAR to be ready, then try once
                    setTimeout(() => {
                        if (mindarSystem.start && typeof mindarSystem.start === 'function') {
                            try {
                                console.log('📹 Starting MindAR camera and tracking (delayed)');
                                mindarSystem.start();
                                
                                // Clean up any video elements MindAR might have created after delayed start
                                setTimeout(() => {
                                    const newVideos = document.querySelectorAll('video');
                                    if (newVideos.length > 1) { // More than 1 means duplicates
                                        console.log(`🧹 AR Scene Manager: Found ${newVideos.length} video elements after MindAR delayed start, cleaning up duplicates`);
                                        // Keep the first one, remove the rest
                                        for (let i = 1; i < newVideos.length; i++) {
                                            newVideos[i].srcObject = null;
                                            newVideos[i].pause();
                                            newVideos[i].remove();
                                        }
                                    }
                                }, 1000);
                            } catch (error) {
                                console.error('❌ MindAR start failed after delay:', error.message);
                            }
                        } else {
                            console.error('❌ MindAR never became ready');
                        }
                    }, 1000);
                }
            } else {
                console.warn('⚠️ MindAR system not found - cannot start camera');
            }
        }
    }
    
    // Stop MindAR camera and tracking
    stopMindAR() {
        const sceneEl = document.querySelector('a-scene');
        if (sceneEl) {
            const mindarSystem = sceneEl.systems['mindar-image-system'];
            if (mindarSystem) {
                console.log('📹 Stopping MindAR camera and tracking');
                try {
                    mindarSystem.stop();
                } catch (error) {
                    console.warn('⚠️ Error stopping MindAR system:', error);
                    // Continue with cleanup even if MindAR stop fails
                }
            } else {
                console.warn('⚠️ MindAR system not found - cannot stop camera');
            }
        }
    }
    
    // Start tips rotation
    startTipsRotation() {
        if (this.tipInterval) {
            this.stopTipsRotation();
        }
        
        this.tipInterval = setInterval(() => {
            this.tipIndex = (this.tipIndex + 1) % this.tips.length;
            const tipElement = document.getElementById('tip-text');
            if (tipElement) {
                tipElement.innerHTML = this.tips[this.tipIndex];
            }
        }, 2500);
        
        console.log('Tips rotation started');
    }
    
    // Stop tips rotation
    stopTipsRotation() {
        if (this.tipInterval) {
            clearInterval(this.tipInterval);
            this.tipInterval = null;
            console.log('Tips rotation stopped');
        }
    }
    
    // Generate asset HTML for all topics (1-4)
    generateAllTopicAssets() {
        let allAssetsHTML = '<a-assets>\n';
        
        // Generate assets for all topics
        for (let topicId = 1; topicId <= 4; topicId++) {
            if (window.generateTopicAssetHTML) {
                const topicAssetHTML = window.generateTopicAssetHTML(topicId);
                // Extract content between <a-assets> tags
                const assetContent = topicAssetHTML.replace(/<\/?a-assets>/g, '').trim();
                if (assetContent) {
                    allAssetsHTML += `    <!-- Topic ${topicId} Assets -->\n`;
                    allAssetsHTML += assetContent + '\n';
                }
            }
        }
        
        allAssetsHTML += '</a-assets>';
        return allAssetsHTML;
    }
    
    // Add entities to specific topic container when detected
    addEntitiesToTopic(topicId) {
        const topicContainer = document.getElementById(`scenario-assets-topic-group-${topicId}`);
        if (topicContainer && window.generateTopicEntityHTML) {
            const entityHTML = window.generateTopicEntityHTML(topicId);
            if (entityHTML) {
                topicContainer.innerHTML = entityHTML;
                console.log(`Added entities for topic ${topicId}`);
            }
        }
    }
    
    // Resume paused timeline (for same poster)
    resumeTimeline() {
        const sceneEl = document.querySelector('a-scene');
        if (sceneEl) {
            const timelineController = sceneEl.components['timeline-controller'];
            if (timelineController) {
                console.log(`▶️ Resuming paused timeline`);
                timelineController.quickPlay(); // Use existing method
                this.isTimelinePaused = false;
            }
        }
    }
    
    // Stop current timeline (for different poster)
    stopCurrentTimeline() {
        const sceneEl = document.querySelector('a-scene');
        if (sceneEl) {
            const timelineController = sceneEl.components['timeline-controller'];
            if (timelineController) {
                console.log(`⏹️ Stopping current timeline for new topic`);
                timelineController.resetTimeline(); // Use existing method
                this.isTimelinePaused = false;
                
                // Reset timeline state tracking
                this.timelineWasRunning = false;
                this.timelineWasCompleted = false;
            }
        }
    }


    injectARScene() {
        // Check if scene already exists to prevent recreation
        const existingScene = document.getElementById('AR-scene');
        if (existingScene) {
            console.log('🧹 AR Scene Manager: Scene already exists, keeping alive');
            console.log('🧹 Scene reuse count:', (window.sceneReuseCount = (window.sceneReuseCount || 0) + 1));
            // Just show the container if it's hidden
            const container = document.getElementById('ar-scene-container');
            if (container) {
                container.classList.remove('hidden');
                console.log('AR scene container shown');
            }
            return;
        }
        
        console.log('🧹 AR Scene Manager: Creating AR scene for first time');
        console.log('🧹 Scene creation count:', (window.sceneCreationCount = (window.sceneCreationCount || 0) + 1));
        
        // Show the AR scene container
        const container = document.getElementById('ar-scene-container');
        if (container) {
            container.classList.remove('hidden');
            console.log('AR scene container shown');
        }
        
        // Generate dynamic asset HTML for all topics (1-4)
        const assetHTML = this.generateAllTopicAssets();
        
        const arSceneHTML = `   
        <a-scene id="AR-scene"  
            mindar-image="imageTargetSrc: ./assets/targets/targets_4_final.mind; 
            filterMinCF: 0.0001; 
            filterBeta: 0.001; 
            warmupTolerance: 1; 
            missTolerance: 1; 
            maxTrack: 4;
            autoStart: true;" 
            timeline-controller
            color-space="sRGB" 
            renderer="colorManagement: true, physicallyCorrectLights, antialias: true, powerPreference: high-performance"
            xr-mode-ui="enabled: false" 
            loading-screen="enabled: false"
            device-orientation-permission-ui="enabled: false"
            stats="false"
            embedded="true">  

            ${assetHTML}

            <div id="timelineContainer" style="display: none;"></div>
            
            <!-- Topic containers - always present for MindAR detection -->
                    <a-entity id="scenario-assets-topic-1" position="0 0 0" mindar-image-target="targetIndex: 0">
                
                        <a-entity id="s01-loading" position="0 0 0">    
                            <a-image id="s01-loading-panel" src="./assets/topic_1/s01-image-marker.png" scale="1 1 1" position="0 0 0.25" rotation="0 0 0" 
                                material="transparent: true; alphaTest: 0.5; blending: normal" geometry=""></a-image>   
                        </a-entity>
                
                    <!-- Topic 1 entities will be added dynamically -->
                        <a-entity id="scenario-assets-topic-group-1" position="0 -0.25 0"></a-entity>

                    </a-entity>


            <a-entity id="scenario-assets-topic-2" position="0 0 0" mindar-image-target="targetIndex: 1">

                <a-image id="s02-loading" src="./assets/topic_2/s02-image-marker.png" scale="1 1 1" position="0 0 0" rotation="0 0 0" 
                    material="transparent: true; alphaTest: 0.5; blending: normal" geometry=""></a-image>   

                <!-- Topic 2 entities will be added dynamically -->
                <a-entity id="scenario-assets-topic-group-2" position="0 0 0"></a-entity>


            </a-entity>
            <a-entity id="scenario-assets-topic-3" position="0 0 0" mindar-image-target="targetIndex: 2">

                <a-image id="s03-loading" src="./assets/topic_3/s03-image-marker.png" scale="1 1 1" position="0 0 0" rotation="0 0 0" 
                    material="transparent: true; alphaTest: 0.5; blending: normal" geometry=""></a-image>   

                <!-- Topic 3 entities will be added dynamically -->
                <a-entity id="scenario-assets-topic-group-3" position="0 0 0"></a-entity>

            </a-entity>
            <a-entity id="scenario-assets-topic-4" position="0 0 0" mindar-image-target="targetIndex: 3">

                <a-image id="s04-loading" src="./assets/topic_4/s04-image-marker.png" scale="1 1 1" position="0 0 0" rotation="0 0 0" 
                    material="transparent: true; alphaTest: 0.5; blending: normal" geometry=""></a-image>   

                <!-- Topic 4 entities will be added dynamically -->
                <a-entity id="scenario-assets-topic-group-4" position="0 0 0"></a-entity>

            </a-entity>

            <a-camera position="0 0 2" look-controls="enabled: false" cursor="rayOrigin: mouse" raycaster="objects: [data-raycastable]"></a-camera>
        </a-scene>`;

        // Inject into the dedicated container instead of body
        if (container) {
            container.innerHTML = arSceneHTML;
            console.log('AR Scene has been injected into dedicated container');
            
            // Start preloading assets in background
            this.preloadARAssets().catch(error => {
                console.warn('Asset preloading failed:', error);
            });
        } else {
            document.body.insertAdjacentHTML('beforeend', arSceneHTML);
            console.log('AR Scene has been injected into body (fallback)');
        }

        // Set up MindAR event listeners after scene is injected
        this.setupMindARListeners();

        const sceneEl = document.querySelector('a-scene');
    }

    // Phase 1: Clean camera on/off methods
    enableCamera() {
        console.log('📹 AR Scene Manager: Enabling camera');
        const result = this.startMindAR();
        console.log('📹 Camera enable result:', result);
        return result;
    }
    
    disableCamera() {
        console.log('📹 AR Scene Manager: Disabling camera');
        const result = this.stopMindAR();
        console.log('📹 Camera disable result:', result);
        return result;
    }
    
    isCameraEnabled() {
        const sceneEl = document.querySelector('a-scene');
        if (sceneEl) {
            const mindarSystem = sceneEl.systems['mindar-image-system'];
            const isEnabled = mindarSystem && mindarSystem.isTracking;
            console.log('📹 Camera enabled check:', isEnabled);
            return isEnabled;
        }
        console.log('📹 Camera enabled check: false (no scene)');
        return false;
    }

}

// Create global instance
window.arSceneManager = new ARSceneManager();

// Expose performance helpers globally
window.batchUpdateElements = window.arSceneManager.batchUpdateElements.bind(window.arSceneManager);
window.setElementVisibility = window.arSceneManager.setElementVisibility.bind(window.arSceneManager);
window.getCachedElement = window.arSceneManager.getCachedElement.bind(window.arSceneManager);

console.log('AR Scene Manager loaded with performance optimizations');
