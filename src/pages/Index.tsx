import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const tours = [
    {
      id: 1,
      title: "Замки и легенды Хайлендс",
      description: "Путешествие по древним замкам Эдинбурга, Стерлинга и таинственному озеру Лох-Несс",
      duration: "7 дней",
      price: "120,000 ₽",
      highlights: ["Эдинбургский замок", "Замок Стерлинг", "Лох-Несс", "Остров Скай"]
    },
    {
      id: 2,
      title: "Горные тропы Шотландии",
      description: "Трекинг по живописным горам и долинам с ночевками в аутентичных lodge",
      duration: "10 дней", 
      price: "180,000 ₽",
      highlights: ["Бен-Невис", "Гленко", "Остров Малл", "Виски-дегустация"]
    },
    {
      id: 3,
      title: "Эдинбург и острова",
      description: "Городские приключения и морские путешествия к островам Внутренних Гебрид",
      duration: "5 дней",
      price: "90,000 ₽", 
      highlights: ["Королевская миля", "Холирудский дворец", "Остров Айона", "Виски-тур"]
    }
  ];

  const reviews = [
    {
      name: "Наталия Яким",
      location: "Москва",
      text: "Absolutely incredible experience! Тима и Тёма создали волшебную атмосферу в каждом замке. Их знание истории поражает, а энергия заряжает на весь день!",
      rating: 5,
      tour: "Замки и легенды Хайлендс"
    },
    {
      name: "Евгений Заикин", 
      location: "СПб",
      text: "Как фотограф, я в восторге от локаций! Ребята знают все самые красивые места для съемок. Горы, озера, замки - каждый кадр как с открытки!",
      rating: 5,
      tour: "Горные тропы Шотландии"
    },
    {
      name: "Дональд Трамп",
      location: "Mar-a-Lago, США", 
      text: "Fantastic tour, really fantastic! Тима and Тёма - tremendous guides, the best guides, believe me. My golf courses in Scotland are great, but this tour was even greater!",
      rating: 5,
      tour: "Эдинбург и острова"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mountain" className="text-highland-green" size={32} />
              <h1 className="text-2xl font-bold text-highland-green">Scottish Adventures</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tours" className="text-slate-700 hover:text-highland-green transition-colors">Туры</a>
              <a href="#reviews" className="text-slate-700 hover:text-highland-green transition-colors">Отзывы</a>
              <a href="#contact" className="text-slate-700 hover:text-highland-green transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-highland-green/10 to-highland-blue/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  Шотландские
                  <span className="text-highland-green block">приключения</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Откройте для себя магию Шотландии вместе с опытными гидами Тимой и Тёмой. 
                  Древние замки, величественные горы и незабываемые истории ждут вас!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-highland-green hover:bg-highland-green/90 text-white px-8 py-6 text-lg">
                  <Icon name="MapPin" className="mr-2" size={20} />
                  Выбрать тур
                </Button>
                <Button variant="outline" size="lg" className="border-highland-green text-highland-green hover:bg-highland-green hover:text-white px-8 py-6 text-lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-highland-green">150+</div>
                  <div className="text-slate-600">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-highland-green">25+</div>
                  <div className="text-slate-600">маршрутов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-highland-green">5</div>
                  <div className="text-slate-600">лет опыта</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/8ca3d21a-60eb-4b1d-8508-e4861e50f5c4.jpg"
                  alt="Тима и Тёма на фоне Эдинбургского замка"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-highland-green font-semibold">Тима и Тёма</p>
                  <p className="text-slate-600">Ваши гиды по Шотландии</p>
                </div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-highland-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-highland-green/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Наши туры</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Готовые маршруты по самым живописным местам Шотландии. 
              От древних замков до величественных гор - выберите свое приключение!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={tour.id === 1 ? "img/99d724c7-0c64-4f6c-b763-11408a2a8b21.jpg" : 
                         tour.id === 2 ? "img/c6571c1f-c7d0-46d3-9cd7-4f05aca40960.jpg" : 
                         "img/cf180784-c8b8-4fda-a567-fcb5e00a5c86.jpg"}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-highland-green">
                    {tour.duration}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-highland-green transition-colors">
                    {tour.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {tour.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Основные достопримечательности:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-highland-green/10 text-highland-green px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="text-2xl font-bold text-highland-green">{tour.price}</div>
                    <Button className="bg-highland-green hover:bg-highland-green/90 text-white">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-highland-green/5 to-highland-blue/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Знакомьтесь —
                  <span className="text-highland-green block">наша команда</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Тима и Тёма — опытные гиды и путешественники, влюбленные в Шотландию. 
                  Мы знаем каждый замок, каждую тропу и каждую легенду этой удивительной страны.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-highland-green/10 rounded-full flex items-center justify-center">
                      <Icon name="Award" className="text-highland-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Опыт</h3>
                      <p className="text-highland-green">5+ лет</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">Проводим туры по Шотландии с 2019 года</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-highland-blue/10 rounded-full flex items-center justify-center">
                      <Icon name="Users" className="text-highland-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Клиенты</h3>
                      <p className="text-highland-blue">150+</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">Довольных путешественников</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-highland-green/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" className="text-highland-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Маршруты</h3>
                      <p className="text-highland-green">25+</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">Уникальных туров по Шотландии</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-highland-blue/10 rounded-full flex items-center justify-center">
                      <Icon name="Heart" className="text-highland-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Подход</h3>
                      <p className="text-highland-blue">С душой</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">Индивидуальный подход к каждому</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/ea152d18-f0cb-473e-be51-e94b6bfd9127.jpg"
                  alt="Тима на качелях в шотландских горах"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-highland-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Т</span>
                    </div>
                    <div>
                      <p className="text-highland-green font-semibold text-lg">Тима</p>
                      <p className="text-slate-600">Гид-исследователь • Любитель приключений</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-highland-green/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-highland-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Отзывы путешественников</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мнения наших клиентов о турах по Шотландии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-slate-900">{review.name}</CardTitle>
                      <CardDescription className="text-highland-green font-medium">{review.location}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <blockquote className="text-slate-600 leading-relaxed">
                    "{review.text}"
                  </blockquote>
                  <div className="text-sm text-highland-green font-medium bg-highland-green/10 rounded-lg px-3 py-2">
                    Тур: {review.tour}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-highland-green to-highland-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Готовы к шотландскому приключению?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Свяжитесь с нами для консультации и выбора идеального тура. 
              Тима и Тёма помогут создать незабываемое путешествие по Шотландии!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-highland-green hover:bg-white/90 px-8 py-6 text-lg">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-highland-green px-8 py-6 text-lg">
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать тур
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Mountain" className="text-highland-green" size={24} />
                <h3 className="text-xl font-bold">Scottish Adventures</h3>
              </div>
              <p className="text-slate-400">
                Ваши надежные проводники в мир шотландских приключений
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Контакты</h4>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@scottish-adventures.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Следите за нами</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Scottish Adventures. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}