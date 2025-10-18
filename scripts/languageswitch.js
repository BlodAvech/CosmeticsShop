document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");

  const translations = {
    en: {
      title: "Welcome To Cosmetics Shop",
      subtitle: "Best beauty products for your style 🌸",
      home: "Home",
      products: "Products",
      sale: "Sale",
      favorites: "Favorites",
      blog: "Blog",
      contact: "Contact",
      profile: "Profile",
      cart: "Cart",
      categories: "Categories",
      makeup: "Makeup",
      skincare: "Skincare",
      haircare: "Haircare",
      perfume: "Perfume",
    },
    ru: {
      title: "Добро пожаловать в магазин косметики",
      subtitle: "Лучшие косметические товары для твоего стиля 🌸",
      home: "Главная",
      products: "Продукты",
      sale: "Скидки",
      favorites: "Избранное",
      blog: "Блог",
      contact: "Контакты",
      profile: "Профиль",
      cart: "Корзина",
      categories: "Категории",
      makeup: "Макияж",
      skincare: "Уход за кожей",
      haircare: "Уход за волосами",
      perfume: "Парфюмерия",
    },
    kz: {
      title: "Косметика дүкеніне қош келдіңіз",
      subtitle: "Сіздің сұлулығыңыз үшін ең жақсы өнімдер 🌸",
      home: "Басты бет",
      products: "Өнімдер",
      sale: "Жеңілдіктер",
      favorites: "Таңдаулылар",
      blog: "Блог",
      contact: "Байланыс",
      profile: "Профиль",
      cart: "Себет",
      categories: "Санаттар",
      makeup: "Бояу құралдары",
      skincare: "Тері күтімі",
      haircare: "Шаш күтімі",
      perfume: "Хош иіс",
    },
  };

  function changeLanguage(lang) {
    document.querySelectorAll("[data-lang-key]").forEach((el) => {
      const key = el.getAttribute("data-lang-key");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  langSelect.addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    changeLanguage(selectedLang);
  });
});
