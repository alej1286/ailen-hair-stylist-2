# CONFIGURACIÓN FINAL MINIMALISTA PARA SITEMAP.XML

## Archivos de Configuración

### amplify.yml
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
    postBuild:
      commands:
        - node scripts/copy-static-files.js
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### public/_headers
```
/sitemap.xml
  Content-Type: application/xml
```

### public/_redirects
```
/* /index.html 200
```

### public/.htaccess
```
<Files "sitemap.xml">
    ForceType application/xml
</Files>
```

## Archivos Eliminados
- web.config (eliminado para evitar conflictos)

## Estado Final
✅ sitemap.xml copiado a /build/sitemap.xml
✅ Configuración minimalista sin conflictos
✅ Headers XML configurados
✅ Build exitoso

## DEPLOY INMEDIATO
Hacer commit y push AHORA con estos cambios minimalistas.