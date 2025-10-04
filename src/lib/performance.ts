// Performance monitoring and optimization utilities

export interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  deviceCapabilities: DeviceCapabilities;
}

export interface DeviceCapabilities {
  supportsWebGL: boolean;
  quality: 'low' | 'medium' | 'high';
  maxTextureSize: number;
  hardwareConcurrency: number;
  deviceMemory?: number;
  connectionSpeed?: string;
}

// Device capability detection
export const getDeviceCapabilities = (): DeviceCapabilities => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  
  if (!gl) {
    return {
      supportsWebGL: false,
      quality: 'low',
      maxTextureSize: 0,
      hardwareConcurrency: navigator.hardwareConcurrency || 2
    };
  }
  
  const renderer = gl.getParameter(gl.RENDERER) || '';
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE) || 0;
  
  // Detect performance level based on GPU and device characteristics
  const isHighPerformanceGPU = /nvidia|amd|radeon|geforce|quadro/i.test(renderer);
  const isIntegratedGPU = /intel|integrated/i.test(renderer);
  const isMobile = /mobile|android|iphone|ipad/i.test(navigator.userAgent);
  const hasHighConcurrency = (navigator.hardwareConcurrency || 2) >= 8;
  const hasLargeTexture = maxTextureSize >= 4096;
  
  // Determine quality level
  let quality: 'low' | 'medium' | 'high' = 'medium';
  
  if (isMobile || maxTextureSize < 2048) {
    quality = 'low';
  } else if (isHighPerformanceGPU && hasHighConcurrency && hasLargeTexture) {
    quality = 'high';
  } else if (isIntegratedGPU || !hasHighConcurrency) {
    quality = 'low';
  }
  
  return {
    supportsWebGL: true,
    quality,
    maxTextureSize,
    hardwareConcurrency: navigator.hardwareConcurrency || 2,
    // @ts-ignore - These are experimental APIs
    deviceMemory: (navigator as any).deviceMemory,
    // @ts-ignore
    connectionSpeed: (navigator as any).connection?.effectiveType
  };
};

// Performance monitoring class
export class PerformanceMonitor {
  private frameCount = 0;
  private lastFrameTime = performance.now();
  private fps = 60;
  private renderTimes: number[] = [];
  
  // FPS calculation
  public updateFPS(): number {
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastFrameTime;
    
    if (deltaTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / deltaTime);
      this.frameCount = 0;
      this.lastFrameTime = currentTime;
    } else {
      this.frameCount++;
    }
    
    return this.fps;
  }
  
  // Render time tracking
  public trackRenderTime(renderTime: number): void {
    this.renderTimes.push(renderTime);
    if (this.renderTimes.length > 60) {
      this.renderTimes.shift();
    }
  }
  
  // Get average render time
  public getAverageRenderTime(): number {
    if (this.renderTimes.length === 0) return 0;
    return this.renderTimes.reduce((sum, time) => sum + time, 0) / this.renderTimes.length;
  }
  
  // Get memory usage (if available)
  public getMemoryUsage(): number {
    // @ts-ignore - This is an experimental API
    if ('memory' in performance) {
      // @ts-ignore
      return (performance.memory.usedJSHeapSize / performance.memory.totalJSHeapSize) * 100;
    }
    return 0;
  }
  
  // Get comprehensive metrics
  public getMetrics(): PerformanceMetrics {
    return {
      fps: this.fps,
      memoryUsage: this.getMemoryUsage(),
      renderTime: this.getAverageRenderTime(),
      deviceCapabilities: getDeviceCapabilities()
    };
  }
  
  // Performance recommendations
  public getOptimizationRecommendations(): string[] {
    const metrics = this.getMetrics();
    const recommendations: string[] = [];
    
    if (metrics.fps < 30) {
      recommendations.push('Consider reducing animation quality or complexity');
    }
    
    if (metrics.memoryUsage > 80) {
      recommendations.push('High memory usage detected, consider optimizing components');
    }
    
    if (metrics.renderTime > 16) {
      recommendations.push('Render time is high, consider GPU acceleration optimizations');
    }
    
    if (metrics.deviceCapabilities.quality === 'low') {
      recommendations.push('Device has limited capabilities, adaptive quality recommended');
    }
    
    return recommendations;
  }
}

// Adaptive quality settings based on device capabilities
export const getAdaptiveSettings = (capabilities: DeviceCapabilities) => {
  const baseSettings = {
    resolutionScale: 1,
    targetFPS: 60,
    enableShadows: true,
    enableParticles: true,
    enableBlur: true,
    enableGlow: true
  };
  
  switch (capabilities.quality) {
    case 'low':
      return {
        ...baseSettings,
        resolutionScale: 0.75,
        targetFPS: 30,
        enableShadows: false,
        enableParticles: false,
        enableBlur: false,
        enableGlow: false
      };
      
    case 'medium':
      return {
        ...baseSettings,
        resolutionScale: 0.9,
        targetFPS: 60,
        enableShadows: true,
        enableParticles: true,
        enableBlur: false,
        enableGlow: true
      };
      
    case 'high':
    default:
      return baseSettings;
  }
};

// Throttling utility for performance-sensitive operations
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Debouncing utility for resize and scroll events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: number;
  
  return function(this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func.apply(this, args), delay);
  };
};

// Global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

// Export device capabilities for immediate use
export const deviceCapabilities = getDeviceCapabilities();
export const adaptiveSettings = getAdaptiveSettings(deviceCapabilities);