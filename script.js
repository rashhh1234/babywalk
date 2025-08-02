// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});

// Global variables to store products and categories
let productReviews = [];
let categories = [];

// Fallback product data in case JSON fails to load
const fallbackProducts = [
    {
        id: 1,
        title: "Mega Blocks",
        excerpt: "Baby Safe Blocks, Best for Age group 2-6 years. The best way to learn and play. Soft corners and edges. Safe for babies and toddlers. Must have for babies.",
        date: "June 1, 2025",
        author: "Parent Reviewer",
        category: "toys",
        price: "₹609",
        rating: 4.4,
        amazonLink: "https://amzn.to/4eNW8go",
        image: "Images/Blocks.png",
        content: "<h2>Why We Love It</h2><p>The best way to learn and play. Soft corners and edges. Safe for babies and toddlers. Must have for babies.</p><ul><li>Keeps baby engaged for hours</li><li>Safe for babies and toddlers</li><li>improves cognitive skills</li><li>colours and shapes helps in early learning</li></ul><div class=\"price-tag\">Current Price: ₹609</div><a href=\"https://amzn.to/4eNW8go\" class=\"amazon-button\" target=\"_blank\"><i class=\"fab fa-amazon\"></i> Buy on Amazon.in</a>"
    },
    {
        id: 2,
        title: "Talking Cactus",
        excerpt: "Interactive Talking Cactus. Unlimited fun time for your baby. Best for Age group 2-5 years. soft to touch. Safe for babies and toddlers. Must have for babies.",
        date: "June 1, 2025",
        author: "Parent Reviewer",
        category: "toys",
        price: "₹499",
        rating: 4.4,
        amazonLink: "https://amzn.to/3IQCRiP",
        image: "Images/Cactus.png",
        content: "<h2>Why We Love It</h2><p>Interactive Talking Cactus. Unlimited fun time for your baby. soft to touch. Safe for babies and toddlers. Must have for babies.</p><ul><li>Repeats what you say in a funny voice</li><li>Soft and safe for babies and toddlers</li><li>Provides unlimited fun and engagement</li><li>Perfect for sensory and language development</li></ul><div class=\"price-tag\">Current Price: ₹499</div><a href=\"https://amzn.to/3IQCRiP\" class=\"amazon-button\" target=\"_blank\"><i class=\"fab fa-amazon\"></i> Buy on Amazon.in</a>"
    },
    {
        id: 3,
        title: "Rattles",
        excerpt: "Soft, safe, and adorable rattles for babies. Gentle on skin and easy on gums.",
        date: "June 2, 2025",
        author: "Parent Reviewer",
        category: "toys",
        price: "₹899",
        rating: 4.5,
        amazonLink: "https://amzn.to/47ifecO",
        image: "Images/Rattle.png",
        content: "<h2>Why We Love It</h2><p>Around the age of 8 months, the babies start to grab things and put them in their mouth. So, rattles are a great way to keep them engaged and happy.</p><ul><li>Rattles are a great way to keep them engaged and happy</li><li>Easy to clean</li><li>Safe for babies and toddlers</li><li>Perfect for sensory and language development</li></ul><div class=\"price-tag\">Current Price: ₹899</div><a href=\"https://amzn.to/47ifecO\" class=\"amazon-button\" target=\"_blank\"><i class=\"fab fa-amazon\"></i> Buy on Amazon.in</a>"
    }
];

// Function to load products from JSON file
async function loadProductsFromJSON() {
    try {
        console.log('Attempting to load products from JSON...');
        const response = await fetch('products.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('JSON loaded successfully:', data);
        
        productReviews = data.products || [];
        categories = data.categories || [];
        
        console.log('Products loaded:', productReviews.length);
        
        // Load products when data is loaded
        loadProductReviews();
    } catch (error) {
        console.error('Error loading products from JSON:', error);
        console.log('Using fallback product data...');
        
        // Use fallback data if JSON fails to load
        productReviews = fallbackProducts;
        categories = [];
        
        // Load products with fallback data
        loadProductReviews();
    }
}

// Function to create product review cards
function createProductCard(product) {
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    return `
        <div class="post-card" onclick="loadProductReview(${product.id})">
            <div class="post-image" style="background: url('Images/Background.jpeg') no-repeat center center; background-size: cover; padding: 0; height: 220px; display: flex; align-items: center; justify-content: center; border-radius: 12px;">
                <img src="${product.image}" alt="${product.title}" style="max-width: 100%; max-height: 200px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.07);" onerror="this.style.display='none';">
            </div>
            <div class="post-content">
                <h3 class="post-title">${product.title}</h3>
                <p class="post-excerpt">${product.excerpt}</p>
                <div class="post-meta">
                    <div class="post-date">
                        <i class="far fa-calendar"></i>
                        ${product.date}
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: #ff9900;">${stars}</span>
                        <span style="color: #48bb78; font-weight: 600;">${product.price}</span>
                    </div>
                </div>
                <a href="${product.amazonLink}" class="read-more" target="_blank" onclick="event.stopPropagation();">
                    <i class="fab fa-amazon"></i> View on Amazon
                </a>
            </div>
        </div>
    `;
}

// Function to load product reviews
function loadProductReviews(category = null) {
    const postsGrid = document.getElementById('posts-grid');
    if (postsGrid) {
        console.log('Loading products to grid...');
        let productsToShow = productReviews;
        if (category) {
            productsToShow = productReviews.filter(product => product.category === category);
        }
        
        console.log('Products to show:', productsToShow.length);
        postsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    } else {
        console.log('Posts grid not found on this page');
    }
}

// Function to filter by category
function filterByCategory(category) {
    console.log('Filtering by category:', category);
    loadProductReviews(category);
    
    // Update active category styling
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.borderColor = 'transparent';
    });
    event.target.closest('.category-card').style.borderColor = '#ff69b4';
}

// Function to load individual product review
function loadProductReview(productId) {
    const product = productReviews.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));

    const productReviewHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${product.title} - My Baby Walk Reviews</title>
            <link rel="stylesheet" href="styles.css">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <style>
                .nav-logo h1 {
                    font-family: 'Orbitron', monospace;
                    font-weight: 700;
                    font-size: 2rem;
                    background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .nav-logo h1:hover {
                    transform: scale(1.05);
                    filter: brightness(1.2);
                }
            </style>
        </head>
        <body>
            <header class="header">
                <nav class="nav">
                    <div class="nav-container">
                        <div class="nav-logo">
                            <h1><a href="index.html" style="text-decoration: none; color: inherit;">My Baby Walk</a></h1>
                        </div>
                        <ul class="nav-menu">
                            <li><a href="index.html" class="nav-link">Home</a></li>
                            <li><a href="products.html" class="nav-link">Products</a></li>
                            <li><a href="#about" class="nav-link">About</a></li>
                            <li><a href="#contact" class="nav-link">Contact</a></li>
                        </ul>
                        <div class="nav-toggle">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>
                </nav>
            </header>

            <main class="blog-post">
                <div class="container">
                    <article>
                        <header class="blog-post-header">
                            <h1 class="blog-post-title">${product.title}</h1>
                            <div class="blog-post-meta">
                                <span><i class="far fa-calendar"></i> ${product.date}</span>
                                <span style="margin-left: 1rem;"><i class="far fa-user"></i> ${product.author}</span>
                                <span style="margin-left: 1rem;"><i class="far fa-star"></i> ${stars} (${product.rating})</span>
                                <span style="margin-left: 1rem;"><i class="fas fa-tag"></i> ${product.category}</span>
                            </div>
                            <div class="price-tag" style="margin-top: 1rem;">${product.price}</div>
                        </header>
                        <div class="blog-post-content">
                            ${product.content}
                        </div>
                        <div style="text-align: center; margin-top: 3rem;">
                            <a href="products.html" class="cta-button" style="display: inline-block;">← Back to Products</a>
                        </div>
                    </article>
                </div>
            </main>

            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>My Baby Walk</h3>
                            <p>Your trusted source for the best product recommendations and reviews.</p>
                        </div>
                        <div class="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="products.html">Products</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h4>Follow Us</h4>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2024 My Baby Walk. All rights reserved. | Amazon.in affiliate links included.</p>
                    </div>
                </div>
            </footer>

            <script src="script.js"></script>
        </body>
        </html>
    `;

    // Create a new window or navigate to the product review
    const newWindow = window.open('', '_blank');
    newWindow.document.write(productReviewHTML);
    newWindow.document.close();
}

// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (email && email.includes('@')) {
                alert('Thank you for subscribing to our product recommendations!');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Load products from JSON when page loads
    console.log('Starting to load products...');
    loadProductsFromJSON();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    }
}); 