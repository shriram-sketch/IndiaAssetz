# File Uploader App

A simple React.js file uploader application that supports multiple file uploads with status tracking and toast notifications.

## Features

- ✅ Upload multiple files at once
- ✅ Independent file upload handling (parallel uploads)
- ✅ Real-time upload status (Uploading, Success, Failed)
- ✅ Toast notifications for success and error messages
- ✅ Clean and responsive UI
- ✅ Simple code structure

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Hot Toast

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── FileList.jsx          # Displays list of files with status
│   │   └── FileUploadArea.jsx    # File selection area
│   ├── utils/
│   │   └── uploadFile.js         # Mock upload function
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html
├── package.json
└── README.md
```

## How It Works

1. **File Selection**: Users can click the upload area to select one or more files
2. **Upload Simulation**: Each file is uploaded independently using a mock API function
3. **Status Tracking**: Each file shows its current status (uploading, success, or failed)
4. **Notifications**: Toast messages appear for successful uploads and errors
5. **Error Handling**: Failed uploads display specific error messages

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy" - your app will be live in seconds!

**Live Demo:** Your app will be available at `https://your-project-name.vercel.app`

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Live Demo:** Your app will be available at `https://your-project-name.netlify.app`

### Quick Deploy Buttons

You can also use these quick deploy options:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/file-uploader-app)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/file-uploader-app)

## Notes

- The upload function is simulated (mock) - it doesn't actually upload files to a server
- Upload delay is simulated based on file size
- There's a 10% chance of random upload failures for testing error handling
- All uploads happen in parallel for better performance
- Remove button allows users to remove files from the list
