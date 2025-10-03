import { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Careers = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Nhân Viên Chăm Sóc Khách Hàng',
      company: 'RentCarVN',
      companyLogo: 'https://placehold.co/80x80/00b14f/white?text=R',
      location: 'Hà Nội',
      salary: '10-15 triệu',
      experience: '1-2 năm',
      updatedAt: '2 ngày trước',
    },
    {
      id: 2,
      title: 'Chuyên Viên Marketing Digital',
      company: 'RentCarVN',
      companyLogo: 'https://placehold.co/80x80/00b14f/white?text=R',
      location: 'TP. Hồ Chí Minh',
      salary: '15-20 triệu',
      experience: '2-3 năm',
      updatedAt: '1 ngày trước',
    },
    {
      id: 3,
      title: 'Lập Trình Viên React/Node.js',
      company: 'RentCarVN',
      companyLogo: 'https://placehold.co/80x80/00b14f/white?text=R',
      location: 'Remote',
      salary: '20-35 triệu',
      experience: '2-4 năm',
      updatedAt: '3 ngày trước',
    },
    {
      id: 4,
      title: 'Quản Lý Vận Hành Khu Vực',
      company: 'RentCarVN',
      companyLogo: 'https://placehold.co/80x80/00b14f/white?text=R',
      location: 'Đà Nẵng',
      salary: '18-25 triệu',
      experience: '3-5 năm',
      updatedAt: '4 giờ trước',
    },
    {
      id: 5,
      title: 'Nhân Viên Kinh Doanh B2B',
      company: 'RentCarVN',
      companyLogo: 'https://placehold.co/80x80/00b14f/white?text=R',
      location: 'Hà Nội, TP.HCM',
      salary: '12-18 triệu + Hoa hồng',
      experience: '1-3 năm',
      updatedAt: '1 ngày trước',
    },
    {
      id: 6,
      title: 'Kế Toán Tổng Hợp',
      company: 'RentCarVN',
      companyLogo: 'https://placehold.co/80x80/00b14f/white?text=R',
      location: 'Hà Nội',
      salary: '12-16 triệu',
      experience: '2-3 năm',
      updatedAt: '5 ngày trước',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header - Simple Title */}
      <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-8 pt-24">
          <h1 className="text-3xl font-bold text-center mb-2 dark:text-white">
            Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Tiếp cận <strong>60,000+</strong> tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-3 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <Input
                type="text"
                placeholder="Vị trí ứng tuyển"
                className="pl-10 h-12"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <Input
                type="text"
                placeholder="Địa điểm"
                className="pl-10 h-12"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            <Button className="h-12 px-8 bg-[#00b14f] hover:bg-[#009943] text-white">
              Tìm kiếm
            </Button>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <select className="px-4 py-2 border rounded-lg bg-background text-sm hover:border-primary cursor-pointer">
                <option>Danh mục Nghề</option>
                <option>Kinh doanh/Bán hàng</option>
                <option>Marketing/PR</option>
                <option>CNTT</option>
                <option>Nhân sự</option>
              </select>
              <select className="px-4 py-2 border rounded-lg bg-background text-sm hover:border-primary cursor-pointer">
                <option>Địa điểm</option>
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
              </select>
            </div>
            <div className="text-sm text-muted-foreground">
              Có <strong className="text-foreground">{jobs.length}</strong> việc làm
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-card border rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex gap-4">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className="w-16 h-16 rounded border object-cover"
                    />
                  </div>

                  {/* Job Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2 mb-1">
                          {job.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <button className="flex-shrink-0 p-2 hover:bg-accent rounded-lg transition-colors">
                        <Bookmark className="h-5 w-5 text-muted-foreground" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-foreground">{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Cập nhật {job.updatedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="px-4 py-2 border rounded-lg hover:bg-accent text-sm transition-colors">
              Trước
            </button>
            <button className="px-4 py-2 bg-[#00b14f] text-white rounded-lg text-sm hover:bg-[#009943]">1</button>
            <button className="px-4 py-2 border rounded-lg hover:bg-accent text-sm transition-colors">2</button>
            <button className="px-4 py-2 border rounded-lg hover:bg-accent text-sm transition-colors">3</button>
            <button className="px-4 py-2 border rounded-lg hover:bg-accent text-sm transition-colors">
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
