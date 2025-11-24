# Romantic Valentine's Day Interactive Website

A beautifully designed interactive website with romantic animations and playful button interactions.

## Features

- Romantic animations including floating hearts, rose petals, cupids, and love letters
- Interactive "No" button that shrinks for the first 2 clicks and then moves to random positions
- Emotional journey through 4 pages with heartfelt messages
- Optimized for both high-end and low-end devices
- Romantic styling with Valentine's Day color scheme

## Pages

1. "Are you mad at me? 😢"
2. "Are you sure? I can get you chocolates 🍫"
3. "Sooooorryyy forgive me 🙏 Unlimited body massages? 💆‍♀️"
4. "I loveee youuu toooo ❤️💖"

## How It Works

- Click "Yes" to progress through the emotional journey
- Click "No" on the first page to skip directly to the final page
- Click "No" on the second page to skip directly to the final page
- Click "Yes" on the third page to go to the final page
- Click "No" on the third page to experience the interactive button that shrinks for the first 2 clicks and then moves to random positions within the dialog box

## Technical Details

- Pure HTML, CSS, and JavaScript implementation
- Responsive design that works on all device sizes
- Performance optimized for low-end devices
- No external dependencies

## Deployment

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/anirudhojha125/my-one.git
   ```
2. Navigate to the project directory:
   ```
   cd my-one
   ```
3. Start a simple HTTP server:
   ```
   python -m http.server 8000
   ```
4. Open your browser and go to http://localhost:8000

### Deploy to Render

1. Fork this repository to your GitHub account (optional)
2. Log in to your Render account at https://render.com
3. Click "New" and select "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - Name: valentines-interactive-website
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance Type: Free
6. Click "Create Web Service"
7. Render will automatically deploy your website

Your website will be available at `https://valentines-interactive-website-xxx.onrender.com` (the URL will be provided by Render after deployment).