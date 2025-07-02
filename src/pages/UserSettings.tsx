import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Save, Activity, Settings, User } from "lucide-react";

const UserSettings = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Profile data
  const [profile, setProfile] = useState({
    fullName: "João Silva",
  });

  // Subscription data
  const [subscription] = useState({
    plan: "Profissional",
    status: "Ativo",
    expirationDate: "2024-02-15",
    nextBilling: "R$ 29,90",
  });

  // Security data
  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [mlConnected] = useState(true);

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

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (security.newPassword !== security.confirmPassword) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement password change API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSecurity({ currentPassword: "", newPassword: "", confirmPassword: "" });
      toast({
        title: "Senha alterada!",
        description: "Sua senha foi alterada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao alterar senha",
        description: "Não foi possível alterar sua senha.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnectML = () => {
    toast({
      title: "Conta desconectada",
      description: "Sua conta do Mercado Livre foi desconectada.",
    });
  };

  return (
    <AppLayout title="Configurações">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="subscription" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Minha Assinatura
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Segurança
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
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
          </TabsContent>

          {/* Subscription Tab */}
          <TabsContent value="subscription" className="space-y-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>Status da Assinatura</CardTitle>
                <CardDescription>
                  Gerencie sua assinatura e planos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Plano Atual</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg font-semibold">{subscription.plan}</span>
                      <Badge className="bg-success text-success-foreground">
                        {subscription.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Próxima Cobrança</Label>
                    <div className="mt-1">
                      <span className="text-lg font-semibold">{subscription.nextBilling}</span>
                      <p className="text-sm text-muted-foreground">
                        em {new Date(subscription.expirationDate).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline">
                    Alterar Plano
                  </Button>
                  <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                    Cancelar Assinatura
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            {/* Change Password */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>Alterar Senha</CardTitle>
                <CardDescription>
                  Mantenha sua conta segura com uma senha forte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Senha Atual</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={security.currentPassword}
                      onChange={(e) => setSecurity(prev => ({ ...prev, currentPassword: e.target.value }))}
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nova Senha</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={security.newPassword}
                      onChange={(e) => setSecurity(prev => ({ ...prev, newPassword: e.target.value }))}
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={security.confirmPassword}
                      onChange={(e) => setSecurity(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      className="bg-secondary border-border"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                  >
                    {isLoading ? "Alterando..." : "Alterar Senha"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Mercado Livre Connection */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>Conexão com Mercado Livre</CardTitle>
                <CardDescription>
                  Gerencie sua integração com o Mercado Livre
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      Status: {mlConnected ? (
                        <Badge className="bg-success text-success-foreground ml-2">
                          Conectado
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="ml-2">
                          Desconectado
                        </Badge>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {mlConnected 
                        ? "Sua conta está sincronizada com o Mercado Livre" 
                        : "Conecte sua conta para sincronizar seus anúncios"
                      }
                    </p>
                  </div>
                  
                  {mlConnected ? (
                    <Button 
                      variant="outline" 
                      onClick={handleDisconnectML}
                      className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Desconectar
                    </Button>
                  ) : (
                    <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                      Conectar
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default UserSettings;