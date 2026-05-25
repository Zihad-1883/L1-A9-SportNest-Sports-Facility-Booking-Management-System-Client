# SportNest - Sports Facility Booking Management System (Client)

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel)

## Purpose
SportNest is a full-stack sports facility booking platform that allows users to discover and book premium sports facilities such as football turfs, badminton courts, swimming pools, and tennis courts. The system provides a seamless booking experience for athletes and sports enthusiasts.

## Live URL
🌐 [https://l1-a9-sport-nest-sports-facility-bo-lemon.vercel.app](https://l1-a9-sport-nest-sports-facility-bo-lemon.vercel.app)

## Features
- Browse and discover sports facilities with search and filter
- Filter facilities by sport type (Football, Badminton, Swimming, Tennis, Gym, Cricket, Basketball, Squash)
- User authentication with email/password and Google login (Better Auth)
- Book facilities by selecting date, time slot, and hours
- View and cancel bookings from My Bookings page
- Add new sports facilities with image, location, pricing and time slots
- Manage your own facilities with edit and delete options
- JWT-based private route protection
- Responsive design for mobile, tablet and desktop
- Scroll animations with Framer Motion
- Custom 404 Not Found page
- Loading spinner for data fetching states

## NPM Packages Used
| Package | Purpose |
|---------|---------|
| next | React framework with App Router |
| react | UI library |
| better-auth | Authentication with email and Google OAuth |
| @heroui/react | UI component library |
| daisyui | Tailwind component library |
| tailwindcss | Utility-first CSS framework |
| framer-motion | Scroll and page animations |
| lucide-react | Icon library |
| react-icons | Additional icons |
| react-hot-toast | Toast notifications |
| react-toastify | Toast notifications |
| axios | HTTP client |
| next-themes | Theme toggling |

## How to Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/Zihad-1883/L1-A9-SportNest-Sports-Facility-Booking-Management-System-Client.git
cd L1-A9-SportNest-Sports-Facility-Booking-Management-System-Client
```

**2. Install dependencies**
```bash
npm install
```

**3. Create a `.env` file in the root directory**
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_secret_key
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**4. Start the development server**
```bash
npm run dev
```

**5. The app will run at**
```
http://localhost:3000
```
