"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, Send, User, Paperclip, Mic } from "lucide-react"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Olá! Eu sou seu assistente de programação Go. Como posso ajudá-lo hoje?",
      timestamp: new Date().toISOString(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue,
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse

      if (inputValue.toLowerCase().includes("goroutine")) {
        botResponse = {
          id: messages.length + 2,
          sender: "bot",
          text: `Goroutines são threads leves gerenciadas pelo runtime do Go. Elas permitem que você execute funções concorrentemente com outras funções.

Aqui está um exemplo simples:

\`\`\`go
func main() {
  go dizerOla() // Isso é executado concorrentemente
  fmt.Println("Função principal")
  time.Sleep(time.Second)
}

func dizerOla() {
  fmt.Println("Olá da goroutine!")
}
\`\`\`

Goroutines são muito mais leves que threads do SO. Você pode facilmente criar milhares de goroutines no mesmo programa. Elas são multiplexadas em um número menor de threads do SO pelo runtime do Go.

Gostaria de saber mais sobre como as goroutines se comunicam entre si usando canais?`,
          timestamp: new Date().toISOString(),
        }
      } else if (inputValue.toLowerCase().includes("erro")) {
        botResponse = {
          id: messages.length + 2,
          sender: "bot",
          text: `O tratamento de erros em Go é diferente de muitas outras linguagens. Em vez de usar exceções, as funções em Go frequentemente retornam um erro como segundo valor de retorno.

Aqui está o padrão típico:

\`\`\`go
func fazerAlgo() (Resultado, error) {
  // Se algo der errado
  if ocorreuProblema {
    return nil, errors.New("algo deu errado")
  }
  
  // Caso contrário, retorne o resultado com erro nil
  return resultado, nil
}

// Ao chamar a função
resultado, err := fazerAlgo()
if err != nil {
  // Trate o erro
  log.Fatal(err)
}
// Use o resultado
\`\`\`

Este tratamento explícito de erros força você a considerar os casos de erro, tornando seu código mais robusto.

Gostaria de ver mais exemplos de padrões de tratamento de erros em Go?`,
          timestamp: new Date().toISOString(),
        }
      } else {
        botResponse = {
          id: messages.length + 2,
          sender: "bot",
          text: `Ficarei feliz em ajudar com suas dúvidas de programação Go! Você pode me perguntar sobre:

- Sintaxe e recursos da linguagem Go
- Padrões comuns e melhores práticas
- Ajuda com depuração de código
- Explicações de conceitos como concorrência, interfaces ou tratamento de erros
- Código de exemplo para tarefas específicas

Sobre qual aspecto específico do Go você gostaria de aprender?`,
          timestamp: new Date().toISOString(),
        }
      }

      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-sky-600 text-white p-4">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft size={20} />
            <h1 className="font-medium">Assistente de IA</h1>
          </Link>
        </div>
      </header>

      {/* Chat Messages */}
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.sender === "user" ? "justify-end" : ""}`}>
              {message.sender === "bot" && (
                <div className="bg-sky-100 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <Code size={16} className="text-sky-600" />
                </div>
              )}
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.sender === "user" ? "bg-sky-600 text-white" : "bg-white border"
                }`}
              >
                <div className="whitespace-pre-wrap">
                  {message.text.split("```").map((part, index) => {
                    if (index % 2 === 0) {
                      return <span key={index}>{part}</span>
                    } else {
                      const codeContent = part.startsWith("go") ? part.substring(2) : part
                      return (
                        <pre key={index} className="bg-gray-100 p-2 rounded text-xs block my-2 overflow-x-auto">
                          <code>{codeContent}</code>
                        </pre>
                      )
                    }
                  })}
                </div>
                <div className="text-xs mt-1 text-right opacity-70">{formatTimestamp(message.timestamp)}</div>
              </div>
              {message.sender === "user" && (
                <div className="bg-gray-200 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <User size={16} className="text-gray-600" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <footer className="p-4 bg-white border-t">
        <div className="flex gap-2 items-center">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Paperclip size={20} className="text-gray-500" />
          </Button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage()
            }}
            placeholder="Pergunte qualquer coisa sobre Go..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mic size={20} className="text-gray-500" />
          </Button>
          <Button className="bg-sky-600 hover:bg-sky-700 rounded-full h-10 w-10 p-0" onClick={handleSendMessage}>
            <Send size={18} className="text-white" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
