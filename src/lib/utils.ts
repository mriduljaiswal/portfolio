import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Re-export performance utilities for easy access
export {
  getDeviceCapabilities,
  getAdaptiveSettings,
  PerformanceMonitor,
  performanceMonitor,
  deviceCapabilities,
  adaptiveSettings,
  throttle,
  debounce
} from './performance'
