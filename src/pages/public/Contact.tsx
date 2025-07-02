import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Recebemos sua mensagem e responderemos em breve.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground">
            Nossa equipe está pronta para ajudar. Preencha o formulário abaixo ou nos envie um e-mail.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Formulário de Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Seu Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Seu Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Qual o motivo do contato?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Sua Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva sua dúvida ou como podemos ajudar..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                  size="lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Informações de Contato</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email de Suporte</h3>
                  <p className="text-muted-foreground">
                    Para dúvidas técnicas, problemas com sincronização ou questões sobre sua conta:
                  </p>
                  <a 
                    href="mailto:suporte@hubdeferramentas.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    suporte@hubdeferramentas.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Email Comercial</h3>
                  <p className="text-muted-foreground">
                    Para questões comerciais, parcerias ou informações sobre planos:
                  </p>
                  <a 
                    href="mailto:contato@hubdeferramentas.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    contato@hubdeferramentas.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Email Direto</h3>
                  <p className="text-muted-foreground">
                    Para contato direto com o fundador:
                  </p>
                  <a 
                    href="mailto:lucasgabrielbarbosa84@gmail.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    lucasgabrielbarbosa84@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Horário de Atendimento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Segunda a Sexta</span>
                    <span className="text-muted-foreground">09:00 às 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sábados</span>
                    <span className="text-muted-foreground">09:00 às 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Domingos e Feriados</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Nota:</strong> Respondemos todas as mensagens em até 24 horas durante dias úteis. 
                    Para urgências técnicas, utilize nosso email de suporte.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Antes de Entrar em Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Para acelerar o atendimento, verifique primeiro nossa Central de Ajuda:
                </p>
                <a 
                  href="/central-de-ajuda" 
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Acessar Central de Ajuda →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Contact;