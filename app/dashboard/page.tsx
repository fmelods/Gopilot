"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Code,
  Award,
  MessageSquare,
  User,
  BarChart3,
  CheckCircle2,
  Lock,
  Play,
  Zap,
  Lightbulb,
  Briefcase,
} from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile App Header */}
      <header className="bg-sky-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code size={24} />
            <h1 className="text-xl font-bold">Gopilot</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-sky-700 p-2 rounded-full">
              <User size={20} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-20">
        <Tabs defaultValue="learn" className="w-full" onValueChange={setActiveTab}>
          <TabsContent value="learn" className="mt-0">
            <LearnTab />
          </TabsContent>
          <TabsContent value="progress" className="mt-0">
            <ProgressTab />
          </TabsContent>
          <TabsContent value="chat" className="mt-0">
            <ChatTab />
          </TabsContent>
          <TabsContent value="profile" className="mt-0">
            <ProfileTab />
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2">
        <NavItem
          icon={<BookOpen size={20} />}
          label="Aprender"
          isActive={activeTab === "learn"}
          onClick={() => setActiveTab("learn")}
        />
        <NavItem
          icon={<BarChart3 size={20} />}
          label="Progresso"
          isActive={activeTab === "progress"}
          onClick={() => setActiveTab("progress")}
        />
        <NavItem
          icon={<MessageSquare size={20} />}
          label="Chat"
          isActive={activeTab === "chat"}
          onClick={() => setActiveTab("chat")}
        />
        <NavItem
          icon={<User size={20} />}
          label="Perfil"
          isActive={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        />
      </nav>
    </div>
  )
}

function NavItem({ icon, label, isActive, onClick }) {
  return (
    <button className={`flex flex-col items-center ${isActive ? "text-sky-600" : "text-gray-400"}`} onClick={onClick}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  )
}

function LearnTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-sky-800">Sua Trilha de Aprendizado</h2>
        <span className="text-sm text-gray-500">Nível 3</span>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Progresso Diário</CardTitle>
          <CardDescription>Você está em uma sequência de 5 dias! 🔥</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Meta de Hoje: 2/3 lições</span>
            <span className="text-xs text-gray-500">67%</span>
          </div>
          <Progress value={67} className="h-2" />
        </CardContent>
      </Card>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-700">Continue Aprendendo</h3>
          <Button variant="ghost" size="sm" className="text-sky-600">
            Ver Tudo
          </Button>
        </div>

        <div className="space-y-3">
          <LessonCard
            title="Funções em Go"
            description="Aprenda a criar e usar funções"
            progress={60}
            icon={<Code className="text-sky-600" />}
            isLocked={false}
          />
          <LessonCard
            title="Tratamento de Erros"
            description="Domine a abordagem do Go para tratamento de erros"
            progress={0}
            icon={<Code className="text-sky-600" />}
            isLocked={false}
          />
          <LessonCard
            title="Structs & Interfaces"
            description="Programação orientada a objetos em Go"
            progress={0}
            icon={<Lock className="text-gray-400" />}
            isLocked={true}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-700">Recomendado para Você</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <RecommendationCard
            title="Concorrência em Go"
            icon={<Zap size={20} className="text-purple-500" />}
            type="Tópico Avançado"
          />
          <RecommendationCard
            title="Construindo APIs"
            icon={<Lightbulb size={20} className="text-amber-500" />}
            type="Ideia de Projeto"
          />
          <RecommendationCard
            title="Desenvolvedor Go"
            icon={<Briefcase size={20} className="text-green-500" />}
            type="Oportunidade de Emprego"
          />
          <RecommendationCard
            title="Conferência Go"
            icon={<Users size={20} className="text-blue-500" />}
            type="Evento"
          />
        </div>
      </div>
    </div>
  )
}

function ProgressTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-sky-800">Seu Progresso</h2>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Conclusão Geral</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Trilha de Fundamentos Go</span>
            <span className="text-xs text-gray-500">42%</span>
          </div>
          <Progress value={42} className="h-2 mb-4" />

          <div className="space-y-3">
            <ModuleProgress title="Fundamentos de Go" lessons={5} completed={5} percentage={100} />
            <ModuleProgress title="Tipos de Dados & Variáveis" lessons={4} completed={4} percentage={100} />
            <ModuleProgress title="Estruturas de Controle" lessons={3} completed={2} percentage={67} />
            <ModuleProgress title="Funções" lessons={4} completed={1} percentage={25} />
            <ModuleProgress title="Tratamento de Erros" lessons={3} completed={0} percentage={0} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Conquistas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <Achievement icon={<Award className="text-amber-500" />} title="Primeira Lição" unlocked={true} />
            <Achievement icon={<Award className="text-amber-500" />} title="Sequência de 5 Dias" unlocked={true} />
            <Achievement icon={<Award className="text-gray-300" />} title="Mestre do Quiz" unlocked={false} />
            <Achievement icon={<Award className="text-gray-300" />} title="Ninja do Código" unlocked={false} />
            <Achievement icon={<Award className="text-gray-300" />} title="Mestre de Módulo" unlocked={false} />
            <Achievement icon={<Award className="text-gray-300" />} title="Especialista em Go" unlocked={false} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ChatTab() {
  return (
    <div className="space-y-6 h-[calc(100vh-180px)] flex flex-col">
      <h2 className="text-2xl font-bold text-sky-800">Assistente de IA</h2>

      <div className="flex-1 bg-white rounded-lg border p-4 overflow-y-auto space-y-4">
        <div className="flex gap-3">
          <div className="bg-sky-100 p-2 rounded-full h-8 w-8 flex items-center justify-center">
            <Code size={16} className="text-sky-600" />
          </div>
          <div className="bg-sky-50 p-3 rounded-lg max-w-[80%]">
            <p className="text-sm">Olá! Eu sou seu assistente de programação Go. Como posso ajudá-lo hoje?</p>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <div className="bg-sky-600 p-3 rounded-lg max-w-[80%]">
            <p className="text-sm text-white">Você pode explicar o que são goroutines?</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-full h-8 w-8 flex items-center justify-center">
            <User size={16} className="text-gray-600" />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="bg-sky-100 p-2 rounded-full h-8 w-8 flex items-center justify-center">
            <Code size={16} className="text-sky-600" />
          </div>
          <div className="bg-sky-50 p-3 rounded-lg max-w-[80%]">
            <p className="text-sm">
              Goroutines são threads leves gerenciadas pelo runtime do Go. Elas permitem que você execute funções
              concorrentemente com outras funções.
              <br />
              <br />
              Aqui está um exemplo simples:
              <br />
              <br />
              <code className="bg-gray-100 p-1 rounded text-xs block">
                {`func main() {
  go sayHello() // Isso é executado concorrentemente
  fmt.Println("Função principal")
  time.Sleep(time.Second)
}

func sayHello() {
  fmt.Println("Olá da goroutine!")
}`}
              </code>
              <br />
              Gostaria que eu explicasse mais sobre como elas funcionam?
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Input placeholder="Pergunte qualquer coisa sobre Go..." className="flex-1" />
        <Button className="bg-sky-600 hover:bg-sky-700">
          <MessageSquare size={16} />
        </Button>
      </div>
    </div>
  )
}

function ProfileTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-sky-800">Seu Perfil</h2>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center">
            <div className="bg-sky-100 p-4 rounded-full mb-4">
              <User size={40} className="text-sky-600" />
            </div>
            <h3 className="font-bold text-xl">João Silva</h3>
            <p className="text-gray-500 text-sm">joao@exemplo.com</p>

            <div className="flex gap-2 mt-4">
              <div className="text-center">
                <div className="bg-sky-50 p-2 rounded-lg font-bold text-sky-600">5</div>
                <p className="text-xs text-gray-500 mt-1">Dias Seguidos</p>
              </div>
              <div className="text-center">
                <div className="bg-sky-50 p-2 rounded-lg font-bold text-sky-600">12</div>
                <p className="text-xs text-gray-500 mt-1">Lições</p>
              </div>
              <div className="text-center">
                <div className="bg-sky-50 p-2 rounded-lg font-bold text-sky-600">2</div>
                <p className="text-xs text-gray-500 mt-1">Medalhas</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Preferências de Aprendizado</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium">Nível de Experiência</p>
              <p className="text-sm text-gray-500">Intermediário</p>
            </div>
            <div>
              <p className="text-sm font-medium">Objetivo Principal</p>
              <p className="text-sm text-gray-500">Conseguir um emprego como desenvolvedor Go</p>
            </div>
            <div>
              <p className="text-sm font-medium">Áreas de Interesse</p>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded">Desenvolvimento Web</span>
                <span className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded">Microsserviços</span>
                <span className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded">Aplicações CLI</span>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            Editar Preferências
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Configurações da Conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            Configurações de Notificação
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Alterar Senha
          </Button>
          <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
            Sair
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

function LessonCard({ title, description, progress, icon, isLocked }) {
  return (
    <div className={`bg-white p-4 rounded-lg border ${isLocked ? "opacity-70" : ""}`}>
      <div className="flex gap-3">
        <div className="bg-sky-50 p-2 rounded-lg">{icon}</div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">{title}</h4>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
            {!isLocked && (
              <Button size="sm" className="bg-sky-600 hover:bg-sky-700 h-8 w-8 p-0">
                <Play size={16} />
              </Button>
            )}
          </div>
          {progress > 0 && (
            <div className="mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-500">Progresso</span>
                <span className="text-xs text-gray-500">{progress}%</span>
              </div>
              <Progress value={progress} className="h-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function RecommendationCard({ title, icon, type }) {
  return (
    <div className="bg-white p-3 rounded-lg border">
      <div className="flex flex-col h-full">
        <div className="mb-2">{icon}</div>
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-gray-500 mt-auto">{type}</p>
      </div>
    </div>
  )
}

function ModuleProgress({ title, lessons, completed, percentage }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-2">
          {percentage === 100 ? (
            <CheckCircle2 size={16} className="text-green-500" />
          ) : (
            <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          )}
          <span className="text-sm font-medium">{title}</span>
        </div>
        <span className="text-xs text-gray-500">
          {completed}/{lessons} lições
        </span>
      </div>
      <Progress value={percentage} className="h-1 ml-6" />
    </div>
  )
}

function Achievement({ icon, title, unlocked }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`p-3 rounded-full mb-1 ${unlocked ? "bg-amber-50" : "bg-gray-100"}`}>{icon}</div>
      <span className={`text-xs text-center ${unlocked ? "text-gray-700" : "text-gray-400"}`}>{title}</span>
    </div>
  )
}

function Input({ className, ...props }) {
  return (
    <input
      className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 ${className}`}
      {...props}
    />
  )
}

function Users(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
