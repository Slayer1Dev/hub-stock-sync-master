import { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const adminItems = [
  { 
    title: "Dashboard Admin", 
    url: "/admin/dashboard", 
    icon: "📊"
  },
  { 
    title: "Gerenciar Usuários", 
    url: "/admin/usuarios", 
    icon: "👥"
  },
];

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      toast({
        title: "Logout realizado",
        description: "Saindo do painel administrativo.",
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Erro ao fazer logout",
        description: "Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <h2 className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            Admin Panel
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Hub de Ferramentas</p>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {adminItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  end
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`
                  }
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span className="font-medium">{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Admin Header */}
        <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 rounded-full bg-secondary">
                <span className="text-sm font-medium">A</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-popover border-border">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Administrador</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admin@hubdeferramentas.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={handleLogout}
                className="text-destructive cursor-pointer"
              >
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Admin Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}