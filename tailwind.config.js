/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // Tailwind 4.0'da array desteklenmiyor, sadece "class" kullanılıyor.
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                background: "hsl(var(--background, 220, 10%, 10%))",
                foreground: "hsl(var(--foreground, 220, 10%, 90%))",
                card: {
                    DEFAULT: "hsl(var(--card, 220, 10%, 15%))",
                    foreground: "hsl(var(--card-foreground, 220, 10%, 95%))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover, 220, 10%, 12%))",
                    foreground: "hsl(var(--popover-foreground, 220, 10%, 90%))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary, 220, 75%, 50%))",
                    foreground: "hsl(var(--primary-foreground, 220, 10%, 95%))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary, 220, 10%, 30%))",
                    foreground: "hsl(var(--secondary-foreground, 220, 10%, 80%))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted, 220, 10%, 40%))",
                    foreground: "hsl(var(--muted-foreground, 220, 10%, 70%))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent, 220, 75%, 45%))",
                    foreground: "hsl(var(--accent-foreground, 220, 10%, 95%))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive, 0, 75%, 50%))",
                    foreground: "hsl(var(--destructive-foreground, 0, 10%, 95%))",
                },
                border: "hsl(var(--border, 220, 10%, 50%))",
                input: "hsl(var(--input, 220, 10%, 30%))",
                ring: "hsl(var(--ring, 220, 75%, 50%))",
                chart: {
                    "1": "hsl(var(--chart-1, 200, 75%, 50%))",
                    "2": "hsl(var(--chart-2, 160, 75%, 50%))",
                    "3": "hsl(var(--chart-3, 120, 75%, 50%))",
                    "4": "hsl(var(--chart-4, 80, 75%, 50%))",
                    "5": "hsl(var(--chart-5, 40, 75%, 50%))",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background, 220, 10%, 12%))",
                    foreground: "hsl(var(--sidebar-foreground, 220, 10%, 90%))",
                    primary: "hsl(var(--sidebar-primary, 220, 75%, 50%))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground, 220, 10%, 95%))",
                    accent: "hsl(var(--sidebar-accent, 220, 75%, 45%))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground, 220, 10%, 95%))",
                    border: "hsl(var(--sidebar-border, 220, 10%, 50%))",
                    ring: "hsl(var(--sidebar-ring, 220, 75%, 50%))",
                },
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        import("tailwindcss-animate"),
        import("@tailwindcss/typography"),
    ],
};
