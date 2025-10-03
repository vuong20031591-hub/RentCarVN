import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, Eye, MessageSquare, Share2, Facebook, Twitter, Home, ChevronRight, Mail, Bookmark, Printer, ThumbsUp, ThumbsDown, CornerDownRight, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Sample comments data
const sampleComments = [
  {
    id: 1,
    user: 'Nguyễn Văn A',
    avatar: 'NVA',
    time: '2 giờ trước',
    content: 'Bài viết rất chi tiết và hữu ích! Tôi đã áp dụng được một số bí quyết và thấy booking tăng đáng kể. Đặc biệt là phần về chụp ảnh chuyên nghiệp, cảm ơn tác giả!',
    likes: 15,
    dislikes: 2,
    replies: [
      {
        id: 11,
        user: 'Trần Thị B',
        avatar: 'TTB',
        time: '1 giờ trước',
        content: 'Đồng ý luôn! Tôi cũng đang áp dụng và thấy hiệu quả rõ rệt.',
        likes: 5,
        dislikes: 0
      }
    ]
  },
  {
    id: 2,
    user: 'Lê Văn C',
    avatar: 'LVC',
    time: '5 giờ trước',
    content: 'Cho mình hỏi về vấn đề bảo hiểm khi cho thuê xe, nếu khách làm hỏng xe thì xử lý thế nào ạ?',
    likes: 8,
    dislikes: 0,
    replies: [
      {
        id: 21,
        user: 'Admin RentCarVN',
        avatar: 'AD',
        time: '4 giờ trước',
        content: 'Chào bạn! RentCarVN có chính sách bảo hiểm toàn diện. Nếu khách làm hỏng xe, bảo hiểm sẽ chi trả và bạn chỉ chịu phần khấu hao theo quy định. Tham khảo thêm tại mục "Bảo hiểm" nhé!',
        likes: 12,
        dislikes: 0
      }
    ]
  },
  {
    id: 3,
    user: 'Phạm Thị D',
    avatar: 'PTD',
    time: '1 ngày trước',
    content: 'Tôi mới cho thuê được 2 tháng nhưng thu nhập chưa được như kỳ vọng. Có thể là do giá thuê của tôi cao hơn thị trường một chút. Sẽ thử điều chỉnh giá theo lời khuyên trong bài.',
    likes: 6,
    dislikes: 1,
    replies: []
  },
  {
    id: 4,
    user: 'Hoàng Văn E',
    avatar: 'HVE',
    time: '1 ngày trước',
    content: 'Bài viết hay, nhưng tôi thấy còn thiếu phần về cách xử lý khi gặp khách khó tính. Mong tác giả viết thêm về vấn đề này.',
    likes: 10,
    dislikes: 0,
    replies: []
  }
];

// Most viewed articles for sidebar
const mostViewedArticles = [
  {
    id: 2,
    title: 'Xu Hướng Thuê Xe Tự Lái 2025: Những Gì Bạn Cần Biết',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300',
    comments: 15,
    category: 'news'
  },
  {
    id: 3,
    title: 'Hướng Dẫn Chi Tiết: Đăng Ký Cho Thuê Xe Trên RentCarVN',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300',
    comments: 34,
    category: 'guide'
  },
  {
    id: 4,
    title: 'Bảo Hiểm Xe Cho Thuê: Những Điều Quan Trọng Cần Biết',
    image: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=300',
    comments: 12,
    category: 'tips'
  },
  {
    id: 5,
    title: 'Cách Chụp Ảnh Xe Để Thu Hút Khách Hàng',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300',
    comments: 18,
    category: 'tips'
  },
  {
    id: 7,
    title: 'Top 5 Mẫu Xe Được Thuê Nhiều Nhất 2024',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300',
    comments: 28,
    category: 'news'
  },
];

// Sample article data
const articles = [
  {
    id: 1,
    title: '10 Bí Quyết Cho Thuê Xe Hiệu Quả Và Tăng Thu Nhập',
    description: 'Khám phá những chiến lược đã được chứng minh để tối ưu hóa thu nhập từ việc cho thuê xe của bạn. Từ định giá đến marketing, bài viết cung cấp hướng dẫn chi tiết giúp bạn kiếm thêm 10-20 triệu/tháng.',
    content: `
      <p class="description">Cho thuê xe tự lái đang trở thành một nguồn thu nhập hấp dẫn cho nhiều chủ xe. Tuy nhiên, để thực sự thành công và tối đa hóa lợi nhuận, bạn cần áp dụng những chiến lược thông minh và hiệu quả.</p>

      <h2>1. Định Giá Cạnh Tranh</h2>
      <p>Việc định giá đúng là yếu tố quyết định đến tỷ lệ cho thuê của bạn. Nghiên cứu thị trường, xem giá của các xe tương tự trong khu vực và điều chỉnh giá phù hợp theo mùa và nhu cầu.</p>
      
      <p>Theo khảo sát từ RentCarVN, những chủ xe định giá linh hoạt có tỷ lệ booking cao hơn 35% so với những người giữ giá cố định. Điều này cho thấy tầm quan trọng của việc theo dõi thị trường liên tục.</p>

      <figure>
        <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800" alt="Định giá thuê xe" />
        <figcaption>Định giá đúng là yếu tố quan trọng nhất. Ảnh: <em>Unsplash</em></figcaption>
      </figure>

      <p><strong>Chiến lược định giá hiệu quả:</strong></p>
      <ul>
        <li>So sánh với ít nhất 5-7 xe cùng dòng trong bán kính 5km</li>
        <li>Giảm giá 10-15% cho khách thuê dài hạn (trên 7 ngày)</li>
        <li>Tăng giá 20-30% vào các dịp lễ, tết</li>
        <li>Áp dụng giá động theo nhu cầu thị trường</li>
      </ul>

      <h2>2. Chất Lượng Hình Ảnh Quyết Định 40% Booking</h2>
      <p>Hình ảnh chính là điều đầu tiên khách hàng nhìn thấy. Đầu tư vào bộ ảnh chuyên nghiệp sẽ giúp tăng tỷ lệ booking lên đến 40% - một con số ấn tượng từ nghiên cứu của chúng tôi.</p>

      <figure>
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800" alt="Chụp ảnh xe chuyên nghiệp" />
        <figcaption>Hình ảnh chất lượng cao thu hút khách hàng. Ảnh: <em>Unsplash</em></figcaption>
      </figure>

      <h3>Tips chụp ảnh chuyên nghiệp:</h3>
      <ul>
        <li>Chụp vào buổi sáng (7-9h) hoặc chiều muộn (16-18h) khi ánh sáng đẹp nhất</li>
        <li>Làm sạch xe kỹ lưỡng: rửa ngoại thất, hút bụi nội thất, lau chùi bảng điều khiển</li>
        <li>Chụp đủ 10-15 ảnh: 4-5 ảnh ngoại thất từ các góc khác nhau, 5-6 ảnh nội thất, 2-3 ảnh động cơ và cốp xe</li>
        <li>Sử dụng background đơn giản: tường trắng, bãi đỗ xe sạch sẽ, công viên</li>
        <li>Tránh chụp trong điều kiện ánh sáng yếu hoặc mưa</li>
      </ul>

      <h2>3. Mô Tả Chi Tiết Tạo Niềm Tin</h2>
      <p>Mô tả càng chi tiết, khách hàng càng tin tưởng. Một bài đăng tin tốt cần có:</p>
      
      <ul>
        <li><strong>Thông số kỹ thuật:</strong> Năm sản xuất, số km đã đi, loại nhiên liệu, hộp số</li>
        <li><strong>Tính năng nổi bật:</strong> Camera lùi, cảm biến, định vị GPS, kết nối Bluetooth</li>
        <li><strong>Tình trạng xe:</strong> Bảo dưỡng định kỳ, lịch sử va chạm (nếu có)</li>
        <li><strong>Tiện nghi:</strong> Điều hòa, màn hình cảm ứng, cửa sổ trời</li>
        <li><strong>Điều kiện thuê:</strong> CMND + GPLX, tiền cọc, giới hạn km/ngày</li>
      </ul>

      <h2>4. Phản Hồi Trong 30 Phút = Tăng 50% Conversion</h2>
      <p>Nghiên cứu cho thấy khách hàng có xu hướng booking với người đầu tiên phản hồi họ. Nếu bạn trả lời trong vòng 30 phút, tỷ lệ chuyển đổi tăng lên 50%.</p>

      <p><strong>Bí quyết phản hồi nhanh:</strong></p>
      <ul>
        <li>Bật thông báo ứng dụng RentCarVN trên điện thoại</li>
        <li>Chuẩn bị sẵn template trả lời cho các câu hỏi thường gặp</li>
        <li>Sử dụng tính năng "Trả lời nhanh" trong app</li>
        <li>Nếu bận, gửi tin nhắn ngắn xác nhận đã nhận được yêu cầu</li>
      </ul>

      <h2>5. Dịch Vụ Khách Hàng 5 Sao</h2>
      <p>Chất lượng dịch vụ quyết định 70% đánh giá của bạn. Những điều nhỏ nhặt tạo nên sự khác biệt lớn:</p>

      <ul>
        <li>Giao xe đúng giờ, đúng địa điểm đã hẹn</li>
        <li>Xe sạch sẽ, đầy bình xăng</li>
        <li>Hướng dẫn kỹ càng cách sử dụng các tính năng</li>
        <li>Chuẩn bị sẵn bản đồ, gợi ý địa điểm tham quan</li>
        <li>Check-in nhanh gọn, không gây stress cho khách</li>
        <li>Luôn sẵn sàng hỗ trợ qua điện thoại trong suốt chuyến đi</li>
      </ul>

      <figure>
        <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800" alt="Dịch vụ khách hàng" />
        <figcaption>Dịch vụ khách hàng tốt tạo nên sự khác biệt. Ảnh: <em>Unsplash</em></figcaption>
      </figure>

      <h2>6. Bảo Dưỡng Định Kỳ - Đầu Tư Dài Hạn</h2>
      <p>Xe được bảo dưỡng tốt không chỉ giảm chi phí sửa chữa mà còn tạo trải nghiệm tốt cho khách, dẫn đến nhiều đánh giá 5 sao và khách hàng quay lại.</p>

      <p><strong>Lịch bảo dưỡng cơ bản:</strong></p>
      <ul>
        <li>Thay dầu động cơ: 5.000-10.000 km</li>
        <li>Kiểm tra phanh, lốp xe: mỗi 2 tháng</li>
        <li>Vệ sinh nội thất: sau mỗi chuyến thuê</li>
        <li>Đại tu: 20.000-30.000 km</li>
      </ul>

      <h2>7. Chính Sách Linh Hoạt Thu Hút Khách</h2>
      <p>Những chính sách linh hoạt giúp bạn cạnh tranh tốt hơn:</p>

      <ul>
        <li><strong>Giao xe tận nơi:</strong> Phục vụ trong bán kính 10km miễn phí</li>
        <li><strong>Giảm giá thuê dài hạn:</strong> Từ 7 ngày trở lên</li>
        <li><strong>Cho phép gia hạn dễ dàng:</strong> Qua app, không cần gặp mặt</li>
        <li><strong>Chính sách hủy linh hoạt:</strong> Hoàn tiền 100% nếu hủy trước 24h</li>
      </ul>

      <h2>8. Marketing Thông Minh Tăng Độ Phủ</h2>
      <p>Đừng chỉ dựa vào một nền tảng. Chiến lược marketing đa kênh hiệu quả:</p>

      <ul>
        <li>Đăng tin trên RentCarVN, Facebook Marketplace, Chợ Tốt</li>
        <li>Tạo fanpage riêng cho dịch vụ cho thuê xe</li>
        <li>Share trên các group Facebook về du lịch, cho thuê xe</li>
        <li>Khuyến khích khách cũ giới thiệu bạn bè (giảm 5-10% cho lần thuê tiếp theo)</li>
        <li>Chạy quảng cáo Facebook Ads với budget nhỏ (300-500k/tháng)</li>
      </ul>

      <h2>9. Quản Lý Lịch Thông Minh</h2>
      <p>Sử dụng app RentCarVN để:</p>
      <ul>
        <li>Đồng bộ lịch booking từ nhiều nền tảng</li>
        <li>Tránh trùng lịch giữa các khách</li>
        <li>Tối ưu hóa thời gian xe không sử dụng</li>
        <li>Nhận thông báo tự động về booking mới</li>
        <li>Theo dõi thu nhập theo tháng/năm</li>
      </ul>

      <h2>10. Tích Lũy Đánh Giá Tốt - Tài Sản Vô Giá</h2>
      <p>Đánh giá 5 sao là tài sản quý giá nhất của bạn. Mỗi đánh giá tốt tăng 15% cơ hội được booking tiếp theo.</p>

      <p><strong>Cách xin review một cách tinh tế:</strong></p>
      <ul>
        <li>Làm hài lòng khách hàng bằng dịch vụ xuất sắc</li>
        <li>Sau khi khách trả xe, gửi tin nhắn cảm ơn</li>
        <li>Lịch sự nhắc nhở: "Anh/chị vui lòng để lại đánh giá giúp em nhé"</li>
        <li>Không áp lực, không ép buộc</li>
        <li>Nếu có vấn đề, giải quyết trước khi xin review</li>
      </ul>

      <h2>Kết Luận</h2>
      <p>Áp dụng 10 bí quyết trên một cách nhất quán, bạn sẽ thấy thu nhập từ cho thuê xe tăng lên đáng kể trong vòng 2-3 tháng. Hãy kiên nhẫn, không ngừng học hỏi và cải thiện dịch vụ của mình.</p>

      <p>Theo thống kê từ RentCarVN, những chủ xe áp dụng đầy đủ các bí quyết trên có thu nhập trung bình <strong>18 triệu đồng/tháng</strong>, cao hơn 65% so với mức trung bình của thị trường.</p>

      <p><em>Chúc các bạn thành công!</em></p>
    `,
    author: 'Nguyễn Văn A',
    authorBio: 'Chuyên gia cho thuê xe với 5 năm kinh nghiệm, quản lý đội xe 15 chiếc và thu nhập ổn định 25 triệu/tháng.',
    date: '2025-01-15',
    readTime: '5 phút',
    category: 'tips',
    categoryName: 'Kinh Nghiệm',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200',
    views: 1250,
    comments: 23,
    tags: ['Kinh Nghiệm', 'Thu Nhập', 'Marketing', 'Cho Thuê Xe']
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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h2>
          <Button onClick={() => navigate('/news')}>
            Quay lại trang tin tức
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Breadcrumb */}
      <div className="border-b bg-card/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="h-3.5 w-3.5" />
              Trang chủ
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/news" className="hover:text-primary transition-colors">
              Tin tức
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/news?category=tips" className="hover:text-primary transition-colors">
              {article.categoryName}
            </Link>
          </div>
        </div>
      </div>

      {/* Article Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 max-w-[1200px] mx-auto">
        {/* Main Content */}
        <div>
          {/* Category Badge */}
          <div className="mb-4">
            <Link to={`/news?category=${article.category}`}>
              <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                {article.categoryName}
              </Badge>
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {article.title}
          </h1>

          {/* Description/Excerpt */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
            {article.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              <span className="font-medium text-foreground">{article.author}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('vi-VN', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Social Actions Bar */}
          <div className="flex items-center justify-between py-4 border-y mb-8">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Facebook className="h-4 w-4" />
                Chia sẻ
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Twitter className="h-4 w-4" />
                Tweet
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Bookmark className="h-4 w-4" />
                Lưu
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Printer className="h-4 w-4" />
                In
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <figure className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full rounded-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">
              Ảnh minh họa
            </figcaption>
          </figure>

          {/* Article Content */}
          <article 
            className="article-content prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t">
            <span className="text-sm font-semibold text-muted-foreground">Tags:</span>
            {article.tags.map((tag, index) => (
              <Link
                key={index}
                to={`/news?tag=${encodeURIComponent(tag)}`}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary hover:bg-secondary/80 text-sm transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 bg-secondary/50 rounded-xl border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {article.author.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{article.author}</h3>
                <p className="text-sm text-muted-foreground mb-3">{article.authorBio}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Xem bài viết khác</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Stats */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{article.views.toLocaleString()} lượt xem</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>{article.comments} bình luận</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              <span>Chia sẻ</span>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Ý kiến ({sampleComments.length})</h3>
              <select className="px-3 py-1.5 border rounded-lg text-sm bg-background">
                <option>Quan tâm nhất</option>
                <option>Mới nhất</option>
              </select>
            </div>

            {/* Comment Form */}
            <div className="mb-8 p-4 bg-secondary/30 rounded-lg">
              <div className="flex gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold flex-shrink-0">
                  U
                </div>
                <div className="flex-1">
                  <Textarea
                    placeholder="Bạn chưa nhập nội dung bình luận..."
                    className="min-h-[80px] resize-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pl-13">
                <p className="text-xs text-muted-foreground">
                  Hãy <Link to="/login" className="text-primary hover:underline">đăng nhập</Link> hoặc <Link to="/register" className="text-primary hover:underline">tạo tài khoản</Link> để gửi bình luận
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">Hủy</Button>
                  <Button size="sm">Gửi</Button>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {sampleComments.map((comment) => (
                <div key={comment.id} className="group">
                  {/* Main Comment */}
                  <div className="flex gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {comment.avatar}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* User Info */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">{comment.user}</span>
                        <span className="text-xs text-muted-foreground">• {comment.time}</span>
                      </div>

                      {/* Comment Text */}
                      <p className="text-[15px] leading-relaxed mb-3">{comment.content}</p>

                      {/* Actions */}
                      <div className="flex items-center gap-4 text-sm">
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                          <ThumbsUp className="h-3.5 w-3.5" />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors">
                          <ThumbsDown className="h-3.5 w-3.5" />
                          {comment.dislikes > 0 && <span>{comment.dislikes}</span>}
                        </button>
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                          <CornerDownRight className="h-3.5 w-3.5" />
                          <span>Trả lời</span>
                        </button>
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors">
                          <Flag className="h-3.5 w-3.5" />
                          <span>Báo cáo</span>
                        </button>
                      </div>

                      {/* Replies */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="mt-4 space-y-4">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="flex gap-3 pl-4 border-l-2 border-primary/20">
                              {/* Reply Avatar */}
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                                {reply.avatar}
                              </div>

                              {/* Reply Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold text-sm">{reply.user}</span>
                                  <span className="text-xs text-muted-foreground">• {reply.time}</span>
                                </div>
                                <p className="text-[14px] leading-relaxed mb-2">{reply.content}</p>
                                <div className="flex items-center gap-4 text-xs">
                                  <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                                    <ThumbsUp className="h-3 w-3" />
                                    <span>{reply.likes}</span>
                                  </button>
                                  <button className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors">
                                    <ThumbsDown className="h-3 w-3" />
                                  </button>
                                  <button className="text-muted-foreground hover:text-primary transition-colors">
                                    Trả lời
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  {comment.id !== sampleComments[sampleComments.length - 1].id && (
                    <Separator className="mt-6" />
                  )}
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <Button variant="outline" className="w-full md:w-auto">
                Xem thêm bình luận
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar - Most Viewed */}
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            {/* Xem Nhiều Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold border-b-2 border-primary pb-3 mb-4">
                Xem nhiều
              </h3>
            </div>

            {/* Most Viewed Articles List */}
            <div className="space-y-4">
              {mostViewedArticles.map((item, index) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group flex gap-3 pb-4 border-b last:border-0 hover:bg-secondary/50 p-2 rounded-lg transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                    {/* Number Badge */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm leading-tight line-clamp-3 group-hover:text-primary transition-colors mb-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MessageSquare className="h-3 w-3" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-8 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-bold mb-2 text-sm">Trở thành chủ xe</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Bắt đầu kiếm thu nhập từ xe của bạn
              </p>
              <Button size="sm" className="w-full" onClick={() => navigate('/become-owner')}>
                Đăng ký ngay
              </Button>
            </div>
          </div>
        </aside>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bắt Đầu Cho Thuê Xe Ngay Hôm Nay
            </h2>
            <p className="text-muted-foreground mb-6">
              Áp dụng những bí quyết trên và bắt đầu kiếm thu nhập từ xe của bạn
            </p>
            <Button size="lg" onClick={() => navigate('/become-owner')}>
              Đăng Ký Ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
