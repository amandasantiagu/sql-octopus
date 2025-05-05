(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_1e7fda._.js", {

"[project]/components/ButtonWithLoading/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ButtonWithLoading": (()=>ButtonWithLoading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
;
var _s = __turbopack_refresh__.signature();
;
;
const ButtonWithLoading = ({ children, isLoading = false, disabled = false, type = 'submit', variant = 'contained', onClick, size, sx, className = 'hover:bg-neutral-100 hover:text-primary shadow-none', hasOpen = false, id = '', startIcon, endIcon, tooltipText = '', tooltipPlacement = 'top-start', color = 'primary' })=>{
    _s();
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
        title: tooltipText,
        placement: tooltipPlacement,
        arrow: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
            type: type,
            color: color,
            variant: variant,
            disabled: isLoading || disabled,
            onClick: onClick,
            "aria-controls": hasOpen ? 'demo-customized-menu' : undefined,
            "aria-haspopup": "true",
            "aria-expanded": hasOpen ? 'true' : undefined,
            size: size,
            ref: buttonRef,
            startIcon: startIcon,
            endIcon: endIcon,
            sx: sx,
            id: id,
            className: className,
            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                color: "secondary",
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/ButtonWithLoading/index.tsx",
                lineNumber: 83,
                columnNumber: 22
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false)
        }, void 0, false, {
            fileName: "[project]/components/ButtonWithLoading/index.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ButtonWithLoading/index.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
};
_s(ButtonWithLoading, "PvhYvZjqGdFMi5KDqD8tkkFprO8=");
_c = ButtonWithLoading;
var _c;
__turbopack_refresh__.register(_c, "ButtonWithLoading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/styles/guideStyles.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GuidePage": (()=>GuidePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const GuidePage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.2rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  background: #0d5c63;
  height: 100vh;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/styles/activityStyles.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CardOptions": (()=>CardOptions),
    "buttonTeal": (()=>buttonTeal),
    "buttonTiffanyBlue": (()=>buttonTiffanyBlue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const buttonTiffanyBlue = {
    background: '#78CDD7',
    color: 'black',
    fontWeight: 600,
    boxShadow: 'none'
};
const buttonTeal = {
    background: '#0D5C63',
    color: 'white',
    fontWeight: 600,
    boxShadow: 'none'
};
const CardOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    shouldForwardProp: (prop)=>prop !== 'isSelected'
})`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${({ isSelected })=>isSelected ? 'black' : 'white'};
  background-color: ${({ isSelected })=>isSelected ? '#44A1A0' : '#17373a'};
  border-radius: 1rem;
  font-size: 1.2rem;
  width: 100%;
  padding: 0.5rem;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Shepherd/ShepherdTour.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ShepherdTour)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$shepherd$2e$js$2f$dist$2f$esm$2f$shepherd$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/shepherd.js/dist/esm/shepherd.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ButtonWithLoading$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ButtonWithLoading/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$activityStyles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/styles/activityStyles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
function ShepherdTour() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isTourRunning, setIsTourRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let tour;
    const handleTourEnd = ()=>{
        setIsTourRunning(false);
    };
    const initializeTour = ()=>{
        tour = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$shepherd$2e$js$2f$dist$2f$esm$2f$shepherd$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Tour({
            defaultStepOptions: {
                cancelIcon: {
                    enabled: true
                },
                classes: 'shepherd-theme-arrows',
                scrollTo: {
                    behavior: 'smooth',
                    block: 'center'
                }
            },
            useModalOverlay: true
        });
        tour.addStep({
            id: 'step-1',
            title: 'Seja bem vindo!',
            text: 'Agora vamos iniciar nosso tour pela plataforma.',
            attachTo: {
                element: '#init-guide',
                on: 'bottom'
            },
            buttons: [
                {
                    text: 'Finalizar',
                    action: tour.complete
                },
                {
                    text: 'Próximo',
                    action: ()=>{
                        tour.next();
                    }
                }
            ]
        });
        tour.addStep({
            id: 'step-2',
            title: 'Menu de EXP',
            text: 'Aqui você terá acesso à quantidade de EXP acumulada, conquistada ao concluir as atividades.',
            attachTo: {
                element: '#menu-exp',
                on: 'top'
            },
            beforeShowPromise: ()=>{
                return new Promise((resolve)=>{
                    router.push('/learn');
                    const checkElement = ()=>{
                        const element = document.querySelector('#menu-exp');
                        if (element) {
                            resolve();
                        } else {
                            setTimeout(checkElement, 100);
                        }
                    };
                    checkElement();
                });
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: ()=>{
                        router.push('guide');
                        tour.cancel();
                    }
                },
                {
                    text: 'Próximo',
                    action: tour.next
                }
            ]
        });
        tour.addStep({
            id: 'step-3',
            title: 'Suas vidas!',
            text: 'Você pode ter até 3 vidas. Para iniciar uma atividade, é necessário ter pelo menos uma. Mas não se preocupe: você pode recuperar vidas usando seu EXP ou esperar que elas recarreguem com o tempo.',
            attachTo: {
                element: '#menu-hearth',
                on: 'top'
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: tour.back
                },
                {
                    text: 'Próximo',
                    action: tour.next
                }
            ]
        });
        tour.addStep({
            id: 'step-4',
            title: 'Botão de guia',
            text: 'Aqui você terá uma explicação da plataforma e poderá iniciar o tour sempre que quiser.',
            attachTo: {
                element: '#btn-guide',
                on: 'top'
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: tour.back
                },
                {
                    text: 'Próximo',
                    action: tour.next
                }
            ]
        });
        tour.addStep({
            id: 'step-5',
            title: 'Explorando os conteúdos de SQL',
            text: 'Nesta seção, você encontrará todos os conteúdos disponíveis organizados em temas. Os itens estão apresentados em seções para facilitar a navegação e serão desbloqueados progressivamente à medida que você avança. Aproveite para explorar e consolidar seu aprendizado passo a passo!',
            attachTo: {
                element: '#list-learn',
                on: 'top'
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: tour.back
                },
                {
                    text: 'Próximo',
                    action: tour.next
                }
            ]
        });
        tour.addStep({
            id: 'step-7',
            title: 'Acesse o Ranking de usuarios',
            text: 'Este botão leva você à página de ranking, onde pode conferir a lista dos usuarios com mais experiência (EXP).',
            attachTo: {
                element: '#icon-ranking',
                on: 'top'
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: tour.back
                },
                {
                    text: 'Próximo',
                    action: tour.next
                }
            ]
        });
        tour.addStep({
            id: 'step-8',
            title: 'Descubra quem possui o melhor EXP!',
            text: 'Nesta lista, os usuários são classificados de acordo com sua experiência (EXP) e o tempo que levaram para alcançá-la. Quem conquistou mais EXP no menor tempo ocupa o topo do ranking. Confira sua posição e veja quem lidera!',
            beforeShowPromise: ()=>{
                return new Promise((resolve)=>{
                    router.push('/ranking');
                    const checkElement = ()=>{
                        const element = document.querySelector('#list-ranking');
                        if (element) {
                            resolve();
                        } else {
                            setTimeout(checkElement, 100);
                        }
                    };
                    checkElement();
                });
            },
            attachTo: {
                element: '#list-ranking',
                on: 'top'
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: tour.back
                },
                {
                    text: 'Próximo',
                    action: tour.next
                }
            ]
        });
        tour.addStep({
            id: 'step-9',
            title: 'Configurações',
            text: 'Este botão leva você à página de configurações do perfil',
            attachTo: {
                element: '#icon-profile',
                on: 'top'
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: tour.back
                },
                {
                    text: 'Próximo',
                    action: tour.next
                }
            ]
        });
        tour.addStep({
            id: 'step-10',
            title: 'Configurações',
            text: 'Aqui você tem acesso as informações do seu perfil',
            beforeShowPromise: ()=>{
                return new Promise((resolve)=>{
                    router.push('/profile');
                    const checkElement = ()=>{
                        const element = document.querySelector('#list-profile');
                        if (element) {
                            resolve();
                        } else {
                            setTimeout(checkElement, 100);
                        }
                    };
                    checkElement();
                });
            },
            attachTo: {
                element: '#list-profile',
                on: 'top'
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: tour.back
                },
                {
                    text: 'Próximo',
                    action: tour.next
                }
            ]
        });
        tour.addStep({
            id: 'step-11',
            title: 'Configurações',
            text: 'Esse botão te redireciona para a pagina de login!',
            attachTo: {
                element: '#logout',
                on: 'top'
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: tour.back
                },
                {
                    text: 'Próximo',
                    action: tour.next
                }
            ]
        });
        tour.addStep({
            id: 'step-12',
            title: 'Learn',
            text: 'Aqui você será redirecionado para a pagina learn',
            attachTo: {
                element: '#icon-home',
                on: 'top'
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: tour.back
                },
                {
                    text: 'Próximo',
                    action: tour.next
                }
            ]
        });
        tour.addStep({
            id: 'step-13',
            title: 'Parabéns! Hora de aprender!',
            text: 'Você concluiu o tour! Agora é o momento de colocar o que aprendeu em prática. Explore as lições, ganhe mais conhecimento, acumule EXP e mostre quem domina o ranking! Vamos nessa?',
            beforeShowPromise: ()=>{
                return new Promise((resolve)=>{
                    router.push('/learn');
                    const checkElement = ()=>{
                        const element = document.querySelector('#list-learn');
                        if (element) {
                            resolve();
                        } else {
                            setTimeout(checkElement, 100);
                        }
                    };
                    checkElement();
                });
            },
            attachTo: {
                element: '#list-learn',
                on: 'top'
            },
            buttons: [
                {
                    text: 'Voltar',
                    action: tour.back
                },
                {
                    text: 'Finalizar',
                    action: tour.complete
                }
            ]
        });
        handleTourEnd();
        return tour;
    };
    const startTour = ()=>{
        if (isTourRunning) return;
        setIsTourRunning(true);
        initializeTour();
        tour.start();
        tour.on('complete', handleTourEnd);
        tour.on('cancel', handleTourEnd);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ButtonWithLoading$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonWithLoading"], {
            className: "w-full",
            sx: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$activityStyles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonTiffanyBlue"],
            onClick: startTour,
            id: "init-guide",
            children: "VAMOS COMECAR"
        }, void 0, false, {
            fileName: "[project]/components/Shepherd/ShepherdTour.tsx",
            lineNumber: 358,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Shepherd/ShepherdTour.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
_s(ShepherdTour, "jhzmIsMypRQmOr05ey9xs6jGIRI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ShepherdTour;
var _c;
__turbopack_refresh__.register(_c, "ShepherdTour");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/guide/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Guide)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ButtonWithLoading$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ButtonWithLoading/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$guideStyles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/styles/guideStyles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shepherd$2f$ShepherdTour$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Shepherd/ShepherdTour.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
function Guide() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$guideStyles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuidePage"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-row items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo.png",
                        alt: "SqlOctopus",
                        width: 60,
                        height: 60
                    }, void 0, false, {
                        fileName: "[project]/app/guide/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-xl text-white",
                        children: "Ola, humano!"
                    }, void 0, false, {
                        fileName: "[project]/app/guide/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col flex-grow gap-4 text-white py-2 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Bem-vindo(a) ao SQLOctopus!"
                    }, void 0, false, {
                        fileName: "[project]/app/guide/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Neste aplicativo, você embarcará em uma jornada completa pelo mundo do SQL, desde os primeiros passos até o domínio avançado da linguagem. Ao longo do caminho, você aprenderá a:"
                    }, void 0, false, {
                        fileName: "[project]/app/guide/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Nível Fácil: Começar com consultas básicas, usando comandos como SELECT e WHERE para extrair informações essenciais dos dados."
                    }, void 0, false, {
                        fileName: "[project]/app/guide/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Nível Intermediário: Explorar junções e subconsultas, combinando dados de várias tabelas e criando consultas mais dinâmicas e complexas."
                    }, void 0, false, {
                        fileName: "[project]/app/guide/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Nível Avançado: Dominar atualizações complexas, gerenciar autorizações e configurar visões, ganhando total controle sobre o banco de dados."
                    }, void 0, false, {
                        fileName: "[project]/app/guide/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shepherd$2f$ShepherdTour$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/guide/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/learn",
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ButtonWithLoading$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonWithLoading"], {
                            className: "w-full",
                            variant: "text",
                            sx: {
                                color: 'white',
                                width: '100%',
                                textTransform: 'none',
                                fontWeight: 600
                            },
                            children: "Sair"
                        }, void 0, false, {
                            fileName: "[project]/app/guide/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/guide/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/guide/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Guide, "EmvgwIb3cHpoFpeP+WmEDbjx4y4=");
_c = Guide;
var _c;
__turbopack_refresh__.register(_c, "Guide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/guide/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_1e7fda._.js.map