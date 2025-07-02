import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock user data - in real app, this would be fetched based on ID
  const [user] = useState({
    id: id,
    name: "João Silva",
    email: "joao@exemplo.com",
    createdAt: "2023-12-01",
    lastLogin: "2024-01-15",
    totalOrders: 42,
    totalRevenue: "R$ 1.218,00"
  });

  const [editableData, setEditableData] = useState({
    subscriptionStatus: "ativo",
    planExpiration: "2024-02-15",
    amountPaid: "29.90",
    adminNotes: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement API call to save user data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Dados salvos!",
        description: "As informações do usuário foram atualizadas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as alterações.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout title={`Usuário: ${user.name}`}>
      <div className="space-y-6">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/admin/usuarios")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar à Lista
        </Button>

        <div className="grid md:grid-cols-2 gap-6">
          {/* User Information */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle>Informações do Usuário</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Nome Completo</Label>
                <p className="text-lg font-medium">{user.name}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                <p className="text-lg">{user.email}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Data de Cadastro</Label>
                <p className="text-lg">{new Date(user.createdAt).toLocaleDateString('pt-BR')}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Último Login</Label>
                <p className="text-lg">{new Date(user.lastLogin).toLocaleDateString('pt-BR')}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Total de Pedidos</Label>
                <p className="text-lg font-medium">{user.totalOrders}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Receita Total</Label>
                <p className="text-lg font-medium text-success">{user.totalRevenue}</p>
              </div>
            </CardContent>
          </Card>

          {/* Editable Information */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle>Gerenciar Assinatura</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subscriptionStatus">Status da Assinatura</Label>
                <Select 
                  value={editableData.subscriptionStatus} 
                  onValueChange={(value) => setEditableData(prev => ({ ...prev, subscriptionStatus: value }))}
                >
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ativo">Ativo</SelectItem>
                    <SelectItem value="pausado">Pausado</SelectItem>
                    <SelectItem value="cancelado">Cancelado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="planExpiration">Vencimento do Plano</Label>
                <Input
                  id="planExpiration"
                  type="date"
                  value={editableData.planExpiration}
                  onChange={(e) => setEditableData(prev => ({ ...prev, planExpiration: e.target.value }))}
                  className="bg-secondary border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amountPaid">Valor Pago (R$)</Label>
                <Input
                  id="amountPaid"
                  type="number"
                  step="0.01"
                  value={editableData.amountPaid}
                  onChange={(e) => setEditableData(prev => ({ ...prev, amountPaid: e.target.value }))}
                  className="bg-secondary border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="adminNotes">Notas do Administrador</Label>
                <Textarea
                  id="adminNotes"
                  placeholder="Adicione observações sobre este usuário..."
                  value={editableData.adminNotes}
                  onChange={(e) => setEditableData(prev => ({ ...prev, adminNotes: e.target.value }))}
                  className="bg-secondary border-border"
                  rows={4}
                />
              </div>

              <Button
                onClick={handleSave}
                disabled={isLoading}
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                {isLoading ? "Salvando..." : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Salvar Alterações
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserDetails;