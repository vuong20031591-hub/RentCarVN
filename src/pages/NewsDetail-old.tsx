import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, Eye, MessageSquare, Share2, Facebook, Twitter, Home, ChevronRight, Mail, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { fadeInUp } from '@/lib/motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Sample article data (in real app, this would come from API/database)
const articles = [
  {
    id: 1,
    title: '10 Bí Quyết Cho Thuê Xe Hiệu Quả Và Tăng Thu Nhập',
    excerpt: 'Khám phá những chiến lược đã được chứng minh để tối ưu hóa thu nhập từ việc cho thuê xe của bạn.',
    content: `
      <h2>Giới Thiệu</h2>
      <p>Cho thuê xe tự lái đang trở thành một nguồn thu nhập hấp dẫn cho nhiều chủ xe. Tuy nhiên, để thực sự thành công và tối đa hóa lợi nhuận, bạn cần áp dụng những chiến lược thông minh và hiệu quả.</p>

      <h2>1. Định Giá Cạnh Tranh</h2>
      <p>Việc định giá đúng là yếu tố quyết định đến tỷ lệ cho thuê của bạn. Nghiên cứu thị trường, xem giá của các xe tương tự trong khu vực và điều chỉnh giá phù hợp theo mùa và nhu cầu.</p>
      
      <ul>
        <li>So sánh với ít nhất 5-7 xe cùng dòng trong bán kính 5km</li>
        <li>Giảm giá 10-15% cho khách thuê dài hạn (trên 7 ngày)</li>
        <li>Tăng giá 20-30% vào các dịp lễ, tết</li>
      </ul>

      <h2>2. Chất Lượng Hình Ảnh</h2>
      <p>Hình ảnh chính là điều đầu tiên khách hàng nhìn thấy. Đầu tư vào bộ ảnh chuyên nghiệp sẽ giúp tăng tỷ lệ booking lên đến 40%.</p>

      <h3>Tips chụp ảnh:</h3>
      <ul>
        <li>Chụp vào buổi sáng hoặc chiều muộn khi ánh sáng đẹp nhất</li>
        <li>Làm sạch xe kỹ lưỡng trước khi chụp</li>
        <li>Chụp đủ 10-15 ảnh: ngoại thất, nội thất, động cơ, cốp xe</li>
        <li>Sử dụng background đơn giản, không rối mắt</li>
      </ul>

      <h2>3. Mô Tả Chi Tiết Và Trung Thực</h2>
      <p>Mô tả càng chi tiết, khách hàng càng tin tưởng. Liệt kê đầy đủ các tính năng, tiện nghi và điều kiện thuê xe.</p>

      <h2>4. Phản Hồi Nhanh Chóng</h2>
      <p>Khách hàng đánh giá cao sự phản hồi nhanh. Cố gắng trả lời tin nhắn trong vòng 30 phút để không bỏ lỡ booking.</p>

      <h2>5. Dịch Vụ Khách Hàng Xuất Sắc</h2>
      <p>Hướng dẫn kỹ càng khi giao xe, tạo cảm giác thoải mái cho khách và luôn sẵn sàng hỗ trợ trong suốt chuyến đi.</p>

      <h2>6. Bảo Dưỡng Xe Định Kỳ</h2>
      <p>Xe luôn trong tình trạng tốt sẽ nhận được nhiều đánh giá 5 sao và khách hàng quay lại.</p>

      <h2>7. Chính Sách Linh Hoạt</h2>
      <p>Cung cấp nhiều options cho khách: giao xe tận nơi, giảm giá thuê dài hạn, cho phép gia hạn dễ dàng.</p>

      <h2>8. Marketing Thông Minh</h2>
      <p>Đăng tin trên nhiều nền tảng, share trên social media, và khuyến khích khách cũ giới thiệu.</p>

      <h2>9. Quản Lý Lịch Hiệu Quả</h2>
      <p>Sử dụng app để quản lý booking, tránh trùng lịch và tối ưu hóa thời gian xe không sử dụng.</p>

      <h2>10. Tích Lũy Đánh Giá Tốt</h2>
      <p>Đánh giá 5 sao là tài sản quý giá nhất. Luôn làm hài lòng khách hàng và lịch sự yêu cầu họ để lại review.</p>

      <h2>Kết Luận</h2>
      <p>Áp dụng 10 bí quyết trên một cách nhất quán, bạn sẽ thấy thu nhập từ cho thuê xe tăng lên đáng kể. Hãy kiên nhẫn, không ngừng học hỏi và cải thiện dịch vụ của mình.</p>
    `,
    author: 'Nguyễn Văn A',
    date: '2025-01-15',
    readTime: '5 phút',
    category: 'tips',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200',
    views: 1250,
    comments: 23,
    tags: ['Kinh Nghiệm', 'Thu Nhập', 'Marketing']
  },
  {
    id: 2,
    title: 'Xu Hướng Thuê Xe Tự Lái 2025: Những Gì Bạn Cần Biết',
    excerpt: 'Thị trường thuê xe tự lái đang có những thay đổi lớn. Cùng tìm hiểu những xu hướng mới nhất.',
    content: `
      <h2>Tổng Quan Thị Trường</h2>
      <p>Năm 2025 đánh dấu một bước ngoặt quan trọng trong ngành cho thuê xe tự lái tại Việt Nam. Với sự phát triển của công nghệ và thay đổi hành vi tiêu dùng, thị trường đang chuyển mình mạnh mẽ.</p>

      <h2>Xu Hướng 1: Xe Điện Lên Ngôi</h2>
      <p>VinFast và các thương hiệu xe điện đang chiếm lĩnh thị trường. Khách hàng ngày càng ưu chuộng xe điện vì:</p>
      <ul>
        <li>Chi phí nhiên liệu thấp hơn 70% so với xe xăng</li>
        <li>Thân thiện môi trường</li>
        <li>Công nghệ hiện đại, trải nghiệm mới mẻ</li>
      </ul>

      <h2>Xu Hướng 2: Booking Qua App Là Chủ Đạo</h2>
      <p>98% giao dịch thuê xe được thực hiện qua app. Khách hàng mong đợi:</p>
      <ul>
        <li>Booking tức thì 24/7</li>
        <li>Thanh toán online</li>
        <li>Tracking xe realtime</li>
        <li>Hỗ trợ chatbot</li>
      </ul>

      <h2>Xu Hướng 3: Thuê Xe Dài Hạn Tăng Mạnh</h2>
      <p>Nhiều người chọn thuê xe tháng/năm thay vì mua để tiết kiệm chi phí và linh hoạt hơn.</p>

      <h2>Xu Hướng 4: Xe Cao Cấp & SUV Hot</h2>
      <p>Phân khúc xe cao cấp và SUV 7 chỗ có tốc độ tăng trưởng nhanh nhất (45% YoY).</p>

      <h2>Xu Hướng 5: Trải Nghiệm Cá Nhân Hóa</h2>
      <p>Khách hàng mong đợi dịch vụ được customize: chọn mùi hương, nhạc, nhiệt độ sẵn...</p>

      <h2>Cơ Hội Cho Chủ Xe</h2>
      <p>Đây là thời điểm vàng để đầu tư vào xe điện và xe cao cấp. Thị trường đang thiếu nguồn cung chất lượng.</p>
    `,
    author: 'Trần Thị B',
    date: '2025-01-14',
    readTime: '7 phút',
    category: 'news',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200',
    views: 980,
    comments: 15,
    tags: ['Xu Hướng', 'Thị Trường', '2025']
  },
  {
    id: 3,
    title: 'Hướng Dẫn Chi Tiết: Đăng Ký Cho Thuê Xe Trên RentCarVN',
    excerpt: 'Quy trình đăng ký từng bước một, từ chuẩn bị giấy tờ đến chụp ảnh xe chuyên nghiệp.',
    content: `
      <h2>Bước 1: Chuẩn Bị Giấy Tờ</h2>
      <p>Các giấy tờ cần thiết:</p>
      <ul>
        <li>CMND/CCCD còn hiệu lực</li>
        <li>Đăng ký xe (bản gốc hoặc photo công chứng)</li>
        <li>Bảo hiểm xe còn hạn</li>
        <li>Giấy phép lái xe (của chủ xe)</li>
      </ul>

      <h2>Bước 2: Tạo Tài Khoản</h2>
      <p>Truy cập RentCarVN.com > Trở thành chủ xe > Đăng ký</p>

      <h2>Bước 3: Điền Thông Tin Xe</h2>
      <p>Cung cấp đầy đủ thông tin về xe của bạn...</p>

      <h2>Bước 4: Upload Hình Ảnh</h2>
      <p>Chụp và upload ít nhất 10 ảnh chất lượng cao...</p>

      <h2>Bước 5: Xác Minh</h2>
      <p>Đội ngũ RentCarVN sẽ xác minh trong 24h...</p>

      <h2>Bước 6: Đăng Tin</h2>
      <p>Sau khi được duyệt, xe của bạn sẽ xuất hiện trên nền tảng...</p>

      <h2>Bước 7: Nhận Booking</h2>
      <p>Bắt đầu nhận booking và kiếm thu nhập!</p>
    `,
    author: 'Lê Văn C',
    date: '2025-01-13',
    readTime: '10 phút',
    category: 'guide',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200',
    views: 1580,
    comments: 34,
    tags: ['Hướng Dẫn', 'Đăng Ký', 'Tutorial']
  },
];

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = articles.find(a => a.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h2>
          <Button onClick={() => navigate('/news')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại trang tin tức
          </Button>
        </div>
      </div>
    );
  }

  const relatedArticles = articles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" onClick={() => navigate('/news')} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Quay lại tin tức
        </Button>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              {article.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{article.views} lượt xem</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>{article.comments} bình luận</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <motion.article
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="article-content"
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t not-prose">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4 mt-8 not-prose">
                <span className="font-semibold">Chia sẻ:</span>
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Author Info */}
              <div className="bg-card p-6 rounded-xl shadow-md border">
                <h3 className="font-bold mb-4">Về tác giả</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-bold">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{article.author}</div>
                    <div className="text-sm text-muted-foreground">Chuyên gia cho thuê xe</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Có nhiều năm kinh nghiệm trong lĩnh vực cho thuê xe tự lái.
                </p>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-card p-6 rounded-xl shadow-md border">
                  <h3 className="font-bold mb-4">Bài viết liên quan</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        to={`/news/${related.id}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                              {related.title}
                            </h4>
                            <div className="text-xs text-muted-foreground mt-1">
                              {related.readTime}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border-2 border-primary/20">
                <h3 className="font-bold mb-2">Trở thành chủ xe</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Bắt đầu kiếm thu nhập từ xe của bạn ngay hôm nay!
                </p>
                <Button className="w-full" onClick={() => navigate('/become-owner')}>
                  Đăng ký ngay
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Bài viết liên quan</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/news/${related.id}`}
                  className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{related.readTime}</span>
                      <span>{related.views} lượt xem</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsDetail;
