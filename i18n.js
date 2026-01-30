// === 多語言翻譯系統 ===
const i18n = {
    currentLang: 'zh-TW', // 預設為繁體中文
    
    // 翻譯數據
    translations: {
        'zh-TW': {
            // UI 標籤
            'title': '元素週期表',
            'hint': '💡 橫屏查看效果更佳',
            'standard': '標準',
            'radius': '半徑',
            'electronegativity': '電負性',
            'ionizationEnergy': '電離能',
            'meltingPoint': '熔點',
            'boilingPoint': '沸點',
            'search': '查找元素...',
            'rotate': '拖曳旋轉視角',
            'electronConfig': '電子排布',
            'perLayer': '每層',
            'commonValences': '常見化合價',
            'physicalProperties': '物理性質',
            'atomicNumber': '原子序數',
            'atomicMass': '相對原子質量',
            'atomicRadius': '原子半徑 (pm)',
            'electronegativity_label': '電負性',
            'ionizationEnergy_label': '電離能 (kJ/mol)',
            'meltingPoint_label': '熔點 (K)',
            'boilingPoint_label': '沸點 (K)',
            'isotopes': '同位素 (● 穩定)',
            'language': '語言',
            
            // 元素分類
            'alkaliMetal': '鹼金屬',
            'alkalineEarthMetal': '鹼土金屬',
            'transitionMetal': '過渡金屬',
            'postTransitionMetal': '後過渡金屬',
            'semimetal': '類金屬',
            'nonmetal': '非金屬',
            'halogen': '鹵素',
            'nobleGas': '稀有氣體',
            'lanthanide': '鑭系',
            'actinide': '錒系'
        },
        'zh-CN': {
            // UI 标签
            'title': '元素周期表',
            'hint': '💡 横屏查看效果更佳',
            'standard': '标准',
            'radius': '半径',
            'electronegativity': '电负性',
            'ionizationEnergy': '电离能',
            'meltingPoint': '熔点',
            'boilingPoint': '沸点',
            'search': '查找元素...',
            'rotate': '拖拽旋转视角',
            'electronConfig': '电子排布',
            'perLayer': '每层',
            'commonValences': '常见化合价',
            'physicalProperties': '物理性质',
            'atomicNumber': '原子序数',
            'atomicMass': '相对原子质量',
            'atomicRadius': '原子半径 (pm)',
            'electronegativity_label': '电负性',
            'ionizationEnergy_label': '电离能 (kJ/mol)',
            'meltingPoint_label': '熔点 (K)',
            'boilingPoint_label': '沸点 (K)',
            'isotopes': '同位素 (● 稳定)',
            'language': '语言',
            
            // 元素分类
            'alkaliMetal': '碱金属',
            'alkalineEarthMetal': '碱土金属',
            'transitionMetal': '过渡金属',
            'postTransitionMetal': '后过渡金属',
            'semimetal': '类金属',
            'nonmetal': '非金属',
            'halogen': '卤素',
            'nobleGas': '稀有气体',
            'lanthanide': '镧系',
            'actinide': '锕系'
        }
    },
    
    // 元素分類繁體中文翻譯
    categoriesTranslations: {
        'zh-TW': ['鹼金屬', '鹼土金屬', '過渡金屬', '後過渡金屬', '類金屬', '非金屬', '鹵素', '稀有氣體', '鑭系', '錒系'],
        'zh-CN': ['碱金属', '碱土金属', '过渡金属', '后过渡金属', '类金属', '非金属', '卤素', '稀有气体', '镧系', '锕系']
    },
    
    // 簡繁對應表（用於元素名稱）
    elementNameMap: {
        'zh-TW': {
            '氢': '氫', '氖': '氖', '钙': '鈣', '铁': '鐵', '锂': '鋰', '铍': '鈹', '硼': '硼', 
            '碳': '碳', '氮': '氮', '氧': '氧', '氟': '氟', '钠': '鈉', '镁': '鎂', '铝': '鋁',
            '硅': '矽', '磷': '磷', '硫': '硫', '氯': '氯', '氩': '氬', '钾': '鉀', '铬': '鉻',
            '锰': '錳', '钴': '鈷', '镍': '鎳', '铜': '銅', '锌': '鋅', '镓': '鎵', '锗': '鍺',
            '砷': '砷', '硒': '硒', '溴': '溴', '氪': '氪', '铷': '銣', '锶': '鍶', '钇': '釔',
            '锆': '鋯', '铌': '鈮', '钼': '鉬', '锝': '鍀', '钌': '釕', '铑': '銠', '钯': '鈀',
            '银': '銀', '镉': '鎘', '铟': '銦', '锡': '錫', '锑': '銻', '碲': '碲', '碘': '碘',
            '氙': '氙', '铯': '銫', '钡': '鋇', '镧': '鑭', '铈': '鈰', '镨': '鐠', '钕': '釹',
            '钷': '遨', '钐': '釤', '铕': '銪', '钆': '釓', '铽': '鋱', '镝': '鏑', '钬': '鈥',
            '镥': '鑥', '铪': '鉿', '钽': '鉭', '钨': '鎢', '铼': '錸', '锇': '鋨', '铱': '銥',
            '铂': '鉑', '金': '金', '汞': '汞', '铊': '鉈', '铅': '鉛', '铋': '鉍', '钋': '釙',
            '氡': '氡', '钫': '鈁', '镭': '鐳', '锕': '錒', '铀': '鈾', '镎': '錼', '钚': '鈽',
            '镅': '鎇', '锞': '鋦', '锎': '鋨', '锿': '鈨', '镀': '鐨', '钅': '鎲', '钆': '鍖'
        }
    },
    
    // 獲取翻譯
    t: function(key) {
        return this.translations[this.currentLang]?.[key] || this.translations['zh-CN']?.[key] || key;
    },
    
    // 獲取分類翻譯
    getCategoryName: function(index) {
        // 如果 index 是數字，直接從 categories 物件取得
        if (typeof index === 'number' && typeof categories !== 'undefined') {
            if (this.currentLang === 'zh-TW' && categories[index]?.nameZhTW) {
                return categories[index].nameZhTW;
            } else if (categories[index]?.name) {
                return categories[index].name;
            }
        }
        // 備用方案（從翻譯數據中取得）
        return this.categoriesTranslations[this.currentLang]?.[index] || this.categoriesTranslations['zh-CN']?.[index] || '';
    },
    
    // 設置語言
    setLanguage: function(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('language', lang); // 保存語言設置
            return true;
        }
        return false;
    },
    
    // 獲取當前語言
    getLanguage: function() {
        return this.currentLang;
    },
    
    // 獲取元素名稱（支持多語言）
    getElementName: function(elementData) {
        if (this.currentLang === 'zh-TW' && elementData.nameZhTW) {
            return elementData.nameZhTW;
        }
        return elementData.name;
    },
    
    // 初始化（從 localStorage 讀取保存的語言設置）
    init: function() {
        const saved = localStorage.getItem('language');
        if (saved && this.translations[saved]) {
            this.currentLang = saved;
        }
    }
};

// 初始化多語言系統
i18n.init();
