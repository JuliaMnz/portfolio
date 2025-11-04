'use client';


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@gluestack-ui/themed';

export default function Portfolio() {
  const [page, setPage] = useState('home');
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('https://api.publicapis.org/entries') // Exemplo de integração de API
      .then(res => res.json())
      .then(data => setApiData(data.entries.slice(0, 5)))
      .catch(err => console.error(err));
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <motion.div className="p-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-bold mb-4 text-blue-600">Olá, eu sou Júlia Muniz 👋</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Sou desenvolvedora apaixonada por tecnologia e criação de soluções modernas. Este é meu portfólio feito com React e Next.js.
            </p>
          </motion.div>
        );
      case 'sobre':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Sobre o Projeto</h2>
            <p className="text-gray-700 mb-2">Este site foi desenvolvido utilizando:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>React e Next.js</li>
              <li>TailwindCSS para estilização</li>
              <li>Framer Motion para animações</li>
              <li>Integração com API pública</li>
              <li>Componentes do Gluestack UI</li>
            </ul>
          </div>
        );
      case 'academico':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Experiência Acadêmica</h2>
            <ul className="text-gray-700">
              <li><strong>Bacharelado em Sistemas de Informação</strong> - Universidade XYZ (2022 - Presente)</li>
              <li><strong>Cursos complementares:</strong> Desenvolvimento Web, Engenharia de Software, Banco de Dados.</li>
            </ul>
          </div>
        );
      case 'profissional':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Experiência Profissional</h2>
            <ul className="text-gray-700">
              <li><strong>Aprendiz de Redes</strong> - Rodotour (2024 - Presente)</li>
              <li>Atuação com suporte técnico, configuração de redes e infraestrutura de TI.</li>
            </ul>
          </div>
        );
      case 'projetos':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Projetos Desenvolvidos</h2>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Controle de Estoque em Java</strong> - CRUD completo em console.</li>
              <li><strong>Dashboard Databricks</strong> - Pipeline ETL com camadas Bronze, Silver e Gold.</li>
              <li><strong>Aplicativo Angular</strong> - Integração de APIs e autenticação JWT.</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-500">Integração com API (Gluestack)</h3>
              {apiData ? (
                <ul className="text-gray-700">
                  {apiData.map((api, index) => (
                    <li key={index} className="border-b py-2">{api.API} - {api.Description}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Carregando APIs...</p>
              )}
            </div>
          </div>
        );
      case 'contato':
        return (
          <div className="p-6 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Contato</h2>
            <p className="text-gray-700 mb-2">Entre em contato comigo:</p>
            <form className="max-w-md mx-auto space-y-4">
              <input type="text" placeholder="Nome" className="w-full p-2 border rounded" />
              <input type="email" placeholder="E-mail" className="w-full p-2 border rounded" />
              <textarea placeholder="Mensagem" className="w-full p-2 border rounded"></textarea>
              <Button size="md" className="w-full bg-blue-600 text-white rounded">Enviar</Button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <nav className="flex justify-center space-x-6">
          {['home', 'sobre', 'academico', 'profissional', 'projetos', 'contato'].map(item => (
            <button key={item} onClick={() => setPage(item)} className={`hover:underline ${page === item ? 'font-bold' : ''}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        {renderPage()}
      </main>

      <footer className="bg-blue-600 text-white text-center py-4 mt-8">
        <p>© 2025 Júlia Muniz - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
