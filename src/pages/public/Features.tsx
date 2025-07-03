import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { RefreshCw, Shield, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Todas as Ferramentas que Você Precisa para Dominar seu Estoque
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como nossas funcionalidades vão revolucionar a forma como você gerencia seus anúncios no Mercado Livre
          </p>
        </div>

        <div className="space-y-20">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <RefreshCw className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Estoque Unificado, Vendas sem Preocupação</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Diga adeus à planilha de controle manual. Com o Hub de Ferramentas, ao vender uma unidade do 
                'iPhone 13 - Anúncio A', o estoque dos 'iPhone 13 - Anúncio B' e 'C' é atualizado instantaneamente. 
                Isso elimina o risco de vender produtos que você não tem mais, protegendo sua reputação no Mercado Livre.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-8 text-center">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">Sincronização em Tempo Real</div>
                <div className="space-y-2">
                  <div className="bg-primary/10 border border-primary/20 rounded p-3">
                    <div className="font-medium">iPhone 13 - Anúncio A</div>
                    <div className="text-sm text-muted-foreground">Estoque: 5 → 4</div>
                  </div>
                  <div className="text-xs text-muted-foreground">↓ SINCRONIZA AUTOMATICAMENTE ↓</div>
                  <div className="bg-secondary/50 border rounded p-3">
                    <div className="font-medium">iPhone 13 - Anúncio B</div>
                    <div className="text-sm text-muted-foreground">Estoque: 5 → 4</div>
                  </div>
                  <div className="bg-secondary/50 border rounded p-3">
                    <div className="font-medium">iPhone 13 - Anúncio C</div>
                    <div className="text-sm text-muted-foreground">Estoque: 5 → 4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card border rounded-lg p-8 text-center order-2 md:order-1">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">Proteção de Estoque</div>
                <div className="space-y-2">
                  <div className="bg-primary/10 border border-primary/20 rounded p-3">
                    <div className="font-medium">📱 Anúncio Principal</div>
                    <div className="text-sm text-green-400">Status: ATIVO</div>
                  </div>
                  <div className="text-xs text-muted-foreground">ESTOQUE ≤ 2 UNIDADES</div>
                  <div className="bg-destructive/10 border border-destructive/20 rounded p-3">
                    <div className="font-medium">📱 Anúncio Secundário A</div>
                    <div className="text-sm text-red-400">Status: PAUSADO</div>
                  </div>
                  <div className="bg-destructive/10 border border-destructive/20 rounded p-3">
                    <div className="font-medium">📱 Anúncio Secundário B</div>
                    <div className="text-sm text-red-400">Status: PAUSADO</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Segurança Máxima para Seus Anúncios Principais</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Defina um estoque de segurança, por exemplo, 2 unidades. Assim que seu estoque atingir esse número, 
                o Hub de Ferramentas pausa automaticamente todos os anúncios secundários do grupo, mantendo apenas 
                o seu anúncio principal ativo. Isso garante que você sempre terá o produto para o anúncio de melhor performance.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <LayoutDashboard className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Sua Central de Comando de Estoque</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gerencie dezenas de anúncios como se fossem um só. Através de uma dashboard intuitiva, você cria grupos, 
                define estoques e monitora o status de tudo em um único lugar. Menos tempo gasto em tarefas repetitivas, 
                mais tempo para focar em suas estratégias de venda.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground text-center">Dashboard Centralizada</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 border rounded p-3 text-center">
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-xs text-muted-foreground">Grupos Ativos</div>
                  </div>
                  <div className="bg-primary/5 border rounded p-3 text-center">
                    <div className="text-2xl font-bold text-primary">47</div>
                    <div className="text-xs text-muted-foreground">Anúncios Gerenciados</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">98%</div>
                    <div className="text-xs text-muted-foreground">Sincronização OK</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-xs text-muted-foreground">Monitoramento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 py-16 bg-gradient-primary/10 rounded-lg border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Pronto para Transformar sua Gestão de Estoque?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comece hoje mesmo e veja como é fácil manter seus anúncios sempre sincronizados
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-8 py-3 text-lg">
              Comece a Sincronizar Agora
            </Button>
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Features;