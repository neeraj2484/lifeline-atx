"use client";

type Alert = {
  id: string;
  title: string;
  description: string;
  severity: string;
};

export default function AlertsList({ alerts }: { alerts: Alert[] }) {
  return (
    <section className="p-4 sm:p-6">
      <h2 className="text-lg font-bold mb-4">Active Alerts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-white rounded-xl shadow p-4 border"
          >
            <h3 className="text-base font-semibold text-red-600">{alert.severity}</h3>
            <p className="font-medium">{alert.title}</p>
            <p className="text-sm text-gray-600">{alert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
