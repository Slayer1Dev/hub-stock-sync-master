import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Check, Clock, Activity, Settings } from "lucide-react";

const Landing = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Sincronize seu Estoque no Mercado Livre e Venda Mais, Sem Esforço
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Automatize a gestão do seu estoque entre múltiplos anúncios. Evite vendas sem produto e maximize suas vendas com nossa solução inteligente.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 text-lg px-8 py-4">
              Comece Agora (7 Dias Grátis)
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nossa solução?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card border-border text-center">
            <CardContent className="p-8">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Sincronização em Tempo Real</h3>
              <p className="text-muted-foreground">
                Atualize o estoque de todos os seus anúncios instantaneamente quando uma venda acontece.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border text-center">
            <CardContent className="p-8">
              <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Proteção de Estoque</h3>
              <p className="text-muted-foreground">
                Configure limites de segurança e pause anúncios automaticamente quando o estoque estiver baixo.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border text-center">
            <CardContent className="p-8">
              <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Controle Centralizado</h3>
              <p className="text-muted-foreground">
                Gerencie grupos de anúncios de um só lugar, com total controle sobre suas vendas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Como funciona?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4">Conecte sua conta</h3>
            <p className="text-muted-foreground">
              Faça login com sua conta do Mercado Livre de forma segura e autorize nosso acesso.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4">Configure os grupos</h3>
            <p className="text-muted-foreground">
              Organize seus anúncios em grupos e defina as regras de sincronização de estoque.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4">Venda sem preocupações</h3>
            <p className="text-muted-foreground">
              Deixe nossa automação cuidar do estoque enquanto você foca em vender mais.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Snippet */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-gradient-card border-border text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">Plano Profissional</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">R$ 29</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-2" />
                  <span>Sincronização ilimitada</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-2" />
                  <span>Grupos ilimitados</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-2" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <Link to="/signup">
                <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Começar Teste Grátis
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Landing;