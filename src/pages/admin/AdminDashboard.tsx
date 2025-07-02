import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock data
const kpis = [
  { title: "Receita Total (MRR)", value: "R$ 12.450", change: "+12.5%" },
  { title: "Assinantes Ativos", value: "324", change: "+8.2%" },
  { title: "Novos Usuários (Mês)", value: "47", change: "+15.3%" },
  { title: "Usuários Online", value: "89", change: "Live" },
];

const recentSubscribers = [
  { id: 1, name: "João Silva", email: "joao@exemplo.com", plan: "Profissional", date: "2024-01-15" },
  { id: 2, name: "Maria Santos", email: "maria@exemplo.com", plan: "Básico", date: "2024-01-14" },
  { id: 3, name: "Pedro Costa", email: "pedro@exemplo.com", plan: "Profissional", date: "2024-01-13" },
  { id: 4, name: "Ana Oliveira", email: "ana@exemplo.com", plan: "Básico", date: "2024-01-12" },
  { id: 5, name: "Carlos Ferreira", email: "carlos@exemplo.com", plan: "Profissional", date: "2024-01-11" },
];

const AdminDashboard = () => {
  return (
    <AdminLayout title="Dashboard Administrativo">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <Card key={index} className="bg-gradient-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {kpi.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{kpi.value}</div>
                <p className="text-sm text-success">
                  {kpi.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Subscribers */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Assinantes Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Plano</TableHead>
                  <TableHead>Data de Cadastro</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentSubscribers.map((subscriber) => (
                  <TableRow key={subscriber.id}>
                    <TableCell className="font-medium">{subscriber.name}</TableCell>
                    <TableCell className="text-muted-foreground">{subscriber.email}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={subscriber.plan === "Profissional" ? "default" : "secondary"}
                        className={subscriber.plan === "Profissional" ? "bg-primary text-primary-foreground" : ""}
                      >
                        {subscriber.plan}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(subscriber.date).toLocaleDateString('pt-BR')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;