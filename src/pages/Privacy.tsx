import { Shield, Calendar, AlertCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  const tableOfContents = [
    { id: 'section-1', title: 'Điều 1: Thu Thập Thông Tin' },
    { id: 'section-2', title: 'Điều 2: Mục Đích Sử Dụng' },
    { id: 'section-3', title: 'Điều 3: Bảo Mật Thông Tin' },
    { id: 'section-4', title: 'Điều 4: Chia Sẻ Thông Tin' },
    { id: 'section-5', title: 'Điều 5: Quyền Của Người Dùng' },
    { id: 'section-6', title: 'Điều 6: Cookie Và Công Nghệ Theo Dõi' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Shield className="h-8 w-8 text-green-600 dark:text-green-500" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Chính Sách Bảo Mật</h1>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Cập nhật lần cuối: 15/01/2025</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              Cam kết bảo vệ thông tin cá nhân và quyền riêng tư của bạn
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
                  <Lock className="h-5 w-5 text-primary" />
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
                [&>ul>li]:text-base [&>ul>li]:leading-7">
                
                <p className="text-lg font-medium text-primary mb-8">
                  RentCarVN cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn theo 
                  Luật An toàn thông tin mạng số 24/2018/QH14 và Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.
                </p>

                <h2 id="section-1" className="scroll-mt-24">
                  Điều 1: Thu Thập Thông Tin
                </h2>
                
                <h3>1.1. Thông tin bạn cung cấp</h3>
                <p>Khi đăng ký và sử dụng dịch vụ, chúng tôi thu thập:</p>
                <ul>
                  <li><strong>Thông tin cá nhân:</strong> Họ tên, ngày sinh, giới tính, CMND/CCCD, Passport.</li>
                  <li><strong>Thông tin liên hệ:</strong> Số điện thoại, email, địa chỉ.</li>
                  <li><strong>Thông tin tài chính:</strong> Số tài khoản ngân hàng, thông tin thẻ thanh toán.</li>
                  <li><strong>Giấy phép lái xe:</strong> Số GPLX, ngày cấp, ngày hết hạn.</li>
                  <li><strong>Thông tin xe:</strong> Biển số, đăng ký xe, bảo hiểm (đối với chủ xe).</li>
                </ul>

                <h3>1.2. Thông tin tự động thu thập</h3>
                <ul>
                  <li><strong>Dữ liệu thiết bị:</strong> IP address, loại trình duyệt, hệ điều hành.</li>
                  <li><strong>Dữ liệu sử dụng:</strong> Thời gian truy cập, trang đã xem, hành vi click.</li>
                  <li><strong>Dữ liệu vị trí:</strong> GPS, định vị địa lý khi bạn cho phép.</li>
                  <li><strong>Cookie và công nghệ tương tự:</strong> Để cải thiện trải nghiệm người dùng.</li>
                </ul>

                <h2 id="section-2" className="scroll-mt-24">
                  Điều 2: Mục Đích Sử Dụng
                </h2>

                <p>Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:</p>

                <h3>2.1. Cung cấp dịch vụ</h3>
                <ul>
                  <li>Xác thực danh tính và xử lý giao dịch thuê xe.</li>
                  <li>Kết nối giữa chủ xe và khách hàng.</li>
                  <li>Theo dõi và hỗ trợ trong quá trình sử dụng dịch vụ.</li>
                  <li>Xử lý thanh toán và hoàn tiền.</li>
                </ul>

                <h3>2.2. Cải thiện dịch vụ</h3>
                <ul>
                  <li>Phân tích hành vi người dùng để tối ưu trải nghiệm.</li>
                  <li>Phát triển tính năng mới dựa trên nhu cầu thực tế.</li>
                  <li>Nghiên cứu thị trường và xu hướng.</li>
                </ul>

                <h3>2.3. Marketing và truyền thông</h3>
                <ul>
                  <li>Gửi thông báo về chương trình khuyến mãi, ưu đãi.</li>
                  <li>Gửi bản tin, tin tức về dịch vụ mới.</li>
                  <li>Thực hiện khảo sát ý kiến khách hàng.</li>
                </ul>

                <h3>2.4. An ninh và tuân thủ pháp luật</h3>
                <ul>
                  <li>Phát hiện và ngăn chặn gian lận, hoạt động bất hợp pháp.</li>
                  <li>Giải quyết tranh chấp và khiếu nại.</li>
                  <li>Tuân thủ yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
                </ul>

                <h2 id="section-3" className="scroll-mt-24">
                  Điều 3: Bảo Mật Thông Tin
                </h2>

                <p>RentCarVN áp dụng các biện pháp bảo mật tiên tiến:</p>

                <h3>3.1. Biện pháp kỹ thuật</h3>
                <ul>
                  <li><strong>Mã hóa SSL/TLS:</strong> Tất cả dữ liệu truyền tải được mã hóa.</li>
                  <li><strong>Firewall:</strong> Hệ thống tường lửa bảo vệ máy chủ.</li>
                  <li><strong>Xác thực đa yếu tố (2FA):</strong> Tăng cường bảo mật tài khoản.</li>
                  <li><strong>Sao lưu định kỳ:</strong> Dữ liệu được backup thường xuyên.</li>
                </ul>

                <h3>3.2. Biện pháp quản lý</h3>
                <ul>
                  <li>Chỉ nhân viên được ủy quyền mới có quyền truy cập dữ liệu.</li>
                  <li>Ký cam kết bảo mật với tất cả nhân viên và đối tác.</li>
                  <li>Giám sát và kiểm tra định kỳ hệ thống bảo mật.</li>
                  <li>Đào tạo nhân viên về quy định bảo vệ dữ liệu cá nhân.</li>
                </ul>

                <h2 id="section-4" className="scroll-mt-24">
                  Điều 4: Chia Sẻ Thông Tin
                </h2>

                <p>Chúng tôi chỉ chia sẻ thông tin của bạn trong các trường hợp sau:</p>

                <h3>4.1. Với bên thứ ba cần thiết</h3>
                <ul>
                  <li><strong>Đối tác thanh toán:</strong> Ngân hàng, cổng thanh toán để xử lý giao dịch.</li>
                  <li><strong>Đối tác vận hành:</strong> Dịch vụ SMS, email, thông báo đẩy.</li>
                  <li><strong>Đối tác phân tích:</strong> Google Analytics, Facebook Pixel (dữ liệu ẩn danh).</li>
                  <li><strong>Công ty bảo hiểm:</strong> Khi xảy ra sự cố cần giải quyết bồi thường.</li>
                </ul>

                <h3>4.2. Theo yêu cầu pháp luật</h3>
                <ul>
                  <li>Cơ quan công an, tòa án, viện kiểm sát có văn bản yêu cầu hợp lệ.</li>
                  <li>Bảo vệ quyền lợi, an toàn của RentCarVN và người dùng khác.</li>
                  <li>Phòng chống gian lận và hoạt động vi phạm pháp luật.</li>
                </ul>

                <h3>4.3. Với sự đồng ý của bạn</h3>
                <p>
                  Trong các trường hợp khác, chúng tôi sẽ xin phép bạn trước khi chia sẻ thông tin 
                  cho bên thứ ba.
                </p>

                <h2 id="section-5" className="scroll-mt-24">
                  Điều 5: Quyền Của Người Dùng
                </h2>

                <p>Bạn có các quyền sau đối với dữ liệu cá nhân của mình:</p>

                <h3>5.1. Quyền truy cập và sao chép</h3>
                <ul>
                  <li>Yêu cầu xem thông tin cá nhân mà chúng tôi đang lưu trữ.</li>
                  <li>Nhận bản sao dữ liệu của bạn ở định dạng phổ biến.</li>
                </ul>

                <h3>5.2. Quyền chỉnh sửa và cập nhật</h3>
                <ul>
                  <li>Sửa đổi thông tin cá nhân không chính xác hoặc lỗi thời.</li>
                  <li>Cập nhật thông tin trực tiếp trên tài khoản hoặc liên hệ với chúng tôi.</li>
                </ul>

                <h3>5.3. Quyền xóa dữ liệu</h3>
                <ul>
                  <li>Yêu cầu xóa dữ liệu cá nhân trong một số trường hợp nhất định.</li>
                  <li>Lưu ý: Một số dữ liệu cần giữ lại để tuân thủ pháp luật.</li>
                </ul>

                <h3>5.4. Quyền rút lại sự đồng ý</h3>
                <ul>
                  <li>Hủy đăng ký nhận email marketing bất cứ lúc nào.</li>
                  <li>Tắt thông báo đẩy trong cài đặt ứng dụng.</li>
                  <li>Từ chối thu thập dữ liệu vị trí, cookie.</li>
                </ul>

                <h3>5.5. Quyền khiếu nại</h3>
                <p>
                  Nếu bạn cho rằng quyền riêng tư của bạn bị vi phạm, bạn có quyền khiếu nại 
                  với RentCarVN hoặc cơ quan quản lý nhà nước có thẩm quyền.
                </p>

                <h2 id="section-6" className="scroll-mt-24">
                  Điều 6: Cookie Và Công Nghệ Theo Dõi
                </h2>

                <h3>6.1. Cookie là gì?</h3>
                <p>
                  Cookie là các tệp văn bản nhỏ được lưu trên thiết bị của bạn khi truy cập website. 
                  Chúng giúp website "ghi nhớ" bạn và cải thiện trải nghiệm sử dụng.
                </p>

                <h3>6.2. Các loại cookie chúng tôi sử dụng</h3>
                <ul>
                  <li><strong>Cookie cần thiết:</strong> Để website hoạt động bình thường (đăng nhập, giỏ hàng).</li>
                  <li><strong>Cookie hiệu suất:</strong> Thu thập dữ liệu ẩn danh về cách bạn sử dụng website.</li>
                  <li><strong>Cookie chức năng:</strong> Ghi nhớ lựa chọn của bạn (ngôn ngữ, vị trí).</li>
                  <li><strong>Cookie quảng cáo:</strong> Hiển thị quảng cáo phù hợp với sở thích của bạn.</li>
                </ul>

                <h3>6.3. Quản lý cookie</h3>
                <p>
                  Bạn có thể quản lý hoặc xóa cookie thông qua cài đặt trình duyệt. 
                  Lưu ý rằng việc tắt cookie có thể ảnh hưởng đến trải nghiệm sử dụng website.
                </p>

                <div className="mt-12 space-y-4">
                  <div className="p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-2">Cam kết bảo mật</h4>
                        <p className="text-sm text-muted-foreground">
                          RentCarVN cam kết không bán, cho thuê hoặc trao đổi thông tin cá nhân của bạn 
                          cho bên thứ ba vì mục đích thương mại mà không có sự đồng ý của bạn.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-2">Liên hệ về quyền riêng tư</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Nếu bạn có thắc mắc về chính sách bảo mật hoặc muốn thực hiện quyền của mình, 
                          vui lòng liên hệ:
                        </p>
                        <p className="text-sm">
                          <strong>Email:</strong>{' '}
                          <a href="mailto:privacy@rentcarvn.com" className="text-primary hover:underline">
                            privacy@rentcarvn.com
                          </a>
                          <br />
                          <strong>Hotline:</strong> 1900-1234
                        </p>
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

export default Privacy;
