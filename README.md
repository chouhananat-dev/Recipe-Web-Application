# Recipe Web Application

A modern, responsive web application for discovering and sharing recipes, built with React.js and React Router.

## Overview

This recipe web application provides an intuitive interface for users to explore recipes, learn more about cooking, and get in touch with the community. The application features a multi-page layout with smooth navigation and responsive design.

## Features

- **Home Page**: Browse recipes with a clean, user-friendly interface
- **Recipe Details**: View detailed information about individual recipes
- **About Page**: Learn more about the application and its mission
- **Contact Page**: Get in touch with the development team
- **Responsive Navigation**: Easy navigation between all sections
- **Accessibility Support**: Speech kit integration for enhanced accessibility

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Routing**: React Router DOM 7.7.0
- **Testing**: React Testing Library
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Accessibility**: React Speech Kit 3.0.1

## Project Structure

```
recipe-project/
├── README.md           # This file
├── myapp/
│   ├── public/         # Static files
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/            # Source code
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── Mainpage.js
│   │   ├── Mainpagge.css
│   │   ├── Description.js
│   │   ├── Description.css
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Navigationbar.js
│   │   ├── Navigationbar.css
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── setupTests.js
│   │   └── reportWebVitals.js
│   ├── package.json    # Dependencies
│   └── README.md       # App-specific info (see myapp folder)
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Navigate to the `myapp` directory:
   ```bash
   cd myapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload when you make changes, and any lint errors will appear in the console.

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

### Production Build
```bash
npm run build
```
Builds the app for production in the `build` folder. The build is optimized for best performance with minified code and hashed filenames.

### Eject Configuration
```bash
npm run eject
```
**Warning:** This is a one-way operation. Once ejected, you cannot revert. This exposes all webpack configuration and dependencies.

## Component Structure

- **App.js** - Main application component with routing configuration
- **Mainpage.js** - Home/landing page component
- **Description.js** - Recipe details page component
- **About.js** - About page component
- **Contact.js** - Contact page component
- **Navigationbar.js** - Navigation component used across pages

## Development Workflow

1. Navigate to the myapp directory:
   ```bash
   cd myapp
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. The app will open in your default browser with hot reloading enabled

4. Make changes to component files and see them reflected immediately

## Building for Production

Create an optimized production build:

```bash
cd myapp
npm run build
```

The build folder will contain the production-ready files ready for deployment.

## Deployment Options

The built application can be deployed to any static hosting service:
- **Vercel** - Seamless deployment from GitHub
- **Netlify** - Easy drag-and-drop or continuous deployment
- **GitHub Pages** - Free hosting for static sites
- **AWS S3** - Scalable cloud storage with CDN

## Dependencies Overview

- **react** (19.1.0) - JavaScript library for building user interfaces
- **react-dom** (19.1.0) - React package for working with the DOM
- **react-router-dom** (7.7.0) - Routing library for navigation between pages
- **react-speech-kit** (3.0.1) - Speech synthesis and recognition capabilities
- **react-scripts** (5.0.1) - Create React App build scripts
- **@testing-library/react** (16.3.0) - Testing utilities for React components

## Browser Support

This application works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Troubleshooting

- **Build fails**: Make sure all dependencies are installed with `npm install`
- **Port 3000 already in use**: The development server will prompt to use a different port
- **Module not found errors**: Try deleting `node_modules` and running `npm install` again
- **Lint errors in console**: Check the console for specific error messages and fix accordingly

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is open source and available under the MIT License.

## Learn More

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Create React App Documentation](https://create-react-app.dev)
