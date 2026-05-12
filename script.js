// CTAリンクの変更はここだけでOKです。
// 例: 予約フォームURLに変える場合は "https://example.com/reserve" にします。
const CTA_LINK = "#contact";

document.addEventListener("DOMContentLoaded", () => {
  const ctaLinks = document.querySelectorAll(".js-cta-link");

  ctaLinks.forEach((link) => {
    link.setAttribute("href", CTA_LINK);
  });
});
