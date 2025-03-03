
import React from 'react';
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
  BarChart, 
  LineChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  Calendar, 
  TrendingUp
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock chart component - in a real app you'd use recharts or similar
const SimpleChart = ({ height = 60, type = "line" }) => (
  <div className={`w-full h-${height} bg-muted/30 rounded-md flex items-center justify-center`}>
    <p className="text-muted-foreground">
      {type === "line" ? "Line chart" : "Bar chart"} would render here
    </p>
  </div>
);

const Analytics = () => {
  const { toast } = useToast();

  const handleExportReport = () => {
    toast({
      title: "Report Generated",
      description: "The analytics report has been exported to CSV.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Insights and statistics about your barbershop</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportReport}>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Select Date Range
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,563</div>
            <div className="flex items-center text-xs mt-1">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">12%</span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
            <SimpleChart />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">487</div>
            <div className="flex items-center text-xs mt-1">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">5%</span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
            <SimpleChart />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Ticket</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$50.42</div>
            <div className="flex items-center text-xs mt-1">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">3%</span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
            <SimpleChart />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Customer Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <div className="flex items-center text-xs mt-1">
              <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
              <span className="text-red-500 font-medium">2%</span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
            <SimpleChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleChart height={240} type="bar" />
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">
              <TrendingUp className="inline h-4 w-4 mr-1 text-green-500" />
              Revenue is growing consistently month over month
            </div>
            <Button variant="outline" onClick={handleExportReport}>
              Download Chart
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Services</CardTitle>
            <CardDescription>Most popular services this month</CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleChart height={180} />
            <div className="space-y-2 mt-4">
              <div className="flex items-center justify-between">
                <span>Premium Haircut</span>
                <span>35%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "35%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Beard Trim</span>
                <span>25%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "25%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Hair Coloring</span>
                <span>20%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "20%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Full Package</span>
                <span>15%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Customer Demographics</CardTitle>
            <CardDescription>Age distribution of your clientele</CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleChart height={180} type="bar" />
            <div className="space-y-2 mt-4">
              <div className="flex items-center justify-between">
                <span>18-24</span>
                <span>15%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "15%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span>25-34</span>
                <span>40%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "40%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span>35-44</span>
                <span>30%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "30%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span>45+</span>
                <span>15%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
