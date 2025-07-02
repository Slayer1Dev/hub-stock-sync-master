import { PublicLayout } from "@/components/layout/PublicLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Central de Ajuda
          </h1>
          <p className="text-xl text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns.
          </p>
        </div>

        <div className="space-y-8">
          {/* Primeiros Passos */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Primeiros Passos</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="connect-ml" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Como conecto minha conta do Mercado Livre?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Na sua Dashboard, clique no botão "Conectar com Mercado Livre". Você será redirecionado para o site do 
                  Mercado Livre para autorizar a conexão de forma segura. Após a autorização, você retornará automaticamente 
                  para nossa plataforma.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="password-security" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  O Hub de Ferramentas tem acesso à minha senha do Mercado Livre?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Não. Absolutamente nunca. A conexão é feita via um protocolo seguro chamado OAuth 2.0, que nos dá 
                  permissão para gerenciar seus anúncios sem nunca ter acesso à sua senha.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Gerenciamento de Grupos */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Gerenciamento de Grupos</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="main-ad" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  O que é um "anúncio principal"?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  O anúncio principal é o anúncio mais importante do seu grupo. Quando o estoque de segurança é atingido, 
                  ele é o único que permanece ativo, garantindo que sua listagem de maior relevância continue vendendo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="change-stock" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Posso alterar o estoque de um grupo depois de criado?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Sim. Basta entrar na tela de gerenciamento do grupo e definir um novo valor de estoque. O sistema irá 
                  sincronizar todos os anúncios do grupo para o novo valor imediatamente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="safety-stock" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Como funciona o estoque de segurança?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  O estoque de segurança é um limite que você define. Quando o estoque total do grupo atinge esse número, 
                  todos os anúncios secundários são pausados automaticamente, mantendo apenas o anúncio principal ativo. 
                  Isso protege seu estoque para as vendas mais importantes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="multiple-groups" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Posso ter o mesmo anúncio em grupos diferentes?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Não. Cada anúncio do Mercado Livre pode estar em apenas um grupo por vez. Isso evita conflitos na 
                  sincronização e garante que o controle de estoque seja preciso.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Assinatura e Pagamento */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Assinatura e Pagamento</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="cancel-subscription" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Como posso cancelar minha assinatura?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Você pode cancelar sua assinatura a qualquer momento na página de "Configurações", na aba "Minha Assinatura". 
                  Seu acesso permanecerá ativo até o final do período já pago.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment-methods" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Quais formas de pagamento são aceitas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Aceitamos cartões de crédito e débito das principais bandeiras (Visa, Mastercard, Elo) e PIX. 
                  Os pagamentos são processados de forma segura através de nossos provedores certificados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="free-trial" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Como funciona o período de teste gratuito?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Oferecemos 7 dias grátis para você testar todas as funcionalidades. Durante esse período, você tem 
                  acesso completo à plataforma. Após os 7 dias, sua assinatura será automaticamente ativada, a menos 
                  que você cancele antes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Problemas Técnicos */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Problemas Técnicos</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="sync-delay" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  A sincronização está com atraso. O que fazer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  A sincronização normalmente ocorre em poucos segundos. Se houver atraso, pode ser devido a instabilidades 
                  na API do Mercado Livre. Aguarde alguns minutos e verifique novamente. Se o problema persistir, entre em 
                  contato com nosso suporte.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disconnected-ml" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Minha conta do Mercado Livre foi desconectada. Como reconectar?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Isso pode acontecer se você alterar a senha do Mercado Livre ou por questões de segurança. 
                  Simplesmente vá até sua Dashboard e clique em "Conectar com Mercado Livre" novamente para reautorizar.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center py-12 bg-card/30 rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-4">Não encontrou o que procurava?</h2>
          <p className="text-muted-foreground mb-6">
            Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Entre em contato com nosso suporte
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Help;