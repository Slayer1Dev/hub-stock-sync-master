import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Escolha o Plano Ideal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece com 7 dias grátis e escolha o plano que melhor atende às suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <Card className="bg-gradient-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Plano Básico</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">R$ 19</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-3" />
                  <span>Até 5 grupos de anúncios</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-3" />
                  <span>Sincronização automática</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-3" />
                  <span>Proteção de estoque</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-3" />
                  <span>Suporte por email</span>
                </li>
              </ul>
              <Link to="/signup">
                <Button variant="outline" className="w-full mt-6">
                  Começar Teste Grátis
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Professional Plan */}
          <Card className="bg-gradient-card border-primary/50 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-primary px-4 py-1 rounded-full text-primary-foreground text-sm font-medium">
                Mais Popular
              </span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Plano Profissional</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">R$ 29</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-3" />
                  <span>Grupos ilimitados</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-3" />
                  <span>Sincronização em tempo real</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-3" />
                  <span>Relatórios avançados</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-3" />
                  <span>Automação inteligente</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-3" />
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-success mr-3" />
                  <span>API de integração</span>
                </li>
              </ul>
              <Link to="/signup">
                <Button className="w-full mt-6 bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Começar Teste Grátis
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Tem dúvidas sobre qual plano escolher?
          </p>
          <Button variant="outline">
            Falar com Vendas
          </Button>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Pricing;