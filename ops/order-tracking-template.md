# Order Tracking Template

Use this template to track school orders manually. Copy to a Google Sheet or Excel file.

## Columns

| Date Requested | School Name | Billing Email | Finance Email | Package | Amount | Invoice Number/Reference | Status | PoP Received | Payment Confirmed | Delivery Sent | Delivery Date | Notes |
|----------------|-------------|---------------|---------------|---------|--------|------------------------|--------|--------------|-------------------|---------------|---------------|-------|
| 2026-01-15 | Example School | billing@school.co.za | finance@school.co.za | School Licence | R999 | INV-2026-0012 | Invoiced | Yes | Yes | Yes | 2026-01-20 | |

## Status Options

- **Requested** - Invoice request received, not yet invoiced
- **Invoiced** - Invoice sent, awaiting payment
- **Awaiting PoP** - Payment made, PoP uploaded, awaiting confirmation
- **Paid** - Payment confirmed, preparing delivery
- **Delivered** - Download link sent, order complete

## Invoice Numbering Format

Choose one format and stick to it:

- **Option 1:** `INV-2026-0012` (Year-based: INV-YYYY-NNNN)
- **Option 2:** `EDU-SCH-0001` (Simple running number: EDU-SCH-NNNN)

**Important:** Use the same reference in:
- Invoice document
- Email to school
- EFT payment reference (when they pay)
- PoP upload reference

## Quick Workflow

1. **Invoice Request Received** (from Tally form)
   - Add row to tracking sheet
   - Status: "Requested"
   - Note: Date requested

2. **Create Invoice**
   - Generate invoice PDF with chosen numbering format
   - Add invoice number to tracking sheet
   - Status: "Invoiced"
   - Send invoice email (use template from `email-templates.md`)

3. **PoP Uploaded** (from Tally form)
   - Update tracking sheet: PoP Received = Yes
   - Status: "Awaiting PoP"
   - Verify payment matches invoice

4. **Payment Confirmed**
   - Update tracking sheet: Payment Confirmed = Yes
   - Status: "Paid"
   - Prepare delivery ZIP link

5. **Delivery Sent**
   - Update tracking sheet: Delivery Sent = Yes, Delivery Date = today
   - Status: "Delivered"
   - Send delivery email (use template from `email-templates.md`)

## Notes

- Keep one row per order
- Update status as you progress through the workflow
- Use Notes column for any special instructions or issues
- Review weekly to catch any stuck orders

