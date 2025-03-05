import React, { useState } from "react";
import {
  Search,
  X,
  Filter,
  Briefcase,
  MapPin,
  Code,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface TalentSearchProps {
  onSearch?: (filters: SearchFilters) => void;
  className?: string;
}

interface SearchFilters {
  keywords: string;
  skills: string[];
  availability: string;
  minRating: number;
  location?: string;
  jobType?: string;
}

const TalentSearch = ({ onSearch, className = "" }: TalentSearchProps) => {
  const [keywords, setKeywords] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "React",
    "TypeScript",
  ]);
  const [availability, setAvailability] = useState("any");
  const [rating, setRating] = useState([4]);
  const [location, setLocation] = useState("anywhere");
  const [jobType, setJobType] = useState("any");
  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);

  const skillOptions = [
    "React",
    "Angular",
    "Vue",
    "JavaScript",
    "TypeScript",
    "UI Design",
    "UX Design",
    "Node.js",
    "Python",
    "Java",
    "AWS",
    "DevOps",
    "Mobile Development",
    "React Native",
    "iOS",
    "Android",
    "Data Science",
    "Machine Learning",
  ];

  const availabilityOptions = [
    { value: "any", label: "Tüm Uygunluklar" },
    { value: "hourly", label: "Saatlik" },
    { value: "part-time", label: "Yarı Zamanlı" },
    { value: "full-time", label: "Tam Zamanlı" },
  ];

  const locationOptions = [
    { value: "anywhere", label: "Herhangi Bir Yer" },
    { value: "north-america", label: "Kuzey Amerika" },
    { value: "europe", label: "Avrupa" },
    { value: "asia", label: "Asya" },
    { value: "latin-america", label: "Latin Amerika" },
    { value: "africa", label: "Afrika" },
  ];

  const jobTypeOptions = [
    { value: "any", label: "Tüm İş Türleri" },
    { value: "frontend", label: "Frontend Geliştirme" },
    { value: "backend", label: "Backend Geliştirme" },
    { value: "fullstack", label: "Full Stack Geliştirme" },
    { value: "mobile", label: "Mobil Geliştirme" },
    { value: "design", label: "UI/UX Tasarım" },
    { value: "data", label: "Veri Bilimi" },
  ];

  const handleSearch = () => {
    const filters: SearchFilters = {
      keywords,
      skills: selectedSkills,
      availability,
      minRating: rating[0],
      location,
      jobType,
    };

    if (onSearch) {
      onSearch(filters);
    }
  };

  const handleSkillSelect = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const handleReset = () => {
    setKeywords("");
    setSelectedSkills([]);
    setAvailability("any");
    setRating([4]);
    setLocation("anywhere");
    setJobType("any");
  };

  return (
    <Card
      className={`w-full max-w-[1200px] mx-auto shadow-xl border border-corporate-teal/10 bg-white/95 backdrop-blur-md ${className}`}
    >
      <CardContent className="p-6 md:p-8 relative overflow-hidden">
        {/* Abstract background elements similar to hero section */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[50%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-corporate-teal/5 to-corporate-peach/5 blur-3xl" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/5 to-corporate-teal/5 blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-bold text-corporate-blue flex items-center">
                <Sparkles className="h-6 w-6 mr-2 text-corporate-teal" />
                Elit Yetenek Havuzu
              </h2>
              <p className="text-gray-600">
                Önceden değerlendirilmiş elit geliştirici ve tasarımcı
                havuzumuzda arama yapın
              </p>
            </div>

            {/* Main search row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-corporate-blue/60"
                  size={18}
                />
                <Input
                  type="text"
                  placeholder="Beceriler, iş unvanları veya anahtar kelimeler için arama yapın..."
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="pl-10 h-12 text-base border-corporate-blue/20 focus:border-corporate-teal focus:ring-corporate-teal/20"
                />
              </div>
              <Button
                onClick={() => setIsAdvancedFiltersOpen(!isAdvancedFiltersOpen)}
                variant="outline"
                className="flex items-center gap-2 h-12 border-corporate-teal/30 text-corporate-teal hover:bg-corporate-teal/10 font-medium"
              >
                <Filter size={16} />
                {isAdvancedFiltersOpen
                  ? "Filtreleri Gizle"
                  : "Filtreleri Göster"}
              </Button>
              <Button
                onClick={handleSearch}
                className="h-12 px-8 bg-corporate-blue hover:bg-corporate-blue/90 text-white font-medium shadow-md shadow-corporate-blue/20"
              >
                Ara
              </Button>
            </div>

            {/* Quick filters */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-corporate-cream/50 px-4 py-2 rounded-full border border-corporate-cream">
                <Code size={18} className="text-corporate-blue" />
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger className="border-0 bg-transparent p-0 h-auto shadow-none focus:ring-0 min-w-[140px]">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 bg-corporate-cream/50 px-4 py-2 rounded-full border border-corporate-cream">
                <MapPin size={18} className="text-corporate-blue" />
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="border-0 bg-transparent p-0 h-auto shadow-none focus:ring-0 min-w-[140px]">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locationOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 bg-corporate-cream/50 px-4 py-2 rounded-full border border-corporate-cream">
                <Briefcase size={18} className="text-corporate-blue" />
                <Select value={availability} onValueChange={setAvailability}>
                  <SelectTrigger className="border-0 bg-transparent p-0 h-auto shadow-none focus:ring-0 min-w-[140px]">
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    {availabilityOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 bg-corporate-cream/50 px-4 py-2 rounded-full border border-corporate-cream">
                <Star size={18} className="text-corporate-blue" />
                <span className="text-corporate-blue font-medium">
                  {rating[0]}+ Rating
                </span>
              </div>
            </div>

            {/* Selected skills badges */}
            {selectedSkills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="flex items-center gap-1 px-3 py-1.5 bg-corporate-peach/10 text-corporate-peach border-none font-medium"
                  >
                    {skill}
                    <X
                      size={14}
                      className="cursor-pointer ml-1"
                      onClick={() => handleRemoveSkill(skill)}
                    />
                  </Badge>
                ))}
                {selectedSkills.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleReset}
                    className="text-xs h-7 text-gray-500 hover:text-corporate-blue"
                  >
                    Tümünü Temizle
                  </Button>
                )}
              </div>
            )}

            {/* Advanced filters */}
            {isAdvancedFiltersOpen && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                {/* Skills filter */}
                <div>
                  <h3 className="font-medium mb-3 text-sm text-corporate-blue">
                    Beceriler
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {skillOptions.map((skill) => (
                      <div
                        key={skill}
                        className={`text-sm px-3 py-2 rounded-md cursor-pointer border transition-colors ${selectedSkills.includes(skill) ? "bg-corporate-cream border-corporate-teal/20 text-corporate-blue font-medium" : "bg-gray-50 border-gray-200 hover:bg-gray-100"}`}
                        onClick={() => handleSkillSelect(skill)}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating filter */}
                <div>
                  <h3 className="font-medium mb-3 text-sm text-corporate-blue">
                    Minimum Değerlendirme
                  </h3>
                  <div className="px-2">
                    <Slider
                      value={rating}
                      min={1}
                      max={5}
                      step={1}
                      onValueChange={setRating}
                      className="py-4"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                    <div className="text-center mt-3 font-medium text-corporate-teal flex items-center justify-center">
                      <Star className="h-4 w-4 mr-1 fill-corporate-teal text-corporate-teal" />
                      {rating[0]}+ Yıldız
                    </div>
                  </div>
                </div>

                {/* Additional filters could go here */}
                <div>
                  <h3 className="font-medium mb-3 text-sm text-corporate-blue">
                    Deneyim Seviyesi
                  </h3>
                  <div className="space-y-2">
                    {[
                      { id: "entry", label: "Başlangıç Seviyesi (0-2 yıl)" },
                      { id: "mid", label: "Orta Seviye (3-5 yıl)" },
                      { id: "senior", label: "Kıdemli (5+ yıl)" },
                      { id: "expert", label: "Uzman (8+ yıl)" },
                    ].map((level) => (
                      <div key={level.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={level.id}
                          className="h-4 w-4 rounded border-gray-300 text-corporate-blue focus:ring-corporate-teal"
                        />
                        <label
                          htmlFor={level.id}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {level.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentSearch;
