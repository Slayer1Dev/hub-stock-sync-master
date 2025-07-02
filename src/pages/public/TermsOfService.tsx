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
            Última atualização: 02 de julho de 2025
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Bem-vindo ao Hub de Ferramentas!
          </p>

          <p className="text-muted-foreground leading-relaxed">
            O presente documento ("Termos de Uso" ou "Termos") rege o seu acesso e uso da plataforma Hub de Ferramentas, incluindo nosso website, APIs e todos os serviços relacionados (coletivamente, a "Plataforma" ou o "Serviço"), fornecidos por Lucas Gabriel Barbosa, com sede em São Paulo, Estado de São Paulo, doravante denominada "Empresa".
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Ao criar uma conta, acessar ou usar nossa Plataforma, você ("Usuário") declara que leu, entendeu e concorda em ficar vinculado a estes Termos, bem como à nossa Política de Privacidade, que é incorporada aqui por referência. Se você não concordar com estes Termos, não deverá usar a Plataforma.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Definições Principais</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong>Plataforma:</strong> Refere-se ao software Hub de Ferramentas, disponibilizado como um serviço (SaaS), acessível via internet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Usuário:</strong> Qualquer pessoa física ou jurídica que cria uma conta e utiliza os Serviços da Plataforma.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Serviço:</strong> A funcionalidade principal da Plataforma, que consiste na sincronização de estoque de anúncios na plataforma Mercado Livre.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Conta:</strong> A conta individual criada pelo Usuário para acessar a Plataforma.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Dados do Usuário:</strong> Todas as informações fornecidas pelo Usuário à Plataforma, incluindo, mas não se limitando a, informações de perfil, dados de anúncios e credenciais de acesso a serviços de terceiros (como o Mercado Livre).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Objeto do Serviço</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              2.1. O Hub de Ferramentas é uma plataforma online que permite aos seus Usuários, vendedores na plataforma Mercado Livre, centralizar e sincronizar em tempo real o estoque de diferentes anúncios.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              2.2. As funcionalidades incluem, mas não se limitam a:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Criação de "Grupos de Anúncios" para vincular múltiplos anúncios do Mercado Livre.</li>
              <li>Definição de um estoque unificado para todos os anúncios dentro de um grupo.</li>
              <li>Atualização automática do estoque em todos os anúncios de um grupo quando uma venda ocorre em qualquer um deles.</li>
              <li>Pausa automática de anúncios secundários quando o estoque atinge um limite de segurança pré-definido pelo Usuário.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Elegibilidade e Cadastro da Conta</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              3.1. Para utilizar a Plataforma, o Usuário deve ter no mínimo 18 anos de idade e plena capacidade legal para celebrar contratos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              3.2. O Usuário concorda em fornecer informações verdadeiras, precisas, atuais e completas durante o processo de cadastro e em manter essas informações atualizadas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              3.3. O Usuário é o único e exclusivo responsável pela segurança de sua senha e por todas as atividades que ocorrerem em sua Conta. O Usuário deve notificar a Empresa imediatamente sobre qualquer uso não autorizado de sua conta.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              3.4. A Empresa reserva-se o direito de suspender ou encerrar contas que contenham informações falsas, imprecisas ou que violem estes Termos, a seu exclusivo critério e sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Integração com o Mercado Livre</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              4.1. Para a prestação do Serviço, é indispensável que o Usuário autorize a Plataforma a acessar sua conta no Mercado Livre através do protocolo de autenticação segura (OAuth 2.0).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              4.2. Ao conceder essa autorização, o Usuário concede explicitamente à Plataforma Hub de Ferramentas a permissão para executar ações em seu nome dentro do ecossistema do Mercado Livre, incluindo, mas não se limitando a:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Ler informações de seus anúncios (título, estoque, status).</li>
              <li>Modificar a quantidade de estoque disponível (available_quantity) de seus anúncios.</li>
              <li>Modificar o status de seus anúncios (por exemplo, de "ativo" para "pausado").</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              4.3. O Usuário reconhece que a funcionalidade da Plataforma é intrinsecamente dependente da disponibilidade e do funcionamento da API do Mercado Livre. A Empresa não se responsabiliza por falhas, instabilidades, alterações ou descontinuação da API do Mercado Livre que possam afetar a prestação do Serviço.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              4.4. O Usuário é o único responsável por garantir que o uso da Plataforma está em conformidade com os Termos e Condições de Uso do próprio Mercado Livre. Qualquer sanção, bloqueio ou penalidade aplicada pelo Mercado Livre à conta do Usuário é de responsabilidade exclusiva do Usuário.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Assinaturas, Pagamentos e Cancelamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              5.1. O acesso a determinadas funcionalidades da Plataforma está sujeito ao pagamento de uma assinatura mensal de R$ 149,90 ("Plano"), conforme os valores e condições detalhados na página de Preços.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              5.2. Os pagamentos serão processados através de um provedor de pagamento terceirizado (ex: Stripe, Mercado Pago). Ao fornecer suas informações de pagamento, o Usuário autoriza a Empresa e seu provedor de pagamento a cobrar os valores devidos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              5.3. Renovação Automática: A menos que o Usuário cancele seu Plano antes do final do período de faturamento atual, a assinatura será renovada automaticamente pelo mesmo período, e o método de pagamento registrado será cobrado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              5.4. Cancelamento: O Usuário pode cancelar sua assinatura a qualquer momento através do painel de configurações da Plataforma. O cancelamento entrará em vigor ao final do período de faturamento já pago, e o Usuário manterá o acesso ao Serviço até essa data.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              5.5. Não Reembolso: Os pagamentos não são reembolsáveis. Não haverá reembolsos ou créditos por períodos de assinatura parcialmente utilizados ou por funcionalidades não utilizadas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              5.6. Alterações de Preço: A Empresa reserva-se o direito de alterar os preços dos Planos. Qualquer alteração de preço será comunicada ao Usuário com no mínimo 30 (trinta) dias de antecedência. A continuação do uso do Serviço após a entrada em vigor da alteração de preço constitui a concordância do Usuário com o novo valor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Obrigações do Usuário e Conduta Proibida</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              6.1. O Usuário concorda em utilizar a Plataforma apenas para fins lícitos e de acordo com estes Termos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              6.2. É estritamente proibido ao Usuário:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Tentar fazer engenharia reversa, descompilar, desmontar ou de outra forma tentar descobrir o código-fonte da Plataforma.</li>
              <li>Utilizar qualquer dispositivo automático, robô ou processo manual para monitorar ou copiar qualquer parte da Plataforma sem autorização prévia por escrito.</li>
              <li>Interferir ou tentar interferir no funcionamento adequado da Plataforma, incluindo sobrecarregar intencionalmente a infraestrutura da Empresa.</li>
              <li>Vender, revender, alugar ou sublicenciar o acesso à Plataforma.</li>
              <li>Utilizar a Plataforma para violar qualquer lei, regulamento ou direito de terceiros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Propriedade Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              7.1. A Empresa detém todos os direitos, títulos e interesses sobre a Plataforma, incluindo todo o software, design, texto, gráficos, logotipos e outros conteúdos (coletivamente, "Propriedade Intelectual da Empresa").
            </p>
            <p className="text-muted-foreground leading-relaxed">
              7.2. O Usuário detém todos os direitos sobre os seus Dados de Usuário. No entanto, ao usar a Plataforma, o Usuário concede à Empresa uma licença mundial, não exclusiva, isenta de royalties, para usar, reproduzir, modificar e processar os Dados do Usuário estritamente para o propósito de fornecer e melhorar o Serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitação de Responsabilidade e Isenção de Garantias</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              8.1. A PLATAFORMA É FORNECIDA "COMO ESTÁ" E "CONFORME DISPONÍVEL", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS. A EMPRESA NÃO GARANTE QUE O SERVIÇO SERÁ ININTERRUPTO, SEGURO OU LIVRE DE ERROS.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              8.2. O USUÁRIO RECONHECE QUE A SINCRONIZAÇÃO DE ESTOQUE ENVOLVE RISCOS, INCLUINDO, MAS NÃO SE LIMITANDO A, FALHAS DE COMUNICAÇÃO COM A API DO MERCADO LIVRE, ATRASOS NO PROCESSAMENTO DE NOTIFICAÇÕES (WEBHOOKS) E POTENCIAIS CONDIÇÕES DE CORRIDA.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              8.3. EM NENHUMA CIRCUNSTÂNCIA A EMPRESA SERÁ RESPONSÁVEL POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO PERDA DE LUCROS, RECEITA, DADOS, OU REPUTAÇÃO, RESULTANTES DE:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>SEU ACESSO OU USO, OU INCAPACIDADE DE ACESSAR OU USAR, A PLATAFORMA;</li>
              <li>QUALQUER FALHA DE SINCRONIZAÇÃO, VENDA DE PRODUTOS SEM ESTOQUE, OU PAUSA INCORRETA DE ANÚNCIOS;</li>
              <li>QUALQUER AÇÃO OU PENALIDADE IMPOSTA PELO MERCADO LIVRE EM SUA CONTA.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              8.4. A RESPONSABILIDADE TOTAL DA EMPRESA PARA COM O USUÁRIO, POR QUALQUER REIVINDICAÇÃO DECORRENTE DESTES TERMOS OU DO USO DA PLATAFORMA, ESTARÁ LIMITADA AO VALOR TOTAL PAGO PELO USUÁRIO À EMPRESA NOS 3 (TRÊS) MESES ANTERIORES AO EVENTO QUE DEU ORIGEM À REIVINDICAÇÃO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Privacidade e Proteção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              9.1. A coleta e o uso de informações pessoais pela Empresa estão descritos em nossa Política de Privacidade. Ao aceitar estes Termos, o Usuário declara ter lido e concordado com a Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Vigência e Rescisão</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              10.1. Estes Termos permanecerão em pleno vigor e efeito enquanto o Usuário utilizar a Plataforma.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              10.2. O Usuário pode rescindir este acordo a qualquer momento, cancelando sua assinatura e cessando o uso da Plataforma.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              10.3. A Empresa pode suspender ou rescindir o acesso do Usuário à Plataforma, com ou sem motivo, a qualquer momento, mediante notificação. Em caso de violação grave destes Termos pelo Usuário, a rescisão poderá ser imediata e sem aviso prévio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              10.4. Após a rescisão, o direito do Usuário de acessar e usar a Plataforma cessará imediatamente. A Empresa poderá, a seu critério, excluir os Dados do Usuário de seus sistemas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Modificações nos Termos de Uso</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              11.1. A Empresa reserva-se o direito de modificar estes Termos a qualquer momento. Se fizermos alterações, notificaremos o Usuário através da Plataforma ou por e-mail com pelo menos 15 (quinze) dias de antecedência da data de vigência das alterações.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              11.2. O uso contínuo da Plataforma após a data de vigência das alterações constituirá a aceitação dos novos Termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Disposições Gerais</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              12.1. Legislação Aplicável e Foro: Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo, Estado de São Paulo, para dirimir quaisquer controvérsias decorrentes deste documento, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              12.2. Autonomia das Cláusulas: Se qualquer disposição destes Termos for considerada ilegal, nula ou inexequível, tal disposição será, na medida do possível, reformada para refletir a intenção original das partes, e as demais disposições permanecerão em pleno vigor e efeito.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              12.3. Contato: Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: lucasgabrielbarbosa84@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </PublicLayout>
  );
};

export default TermsOfService;