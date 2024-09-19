"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    modules: {
      inventory: false,
      billing: false,
      ecommerce: false,
    },
    details: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevState) => ({
        ...prevState,
        modules: {
          ...prevState.modules,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos por correo electrónico
    console.log("Datos de contacto:", formData);
    // Simular envío exitoso
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      router.push("/"); // Redirigir a la página principal después de 3 segundos
    }, 3000);
  };

  return (
    <div>
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">AJ StockManager</h1>
          <p className="text-xl">
            Potencia tu negocio con nuestra solución todo en uno
          </p>
        </div>
      </header>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Contáctanos para obtener tu prueba gratuita
            </h2>
          </div>
          {showThankYou ? (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">¡Gracias! </strong>
              <span className="block sm:inline">
                Pronto nos comunicaremos con usted.
              </span>
            </div>
          ) : (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Nombre del comercio"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">
                  Módulos de interés:
                </p>
                <div className="flex items-center">
                  <input
                    id="inventory"
                    name="inventory"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={formData.modules.inventory}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="inventory"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Inventario y stock
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="billing"
                    name="billing"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={formData.modules.billing}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="billing"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Facturación y ventas
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="ecommerce"
                    name="ecommerce"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={formData.modules.ecommerce}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="ecommerce"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    E-commerce
                  </label>
                </div>
              </div>

              <div>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Detalles adicionales"
                  value={formData.details}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Enviar solicitud
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
