import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="Documentación oficial de malmetrics">
      <main style={{ padding: '4rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 60px)' }}>
        
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem', textAlign: 'center' }}>
          malmetrics
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: '#94A3B8', textAlign: 'center', maxWidth: '600px', marginBottom: '3rem' }}>
          Dashboard analítico de renderizado local para la visualización estadística de perfiles de MyAnimeList.
        </p>

        <div style={{ backgroundColor: '#12122A', border: '1px solid #1E1E2E', borderRadius: '16px', padding: '2rem', maxWidth: '800px', width: '100%', marginBottom: '3rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>
          <h2 style={{ color: '#06B6D4', borderBottom: '1px solid #1E1E2E', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            ¿Por qué necesito un Client ID?
          </h2>
          <p style={{ color: '#F1F5F9', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            MALmetrics es una aplicación estática (Client-Side Rendering). Para calcular tus métricas y generar los gráficos, necesita consultar tu historial directamente a los servidores oficiales de MyAnimeList.
          </p>
          <p style={{ color: '#F1F5F9', lineHeight: '1.7' }}>
            La arquitectura de la API de MyAnimeList exige una llave pública (Client ID) para autorizar estas lecturas. Al utilizar tu propia llave, garantizas que:
          </p>
          <ul style={{ color: '#94A3B8', marginTop: '1rem', lineHeight: '1.7' }}>
            <li>Tus datos se procesen únicamente en la memoria local de tu navegador.</li>
            <li>No exista dependencia de servidores intermediarios.</li>
            <li>Se respeten los límites de peticiones (Rate Limits) de la API oficial.</li>
          </ul>
        </div>

        <Link
          className="button button--lg"
          to="/docs/obtener-client-id"
          style={{ backgroundColor: '#06B6D4', color: '#0D0D1A', fontWeight: 'bold', border: 'none', borderRadius: '12px', padding: '1rem 2rem', transition: 'transform 0.2s' }}>
          Leer la guía de configuración (3 Pasos)
        </Link>
      </main>
    </Layout>
  );
}