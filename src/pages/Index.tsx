import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const donatePackages = [
    {
      id: 1,
      name: 'VIP',
      price: '299₽',
      color: 'from-primary via-pink-500 to-purple-600',
      glowColor: 'primary',
      features: ['Префикс [VIP]', 'Кит /kit vip', '5 домов /sethome', 'Цветной ник']
    },
    {
      id: 2,
      name: 'PREMIUM',
      price: '599₽',
      color: 'from-secondary via-purple-500 to-purple-700',
      glowColor: 'secondary',
      features: ['Префикс [PREMIUM]', 'Кит /kit premium', '10 домов /sethome', 'Цветной ник', 'Полёт /fly']
    },
    {
      id: 3,
      name: 'LEGEND',
      price: '999₽',
      color: 'from-accent via-blue-400 to-cyan-500',
      glowColor: 'accent',
      features: ['Префикс [LEGEND]', 'Все киты', 'Неограниченные дома', 'Цветной ник', 'Полёт /fly', 'Бессмертие /god']
    }
  ];

  const rules = [
    {
      id: 1,
      title: 'Уважение к игрокам',
      description: 'Запрещены оскорбления, мат, унижения других игроков'
    },
    {
      id: 2,
      title: 'Читы и моды',
      description: 'Использование читов, x-ray, fly без доната - бан навсегда'
    },
    {
      id: 3,
      title: 'Гриферство',
      description: 'Разрушение чужих построек строго запрещено'
    },
    {
      id: 4,
      title: 'Спам и флуд',
      description: 'Не флудите в чат, не спамьте рекламой других серверов'
    },
    {
      id: 5,
      title: 'Баги и дюпы',
      description: 'Использование багов для получения преимуществ - бан'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-2xl shadow-lg shadow-primary/50">
              ⛏️
            </div>
            <span className="font-heading font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SMPPro</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-heading font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('donate')}
              className={`font-heading font-medium transition-colors hover:text-secondary ${
                activeSection === 'donate' ? 'text-secondary' : 'text-muted-foreground'
              }`}
            >
              Донат
            </button>
            <button
              onClick={() => scrollToSection('rules')}
              className={`font-heading font-medium transition-colors hover:text-accent ${
                activeSection === 'rules' ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              Правила
            </button>
          </div>

          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/30 rounded-lg font-bold">
            <Icon name="Server" size={18} className="mr-2" />
            Подключиться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-lg mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/cb3846ab-060a-4df3-bdaa-9cbd268a68f3/files/96d88985-8143-45ee-bb13-feea58237060.jpg"
              alt="Server Banner"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col items-center justify-center text-center p-8">
              <h1 className="font-heading font-bold text-6xl md:text-8xl mb-6 animate-fade-in">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl">
                  SMPPro
                </span>
              </h1>
              <p className="text-xl md:text-3xl font-medium mb-10 animate-fade-in bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Лучший сервер для выживания и приключений
              </p>
              <div className="flex gap-4 animate-scale-in">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-xl font-bold shadow-2xl shadow-primary/50">
                  <Icon name="PlayCircle" size={24} className="mr-2" />
                  Играть сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-secondary text-lg px-8 py-6 rounded-xl font-bold hover:bg-secondary/10 transition-colors">
                  <Icon name="Users" size={24} className="mr-2" />
                  Discord
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="rounded-xl border-2 border-primary/30 hover:border-primary bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-all animate-fade-in backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/50 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                  <Icon name="Users" size={28} className="text-white" />
                </div>
                <CardTitle className="font-heading text-2xl">Онлайн</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">247 / 500 игроков</CardDescription>
              </CardHeader>
            </Card>

            <Card className="rounded-xl border-2 border-secondary/30 hover:border-secondary bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-all animate-fade-in backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-secondary/30">
                  <Icon name="Gamepad2" size={28} className="text-white" />
                </div>
                <CardTitle className="font-heading text-2xl">Версия</CardTitle>
                <CardDescription className="text-lg font-semibold text-secondary">1.21.1 - 1.21.5</CardDescription>
              </CardHeader>
            </Card>

            <Card className="rounded-xl border-2 border-accent/30 hover:border-accent bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-all animate-fade-in backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/50 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent/30">
                  <Icon name="Zap" size={28} className="text-white" />
                </div>
                <CardTitle className="font-heading text-2xl">Режимы</CardTitle>
                <CardDescription className="text-lg font-semibold text-accent">Выживание</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="donate" className="py-16 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="rounded-full mb-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-base font-bold shadow-lg shadow-primary/30">
              💎 ДОНАТ
            </Badge>
            <h2 className="font-heading font-bold text-4xl md:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Поддержи сервер
            </h2>
            <p className="text-foreground/70 text-xl max-w-2xl mx-auto">
              Выбери подходящий пакет и получи эксклюзивные возможности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {donatePackages.map((pkg, index) => (
              <Card 
                key={pkg.id}
                className="rounded-2xl border-2 hover:scale-105 transition-all animate-fade-in overflow-hidden group bg-gradient-to-b from-card to-card/50"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  borderColor: index === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--border))'
                }}
              >
                <CardHeader className="pb-4">
                  <div className={`relative w-full h-32 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6 overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <span className="relative font-heading font-black text-4xl text-white drop-shadow-2xl tracking-wider">{pkg.name}</span>
                  </div>
                  <CardTitle className="font-heading text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{pkg.price}</CardTitle>
                  <CardDescription className="text-base font-medium">в месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Icon name="Check" size={14} className="text-white" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full rounded-xl bg-gradient-to-r ${pkg.color} hover:opacity-90 transition-opacity font-bold text-lg py-6 shadow-xl`}>
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 shadow-2xl shadow-primary/50">
                  🎁
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-heading font-bold text-2xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Оплата через Easy Donate</h3>
                  <p className="text-foreground/70 text-base">
                    Быстрая и безопасная оплата. После покупки привилегии активируются автоматически!
                  </p>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-opacity rounded-xl font-bold px-8 py-6 shadow-xl shadow-secondary/30">
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Перейти
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="rules" className="py-16 px-4 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="rounded-full mb-4 bg-gradient-to-r from-accent to-secondary text-white px-6 py-2 text-base font-bold shadow-lg shadow-accent/30">
              📋 ПРАВИЛА
            </Badge>
            <h2 className="font-heading font-bold text-4xl md:text-6xl mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Правила сервера
            </h2>
            <p className="text-foreground/70 text-xl">
              Соблюдай правила и наслаждайся игрой
            </p>
          </div>

          <div className="space-y-4">
            {rules.map((rule, index) => (
              <Card 
                key={rule.id}
                className="rounded-xl border-2 border-accent/20 hover:border-accent/50 bg-gradient-to-r from-card to-card/50 transition-all hover:scale-[1.02] animate-fade-in backdrop-blur-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/30">
                      <span className="font-heading font-bold text-white text-xl">{rule.id}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-heading mb-2 text-xl">{rule.title}</CardTitle>
                      <CardDescription className="text-base text-foreground/70">{rule.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="rounded-xl mt-8 bg-gradient-to-r from-destructive/20 to-destructive/10 border-2 border-destructive/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-destructive/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertTriangle" size={28} className="text-destructive" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl mb-2 text-destructive">
                    Важно!
                  </h3>
                  <p className="text-muted-foreground">
                    За нарушение правил предусмотрены наказания: предупреждение, мут, кик или бан. 
                    Администрация имеет право изменять правила без предупреждения.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-card/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary pixel-corners flex items-center justify-center text-xl">
                ⛏️
              </div>
              <span className="font-heading font-semibold">SMPPro © 2024</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="pixel-corners">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="pixel-corners">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="pixel-corners">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;