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
      color: 'from-primary to-purple-600',
      features: ['Префикс [VIP]', 'Кит /kit vip', '5 домов /sethome', 'Цветной ник']
    },
    {
      id: 2,
      name: 'PREMIUM',
      price: '599₽',
      color: 'from-secondary to-orange-600',
      features: ['Префикс [PREMIUM]', 'Кит /kit premium', '10 домов /sethome', 'Цветной ник', 'Полёт /fly']
    },
    {
      id: 3,
      name: 'LEGEND',
      price: '999₽',
      color: 'from-accent to-cyan-600',
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary pixel-corners flex items-center justify-center text-2xl">
              ⛏️
            </div>
            <span className="font-heading font-bold text-xl">SMPPro</span>
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

          <Button className="pixel-corners bg-primary hover:bg-primary/90">
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
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex flex-col items-center justify-center text-center p-8">
              <h1 className="font-heading font-bold text-5xl md:text-7xl mb-4 text-stroke animate-fade-in">
                SMPPro
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
                Лучший сервер для выживания и приключений
              </p>
              <div className="flex gap-4 animate-scale-in">
                <Button size="lg" className="pixel-corners bg-primary hover:bg-primary/90 text-lg">
                  <Icon name="PlayCircle" size={24} className="mr-2" />
                  Играть сейчас
                </Button>
                <Button size="lg" variant="outline" className="pixel-corners text-lg">
                  <Icon name="Users" size={24} className="mr-2" />
                  Discord
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="pixel-corners border-primary/50 hover:border-primary transition-colors animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 pixel-corners flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Онлайн</CardTitle>
                <CardDescription>247 / 500 игроков</CardDescription>
              </CardHeader>
            </Card>

            <Card className="pixel-corners border-secondary/50 hover:border-secondary transition-colors animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 pixel-corners flex items-center justify-center mb-4">
                  <Icon name="Gamepad2" size={24} className="text-secondary" />
                </div>
                <CardTitle className="font-heading">Версия</CardTitle>
                <CardDescription>1.21.1 - 1.21.5</CardDescription>
              </CardHeader>
            </Card>

            <Card className="pixel-corners border-accent/50 hover:border-accent transition-colors animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 pixel-corners flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-accent" />
                </div>
                <CardTitle className="font-heading">Режимы</CardTitle>
                <CardDescription>Выживание</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="donate" className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="pixel-corners mb-4 bg-secondary text-secondary-foreground">
              💎 ДОНАТ
            </Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Поддержи сервер
            </h2>
            <p className="text-muted-foreground text-lg">
              Выбери подходящий пакет и получи эксклюзивные возможности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {donatePackages.map((pkg, index) => (
              <Card 
                key={pkg.id}
                className="pixel-corners border-2 hover:scale-105 transition-transform animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-full h-24 rounded-md bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4 pixel-corners`}>
                    <span className="font-heading font-bold text-3xl text-stroke">{pkg.name}</span>
                  </div>
                  <CardTitle className="font-heading text-3xl">{pkg.price}</CardTitle>
                  <CardDescription>в месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full pixel-corners bg-gradient-to-r hover:opacity-90 transition-opacity" style={{
                    background: `linear-gradient(to right, var(--${pkg.color.split('-')[1]}))`
                  }}>
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="pixel-corners bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary pixel-corners flex items-center justify-center text-3xl flex-shrink-0">
                  🎁
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl mb-2">Оплата через Easy Donate</h3>
                  <p className="text-muted-foreground">
                    Быстрая и безопасная оплата. После покупки привилегии активируются автоматически!
                  </p>
                </div>
                <Button size="lg" className="pixel-corners bg-secondary hover:bg-secondary/90">
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Перейти
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="rules" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="pixel-corners mb-4 bg-accent text-accent-foreground">
              📋 ПРАВИЛА
            </Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Правила сервера
            </h2>
            <p className="text-muted-foreground text-lg">
              Соблюдай правила и наслаждайся игрой
            </p>
          </div>

          <div className="space-y-4">
            {rules.map((rule, index) => (
              <Card 
                key={rule.id}
                className="pixel-corners border-accent/30 hover:border-accent/60 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 pixel-corners flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-accent">{rule.id}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-heading mb-2">{rule.title}</CardTitle>
                      <CardDescription className="text-base">{rule.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="pixel-corners mt-8 bg-destructive/10 border-destructive/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="AlertTriangle" size={32} className="text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-destructive">
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