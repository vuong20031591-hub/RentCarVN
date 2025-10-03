import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Tag, TrendingUp, Eye, MessageSquare, Share2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  views: number;
  comments: number;
  featured?: boolean;
  tags: string[];
}

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'Tất Cả', icon: TrendingUp },
    { id: 'tips', name: 'Kinh Nghiệm', icon: Tag },
    { id: 'news', name: 'Tin Tức', icon: Calendar },
    { id: 'guide', name: 'Hướng Dẫn', icon: ArrowRight },
    { id: 'events', name: 'Sự Kiện', icon: Calendar },
  ];

  const articles: Article[] = [
    {
      id: 1,
      title: '10 Bí Quyết Cho Thuê Xe Hiệu Quả Và Tăng Thu Nhập',
      excerpt: 'Khám phá những chiến lược đã được chứng minh để tối ưu hóa thu nhập từ việc cho thuê xe của bạn. Từ định giá đến marketing...',
      content: '',
      author: 'Nguyễn Văn A',
      date: '2025-01-15',
      readTime: '5 phút',
      category: 'tips',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
      views: 1250,
      comments: 23,
      featured: true,
      tags: ['Kinh Nghiệm', 'Thu Nhập', 'Marketing']
    },
    {
      id: 2,
      title: 'Xu Hướng Thuê Xe Tự Lái 2025: Những Gì Bạn Cần Biết',
      excerpt: 'Thị trường thuê xe tự lái đang có những thay đổi lớn. Cùng tìm hiểu những xu hướng mới nhất và cơ hội kinh doanh...',
      content: '',
      author: 'Trần Thị B',
      date: '2025-01-14',
      readTime: '7 phút',
      category: 'news',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800',
      views: 980,
      comments: 15,
      featured: true,
      tags: ['Xu Hướng', 'Thị Trường', '2025']
    },
    {
      id: 3,
      title: 'Hướng Dẫn Chi Tiết: Đăng Ký Cho Thuê Xe Trên RentCarVN',
      excerpt: 'Quy trình đăng ký từng bước một, từ chuẩn bị giấy tờ đến chụp ảnh xe chuyên nghiệp. Hướng dẫn đầy đủ cho người mới...',
      content: '',
      author: 'Lê Văn C',
      date: '2025-01-13',
      readTime: '10 phút',
      category: 'guide',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800',
      views: 1580,
      comments: 34,
      tags: ['Hướng Dẫn', 'Đăng Ký', 'Tutorial']
    },
    {
      id: 4,
      title: 'Bảo Hiểm Xe Cho Thuê: Những Điều Quan Trọng Cần Biết',
      excerpt: 'Tìm hiểu về các loại bảo hiểm, quyền lợi và cách bảo vệ tài sản của bạn khi cho thuê xe...',
      content: '',
      author: 'Phạm Thị D',
      date: '2025-01-12',
      readTime: '6 phút',
      category: 'tips',
      image: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=800',
      views: 745,
      comments: 12,
      tags: ['Bảo Hiểm', 'An Toàn', 'Pháp Lý']
    },
    {
      id: 5,
      title: 'Cách Chụp Ảnh Xe Để Thu Hút Khách Hàng',
      excerpt: 'Những tips chụp ảnh chuyên nghiệp giúp xe của bạn nổi bật và được thuê nhiều hơn...',
      content: '',
      author: 'Hoàng Văn E',
      date: '2025-01-11',
      readTime: '4 phút',
      category: 'tips',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
      views: 892,
      comments: 18,
      tags: ['Photography', 'Marketing', 'Tips']
    },
    {
      id: 6,
      title: 'Sự Kiện: RentCarVN Meet-Up 2025 Tại Hà Nội',
      excerpt: 'Gặp gỡ và kết nối với cộng đồng chủ xe, chia sẻ kinh nghiệm và học hỏi từ các chuyên gia...',
      content: '',
      author: 'Admin',
      date: '2025-01-10',
      readTime: '3 phút',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      views: 1120,
      comments: 45,
      tags: ['Sự Kiện', 'Meet-Up', 'Community']
    },
    {
      id: 7,
      title: 'Top 5 Mẫu Xe Được Thuê Nhiều Nhất 2024',
      excerpt: 'Phân tích thị trường và những mẫu xe hot nhất mà khách hàng tìm kiếm...',
      content: '',
      author: 'Nguyễn Thị F',
      date: '2025-01-09',
      readTime: '5 phút',
      category: 'news',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      views: 1340,
      comments: 28,
      tags: ['Top 5', 'Thống Kê', 'Xe Hot']
    },
    {
      id: 8,
      title: 'Quản Lý Tài Chính Khi Cho Thuê Xe: Bí Quyết Thành Công',
      excerpt: 'Cách theo dõi thu chi, tối ưu hóa lợi nhuận và lập kế hoạch tài chính dài hạn...',
      content: '',
      author: 'Trần Văn G',
      date: '2025-01-08',
      readTime: '8 phút',
      category: 'guide',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
      views: 687,
      comments: 9,
      tags: ['Tài Chính', 'Quản Lý', 'Lợi Nhuận']
    },
    {
      id: 9,
      title: 'Xử Lý Tình Huống Khẩn Cấp Khi Cho Thuê Xe',
      excerpt: 'Hướng dẫn cách xử lý các tình huống phát sinh: tai nạn, hư hỏng xe, tranh chấp...',
      content: '',
      author: 'Lê Thị H',
      date: '2025-01-07',
      readTime: '6 phút',
      category: 'guide',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800',
      views: 956,
      comments: 21,
      tags: ['Khẩn Cấp', 'Xử Lý', 'An Toàn']
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Search */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tin Tức & <span className="text-primary">Kiến Thức</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cập nhật tin tức mới nhất, kinh nghiệm và hướng dẫn về cho thuê xe
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'all' && featuredArticles.length > 0 && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold mb-2">Nổi Bật</h2>
              <p className="text-muted-foreground">Những bài viết được quan tâm nhiều nhất</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20"
                >
                  <div className="relative overflow-hidden h-[300px]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="mb-2">
                        {categories.find(c => c.id === article.category)?.name}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                      <Link to={`/news/${article.id}`}>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary">
                          Đọc thêm
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                variants={staggerItem}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
              >
                <div className="relative overflow-hidden h-[200px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3">
                    {categories.find(c => c.id === article.category)?.name}
                  </Badge>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                    <Link to={`/news/${article.id}`}>
                      <Button variant="ghost" size="sm" className="h-8 text-xs">
                        Đọc
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-bold mb-2">Không tìm thấy bài viết</h3>
              <p className="text-muted-foreground mb-6">
                Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
              </p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}>
                Xem tất cả bài viết
              </Button>
            </motion.div>
          )}

          {/* Load More */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Xem Thêm Bài Viết
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Đăng Ký Nhận Tin Tức
            </h2>
            <p className="text-muted-foreground mb-6">
              Nhận những bài viết mới nhất và kinh nghiệm hữu ích về cho thuê xe
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Email của bạn"
                className="flex-1"
              />
              <Button size="lg">
                Đăng Ký
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
