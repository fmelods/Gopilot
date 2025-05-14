"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, MessageSquare, Play } from "lucide-react"

export default function LessonPage() {
  const [activeTab, setActiveTab] = useState("learn")
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-sky-600 text-white p-4">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft size={20} />
            <h1 className="font-medium">Funções em Go</h1>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="text-white p-2 h-8" asChild>
              <Link href="/chat">
                <MessageSquare size={18} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span>Progresso</span>
            <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="h-1" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-20">
        <Tabs defaultValue="learn" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="learn">Aprender</TabsTrigger>
            <TabsTrigger value="practice">Praticar</TabsTrigger>
          </TabsList>

          <TabsContent value="learn" className="mt-0">
            {currentStep === 1 && (
              <LessonContent
                title="Introdução às Funções"
                content={
                  <>
                    <p className="mb-4">
                      Funções são um dos blocos de construção fundamentais em Go. Elas permitem que você organize seu
                      código em partes reutilizáveis.
                    </p>
                    <p className="mb-4">
                      Em Go, uma função é definida usando a palavra-chave{" "}
                      <code className="bg-gray-100 px-1 rounded">func</code>, seguida pelo nome da função, parâmetros,
                      tipo de retorno e corpo.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
                      <pre>
                        <code>
                          {`func saudacao(nome string) string {
    return "Olá, " + nome + "!"
}

func main() {
    mensagem := saudacao("Gopher")
    fmt.Println(mensagem)  // Saída: Olá, Gopher!
}`}
                        </code>
                      </pre>
                    </div>
                    <p>
                      Neste exemplo, <code className="bg-gray-100 px-1 rounded">saudacao</code> é uma função que recebe
                      um parâmetro string e retorna uma string.
                    </p>
                  </>
                }
                currentStep={currentStep}
                totalSteps={totalSteps}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}

            {currentStep === 2 && (
              <LessonContent
                title="Múltiplos Valores de Retorno"
                content={
                  <>
                    <p className="mb-4">
                      Uma das características distintivas do Go é que as funções podem retornar múltiplos valores. Isso
                      é particularmente útil para retornar tanto um resultado quanto um erro.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
                      <pre>
                        <code>
                          {`func dividir(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("não é possível dividir por zero")
    }
    return a / b, nil
}

func main() {
    resultado, err := dividir(10, 2)
    if err != nil {
        fmt.Println("Erro:", err)
        return
    }
    fmt.Println("Resultado:", resultado)  // Saída: Resultado: 5
}`}
                        </code>
                      </pre>
                    </div>
                    <p>
                      Este padrão de retornar um resultado e um erro é muito comum em Go e ajuda no tratamento robusto
                      de erros.
                    </p>
                  </>
                }
                currentStep={currentStep}
                totalSteps={totalSteps}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}

            {currentStep === 3 && (
              <LessonContent
                title="Funções Anônimas"
                content={
                  <>
                    <p className="mb-4">
                      Go suporta funções anônimas, que podem ser definidas inline sem nomeá-las. Elas são úteis para
                      funções de curta duração ou closures.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
                      <pre>
                        <code>
                          {`func main() {
    // Função anônima atribuída a uma variável
    soma := func(a, b int) int {
        return a + b
    }
    
    fmt.Println(soma(5, 3))  // Saída: 8
    
    // Função anônima imediatamente invocada
    resultado := func(x int) int {
        return x * x
    }(4)
    
    fmt.Println(resultado)  // Saída: 16
}`}
                        </code>
                      </pre>
                    </div>
                    <p>Funções anônimas podem acessar variáveis da função envolvente, criando um closure.</p>
                  </>
                }
                currentStep={currentStep}
                totalSteps={totalSteps}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}

            {currentStep === 4 && (
              <LessonContent
                title="Função como Valores"
                content={
                  <>
                    <p className="mb-4">
                      Em Go, funções são cidadãos de primeira classe, o que significa que podem ser atribuídas a
                      variáveis, passadas como argumentos e retornadas de outras funções.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
                      <pre>
                        <code>
                          {`func operar(a, b int, operacao func(int, int) int) int {
    return operacao(a, b)
}

func main() {
    somar := func(x, y int) int {
        return x + y
    }
    
    multiplicar := func(x, y int) int {
        return x * y
    }
    
    fmt.Println(operar(5, 3, somar))       // Saída: 8
    fmt.Println(operar(5, 3, multiplicar))  // Saída: 15
}`}
                        </code>
                      </pre>
                    </div>
                    <p className="mb-4">
                      Este aspecto de programação funcional do Go o torna muito flexível e poderoso.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <CheckCircle size={20} />
                        <h3 className="font-bold">Lição Completa!</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Ótimo trabalho! Você completou a lição sobre Funções em Go. Agora você pode testar seu
                        conhecimento com alguns exercícios práticos.
                      </p>
                    </div>
                  </>
                }
                currentStep={currentStep}
                totalSteps={totalSteps}
                onNext={nextStep}
                onPrev={prevStep}
                isLastStep={true}
              />
            )}
          </TabsContent>

          <TabsContent value="practice" className="mt-0">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold text-sky-800 mb-4">Exercícios Práticos</h2>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Exercício 1: Criar uma Função Simples</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Escreva uma função chamada <code className="bg-gray-100 px-1 rounded">calcularArea</code> que
                      recebe o raio de um círculo como parâmetro e retorna sua área.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
                      <pre>
                        <code>
                          {`// Seu código aqui
func calcularArea(raio float64) float64 {
    // Calcule e retorne a área
}`}
                        </code>
                      </pre>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-sky-600 hover:bg-sky-700">
                        <Play size={16} className="mr-2" />
                        Executar Código
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Exercício 2: Múltiplos Valores de Retorno</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Escreva uma função chamada <code className="bg-gray-100 px-1 rounded">minMax</code> que recebe uma
                      slice de inteiros e retorna tanto o valor mínimo quanto o máximo.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
                      <pre>
                        <code>
                          {`// Seu código aqui
func minMax(numeros []int) (int, int) {
    // Encontre e retorne os valores mínimo e máximo
}`}
                        </code>
                      </pre>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-sky-600 hover:bg-sky-700">
                        <Play size={16} className="mr-2" />
                        Executar Código
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Exercício 3: Função de Ordem Superior</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Escreva uma função de ordem superior chamada{" "}
                      <code className="bg-gray-100 px-1 rounded">aplicarACada</code> que recebe uma slice de inteiros e
                      uma função, e aplica a função a cada elemento.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
                      <pre>
                        <code>
                          {`// Seu código aqui
func aplicarACada(numeros []int, fn func(int) int) []int {
    // Aplique a função a cada elemento e retorne o resultado
}`}
                        </code>
                      </pre>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-sky-600 hover:bg-sky-700">
                        <Play size={16} className="mr-2" />
                        Executar Código
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/dashboard">Voltar ao Painel</Link>
                  </Button>
                  <Button className="bg-sky-600 hover:bg-sky-700" asChild>
                    <Link href="/quiz/functions">Fazer Quiz</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function LessonContent({ title, content, currentStep, totalSteps, onNext, onPrev, isLastStep = false }) {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold text-sky-800 mb-4">{title}</h2>
        <div className="prose max-w-none">{content}</div>
        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={onPrev} disabled={currentStep === 1}>
            Anterior
          </Button>
          {isLastStep ? (
            <Button className="bg-sky-600 hover:bg-sky-700" onClick={() => setActiveTab("practice")}>
              Praticar Agora
            </Button>
          ) : (
            <Button className="bg-sky-600 hover:bg-sky-700" onClick={onNext}>
              Próximo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
