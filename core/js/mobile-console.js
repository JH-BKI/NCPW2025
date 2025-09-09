/**
 * Mobile Console Debug System
 * 
 * Provides a mobile-friendly console overlay that captures browser console output
 * and displays it in a dropdown interface with copy-to-clipboard functionality.
 * 
 * Features:
 * - Captures console.log, console.warn, console.error, console.info
 * - Displays app version and current state in button label
 * - Full-screen scrollable console with color-coded messages
 * - Copy to clipboard functionality with visual feedback
 * - Auto-updates when app state changes
 */

class MobileConsole {
    constructor() {
        this.debugConsoleOpen = false;
        this.originalConsole = {
            log: console.log,
            warn: console.warn,
            error: console.error,
            info: console.info,
            debug: console.debug,
            trace: console.trace
        };
        this.version = 'unknown'; // Will be set by the main app
        this.isMobileDevice = this.detectMobileDevice();
        this.init();
    }

    init() {
        this.overrideConsoleMethods();
        this.captureUncaughtErrors();
        this.updateDebugInfo();
        this.hookIntoStateChanges();
    }

    // Enhanced device detection with better mobile vs desktop distinction
    detectMobileDevice() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const platform = navigator.platform || '';
        
        // More comprehensive mobile device detection
        const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
        const tabletRegex = /ipad|android(?!.*mobile)|tablet/i;
        
        // Check user agent for mobile/tablet indicators
        const isMobileUA = mobileRegex.test(userAgent);
        const isTabletUA = tabletRegex.test(userAgent);
        
        // Check for touch capability
        const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        // Get screen dimensions
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const screenRatio = screenWidth / screenHeight;
        
        // More precise screen size detection
        const isSmallScreen = screenWidth <= 480; // Phone-sized
        const isMediumScreen = screenWidth > 480 && screenWidth <= 1024; // Tablet-sized
        const isLargeScreen = screenWidth > 1024; // Desktop-sized
        
        // Check for specific mobile characteristics
        const isPortrait = screenHeight > screenWidth;
        const isLandscape = screenWidth > screenHeight;
        
        // Detect if device is likely a phone (not tablet or desktop)
        const isPhone = isMobileUA && (isSmallScreen || (isMediumScreen && isPortrait));
        
        // Detect if device is likely a tablet
        const isTablet = isTabletUA || (hasTouch && isMediumScreen && isLandscape);
        
        // Detect if device is likely a desktop
        const isDesktop = !isMobileUA && !isTabletUA && (isLargeScreen || (!hasTouch && isMediumScreen));
        
        // Final mobile device determination (phones only, not tablets)
        const isMobileDevice = isPhone;
        
        // Enhanced logging for debugging
        console.log(`🔍 Enhanced Device Detection:`);
        console.log(`  User Agent Mobile: ${isMobileUA}`);
        console.log(`  User Agent Tablet: ${isTabletUA}`);
        console.log(`  Has Touch: ${hasTouch}`);
        console.log(`  Screen: ${screenWidth}x${screenHeight} (${isPortrait ? 'Portrait' : 'Landscape'})`);
        console.log(`  Screen Size: ${isSmallScreen ? 'Small' : isMediumScreen ? 'Medium' : 'Large'}`);
        console.log(`  Device Type: ${isPhone ? 'Phone' : isTablet ? 'Tablet' : isDesktop ? 'Desktop' : 'Unknown'}`);
        console.log(`  Final Mobile: ${isMobileDevice}`);
        
        // Store device type for other components to use
        this.deviceType = isPhone ? 'phone' : isTablet ? 'tablet' : isDesktop ? 'desktop' : 'unknown';
        this.isTablet = isTablet;
        this.isDesktop = isDesktop;
        
        return isMobileDevice;
    }

    // Override console methods to capture output
    overrideConsoleMethods() {
        // This method is now handled by interceptAllConsoleMethods()
        // Keeping it for backward compatibility but functionality moved to processConsoleMessage()
    }

    // Capture uncaught errors and other global error events
    captureUncaughtErrors() {
        // Try a different approach - capture errors by overriding the browser's internal error handling
        this.captureErrorsAtSource();
        
        // Also use traditional methods as backup
        window.addEventListener('error', (event) => {
            let errorMessage = `Uncaught Error: ${event.message}`;
            let errorDetails = `File: ${event.filename || 'unknown'}, Line: ${event.lineno || 'unknown'}, Column: ${event.colno || 'unknown'}`;
            
            // Try to get more detailed error information
            if (event.error) {
                errorMessage = `Uncaught ${event.error.name || 'Error'}: ${event.error.message || event.message}`;
                if (event.error.stack) {
                    errorDetails += `\nStack Trace:\n${event.error.stack}`;
                }
            }
            
            this.addToMobileConsole('error', `${errorMessage}\n${errorDetails}`);
        });

        // Capture unhandled promise rejections with enhanced details
        window.addEventListener('unhandledrejection', (event) => {
            let reason = 'Unknown reason';
            if (event.reason) {
                if (event.reason instanceof Error) {
                    reason = `${event.reason.name}: ${event.reason.message}`;
                    if (event.reason.stack) {
                        reason += `\nStack Trace:\n${event.reason.stack}`;
                    }
                } else {
                    reason = event.reason.toString();
                }
            }
            this.addToMobileConsole('error', `Unhandled Promise Rejection: ${reason}`);
        });

        // Intercept all console methods more comprehensively
        this.interceptAllConsoleMethods();
    }

    // Try to capture errors at the source by overriding browser's internal error handling
    captureErrorsAtSource() {
        // Store original error handler
        this.originalErrorHandler = window.onerror;
        
        // Override global error handler to capture more details
        window.onerror = (message, source, lineno, colno, error) => {
            // Call original handler if it exists
            if (this.originalErrorHandler) {
                this.originalErrorHandler(message, source, lineno, colno, error);
            }
            
            // Capture detailed error information
            let errorMessage = `Uncaught Error: ${message}`;
            let errorDetails = `File: ${source || 'unknown'}, Line: ${lineno || 'unknown'}, Column: ${colno || 'unknown'}`;
            
            // Try to get more detailed error information from the error object
            if (error) {
                errorMessage = `Uncaught ${error.name || 'Error'}: ${error.message || message}`;
                if (error.stack) {
                    errorDetails += `\nStack Trace:\n${error.stack}`;
                }
            }
            
            this.addToMobileConsole('error', `${errorMessage}\n${errorDetails}`);
            
            // Return false to allow default error handling
            return false;
        };

        // Try to intercept errors by overriding the browser's internal console methods
        this.interceptBrowserConsoleMethods();
    }

    // Intercept browser's internal console methods to capture detailed errors
    interceptBrowserConsoleMethods() {
        // Only intercept on mobile devices
        if (!this.isMobileDevice) {
            return;
        }
        
        // Store original console methods
        const originalConsole = {
            error: console.error,
            warn: console.warn,
            log: console.log,
            info: console.info
        };

        // Override console.error to capture detailed error information
        console.error = (...args) => {
            // Call original method first
            originalConsole.error.apply(console, args);
            
            // Process the error message with enhanced detail extraction
            let errorText = '';
            if (args.length > 0) {
                if (args[0] instanceof Error) {
                    const error = args[0];
                    errorText = `${error.name}: ${error.message}`;
                    if (error.stack) {
                        errorText += `\nStack Trace:\n${error.stack}`;
                    }
                } else {
                    // Try to extract error information from string messages
                    const message = args.join(' ');
                    if (message.includes('TypeError:') || message.includes('ReferenceError:') || message.includes('SyntaxError:')) {
                        errorText = message;
                        // Try to get stack trace from the current call stack
                        const stack = new Error().stack;
                        if (stack) {
                            errorText += `\nStack Trace:\n${stack}`;
                        }
                    } else {
                        errorText = message;
                    }
                }
            }
            
            this.addToMobileConsole('error', errorText);
        };

        // Override console.warn to capture warnings
        console.warn = (...args) => {
            originalConsole.warn.apply(console, args);
            
            // Process warning message with enhanced detail extraction
            let warningText = args.join(' ');
            
            // If the warning contains error information, try to get stack trace
            if (warningText.includes('TypeError:') || warningText.includes('ReferenceError:') || 
                warningText.includes('SyntaxError:') || warningText.includes('stopProcessVideo')) {
                // Try to get stack trace from the current call stack
                const stack = new Error().stack;
                if (stack) {
                    warningText += `\nStack Trace:\n${stack}`;
                }
            }
            
            this.addToMobileConsole('warn', warningText);
        };

        // Override console.log to capture all log messages
        console.log = (...args) => {
            originalConsole.log.apply(console, args);
            this.addToMobileConsole('log', args.join(' '));
        };

        // Override console.info to capture info messages
        console.info = (...args) => {
            originalConsole.info.apply(console, args);
            this.addToMobileConsole('info', args.join(' '));
        };
    }

    // Comprehensive console method interception
    interceptAllConsoleMethods() {
        // Only intercept console methods on mobile devices
        if (!this.isMobileDevice) {
            console.log('🖥️ Desktop detected - preserving original console behavior for debugging');
            return;
        }
        
        console.log('📱 Mobile detected - intercepting console methods for mobile console');
        
        const methods = ['log', 'warn', 'error', 'info', 'debug', 'trace', 'table', 'group', 'groupEnd', 'time', 'timeEnd'];
        
        methods.forEach(method => {
            if (console[method] && typeof console[method] === 'function') {
                const originalMethod = console[method];
                console[method] = (...args) => {
                    // Call original method first
                    originalMethod.apply(console, args);
                    
                    // Process and capture the message
                    this.processConsoleMessage(method, args);
                };
            }
        });
    }

    // Process console messages with enhanced error handling
    processConsoleMessage(method, args) {
        let message = '';
        let messageType = method;
        
        // Handle different types of console messages
        if (method === 'error') {
            // Enhanced error processing
            if (args.length > 0 && args[0] instanceof Error) {
                const error = args[0];
                message = `${error.name}: ${error.message}`;
                if (error.stack) {
                    message += `\nStack Trace:\n${error.stack}`;
                }
            } else {
                message = args.join(' ');
            }
        } else if (method === 'table') {
            // Handle console.table
            message = `Table: ${args[0] ? args[0].toString() : 'undefined'}`;
        } else if (method === 'group' || method === 'groupEnd') {
            // Handle console.group/groupEnd
            message = args.length > 0 ? args.join(' ') : method;
        } else if (method === 'time' || method === 'timeEnd') {
            // Handle console.time/timeEnd
            message = `${method}: ${args.length > 0 ? args[0] : 'default'}`;
        } else {
            // Standard message processing
            message = args.join(' ');
        }
        
        // Add to mobile console
        this.addToMobileConsole(messageType, message);
    }



    // Add message to mobile console
    addToMobileConsole(type, message) {
        const consoleOutput = document.getElementById('console-output');
        if (!consoleOutput) return;
        
        // Filter out generic "Script error" messages when we have detailed error information
        if (type === 'error' && this.shouldFilterGenericError(message)) {
            return; // Skip adding this generic error message
        }
        
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = document.createElement('div');
        logEntry.className = `console-${type}`;
        
        // Handle multi-line messages (like stack traces) with proper formatting
        const lines = message.split('\n');
        if (lines.length > 1) {
            // First line with timestamp
            const firstLine = document.createElement('div');
            firstLine.textContent = `[${timestamp}] ${lines[0]}`;
            logEntry.appendChild(firstLine);
            
            // Subsequent lines without timestamp, indented
            for (let i = 1; i < lines.length; i++) {
                const line = document.createElement('div');
                line.textContent = `    ${lines[i]}`;
                line.style.marginLeft = '10px';
                logEntry.appendChild(line);
            }
        } else {
            logEntry.textContent = `[${timestamp}] ${message}`;
        }
        
        consoleOutput.appendChild(logEntry);
        
        // Auto-scroll to bottom
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
        
        // Limit console entries to prevent memory issues
        const entries = consoleOutput.children;
        if (entries.length > 100) {
            consoleOutput.removeChild(entries[0]);
        }
    }

    // Check if we should filter out a generic error message
    shouldFilterGenericError(message) {
        // Check if this is a generic "Script error" message
        if (message.includes('Script error') && message.includes('File: unknown')) {
            // Check if we recently logged a detailed error that might be related
            const consoleOutput = document.getElementById('console-output');
            if (!consoleOutput) return false;
            
            const recentEntries = Array.from(consoleOutput.children).slice(-10); // Check last 10 entries
            for (const entry of recentEntries) {
                const entryText = entry.textContent;
                // If we have a detailed error message in the recent entries, filter out the generic one
                if (entryText.includes('TypeError:') || entryText.includes('ReferenceError:') || 
                    entryText.includes('SyntaxError:') || entryText.includes('stopProcessVideo')) {
                    return true; // Filter out the generic error
                }
            }
        }
        return false; // Don't filter
    }

    // Toggle debug console
    toggleDebugConsole() {
        const console = document.getElementById('debug-console');
        const arrow = document.getElementById('debug-arrow');
        const toggle = document.getElementById('debug-toggle');

        this.debugConsoleOpen = !this.debugConsoleOpen;
        
        if (this.debugConsoleOpen) {
            console.classList.remove('hidden');
            arrow.classList.add('expanded');
            toggle.style.width = '100%';
        } else {
            console.classList.add('hidden');
            arrow.classList.remove('expanded');
            toggle.style.width = '170px';
        }
    }

    // Update debug info with current app state
    updateDebugInfo() {
        const debugInfo = document.getElementById('debug-info');
        if (!debugInfo) return;
        
        const currentState = window.stateManager ? window.stateManager.getCurrentState() : 'unknown';
        debugInfo.textContent = `v${this.version} - ${currentState}`;
    }

    // Copy console output to clipboard
    copyConsoleToClipboard() {
        const consoleOutput = document.getElementById('console-output');
        if (!consoleOutput) return;
        
        // Collect all console entries
        const entries = Array.from(consoleOutput.children);
        const consoleText = entries.map(entry => entry.textContent).join('\n');
        
        // Add header with app info
        const currentState = window.stateManager ? window.stateManager.getCurrentState() : 'unknown';
        const timestamp = new Date().toLocaleString();
        const fullText = `AR Learning App Console Output\nVersion: ${this.version}\nState: ${currentState}\nTimestamp: ${timestamp}\n\n${consoleText}`;
        
        // Copy to clipboard
        navigator.clipboard.writeText(fullText).then(() => {
            this.showCopyFeedback();
        }).catch(err => {
            console.error('Failed to copy to clipboard:', err);
            this.fallbackCopy(fullText);
        });
    }

    // Show visual feedback for successful copy
    showCopyFeedback() {
        const copyBtn = document.getElementById('copy-console-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ Copied!';
        copyBtn.style.background = 'var(--success-color)';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = 'var(--primary-color)';
        }, 2000);
    }

    // Fallback copy method for older browsers
    fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            this.showCopyFeedback();
        } catch (fallbackErr) {
            console.error('Fallback copy failed:', fallbackErr);
        }
        document.body.removeChild(textArea);
    }

    // Hook into state changes to update debug info
    hookIntoStateChanges() {
        if (window.stateManager) {
            const originalChangeState = window.stateManager.changeState.bind(window.stateManager);
            window.stateManager.changeState = (newState) => {
                const result = originalChangeState(newState);
                // Update debug info after state change
                setTimeout(() => this.updateDebugInfo(), 10);
                return result;
            };
        }
    }

    // Set app version (called by main app)
    setVersion(version) {
        this.version = version;
        this.updateDebugInfo();
    }

    // Utility methods for device detection
    getDeviceType() {
        return this.deviceType || 'unknown';
    }

    isPhone() {
        return this.deviceType === 'phone';
    }

    isTablet() {
        return this.isTablet || false;
    }

    isDesktop() {
        return this.isDesktop || false;
    }

    isMobileOrTablet() {
        return this.isMobileDevice || this.isTablet;
    }

    // Get device capabilities for AR/feature detection
    getDeviceCapabilities() {
        return {
            deviceType: this.deviceType || 'unknown',
            isPhone: this.deviceType === 'phone',
            isTablet: this.isTablet || false,
            isDesktop: this.isDesktop || false,
            hasTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            isPortrait: window.innerHeight > window.innerWidth,
            userAgent: navigator.userAgent
        };
    }
}

// Global functions for HTML onclick handlers
let mobileConsole;

function toggleDebugConsole() {
    if (mobileConsole) {
        mobileConsole.toggleDebugConsole();
    }
}

function copyConsoleToClipboard() {
    if (mobileConsole) {
        mobileConsole.copyConsoleToClipboard();
    }
}

// Initialize mobile console when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    mobileConsole = new MobileConsole();
    
    // Make mobileConsole globally accessible
    window.mobileConsole = mobileConsole;
});
