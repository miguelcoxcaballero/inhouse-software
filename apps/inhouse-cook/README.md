# Inhouse Cook

[Descargar APK Android](dist/Inhouse-Cook.apk?raw=true) · Versión 1.0.0, compilación debug instalable.

App Android de recetas y compra con una interfaz editorial inspirada en Inhouse. La grabación de referencia se usa como guía funcional: elegir tienda, ver recetas y reunir ingredientes en una cesta.

## Catálogo y precios

El catálogo de demostración se genera a partir de nombres, imágenes y precios del catálogo online público de Mercadona (`https://tienda.mercadona.es/api/categories/`). En los productos vendidos por peso o unidades se guarda el precio de paquete que devuelve el catálogo. Los precios online pueden cambiar por tienda, código postal, stock y fecha. Esta versión no consulta una tienda elegida en tiempo real; el código postal ayuda a guardar la zona del usuario, pero no cambia los importes. No representa precios de Carrefour, Lidl o DIA.

## Desarrollo

- Android nativo mínimo: WebView local, sin servidor propio.
- Para abrir en Android Studio: importar la carpeta del proyecto y compilar `app`.
- Para generar APK: `./gradlew assembleDebug`.
- El archivo instalable generado es `app/build/outputs/apk/debug/app-debug.apk`.

## Licencias y atribución

Las marcas de supermercados y los nombres e imágenes de los productos pertenecen a sus titulares. Fotografías editoriales servidas desde Unsplash. Inhouse Cook es un prototipo independiente, no afiliado con Inhouse ni con supermercados.
