/// <reference path="../.astro/types.d.ts" />
/// <reference types="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly PUBLIC_MAILER_API: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
