import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";

// Mock ads data for demonstration
const mockAds = [
  {
    id: "ad1",
    title: "iPhone 13 Pro Max 256GB Azul Sierra",
    thumbnail: "📱",
    currentStock: 5,
  },
  {
    id: "ad2", 
    title: "iPhone 13 128GB Azul Meia-noite",
    thumbnail: "📱",
    currentStock: 8,
  },
  {
    id: "ad3",
    title: "Samsung Galaxy S22 Ultra 512GB",
    thumbnail: "📱",
    currentStock: 3,
  },
  {
    id: "ad4",
    title: "Camiseta Básica Algodão Masculina",
    thumbnail: "👕",
    currentStock: 25,
  },
  {
    id: "ad5",
    title: "Tênis Esportivo Nike Air Max",
    thumbnail: "👟",
    currentStock: 12,
  },
];

const GroupForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditing = id !== "new";

  const [groupName, setGroupName] = useState("");
  const [safetyStock, setSafetyStock] = useState(5);
  const [selectedAds, setSelectedAds] = useState<string[]>([]);
  const [mainAd, setMainAd] = useState<string>("");
  const [initialStock, setInitialStock] = useState(0);
  const [adsSearch, setAdsSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filteredAds = mockAds.filter(ad =>
    ad.title.toLowerCase().includes(adsSearch.toLowerCase())
  );

  useEffect(() => {
    if (isEditing && id) {
      // TODO: Fetch existing group data when connected to backend
      // For now, simulate loading existing data
      setGroupName("Grupo Exemplo");
      setSafetyStock(3);
      setSelectedAds(["ad1", "ad2"]);
      setMainAd("ad1");
      setInitialStock(10);
    }
  }, [isEditing, id]);

  const handleAdToggle = (adId: string, checked: boolean) => {
    if (checked) {
      setSelectedAds(prev => [...prev, adId]);
    } else {
      setSelectedAds(prev => prev.filter(id => id !== adId));
      if (mainAd === adId) {
        setMainAd("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!groupName.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "O nome do grupo é obrigatório.",
        variant: "destructive",
      });
      return;
    }

    if (selectedAds.length === 0) {
      toast({
        title: "Seleção obrigatória",
        description: "Selecione pelo menos um anúncio para o grupo.",
        variant: "destructive",
      });
      return;
    }

    if (!mainAd) {
      toast({
        title: "Anúncio principal obrigatório",
        description: "Selecione um anúncio principal para o grupo.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement save group API call
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call

      toast({
        title: isEditing ? "Grupo atualizado!" : "Grupo criado!",
        description: `O grupo "${groupName}" foi ${isEditing ? "atualizado" : "criado"} com sucesso.`,
      });

      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Ocorreu um erro ao salvar o grupo. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const pageTitle = isEditing ? `Editando Grupo: ${groupName}` : "Criar Novo Grupo";

  return (
    <AppLayout title={pageTitle}>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <h1 className="text-2xl font-bold">{pageTitle}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações do Grupo */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle>Informações do Grupo</CardTitle>
              <CardDescription>
                Configure as informações básicas do grupo de sincronização
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="groupName">Nome do Grupo *</Label>
                <Input
                  id="groupName"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="Ex: Grupo Eletrônicos"
                  className="bg-secondary border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="safetyStock">Estoque de Segurança para Pausa *</Label>
                <Input
                  id="safetyStock"
                  type="number"
                  min="0"
                  value={safetyStock}
                  onChange={(e) => setSafetyStock(Number(e.target.value))}
                  className="bg-secondary border-border"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Quando o estoque atingir este valor, os anúncios secundários serão pausados.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Anúncios do Mercado Livre */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle>Anúncios do Mercado Livre</CardTitle>
              <CardDescription>
                Selecione os anúncios que farão parte deste grupo de sincronização
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="adsSearch">Buscar anúncios</Label>
                <Input
                  id="adsSearch"
                  value={adsSearch}
                  onChange={(e) => setAdsSearch(e.target.value)}
                  placeholder="Digite o nome do anúncio..."
                  className="bg-secondary border-border"
                />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medium text-muted-foreground">
                  <div>Principal</div>
                  <div>Incluir</div>
                  <div>Anúncio</div>
                </div>
                <Separator />

                <RadioGroup value={mainAd} onValueChange={setMainAd}>
                  {filteredAds.map((ad) => (
                    <div key={ad.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-3 rounded-lg bg-secondary/50 border border-border">
                      <div className="flex justify-center md:justify-start">
                        <RadioGroupItem
                          value={ad.id}
                          disabled={!selectedAds.includes(ad.id)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                      </div>
                      
                      <div className="flex justify-center md:justify-start">
                        <Checkbox
                          checked={selectedAds.includes(ad.id)}
                          onCheckedChange={(checked) => handleAdToggle(ad.id, checked as boolean)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{ad.thumbnail}</span>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{ad.title}</p>
                          <p className="text-sm text-muted-foreground">
                            Estoque atual: {ad.currentStock}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>

                {filteredAds.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    Nenhum anúncio encontrado com o termo "{adsSearch}"
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Sincronização Inicial */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle>Sincronização Inicial</CardTitle>
              <CardDescription>
                Configure o estoque inicial para todos os anúncios do grupo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="initialStock">Definir estoque inicial para todos os anúncios do grupo</Label>
                <Input
                  id="initialStock"
                  type="number"
                  min="0"
                  value={initialStock}
                  onChange={(e) => setInitialStock(Number(e.target.value))}
                  placeholder="Ex: 10"
                  className="bg-secondary border-border"
                />
                <p className="text-xs text-muted-foreground">
                  Este valor será aplicado como estoque inicial para todos os anúncios selecionados.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard")}
              className="sm:order-2"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 sm:order-1"
            >
              {isLoading ? (
                "Salvando..."
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {isEditing ? "Atualizar Grupo" : "Salvar Grupo"}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default GroupForm;