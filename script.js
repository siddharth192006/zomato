// Restaurant data with menu items
const restaurants = [
    {
        id: 1,
        name: "Italian Bistro",
        cuisine: "Italian, Pizza, Pasta",
        rating: 4.5,
        reviews: 500,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        deliveryTime: "30-40 min",
        price: "₹230",
        menu: [
            { id: 101, name: "Margherita Pizza", price: 230, description: "Classic cheese pizza with tomato sauce" },
            { id: 102, name: "Pasta Alfredo", price: 180, description: "Creamy Alfredo pasta with parmesan" },
            { id: 103, name: "Garlic Bread", price: 90, description: "Toasted bread with garlic butter" },
            { id: 104, name: "Tiramisu", price: 120, description: "Classic Italian dessert" }
        ]
    },
    {
        id: 2,
        name: "Burger Factory",
        cuisine: "American, Fast Food, Burgers",
        rating: 4.3,
        reviews: 350,
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        deliveryTime: "25-35 min",
        price: "₹180",
        menu: [
            { id: 201, name: "Classic Cheeseburger", price: 180, description: "Beef patty with cheese and veggies" },
            { id: 202, name: "Bacon Burger", price: 220, description: "Burger with crispy bacon strips" },
            { id: 203, name: "French Fries", price: 90, description: "Crispy golden fries" },
            { id: 204, name: "Chocolate Shake", price: 120, description: "Creamy chocolate milkshake" }
        ]
    },
    {
        id: 3,
        name: "Spice Garden",
        cuisine: "Indian, Curry, Biryani",
        rating: 4.7,
        reviews: 600,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        deliveryTime: "35-45 min",
        price: "₹212",
        menu: [
            { id: 301, name: "Chicken Biryani", price: 212, description: "Fragrant rice with chicken and spices" },
            { id: 302, name: "Butter Chicken", price: 240, description: "Creamy tomato-based chicken curry" },
            { id: 303, name: "Garlic Naan", price: 60, description: "Soft bread with garlic butter" },
            { id: 304, name: "Mango Lassi", price: 80, description: "Refreshing yogurt drink" }
        ]
    },
    {
        id: 4,
        name: "Sushi Express",
        cuisine: "Japanese, Sushi, Asian",
        rating: 4.6,
        reviews: 450,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcP5tVKsp_94t7lzEmq59zjebh5b6Tzai1LQ&s",
        deliveryTime: "20-30 min",
        price: "₹250",
        menu: [
            { id: 401, name: "California Roll", price: 250, description: "Crab, avocado and cucumber roll" },
            { id: 402, name: "Salmon Nigiri", price: 280, description: "Fresh salmon on rice" },
            { id: 403, name: "Miso Soup", price: 90, description: "Traditional Japanese soup" },
            { id: 404, name: "Edamame", price: 70, description: "Steamed soybeans with salt" }
        ]
    },
    {
        id: 5,
        name: "Mediterranean Delight",
        cuisine: "Mediterranean, Healthy, Grill",
        rating: 4.4,
        reviews: 400,
        image: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        deliveryTime: "30-40 min",
        price: "₹230",
        menu: [
            { id: 501, name: "Chicken Shawarma", price: 230, description: "Grilled chicken in pita bread" },
            { id: 502, name: "Hummus Plate", price: 150, description: "Chickpea dip with pita" },
            { id: 503, name: "Greek Salad", price: 180, description: "Fresh vegetables with feta" },
            { id: 504, name: "Baklava", price: 120, description: "Sweet pastry with nuts" }
        ]
    },
    {
        id: 6,
        name: "Dessert Palace",
        cuisine: "Desserts, Bakery, Ice Cream",
        rating: 4.8,
        reviews: 300,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        deliveryTime: "15-25 min",
        price: "₹150",
        menu: [
            { id: 601, name: "Chocolate Cake", price: 150, description: "Rich chocolate cake" },
            { id: 602, name: "Vanilla Ice Cream", price: 90, description: "Creamy vanilla ice cream" },
            { id: 603, name: "Fruit Tart", price: 120, description: "Pastry with fresh fruits" },
            { id: 604, name: "Hot Chocolate", price: 100, description: "Warm chocolate drink" }
        ]
    },
    {
        id: 7,
        name: "Taco Fiesta",
        cuisine: "Mexican, Tacos, Burritos",
        rating: 4.2,
        reviews: 280,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        deliveryTime: "25-35 min",
        price: "₹200",
        menu: [
            { id: 701, name: "Beef Tacos", price: 200, description: "Seasoned beef in crispy shells" },
            { id: 702, name: "Vegetable Burrito", price: 180, description: "Large wrap with veggies" },
            { id: 703, name: "Guacamole", price: 100, description: "Fresh avocado dip" },
            { id: 704, name: "Churros", price: 120, description: "Fried dough with cinnamon" }
        ]
    },
    {
        id: 8,
        name: "Steak House",
        cuisine: "American, Steak, BBQ",
        rating: 4.6,
        reviews: 420,
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        deliveryTime: "40-50 min",
        price: "₹300",
        menu: [
            { id: 801, name: "Ribeye Steak", price: 300, description: "Juicy ribeye with herbs" },
            { id: 802, name: "Grilled Salmon", price: 280, description: "Fresh salmon fillet" },
            { id: 803, name: "Mashed Potatoes", price: 90, description: "Creamy mashed potatoes" },
            { id: 804, name: "Ceasar Salad", price: 120, description: "Fresh greens with dressing" }
        ]
    },
    {
        id: 9,
        name: "Chinese Wok",
        cuisine: "Chinese, Noodles, Fried Rice",
        rating: 4.3,
        reviews: 380,
        image: "http://t1.gstatic.com/images?q=tbn:ANd9GcRgBWNsnloS5kflwpS9060VCUZDULSTYg1AtD8k4T3CeLJtYig_8itQRoT1x8UYCN8PU-cGlZu2",
        deliveryTime: "30-40 min",
        price: "₹242",
        menu: [
            { id: 901, name: "Chicken Fried Rice", price: 242, description: "Stir-fried rice with chicken" },
            { id: 902, name: "Vegetable Noodles", price: 200, description: "Stir-fried noodles with veggies" },
            { id: 903, name: "Spring Rolls", price: 120, description: "Crispy vegetable rolls" },
            { id: 904, name: "Hot & Sour Soup", price: 100, description: "Spicy and tangy soup" }
        ]
    },
    {
        id: 10,
        name: "Pizza Paradise",
        cuisine: "Italian, Pizza, Garlic Bread",
        rating: 4.5,
        reviews: 520,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        deliveryTime: "25-35 min",
        price: "₹150",
        menu: [
            { id: 1001, name: "Pepperoni Pizza", price: 150, description: "Classic pizza with pepperoni" },
            { id: 1002, name: "Veggie Supreme", price: 180, description: "Pizza with assorted vegetables" },
            { id: 1003, name: "Garlic Breadsticks", price: 100, description: "Soft bread with garlic butter" },
            { id: 1004, name: "Coke", price: 60, description: "Cold refreshing drink" }
        ]
    }
];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const loginPage = document.getElementById('loginPage');
const dashboard = document.getElementById('dashboard');
const restaurantGrid = document.getElementById('restaurantGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const rememberMe = document.getElementById('rememberMe');
const logoutBtn = document.getElementById('logoutBtn');
const userMenu = document.querySelector('.user-menu');
const navLinks = document.querySelectorAll('.nav-link');
const locationSelect = document.getElementById('locationSelect');

// Modal Elements
const orderModal = document.getElementById('orderModal');
const confirmationModal = document.getElementById('confirmationModal');
const modalRestaurantName = document.getElementById('modalRestaurantName');
const menuItems = document.getElementById('menuItems');
const orderItems = document.getElementById('orderItems');
const orderTotal = document.getElementById('orderTotal');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const closeModalBtn = document.querySelector('.close-modal');
const closeConfirmationBtn = document.getElementById('closeConfirmationBtn');
const orderId = document.getElementById('orderId');

// App State
let currentRestaurants = [];
let displayedCount = 6;
let isLoggedIn = false;
let currentOrder = {
    restaurant: null,
    items: [],
    total: 0
};

// Initialize the application
function init() {
    checkRememberedLogin();
    loadRestaurants();
    setupEventListeners();
}

// Check if user was previously logged in
function checkRememberedLogin() {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('email').value = rememberedEmail;
        rememberMe.checked = true;
    }
}

// Load restaurants into the grid
function loadRestaurants() {
    currentRestaurants = [...restaurants];
    renderRestaurants();
}

// Render restaurants to the grid
function renderRestaurants() {
    restaurantGrid.innerHTML = '';
    
    const restaurantsToShow = currentRestaurants.slice(0, displayedCount);
    
    restaurantsToShow.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        restaurantGrid.appendChild(card);
    });
    
    // Show/hide load more button
    if (displayedCount >= currentRestaurants.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Create a restaurant card element
function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-img">
        <div class="restaurant-info">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.cuisine}</p>
            <div class="rating">
                <i class="fas fa-star"></i>
                <span>${restaurant.rating} (${restaurant.reviews}+ ratings)</span>
            </div>
            <div class="restaurant-details">
                <span>${restaurant.deliveryTime}</span> • <span>${restaurant.price}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        openOrderModal(restaurant);
    });
    
    return card;
}

// Open order modal for a restaurant
function openOrderModal(restaurant) {
    if (!isLoggedIn) {
        showToast('Please login to order food', 'error');
        return;
    }
    
    currentOrder = {
        restaurant: restaurant,
        items: [],
        total: 0
    };
    
    modalRestaurantName.textContent = restaurant.name;
    renderMenuItems(restaurant.menu);
    updateOrderSummary();
    
    orderModal.style.display = 'block';
}

// Render menu items in the modal
function renderMenuItems(menu) {
    menuItems.innerHTML = '';
    
    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-info">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-description">${item.description}</div>
                <div class="menu-item-price">₹${item.price}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity" data-id="${item.id}">0</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
        `;
        
        menuItems.appendChild(menuItem);
    });
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            addItemToOrder(itemId);
        });
    });
    
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            removeItemFromOrder(itemId);
        });
    });
}

// Add item to order
function addItemToOrder(itemId) {
    const restaurant = currentOrder.restaurant;
    const menuItem = restaurant.menu.find(item => item.id === itemId);
    
    if (!menuItem) return;
    
    const existingItem = currentOrder.items.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        currentOrder.items.push({
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1
        });
    }
    
    updateQuantityDisplay(itemId);
    updateOrderSummary();
}

// Remove item from order
function removeItemFromOrder(itemId) {
    const existingItemIndex = currentOrder.items.findIndex(item => item.id === itemId);
    
    if (existingItemIndex === -1) return;
    
    const existingItem = currentOrder.items[existingItemIndex];
    
    if (existingItem.quantity > 1) {
        existingItem.quantity--;
    } else {
        currentOrder.items.splice(existingItemIndex, 1);
    }
    
    updateQuantityDisplay(itemId);
    updateOrderSummary();
}

// Update quantity display for an item
function updateQuantityDisplay(itemId) {
    const quantityElement = document.querySelector(`.quantity[data-id="${itemId}"]`);
    const item = currentOrder.items.find(item => item.id === itemId);
    
    if (quantityElement) {
        quantityElement.textContent = item ? item.quantity : '0';
    }
}

// Update order summary
function updateOrderSummary() {
    orderItems.innerHTML = '';
    
    if (currentOrder.items.length === 0) {
        orderItems.innerHTML = '<p class="empty-order">Your order is empty</p>';
        orderTotal.textContent = '₹0';
        placeOrderBtn.disabled = true;
        return;
    }
    
    let total = 0;
    
    currentOrder.items.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>₹${itemTotal}</span>
        `;
        
        orderItems.appendChild(orderItem);
    });
    
    currentOrder.total = total;
    orderTotal.textContent = `₹${total}`;
    placeOrderBtn.disabled = false;
}

// Place order
function placeOrder() {
    // Generate random order ID
    const randomId = 'ZMTO-' + Math.floor(10000 + Math.random() * 90000);
    orderId.textContent = randomId;
    
    // Show confirmation modal
    orderModal.style.display = 'none';
    confirmationModal.style.display = 'block';
    
    // Reset order
    currentOrder = {
        restaurant: null,
        items: [],
        total: 0
    };
}

// Filter restaurants based on search input
function filterRestaurants() {
    const searchText = searchInput.value.toLowerCase();
    
    if (searchText.trim() === '') {
        currentRestaurants = [...restaurants];
    } else {
        currentRestaurants = restaurants.filter(restaurant => 
            restaurant.name.toLowerCase().includes(searchText) || 
            restaurant.cuisine.toLowerCase().includes(searchText)
        );
    }
    
    displayedCount = 6;
    renderRestaurants();
}

// Show toast notification
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'check-circle' : 'exclamation-circle';
    
    toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <div class="toast-content">
            <div class="toast-title">${type === 'success' ? 'Success' : 'Error'}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Remove toast after animation completes
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const loginBtn = this.querySelector('.login-btn span');
        const btnLoading = this.querySelector('.btn-loading');
        
        // Show loading state
        loginBtn.style.display = 'none';
        btnLoading.style.display = 'flex';
        
        // Simulate API call
        setTimeout(function() {
            if (email === 'zomato@2025' && password === 'zomato') {
                // Save email if remember me is checked
                if (rememberMe.checked) {
                    localStorage.setItem('rememberedEmail', email);
                } else {
                    localStorage.removeItem('rememberedEmail');
                }
                
                // Hide login and show dashboard
                loginPage.style.display = 'none';
                dashboard.style.display = 'block';
                userMenu.style.display = 'block';
                isLoggedIn = true;
                
                showToast('Login successful!', 'success');
            } else {
                showToast('Invalid credentials. Please try again.', 'error');
                
                // Reset loading state
                loginBtn.style.display = 'block';
                btnLoading.style.display = 'none';
            }
        }, 1500);
    });
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            passwordInput.type = 'password';
            this.innerHTML = '<i class="fas fa-eye"></i>';
        }
    });
    
    // Search functionality
    searchBtn.addEventListener('click', filterRestaurants);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterRestaurants();
        }
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Apply filter based on button text
            const filterType = this.textContent.toLowerCase();
            
            if (filterType === 'all') {
                currentRestaurants = [...restaurants];
            } else if (filterType === 'delivery') {
                currentRestaurants = restaurants.filter(r => parseInt(r.deliveryTime) <= 40);
            } else if (filterType === 'dine-out') {
                currentRestaurants = restaurants.filter(r => parseInt(r.deliveryTime) > 40);
            } else if (filterType.includes('rating')) {
                currentRestaurants = restaurants.filter(r => r.rating >= 4.0);
            }
            
            displayedCount = 6;
            renderRestaurants();
        });
    });
    
    // Load more restaurants
    loadMoreBtn.addEventListener('click', function() {
        displayedCount += 3;
        renderRestaurants();
        
        // Smooth scroll to newly loaded items
        restaurantGrid.lastElementChild.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    });
    
    // Logout functionality
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isLoggedIn = false;
        dashboard.style.display = 'none';
        loginPage.style.display = 'flex';
        userMenu.style.display = 'none';
        showToast('You have been logged out', 'success');
    });
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (!isLoggedIn) {
                showToast('Please login to access this feature', 'error');
            } else {
                showToast(`Navigating to ${this.textContent}`, 'success');
            }
        });
    });
    
    locationSelect.addEventListener('change', function() {
        showToast(`Location changed to ${this.options[this.selectedIndex].text}`, 'success');
    });

    document.querySelector('.google-btn').addEventListener('click', function() {
        showToast('Google login clicked', 'success');
    });
    
    document.querySelector('.facebook-btn').addEventListener('click', function() {
        showToast('Facebook login clicked', 'success');
    });

    closeModalBtn.addEventListener('click', function() {
        orderModal.style.display = 'none';
    });
    
    placeOrderBtn.addEventListener('click', placeOrder);
    
    closeConfirmationBtn.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });
    

    window.addEventListener('click', function(e) {
        if (e.target === orderModal) {
            orderModal.style.display = 'none';
        }
        if (e.target === confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
