# 📋 Software Requirements Specification (SRS): EARNETIX

## 1. Introduction
EARNETIX is a premium skill-based earning platform designed to bridge the gap between education and income. It provides a structured "Learn-to-Earn" ecosystem where users master digital skills through protected tutorials and apply them through specialized tasks.

## 2. User Roles
*   **User (Student/Creator):** Learns through paid tutorials and performs structured tasks to earn.
*   **Admin:** Controls content lifecycle, manages tutorial uploads, verifies payment statuses, and oversees the user base.

## 3. Functional Requirements

### 3.1 Authentication & Security
*   **FR1:** Secure login via Email + Password + OTP (Nodemailer) and Google OAuth.
*   **FR2:** Rate limiting on OTP requests to prevent SMS/Email exhaustion attacks.
*   **FR3:** Session management using HttpOnly cookies and JWT for API authorization.

### 3.2 Paid Access System (Core)
*   **FR4:** Tutorial Content Lock: All educational material is restricted by default.
*   **FR5:** Payment Integration: Seamless flow using Cashfree Payment Links.
*   **FR6:** Backend Verification: Payment status must be verified server-side via webhooks/API before setting `isPaid = true` in the DB.

### 3.3 Dynamic Tutorial System
*   **FR7:** Secure Video Streaming: Integration with Cloudinary/Mux using Signed URLs and expiring links.
*   **FR8:** Anti-Piracy Measures: Disable right-click, hide direct video sources, and prevent downloads.
*   **FR9:** Admin dashboard for uploading tutorials (Video, Title, Description).

### 3.4 Task-Based Earning
*   **FR10:** Guided Tasks: Users receive tasks specifically related to the tutorials they have completed.
*   **FR11:** Performance Tracking: System records task completion and quality metrics.

## 4. Non-Functional Requirements
*   **NFR1 (Performance):** SEO-optimized static pages must load within 1.5 seconds.
*   **NFR2 (Security):** Zero-trust architecture for premium content access.
*   **NFR3 (UX):** Mobile-first, minimal UI following the EARNETIX brand kit.

## 5. Technical Stack
*   **Frontend:** Next.js (SSG for static pages, CSR for dashboard).
*   **Backend:** Node.js / Express.
*   **Database:** MongoDB (User state, Payment logs, Tutorial metadata).
*   **Storage:** Cloudinary (Secure Video Hosting).
