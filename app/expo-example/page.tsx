"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExpoExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white p-4">
      <h1 className="text-2xl font-bold text-sky-800 mb-6">Implementação com Expo/React Native</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Como implementar o Gopilot com Expo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            O Gopilot pode ser facilmente convertido em um aplicativo móvel nativo usando Expo e React Native. Abaixo
            está um exemplo de como implementar a tela de Dashboard do Gopilot usando Expo:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
            <pre>
              <code>
                {`// App.js
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { 
  Ionicons, 
  MaterialCommunityIcons, 
  FontAwesome5, 
  Feather 
} from '@expo/vector-icons';

export default function App() {
  const [activeTab, setActiveTab] = useState('learn');

  const renderContent = () => {
    switch (activeTab) {
      case 'learn':
        return <LearnTab />;
      case 'progress':
        return <ProgressTab />;
      case 'chat':
        return <ChatTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <LearnTab />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <MaterialCommunityIcons name="code-tags" size={24} color="white" />
          <Text style={styles.headerTitle}>Gopilot</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Feather name="user" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {renderContent()}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('learn')}
        >
          <Ionicons 
            name="book-outline" 
            size={20} 
            color={activeTab === 'learn' ? '#0284c7' : '#9ca3af'} 
          />
          <Text 
            style={[
              styles.navLabel, 
              {color: activeTab === 'learn' ? '#0284c7' : '#9ca3af'}
            ]}
          >
            Aprender
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('progress')}
        >
          <Ionicons 
            name="bar-chart-outline" 
            size={20} 
            color={activeTab === 'progress' ? '#0284c7' : '#9ca3af'} 
          />
          <Text 
            style={[
              styles.navLabel, 
              {color: activeTab === 'progress' ? '#0284c7' : '#9ca3af'}
            ]}
          >
            Progresso
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('chat')}
        >
          <Ionicons 
            name="chatbubble-outline" 
            size={20} 
            color={activeTab === 'chat' ? '#0284c7' : '#9ca3af'} 
          />
          <Text 
            style={[
              styles.navLabel, 
              {color: activeTab === 'chat' ? '#0284c7' : '#9ca3af'}
            ]}
          >
            Chat
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('profile')}
        >
          <Feather 
            name="user" 
            size={20} 
            color={activeTab === 'profile' ? '#0284c7' : '#9ca3af'} 
          />
          <Text 
            style={[
              styles.navLabel, 
              {color: activeTab === 'profile' ? '#0284c7' : '#9ca3af'}
            ]}
          >
            Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function LearnTab() {
  return (
    <View style={styles.tabContent}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Sua Trilha de Aprendizado</Text>
        <Text style={styles.subtitle}>Nível 3</Text>
      </View>
      
      {/* Aqui você adicionaria os componentes de lição */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Progresso Diário</Text>
        <Text style={styles.cardSubtitle}>Você está em uma sequência de 5 dias! 🔥</Text>
        
        <View style={styles.progressRow}>
          <Text style={styles.progressText}>Meta de Hoje: 2/3 lições</Text>
          <Text style={styles.progressPercent}>67%</Text>
        </View>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: '67%' }]} />
        </View>
      </View>
      
      {/* Mais componentes aqui... */}
    </View>
  );
}

// Outros componentes de tab aqui...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#0284c7',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: '#0369a1',
    padding: 8,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    backgroundColor: 'white',
    paddingVertical: 8,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  tabContent: {
    gap: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#075985',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressPercent: {
    fontSize: 12,
    color: '#6b7280',
  },
  progressBg: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
  },
  progressFill: {
    height: 8,
    backgroundColor: '#0284c7',
    borderRadius: 4,
  },
});`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Configuração do Projeto Expo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Para iniciar um novo projeto Expo para o Gopilot, siga estes passos:</p>

          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>
              Instale o Expo CLI globalmente: <code className="bg-gray-100 px-1 rounded">npm install -g expo-cli</code>
            </li>
            <li>
              Crie um novo projeto: <code className="bg-gray-100 px-1 rounded">npx create-expo-app gopilot</code>
            </li>
            <li>
              Entre na pasta do projeto: <code className="bg-gray-100 px-1 rounded">cd gopilot</code>
            </li>
            <li>
              Instale as dependências necessárias:{" "}
              <code className="bg-gray-100 px-1 rounded">
                npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
              </code>
            </li>
            <li>
              Inicie o projeto: <code className="bg-gray-100 px-1 rounded">npx expo start</code>
            </li>
          </ol>

          <p>
            Com o Expo, você pode facilmente testar o aplicativo em dispositivos reais usando o aplicativo Expo Go,
            disponível na App Store e Google Play Store.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
