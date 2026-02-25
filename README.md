## Truck Rental Web

A single-page React application for browsing truck models and creating rental bookings.

### Tech stack

- **Frontend**: React 18 (Create React App)
- **Routing**: `react-router-dom` v6
- **Styling**: SCSS compiled to `dist/styles.css`
- **Icons**: `react-icons`

### Main features

- **Landing / Home page** with hero section and key marketing content.
- **Truck catalogue** (`Models` page) listing available truck types.
- **Booking flow**:
  - Choose pickup/drop-off locations, dates, and times.
  - Select a truck model.
  - Enter customer details.
  - See bookings summarized in a table on the home page.
- **Static pages** for About, Testimonials, Team, and Contact.
- **Global navigation bar** with client-side routing between pages.
- **Animated loader** shown when navigating between routes.

### Project structure (high level)

- `src/index.js` – React entry point, sets up `BrowserRouter`.
- `src/App.js` – Top-level layout and route definitions.
- `src/Pages/` – Route-level pages (`Home`, `About`, `Models`, `TestimonialsPage`, `Team`, `Contact`).
- `src/components/` – Reusable UI and domain components (navbar, footer, booking form, truck picker, FAQ, testimonials, loader, etc.).
- `src/styles/` – SCSS partials grouped by section (navbar, booking, models, about, contact, team, etc.) and global styles.

### Running the project

```bash
npm install
npm start
```

This starts the dev server (usually at `http://localhost:3000/`) with hot reloading.

### Notes and future improvements

- Currently all data (trucks, bookings) is stored in memory on the client.
- A future backend could store bookings persistently and provide real availability/pricing.
- The booking form and loader are good starting points if you want to connect real APIs later.

