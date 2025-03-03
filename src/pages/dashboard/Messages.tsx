
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Circle, Send, User } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  id: number;
  sender: 'user' | 'barber' | 'system';
  content: string;
  timestamp: string;
  read: boolean;
  barberName?: string;
}

const Messages = () => {
  const { toast } = useToast();
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');
  
  // Sample conversations
  const conversations = [
    {
      id: 1,
      barberName: 'John Barber',
      lastMessage: 'See you on Monday!',
      timestamp: '2 hours ago',
      unread: false
    },
    {
      id: 2,
      barberName: 'Sarah Stylist',
      lastMessage: 'Your appointment has been confirmed.',
      timestamp: '1 day ago',
      unread: true
    },
    {
      id: 3,
      barberName: 'System',
      lastMessage: 'Your loyalty points have been updated.',
      timestamp: '3 days ago',
      unread: false
    }
  ];
  
  // Sample messages for conversations
  const messages: Record<number, Message[]> = {
    1: [
      {
        id: 1,
        sender: 'user',
        content: 'Hi John, I need to confirm my appointment for Monday.',
        timestamp: 'Monday, 10:30 AM',
        read: true
      },
      {
        id: 2,
        sender: 'barber',
        content: 'Hi there! Yes, you are confirmed for Monday at 2:00 PM for a haircut and beard trim.',
        timestamp: 'Monday, 11:15 AM',
        read: true,
        barberName: 'John Barber'
      },
      {
        id: 3,
        sender: 'user',
        content: 'Great, thank you! See you then.',
        timestamp: 'Monday, 11:20 AM',
        read: true
      },
      {
        id: 4,
        sender: 'barber',
        content: 'See you on Monday!',
        timestamp: 'Monday, 11:22 AM',
        read: true,
        barberName: 'John Barber'
      }
    ],
    2: [
      {
        id: 1,
        sender: 'system',
        content: 'You have booked an appointment with Sarah Stylist for Friday, June 23 at 2:30 PM.',
        timestamp: 'Sunday, 3:00 PM',
        read: true
      },
      {
        id: 2,
        sender: 'barber',
        content: 'Looking forward to seeing you on Friday! Would you like to add any additional services?',
        timestamp: 'Monday, 9:15 AM',
        read: false,
        barberName: 'Sarah Stylist'
      },
      {
        id: 3,
        sender: 'system',
        content: 'Your appointment has been confirmed.',
        timestamp: 'Monday, 9:30 AM',
        read: false
      }
    ],
    3: [
      {
        id: 1,
        sender: 'system',
        content: 'Thank you for your recent visit to Cleancuts!',
        timestamp: 'Friday, 4:00 PM',
        read: true
      },
      {
        id: 2,
        sender: 'system',
        content: 'You have earned 50 loyalty points from your last visit.',
        timestamp: 'Friday, 4:05 PM',
        read: true
      },
      {
        id: 3,
        sender: 'system',
        content: 'Your loyalty points have been updated. You now have 250 points in total.',
        timestamp: 'Friday, 4:06 PM',
        read: false
      }
    ]
  };
  
  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeChat) return;
    
    // In a real app, this would send a message to an API
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully.",
    });
    
    // Clear the input
    setNewMessage('');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Messages</h1>
      <p className="text-muted-foreground">Communicate with your barber or our team</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4 md:col-span-1">
          <div className="rounded-lg border">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Conversations</h2>
            </div>
            <div className="divide-y">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  className={`w-full p-4 text-left flex items-start gap-3 hover:bg-secondary/50 transition-colors ${activeChat === conversation.id ? 'bg-secondary/50' : ''}`}
                  onClick={() => setActiveChat(conversation.id)}
                >
                  <div className="relative">
                    {conversation.barberName === 'System' ? (
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Send size={16} />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <User size={16} />
                      </div>
                    )}
                    {conversation.unread && (
                      <span className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium truncate">{conversation.barberName}</h3>
                      <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          {activeChat ? (
            <Card className="h-full flex flex-col">
              <CardHeader className="border-b">
                <CardTitle>
                  {conversations.find(c => c.id === activeChat)?.barberName}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages[activeChat].map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 
                        ${message.sender === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : message.sender === 'system'
                            ? 'bg-muted text-muted-foreground'
                            : 'bg-secondary text-secondary-foreground'
                        }`}
                    >
                      {message.sender === 'barber' && (
                        <p className="text-xs font-medium mb-1">{message.barberName}</p>
                      )}
                      <p>{message.content}</p>
                      <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="border-t p-4">
                <div className="flex w-full gap-2">
                  <Textarea 
                    placeholder="Type your message..." 
                    className="min-h-[60px]"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button onClick={handleSendMessage} className="shrink-0">
                    <Send size={18} />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center py-10">
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
