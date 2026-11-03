/**
 * NombreGen - Main Application Logic
 * Pure client-side name generator
 */

(function() {
    'use strict';

    // State
    let currentCategory = null;
    let currentFilters = {
        sex: 'all',
        style: 'all'
    };
    let generatedNames = [];

    // DOM Elements
    const elements = {
        categoryCards: document.querySelectorAll('[data-category]'),
        generatorTitle: document.getElementById('generator-title'),
        generatorDesc: document.getElementById('generator-desc'),
        filters: document.getElementById('filters'),
        filterSex: document.getElementById('filter-sex'),
        filterStyle: document.getElementById('filter-style'),
        styleOptions: document.getElementById('style-options'),
        results: document.getElementById('results'),
        actions: document.getElementById('actions'),
        btnGenerate: document.getElementById('btn-generate'),
        btnCopyAll: document.getElementById('btn-copy-all'),
        toast: document.getElementById('toast')
    };

    // Initialize
    function init() {
        bindEvents();
        checkUrlHash();
    }

    // Event bindings
    function bindEvents() {
        // Category selection
        elements.categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                selectCategory(category);
            });
        });

        // Filter buttons (using event delegation)
        document.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                const filter = e.target.dataset.filter;
                const value = e.target.dataset.value;
                applyFilter(filter, value, e.target);
            }
            
            if (e.target.matches('.name-copy')) {
                const name = e.target.dataset.name;
                copyToClipboard(name, e.target);
            }
        });

        // Generate more button
        elements.btnGenerate.addEventListener('click', () => {
            if (currentCategory) {
                generateNames();
            }
        });

        // Copy all button
        elements.btnCopyAll.addEventListener('click', copyAllNames);

        // Hash change for SEO routes
        window.addEventListener('hashchange', checkUrlHash);
    }

    // Check URL hash for direct category access
    function checkUrlHash() {
        const hash = window.location.hash.slice(1);
        const categoryMap = {
            'nombres-perros': 'perros',
            'nombres-gatos': 'gatos',
            'nombres-bebes': 'bebes',
            'nombres-fortnite': 'fortnite',
            'nombres-roblox': 'roblox',
            'nombres-freefire': 'freefire',
            'nicks-genericos': 'nicks'
        };
        
        if (categoryMap[hash]) {
            selectCategory(categoryMap[hash]);
        }
    }

    // Select a category
    function selectCategory(category) {
        currentCategory = category;
        currentFilters = { sex: 'all', style: 'all' };
        
        // Update UI
        updateCategoryCards(category);
        updateGeneratorPanel(category);
        generateNames();
        
        // Scroll to generator
        document.getElementById('generador').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Update category card states
    function updateCategoryCards(activeCategory) {
        elements.categoryCards.forEach(card => {
            card.classList.toggle('active', card.dataset.category === activeCategory);
        });
    }

    // Update generator panel based on category
    function updateGeneratorPanel(category) {
        const meta = CATEGORY_META[category];
        
        // Update header
        elements.generatorTitle.textContent = meta.title;
        elements.generatorDesc.textContent = meta.description;
        
        // Show filters
        elements.filters.hidden = false;
        
        // Show/hide sex filter
        elements.filterSex.hidden = !meta.hasSex;
        
        // Reset sex filter buttons
        elements.filterSex.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.value === 'all');
        });
        
        // Setup style filter
        if (meta.hasStyle) {
            elements.filterStyle.hidden = false;
            setupStyleOptions(category);
        } else {
            elements.filterStyle.hidden = true;
        }
        
        // Show actions
        elements.actions.hidden = false;
    }

    // Setup style filter options
    function setupStyleOptions(category) {
        const styles = NAMES_DB[category].styles;
        elements.styleOptions.innerHTML = '';
        
        Object.entries(styles).forEach(([key, label]) => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn' + (key === 'all' ? ' active' : '');
            btn.dataset.filter = 'style';
            btn.dataset.value = key;
            btn.textContent = label;
            elements.styleOptions.appendChild(btn);
        });
    }

    // Apply a filter
    function applyFilter(filterType, value, buttonElement) {
        currentFilters[filterType] = value;
        
        // Update button states
        const container = buttonElement.parentElement;
        container.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.value === value);
        });
        
        // Regenerate names
        generateNames();
    }

    // Generate names based on current category and filters
    function generateNames() {
        if (!currentCategory) return;
        
        const data = NAMES_DB[currentCategory];
        let namePool = [];
        
        // Build name pool based on category type
        if (data.male && data.female) {
            // Pet or baby names with sex filter
            switch (currentFilters.sex) {
                case 'male':
                    namePool = [...data.male];
                    break;
                case 'female':
                    namePool = [...data.female];
                    break;
                case 'neutral':
                    namePool = data.neutral ? [...data.neutral] : [];
                    break;
                default:
                    namePool = [...data.male, ...data.female, ...(data.neutral || [])];
            }
        } else if (data.all) {
            // Gaming nicks
            namePool = [...data.all];
        }
        
        // Remove duplicates from name pool
        namePool = [...new Set(namePool)];
        
        // Shuffle and pick 12 random unique names
        shuffleArray(namePool);
        generatedNames = namePool.slice(0, 12);
        
        // Render results
        renderResults(generatedNames);
    }

    // Fisher-Yates shuffle
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Render results grid
    function renderResults(names) {
        if (names.length === 0) {
            elements.results.innerHTML = `
                <div class="results-placeholder">
                    <span class="placeholder-icon">🤷</span>
                    <p>No hay nombres disponibles con estos filtros</p>
                </div>
            `;
            return;
        }
        
        const grid = document.createElement('div');
        grid.className = 'results-grid';
        
        names.forEach(name => {
            const card = document.createElement('div');
            card.className = 'name-card';
            card.innerHTML = `
                <span class="name-text">${escapeHtml(name)}</span>
                <button class="name-copy" data-name="${escapeHtml(name)}" aria-label="Copiar ${escapeHtml(name)}">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
            `;
            grid.appendChild(card);
        });
        
        elements.results.innerHTML = '';
        elements.results.appendChild(grid);
    }

    // Copy single name to clipboard
    async function copyToClipboard(text, button) {
        try {
            await navigator.clipboard.writeText(text);
            
            // Visual feedback
            button.classList.add('copied');
            setTimeout(() => button.classList.remove('copied'), 1500);
            
            showToast(`"${text}" copiado al portapapeles`);
        } catch (err) {
            // Fallback for older browsers
            fallbackCopy(text);
            showToast(`"${text}" copiado al portapapeles`);
        }
    }

    // Copy all generated names
    async function copyAllNames() {
        if (generatedNames.length === 0) return;
        
        const text = generatedNames.join('\n');
        
        try {
            await navigator.clipboard.writeText(text);
            showToast(`${generatedNames.length} nombres copiados al portapapeles`);
        } catch (err) {
            fallbackCopy(text);
            showToast(`${generatedNames.length} nombres copiados al portapapeles`);
        }
    }

    // Fallback copy method
    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    // Show toast notification
    function showToast(message) {
        elements.toast.textContent = message;
        elements.toast.classList.add('show');
        
        setTimeout(() => {
            elements.toast.classList.remove('show');
        }, 2500);
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
