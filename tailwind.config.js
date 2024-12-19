/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Outfit', 'sans-serif'],
  		},
  		keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out-to-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 }
        },
        "fade-out-up": {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-20px)", opacity: 0 }
        },
        'slide-out-fade': {
          '0%': { 
            transform: 'translateX(0) translateY(0)',
            opacity: '1'
          },
          '50%': {
            transform: 'translateX(-20px) translateY(-10px)',
            opacity: '0.5'
          },
          '100%': { 
            transform: 'translateX(-40px) translateY(-20px)',
            opacity: '0'
          }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.9',
            transform: 'scale(1.02)'
          }
        }
      },
      animation: {
		shimmer: 'shimmer 2s linear infinite',
        float: 'float 3s ease-in-out infinite',
        "slide-in-right": "slide-in-from-right 0.5s ease-out",
        "slide-out-right": "slide-out-to-right 0.5s ease-out",
        "slide-in-left": "slide-in-from-left 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        'slide-out-fade': 'slide-out-fade 0.7s ease-in-out forwards',
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite'
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	},
  	scale: {
  		'102': '1.02',
  	},
  	backgroundImage: {
  		'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
