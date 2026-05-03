# VERU Website - Complete Guide

Welcome! This folder contains your upgraded website. Read this guide carefully — it explains everything you need to know as a beginner.

---

## 📁 What Files You Have

| File | Purpose |
|------|---------|
| **index.html** | Your main website (what customers see) |
| **products.js** | Product catalog data (easy to edit!) |
| **admin.html** | Hidden admin page to add products with a form |
| **images/** | Folder for your product photos |
| **README.md** | This guide |

---

## 🖼️ How to Add Product Pictures

### Step 1: Get your product photo ready
- Take a photo or have your supplier send you one
- Resize it to about **600x400 pixels** (don't use huge files)
- Save it as **JPG** format (smaller file size = faster website)
- Name it simply: `vfd-1hp.jpg`, `smps-24v.jpg`, etc.

### Step 2: Put it in the images folder
Put all your product photos in the `images/` folder next to your HTML files.

### Step 3: Link it in your product
In **products.js**, for each product, you can set the image:

```javascript
{
    id: 1,
    name: "0.75 KW VFD Drive",
    image: "images/vfd-075kw.jpg",   // <-- YOUR PHOTO PATH HERE
    icon: "⚙️",  // This shows if photo is missing
    ...
}
```

**If you don't have a photo yet**, just leave `image: null` and an emoji icon will show instead.

---

## ➕ How to Add a New Product (3 Ways)

### METHOD 1: Admin Panel (Easiest!)

1. Open **admin.html** in your browser (double-click it)
2. Fill out the form: name, price, category, specs
3. Click **"Add Product"**
4. Add all your products
5. Click **"Generate & Copy Code"**
6. Open **products.js** in any text editor (Notepad, VS Code, etc.)
7. **Delete everything** and paste the copied code
8. Save **products.js**
9. Upload **products.js** to your hosting

> **Important:** The admin panel is "hidden" because nobody can find it from your main website. BUT it has no password. For security, rename `admin.html` to something random like `veru-admin-x739.html` so only you know the URL.

---

### METHOD 2: Edit products.js Directly (Manual)

Open `products.js` in a text editor. You'll see product blocks like this:

```javascript
{
    id: 1,
    category: "vfd",
    categoryLabel: "VFD Drive",
    name: "0.75 KW VFD Drive",
    specs: [
        "0.75 KW Power",
        "3-Phase Input",
        "0-50 Hz Output",
        "Full Features"
    ],
    price: "₹4,500",
    priceNote: "Wholesale: 10+ units discount",
    image: null,
    icon: "⚙️",
    badge: null
}
```

To add a product:
1. Copy an entire block (from `{` to `},`)
2. Paste it after the last product
3. Change the `id` to the next number (must be unique!)
4. Update `name`, `price`, `specs`, etc.
5. Save and upload to your hosting

---

### METHOD 3: Replace Emoji With Real Photos Only

If you just want to add photos to existing products without changing anything else:

1. Put your photo in `images/` folder
2. Open `products.js`
3. Find the product you want
4. Change `image: null` to `image: "images/your-photo.jpg"`
5. Save and upload

---

## ☁️ How to Upload to Hosting Daily

Since your website is **static HTML** (no database), you must upload files whenever you make changes.

### Option A: FTP (Most Common for Cheap Hosting)

If you use Hostinger, Bluehost, GoDaddy, etc.:

1. Log into your hosting control panel
2. Find **"File Manager"** or use an FTP program like **FileZilla**
3. Navigate to your website folder (usually `public_html/`)
4. Upload these files:
   - `index.html`
   - `products.js`
   - `admin.html` (keep it hidden!)
   - All files from `images/` folder
5. Done!

### Option B: GitHub Pages (FREE Hosting!)

If you want **free hosting** with easy updates:

1. Create a free account at [github.com](https://github.com)
2. Create a new repository called `veru-website`
3. Upload all these files to the repository
4. Go to Settings → Pages → Enable GitHub Pages
5. Your site will be live at `https://yourusername.github.io/veru-website/`
6. To update: just upload the new files and changes go live in 1-2 minutes

**GitHub Pages is free and perfect for a beginner!**

### Option C: Netlify Drop (Easiest Free Hosting)

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag and drop your ENTIRE website folder
4. Your site goes live instantly!
5. To update: drag and drop again, or use their interface

---

## 🔐 About the "Hidden Admin" Link

You asked: *"Can I create a hidden link to add products automatically?"*

### The Honest Answer

With **static hosting** (just HTML files, no database), you cannot have a true admin panel that automatically updates the website for all visitors. Here's why:

| What You Want | What You Need | Your Current Setup |
|---------------|-------------|-------------------|
| Admin form saves products | Database + Backend | ❌ Not available |
| All visitors see new products | Server to store data | ❌ Not available |
| Automatic updates without uploading | Dynamic hosting | ❌ Not available |

### What I Built For You (The Workaround)

The **admin.html** page I created is a **code generator**:

1. You fill the form (easy!)
2. It generates clean `products.js` code
3. You copy and paste into your actual `products.js` file
4. Upload the new `products.js`
5. The website shows the new products

**This is the best approach for static websites** — no database needed, no monthly costs, works on any cheap hosting.

---

## 🚀 The Next Level (If You Grow)

If you add products daily and this copy-paste method feels slow, you have two paths:

### Path 1: Google Sheets as Free Database (Intermediate)

You can connect your website to a Google Sheet so you just add products to the spreadsheet and the website updates automatically. This requires some setup but is free and powerful.

**Pros:** No backend needed, edit from phone, free  
**Cons:** Requires 1-2 hours of setup

### Path 2: Full E-Commerce Platform (Advanced)

When you're ready to invest:
- **Shopify** ($39/month) — easiest, built for selling
- **WooCommerce** (free + hosting) — WordPress plugin
- **Wix E-commerce** — drag and drop builder

These have real admin panels, payment collection, order management, etc.

---

## ⚡ Quick Reference

### Adding a product via admin.html
```
1. Open admin.html
2. Fill form → Click "Add Product"
3. Repeat for all products
4. Click "Generate & Copy Code"
5. Paste into products.js, save
6. Upload products.js to hosting
```

### Adding a product manually in products.js
```javascript
{
    id: 10,                          // Must be unique!
    category: "vfd",                 // vfd, smps, plc, or other
    categoryLabel: "VFD Drive",      // What shows on the card
    name: "5.5 KW VFD Drive",        // Product name
    specs: [                         // Bullet points
        "5.5 KW Power",
        "3-Phase Input",
        "Heavy Duty"
    ],
    price: "₹15,000",                // Price with ₹ symbol
    priceNote: "Free shipping",      // Small text under price
    image: "images/my-photo.jpg",    // Photo path (or null)
    icon: "⚙️",                      // Emoji if no photo
    badge: "New"                     // Or null for no badge
}
```

### Category codes
| Code | Shows as |
|------|---------|
| `vfd` | VFD Drive |
| `smps` | SMPS |
| `plc` | PLC |
| `other` | Accessory |

### Available icons (if no photo)
- `⚙️` Gear (VFD/Industrial)
- `🔌` Plug (Power/SMPS)
- `💻` Computer (PLC/Control)
- `🔧` Wrench (Tools/Accessories)
- `⚡` Lightning (Power)
- `📟` Electronics
- `🏭` Factory
- `📦` Package

---

## 🆘 Common Problems & Solutions

### "I added a product but it doesn't show on the website"
- Make sure you uploaded the new `products.js` file
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that there's a comma `,` after every product block except the last one

### "My product photo doesn't show"
- Check the filename matches exactly (capital letters matter!)
- Make sure the photo is in the `images/` folder
- Try opening the image URL directly: `yoursite.com/images/photo.jpg`
- Make sure it's a `.jpg` or `.png` file

### "The website looks broken after I edited products.js"
- You probably missed a comma, bracket, or quote
- Open browser console (F12) to see the error
- Use the admin.html export to get clean, correct code

### "Can I edit on my phone?"
- **Admin page:** Yes! Open admin.html on your phone browser
- **products.js:** Hard on phone, use a computer
- **Best solution:** Host on Netlify and use their dashboard

---

## 🎯 Your Action Plan (Do This Now!)

1. ✅ Keep all these files in one folder on your computer
2. ✅ Take photos of 3-5 products and put in `images/` folder
3. ✅ Open `admin.html` in your browser
4. ✅ Add all your real products using the form
5. ✅ Export the code and save it to `products.js`
6. ✅ Choose hosting: **Netlify Drop** (easiest) or **GitHub Pages** (free)
7. ✅ Upload all files
8. ✅ Test your live website
9. ✅ Rename `admin.html` to something secret like `veru-manage-921.html`
10. ✅ Bookmark your secret admin URL on your phone for easy updates

---

**Need more help?** The web development journey is gradual. Start with the admin panel method — it's the easiest. As you get comfortable, explore the other options.

Good luck with VERU! 🚀
