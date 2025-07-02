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
            Última atualização: 02 de julho de 2025
          </p>

          <p className="text-muted-foreground leading-relaxed">
            A sua privacidade é uma prioridade para o Hub de Ferramentas ("nós", "nosso"). Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossa plataforma ("Plataforma", "Serviço"). Este documento foi elaborado em conformidade com a Lei nº 13.709/2018, a Lei Geral de Proteção de Dados Pessoais (LGPD).
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Ao criar uma conta ou utilizar nossa Plataforma, você ("Usuário") reconhece que leu e compreendeu as práticas descritas nesta política.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos (Quais dados e por quê)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Coletamos diferentes tipos de informações para fornecer e melhorar nosso Serviço.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">1.1. Informações Fornecidas Diretamente por Você:</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Informações de Cadastro:</strong> Ao criar sua conta, coletamos seu nome completo e endereço de e-mail. Sua senha é armazenada de forma segura, utilizando técnicas de hashing irreversíveis.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Informações de Pagamento:</strong> Quando você assina um plano, seus dados de pagamento (como número do cartão de crédito e informações de faturamento) são coletados e processados diretamente por nosso provedor de pagamentos terceirizado (ex: Stripe, Mercado Pago). Nós não armazenamos os dados completos do seu cartão de crédito em nossos servidores.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">1.2. Informações Coletadas de Terceiros (Mercado Livre):</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Dados da Conta Mercado Livre:</strong> Com sua autorização expressa via protocolo OAuth 2.0, acessamos informações da sua conta no Mercado Livre estritamente necessárias para a operação do Serviço. Isso inclui seu ID de vendedor, nome de usuário e e-mail associado.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Dados de Anúncios e Vendas:</strong> Acessamos de forma contínua informações de seus anúncios, como ID do anúncio, título, preço, status e, mais importante, a quantidade de estoque. Também monitoramos informações de pedidos para detectar vendas e acionar a sincronização.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Tokens de Autenticação:</strong> Armazenamos de forma segura e criptografada os tokens de acesso (access_token e refresh_token) fornecidos pelo Mercado Livre para manter a conexão ativa e realizar as operações em seu nome.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">1.3. Informações Coletadas Automaticamente:</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Dados Técnicos e de Navegação:</strong> Quando você utiliza a Plataforma, coletamos automaticamente informações como seu endereço de IP, tipo e versão do navegador, tipo de dispositivo, sistema operacional, páginas visitadas, horários de acesso e outras informações de diagnóstico para fins de segurança, análise de performance e solução de problemas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Cookies e Tecnologias Similares:</strong> Utilizamos cookies para manter sua sessão ativa, lembrar suas preferências e entender como você interage com a Plataforma. Mais detalhes na Seção 7.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Como Usamos Suas Informações (Finalidade do Tratamento)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos suas informações para finalidades específicas e legítimas:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Para Operar o Serviço:</strong> Seus Dados da Conta Mercado Livre e Dados de Anúncios e Vendas são o coração do nosso serviço, usados para executar a sincronização de estoque, pausar anúncios e manter sua dashboard atualizada.</li>
              <li><strong>Para Gerenciar sua Conta e Pagamentos:</strong> Usamos suas Informações de Cadastro e Pagamento para processar sua assinatura, enviar faturas, gerenciar renovações e cancelamentos.</li>
              <li><strong>Para Comunicação:</strong> Usamos seu e-mail para enviar notificações transacionais importantes, como confirmação de cadastro, avisos sobre sua conta (ex: falha na sincronização), alterações em nossos Termos ou nesta Política, e respostas a solicitações de suporte.</li>
              <li><strong>Para Segurança e Melhoria:</strong> Seus Dados Técnicos nos ajudam a proteger a Plataforma contra fraudes e ataques, monitorar a estabilidade e performance, e analisar o uso para desenvolver novos recursos e melhorar a experiência do usuário.</li>
              <li><strong>Para Cumprir Obrigações Legais:</strong> Podemos usar suas informações para cumprir exigências legais, ordens judiciais ou solicitações de autoridades competentes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de Informações com Terceiros</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nós não vendemos suas informações pessoais. O compartilhamento ocorre apenas nas seguintes situações:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Provedores de Serviço:</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Compartilhamos informações com empresas terceirizadas que nos auxiliam na operação da Plataforma, sob estritos acordos de confidencialidade. Isso inclui:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provedores de Infraestrutura em Nuvem: (ex: Vercel, Supabase) para hospedar nossa aplicação e banco de dados.</li>
                  <li>Processadores de Pagamento: (ex: Stripe, Mercado Pago) para processar suas assinaturas.</li>
                  <li>Ferramentas de Análise: (ex: Google Analytics) para entender o tráfego e o uso da plataforma.</li>
                  <li>Serviços de E-mail Transacional: (ex: Resend, SendGrid) para enviar notificações importantes.</li>
                </ul>
              </div>
            </div>

            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Obrigações Legais:</strong> Se exigido por lei, podemos divulgar suas informações em resposta a uma intimação, ordem judicial ou outra solicitação governamental.</li>
              <li><strong>Transferências de Negócios:</strong> Em caso de fusão, aquisição ou venda de ativos, suas informações podem ser transferidas como parte da transação. Notificaremos você antes que suas informações se tornem sujeitas a uma política de privacidade diferente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Segurança dos Dados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Levamos a segurança a sério e implementamos um conjunto de medidas técnicas e organizacionais para proteger suas informações, incluindo:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Criptografia:</strong> Criptografia em trânsito (SSL/TLS) para todas as comunicações e criptografia em repouso para dados sensíveis, como os tokens do Mercado Livre.</li>
              <li><strong>Hashing de Senhas:</strong> Suas senhas nunca são armazenadas em texto simples.</li>
              <li><strong>Controle de Acesso:</strong> Acesso rigoroso aos dados com base no princípio do menor privilégio, garantindo que apenas pessoal autorizado tenha acesso às informações necessárias para suas funções.</li>
              <li><strong>Monitoramento:</strong> Monitoramento contínuo de nossos sistemas para detectar e responder a possíveis vulnerabilidades e ataques.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos como Titular dos Dados (LGPD)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você tem direitos sobre seus dados pessoais, que podem ser exercidos a qualquer momento. Conforme a LGPD, garantimos a você:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Confirmação e Acesso:</strong> O direito de confirmar a existência de tratamento de seus dados e de acessá-los.</li>
              <li><strong>Correção:</strong> O direito de solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
              <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> O direito de solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</li>
              <li><strong>Portabilidade:</strong> O direito de solicitar a portabilidade dos seus dados para outro fornecedor de serviço.</li>
              <li><strong>Eliminação:</strong> O direito de ter seus dados pessoais eliminados, exceto nas hipóteses de conservação previstas em lei.</li>
              <li><strong>Revogação do Consentimento:</strong> O direito de revogar seu consentimento a qualquer momento.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para exercer seus direitos, entre em contato conosco pelo e-mail fornecido na Seção 10. Muitas dessas ações, como a correção de dados de perfil, podem ser realizadas diretamente no painel de "Configurações" da sua conta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Manteremos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, incluindo para fins de cumprimento de quaisquer obrigações legais, contratuais, de prestação de contas ou requisição de autoridades competentes. Após o encerramento da sua conta, os dados poderão ser mantidos por um período adicional para fins fiscais ou legais antes de serem excluídos ou anonimizados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies e Tecnologias de Rastreamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos cookies para o funcionamento da Plataforma. Eles são classificados como:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Cookies Essenciais:</strong> Necessários para funcionalidades básicas, como manter sua sessão de login e garantir a segurança.</li>
              <li><strong>Cookies de Desempenho e Análise:</strong> Nos ajudam a entender como a Plataforma é utilizada para que possamos melhorar a performance.</li>
              <li><strong>Cookies de Funcionalidade:</strong> Lembram suas preferências e escolhas para personalizar sua experiência.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Você pode gerenciar ou desativar cookies através das configurações do seu navegador, mas esteja ciente de que isso pode afetar a funcionalidade da Plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Transferência Internacional de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Como utilizamos provedores de serviço de infraestrutura globais (como Vercel e Supabase), suas informações podem ser processadas e armazenadas em servidores localizados fora do Brasil. Nesses casos, garantimos que tais transferências ocorram apenas para países que proporcionem um grau de proteção de dados adequado ou que o provedor de serviço adote cláusulas contratuais e mecanismos que garantam um nível de proteção compatível com a LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas publicando a nova política na Plataforma e/ou enviando uma notificação por e-mail com antecedência. Recomendamos que você revise esta página regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, ou se desejar exercer seus direitos, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail: lucasgabrielbarbosa84@gmail.com
            </p>
          </section>
        </div>
      </div>
    </PublicLayout>
  );
};

export default PrivacyPolicy;