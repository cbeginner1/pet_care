import "./globals.css";

export const metadata = {
  title: "沐爪宠物洗护 | 高端宠物洗护美容",
  description: "沐爪宠物洗护提供犬猫洗护、美容修剪、皮毛护理和预约制到店服务。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
