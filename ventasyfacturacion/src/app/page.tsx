import React, {ReactNode} from "react";
import { ShoppingCart, BarChart2, Globe } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">AJ StockManager</h1>
          <p className="text-xl">
            Potencia tu negocio con nuestra solución todo en uno
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Simplifica tu gestión, maximiza tus ganancias
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            AJ StockManager es la herramienta definitiva para comercios que
            buscan crecer. Controla tu inventario, impulsa tus ventas y expande
            tu negocio en línea, todo desde una única plataforma.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<ShoppingCart className="w-12 h-12 text-blue-500" />}
            title="Gestión de Stock Inteligente"
            description="Optimiza tu inventario con análisis predictivos y alertas automáticas. Nunca más te quedarás sin stock o con exceso de productos."
          />
          <FeatureCard
            icon={<BarChart2 className="w-12 h-12 text-blue-500" />}
            title="Ventas Potenciadas"
            description="Acelera tu proceso de ventas con un sistema POS intuitivo. Genera facturas, presupuestos y reportes con un solo clic."
          />
          <FeatureCard
            icon={<Globe className="w-12 h-12 text-blue-500" />}
            title="E-commerce Integrado"
            description="Lleva tu negocio al mundo digital sin complicaciones. Sincroniza tu inventario y vende en línea 24/7."
          />
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            ¿Por qué elegir AJ StockManager?
          </h2>
          <ul className="text-lg space-y-4">
            <li>
              ✅ Interfaz intuitiva: Sin curva de aprendizaje, empieza a usar
              desde el primer día
            </li>
            <li>✅ Soporte 24/7: Estamos aquí para ayudarte en cada paso</li>
            <li>
              ✅ Actualizaciones constantes: Mejoras continuas sin costo
              adicional
            </li>
            <li>
              ✅ Seguridad garantizada: Tus datos están protegidos con
              encriptación de nivel bancario
            </li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <Link href="/register">
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300">
            Comienza tu prueba gratuita
          </button>
          </Link>
          <p className="mt-4 text-gray-600">
            Sin compromisos, sin tarjeta de crédito
          </p>
        </section>
      </main>

      
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
