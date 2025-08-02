# My Baby Walk - Product Recommendations & Blog

A static website featuring parenting blogs and curated product recommendations for babies and kids, with Amazon.in affiliate links.

## 🌟 Features

- **Dual Purpose**: Blog section for parenting content and product recommendations
- **Product Categories**: Toys, Cloths, Skin Care, Books, Activity
- **Amazon Integration**: Direct links to Amazon.in products
- **Responsive Design**: Works on all devices
- **Modern UI**: Black and pink theme with beautiful animations
- **Easy Product Management**: JSON-based product data for easy updates

## 📁 File Structure

```
babywalk/
├── index.html              # Blog homepage
├── products.html           # Product recommendations page
├── products.json           # Product data (easy to edit)
├── styles.css              # Global styles
├── script.js               # JavaScript functionality
├── blog-post-template.html # Product review template
├── README.md               # Documentation
└── Images/
    └── Background.jpeg     # Background image
```

## 🛍️ Adding New Products

### Method 1: Edit JSON File (Recommended)

1. **Open `products.json`**
2. **Add a new product object** to the `products` array:

```json
{
  "id": 6,
  "title": "New Product Name",
  "excerpt": "Brief product description",
  "date": "December 20, 2024",
  "author": "Reviewer Name",
  "category": "toys",
  "price": "₹299",
  "rating": 4.5,
  "amazonLink": "https://amzn.to/your-affiliate-link",
  "image": "https://m.media-amazon.com/images/I/product-image.jpg",
  "content": "<h2>Why We Love It</h2><p>Detailed review content with HTML formatting</p><ul><li>Feature 1</li><li>Feature 2</li></ul><div class=\"price-tag\">Current Price: ₹299</div><a href=\"https://amzn.to/your-affiliate-link\" class=\"amazon-button\" target=\"_blank\"><i class=\"fab fa-amazon\"></i> Buy on Amazon.in</a>"
}
```

### Method 2: Edit JavaScript (Legacy)

1. **Open `script.js`**
2. **Find the `productReviews` array**
3. **Add new product objects** following the same structure

## 📊 Product Object Structure

```javascript
{
  id: 1,                    // Unique identifier
  title: "Product Name",    // Product title
  excerpt: "Description",   // Short description
  date: "Date",            // Review date
  author: "Reviewer",      // Author name
  category: "toys",        // Category (toys/cloths/skin-care/books/activity)
  price: "₹299",           // Price in rupees
  rating: 4.5,             // Rating (0-5)
  amazonLink: "URL",       // Amazon affiliate link
  image: "Image URL",      // Product image URL
  content: "HTML content"  // Full review with HTML formatting
}
```

## 🏷️ Categories

- **Toys**: Educational and fun toys
- **Cloths**: Baby clothing and accessories
- **Skin Care**: Baby care products
- **Books**: Children's books and learning materials
- **Activity**: Games and activity products

## 🎨 Customization

### Colors
- **Primary**: Black (`#000`) and Pink (`#ff69b4`)
- **Accent**: Darker Pink (`#ff1493`)
- **Text**: White (`#fff`) and Light Gray (`#ccc`)

### Fonts
- **Main Title**: Orbitron (futuristic look)
- **Body Text**: Inter (clean and readable)

## 🚀 Deployment

This is a **static website** that can be hosted on:

- **GitHub Pages** (Free)
- **Netlify** (Free tier available)
- **Vercel** (Free tier available)
- **Any web server**

### Steps:
1. Upload all files to your hosting service
2. Ensure `products.json` is accessible
3. Test all links and functionality

## 💰 Amazon Affiliate Integration

1. **Sign up** for Amazon Associates India
2. **Replace placeholder links** in `products.json`
3. **Use your affiliate tags** in product links
4. **Track earnings** through Amazon dashboard

## 🔧 Technical Details

- **No Backend Required**: Pure HTML, CSS, JavaScript
- **JSON Data**: Products stored in external JSON file
- **Responsive**: Mobile-first design
- **SEO Friendly**: Semantic HTML structure
- **Fast Loading**: Optimized images and code

## 📝 Adding Blog Posts

Currently, blog posts are hardcoded in `index.html`. To add new blog posts:

1. **Edit `index.html`**
2. **Add new blog card** in the blog-list section:

```html
<div class="blog-card">
    <div class="blog-title">New Blog Title</div>
    <div class="blog-meta">By Author Name • Date</div>
    <div class="blog-excerpt">Blog excerpt...</div>
    <a href="#" class="read-blog">Read Blog</a>
</div>
```

## 🎯 Benefits of JSON Structure

- **Easy Updates**: No code changes needed to add products
- **Non-Technical Users**: Anyone can edit the JSON file
- **Version Control**: Track changes in Git
- **Backup Friendly**: Simple file structure
- **Scalable**: Can handle hundreds of products

## 📞 Support

For questions or issues:
1. Check the JSON structure matches the format
2. Ensure all image URLs are accessible
3. Verify Amazon affiliate links are working
4. Test on different browsers and devices

---

**Note**: This is a static website. All content updates require file edits and re-upload to your hosting service.
