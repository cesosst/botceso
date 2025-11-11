
import React from 'react';
import Header from './components/Header';
import ChatArea from './components/ChatArea';
import InputForm from './components/InputForm';
import { useChat } from './hooks/useChat';

const App: React.FC = () => {
  const { messages, isLoading, sendMessage, clearChat, exportChat } = useChat();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 font-sans">
      <div className="w-full max-w-3xl h-[95vh] md:h-[90vh] flex flex-col bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        <Header onClear={clearChat} onExport={exportChat} />
        <ChatArea messages={messages} isLoading={isLoading} />
        <InputForm onSend={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;
