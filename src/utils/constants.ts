/**
 * Configuration constants for the payment flow
 */

/**
 * Email address for proof of payment submissions
 * 
 * NOTE: This email is displayed to users in the UI, but the actual email delivery
 * is handled by Tally form notifications. When setting up your Tally form for
 * /upload-pop, configure it to send email notifications to this address.
 * 
 * To change this email later, update it here and in your Tally form settings.
 */
export const POP_EMAIL = "liam@birch.co.za";

/**
 * Future email address (to be used later)
 * Change POP_EMAIL to this when ready
 */
export const FUTURE_POP_EMAIL = "schoolfonts@gmail.com";

