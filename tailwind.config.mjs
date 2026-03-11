/** 
 * Holy Rollers Painting Co. - Tailwind Configuration
 * Design System based on original site design tokens
 * 
 * Colors:
 * - White: rgb(255, 255, 255)
 * - Primary Blue: rgb(17, 109, 255)
 * - Black: rgb(0, 0, 0)
 * - Primary Dark: rgb(0, 0, 238)
 * - Accent: rgb(177, 182, 211)
 * - Secondary: rgb(84, 89, 124)
 * - Light: rgb(187, 196, 221)
 * - Dark: rgb(32, 36, 47)
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  
  // Enable class-based dark mode
  darkMode: 'class',
  
  theme: {
    // Extend the default theme
    extend: {
      /* ============================================
         COLOR PALETTE
         Based on original site design tokens
         ============================================ */
      colors: {
        // Primary Colors
        'white': 'rgb(255, 255, 255)',
        'black': 'rgb(0, 0, 0)',
        'primary': 'rgb(17, 109, 255)',
        'primary-dark': 'rgb(0, 0, 238)',
        
        // Secondary Colors
        'accent': 'rgb(177, 182, 211)',
        'secondary': 'rgb(84, 89, 124)',
        'light': 'rgb(187, 196, 221)',
        'dark': 'rgb(32, 36, 47)',
        
        // Transparent Variants
        'light-transparent': 'rgba(187, 196, 221, 0.9)',
        'dark-transparent': 'rgba(32, 36, 47, 0)',
        
        // Semantic Color Aliases
        'primary-50': 'rgba(17, 109, 255, 0.05)',
        'primary-100': 'rgba(17, 109, 255, 0.1)',
        'primary-200': 'rgba(17, 109, 255, 0.2)',
        'primary-300': 'rgba(17, 109, 255, 0.3)',
        'primary-400': 'rgba(17, 109, 255, 0.4)',
        'primary-500': 'rgba(17, 109, 255, 0.5)',
        'primary-600': 'rgba(17, 109, 255, 0.6)',
        'primary-700': 'rgba(17, 109, 255, 0.7)',
        'primary-800': 'rgba(17, 109, 255, 0.8)',
        'primary-900': 'rgba(17, 109, 255, 0.9)',
        
        // Dark Mode Variants
        'dark-50': 'rgba(32, 36, 47, 0.05)',
        'dark-100': 'rgba(32, 36, 47, 0.1)',
        'dark-200': 'rgba(32, 36, 47, 0.2)',
        'dark-300': 'rgba(32, 36, 47, 0.3)',
        'dark-400': 'rgba(32, 36, 47, 0.4)',
        'dark-500': 'rgba(32, 36, 47, 0.5)',
        'dark-600': 'rgba(32, 36, 47, 0.6)',
        'dark-700': 'rgba(32, 36, 47, 0.7)',
        'dark-800': 'rgba(32, 36, 47, 0.8)',
        'dark-900': 'rgba(32, 36, 47, 0.9)',
      },

      /* ============================================
         TYPOGRAPHY
         Font families from design tokens
         ============================================ */
      fontFamily: {
        // Primary Sans (from original: Helvetica, Arial, Japanese fonts)
        'sans': [
          'Helvetica',
          'Arial',
          'メイリオ',
          'meiryo',
          'ヒラギノ角ゴ pro w3',
          'hiragino kaku gothic pro',
          'sans-serif'
        ],
        
        // Brand Font - Montserrat
        'montserrat': [
          'Montserrat',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        
        // Roboto family
        'roboto': [
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        'roboto-thin': [
          'Roboto Thin',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        'roboto-light': [
          'Roboto Light',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        'roboto-medium': [
          'Roboto Medium',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        'roboto-bold': [
          'Roboto Bold',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        'roboto-black': [
          'Roboto Black',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        
        // Fallback
        'arial': [
          'Arial',
          'Helvetica',
          'sans-serif'
        ],
      },

      /* ============================================
         FONT SIZES
         Responsive typography scale
         ============================================ */
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },

      /* ============================================
         SPACING
         Custom spacing scale
         ============================================ */
      spacing: {
        '0': '0',
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '7': '1.75rem',    // 28px
        '8': '2rem',       // 32px
        '9': '2.25rem',    // 36px
        '10': '2.5rem',    // 40px
        '11': '2.75rem',   // 44px
        '12': '3rem',      // 48px
        '14': '3.5rem',    // 56px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '28': '7rem',      // 112px
        '32': '8rem',      // 128px
        '36': '9rem',      // 144px
        '40': '10rem',     // 160px
        '44': '11rem',     // 176px
        '48': '12rem',     // 192px
        '52': '13rem',     // 208px
        '56': '14rem',     // 224px
        '60': '15rem',     // 240px
        '64': '16rem',     // 256px
        '72': '18rem',     // 288px
        '80': '20rem',     // 320px
        '96': '24rem',     // 384px
      },

      /* ============================================
         BORDER RADIUS
         ============================================ */
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },

      /* ============================================
         SHADOWS
         Custom shadow utilities
         ============================================ */
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(32, 36, 47, 0.05)',
        'DEFAULT': '0 4px 6px -1px rgba(32, 36, 47, 0.1), 0 2px 4px -1px rgba(32, 36, 47, 0.06)',
        'md': '0 4px 6px -1px rgba(32, 36, 47, 0.1), 0 2px 4px -1px rgba(32, 36, 47, 0.06)',
        'lg': '0 10px 15px -3px rgba(32, 36, 47, 0.1), 0 4px 6px -2px rgba(32, 36, 47, 0.05)',
        'xl': '0 20px 25px -5px rgba(32, 36, 47, 0.1), 0 10px 10px -5px rgba(32, 36, 47, 0.04)',
        '2xl': '0 25px 50px -12px rgba(32, 36, 47, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(32, 36, 47, 0.06)',
        
        // Custom Brand Shadows
        'primary': '0 4px 14px 0 rgba(17, 109, 255, 0.39)',
        'primary-lg': '0 10px 25px 0 rgba(17, 109, 255, 0.4)',
        'dark': '0 4px 14px 0 rgba(32, 36, 47, 0.3)',
        'glow': '0 0 20px rgba(17, 109, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(17, 109, 255, 0.6)',
      },

      /* ============================================
         BACKGROUND IMAGES
         Gradient and pattern utilities
         ============================================ */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, rgb(17, 109, 255) 0%, rgb(0, 0, 238) 100%)',
        'gradient-dark': 'linear-gradient(to bottom, rgba(32, 36, 47, 0.9), rgba(32, 36, 47, 0))',
        'gradient-overlay': 'linear-gradient(to right, rgba(32, 36, 47, 0.9), rgba(32, 36, 47, 0.7))',
        'gradient-overlay-top': 'linear-gradient(to top, rgba(32, 36, 47, 0.9), rgba(32, 36, 47, 0))',
        'gradient-overlay-bottom': 'linear-gradient(to bottom, rgba(32, 36, 47, 0.9), rgba(32, 36, 47, 0))',
        'gradient-overlay-left': 'linear-gradient(to left, rgba(32, 36, 47, 0.9), rgba(32, 36, 47, 0))',
        'gradient-overlay-right': 'linear-gradient(to right, rgba(32, 36, 47, 0.9), rgba(32, 36, 47, 0))',
        
        // Pattern backgrounds
        'pattern-dots': 'radial-gradient(circle, rgb(177, 182, 211) 1px, transparent 1px)',
        'pattern-grid': 'linear-gradient(rgb(177, 182, 211) 1px, transparent 1px), linear-gradient(90deg, rgb(177, 182, 211) 1px, transparent 1px)',
      },

      backgroundSize: {
        'pattern-sm': '20px 20px',
        'pattern-md': '30px 30px',
        'pattern-lg': '40px 40px',
        'grid-sm': '20px 20px',
        'grid-md': '30px 30px',
      },

      /* ============================================
         ANIMATIONS
         Custom keyframe animations
         ============================================ */
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'slide-in-up': 'slideInUp 0.5s ease-out forwards',
        'slide-in-down': 'slideInDown 0.5s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 1s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'scale-out': 'scaleOut 0.3s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'grow': 'grow 0.5s ease-out forwards',
        'shrink': 'shrink 0.5s ease-out forwards',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        grow: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shrink: {
          '0%': { transform: 'scale(1.2)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      /* ============================================
         TRANSITION DURATION
         ============================================ */
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },

      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'bounce-out': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        'bounce-in-out': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },

      /* ============================================
         Z-INDEX SCALE
         ============================================ */
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      },

      /* ============================================
         RESPONSIVE BREAKPOINTS
         Custom breakpoints for the project
         ============================================ */
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        
        // Custom project-specific breakpoints
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        
        // Print media
        'print': 'print',
      },

      /* ============================================
         ASPECT RATIOS
         ============================================ */
      aspectRatio: {
        'auto': 'auto',
        'square': '1 / 1',
        'video': '16 / 9',
        'portrait': '3 / 4',
        'landscape': '4 / 3',
        'cinema': '21 / 9',
      },

      /* ============================================
         MAX WIDTH
         Container max-widths
         ============================================ */
      maxWidth: {
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        'full': '100%',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
      },

      /* ============================================
         MIN HEIGHT
         ============================================ */
      minHeight: {
        '0': '0',
        'auto': 'auto',
        'px': '1px',
        '0.5': '0.125rem',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        'screen': '100vh',
        'screen-sm': '100vh',
        'screen-md': '100vh',
        'screen-lg': '100vh',
        'screen-xl': '100vh',
        'screen-2xl': '100vh',
      },

      /* ============================================
         LETTER SPACING
         ============================================ */
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },

      /* ============================================
         LINE HEIGHT
         ============================================ */
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },

      /* ============================================
         CUSTOM UTILITIES
         Project-specific utilities
         ============================================ */
      extend: {
        // Will be merged into the config
      },
    },
  },

  /* ============================================
     TAILWIND PLUGINS
     ============================================ */
  plugins: [
    // Add any Tailwind plugins here
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
