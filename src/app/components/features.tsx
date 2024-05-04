import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function Features() {
  return (
    <div className="grid grid-cols-3 w-full gap-4 mt-6">
      <div className="col-span-3 md:col-span-1">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Open Source</CardTitle>
          </CardHeader>
          <CardContent>
            Client Master is open source, it avilable to every one.
          </CardContent>
        </Card>
      </div>
      <div className="col-span-3 md:col-span-1">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Centralized Communication</CardTitle>
          </CardHeader>
          <CardContent>
            Keep all client interactions in one place — no more lost emails or
            messages.
          </CardContent>
        </Card>
      </div>
      <div className="col-span-3 mb-20 md:col-span-1 md:mb-0">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Effortless Scheduling</CardTitle>
          </CardHeader>
          <CardContent>
            Automate appointment bookings and reminders to save time.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Features;
