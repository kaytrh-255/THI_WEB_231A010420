// =====================================================
// MỤC 3.1: THƯ VIỆN ẢNH ĐƠN GIẢN
// =====================================================

// Lấy tất cả các thumbnails và ảnh lớn
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');

// Dữ liệu ảnh (gradient backgrounds)
const images = [
    {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        text: 'Góc cạnh hoàn hảo'
    },
    {
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        text: 'Chi tiết tinh xảo'
    },
    {
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        text: 'Thiết kế sang trọng'
    },
    {
        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        text: 'Trải nghiệm đỉnh cao'
    }
];

// Hàm cập nhật ảnh lớn
function updateMainImage(index) {
    const selectedImage = images[index];

    mainImage.innerHTML = `
        <div class="gallery-placeholder" style="background: ${selectedImage.background};">
            <span>${selectedImage.text}</span>
        </div>
    `;

    // Cập nhật trạng thái active cho thumbnails
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
}

// Thêm sự kiện click cho mỗi thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateMainImage(index);
    });
});


// =====================================================
// MỤC 3.2: SCROLL EFFECT CHO HEADER
// =====================================================

const header = document.getElementById('header');

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);


// =====================================================
// MỤC 3.3: FADE-IN ANIMATION VỚI INTERSECTION OBSERVER
// =====================================================

const fadeElements = document.querySelectorAll('.fade-in-element');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observerCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);

            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

fadeElements.forEach(element => observer.observe(element));


// =====================================================
// BONUS: SMOOTH SCROLL CHO NAVIGATION
// =====================================================

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// =====================================================
// BONUS: HAMBURGER MENU (CHO MOBILE)
// =====================================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Đóng menu khi click vào link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}


// =====================================================
// BONUS: CTA BUTTON INTERACTION
// =====================================================

const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('Cảm ơn bạn đã quan tâm đến sản phẩm Tai Nghe Marshall!\n\nChức năng mua hàng sẽ được cập nhật sớm.');
    });
}


// =====================================================
// CONSOLE LOG XÁC NHẬN
// =====================================================

console.log('✅ JavaScript đã được tải thành công!');
console.log('📸 Gallery: ' + thumbnails.length + ' thumbnails được tìm thấy');
console.log('🎨 Feature Cards: ' + fadeElements.length + ' phần tử sẽ có animation');
console.log('🎯 Intersection Observer đã được khởi tạo');
