import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Facility = () => {
  const facilities = [
    {
      title: "Crushing Operations",
      description: "High Capacity crushing line for efficient and controlled size reduction of carbon and graphite materials"
    },
    {
      title: "Sieving Operations",
      description: "Rugged sieving system equipped with industry proven multi deck vibro- screens for high efficiency separation"
    },
    {
      title: "Material Handling",
      description: "Automated conveyor system with 500 Mt storage facilities for efficient flow of material."
    },
    {
      title: "Quality Management",
      description: "In house laboratory for on-site analysis of chemical and physical properties of various materials."
    }
  ];

  return (
    <section id="facility" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Facility
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in SES Bhopal, Madhya Pradesh, our modern processing facility combines 
            advanced technology with experienced craftsmanship to deliver superior products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/299029a1-69dd-475a-817f-23a4f04c855c.png"
              alt="SES Processing Facility with green conveyor systems and material processing equipment"
              className="rounded-lg shadow-industrial w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Advanced Processing Capabilities
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Our facility spans across a modern industrial complex designed for efficient 
                and environmentally responsible processing of carbon materials.
              </p>
              <p>
                With strategically located crushing and sieving equipment, we ensure optimal 
                material flow and minimal handling, resulting in superior product quality 
                and cost-effective operations.
              </p>
              <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-primary mb-2">Location Advantages:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Central India location for efficient logistics</li>
                  <li>• Excellent rail and road connectivity</li>
                  <li>• Access to skilled workforce</li>
                  <li>• Reliable power and water supply</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              className="hover:shadow-card-industrial transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">{facility.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {facility.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;