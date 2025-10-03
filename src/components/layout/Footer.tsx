import { Link } from 'react-router-dom';
import { Car, Facebook, Instagram, Youtube, Mail, Phone, MapPin, Apple, Play } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Về RentCarVN',
      links: [
        { label: 'Giới thiệu', href: '/about' },
        { label: 'Tuyển dụng', href: '/careers' },
        { label: 'Tin tức', href: '/news' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Dịch vụ',
      links: [
        { label: 'Thuê xe tự lái', href: '/search' },
        { label: 'Thuê xe có tài xế', href: '/search?service=driver' },
        { label: 'Xe cưới hỏi', href: '/search?service=wedding' },
        { label: 'Xe đi tour', href: '/search?service=tour' },
      ],
    },
    {
      title: 'Chính sách',
      links: [
        { label: 'Chính sách & quy định', href: '/policy' },
        { label: 'Quy chế hoạt động', href: '/terms' },
        { label: 'Bảo mật thông tin', href: '/privacy' },
        { label: 'Giải quyết tranh chấp', href: '/dispute' },
      ],
    },
    {
      title: 'Hỗ trợ',
      links: [
        { label: 'Hướng dẫn thuê xe', href: '/guide' },
        { label: 'Câu hỏi thường gặp', href: '/faq' },
        { label: 'Liên hệ', href: '/contact' },
        { label: 'Trung tâm trợ giúp', href: '/help' },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <Car className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-xl text-primary">RentCarVN</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Nền tảng cho thuê xe ô tô hàng đầu Việt Nam. Hơn 1000+ xe từ sedan đến SUV, 
              giao xe tận nơi, thủ tục nhanh chóng.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Hotline: 1900-1234</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@rentcarvn.com</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Đại Học Hutech Khu E, 10/80c Song Hành Xa Lộ Hà Nội, Phường Tân Phú, Thủ Đức, TP.HCM</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} RentCarVN. All rights reserved.
          </div>

          {/* App Download */}
          <div className="flex gap-3">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
            >
              <Apple className="h-5 w-5" />
              <div className="text-left">
                <div className="text-[10px]">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
            >
              <Play className="h-5 w-5" />
              <div className="text-left">
                <div className="text-[10px]">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Certification & Payment */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="text-xs text-muted-foreground">Chứng nhận bởi:</span>
              <div className="flex gap-3">
                <div className="px-3 py-1 bg-secondary rounded text-xs font-medium">
                  DMCA Protected
                </div>
                <div className="px-3 py-1 bg-secondary rounded text-xs font-medium">
                  SSL Secure
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="text-xs text-muted-foreground">Phương thức thanh toán:</span>
              <div className="flex gap-3 items-center">
                <img
                  src="/images/payment/visa.png"
                  alt="Visa"
                  className="h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <img
                  src="/images/payment/mastercard.png"
                  alt="Mastercard"
                  className="h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <img
                  src="/images/payment/momo.png"
                  alt="MoMo"
                  className="h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <img
                  src="/images/payment/vnpay.png"
                  alt="VNPay"
                  className="h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <img
                  src="/images/payment/zalopay.png"
                  alt="ZaloPay"
                  className="h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Business Registration */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Công ty TNHH RentCarVN | GPKD số: 0123456789 do Sở KH&ĐT TP.HCM cấp ngày 01/01/2020
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Địa chỉ: Đại Học Hutech Khu E, 10/80c Song Hành Xa Lộ Hà Nội, Phường Tân Phú, Thủ Đức, TP. Hồ Chí Minh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

