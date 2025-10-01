# Solución para Sitemap.xml en Amplify

## Problema
El sitemap.xml se estaba sirviendo como HTML en lugar de XML puro, causando errores en Google Search Console.

## Solución Implementada

### 1. Configuración de Amplify (amplify.yml)
- Eliminadas redirecciones conflictivas
- Configurados headers específicos para sitemap.xml con Content-Type: application/xml
- Agregadas redirecciones explícitas para archivos estáticos

### 2. Archivos de Configuración
- **_headers**: Especifica Content-Type correcto para sitemap.xml
- **_redirects**: Reglas específicas para archivos estáticos
- **.htaccess**: Configuración para servidores Apache
- **web.config**: Configuración para IIS/Windows

### 3. Script de Build
- Simplificado para copiar sitemap.xml directamente al directorio build
- Eliminada la copia a /api/sitemap.xml para evitar confusiones

### 4. Archivos Clave
```
/sitemap.xml - Archivo XML puro servido directamente
/robots.txt - Referencia correcta al sitemap
```

## Verificación
1. Build local exitoso ✅
2. Sitemap.xml copiado correctamente ✅
3. Headers configurados ✅
4. Redirecciones configuradas ✅

## Próximos Pasos
1. Hacer commit de los cambios
2. Hacer push a la rama principal
3. Verificar el deploy en Amplify
4. Probar https://ailenhairstylist.com/sitemap.xml
5. Reenviar sitemap a Google Search Console

## Archivos Modificados
- amplify.yml
- public/_headers
- public/_redirects
- public/.htaccess
- scripts/copy-static-files.js
- public/web.config (nuevo)