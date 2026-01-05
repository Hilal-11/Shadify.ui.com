import type { Registry } from "./schema";

export const component: Registry = [
    {
        name: "button-01",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/lokalhost_io/buttons/button-01.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    
    {
        name: "navbar",
        type: "registry:component",
        dependencies: [""],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/lokalhost_io/navbars/navbar.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "mega-menu",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/lokalhost_io/mega_menus/mega-menu.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
            {
                path: "hooks/use-click-outside.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "pricing",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea", "tooltip"],
        files: [
            {
                path: "components/lokalhost_io/pricings/pricing.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "reviews",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/lokalhost_io/reviews/reviews.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "footer",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/lokalhost_io/footers/footer.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "forms",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/lokalhost_io/forms/forms.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "code-block",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/lokalhost_io/code_blocks/codeBlock.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-click-outside.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "cta",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/lokalhost_io/cta/cta.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "dashboard",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/dashboard/dashboard-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "tabs",
        type: "registry:component",
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/tabs/tabs.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "text-animation",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/text_animation/animated-text.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "shimmer_uis",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/shimmer_uis/shimmer-ui.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "loaders",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/loaders/loader.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "btn-06",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/button/btn-06.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-copy-to-clipboard.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "login",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/forms/login.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "signup",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/forms/signup.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "cards",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/cards/cards..tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "bento",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/bento_grids/bento.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "alert",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/alert/alert-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "accordian",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/lokalhost_io/accordians/accordian.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "input-01",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "components/lokalhost_io/inputs/input-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "input-02",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "components/lokalhost_io/inputs/input-02.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-tags.ts",
                type: "registry:hook",
            },
            {
                path: "hooks/use-click-outside.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "input-03",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "components/lokalhost_io/inputs/input-03.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-file-input.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "input-04",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "components/lokalhost_io/inputs/input-04.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "input-05",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "components/lokalhost_io/inputs/input-05.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "input-06",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "components/lokalhost_io/inputs/input-06.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "input-08",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "components/lokalhost_io/inputs/input-08.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-copy-to-clipboard.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "input-09",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["popover"],
        files: [
            {
                path: "components/lokalhost_io/inputs/input-09.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "input-10",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "components/lokalhost_io/inputs/input-10.tsx",
                type: "registry:component",
            },
        ],
    },

];
