import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        },
        languageOptions: {
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                import: "readonly"
            }
        }
    }
];