import { PublicLayout } from "@/components/layout/PublicLayout";

const PrivacyPolicy = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Política de Privacidade
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-lg text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Informações de Conta</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Coletamos seu nome, email e informações de contato quando você cria uma conta.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Dados do Mercado Livre</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Com sua autorização, acessamos informações de seus anúncios, estoque e vendas através da API do Mercado Livre.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Dados de Uso</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Coletamos informações sobre como você usa nossa plataforma para melhorar nossos serviços.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Como Usamos suas Informações</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Fornecer e manter nossos serviços de sincronização de estoque</li>
              <li>Processar pagamentos e gerenciar sua assinatura</li>
              <li>Enviar notificações importantes sobre sua conta e serviço</li>
              <li>Oferecer suporte técnico e atendimento ao cliente</li>
              <li>Melhorar e desenvolver novos recursos para a plataforma</li>
              <li>Cumprir obrigações legais e regulamentares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Com seu consentimento explícito</li>
              <li>Para cumprir obrigações legais ou ordens judiciais</li>
              <li>Com provedores de serviços que nos ajudam a operar a plataforma (sob acordo de confidencialidade)</li>
              <li>Em caso de fusão, aquisição ou venda de ativos da empresa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Segurança dos Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra 
              acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, controles de 
              acesso e monitoramento regular de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De acordo com a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Acessar e verificar quais dados temos sobre você</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados pessoais</li>
              <li>Revogar seu consentimento para o tratamento de dados</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos 
              nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies e Tecnologias Similares</h2>
            <p className="text-muted-foreground leading-relaxed">
              Usamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma 
              e personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas 
              por email ou através de um aviso em nossa plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para questões sobre esta Política de Privacidade ou para exercer seus direitos de dados, 
              entre em contato conosco em: privacidade@hubdeferramentas.com
            </p>
          </section>
        </div>
      </div>
    </PublicLayout>
  );
};

export default PrivacyPolicy;