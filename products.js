// ============================================================
// VERU PRODUCTS DATA
// ============================================================
// This is your product catalog! To add a product, copy an existing
// product block and paste it below, then change the details.
//
// FOR IMAGES:
// 1. Put your product photo in the "images/" folder
// 2. Write the filename here like: image: "images/my-product.jpg"
// 3. If you don't have an image yet, use: image: null
//    and a default icon will show instead
// ============================================================

const PRODUCTS = [
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
    },
    {
        id: 2,
        category: "vfd",
        categoryLabel: "VFD Drive",
        name: "1.5 KW VFD Drive",
        specs: [
            "1.5 KW Power",
            "3-Phase Input",
            "0-50 Hz Output",
            "Energy Efficient"
        ],
        price: "₹6,200",
        priceNote: "Most Popular",
        image: null,
        icon: "⚙️",
        badge: "Popular"
    },
    {
        id: 3,
        category: "vfd",
        categoryLabel: "VFD Drive",
        name: "2.2 KW VFD Drive",
        specs: [
            "2.2 KW Power",
            "3-Phase Input",
            "0-50 Hz Output",
            "Industrial Grade"
        ],
        price: "₹7,800",
        priceNote: "Wholesale: 10+ units discount",
        image: null,
        icon: "⚙️",
        badge: null
    },
    {
        id: 4,
        category: "smps",
        categoryLabel: "SMPS",
        name: "24V 10A SMPS",
        specs: [
            "24V DC Output",
            "10A Capacity",
            "240W Power",
            "Compact Design"
        ],
        price: "₹1,200",
        priceNote: "Bulk orders available",
        image: null,
        icon: "🔌",
        badge: null
    },
    {
        id: 5,
        category: "smps",
        categoryLabel: "SMPS",
        name: "48V 5A SMPS",
        specs: [
            "48V DC Output",
            "5A Capacity",
            "240W Power",
            "IP67 Optional"
        ],
        price: "₹1,800",
        priceNote: "OEM available",
        image: null,
        icon: "🔌",
        badge: null
    },
    {
        id: 6,
        category: "plc",
        categoryLabel: "PLC",
        name: "16-Point PLC Module",
        specs: [
            "16 I/O Points",
            "Compact Size",
            "24V DC Logic",
            "Easy Programming"
        ],
        price: "₹2,800",
        priceNote: "Training included",
        image: null,
        icon: "💻",
        badge: null
    },
    {
        id: 7,
        category: "plc",
        categoryLabel: "PLC",
        name: "32-Point PLC Module",
        specs: [
            "32 I/O Points",
            "Industrial Grade",
            "Real-time Control",
            "Expandable Modules"
        ],
        price: "₹4,500",
        priceNote: "With documentation",
        image: null,
        icon: "💻",
        badge: null
    },
    {
        id: 8,
        category: "other",
        categoryLabel: "Accessory",
        name: "Power Cable 6mm²",
        specs: [
            "6mm² Cross-section",
            "100m Spool",
            "Fire-rated",
            "ISI Certified"
        ],
        price: "₹800/m",
        priceNote: "Bulk discounts",
        image: null,
        icon: "🔧",
        badge: null
    },
    {
        id: 9,
        category: "other",
        categoryLabel: "Accessory",
        name: "VFD Output Filter",
        specs: [
            "3-Phase Design",
            "Sine Wave Output",
            "Heavy Duty",
            "Long Cable Support"
        ],
        price: "₹3,200",
        priceNote: "All KW ratings",
        image: null,
        icon: "🔌",
        badge: null
    },
    {
        id: 10,
        category: "smps",
        categoryLabel: "SMPS",
        name: "SMPS 24 1amp",
        specs: [
            "24V DC Output",
            "1A Capacity",
            "24W Power",
            "Compact Design"
        ],
        price: "₹450",
        priceNote: "Contact for bulk pricing",
        image: null,
        icon: "📟",
        badge: "NEW"
    }
	
];

// ============================================================
// HOW TO ADD A PRODUCT (Manual Method):
//
// 1. Copy any product block above (from { to },)
// 2. Paste it after the last product
// 3. Change the id to the next number
// 4. Update category, name, specs, price, etc.
// 5. For image: put photo in "images/" folder, then write:
//    image: "images/your-photo.jpg"
// 6. Save this file and upload to your hosting
//
// OR use admin.html to generate products through a form!
// ============================================================
