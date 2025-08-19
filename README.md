
# E-Commerce Store

> A modern React SPA for e‑commerce: home, product browsing, cart, signup, login, privacy policy, and contact. Responsive, accessible, and ready to extend.


## 🔗 Demo / Preview

* Live: [Vercel Deployment](https://e-commerce-store-2xzmgzp6l-lethanhan01s-projects.vercel.app/)

---


## ✨ Features

* 🏠 Home: Intro, featured products, responsive hero section
* 🔎 Product search: Filter by name/category/price, sorting
* 🧺 Cart: Add/remove/update quantities, persistent state
* 🔐 Auth forms: Signup/Login with validation and error messaging
* 📄 Privacy Policy: Dedicated, well-structured page
* 📬 Contact: Contact form, company info, FAQ, social links
* 🖥️ Responsive design: Desktop, tablet, and mobile ready
* 🎨 Modern UI/UX: Gradients, animations, typography, hover states
* 🧪 Testing: 20+ test cases with React Testing Library + Jest

---


## 🧱 Tech Stack & Architecture

* Frontend: React 19, React Router 6, Material-UI, CSS3 (component-scoped)
* State: React Hooks (useState, useEffect), Context API
* Testing: React Testing Library, Jest
* Build: Create React App
* Deployment: Vercel


## 🚀 Quick Start

### 1) Requirements

* Node.js >= 18
* npm

### 2) Clone the repository

```bash
git clone https://github.com/lethanhan01/E-Commerce-Store.git
cd E-Commerce-Store
```

### 3) Install & run (development)

```bash
npm install
npm start
```

### 4) Build (production)

```bash
npm run build
```

### 5) Run tests

```bash
npm test
```

---


## 🗂️ Project Structure

```text
E-Commerce-Store/
├─ public/           # Static assets, favicon, logos
├─ src/
│  ├─ App.js         # Main router
│  ├─ index.js       # Entry point
│  ├─ Components/
│  │   ├─ Home.jsx, Contact.jsx, Privacy.jsx, Signup.jsx, Loginform.jsx, Navbar.jsx
│  │   ├─ Cartcomponents/   # Cart, shopcart, amazon
│  │   ├─ images/           # Product images
│  │   └─ styles/           # Component CSS
│  └─ ...
├─ package.json
└─ README.md
```

---


## 🔌 API

This is a client‑only React SPA. Authentication, cart, and search are handled on the client. You can integrate a real backend/API later.

---


## 🧪 Testing

```bash
npm test
```

---


## 🔒 Security

* Do not store sensitive data on the client
* Validate all inputs and display clear error messages
* Use HTTPS and secure headers when adding a backend

---


## 📈 Performance & SEO

* Optimize images and apply lazy-loading where applicable
* Semantic HTML and helpful meta tags
* Fully responsive; Lighthouse targets > 90

---


## 🛠️ Scripts

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

---


## 🧭 Roadmap

* [ ] Integrate real backend/API
* [ ] Add payments
* [ ] Internationalization (vi, en)
* [ ] Product reviews & comments
* [ ] Core Web Vitals improvements

---


## 🤝 Contributing

Contributions are welcome! Please open an Issue to discuss before submitting a Pull Request.

---


## 📄 License

[MIT](LICENSE)

---


## 📬 Contact

* Author: **Le Thanh An**
* Email: [An.LT235631@sis.hust.edu.vn](mailto:An.LT235631@sis.hust.edu.vn)

---
