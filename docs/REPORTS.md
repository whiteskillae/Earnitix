# 📊 System Architecture & Security Report

## 1. Modular System Architecture
The platform is designed as an API-first application to ensure future scalability (e.g., migrating to a mobile app).

*   **Public Layer (Next.js):** Optimized for SSG (Static Site Generation) to ensure maximum SEO performance.
*   **Authentication Layer:** JWT-based with Refresh Token rotation and rate-limited OTP verification.
*   **Core Logic Layer:** Handles the bridge between "Payment Verification" and "Content Unlocking".
*   **Media Layer:** Interfaces with Cloudinary/Mux for secure video delivery.

## 2. Zero-Trust Access Control
Access to tutorials is verified at every step:
1.  **Request Level:** Middleware checks for a valid JWT.
2.  **User Level:** Database check for `isPaid: true`.
3.  **Video Level:** Temporary Signed URL generation.

## 3. Video Security Implementation
To prevent content theft, we implement:
*   **Encrypted Streaming (HLS):** Prevents simple MP4 downloads.
*   **Signed Expiring Links:** URL becomes invalid after 1 hour.
*   **Frontend Hardening:** Blocking right-click, `Inspect Element` warnings, and CSS overlays to prevent screen grabbing.

## 4. Scalability Plan
*   **Compute:** Stateless Node.js containers allowing for horizontal scaling.
*   **Storage:** Decoupled media storage (CDN) to reduce server load.
*   **Caching:** Redis layer for frequently accessed session data and tutorial metadata.

## 5. Performance Optimization
*   **Images:** Automated WebP conversion and lazy loading.
*   **Code:** Route-based code splitting in Next.js.
*   **Database:** Indexed lookups for `userId` and `paymentStatus`.

## 6. Error Handling Strategy
*   **Consistent Responses:** All API calls return `{ success: boolean, data?: any, message: string }`.
*   **Backend Logging:** Centralized error logging for debugging payment failures or security breaches.
