import { Scale, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dispute = () => {
  const tableOfContents = [
    { id: 'section-1', title: 'Điều 1: Phạm Vi Áp Dụng' },
    { id: 'section-2', title: 'Điều 2: Quy Trình Giải Quyết' },
    { id: 'section-3', title: 'Điều 3: Hòa Giải' },
    { id: 'section-4', title: 'Điều 4: Trọng Tài Hoặc Tòa Án' },
    { id: 'section-5', title: 'Điều 5: Chi Phí' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Scale className="h-8 w-8 text-blue-600 dark:text-blue-500" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Giải Quyết Tranh Chấp</h1>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Cập nhật lần cuối: 15/01/2025</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              Quy trình và cơ chế giải quyết tranh chấp công bằng, minh bạch
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Mục lục
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 bg-card border rounded-lg p-8 md:p-12">
              <article className="prose prose-gray dark:prose-invert max-w-none 
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-6 [&>h2]:pb-3 [&>h2]:border-b [&>h2]:mt-8 [&>h2]:first:mt-0
                [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mb-4 [&>h3]:mt-6
                [&>p]:text-base [&>p]:leading-7 [&>p]:mb-4
                [&>ul]:mb-6 [&>ul]:space-y-2
                [&>ul>li]:text-base [&>ul>li]:leading-7
                [&>ol]:mb-6 [&>ol]:space-y-2
                [&>ol>li]:text-base [&>ol>li]:leading-7">
                
                <h2 id="section-1" className="scroll-mt-24">
                  Điều 1: Phạm Vi Áp Dụng
                </h2>
                
                <p>
                  Quy trình này áp dụng cho mọi tranh chấp phát sinh liên quan đến việc sử dụng 
                  dịch vụ cho thuê xe tự lái RentCarVN giữa:
                </p>

                <ul>
                  <li>Khách thuê xe và Chủ xe.</li>
                  <li>Khách thuê xe và RentCarVN.</li>
                  <li>Chủ xe và RentCarVN.</li>
                  <li>Các bên thứ ba liên quan (nếu có).</li>
                </ul>

                <h3>1.1. Các loại tranh chấp</h3>
                <ul>
                  <li>Tranh chấp về chất lượng xe, tình trạng xe.</li>
                  <li>Tranh chấp về giá cả, phí dịch vụ, thanh toán.</li>
                  <li>Tranh chấp về hủy chuyến, hoàn tiền.</li>
                  <li>Tranh chấp về bồi thường thiệt hại, tai nạn.</li>
                  <li>Tranh chấp về vi phạm hợp đồng, điều khoản sử dụng.</li>
                </ul>

                <h2 id="section-2" className="scroll-mt-24">
                  Điều 2: Quy Trình Giải Quyết
                </h2>

                <p>
                  RentCarVN cam kết giải quyết tranh chấp theo quy trình 3 bước minh bạch và công bằng:
                </p>

                <h3>Bước 1: Thương lượng trực tiếp</h3>
                <ul>
                  <li><strong>Thời gian:</strong> Trong vòng 15 ngày kể từ khi phát sinh tranh chấp.</li>
                  <li><strong>Cách thức:</strong> Hai bên trực tiếp trao đổi qua điện thoại, email hoặc gặp mặt.</li>
                  <li><strong>Mục tiêu:</strong> Tìm ra giải pháp hài hòa, thỏa đáng cho cả hai bên.</li>
                  <li><strong>Kết quả:</strong> Nếu đạt được thỏa thuận, lập biên bản thỏa thuận và kết thúc.</li>
                </ul>

                <h3>Bước 2: Hòa giải tại RentCarVN</h3>
                <ul>
                  <li><strong>Điều kiện:</strong> Thương lượng trực tiếp không thành công.</li>
                  <li><strong>Thời gian:</strong> Trong vòng 30 ngày kể từ khi yêu cầu hòa giải.</li>
                  <li><strong>Hội đồng hòa giải:</strong> Gồm đại diện RentCarVN và chuyên gia độc lập.</li>
                  <li><strong>Chi phí:</strong> RentCarVN chịu toàn bộ chi phí hòa giải.</li>
                </ul>

                <h3>Bước 3: Trọng tài hoặc Tòa án</h3>
                <ul>
                  <li><strong>Điều kiện:</strong> Hòa giải không thành hoặc một bên không đồng ý hòa giải.</li>
                  <li><strong>Trọng tài:</strong> Tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC).</li>
                  <li><strong>Tòa án:</strong> Tòa án có thẩm quyền tại TP. Hồ Chí Minh.</li>
                  <li><strong>Quyết định:</strong> Phán quyết của Trọng tài/Tòa án là cuối cùng.</li>
                </ul>

                <h2 id="section-3" className="scroll-mt-24">
                  Điều 3: Hòa Giải
                </h2>

                <h3>3.1. Đăng ký yêu cầu hòa giải</h3>
                <p>Để yêu cầu hòa giải, bạn cần:</p>
                <ol>
                  <li>Gửi đơn yêu cầu hòa giải đến email: <a href="mailto:dispute@rentcarvn.com" className="text-primary hover:underline">dispute@rentcarvn.com</a></li>
                  <li>Kèm theo các tài liệu liên quan: hợp đồng, hóa đơn, ảnh chụp, tin nhắn...</li>
                  <li>Mô tả rõ nội dung tranh chấp và yêu cầu của bạn.</li>
                  <li>Cung cấp thông tin liên hệ để RentCarVN phối hợp.</li>
                </ol>

                <h3>3.2. Quy trình hòa giải</h3>
                <ol>
                  <li><strong>Tiếp nhận:</strong> RentCarVN xác nhận đơn trong vòng 3 ngày làm việc.</li>
                  <li><strong>Xem xét:</strong> Hội đồng hòa giải nghiên cứu hồ sơ, lắng nghe hai bên.</li>
                  <li><strong>Đề xuất:</strong> Đưa ra phương án giải quyết dựa trên sự công bằng và pháp luật.</li>
                  <li><strong>Thỏa thuận:</strong> Nếu hai bên chấp nhận, ký biên bản hòa giải thành.</li>
                  <li><strong>Thực hiện:</strong> Các bên thực hiện theo thỏa thuận đã ký.</li>
                </ol>

                <h3>3.3. Vai trò của RentCarVN</h3>
                <ul>
                  <li>Là bên trung gian, không thiên vị bất kỳ bên nào.</li>
                  <li>Cung cấp đầy đủ thông tin, chứng cứ liên quan.</li>
                  <li>Hỗ trợ thực hiện thỏa thuận đạt được.</li>
                  <li>Bảo mật thông tin của các bên trong quá trình hòa giải.</li>
                </ul>

                <h2 id="section-4" className="scroll-mt-24">
                  Điều 4: Trọng Tài Hoặc Tòa Án
                </h2>

                <h3>4.1. Trọng tài</h3>
                <p>
                  Nếu hai bên đồng ý, tranh chấp sẽ được giải quyết tại Trung tâm Trọng tài 
                  Quốc tế Việt Nam (VIAC) theo Luật Trọng tài thương mại Việt Nam.
                </p>

                <ul>
                  <li><strong>Ưu điểm:</strong> Nhanh chóng, bảo mật, chuyên môn cao.</li>
                  <li><strong>Ngôn ngữ:</strong> Tiếng Việt.</li>
                  <li><strong>Địa điểm:</strong> TP. Hồ Chí Minh hoặc Hà Nội.</li>
                  <li><strong>Phán quyết:</strong> Là quyết định cuối cùng, có hiệu lực thi hành.</li>
                </ul>

                <h3>4.2. Tòa án</h3>
                <p>
                  Trong trường hợp không thể giải quyết bằng Trọng tài, tranh chấp sẽ được đưa ra 
                  Tòa án nhân dân có thẩm quyền tại TP. Hồ Chí Minh.
                </p>

                <ul>
                  <li><strong>Thẩm quyền:</strong> Theo quy định của Bộ luật Tố tụng Dân sự.</li>
                  <li><strong>Luật áp dụng:</strong> Pháp luật Việt Nam.</li>
                  <li><strong>Quyết định:</strong> Bản án của Tòa án có hiệu lực pháp luật.</li>
                </ul>

                <h2 id="section-5" className="scroll-mt-24">
                  Điều 5: Chi Phí
                </h2>

                <h3>5.1. Chi phí thương lượng</h3>
                <ul>
                  <li>Mỗi bên tự chịu chi phí của mình (đi lại, tài liệu...).</li>
                  <li>RentCarVN hỗ trợ miễn phí qua hotline và email.</li>
                </ul>

                <h3>5.2. Chi phí hòa giải</h3>
                <ul>
                  <li>RentCarVN chịu toàn bộ chi phí hòa giải.</li>
                  <li>Các bên không phải trả phí cho hội đồng hòa giải.</li>
                </ul>

                <h3>5.3. Chi phí Trọng tài/Tòa án</h3>
                <ul>
                  <li>Phí Trọng tài: Theo quy định của VIAC, thường do bên thua kiện chịu.</li>
                  <li>Phí Tòa án: Theo quy định của pháp luật, do bên thua kiện chịu.</li>
                  <li>Chi phí luật sư: Mỗi bên tự chịu chi phí luật sư của mình.</li>
                </ul>

                <div className="mt-12 space-y-4">
                  <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-2">Cam kết của RentCarVN</h4>
                        <p className="text-sm text-muted-foreground">
                          Chúng tôi cam kết giải quyết mọi tranh chấp một cách công bằng, minh bạch, 
                          bảo vệ quyền lợi hợp pháp của tất cả các bên. RentCarVN luôn ưu tiên giải pháp 
                          hòa giải để tiết kiệm thời gian và chi phí cho khách hàng.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-2">Liên hệ giải quyết tranh chấp</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Để được hỗ trợ giải quyết tranh chấp, vui lòng liên hệ:
                        </p>
                        <ul className="text-sm space-y-1">
                          <li><strong>Email:</strong> <a href="mailto:dispute@rentcarvn.com" className="text-primary hover:underline">dispute@rentcarvn.com</a></li>
                          <li><strong>Hotline:</strong> 1900-1234 (8:00 - 22:00 hàng ngày)</li>
                          <li><strong>Địa chỉ:</strong> 123 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dispute;
