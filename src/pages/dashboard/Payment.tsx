
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
import { Label } from '@/components/ui/label';
import { CreditCard, Trash2, Plus, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PaymentMethod {
  id: string;
  type: 'credit' | 'debit';
  lastFour: string;
  expiryDate: string;
  isDefault: boolean;
  cardBrand: 'visa' | 'mastercard' | 'amex';
}

const Payment = () => {
  const { toast } = useToast();
  const [showAddCard, setShowAddCard] = useState(false);
  
  // Sample payment methods
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'credit',
      lastFour: '4242',
      expiryDate: '12/25',
      isDefault: true,
      cardBrand: 'visa'
    },
    {
      id: '2',
      type: 'debit',
      lastFour: '5678',
      expiryDate: '09/24',
      isDefault: false,
      cardBrand: 'mastercard'
    }
  ]);
  
  const handleDeleteCard = (id: string) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    toast({
      title: "Card Removed",
      description: "Payment method has been removed from your account.",
    });
  };
  
  const handleSetDefault = (id: string) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    })));
    toast({
      title: "Default Payment Method Updated",
      description: "Your default payment method has been updated.",
    });
  };
  
  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send card details to payment processor
    const newCard: PaymentMethod = {
      id: Date.now().toString(),
      type: 'credit',
      lastFour: '1234',
      expiryDate: '11/26',
      isDefault: false,
      cardBrand: 'visa'
    };
    
    setPaymentMethods([...paymentMethods, newCard]);
    setShowAddCard(false);
    
    toast({
      title: "Card Added",
      description: "Your new payment method has been added successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Payment Methods</h1>
      <p className="text-muted-foreground">Manage your saved payment methods</p>
      
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <Card key={method.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 text-primary p-2 rounded">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      {method.cardBrand === 'visa' ? 'Visa' : 
                       method.cardBrand === 'mastercard' ? 'Mastercard' : 
                       'American Express'}
                      {method.isDefault && (
                        <span className="ml-2 text-xs bg-secondary py-0.5 px-2 rounded-full">
                          Default
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {method.type === 'credit' ? 'Credit Card' : 'Debit Card'} •••• {method.lastFour}
                    </CardDescription>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Expires {method.expiryDate}
                </div>
              </div>
            </CardHeader>
            <CardFooter className="flex justify-end gap-2">
              {!method.isDefault && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleSetDefault(method.id)}
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Set as Default
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleDeleteCard(method.id)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {showAddCard ? (
        <Card>
          <CardHeader>
            <CardTitle>Add Payment Method</CardTitle>
            <CardDescription>Enter your card information</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddCard} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardName">Name on Card</Label>
                <Input id="cardName" placeholder="John Doe" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" required />
                </div>
              </div>
              
              <div className="pt-2 flex justify-end gap-2">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowAddCard(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Add Card</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Button 
          onClick={() => setShowAddCard(true)}
          className="mt-2"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Payment Method
        </Button>
      )}
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Your recent payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground">
              <div>Date</div>
              <div>Service</div>
              <div>Card</div>
              <div className="text-right">Amount</div>
            </div>
            
            <div className="divide-y">
              <div className="grid grid-cols-4 py-3 text-sm">
                <div>May 15, 2023</div>
                <div>Haircut & Beard Trim</div>
                <div>Visa •••• 4242</div>
                <div className="text-right">$45.00</div>
              </div>
              
              <div className="grid grid-cols-4 py-3 text-sm">
                <div>Apr 2, 2023</div>
                <div>Premium Haircut</div>
                <div>Mastercard •••• 5678</div>
                <div className="text-right">$55.00</div>
              </div>
              
              <div className="grid grid-cols-4 py-3 text-sm">
                <div>Feb 18, 2023</div>
                <div>Beard Trim</div>
                <div>Visa •••• 4242</div>
                <div className="text-right">$25.00</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
