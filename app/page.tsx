import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, BookOpen, Award, MessageSquare, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <div className="bg-sky-600 text-white p-2 rounded-lg">
            <Code size={24} />
          </div>
          <h1 className="text-xl font-bold text-sky-700">Gopilot</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Entrar</Link>
          </Button>
          <Button size="sm" className="bg-sky-600 hover:bg-sky-700" asChild>
            <Link href="/register">Cadastrar</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-sky-800 mb-4">Aprenda Go de Forma Divertida</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Domine Golang através de lições interativas, desafios e assistência com IA. Sua jornada de aprendizado
          personalizada começa aqui.
        </p>
        <Button className="bg-sky-600 hover:bg-sky-700" size="lg" asChild>
          <Link href="/register">
            Comece a Aprender Agora <ArrowRight className="ml-2" size={16} />
          </Link>
        </Button>
      </section>

      {/* Features */}
      <section className="px-4 py-8 bg-white">
        <h2 className="text-2xl font-bold text-center text-sky-800 mb-8">Principais Recursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FeatureCard
            icon={<BookOpen className="text-sky-600" size={24} />}
            title="Trilha de Aprendizado Personalizada"
            description="Roteiro personalizado com base na sua experiência, objetivos e estilo de aprendizado."
          />
          <FeatureCard
            icon={<Code className="text-sky-600" size={24} />}
            title="Desafios de Codificação Interativos"
            description="Pratique com exercícios do mundo real e receba feedback instantâneo."
          />
          <FeatureCard
            icon={<MessageSquare className="text-sky-600" size={24} />}
            title="Assistente com IA"
            description="Obtenha ajuda 24/7 com suas dúvidas de programação Go e revisões de código."
          />
          <FeatureCard
            icon={<Award className="text-sky-600" size={24} />}
            title="Certificação e Conquistas"
            description="Ganhe certificados e medalhas conforme progride em sua jornada."
          />
        </div>
      </section>

      {/* App Preview */}
      <section className="px-4 py-12 bg-sky-50">
        <h2 className="text-2xl font-bold text-center text-sky-800 mb-8">Prévia do Aplicativo</h2>
        <div className="flex justify-center">
          <div className="bg-white border-8 border-gray-800 rounded-3xl overflow-hidden shadow-xl w-64 h-[500px] relative">
            <div className="bg-sky-600 text-white p-4">
              <div className="flex items-center gap-2">
                <Code size={20} />
                <h3 className="font-bold">Gopilot</h3>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sky-800 mb-2">Lições de Hoje</h4>
              <div className="space-y-3">
                {[
                  { title: "Fundamentos de Go", progress: 80 },
                  { title: "Funções", progress: 60 },
                  { title: "Estruturas de Dados", progress: 40 },
                  { title: "Goroutines", progress: 20 },
                ].map((lesson, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{lesson.title}</span>
                      <span className="text-xs text-gray-500">{lesson.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sky-600 h-2 rounded-full" style={{ width: `${lesson.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-sky-600 hover:bg-sky-700">Continuar Aprendendo</Button>
            </div>
            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2">
              <div className="flex flex-col items-center text-sky-600">
                <BookOpen size={20} />
                <span className="text-xs">Aprender</span>
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <BarChart3 size={20} />
                <span className="text-xs">Progresso</span>
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <MessageSquare size={20} />
                <span className="text-xs">Chat</span>
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <Award size={20} />
                <span className="text-xs">Prêmios</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 text-center bg-white">
        <h2 className="text-2xl font-bold text-sky-800 mb-4">Pronto para Dominar a Programação Go?</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Junte-se a milhares de desenvolvedores que estão aprendendo Go com o Gopilot. Comece sua jornada hoje!
        </p>
        <Button className="bg-sky-600 hover:bg-sky-700" size="lg" asChild>
          <Link href="/register">Criar Conta Gratuita</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="mt-auto p-6 bg-gray-50 text-center text-gray-500 text-sm">
        <p>© 2025 Gopilot. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-sky-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
