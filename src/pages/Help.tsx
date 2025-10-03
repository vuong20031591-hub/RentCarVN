import { LifeBuoy, Mail, Phone, MessageCircle, MapPin, Clock, Search, BookOpen, HelpCircle, Scale, Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const contactMethods = [
    {
      icon: Phone,
      title: 'Hotline 24/7',
      description: 'Gọi ngay để được hỗ trợ khẩn cấp',
      value: '1900-1234',
      action: 'tel:1900-1234',
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Hỗ Trợ',
      description: 'Gửi email cho chúng tôi',
      value: 'support@rentcarvn.com',
      action: 'mailto:support@rentcarvn.com',
      color: 'bg-green-500/10 text-green-600 dark:text-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat trực tiếp với nhân viên',
      value: 'Bắt đầu chat',
      action: '#',
      color: 'bg-purple-500/10 text-purple-600 dark:text-purple-500'
    },
    {
      icon: MapPin,
      title: 'Văn Phòng',
      description: '123 Nguyễn Văn Linh, Q7, TP.HCM',
      value: 'Xem bản đồ',
      action: '#',
      color: 'bg-orange-500/10 text-orange-600 dark:text-orange-500'
    },
  ];

  const quickLinks = [
    {
      icon: BookOpen,
      title: 'Hướng Dẫn Sử Dụng',
      description: 'Cách thuê xe, thanh toán, giao nhận',
      link: '/guide'
    },
    {
      icon: HelpCircle,
      title: 'Câu Hỏi Thường Gặp',
      description: 'Câu trả lời cho các thắc mắc phổ biến',
      link: '/faq'
    },
    {
      icon: FileText,
      title: 'Chính Sách Chung',
      description: 'Quy định cho thuê và chủ xe',
      link: '/policy'
    },
    {
      icon: Shield,
      title: 'Điều Khoản Sử Dụng',
      description: 'Quyền và nghĩa vụ người dùng',
      link: '/terms'
    },
    {
      icon: Scale,
      title: 'Giải Quyết Tranh Chấp',
      description: 'Quy trình xử lý khiếu nại',
      link: '/dispute'
    },
    {
      icon: Shield,
      title: 'Chính Sách Bảo Mật',
      description: 'Cam kết bảo vệ thông tin',
      link: '/privacy'
    },
  ];

  const commonIssues = [
    {
      title: 'Tài Khoản & Đăng Nhập',
      issues: [
        'Quên mật khẩu',
        'Không nhận được email xác thực',
        'Cập nhật thông tin cá nhân',
        'Xóa tài khoản',
      ]
    },
    {
      title: 'Đặt Xe & Thanh Toán',
      issues: [
        'Thanh toán không thành công',
        'Hủy chuyến và hoàn tiền',
        'Thay đổi thông tin đặt xe',
        'Xuất hóa đơn VAT',
      ]
    },
    {
      title: 'Trong Chuyến Đi',
      issues: [
        'Xe gặp sự cố',
        'Tai nạn giao thông',
        'Mất chìa khóa xe',
        'Liên hệ chủ xe/khách thuê',
      ]
    },
    {
      title: 'Chủ Xe',
      issues: [
        'Đăng ký xe cho thuê',
        'Quản lý lịch xe',
        'Nhận thanh toán',
        'Xử lý đánh giá tiêu cực',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
              <LifeBuoy className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Trung Tâm Hỗ Trợ</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Chúng tôi ở đây để giúp bạn. Tìm câu trả lời hoặc liên hệ với chúng tôi.
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm trợ giúp..."
                className="pl-12 h-12 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Liên Hệ Với Chúng Tôi</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.action}
                    className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all group"
                  >
                    <div className={`inline-flex p-3 ${method.color} rounded-lg mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <span className="text-sm font-medium text-primary group-hover:underline">
                      {method.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-12 bg-white dark:bg-gray-800 border-y dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Giờ Làm Việc</h2>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Hỗ Trợ Trực Tuyến</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Hotline:</span>
                      <span className="font-medium text-foreground">24/7</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Live Chat:</span>
                      <span className="font-medium text-foreground">8:00 - 22:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Email:</span>
                      <span className="font-medium text-foreground">24/7</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Văn Phòng</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Thứ 2 - Thứ 6:</span>
                      <span className="font-medium text-foreground">8:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Thứ 7:</span>
                      <span className="font-medium text-foreground">8:00 - 12:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Chủ Nhật:</span>
                      <span className="font-medium text-foreground">Nghỉ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Tài Liệu Hữu Ích</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.link}
                    className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all group"
                  >
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-12 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Vấn Đề Thường Gặp</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonIssues.map((category, index) => (
                <div key={index} className="bg-card border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.issues.map((issue, issueIndex) => (
                      <li key={issueIndex}>
                        <a
                          href="#"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          {issue}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">Cần Hỗ Trợ Khẩn Cấp?</h2>
              <p className="mb-6 opacity-90">
                Nếu bạn đang gặp sự cố khẩn cấp trong chuyến đi, hãy gọi ngay hotline
              </p>
              <a
                href="tel:1900-1234"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                1900-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
