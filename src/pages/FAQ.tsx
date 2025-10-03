import { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const categories = [
    {
      title: 'Khách Thuê Xe',
      faqs: [
        {
          id: 'faq-1',
          question: 'Làm thế nào để thuê xe trên RentCarVN?',
          answer: 'Bạn chỉ cần: (1) Đăng ký tài khoản, (2) Tìm kiếm xe phù hợp, (3) Đặt xe và thanh toán, (4) Nhận xe tại địa điểm đã chọn. Toàn bộ quy trình rất đơn giản và nhanh chóng.'
        },
        {
          id: 'faq-2',
          question: 'Cần giấy tờ gì để thuê xe?',
          answer: 'Bạn cần có: GPLX hạng B1 trở lên (còn hạn), CMND/CCCD, và một trong các giấy tờ: Hộ khẩu, Passport, Bằng đại học. Đặt cọc theo quy định của từng xe.'
        },
        {
          id: 'faq-3',
          question: 'Giá thuê xe đã bao gồm gì?',
          answer: 'Giá thuê đã bao gồm: Bảo hiểm xe, bảo dưỡng định kỳ, hỗ trợ 24/7. Chưa bao gồm: Nhiên liệu, phí vượt quá giới hạn km (nếu có), phí vệ sinh xe (nếu xe quá bẩn).'
        },
        {
          id: 'faq-4',
          question: 'Tôi có thể hủy chuyến không?',
          answer: 'Có thể. Chính sách hủy: Hủy trước 7 ngày hoàn 100%, hủy trước 48h hoàn 70%, hủy trong 24h hoàn 30%. Sau khi nhận xe không hoàn tiền.'
        },
        {
          id: 'faq-5',
          question: 'Nếu xảy ra tai nạn thì sao?',
          answer: 'Hãy bình tĩnh và làm theo: (1) Đảm bảo an toàn, gọi cấp cứu nếu cần, (2) Chụp ảnh hiện trường, (3) Gọi ngay cho RentCarVN hotline 1900-1234, (4) Báo công an nếu cần thiết. Bảo hiểm sẽ chi trả theo quy định.'
        },
      ]
    },
    {
      title: 'Chủ Xe',
      faqs: [
        {
          id: 'faq-6',
          question: 'Làm thế nào để cho thuê xe trên RentCarVN?',
          answer: 'Đăng ký làm chủ xe bằng cách: (1) Tạo tài khoản chủ xe, (2) Đăng ký thông tin xe (ảnh, giấy tờ), (3) Chờ RentCarVN xác minh (1-2 ngày), (4) Đăng tin cho thuê và bắt đầu kiếm tiền.'
        },
        {
          id: 'faq-7',
          question: 'Tôi nhận được bao nhiêu từ mỗi chuyến?',
          answer: 'Chủ xe nhận 75% giá trị chuyến đi. RentCarVN giữ lại 25% phí dịch vụ (bao gồm bảo hiểm, hỗ trợ vận hành, marketing). Thanh toán vào ngày 5 và 20 hàng tháng.'
        },
        {
          id: 'faq-8',
          question: 'Xe của tôi có được bảo hiểm không?',
          answer: 'Có. RentCarVN cung cấp bảo hiểm toàn diện cho mọi chuyến đi: Bảo hiểm vật chất xe lên đến 500 triệu đồng, bảo hiểm trách nhiệm dân sự lên đến 100 triệu đồng.'
        },
        {
          id: 'faq-9',
          question: 'Tôi có thể từ chối khách thuê không?',
          answer: 'Có. Bạn có thể từ chối trước khi xác nhận chuyến nếu có lý do hợp lý (khách có lịch sử vi phạm, không phù hợp...). Tuy nhiên, nếu đã xác nhận rồi hủy sẽ bị phạt 500.000đ.'
        },
      ]
    },
    {
      title: 'Thanh Toán',
      faqs: [
        {
          id: 'faq-10',
          question: 'RentCarVN chấp nhận thanh toán như thế nào?',
          answer: 'Chúng tôi chấp nhận: Chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay, VNPay), thẻ tín dụng/ghi nợ quốc tế (Visa, Mastercard).'
        },
        {
          id: 'faq-11',
          question: 'Khi nào tôi được hoàn tiền?',
          answer: 'Thời gian hoàn tiền: 5-7 ngày làm việc kể từ ngày xác nhận hủy chuyến. Tiền sẽ được hoàn về tài khoản/ví điện tử mà bạn đã dùng để thanh toán.'
        },
        {
          id: 'faq-12',
          question: 'Có phí ẩn nào không?',
          answer: 'Không. RentCarVN minh bạch 100% về giá cả. Tất cả chi phí đều được hiển thị rõ ràng trước khi thanh toán. Không có phí ẩn.'
        },
      ]
    },
    {
      title: 'Bảo Hiểm & An Toàn',
      faqs: [
        {
          id: 'faq-13',
          question: 'Bảo hiểm có bao gồm những gì?',
          answer: 'Bảo hiểm bao gồm: (1) Bảo hiểm vật chất xe (va chạm, mất trộm), (2) Bảo hiểm trách nhiệm dân sự (thiệt hại bên thứ ba), (3) Bảo hiểm tai nạn cho người trên xe. Không bao gồm: Thiệt hại do say rượu, ma túy, vi phạm pháp luật.'
        },
        {
          id: 'faq-14',
          question: 'Làm thế nào để RentCarVN đảm bảo an toàn?',
          answer: 'Chúng tôi: (1) Xác minh danh tính tất cả người dùng, (2) Kiểm tra chất lượng xe định kỳ, (3) Có GPS theo dõi, (4) Đội ngũ hỗ trợ 24/7, (5) Bảo hiểm toàn diện, (6) Quy trình xử lý vi phạm nghiêm ngặt.'
        },
      ]
    },
  ];

  const filteredCategories = categories.map(cat => ({
    ...cat,
    faqs: cat.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Câu Hỏi Thường Gặp</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Tìm câu trả lời nhanh chóng cho các thắc mắc của bạn
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm câu hỏi..."
                className="pl-12 h-12 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                <div className="space-y-3">
                  {category.faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-card border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/50 transition-colors"
                      >
                        <span className="font-semibold pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                            openId === faq.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openId === faq.id && (
                        <div className="px-6 py-4 border-t bg-accent/20">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Không tìm thấy câu hỏi nào phù hợp với "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Không tìm thấy câu trả lời?</h2>
            <p className="text-muted-foreground mb-6">
              Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@rentcarvn.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Gửi Email Hỗ Trợ
              </a>
              <a
                href="tel:1900-1234"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Gọi 1900-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
