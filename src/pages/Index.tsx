import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за обращение! Я свяжусь с вами в ближайшее время.');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-primary">АРТИСТ</h1>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">О себе</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-accent transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-accent transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/e0a05d03-b1f1-4fa9-9965-e65b2f755692/files/d3a279a0-3ea8-407a-afe8-9276f2bd6872.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Профессиональный артист</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Выступления<br/>для корпоративов
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Создаю атмосферу праздника с профессиональным подходом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => scrollToSection('portfolio')} size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
              Посмотреть работы
            </Button>
            <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Связаться
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section id="achievements" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Award', number: '2', label: 'Трека года', desc: 'ВК Музыка' },
              { icon: 'Award', number: '2', label: 'Трека года', desc: 'Яндекс Музыка' },
              { icon: 'Music', number: '5', label: 'Релизов', desc: 'В портфолио' }
            ].map((stat, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-shadow border-none bg-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Icon name={stat.icon as any} className="text-accent" size={32} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">О себе</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Начинающий артист с впечатляющими результатами
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="leading-relaxed">
                  Я — артист, который только начинает свой путь в музыкальной индустрии, но уже достигаю значимых результатов в своём творчестве.
                </p>
                <p className="leading-relaxed">
                  Из пяти моих треков два получили статус <span className="font-semibold text-primary">«Трек года»</span> сразу в двух крупнейших музыкальных сервисах — ВК Музыке и Яндекс Музыке.
                </p>
                <p className="leading-relaxed">
                  Специализируюсь на выступлениях для корпоративных мероприятий, где важны профессионализм, стиль и умение создать нужную атмосферу.
                </p>
              </div>
              <div className="pt-4">
                <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
                  Обсудить выступление
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/e0a05d03-b1f1-4fa9-9965-e65b2f755692/files/d3a279a0-3ea8-407a-afe8-9276f2bd6872.jpg" 
                  alt="Артист на сцене"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm font-semibold">Лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Портфолио</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-4">
              Мои работы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Видео выступлений и треки, которые стали хитами года
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Icon name="Video" className="text-accent" size={28} />
              Видео выступлений
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Корпоратив 2024', venue: 'Центр деловых встреч', date: 'Декабрь 2024' },
                { title: 'Презентация продукта', venue: 'Конференц-зал Skyline', date: 'Ноябрь 2024' }
              ].map((video, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow border-none">
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center relative group cursor-pointer">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                    <Icon name="Play" className="text-white relative z-10 group-hover:scale-110 transition-transform" size={64} />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-2">{video.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Icon name="MapPin" size={16} />
                      <span>{video.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={16} />
                      <span>{video.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Icon name="Music" className="text-accent" size={28} />
              Треки артиста
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Вечный Путь', status: 'Трек года — ВК Музыка', plays: '1.2M' },
                { title: 'Ночной Город', status: 'Трек года — Яндекс Музыка', plays: '980K' },
                { title: 'Свет и Тени', status: 'Новый релиз', plays: '450K' },
                { title: 'Время Перемен', status: 'Популярный', plays: '620K' },
                { title: 'Рассвет', status: 'В тренде', plays: '540K' }
              ].map((track, idx) => (
                <Card key={idx} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-none">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent to-amber-500 rounded-lg">
                      <Icon name="Music" className="text-white" size={24} />
                    </div>
                    {idx < 2 && (
                      <div className="bg-accent/10 px-2 py-1 rounded">
                        <Icon name="Award" className="text-accent" size={16} />
                      </div>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">{track.title}</h4>
                  <p className="text-sm text-accent font-semibold mb-3">{track.status}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Play" size={14} />
                    <span>{track.plays} прослушиваний</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-br from-primary via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Контакты</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              Забронировать выступление
            </h2>
            <p className="text-xl text-gray-300">
              Заполните форму, и я свяжусь с вами в течение 24 часов
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white/5 backdrop-blur-sm border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-200">Имя *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-200">Компания *</label>
                  <Input
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="ООО «Компания»"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-200">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="ivan@company.ru"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-200">Телефон *</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-200">Сообщение</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32"
                  placeholder="Расскажите о вашем мероприятии: дата, формат, количество гостей..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-primary font-bold text-lg">
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Или свяжитесь напрямую:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:artist@example.com" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                <Icon name="Mail" size={20} />
                <span className="font-semibold">artist@example.com</span>
              </a>
              <a href="tel:+79991234567" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                <Icon name="Phone" size={20} />
                <span className="font-semibold">+7 (999) 123-45-67</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">АРТИСТ</h3>
              <p className="text-gray-400">Профессиональные выступления для корпоративов</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Icon name="Music" size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}