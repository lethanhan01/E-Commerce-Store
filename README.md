# E-Commerce Store

> 🔎 Dự án web thương mại điện tử đầy đủ tính năng (catalog, giỏ hàng, thanh toán, quản trị…) với kiến trúc tách lớp, dễ mở rộng và triển khai. 

<!--
Lưu ý dành cho tác giả:
- Tìm & thay thế các đoạn viết IN HOA trong ngoặc vuông [NHƯ THẾ NÀY].
- Nếu stack khác (ví dụ: Django, Laravel, Spring…), sửa mục “Công nghệ & Kiến trúc” và phần “Thiết lập nhanh” tương ứng.
-->

## 🔗 Demo / Preview

* **Live**: [https://\[LINK-DEPLOY\]](https://e-commerce-store-2xzmgzp6l-lethanhan01s-projects.vercel.app/)

---

## ✨ Tính năng chính

* 🛍️ **Catalog sản phẩm**: danh mục, tag, biến thể (size/color), hình ảnh, tồn kho
* 🔎 **Tìm kiếm & lọc**: theo tên, danh mục, giá, sắp xếp mới nhất/bán chạy/giá
* 🧺 **Giỏ hàng & Wishlist**: thêm/xóa/cập nhật số lượng, lưu trạng thái người dùng
* 💳 **Thanh toán**: tích hợp cổng thanh toán (ví dụ: Stripe/Momo/ZaloPay), hỗ trợ COD 
* 📦 **Đơn hàng**: địa chỉ giao hàng, phí vận chuyển, trạng thái (pending/paid/shipped/delivered)
* 🔐 **Xác thực & phân quyền**: đăng ký/đăng nhập, OAuth *(tuỳ chọn)*, JWT/Session, vai trò Admin/User
* ♿ **Accessibility & SEO**: semantic HTML, meta tags, sitemap, robots
* 📊 **Trang quản trị (Admin Dashboard)**: CRUD sản phẩm, quản lý đơn, doanh thu, tồn kho

---

## 🧱 Công nghệ & Kiến trúc

 **React/Next.js + Node.js + PostgreSQL + Prisma + Stripe**. 

* **Frontend**: Next.js (App Router), React 18, TanStack Query, Zustand/Redux, TailwindCSS
* **Backend**: Node.js 20, NestJS/Express (chọn một), REST/GraphQL
* **Database**: PostgreSQL, **ORM**: Prisma
* **Auth**: NextAuth/Passport, JWT/Session cookies
* **Payments**: Stripe (sandbox), mở rộng cổng VNPay/Momo/ZaloPay
* **Storage**: S3 compatible (Cloudflare R2/MinIO) cho ảnh sản phẩm
* **Caching**: Redis (session/cache rate-limits)
* **Testing**: Vitest/Jest, Playwright
* **CI/CD**: GitHub Actions
* **Infra**: Docker Compose (Dev), Fly.io/Vercel/Railway/Render (Prod)

## 🚀 Thiết lập nhanh

### 1) Yêu cầu hệ thống

* Node.js **>= 18** (khuyên dùng 20)
* npm/pnpm/yarn (chọn một)
* Docker Desktop *(tuỳ chọn, cho dev nhanh)*

### 2) Clone mã nguồn

```bash
git clone https://github.com/[USERNAME]/E-Commerce-Store.git
cd E-Commerce-Store
```

### 3) Cấu hình biến môi trường

Tạo file `.env` ở thư mục gốc (tham khảo mẫu dưới). Nếu tách frontend/backend, đặt tương ứng ở từng package.

```dotenv
# Database
DATABASE_URL="postgresql://[USER]:[PASS]@[HOST]:5432/[DB_NAME]?schema=public"

# Auth / App
NEXTAUTH_SECRET="[GENERATE_A_STRONG_SECRET]"
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET="[JWT_SECRET]"

# Stripe (nếu dùng)
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# S3 Storage (nếu dùng)
S3_ENDPOINT="https://[ENDPOINT]"
S3_BUCKET="[BUCKET]"
S3_ACCESS_KEY_ID="[KEY]"
S3_SECRET_ACCESS_KEY="[SECRET]"
```

### 4) Cài đặt phụ thuộc & chạy dev

> Với dự án monorepo (apps/**, packages/**), điều chỉnh lệnh theo workspace manager của bạn.

```bash
# cài đặt
npm install
# setup DB (Prisma)
npx prisma migrate dev --name init
npx prisma db seed  # nếu có seeding

# chạy app
npm run dev  # mặc định: http://localhost:3000
```

### 5) Build & chạy Production

```bash
npm run build
npm run start
```

### 6) Chạy nhanh bằng Docker (tuỳ chọn)

```bash
# Dev (hot reload)
docker compose -f docker-compose.dev.yml up --build
# Prod
docker compose up --build -d
```

---

## 🗂️ Cấu trúc thư mục (tham khảo)

```
E-Commerce-Store/
├─ apps/
│  ├─ web/                # Next.js frontend
│  └─ api/                # Node/Nest/Express backend
├─ prisma/
│  ├─ schema.prisma
│  └─ seed.ts
├─ src/                   # hoặc packages/* nếu tách lib
├─ public/                # ảnh tĩnh, favicon, logos
├─ docs/                  # screenshots, diagrams
├─ .env.example
├─ docker-compose.yml
├─ package.json
└─ README.md
```

---

## 🔌 API (ví dụ REST)

> Nếu dùng GraphQL/ tRPC, thay bằng schema/queries tương ứng.

**Auth**

* `POST /api/auth/register` – Đăng ký tài khoản
* `POST /api/auth/login` – Đăng nhập (trả về token/session)

**Sản phẩm**

* `GET /api/products` – Danh sách + filter/sort/pagination
* `GET /api/products/:id` – Chi tiết
* `POST /api/products` *(admin)* – Tạo mới
* `PATCH /api/products/:id` *(admin)* – Cập nhật
* `DELETE /api/products/:id` *(admin)* – Xoá

**Giỏ hàng & Đơn hàng**

* `POST /api/cart` – Thêm/cập nhật/xoá item
* `POST /api/orders` – Tạo đơn, khởi tạo thanh toán
* `POST /api/payments/stripe/webhook` – Webhook xử lý trạng thái thanh toán

---

## 🧪 Kiểm thử

```bash
# unit/integration
npm run test
# e2e (Playwright)
npm run test:e2e
```

---

## 🔒 Bảo mật

* Lưu Secrets bằng **.env**, không commit lên repo công khai
* CSRF/XSS/SQL Injection: bật `helmet`, escape inputs, dùng prepared statements/ORM
* Rate limit cho tuyến nhạy cảm (auth/payment)
* HTTPS ở production, `SameSite` cho cookies

---

## 📈 Hiệu năng & SEO

* Image Optimization, lazy-loading, caching
* ISR/SSG (Next.js) cho trang tĩnh, `sitemap.xml`, `robots.txt`
* Lighthouse ≥ 90 (Performance/Accessibility/Best Practices/SEO)

---

## 🛠️ Scripts hữu ích 

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "test": "vitest",
    "test:e2e": "playwright test",
    "prisma:studio": "prisma studio",
    "prisma:migrate": "prisma migrate dev"
  }
}
```

---

## 🧭 Roadmap

* [ ] Đa phương thức thanh toán (VNPay/Momo/ZaloPay)
* [ ] Đa ngôn ngữ (vi, en)
* [ ] Email service (Xác nhận đơn, khôi phục mật khẩu)
* [ ] Đánh giá & bình luận sản phẩm
* [ ] Tối ưu Core Web Vitals

---

## 🤝 Đóng góp

Đóng góp được hoan nghênh! Vui lòng mở **Issue** để thảo luận trước, sau đó gửi **Pull Request** theo template.

---

## 📄 License

[MIT](LICENSE)

---

## 📬 Liên hệ

* Tác giả: **Lê Thành An**
* Email: **\[An.LT235631@sis.hust.edu.vn]**

---
