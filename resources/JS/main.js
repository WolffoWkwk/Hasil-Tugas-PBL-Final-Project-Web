// Sample data
const sampleAuctions = [
  {
    id: "1",
    title: "iPhone 14 Pro Max 256GB Space Black - Kondisi Seperti Baru",
    image:
      "https://images.unsplash.com/photo-1640948612546-3b9e29c23e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgwMDY3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    currentBid: 12500000,
    minimumBid: 13000000,
    bidIncrement: 500000,
    buyNowPrice: 18000000,
    timeLeft: 3600,
    endTime: new Date(Date.now() + 3600000),
    bidCount: 24,
    watchers: 85,
    category: "Elektronik",
    condition: "Seperti Baru",
    location: "Jakarta Selatan",
    sellerId: "seller1",
    sellerName: "TechStore Jakarta",
    description:
      "iPhone 14 Pro Max dalam kondisi sangat baik, lengkap dengan box dan aksesoris.",
    status: "active",
    isLiked: true,
  },
  {
    id: "2",
    title: "Rolex Submariner Date 40mm - Authentic dengan Box & Papers",
    image:
      "https://images.unsplash.com/photo-1636639821444-479368c96514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGpld2Vscnl8ZW58MXx8fHwxNzU4MDE1NjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    currentBid: 185000000,
    minimumBid: 190000000,
    bidIncrement: 5000000,
    timeLeft: 86400,
    endTime: new Date(Date.now() + 86400000),
    bidCount: 8,
    watchers: 156,
    category: "Perhiasan & Aksesoris",
    condition: "Baik",
    location: "Surabaya",
    sellerId: "seller2",
    sellerName: "Luxury Timepieces",
    description:
      "Rolex Submariner asli dengan sertifikat, box, dan papers lengkap.",
    status: "active",
  },
  {
    id: "3",
    title: "Kamera Vintage Leica M3 - Collector Item Rare",
    image:
      "https://images.unsplash.com/photo-1566247284891-6e2e4fce0e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FtZXJhJTIwY29sbGVjdG9yfGVufDF8fHx8MTc1ODExNzcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    currentBid: 25000000,
    minimumBid: 26000000,
    bidIncrement: 1000000,
    timeLeft: 172800,
    endTime: new Date(Date.now() + 172800000),
    bidCount: 12,
    watchers: 67,
    category: "Antik & Koleksi",
    condition: "Baik",
    location: "Bandung",
    sellerId: "seller3",
    sellerName: "Vintage Camera Co",
    description:
      "Leica M3 dalam kondisi working, sangat langka untuk kolektor.",
    status: "active",
  },
  {
    id: "4",
    title: "Gaming Laptop ASUS ROG Zephyrus G14 RTX 4060",
    image:
      "https://images.unsplash.com/photo-1606625000171-fa7d471da28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTgwOTA5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    currentBid: 18500000,
    minimumBid: 19000000,
    bidIncrement: 500000,
    buyNowPrice: 25000000,
    timeLeft: 259200,
    endTime: new Date(Date.now() + 259200000),
    bidCount: 18,
    watchers: 94,
    category: "Elektronik",
    condition: "Seperti Baru",
    location: "Jakarta Utara",
    sellerId: "seller4",
    sellerName: "Gaming Corner",
    description: "Laptop gaming high-end untuk gaming dan content creation.",
    status: "active",
  },
  {
    id: "5",
    title: "Louis Vuitton Neverfull MM Monogram Canvas",
    image:
      "https://images.unsplash.com/photo-1559563458-527698bf5295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJhZyUyMGZhc2hpb258ZW58MXx8fHwxNzU4MTE3NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    currentBid: 12000000,
    minimumBid: 12500000,
    bidIncrement: 500000,
    timeLeft: 432000,
    endTime: new Date(Date.now() + 432000000),
    bidCount: 6,
    watchers: 43,
    category: "Fashion",
    condition: "Baik",
    location: "Jakarta Pusat",
    sellerId: "seller5",
    sellerName: "Luxury Bags ID",
    description:
      "Tas Louis Vuitton authentic dengan dustbag dan authenticity card.",
    status: "active",
  },
  {
    id: "6",
    title: "Antique Chinese Porcelain Vase - Ming Dynasty Style",
    image:
      "https://images.unsplash.com/photo-1755452541301-a95736f282c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWN0aWJsZSUyMGFudGlxdWUlMjBhcnR8ZW58MXx8fHwxNzU4MTE3NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    currentBid: 8500000,
    minimumBid: 9000000,
    bidIncrement: 500000,
    timeLeft: 1800,
    endTime: new Date(Date.now() + 1800000),
    bidCount: 15,
    watchers: 28,
    category: "Antik & Koleksi",
    condition: "Baik",
    location: "Yogyakarta",
    sellerId: "seller6",
    sellerName: "Antique Collector",
    description:
      "Vas porselen antik gaya Ming Dynasty, piece yang sangat langka.",
    status: "winner",
  },
];

// Application state
let currentView = "home";
let selectedItem = null;
let isBidModalOpen = false;
let notifications = [];
let searchQuery = "";
let viewType = "grid";
let isMenuOpen = false;
let auctions = [...sampleAuctions];

// Format price to Indonesian Rupiah
function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

// Set current view
function setCurrentView(view) {
  // Hide all views
  document.querySelectorAll(".view").forEach((el) => {
    el.classList.add("hidden");
  });

  // Show selected view
  document.getElementById(`${view}-view`).classList.remove("hidden");
  currentView = view;

  // Update content based on view
  if (view === "home") {
    renderFeaturedAuctions();
  } else if (view === "listing") {
    renderAuctions();
  } else if (view === "dashboard") {
    setDashboardTab("bids");
  } else if (view === "admin") {
    renderAdminActivities();
  }
}

// Render featured auctions on home page
function renderFeaturedAuctions() {
  const container = document.getElementById("featured-auctions");
  container.innerHTML = "";

  auctions.slice(0, 6).forEach((item) => {
    const card = createAuctionCard(item);
    container.appendChild(card);
  });
}

// Render auctions on listing page
function renderAuctions() {
  const container = document.getElementById("auction-grid");
  container.innerHTML = "";

  // Update auction count
  document.getElementById(
    "auction-count"
  ).textContent = `${auctions.length} produk`;

  auctions.forEach((item) => {
    const card = createAuctionCard(item);
    if (viewType === "list") {
      card.classList.add("flex", "flex-row", "overflow-hidden");
    }
    container.appendChild(card);
  });
}

// Create an auction card element
function createAuctionCard(item) {
  const card = document.createElement("div");
  card.className = `card auction-card ${
    viewType === "list" ? "flex flex-row" : ""
  }`;
  card.innerHTML = `
                <img src="${item.image}" alt="${
    item.title
  }" class="auction-image ${viewType === "list" ? "w-32 h-32" : ""}">
                <div class="auction-info ${
                  viewType === "list" ? "flex-1" : ""
                }">
                    <h3 class="auction-title">${item.title}</h3>
                    <div class="auction-price">${formatPrice(
                      item.currentBid
                    )}</div>
                    <div class="auction-meta">
                        <span>${item.bidCount} bid</span>
                        <span>${item.watchers} memantau</span>
                    </div>
                    <div class="auction-actions">
                        <button class="btn btn-primary btn-sm flex-1" onclick="openBidModalForItem('${
                          item.id
                        }')">Bid</button>
                        <button class="btn btn-ghost btn-sm" onclick="toggleItemLike('${
                          item.id
                        }')">
                            <i class="fas fa-heart ${
                              item.isLiked ? "text-red-500" : ""
                            }"></i>
                        </button>
                    </div>
                </div>
            `;
  return card;
}

// Open bid modal for a specific item
function openBidModalForItem(itemId) {
  selectedItem = auctions.find((item) => item.id === itemId);
  openBidModal();
}

// Open bid modal
function openBidModal() {
  if (!selectedItem) return;

  document.getElementById("bid-modal").classList.remove("hidden");
  document.getElementById("modal-item-title").textContent = selectedItem.title;
  document.getElementById("modal-current-bid").textContent = formatPrice(
    selectedItem.currentBid
  );
  document.getElementById("modal-minimum-bid").textContent = formatPrice(
    selectedItem.minimumBid
  );
  document.getElementById("bid-amount").value = selectedItem.minimumBid;
  document.getElementById("bid-amount").min = selectedItem.minimumBid;
  document.getElementById("bid-amount").step = selectedItem.bidIncrement;
  isBidModalOpen = true;
}

// Close bid modal
function closeBidModal() {
  document.getElementById("bid-modal").classList.add("hidden");
  isBidModalOpen = false;
}

// Place a bid
function placeBid() {
  if (!selectedItem) return;

  const bidAmount = parseInt(document.getElementById("bid-amount").value);

  if (bidAmount < selectedItem.minimumBid) {
    showToast("Bid harus sama atau lebih tinggi dari bid minimum", "error");
    return;
  }

  // Update current bid (in a real app, this would be sent to a server)
  selectedItem.currentBid = bidAmount;
  selectedItem.bidCount += 1;

  showToast(`Bid berhasil dipasang: ${formatPrice(bidAmount)}`, "success");

  // Add winning notification after a delay
  setTimeout(() => {
    addNotification({
      id: Date.now().toString(),
      type: "winning",
      title: "Anda Memimpin!",
      description: `Anda memiliki bid tertinggi untuk ${selectedItem.title}`,
      duration: 5000,
    });
  }, 1000);

  closeBidModal();
}

// Toggle like status for an item
function toggleItemLike(itemId) {
  const item = auctions.find((item) => item.id === itemId);
  if (item) {
    item.isLiked = !item.isLiked;
    showToast(
      item.isLiked ? "Ditambahkan ke wishlist" : "Dihapus dari wishlist",
      "success"
    );
    renderAuctions();
    renderFeaturedAuctions();
  }
}

// Set view type (grid or list)
function setViewType(type) {
  viewType = type;

  // Update button states
  document
    .getElementById("grid-view-btn")
    .classList.toggle("btn-primary", type === "grid");
  document
    .getElementById("grid-view-btn")
    .classList.toggle("btn-outline", type !== "grid");
  document
    .getElementById("list-view-btn")
    .classList.toggle("btn-primary", type === "list");
  document
    .getElementById("list-view-btn")
    .classList.toggle("btn-outline", type !== "list");

  renderAuctions();
}

// Set dashboard tab
function setDashboardTab(tab) {
  // Hide all tabs
  document.querySelectorAll(".tab-content").forEach((el) => {
    el.classList.remove("active");
  });
  document.querySelectorAll(".tab-trigger").forEach((el) => {
    el.classList.remove("active");
  });

  // Show selected tab
  document.getElementById(`${tab}-tab`).classList.add("active");
  document
    .querySelector(
      `.tab-trigger:nth-child(${["bids", "selling", "won"].indexOf(tab) + 1})`
    )
    .classList.add("active");

  // Render content for the tab
  if (tab === "bids") {
    renderActiveBids();
  }
}

// Render active bids in dashboard
function renderActiveBids() {
  const container = document.getElementById("active-bids");
  container.innerHTML = "";

  auctions.slice(0, 3).forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
                    <div class="card-content">
                        <div class="flex gap-4">
                            <img src="${item.image}" alt="${
      item.title
    }" class="w-20 h-20 rounded-lg object-cover flex-shrink-0">
                            <div class="flex-1">
                                <h4 class="font-medium mb-1">${item.title}</h4>
                                <div class="text-sm text-muted mb-2">Bid Anda: ${formatPrice(
                                  item.currentBid - item.bidIncrement
                                )}</div>
                                <div class="flex items-center justify-between">
                                    <div class="text-sm">
                                        <span style="color: var(--primary); font-weight: 500;">Tertinggi: ${formatPrice(
                                          item.currentBid
                                        )}</span>
                                    </div>
                                    <div class="countdown">
                                        <div class="countdown-item">
                                            <div class="countdown-value">01</div>
                                            <div class="countdown-label">Hari</div>
                                        </div>
                                        <div class="countdown-item">
                                            <div class="countdown-value">12</div>
                                            <div class="countdown-label">Jam</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <button class="btn btn-primary btn-sm" onclick="openBidModalForItem('${
                                  item.id
                                }')">Naikkan Bid</button>
                                <button class="btn btn-outline btn-sm" onclick="showProductDetail('${
                                  item.id
                                }')">Detail</button>
                            </div>
                        </div>
                    </div>
                `;
    container.appendChild(card);
  });
}

// Show product detail
function showProductDetail(itemId) {
  selectedItem = auctions.find((item) => item.id === itemId);

  // Update detail view with item data
  document.getElementById("detail-category").textContent =
    selectedItem.category;
  document.getElementById("detail-title").textContent = selectedItem.title;
  document.getElementById("detail-category-badge").textContent =
    selectedItem.category;
  document.getElementById("detail-condition").textContent =
    selectedItem.condition;
  document.getElementById("detail-status").textContent =
    selectedItem.status === "active" ? "Aktif" : "Berakhir";
  document.getElementById("detail-title-text").textContent = selectedItem.title;
  document.getElementById("detail-description").textContent =
    selectedItem.description;
  document.getElementById(
    "detail-watchers"
  ).textContent = `${selectedItem.watchers} memantau`;
  document.getElementById("detail-current-bid").textContent = formatPrice(
    selectedItem.currentBid
  );
  document.getElementById("detail-bid-count").textContent =
    selectedItem.bidCount;
  document.getElementById("detail-minimum-bid").textContent = formatPrice(
    selectedItem.minimumBid
  );
  document.getElementById("detail-seller").textContent =
    selectedItem.sellerName;
  document.getElementById("detail-location").textContent =
    selectedItem.location;
  document.getElementById("detail-main-image").src = selectedItem.image;

  // Update buy now button
  const buyNowBtn = document.getElementById("buy-now-btn");
  const buyNowPrice = document.getElementById("buy-now-price");
  if (selectedItem.buyNowPrice) {
    buyNowBtn.classList.remove("hidden");
    buyNowPrice.textContent = formatPrice(selectedItem.buyNowPrice);
  } else {
    buyNowBtn.classList.add("hidden");
  }

  // Update like button
  const likeIcon = document.getElementById("like-icon");
  likeIcon.classList.toggle("text-red-500", selectedItem.isLiked);

  // Render bid history
  renderBidHistory();

  setCurrentView("product-detail");
}

// Render bid history
function renderBidHistory() {
  if (!selectedItem) return;

  const container = document.getElementById("bid-history");
  container.innerHTML = "";

  const bidHistory = [
    {
      bidder: "User***123",
      amount: selectedItem.currentBid,
      time: "2 menit lalu",
      isWinning: true,
    },
    {
      bidder: "Bid***789",
      amount: selectedItem.currentBid - selectedItem.bidIncrement,
      time: "5 menit lalu",
    },
    {
      bidder: "Tel***456",
      amount: selectedItem.currentBid - selectedItem.bidIncrement * 2,
      time: "8 menit lalu",
    },
  ];

  bidHistory.forEach((bid) => {
    const bidElement = document.createElement("div");
    bidElement.className = `flex items-center justify-between p-3 rounded-lg ${
      bid.isWinning ? "bg-green-50 border border-green-200" : "bg-gray-50"
    }`;
    bidElement.innerHTML = `
                    <div>
                        <div class="font-medium">${bid.bidder}</div>
                        <div class="text-sm text-muted">${bid.time}</div>
                    </div>
                    <div class="text-right">
                        <div class="${
                          bid.isWinning
                            ? "text-green-600 font-bold"
                            : "font-bold"
                        }">${formatPrice(bid.amount)}</div>
                        ${
                          bid.isWinning
                            ? '<span class="badge badge-success text-xs">Tertinggi</span>'
                            : ""
                        }
                    </div>
                `;
    container.appendChild(bidElement);
  });
}

// Toggle like in product detail
function toggleLike() {
  if (!selectedItem) return;

  selectedItem.isLiked = !selectedItem.isLiked;
  const likeIcon = document.getElementById("like-icon");
  likeIcon.classList.toggle("text-red-500", selectedItem.isLiked);
  showToast(
    selectedItem.isLiked ? "Ditambahkan ke wishlist" : "Dihapus dari wishlist",
    "success"
  );
}

// Render admin activities
function renderAdminActivities() {
  const container = document.getElementById("recent-activities");
  container.innerHTML = "";

  const activities = [
    {
      action: "Lelang baru dibuat",
      user: "TechStore Jakarta",
      item: "iPhone 14 Pro Max",
      time: "5 menit lalu",
    },
    {
      action: "Bid tertinggi",
      user: "User***123",
      item: "Rolex Submariner",
      time: "10 menit lalu",
    },
    {
      action: "Lelang berakhir",
      user: "Vintage Camera Co",
      item: "Leica M3",
      time: "15 menit lalu",
    },
    {
      action: "Pembayaran diterima",
      user: "Luxury Bags ID",
      item: "Louis Vuitton Neverfull",
      time: "30 menit lalu",
    },
    {
      action: "User baru registrasi",
      user: "NewUser789",
      item: "",
      time: "1 jam lalu",
    },
  ];

  activities.forEach((activity) => {
    const activityElement = document.createElement("div");
    activityElement.className =
      "flex items-center justify-between p-3 bg-gray-50 rounded-lg";
    activityElement.innerHTML = `
                    <div>
                        <div class="font-medium">${activity.action}</div>
                        <div class="text-sm text-muted">${activity.user} ${
      activity.item ? `• ${activity.item}` : ""
    }</div>
                    </div>
                    <div class="text-sm text-muted">${activity.time}</div>
                `;
    container.appendChild(activityElement);
  });
}

// Show toast notification
function showToast(message, type = "info") {
  const toastContainer = document.getElementById("toast-container");
  const toastId = "toast-" + Date.now();

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.id = toastId;
  toast.innerHTML = `
                <div class="toast-icon">
                    <i class="fas fa-${
                      type === "success"
                        ? "check-circle"
                        : type === "error"
                        ? "exclamation-circle"
                        : type === "warning"
                        ? "exclamation-triangle"
                        : "info-circle"
                    }"></i>
                </div>
                <div class="toast-content">
                    <div class="toast-description">${message}</div>
                </div>
                <button class="toast-close" onclick="dismissToast('${toastId}')">
                    <i class="fas fa-times"></i>
                </button>
            `;

  toastContainer.appendChild(toast);

  // Auto dismiss after 5 seconds
  setTimeout(() => {
    dismissToast(toastId);
  }, 5000);
}

// Dismiss toast
function dismissToast(toastId) {
  const toast = document.getElementById(toastId);
  if (toast) {
    toast.remove();
  }
}

// Add notification
function addNotification(notification) {
  notifications.push(notification);
  updateNotificationBadge();

  // Show toast for the notification
  showToast(notification.description, notification.type || "info");
}

// Update notification badge
function updateNotificationBadge() {
  const badge = document.getElementById("notification-badge");
  if (notifications.length > 0) {
    badge.textContent = notifications.length;
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

// Toggle notifications (placeholder)
function toggleNotifications() {
  showToast("Fitur notifikasi akan segera hadir", "info");
}

// Clear filters
function clearFilters() {
  document.getElementById("category-filter").value = "Semua Kategori";
  document.getElementById("price-min").value = "";
  document.getElementById("price-max").value = "";
  document.getElementById("location-filter").value = "";
  document.getElementById("sort-by").value = "ending-soon";

  // Reset checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  showToast("Filter telah dihapus", "success");
}

// Open mobile menu
function openMobileMenu() {
  document.getElementById("mobile-menu").classList.add("open");
  document.getElementById("mobile-menu-overlay").classList.add("open");
  isMenuOpen = true;
}

// Close mobile menu
function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
  document.getElementById("mobile-menu-overlay").classList.remove("open");
  isMenuOpen = false;
}

// Handle auction form submission
document
  .getElementById("auction-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    showToast("Lelang berhasil dibuat! Menunggu review admin.", "success");
    setCurrentView("dashboard");
  });

// Initialize the application
function init() {
  // Set initial view
  setCurrentView("home");

  // Add demo notifications
  setTimeout(() => {
    addNotification({
      id: "1",
      type: "outbid",
      title: "Anda Tertinggal!",
      description: "Bid Anda untuk iPhone 14 Pro Max telah dikalahkan",
      duration: 8000,
    });

    addNotification({
      id: "2",
      type: "winning",
      title: "Anda Memimpin!",
      description: "Anda memiliki bid tertinggi untuk Gaming Laptop ASUS ROG",
      duration: 6000,
    });
  }, 2000);
}

// Start the application when the page loads
window.addEventListener("DOMContentLoaded", init);
