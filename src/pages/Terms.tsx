import { FileText, Calendar, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  const tableOfContents = [
    { id: 'section-1', title: 'Điều 1: Chấp Nhận Điều Khoản' },
    { id: 'section-2', title: 'Điều 2: Quyền Và Nghĩa Vụ' },
    { id: 'section-3', title: 'Điều 3: Sử Dụng Dịch Vụ' },
    { id: 'section-4', title: 'Điều 4: Thanh Toán' },
    { id: 'section-5', title: 'Điều 5: Giới Hạn Trách Nhiệm' },
    { id: 'section-6', title: 'Điều 6: Thay Đổi Điều Khoản' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Điều Khoản Sử Dụng</h1>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Cập nhật lần cuối: 15/01/2025</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              Điều khoản và điều kiện sử dụng dịch vụ cho thuê xe tự lái RentCarVN
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
                  Điều 1: Chấp Nhận Điều Khoản
                </h2>
                
                <p>
                  Bằng cách truy cập, đăng ký tài khoản hoặc sử dụng bất kỳ dịch vụ nào của RentCarVN, 
                  bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý tuân thủ toàn bộ các điều khoản và điều kiện 
                  được quy định trong tài liệu này.
                </p>

                <h3>1.1. Phạm vi áp dụng</h3>
                <ul>
                  <li>Điều khoản này áp dụng cho tất cả người dùng: khách thuê xe và chủ xe.</li>
                  <li>Áp dụng trên mọi nền tảng: website, ứng dụng di động và các kênh khác của RentCarVN.</li>
                  <li>Có hiệu lực kể từ ngày bạn bắt đầu sử dụng dịch vụ.</li>
                </ul>

                <h3>1.2. Điều kiện sử dụng</h3>
                <ul>
                  <li>Bạn phải từ đủ 18 tuổi trở lên để đăng ký tài khoản.</li>
                  <li>Cung cấp thông tin chính xác, đầy đủ và cập nhật thường xuyên.</li>
                  <li>Chịu trách nhiệm bảo mật thông tin đăng nhập tài khoản của bạn.</li>
                  <li>Không được chuyển nhượng tài khoản cho người khác.</li>
                </ul>

                <h2 id="section-2" className="scroll-mt-24">
                  Điều 2: Quyền Và Nghĩa Vụ
                </h2>

                <h3>2.1. Quyền của người dùng</h3>
                <p>Khi sử dụng dịch vụ RentCarVN, bạn có các quyền sau:</p>
                <ul>
                  <li>Được cung cấp thông tin đầy đủ, chính xác về xe và điều kiện thuê.</li>
                  <li>Được bảo vệ thông tin cá nhân theo quy định pháp luật.</li>
                  <li>Được hỗ trợ 24/7 qua hotline và các kênh liên lạc chính thức.</li>
                  <li>Được khiếu nại và giải quyết tranh chấp theo quy trình.</li>
                  <li>Được hoàn tiền theo chính sách hủy chuyến.</li>
                </ul>

                <h3>2.2. Nghĩa vụ của người dùng</h3>
                <ul>
                  <li>Tuân thủ pháp luật Việt Nam và các quy định của RentCarVN.</li>
                  <li>Cung cấp thông tin chính xác, không gian lận.</li>
                  <li>Thanh toán đầy đủ, đúng hạn các khoản phí dịch vụ.</li>
                  <li>Bảo quản xe cẩn thận, sử dụng đúng mục đích.</li>
                  <li>Bồi thường thiệt hại nếu vi phạm gây tổn thất cho RentCarVN hoặc bên thứ ba.</li>
                </ul>

                <h2 id="section-3" className="scroll-mt-24">
                  Điều 3: Sử Dụng Dịch Vụ
                </h2>

                <h3>3.1. Hành vi được phép</h3>
                <ul>
                  <li>Sử dụng xe cho mục đích cá nhân, du lịch, công tác hợp pháp.</li>
                  <li>Di chuyển trong phạm vi lãnh thổ Việt Nam.</li>
                  <li>Liên hệ hỗ trợ khi gặp sự cố trong quá trình thuê xe.</li>
                </ul>

                <h3>3.2. Hành vi nghiêm cấm</h3>
                <ul>
                  <li>Sử dụng xe vào mục đích vi phạm pháp luật (vận chuyển hàng cấm, ma túy...).</li>
                  <li>Cho thuê lại, cầm cố xe cho bên thứ ba.</li>
                  <li>Sử dụng xe để tham gia đua xe, biểu diễn nguy hiểm.</li>
                  <li>Làm giả giấy tờ, cung cấp thông tin gian lận.</li>
                  <li>Hủy hoại, tẩy xóa thiết bị định vị GPS trên xe.</li>
                  <li>Can thiệp, xâm nhập trái phép vào hệ thống RentCarVN.</li>
                </ul>

                <h3>3.3. Xử lý vi phạm</h3>
                <p>RentCarVN có quyền:</p>
                <ul>
                  <li>Cảnh cáo, tạm khóa hoặc khóa vĩnh viễn tài khoản vi phạm.</li>
                  <li>Thu hồi xe ngay lập tức nếu phát hiện hành vi vi phạm nghiêm trọng.</li>
                  <li>Yêu cầu bồi thường thiệt hại và truy cứu trách nhiệm pháp lý.</li>
                </ul>

                <h2 id="section-4" className="scroll-mt-24">
                  Điều 4: Thanh Toán
                </h2>

                <h3>4.1. Phương thức thanh toán</h3>
                <p>RentCarVN chấp nhận các hình thức thanh toán sau:</p>
                <ul>
                  <li>Chuyển khoản ngân hàng.</li>
                  <li>Thanh toán qua ví điện tử (Momo, ZaloPay, VNPay...).</li>
                  <li>Thanh toán bằng thẻ tín dụng/thẻ ghi nợ quốc tế.</li>
                  <li>Thanh toán tại văn phòng (chỉ áp dụng một số trường hợp).</li>
                </ul>

                <h3>4.2. Chính sách hoàn tiền</h3>
                <ul>
                  <li>Hoàn tiền theo chính sách hủy chuyến đã công bố.</li>
                  <li>Thời gian hoàn tiền: 5-7 ngày làm việc kể từ ngày xác nhận.</li>
                  <li>Hoàn tiền vào tài khoản/ví điện tử mà bạn đã sử dụng để thanh toán.</li>
                  <li>Phí giao dịch (nếu có) sẽ không được hoàn lại.</li>
                </ul>

                <h2 id="section-5" className="scroll-mt-24">
                  Điều 5: Giới Hạn Trách Nhiệm
                </h2>

                <p>
                  RentCarVN là nền tảng kết nối giữa chủ xe và khách thuê. Chúng tôi nỗ lực đảm bảo 
                  chất lượng dịch vụ, tuy nhiên:
                </p>

                <ul>
                  <li>
                    <strong>Không chịu trách nhiệm:</strong> Đối với thiệt hại phát sinh do lỗi của bên thứ ba, 
                    thiên tai, hỏa hoạn, chiến tranh hoặc các sự kiện bất khả kháng.
                  </li>
                  <li>
                    <strong>Giới hạn bồi thường:</strong> Trách nhiệm bồi thường tối đa không vượt quá 
                    giá trị giao dịch thực tế mà bạn đã thanh toán.
                  </li>
                  <li>
                    <strong>Miễn trừ:</strong> Không chịu trách nhiệm về hành vi vi phạm pháp luật 
                    của người dùng khi sử dụng xe.
                  </li>
                </ul>

                <h2 id="section-6" className="scroll-mt-24">
                  Điều 6: Thay Đổi Điều Khoản
                </h2>

                <p>
                  RentCarVN có quyền sửa đổi, bổ sung điều khoản sử dụng này bất cứ lúc nào. 
                  Mọi thay đổi sẽ được thông báo qua:
                </p>

                <ul>
                  <li>Email đăng ký của bạn.</li>
                  <li>Thông báo trên website và ứng dụng.</li>
                  <li>Tin nhắn SMS (đối với thay đổi quan trọng).</li>
                </ul>

                <p>
                  Việc bạn tiếp tục sử dụng dịch vụ sau khi có thông báo thay đổi được xem là 
                  bạn chấp nhận các điều khoản mới.
                </p>

                <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">Lưu ý quan trọng</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng dịch vụ 
                        và liên hệ với chúng tôi để được hỗ trợ.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Xem thêm: <Link to="/policy" className="text-primary hover:underline">Chính sách chung</Link> | 
                        <Link to="/privacy" className="text-primary hover:underline ml-1">Chính sách bảo mật</Link>
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

export default Terms;
