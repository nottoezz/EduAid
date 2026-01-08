# Tally Setup Instructions

## Step 1: Create Order Form (for `/buy/individual`)

### In Tally Dashboard:
1. Go to https://tally.so and sign in
2. Click "Create new form"
3. Name it: **"Edu-Aid Individual Order"**

### Add Fields (in this exact order):
1. **Short text field**
   - Field key: `fullName`
   - Label: "Full Name"
   - Required: Yes

2. **Email field**
   - Field key: `email`
   - Label: "Email"
   - Required: Yes

3. **Short text field**
   - Field key: `product`
   - Label: "Product"
   - Default value: `Edu-Aid Font Package`
   - Required: Yes
   - **Make this field hidden** (so users don't see it)

4. **Number field**
   - Field key: `price`
   - Label: "Price"
   - Default value: `299`
   - Required: Yes
   - **Make this field hidden**

5. **Short text field**
   - Field key: `type`
   - Label: "Type"
   - Default value: `individual`
   - Required: Yes
   - **Make this field hidden**

6. **Short text field**
   - Field key: `reference`
   - Label: "Reference"
   - Required: Yes
   - **Make this field hidden**

### Configure Email Notifications:
1. Go to **Settings** → **Notifications**
2. Enable **"Email notifications"**
3. Set recipient email: `liam@birch.co.za`
4. Email subject: `New Order: {reference}`
5. Enable **"Send email for each submission"**

### Get the Form Endpoint:
1. Go to **Share** tab
2. Copy the **form URL** (looks like: `https://tally.so/r/xxxxx`)
3. This is your endpoint URL

---

## Step 2: Create PoP Upload Form (for `/upload-pop`)

### In Tally Dashboard:
1. Click "Create new form"
2. Name it: **"Edu-Aid PoP Upload"**

### Add Fields:
1. **Email field**
   - Field key: `email`
   - Label: "Email"
   - Required: Yes

2. **Short text field**
   - Field key: `reference`
   - Label: "Payment Reference"
   - Required: Yes

3. **File upload field**
   - Field key: `proofOfPayment`
   - Label: "Proof of Payment"
   - Accepted file types: PDF, JPG, PNG
   - Max file size: 10MB
   - Required: Yes

### Configure Email Notifications:
1. Go to **Settings** → **Notifications**
2. Enable **"Email notifications"**
3. Set recipient email: `liam@birch.co.za`
4. Email subject: `PoP Upload: {reference}`
5. Enable **"Send email for each submission"**
6. **IMPORTANT:** Enable **"Include file attachments in email"**

### Get the Form Endpoint:
1. Go to **Share** tab
2. Copy the **form URL** (looks like: `https://tally.so/r/yyyyy`)
3. This is your endpoint URL

---

## Step 3: Add Endpoints to Code

### For Order Form (`BuyIndividualPage.tsx`):
1. Open: `src/components/pages/BuyIndividualPage.tsx`
2. Find line 30: `const TALLY_FORM_ENDPOINT = "";`
3. Replace with your order form URL:
   ```typescript
   const TALLY_FORM_ENDPOINT = "https://tally.so/r/xxxxx"; // Replace xxxxx with your actual form ID
   ```

### For PoP Upload Form (`UploadPopPage.tsx`):
1. Open: `src/components/pages/UploadPopPage.tsx`
2. Find line 46: `const TALLY_FORM_ENDPOINT = "";`
3. Replace with your PoP form URL:
   ```typescript
   const TALLY_FORM_ENDPOINT = "https://tally.so/r/yyyyy"; // Replace yyyyy with your actual form ID
   ```

---

## Step 4: Test the Flow

1. **Test Order Form:**
   - Go to `/buy/individual` on your site
   - Fill out the form and submit
   - Check your email (`liam@birch.co.za`) for the notification
   - Verify you received: name, email, reference, product, price

2. **Test PoP Upload:**
   - Complete an order to get a reference
   - Go to `/upload-pop?ref=EDUAID-IND-XXXXX`
   - Upload a test file (PDF or image)
   - Check your email for the notification with attachment

---

## Important Notes

- **Field keys must match exactly:** `fullName`, `email`, `product`, `price`, `type`, `reference`, `proofOfPayment`
- **Hidden fields:** Make `product`, `price`, and `type` hidden in the order form (they're auto-filled)
- **File attachments:** Make sure "Include file attachments in email" is enabled for the PoP form
- **Email notifications:** Both forms must have email notifications enabled to receive submissions
- **Form URLs:** Tally form URLs work as POST endpoints - you can submit directly to them

---

## Troubleshooting

**If emails aren't arriving:**
- Check Tally form settings → Notifications
- Verify recipient email is correct
- Check spam folder
- Make sure "Send email for each submission" is enabled

**If form submission fails:**
- Check browser console for errors
- Verify field keys match exactly (case-sensitive)
- Make sure form URL is correct
- Check that Tally form is published/active

**If file upload doesn't work:**
- Verify file upload field is enabled in Tally
- Check file size limits
- Make sure "Include file attachments in email" is enabled

