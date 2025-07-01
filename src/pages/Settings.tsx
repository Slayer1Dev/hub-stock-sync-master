import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const Settings = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    fullName: "João Silva",
    email: "joao@exemplo.com",
    phone: "",
  });
  const [notifications, setNotifications] = useState({
    stockAlerts: true,
    syncErrors: true,
    dailyReports: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement profile update API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Perfil atualizado!",
        description: "Suas informações foram salvas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível atualizar seu perfil.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout title="Configurações">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Profile Settings */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Informações do Perfil</CardTitle>
            <CardDescription>
              Atualize suas informações pessoais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome Completo</Label>
                <Input
                  id="fullName"
                  value={profile.fullName}
                  onChange={(e) => setProfile(prev => ({ ...prev, fullName: e.target.value }))}
                  className="bg-secondary border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-secondary border-border"
                  disabled
                />
                <p className="text-xs text-muted-foreground">
                  Entre em contato com o suporte para alterar seu email
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone (opcional)</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="(11) 99999-9999"
                  className="bg-secondary border-border"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                {isLoading ? "Salvando..." : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Salvar Alterações
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Preferências de Notificação</CardTitle>
            <CardDescription>
              Configure como deseja receber notificações
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Alertas de Estoque</p>
                <p className="text-sm text-muted-foreground">
                  Receba notificações quando o estoque estiver baixo
                </p>
              </div>
              <input
                type="checkbox"
                checked={notifications.stockAlerts}
                onChange={(e) => setNotifications(prev => ({ ...prev, stockAlerts: e.target.checked }))}
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Erros de Sincronização</p>
                <p className="text-sm text-muted-foreground">
                  Receba alertas quando houver problemas na sincronização
                </p>
              </div>
              <input
                type="checkbox"
                checked={notifications.syncErrors}
                onChange={(e) => setNotifications(prev => ({ ...prev, syncErrors: e.target.checked }))}
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Relatórios Diários</p>
                <p className="text-sm text-muted-foreground">
                  Receba um resumo diário das suas vendas e estoque
                </p>
              </div>
              <input
                type="checkbox"
                checked={notifications.dailyReports}
                onChange={(e) => setNotifications(prev => ({ ...prev, dailyReports: e.target.checked }))}
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
              />
            </div>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Ações da Conta</CardTitle>
            <CardDescription>
              Gerencie sua conta e dados
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              Exportar Dados
            </Button>
            <Button variant="outline" className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
              Excluir Conta
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Settings;