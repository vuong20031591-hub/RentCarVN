import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, MapPin, Users, Fuel, Settings, Luggage, 
  Shield, Check, Calendar, ChevronLeft, ChevronRight,
  Phone, MessageCircle, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { getCarBySlug } from '@/data/mockCars';
import { formatPrice } from '@/lib/formatters';
import { fadeInUp } from '@/lib/motion';
import { toast } from '@/hooks/use-toast';
import { addDays, format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { DateRange } from 'react-day-picker';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const CarDetails = () => {
  const { slug } = useParams();
  const car = getCarBySlug(slug || '');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 2),
  });
  const [isLiked, setIsLiked] = useState(false);

  if (!car) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Xe không tồn tại</h1>
          <Link to="/search">
            <Button>Quay lại tìm kiếm</Button>
          </Link>
        </div>
      </div>
    );
  }

  const calculateTotalPrice = () => {
    if (!dateRange?.from || !dateRange?.to) return 0;
    const days = Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24));
    return days * car.pricePerDay;
  };

  const handleBooking = () => {
    toast({
      title: 'Đặt xe thành công!',
      description: 'Chúng tôi sẽ liên hệ với bạn sớm nhất.',
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Trang chủ</Link>
          <span>/</span>
          <Link to="/search" className="hover:text-primary">Tìm xe</Link>
          <span>/</span>
          <span className="text-foreground">{car.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden relative group">
                <img
                  src={car.images[currentImageIndex]}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Buttons */}
                {car.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-card/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-card/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Like Button */}
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-4 right-4 p-2 bg-card/80 backdrop-blur-sm rounded-full"
                >
                  <Heart className={cn("h-5 w-5", isLiked && "fill-destructive text-destructive")} />
                </button>
              </div>

              {/* Thumbnails */}
              {car.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {car.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={cn(
                        "flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-colors",
                        currentImageIndex === idx ? "border-primary" : "border-transparent"
                      )}
                    >
                      <img
                        src={image}
                        alt={`${car.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Car Info Tabs */}
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                    <TabsTrigger value="features">Tính năng</TabsTrigger>
                    <TabsTrigger value="terms">Điều khoản</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Mô tả</h3>
                        <p className="text-muted-foreground">
                          {car.description || 'Xe được bảo dưỡng định kỳ, sạch sẽ và đầy đủ giấy tờ pháp lý. Phù hợp cho cả việc di chuyển trong thành phố và du lịch dài ngày.'}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-3">Thông số kỹ thuật</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{car.seats} chỗ ngồi</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Settings className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{car.transmission === 'AT' ? 'Số tự động' : 'Số sàn'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Fuel className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm capitalize">{car.fuel}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Luggage className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{car.luggage} vali lớn</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Mức tiêu thụ nhiên liệu</h3>
                        <p className="text-muted-foreground">{car.fuelConsumption}</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-6">
                    <div className="grid grid-cols-2 gap-3">
                      {car.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-accent" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="terms" className="mt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Yêu cầu thuê xe</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• CMND/CCCD và GPLX còn hiệu lực</li>
                          <li>• Đặt cọc 15 triệu VNĐ (hoàn trả sau khi trả xe)</li>
                          <li>• Độ tuổi từ 21 trở lên</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Chính sách hủy</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Hủy miễn phí trước 24h</li>
                          <li>• Hủy trong vòng 24h: phí 30% tổng đơn</li>
                          <li>• Không hoàn tiền khi hủy sau khi nhận xe</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{car.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-medium">{car.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {car.location}
                </div>
                <div className="flex gap-2 mt-2">
                  {car.badges.map((badge) => (
                    <Badge key={badge} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Date Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Chọn ngày thuê
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !dateRange && 'text-muted-foreground'
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {dateRange?.from ? (
                          dateRange.to ? (
                            <>
                              {format(dateRange.from, 'dd/MM', { locale: vi })} -{' '}
                              {format(dateRange.to, 'dd/MM', { locale: vi })}
                            </>
                          ) : (
                            format(dateRange.from, 'dd/MM', { locale: vi })
                          )
                        ) : (
                          <span>Chọn ngày</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        initialFocus
                        mode="range"
                        defaultMonth={dateRange?.from}
                        selected={dateRange}
                        onSelect={setDateRange}
                        numberOfMonths={2}
                        locale={vi}
                        disabled={(date) => date < new Date()}
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 py-4 border-y">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Giá thuê/ngày</span>
                    <span>{formatPrice(car.pricePerDay)}</span>
                  </div>
                  {dateRange?.from && dateRange?.to && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Số ngày thuê
                        </span>
                        <span>
                          {Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))} ngày
                        </span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg pt-2">
                        <span>Tổng cộng</span>
                        <span className="text-primary">{formatPrice(calculateTotalPrice())}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Insurance Options */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-accent" />
                    <span>Bảo hiểm cơ bản đã bao gồm</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleBooking}
                    disabled={!dateRange?.from || !dateRange?.to}
                  >
                    Đặt xe ngay
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Phone className="h-4 w-4" />
                      Gọi tư vấn
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Chat ngay
                    </Button>
                  </div>
                </div>

                {/* Support Info */}
                <div className="text-center text-sm text-muted-foreground">
                  Hotline hỗ trợ: <span className="font-semibold">1900-1234</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;