# 🎲 NombreGen - Generador de Nombres

Generador de nombres estático para mascotas, bebés poco comunes y nicks de gaming. 100% client-side, sin necesidad de servidor ni base de datos.

**[Ver demo en vivo →](https://generador-nombres.github.io/)**

## ✨ Características

### Categorías disponibles
- 🐕 **Nombres para perros** - Cientos de opciones: clásicos, españoles, mitológicos, naturaleza, comida, modernos
- 🐱 **Nombres para gatos** - Elegantes, misteriosos, egipcios, japoneses, literarios
- 👶 **Nombres para bebés** - Poco comunes, originales, internacionales, con significado especial
- 🎮 **Nicks Fortnite** - Estilos agresivos, misteriosos, tácticos, en español, pro
- 🧱 **Nicks Roblox** - Clásicos Roblox, divertidos, aventura, cool
- 🔥 **Nicks Free Fire** - Con símbolos especiales, estilo pro, agresivos
- 🎯 **Nicks genéricos** - Funcionan en cualquier plataforma: Steam, Discord, Twitch, etc.

### Funcionalidades
- **Filtros por sexo** (macho/hembra/neutro) para mascotas y bebés
- **Filtros por estilo** según la categoría
- **Regenerar nombres** con un click
- **Copiar al portapapeles** individual o todos a la vez
- **100% privado** - Todo funciona en el navegador, no se envían datos
- **SEO optimizado** - Landing pages para cada categoría
- **Mobile-first** - Diseño responsive y profesional
- **Espacios para anuncios** - Slots data-ad preparados para monetización
- **Área de afiliados** - Placeholder para productos de mascotas

## 🚀 Desplegar en GitHub Pages

### Opción 1: Despliegue automático (recomendado)

1. **Fork o clona este repositorio**
   ```bash
   git clone https://github.com/tu-usuario/generador-nombres.git
   cd generador-nombres
   ```

2. **Sube a tu repositorio de GitHub**
   ```bash
   git remote set-url origin https://github.com/tu-usuario/generador-nombres.git
   git push -u origin main
   ```

3. **Activa GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Click en **Settings** → **Pages** (en el menú lateral)
   - En "Source", selecciona **Deploy from a branch**
   - En "Branch", selecciona **main** y carpeta **/ (root)**
   - Click en **Save**

4. **¡Listo!** Tu sitio estará disponible en:
   ```
   https://tu-usuario.github.io/generador-nombres/
   ```

### Opción 2: Con GitHub Actions (para builds más complejas)

El sitio es estático puro, pero si quieres usar GitHub Actions:

1. Ve a **Settings** → **Pages**
2. En "Source", selecciona **GitHub Actions**
3. Usa el workflow predeterminado de "Static HTML"

## 📁 Estructura del proyecto

```
generador-nombres/
├── index.html          # Página principal con SEO
├── css/
│   └── styles.css      # Estilos mobile-first con CSS variables
├── js/
│   ├── names.js        # Base de datos de nombres (700+ nombres)
│   └── app.js          # Lógica del generador
└── README.md           # Este archivo
```

## 🎨 Personalización

### Añadir más nombres

Edita `js/names.js` y añade nombres a las categorías correspondientes:

```javascript
NAMES_DB.perros.male.push('NuevoNombre');
NAMES_DB.gatos.female.push('OtroNombre');
```

### Cambiar colores

Edita las CSS variables en `css/styles.css`:

```css
:root {
    --color-primary: #6366f1;      /* Color principal */
    --color-accent: #f472b6;       /* Color de acento */
    /* ... más variables */
}
```

### Añadir categorías nuevas

1. Añade la data en `js/names.js`:
   ```javascript
   NAMES_DB.nuevaCategoria = {
       male: [...],
       female: [...],
       neutral: [...],
       styles: { all: 'Todos', ... }
   };
   
   CATEGORY_META.nuevaCategoria = {
       title: 'Nueva Categoría',
       description: 'Descripción',
       icon: '🆕',
       hasSex: true,
       hasStyle: true
   };
   ```

2. Añade el botón en `index.html`:
   ```html
   <button class="category-card" data-category="nuevaCategoria">
       <span class="category-icon">🆕</span>
       <span class="category-name">Nueva</span>
   </button>
   ```

## 💰 Monetización

### Slots de anuncios

Los slots de anuncios están preparados con `data-ad`:

```html
<div class="ad-slot" data-ad="banner-mid">
    <!-- Tu código de anuncio aquí -->
</div>
```

### Área de afiliados

La sección de productos afiliados está lista para ser poblada:

```html
<section class="affiliate-section" id="productos">
    <!-- Añade tus productos de afiliados aquí -->
</section>
```

## 🔒 Privacidad

Este generador:
- ✅ Funciona 100% en el navegador del usuario
- ✅ No usa cookies de seguimiento
- ✅ No envía datos a ningún servidor
- ✅ No almacena información personal
- ✅ No requiere conexión después de cargar

## 🛠️ Desarrollo local

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/generador-nombres.git

# Abre en el navegador (no necesita servidor)
open index.html

# O usa un servidor local
python -m http.server 8000
# Luego visita http://localhost:8000
```

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ iOS Safari, Chrome Mobile
- ✅ Android Chrome, Firefox Mobile
- ✅ Funciona sin JavaScript para contenido SEO estático

## 📄 Licencia

MIT License - Úsalo como quieras, modifícalo, compártelo.

---

Hecho con ❤️ para hispanohablantes | [Reportar un problema](https://github.com/tu-usuario/generador-nombres/issues)
