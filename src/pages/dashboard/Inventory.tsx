
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
import { 
  ShoppingBag, 
  PlusCircle, 
  Edit,
  AlertTriangle,
  Check,
  XCircle,
  Tag,
  Package,
  Scissors
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";

const Inventory = () => {
  const { toast } = useToast();
  const [view, setView] = useState<'products' | 'supplies'>('products');

  const handleAddProduct = () => {
    toast({
      title: "Add Product",
      description: "Opening form to add a new product to inventory.",
    });
  };

  const handleAddSupply = () => {
    toast({
      title: "Add Supply",
      description: "Opening form to add a new supply to inventory.",
    });
  };

  const handleRestock = (product: string) => {
    toast({
      title: "Restock Initiated",
      description: `Restock order placed for ${product}.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Inventory Management</h1>
          <p className="text-muted-foreground">Track and manage your products and supplies</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={view === 'products' ? 'default' : 'outline'}
            onClick={() => setView('products')}
          >
            <Tag className="mr-2 h-4 w-4" />
            Products
          </Button>
          <Button 
            variant={view === 'supplies' ? 'default' : 'outline'}
            onClick={() => setView('supplies')}
          >
            <Package className="mr-2 h-4 w-4" />
            Supplies
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500 font-medium">↑ 4</span> since last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-red-500 font-medium">↑ 2</span> since last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,842</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500 font-medium">↑ $320</span> since last month
            </p>
          </CardContent>
        </Card>
      </div>

      {view === 'products' ? (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Retail Products</CardTitle>
              <CardDescription>Manage your retail product inventory</CardDescription>
            </div>
            <Button onClick={handleAddProduct}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>In Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Styling Gel</TableCell>
                  <TableCell>Hair Products</TableCell>
                  <TableCell>$15.99</TableCell>
                  <TableCell>42</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      <span>In Stock</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleRestock("Styling Gel")}>
                        Restock
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Beard Oil</TableCell>
                  <TableCell>Beard Care</TableCell>
                  <TableCell>$22.99</TableCell>
                  <TableCell>28</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      <span>In Stock</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleRestock("Beard Oil")}>
                        Restock
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Pomade</TableCell>
                  <TableCell>Hair Products</TableCell>
                  <TableCell>$18.99</TableCell>
                  <TableCell>15</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      <span>In Stock</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleRestock("Pomade")}>
                        Restock
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Hair Wax</TableCell>
                  <TableCell>Hair Products</TableCell>
                  <TableCell>$20.99</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                      <span className="text-amber-500">Low Stock</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" onClick={() => handleRestock("Hair Wax")}>
                        Restock
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Beard Balm</TableCell>
                  <TableCell>Beard Care</TableCell>
                  <TableCell>$19.99</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <XCircle className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-500">Out of Stock</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" onClick={() => handleRestock("Beard Balm")}>
                        Restock
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Products
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Barber Supplies</CardTitle>
              <CardDescription>Manage your barber station supplies</CardDescription>
            </div>
            <Button onClick={handleAddSupply}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Supply
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Supply</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Last Ordered</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Clipper Blades</TableCell>
                  <TableCell>Equipment</TableCell>
                  <TableCell>24</TableCell>
                  <TableCell>14 days ago</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      <span>In Stock</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleRestock("Clipper Blades")}>
                        Restock
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Barber Capes</TableCell>
                  <TableCell>Accessories</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>30 days ago</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      <span>In Stock</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleRestock("Barber Capes")}>
                        Restock
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Neck Strips</TableCell>
                  <TableCell>Disposable</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>7 days ago</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                      <span className="text-amber-500">Low Stock</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" onClick={() => handleRestock("Neck Strips")}>
                        Restock
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Scissors</TableCell>
                  <TableCell>Equipment</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>60 days ago</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      <span>In Stock</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleRestock("Scissors")}>
                        Restock
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Sanitizer</TableCell>
                  <TableCell>Cleaning</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>10 days ago</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                      <span className="text-amber-500">Low Stock</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" onClick={() => handleRestock("Sanitizer")}>
                        Restock
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Supplies
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Inventory;
