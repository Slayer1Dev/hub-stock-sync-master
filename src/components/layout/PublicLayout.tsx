import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            Hub de Ferramentas
          </Link>
          
            <nav className="hidden md:flex items-center space-x-6">
            <Link to="/funcionalidades" className="text-muted-foreground hover:text-foreground transition-colors">
              Funcionalidades
            </Link>
            <Link to="/precos" className="text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </Link>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                Cadastrar
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent mb-4">
                Hub de Ferramentas
              </h3>
              <p className="text-muted-foreground text-sm">
                Sincronize seu estoque no Mercado Livre de forma automatizada e venda mais sem esforço.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/funcionalidades" className="text-muted-foreground hover:text-foreground">Funcionalidades</Link></li>
                <li><Link to="/precos" className="text-muted-foreground hover:text-foreground">Preços</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/termos-de-servico" className="text-muted-foreground hover:text-foreground">Termos de Serviço</Link></li>
                <li><Link to="/politica-de-privacidade" className="text-muted-foreground hover:text-foreground">Política de Privacidade</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/central-de-ajuda" className="text-muted-foreground hover:text-foreground">Central de Ajuda</Link></li>
                <li><Link to="/contato" className="text-muted-foreground hover:text-foreground">Contato</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Hub de Ferramentas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}