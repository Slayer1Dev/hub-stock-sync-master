import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Link as LinkIcon } from "lucide-react";

// Mock data for demonstration
const mockGroups = [
  {
    id: "1",
    name: "Grupo Eletrônicos",
    mainAd: "iPhone 13 Pro Max",
    currentStock: 5,
    status: "Ativo" as const,
  },
  {
    id: "2", 
    name: "Grupo Roupas",
    mainAd: "Camiseta Básica",
    currentStock: 2,
    status: "Pausado" as const,
  },
  {
    id: "3",
    name: "Grupo Casa",
    mainAd: "Aspirador Robô",
    currentStock: 0,
    status: "Erro" as const,
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isConnected] = useState(false); // TODO: Get from backend API
  const [groups] = useState(mockGroups);

  const handleConnectML = () => {
    // TODO: Implement Mercado Livre OAuth connection
    toast({
      title: "Redirecionando...",
      description: "Você será redirecionado para conectar com o Mercado Livre.",
    });
  };

  const handleDeleteGroup = (groupId: string, groupName: string) => {
    // TODO: Implement delete group API call
    toast({
      title: "Grupo excluído",
      description: `O grupo "${groupName}" foi excluído com sucesso.`,
    });
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo":
        return "default";
      case "Pausado":
        return "secondary";
      case "Erro":
        return "destructive";
      default:
        return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-success/10 text-success border-success/20";
      case "Pausado":
        return "bg-warning/10 text-warning border-warning/20";
      case "Erro":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "";
    }
  };

  return (
    <AppLayout title="Dashboard">
      <div className="space-y-8">
        {/* Connection Status */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LinkIcon className="h-5 w-5" />
              Status da Conexão
            </CardTitle>
            <CardDescription>
              Conecte sua conta do Mercado Livre para sincronizar seus anúncios
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isConnected ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-warning font-medium mb-2">
                    ⚠️ Conta do Mercado Livre não conectada
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Conecte sua conta para começar a sincronizar seus anúncios automaticamente.
                  </p>
                </div>
                <Button 
                  onClick={handleConnectML}
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                  size="lg"
                >
                  🔗 Conectar com Mercado Livre
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-success rounded-full animate-pulse"></div>
                <p className="text-success font-medium">
                  ✅ Conectado ao Mercado Livre como João Silva
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Groups Section */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Meus Grupos de Anúncios</CardTitle>
                <CardDescription>
                  Gerencie seus grupos de sincronização de estoque
                </CardDescription>
              </div>
              <Button
                onClick={() => navigate("/dashboard/groups/new")}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                <Plus className="mr-2 h-4 w-4" />
                Criar Novo Grupo
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {groups.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Plus className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">Nenhum grupo criado</h3>
                <p className="text-muted-foreground mb-6">
                  Você ainda não criou nenhum grupo. Clique em 'Criar Novo Grupo' para começar.
                </p>
                <Button
                  onClick={() => navigate("/dashboard/groups/new")}
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Criar Novo Grupo
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Grupo</TableHead>
                      <TableHead>Anúncio Principal</TableHead>
                      <TableHead>Estoque Atual</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {groups.map((group) => (
                      <TableRow key={group.id}>
                        <TableCell className="font-medium">{group.name}</TableCell>
                        <TableCell>{group.mainAd}</TableCell>
                        <TableCell>
                          <span className={`font-medium ${group.currentStock === 0 ? 'text-destructive' : group.currentStock <= 3 ? 'text-warning' : 'text-success'}`}>
                            {group.currentStock}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(group.status)}>
                            {group.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => navigate(`/dashboard/groups/${group.id}`)}
                            >
                              Gerenciar
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent className="bg-card border-border">
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Tem certeza que deseja excluir o grupo "{group.name}"? 
                                    Esta ação não pode ser desfeita.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDeleteGroup(group.id, group.name)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Excluir
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Dashboard;