# 🔄 EARNETIX Logic & Workflow (Skill-Based Model)

## 1. The Core User Journey
1.  **Public Discovery:** User lands on SEO-optimized pages (Home, How it Works).
2.  **Onboarding:** Secure Signup via Google or Email OTP.
3.  **The Paywall:** User attempts to access "Tutorials". System checks `isPaid` status.
4.  **Transaction:**
    *   User selects "Access Tutorials".
    *   Backend generates a Cashfree Payment Link.
    *   User completes payment on Cashfree.
5.  **Activation:**
    *   Cashfree Webhook notifies EARNETIX backend.
    *   Backend validates transaction and updates `user.isPaid = true`.
6.  **Learning:** User gains access to the dynamic Tutorial Page with secure streaming.
7.  **Earning (Tasks):**
    *   User performs tasks based on tutorial knowledge.
    *   Work is submitted for verification.
    *   Earning is processed upon task completion.

---

## 2. Security Logic (Backend-First)

### Tutorial Access Control
```javascript
// Middleware Pattern
const checkTutorialAccess = async (req, res, next) => {
  const user = await User.findById(req.userId);
  if (user && user.isPaid) {
    return next();
  }
  return res.status(403).json({ message: "Access Denied. Payment Required." });
};
```

### Video Protection Flow
1.  Frontend requests Video ID.
2.  Backend verifies `isPaid` and requests a **Signed URL** from the CDN.
3.  CDN provides a link that expires in 60 minutes.
4.  Frontend renders the video via a custom player that blocks right-click/download.

---

## 3. Payment Verification Logic
> [!CAUTION]
> NEVER rely on frontend success redirects.

1.  **Order Created:** `status: PENDING` in DB.
2.  **Payment Done:** Cashfree sends Webhook to `/api/v1/payments/webhook`.
3.  **Backend Check:**
    *   Verify Webhook Signature.
    *   Check `order_id` in DB.
    *   Update User: `isPaid: true`.
    *   Update Order: `status: SUCCESS`.
