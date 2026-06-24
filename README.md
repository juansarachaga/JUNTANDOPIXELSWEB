# Juan Pablo Saráchaga - Página de servicios

Landing page en Next.js para promocionar servicios de desarrollo web, eCommerce, software a medida, optimización y mantenimiento.

## Comandos

```bash
npm install
npm run dev
```

Luego abrir `http://localhost:3000`.

## Google Analytics

Crear un archivo `.env.local` con el ID de medicion de Google Analytics:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

En produccion, configurar la misma variable de entorno en el hosting.

## Formulario de contacto

El formulario envia consultas desde `/api/contact`. Para confirmar envios
directos necesita un proveedor de email configurado. Sin estas variables, el
sitio abre un email armado como respaldo para evitar falsos positivos.

```bash
RESEND_API_KEY=...
CONTACT_TO_EMAIL=juntandopixels@gmail.com
CONTACT_FROM_EMAIL=Juntando Pixels <mail@tu-dominio.com>
```

`CONTACT_FROM_EMAIL` debe pertenecer a un dominio verificado en Resend.
