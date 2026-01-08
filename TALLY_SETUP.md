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

---

# School Licence Forms

## Step 5: Create School Invoice Request Form (for `/buy/school`)

### In Tally Dashboard:
1. Go to https://tally.so and sign in
2. Click "Create new form"
3. Name it: **"Edu-Aid — School Invoice Request"**

### Add Required Fields:
1. **Short text field**
   - Field key: `schoolName`
   - Label: "School Name"
   - Required: Yes

2. **Short text field**
   - Field key: `billingContactName`
   - Label: "Billing Contact Full Name"
   - Required: Yes

3. **Email field**
   - Field key: `billingEmail`
   - Label: "Billing Email (where invoice goes)"
   - Required: Yes

4. **Email field**
   - Field key: `financeEmail`
   - Label: "Finance Email"
   - Required: No (optional but recommended)

5. **Short text field**
   - Field key: `phoneNumber`
   - Label: "Phone Number"
   - Required: No (optional)

6. **Long text field**
   - Field key: `billingAddress`
   - Label: "Billing Address"
   - Required: No (optional, depending on how formal your invoice needs to be)

7. **Short text field**
   - Field key: `vatNumber`
   - Label: "VAT Number"
   - Required: No (optional)

8. **Short text field**
   - Field key: `purchaseOrderNumber`
   - Label: "Purchase Order Number"
   - Required: No (optional)

9. **Short text field**
   - Field key: `schoolLicenceYear`
   - Label: "School Licence Year"
   - Required: No (optional, e.g., 2026)

10. **Checkbox field**
    - Field key: `licenseAccepted`
    - Label: "I accept the School Licence terms"
    - Required: Yes

### Add Hidden Fields (Important):
11. **Short text field**
    - Field key: `packageName`
    - Label: "Package Name"
    - Default value: `School Licence`
    - Required: Yes
    - **Make this field hidden**

12. **Number field**
    - Field key: `annualPrice`
    - Label: "Annual Price"
    - Default value: `999`
    - Required: Yes
    - **Make this field hidden**

13. **Short text field**
    - Field key: `submissionSource`
    - Label: "Submission Source"
    - Default value: `School invoice request`
    - Required: Yes
    - **Make this field hidden**

### Configure Form Settings:
1. Go to **Settings** → **After submission**
2. Set redirect URL: `[YOUR_SITE_URL]/buy/school/thanks`
   - Replace `[YOUR_SITE_URL]` with your actual site URL (e.g., `https://yoursite.com/buy/school/thanks`)

### Configure Email Notifications:
1. Go to **Settings** → **Notifications**
2. Enable **"Email notifications"**
3. Set recipient email: `liam@birch.co.za`
4. Email subject: `School Invoice Request: {schoolName}`
5. Enable **"Send email for each submission"**

### Optional: Google Sheets Integration:
1. Go to **Settings** → **Integrations**
2. Connect to Google Sheets (optional but nice for tracking)
3. This will automatically save submissions to a spreadsheet

### Get the Form URL:
1. Go to **Share** tab
2. Copy the **form URL** (looks like: `https://tally.so/r/zzzzz`)
3. This is your form URL to add to `BuySchoolPage.tsx`

---

## Step 6: Create School PoP Upload Form (for `/upload-pop` - schools)

### Option A: Use the Same PoP Form for Both
You can use the existing PoP upload form from Step 2 and add optional fields for schools:
- Add `schoolName` field (optional)
- Add `amount` field (optional)
- The form will work for both individuals and schools

### Option B: Create Separate School PoP Form
If you prefer a separate form for schools:

### In Tally Dashboard:
1. Click "Create new form"
2. Name it: **"Edu-Aid — Upload Proof of Payment (School)"**

### Add Fields:
1. **Short text field**
   - Field key: `reference`
   - Label: "Reference / Invoice Number"
   - Required: Yes

2. **Short text field**
   - Field key: `schoolName`
   - Label: "School Name"
   - Required: Yes

3. **Email field**
   - Field key: `billingEmail`
   - Label: "Billing Email"
   - Required: Yes

4. **Number field**
   - Field key: `amount`
   - Label: "Amount Paid"
   - Required: No (optional)

5. **File upload field**
   - Field key: `proofOfPayment`
   - Label: "Proof of Payment"
   - Accepted file types: PDF, JPG, PNG
   - Max file size: 10MB
   - Required: Yes

6. **Long text field**
   - Field key: `notes`
   - Label: "Notes"
   - Required: No (optional)

### Configure Email Notifications:
1. Go to **Settings** → **Notifications**
2. Enable **"Email notifications"**
3. Set recipient email: `liam@birch.co.za`
4. Email subject: `School PoP Upload: {reference} - {schoolName}`
5. Enable **"Send email for each submission"**
6. **IMPORTANT:** Enable **"Include file attachments in email"**

### Get the Form Endpoint:
1. Go to **Share** tab
2. Copy the **form URL** (looks like: `https://tally.so/r/aaaaa`)
3. This is your endpoint URL

---

## Step 7: Add School Form URLs to Code

### For School Invoice Request Form (`BuySchoolPage.tsx`):
1. Open: `src/components/pages/BuySchoolPage.tsx`
2. Find line with: `const TALLY_INVOICE_REQUEST_FORM_URL = "";`
3. Replace with your school invoice request form URL:
   ```typescript
   const TALLY_INVOICE_REQUEST_FORM_URL = "https://tally.so/r/zzzzz"; // Replace zzzzz with your actual form ID
   ```

### For School PoP Upload (if using separate form):
If you created a separate school PoP form, you can update `UploadPopPage.tsx` to use different endpoints based on whether it's a school or individual. For now, the existing PoP form endpoint works for both.

---

## Step 8: Test School Flow

1. **Test Invoice Request:**
   - Go to `/buy/school` on your site
   - Click the invoice request form link/button
   - Fill out the form and submit
   - Verify redirect to `/buy/school/thanks`
   - Check your email for the notification with all school details

2. **Test School PoP Upload:**
   - Complete an invoice request
   - Go to `/upload-pop`
   - Fill in school name, invoice number, and upload PoP
   - Check your email for the notification with attachment

---

## School Form Field Reference

**Invoice Request Form Required Fields:**
- `schoolName`
- `billingContactName`
- `billingEmail`
- `licenseAccepted` (checkbox)

**Invoice Request Form Optional Fields:**
- `financeEmail`
- `phoneNumber`
- `billingAddress`
- `vatNumber`
- `purchaseOrderNumber`
- `schoolLicenceYear`

**Invoice Request Form Hidden Fields (auto-filled):**
- `packageName` = "School Licence"
- `annualPrice` = 999
- `submissionSource` = "School invoice request"

**PoP Upload Form Fields:**
- `reference` (required) - Invoice number or payment reference
- `schoolName` (optional for individuals, recommended for schools)
- `billingEmail` (required)
- `amount` (optional)
- `proofOfPayment` (required - file upload)

---

## Complete Form Checklist

### Individual Forms:
- [ ] Individual Order Form (`/buy/individual`)
- [ ] Individual PoP Upload Form (`/upload-pop`)

### School Forms:
- [ ] School Invoice Request Form (`/buy/school`)
- [ ] School PoP Upload Form (can use same as individual or separate)

### All Forms Should Have:
- [ ] Email notifications enabled
- [ ] Recipient email set to `liam@birch.co.za`
- [ ] Appropriate redirect URLs configured
- [ ] File upload enabled (for PoP forms)
- [ ] "Include file attachments in email" enabled (for PoP forms)

