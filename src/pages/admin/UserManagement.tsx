import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

// Mock data
const users = [
  { 
    id: 1, 
    name: "João Silva", 
    email: "joao@exemplo.com", 
    status: "Ativo", 
    plan: "Profissional",
    expiration: "2024-02-15" 
  },
  { 
    id: 2, 
    name: "Maria Santos", 
    email: "maria@exemplo.com", 
    status: "Ativo", 
    plan: "Básico",
    expiration: "2024-01-28" 
  },
  { 
    id: 3, 
    name: "Pedro Costa", 
    email: "pedro@exemplo.com", 
    status: "Pausado", 
    plan: "Profissional",
    expiration: "2024-03-10" 
  },
  { 
    id: 4, 
    name: "Ana Oliveira", 
    email: "ana@exemplo.com", 
    status: "Ativo", 
    plan: "Básico",
    expiration: "2024-02-05" 
  },
  { 
    id: 5, 
    name: "Carlos Ferreira", 
    email: "carlos@exemplo.com", 
    status: "Cancelado", 
    plan: "Profissional",
    expiration: "2024-01-20" 
  },
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-success text-success-foreground";
      case "Pausado": return "bg-warning text-warning-foreground";
      case "Cancelado": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <AdminLayout title="Gerenciamento de Usuários">
      <div className="space-y-6">
        {/* Filters */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Filtros de Busca</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-secondary border-border"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px] bg-secondary border-border">
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Status</SelectItem>
                  <SelectItem value="ativo">Ativo</SelectItem>
                  <SelectItem value="pausado">Pausado</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Usuários ({filteredUsers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome Completo</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status da Conta</TableHead>
                  <TableHead>Plano</TableHead>
                  <TableHead>Vencimento do Plano</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={user.plan === "Profissional" ? "default" : "secondary"}
                        className={user.plan === "Profissional" ? "bg-primary text-primary-foreground" : ""}
                      >
                        {user.plan}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(user.expiration).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell>
                      <Link to={`/admin/usuarios/${user.id}`}>
                        <Button variant="outline" size="sm">
                          Gerenciar
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {filteredUsers.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                Nenhum usuário encontrado com os filtros aplicados.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default UserManagement;