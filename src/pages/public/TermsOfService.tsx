import { PublicLayout } from "@/components/layout/PublicLayout";

const TermsOfService = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Termos de Serviço
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-lg text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e usar o Hub de Ferramentas, você aceita e concorda em cumprir estes Termos de Serviço. 
              Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Descrição do Serviço</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Hub de Ferramentas é uma plataforma que oferece sincronização automatizada de estoque para vendedores 
              do Mercado Livre. Nosso serviço permite gerenciar múltiplos anúncios de forma centralizada, automatizando 
              atualizações de estoque e prevenindo vendas sem produto disponível.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Responsabilidades do Usuário</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Fornecer informações precisas e atualizadas durante o cadastro</li>
              <li>Manter a confidencialidade de suas credenciais de acesso</li>
              <li>Usar o serviço apenas para fins legítimos e comerciais</li>
              <li>Não tentar comprometer a segurança ou funcionamento da plataforma</li>
              <li>Respeitar os termos de uso do Mercado Livre em suas atividades</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Privacidade e Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Levamos sua privacidade a sério. Coletamos e processamos seus dados apenas conforme necessário para 
              fornecer nossos serviços. Para mais detalhes, consulte nossa Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Pagamentos e Reembolsos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Os pagamentos são processados mensalmente. Oferecemos um período de teste gratuito de 7 dias. 
              Cancelamentos podem ser feitos a qualquer momento, mas não oferecemos reembolsos por períodos já pagos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Embora nos esforcemos para manter nosso serviço funcionando corretamente, não podemos garantir 
              disponibilidade 100% do tempo. Não nos responsabilizamos por perdas decorrentes de interrupções 
              do serviço, erros ou problemas técnicos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Modificações dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamos o direito de modificar estes termos a qualquer momento. Mudanças significativas serão 
              comunicadas por email. O uso continuado do serviço após as modificações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para questões sobre estes Termos de Serviço, entre em contato conosco em: suporte@hubdeferramentas.com
            </p>
          </section>
        </div>
      </div>
    </PublicLayout>
  );
};

export default TermsOfService;