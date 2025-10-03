import { Shield, FileText, AlertCircle, CheckCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Policy = () => {
  const tableOfContents = [
    { id: 'section-1', title: '1. Chính Sách Cho Thuê Xe' },
    { id: 'section-2', title: '2. Chính Sách Cho Chủ Xe' },
    { id: 'section-3', title: '3. Chính Sách Hủy Chuyến' },
    { id: 'section-4', title: '4. Chính Sách Bảo Mật' },
    { id: 'section-5', title: '5. Chính Sách Giải Quyết Tranh Chấp' },
    { id: 'section-6', title: '6. Liên Hệ' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Chính Sách Chung</h1>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Cập nhật lần cuối: 15/01/2025</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              Các chính sách và quy định về sử dụng dịch vụ cho thuê xe tự lái RentCarVN
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex gap-8">
            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
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
                  Điều 1: Chính Sách Cho Thuê Xe
                </h2>
                
                <h3>1.1. Điều kiện thuê xe</h3>
                <p>Để thuê xe tại RentCarVN, khách hàng cần đáp ứng các điều kiện sau:</p>
                <ul>
                  <li>Độ tuổi: Từ 21 tuổi trở lên.</li>
                  <li>Giấy phép lái xe: Có GPLX hạng B1 hoặc B2 còn hiệu lực.</li>
                  <li>Giấy tờ tùy thân: CMND/CCCD và một trong các giấy tờ: Hộ khẩu, Passport, hoặc Bằng đại học.</li>
                  <li>Tiền đặt cọc: Đặt cọc theo quy định riêng của từng loại xe.</li>
                </ul>

                <h3>1.2. Thời gian thuê</h3>
                <ul>
                  <li>Thời gian tối thiểu: 1 ngày (24 giờ).</li>
                  <li>Đơn giá: Tính theo ngày, tuần hoặc tháng tùy vào gói thuê.</li>
                  <li>Gia hạn: Khách hàng phải thông báo trước ít nhất 6 giờ nếu muốn gia hạn thêm thời gian thuê.</li>
                </ul>

                <h3>1.3. Phạm vi sử dụng</h3>
                <ul>
                  <li>Xe được phép di chuyển trong phạm vi toàn quốc.</li>
                  <li>Nghiêm cấm sử dụng xe vào mục đích vi phạm pháp luật.</li>
                  <li>Không được cho thuê lại, cầm cố hoặc chuyển nhượng xe cho bên thứ ba.</li>
                </ul>

                <h2 id="section-2" className="scroll-mt-24">
                  Điều 2: Chính Sách Cho Chủ Xe
                </h2>

                <h3>2.1. Điều kiện đăng ký</h3>
                <p>Chủ xe muốn đăng ký cho thuê xe trên nền tảng RentCarVN cần đáp ứng:</p>
                <ul>
                  <li>Độ tuổi: Từ 21 tuổi trở lên.</li>
                  <li>Xe: Đời xe từ 2015 trở lên, tình trạng kỹ thuật tốt.</li>
                  <li>Giấy tờ: Đăng ký xe, giấy kiểm định, bảo hiểm còn hiệu lực.</li>
                  <li>Hồ sơ: CMND/CCCD, sổ đăng ký xe bản gốc khi ký hợp đồng.</li>
                </ul>

                <h3>2.2. Thu nhập và thanh toán</h3>
                <ul>
                  <li>Phân chia doanh thu: Chủ xe nhận 75%, RentCarVN giữ lại 25% phí dịch vụ.</li>
                  <li>Chu kỳ thanh toán: Hai lần mỗi tháng vào ngày 5 và ngày 20.</li>
                  <li>Phương thức: Chuyển khoản trực tiếp vào tài khoản ngân hàng đã đăng ký.</li>
                  <li>Báo cáo: Chủ xe nhận báo cáo chi tiết doanh thu qua email hoặc ứng dụng.</li>
                </ul>

                <h3>2.3. Bảo hiểm và bảo vệ</h3>
                <ul>
                  <li>RentCarVN cung cấp gói bảo hiểm toàn diện cho mọi chuyến thuê xe.</li>
                  <li>Bảo hiểm vật chất: Bồi thường thiệt hại xe lên đến 500 triệu đồng.</li>
                  <li>Bảo hiểm trách nhiệm dân sự: Bồi thường thiệt hại bên thứ ba lên đến 100 triệu đồng.</li>
                  <li>Hỗ trợ pháp lý: Đội ngũ tư vấn pháp lý hỗ trợ giải quyết tranh chấp phát sinh.</li>
                </ul>

                <h2 id="section-3" className="scroll-mt-24">
                  Điều 3: Chính Sách Hủy Chuyến
                </h2>

                <h3>3.1. Khách hàng hủy chuyến</h3>
                <p>Khi khách hàng hủy chuyến, chính sách hoàn tiền được áp dụng như sau:</p>
                <ul>
                  <li><strong>Hủy trước 7 ngày:</strong> Hoàn 100% giá trị chuyến đi.</li>
                  <li><strong>Hủy trước 48 giờ:</strong> Hoàn 70% giá trị chuyến đi.</li>
                  <li><strong>Hủy trong vòng 24 giờ:</strong> Hoàn 30% giá trị chuyến đi.</li>
                  <li><strong>Hủy sau khi nhận xe:</strong> Không hoàn tiền.</li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  * Thời gian hủy được tính từ thời điểm bắt đầu chuyến đi theo hợp đồng.
                </p>

                <h3>3.2. Chủ xe hủy chuyến</h3>
                <ul>
                  <li>Phạt: Chủ xe bị phạt 500.000 đồng nếu hủy chuyến đã xác nhận.</li>
                  <li>Hoàn tiền: Khách hàng được hoàn lại 100% số tiền đã thanh toán.</li>
                  <li>Vi phạm nghiêm trọng: Hủy quá 3 lần trong một tháng sẽ bị tạm khóa tài khoản.</li>
                  <li>RentCarVN sẽ hỗ trợ tìm xe thay thế cho khách hàng trong trường hợp này.</li>
                </ul>

                <h2 id="section-4" className="scroll-mt-24">
                  Điều 4: Bảo Mật Thông Tin
                </h2>
                <p>
                  RentCarVN cam kết bảo mật nghiêm ngặt mọi thông tin cá nhân của khách hàng và chủ xe 
                  theo Luật An toàn thông tin mạng và các quy định pháp luật có liên quan.
                </p>
                <p>
                  Thông tin chi tiết về việc thu thập, sử dụng và bảo vệ dữ liệu cá nhân được quy định tại 
                  trang <Link to="/privacy" className="text-primary hover:underline">Chính sách bảo mật</Link>.
                </p>

                <h2 id="section-5" className="scroll-mt-24">
                  Điều 5: Giải Quyết Tranh Chấp
                </h2>
                <p>
                  Mọi tranh chấp phát sinh giữa các bên liên quan đến việc sử dụng dịch vụ sẽ được giải quyết 
                  theo trình tự sau:
                </p>
                <ol>
                  <li>Thương lượng trực tiếp giữa các bên trong vòng 15 ngày kể từ khi phát sinh tranh chấp.</li>
                  <li>Nếu không đạt được thỏa thuận, tranh chấp sẽ được đưa ra hòa giải tại RentCarVN.</li>
                  <li>Trường hợp hòa giải không thành, tranh chấp sẽ được giải quyết tại Tòa án có thẩm quyền.</li>
                </ol>
                <p>
                  Xem chi tiết quy trình tại trang <Link to="/dispute" className="text-primary hover:underline">Giải quyết tranh chấp</Link>.
                </p>

                <h2 id="section-6" className="scroll-mt-24">
                  Điều 6: Thông Tin Liên Hệ
                </h2>
                <p>
                  Nếu bạn có bất kỳ thắc mắc nào về chính sách này, vui lòng liên hệ với chúng tôi qua:
                </p>
                <ul>
                  <li><strong>Công ty:</strong> Công ty TNHH RentCarVN</li>
                  <li><strong>Địa chỉ:</strong> 123 Nguyễn Văn Linh, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh</li>
                  <li><strong>Email:</strong> <a href="mailto:support@rentcarvn.com" className="text-primary hover:underline">support@rentcarvn.com</a></li>
                  <li><strong>Hotline:</strong> <a href="tel:1900-1234" className="text-primary hover:underline">1900-1234</a> (8:00 - 22:00 hàng ngày)</li>
                  <li><strong>Website:</strong> <a href="https://rentcarvn.com" className="text-primary hover:underline">www.rentcarvn.com</a></li>
                </ul>

                <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">Lưu ý quan trọng</h4>
                      <p className="text-sm text-muted-foreground">
                        RentCarVN có quyền cập nhật chính sách này bất cứ lúc nào. 
                        Mọi thay đổi sẽ được thông báo qua email và trên website. 
                        Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.
                      </p>
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

export default Policy;
