import { BookOpen, Calendar, Car, CreditCard, Shield, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Guide = () => {
  const guides = [
    {
      icon: Car,
      title: 'Hướng Dẫn Thuê Xe',
      description: 'Cách tìm, đặt và thuê xe trên RentCarVN',
      steps: [
        {
          number: '01',
          title: 'Tìm kiếm xe',
          content: 'Nhập địa điểm, ngày giờ thuê xe. Lọc theo loại xe, giá, đánh giá để tìm xe phù hợp nhất.'
        },
        {
          number: '02',
          title: 'Xem thông tin chi tiết',
          content: 'Kiểm tra ảnh xe, mô tả, thông số kỹ thuật, chính sách của chủ xe, đánh giá từ khách trước.'
        },
        {
          number: '03',
          title: 'Đặt xe và thanh toán',
          content: 'Nhấn "Đặt xe ngay", điền thông tin, chọn phương thức thanh toán, xác nhận đặt xe.'
        },
        {
          number: '04',
          title: 'Nhận xe',
          content: 'Liên hệ chủ xe để hẹn nhận xe. Kiểm tra xe kỹ trước khi nhận, chụp ảnh làm bằng chứng.'
        },
        {
          number: '05',
          title: 'Trả xe và đánh giá',
          content: 'Trả xe đúng giờ, đúng địa điểm. Đánh giá chủ xe và chuyến đi để giúp cộng đồng.'
        },
      ]
    },
    {
      icon: CreditCard,
      title: 'Hướng Dẫn Thanh Toán',
      description: 'Các phương thức thanh toán và hoàn tiền',
      steps: [
        {
          number: '01',
          title: 'Chọn phương thức thanh toán',
          content: 'Chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay, VNPay), thẻ tín dụng/ghi nợ.'
        },
        {
          number: '02',
          title: 'Thanh toán đặt cọc',
          content: 'Thanh toán số tiền đặt cọc theo quy định. Số tiền sẽ được giữ cho đến khi trả xe.'
        },
        {
          number: '03',
          title: 'Thanh toán toàn bộ',
          content: 'Sau khi nhận xe, thanh toán số tiền còn lại (nếu có). Giữ hóa đơn để đối chiếu.'
        },
        {
          number: '04',
          title: 'Hoàn tiền (nếu hủy)',
          content: 'Nếu hủy chuyến, tiền sẽ được hoàn về tài khoản trong 5-7 ngày làm việc.'
        },
      ]
    },
    {
      icon: Shield,
      title: 'Hướng Dẫn Bảo Hiểm',
      description: 'Cách sử dụng bảo hiểm khi có sự cố',
      steps: [
        {
          number: '01',
          title: 'Hiểu về bảo hiểm',
          content: 'Mọi chuyến đi đều có bảo hiểm: Vật chất xe (500 triệu), Trách nhiệm dân sự (100 triệu).'
        },
        {
          number: '02',
          title: 'Khi xảy ra sự cố',
          content: 'Giữ bình tĩnh, chụp ảnh hiện trường, báo ngay cho RentCarVN hotline 1900-1234.'
        },
        {
          number: '03',
          title: 'Báo cáo và định giá',
          content: 'Cung cấp đầy đủ thông tin, ảnh chụp. RentCarVN sẽ phối hợp với bảo hiểm định giá thiệt hại.'
        },
        {
          number: '04',
          title: 'Giải quyết bồi thường',
          content: 'Bảo hiểm sẽ chi trả theo quy định. Bạn chỉ chịu phần tự chịu rủi ro (nếu có).'
        },
      ]
    },
    {
      icon: MapPin,
      title: 'Hướng Dẫn Giao Nhận Xe',
      description: 'Quy trình giao và nhận xe an toàn',
      steps: [
        {
          number: '01',
          title: 'Chuẩn bị giấy tờ',
          content: 'Mang theo GPLX, CMND/CCCD bản gốc, giấy tờ liên quan đã đăng ký.'
        },
        {
          number: '02',
          title: 'Kiểm tra xe kỹ',
          content: 'Kiểm tra ngoại thất (vết xước, móp méo), nội thất, động cơ, nhiên liệu, các thiết bị.'
        },
        {
          number: '03',
          title: 'Chụp ảnh bằng chứng',
          content: 'Chụp ảnh 4 góc xe, nội thất, đồng hồ km, mức nhiên liệu. Ghi nhận vào biên bản.'
        },
        {
          number: '04',
          title: 'Ký biên bản',
          content: 'Ký xác nhận biên bản giao xe cùng chủ xe. Giữ 1 bản để đối chiếu khi trả.'
        },
        {
          number: '05',
          title: 'Trả xe',
          content: 'Trả xe đúng giờ, đúng địa điểm. Đổ đầy xăng, vệ sinh xe sạch sẽ, trả đủ phụ kiện.'
        },
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
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Hướng Dẫn Sử Dụng</h1>
            <p className="text-muted-foreground text-lg">
              Mọi thứ bạn cần biết để sử dụng dịch vụ RentCarVN hiệu quả
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <div key={index} className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">{guide.title}</h2>
                      <p className="text-muted-foreground">{guide.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guide.steps.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-primary">{step.number}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {step.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Tài Liệu Liên Quan</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                to="/faq"
                className="flex items-center justify-between p-4 bg-card border rounded-lg hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="font-semibold mb-1">Câu Hỏi Thường Gặp</h3>
                  <p className="text-sm text-muted-foreground">Tìm câu trả lời nhanh</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                to="/policy"
                className="flex items-center justify-between p-4 bg-card border rounded-lg hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="font-semibold mb-1">Chính Sách Chung</h3>
                  <p className="text-sm text-muted-foreground">Quy định sử dụng dịch vụ</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                to="/terms"
                className="flex items-center justify-between p-4 bg-card border rounded-lg hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="font-semibold mb-1">Điều Khoản Sử Dụng</h3>
                  <p className="text-sm text-muted-foreground">Quyền và nghĩa vụ</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                to="/dispute"
                className="flex items-center justify-between p-4 bg-card border rounded-lg hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="font-semibold mb-1">Giải Quyết Tranh Chấp</h3>
                  <p className="text-sm text-muted-foreground">Quy trình xử lý</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Cần Thêm Hỗ Trợ?</h2>
            <p className="text-muted-foreground mb-6">
              Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@rentcarvn.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Gửi Email
              </a>
              <a
                href="tel:1900-1234"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Gọi Hotline
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
