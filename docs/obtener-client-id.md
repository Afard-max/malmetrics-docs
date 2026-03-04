---
id: obtener-client-id
title: Obtener Client ID
sidebar_position: 1
---

# Generación de Credenciales de MyAnimeList

Para que **MALmetrics** pueda calcular y graficar tu historial, requiere acceso de lectura a los datos de tu perfil. Por arquitectura de la API oficial de MyAnimeList, esto se logra mediante una clave de acceso denominada `Client ID`.

Sigue esta secuencia determinista para generar y extraer tu clave:

## 1. Autenticación Inicial
1. Accede a [MyAnimeList.net](https://myanimelist.net/) e inicia sesión en la cuenta cuyas métricas deseas analizar.

## 2. Registro del Cliente API
1. Dirígete directamente a la consola de desarrolladores: [https://myanimelist.net/apiconfig/create](https://myanimelist.net/apiconfig/create).
2. Se presentará un formulario de registro. Rellénalo con los siguientes parámetros estándar (puedes modificarlos, no alteran el logueo):
   - **App Type**: `Web`
   - **Name**: `MALmetrics Dashboard` (o cualquier identificador que prefieras).
   - **Description**: `Dashboard analítico para visualización gráfica de métricas.`
   - **Homepage URL**: `https://github.com`
   - **App Redirect URL**: `https://github.com`
   - **Purpose of Use**: `Personal`
3. Acepta los términos y haz clic en el botón **Submit**.

## 3. Extracción de la Matriz Alfanumérica
1. Tras enviar el formulario, el sistema te redirigirá a tu panel de aplicaciones registradas.
2. Haz clic en el botón "Edit" o en el nombre de la aplicación que acabas de crear.
3. En la parte superior de la nueva pantalla, localizarás un bloque etiquetado como **Client ID** seguido de una larga cadena alfanumérica.
4. **Copia esa cadena completa**. 

## 4. Acceso y Navegación
Con tus credenciales listas, el proceso de integración es directo:

1. Regresa a la pantalla de logueo de **malmetrics**.
2. Ingresa tu nombre de usuario público y pega el **Client ID** que acabas de generar en los campos correspondientes.
3. Haz clic en el botón **Acceder al Dashboard**.

**¿Qué ocurrirá a continuación?**
* **Renderizado Inicial:** La aplicación consultará los nodos de tu perfil y construirá los gráficos de forma estrictamente local en tu navegador. Aterrizarás en la vista General.
* **Módulos de Análisis:** Utiliza la barra lateral izquierda para transitar entre los diferentes ecosistemas de datos (Temporadas, Puntuaciones, Comunidad y el explorador de Franquicias).
* **Sincronización:** Si en el futuro añades nuevos animes o modificas tus calificaciones en MyAnimeList, simplemente presiona el botón **Actualizar Datos** ubicado en la parte inferior de la barra lateral para purgar la caché y reflejar tus nuevas estadísticas.